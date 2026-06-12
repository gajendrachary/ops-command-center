// Ops Command Center — App Logic
// Routing, rendering, command palette, theme toggle

(function () {
  'use strict';

  const D = window.OCC_SEED;

  // ── Helpers ──────────────────────────────────────────────────────────────

  function badge(status) {
    const map = {
      'In Progress': 'badge-blue',
      'Review': 'badge-yellow',
      'Planning': 'badge-gray',
      'Completed': 'badge-green',
      'On Hold': 'badge-gray',
      'Operational': 'badge-green',
      'Degraded': 'badge-yellow',
      'Down': 'badge-red',
      'Pending': 'badge-yellow',
      'Sent': 'badge-blue',
      'Paid': 'badge-green',
      'Overdue': 'badge-red',
      'Draft': 'badge-gray',
    };
    const cls = map[status] || 'badge-gray';
    return `<span class="badge ${cls}">${status}</span>`;
  }

  function progressBar(pct) {
    const color = pct === 100 ? '#22c55e' : pct >= 70 ? '#3b82f6' : pct >= 40 ? '#f59e0b' : '#6b7280';
    return `<div style="background:#1f2937;border-radius:999px;height:6px;width:100px;overflow:hidden;">
      <div style="background:${color};height:100%;width:${pct}%;border-radius:999px;"></div>
    </div>
    <span style="font-size:0.75rem;color:#9ca3af;margin-left:0.4rem;">${pct}%</span>`;
  }

  function kpiCards(kpis, containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = kpis.map(k => `
      <div class="kpi-card">
        <div class="kpi-label">${k.label}</div>
        <div class="kpi-value">${k.value}</div>
        <div class="kpi-delta ${k.up ? 'delta-up' : 'delta-down'}">${k.up ? '▲' : '▼'} ${k.delta}</div>
      </div>
    `).join('');
  }

  // ── Renderers ─────────────────────────────────────────────────────────────

  function renderOverview() {
    kpiCards(D.overview.kpis, 'kpi-overview');
    document.getElementById('activity-feed').innerHTML = D.overview.activity.map(a => `
      <tr><td><span class="badge badge-gray">${a.module}</span></td><td>${a.event}</td><td style="color:#6b7280;white-space:nowrap;">${a.time}</td></tr>
    `).join('');
  }

  function renderDelivery() {
    document.getElementById('delivery-table').innerHTML = D.delivery.map(p => `
      <tr>
        <td><strong>${p.project}</strong></td>
        <td>${p.client}</td>
        <td>${badge(p.status)}</td>
        <td style="color:#9ca3af;">${p.due}</td>
        <td style="display:flex;align-items:center;gap:0.25rem;padding-top:1rem;">${progressBar(p.progress)}</td>
      </tr>
    `).join('');
  }

  function renderHiring() {
    const kanban = document.getElementById('hiring-kanban');
    const stages = ['Applied', 'Screening', 'Interview', 'Offer'];
    const stageColors = { Applied: '#6b7280', Screening: '#3b82f6', Interview: '#f59e0b', Offer: '#22c55e' };
    kanban.innerHTML = stages.map(stage => {
      const candidates = D.hiring[stage] || [];
      return `
        <div class="kanban-col">
          <div class="kanban-col-title">
            <span style="color:${stageColors[stage]}">${stage}</span>
            <span style="background:#374151;color:#d1d5db;padding:0.1rem 0.4rem;border-radius:999px;font-size:0.7rem;">${candidates.length}</span>
          </div>
          ${candidates.map(c => `
            <div class="kanban-card">
              <div class="kanban-card-name">${c.name}</div>
              <div class="kanban-card-meta">${c.role}</div>
              <div class="kanban-card-meta" style="margin-top:0.25rem;">${c.date}</div>
            </div>
          `).join('')}
        </div>
      `;
    }).join('');
  }

  function renderFinance() {
    kpiCards(D.finance.kpis, 'kpi-finance');
    document.getElementById('finance-table').innerHTML = D.finance.invoices.map(inv => `
      <tr>
        <td><code style="font-size:0.8rem;">${inv.id}</code></td>
        <td>${inv.client}</td>
        <td><strong>${inv.amount}</strong></td>
        <td>${badge(inv.status)}</td>
        <td style="color:#9ca3af;">${inv.due}</td>
      </tr>
    `).join('');
  }

  function renderInfra() {
    kpiCards(D.infra.kpis, 'kpi-infra');
    document.getElementById('infra-table').innerHTML = D.infra.services.map(s => `
      <tr>
        <td><strong>${s.service}</strong></td>
        <td>${badge(s.status)}</td>
        <td style="color:#9ca3af;font-size:0.82rem;">${s.lastDeploy}</td>
        <td>${s.uptime}</td>
        <td>${s.incidents === 0 ? '<span style="color:#22c55e;">None</span>' : `<span style="color:#ef4444;">${s.incidents} open</span>`}</td>
      </tr>
    `).join('');
  }

  // ── Routing ───────────────────────────────────────────────────────────────

  const sections = ['overview', 'delivery', 'hiring', 'finance', 'infra'];
  const sectionTitles = {
    overview: 'Overview',
    delivery: 'Delivery Tracker',
    hiring: 'Hiring Pipeline',
    finance: 'Finance',
    infra: 'Infrastructure',
  };

  function navigate(section) {
    if (!sections.includes(section)) section = 'overview';
    sections.forEach(s => {
      document.getElementById(`section-${s}`).classList.toggle('active', s === section);
    });
    document.querySelectorAll('.nav-item').forEach(el => {
      el.classList.toggle('active', el.dataset.section === section);
    });
    document.getElementById('page-title').textContent = sectionTitles[section];
    window.location.hash = section;
    closePalette();
  }

  function handleHashChange() {
    const hash = window.location.hash.replace('#', '') || 'overview';
    navigate(hash);
  }

  // ── Command Palette ───────────────────────────────────────────────────────

  const paletteEl = document.getElementById('palette');
  const paletteInput = document.getElementById('palette-input');
  const paletteResults = document.getElementById('palette-results');

  const commands = sections.map((s, i) => ({
    label: sectionTitles[s],
    section: s,
    shortcut: String(i + 1),
  }));

  function renderPaletteItems(filter) {
    const filtered = filter
      ? commands.filter(c => c.label.toLowerCase().includes(filter.toLowerCase()))
      : commands;
    paletteResults.innerHTML = filtered.map(c => `
      <div class="palette-item" data-section="${c.section}">
        <span class="palette-item-icon">→</span>
        ${c.label}
        <span class="palette-shortcut">${c.shortcut}</span>
      </div>
    `).join('');
    paletteResults.querySelectorAll('.palette-item').forEach(el => {
      el.addEventListener('click', () => navigate(el.dataset.section));
    });
  }

  function openPalette() {
    paletteEl.classList.add('open');
    paletteInput.value = '';
    renderPaletteItems('');
    paletteInput.focus();
  }

  function closePalette() {
    paletteEl.classList.remove('open');
  }

  paletteInput.addEventListener('input', () => renderPaletteItems(paletteInput.value));
  paletteEl.addEventListener('click', e => { if (e.target === paletteEl) closePalette(); });

  // ── Keyboard Shortcuts ────────────────────────────────────────────────────

  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      paletteEl.classList.contains('open') ? closePalette() : openPalette();
    }
    if (e.key === 'Escape') closePalette();
    if (!e.ctrlKey && !e.metaKey && !e.altKey) {
      const num = parseInt(e.key);
      if (num >= 1 && num <= sections.length && e.target.tagName !== 'INPUT') {
        navigate(sections[num - 1]);
      }
    }
  });

  // ── Nav clicks ────────────────────────────────────────────────────────────

  document.querySelectorAll('.nav-item').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      navigate(el.dataset.section);
    });
  });

  // ── Theme Toggle ──────────────────────────────────────────────────────────

  const themeBtn = document.getElementById('theme-toggle');
  let dark = true;

  function applyTheme() {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    themeBtn.textContent = dark ? 'Light Mode' : 'Dark Mode';
  }

  themeBtn.addEventListener('click', () => {
    dark = !dark;
    applyTheme();
    localStorage.setItem('occ-theme', dark ? 'dark' : 'light');
  });

  // Restore saved theme
  const saved = localStorage.getItem('occ-theme');
  if (saved) { dark = saved === 'dark'; applyTheme(); }

  // ── Init ─────────────────────────────────────────────────────────────────

  renderOverview();
  renderDelivery();
  renderHiring();
  renderFinance();
  renderInfra();

  window.addEventListener('hashchange', handleHashChange);
  handleHashChange();

})();
