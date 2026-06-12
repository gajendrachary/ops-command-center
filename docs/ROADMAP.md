# Roadmap — Ops Command Center

This document tracks planned features, active work, and long-term vision for the Ops Command Center project.

---

## Legend

| Symbol | Meaning |
|---|---|
| ✅ | Shipped |
| 🚧 | In progress |
| 🗓 | Planned |
| 💡 | Idea / Under consideration |

---

## v1.0 — Foundation (Current)

### Core Infrastructure
- ✅ Single-file HTML shell with sidebar navigation
- ✅ Hash-based client-side router (`#/projects`, `#/hiring`, `#/finance`, `#/incidents`)
- ✅ CSS custom properties for consistent theming
- ✅ Dark / light mode with `prefers-color-scheme` and `localStorage` persistence
- ✅ Responsive grid layout (mobile + desktop)
- ✅ Command palette (`Ctrl+K`) with fuzzy navigation

### Modules
- ✅ **Projects** — delivery table with status badges, owner, due date, budget
- ✅ **Hiring** — candidate pipeline with role, stage, rating
- ✅ **Finance** — invoice list with client, amount, paid/pending status
- ✅ **Incidents** — infra alert log with severity, status, assignee

### Developer Experience
- ✅ MIT License
- ✅ `.gitignore` for common editors and OS artifacts
- ✅ `bug_report.md` and `feature_request.md` issue templates
- ✅ `ARCHITECTURE.md` with module breakdown and data flow
- ✅ `ROADMAP.md` (this file)
- ✅ Seed data (`seed.js`) for realistic demo content

---

## v1.1 — Persistence & Interactivity

- 🗓 **localStorage CRUD** — add, edit, delete records per module without a backend
- 🗓 **Inline form modals** — click `+ New` to open a lightweight form overlay
- 🗓 **Search / filter** per module table (client-side, no server)
- 🗓 **Sort by column** on all tables
- 🗓 **KPI trend indicators** — week-over-week delta arrows on dashboard cards
- 🗓 **Toast notifications** — success/error feedback after save/delete

---

## v1.2 — Export & Reporting

- 🗓 **CSV export** per module (Projects, Finance, Hiring)
- 🗓 **Print-friendly invoice view** — formatted single-invoice PDF via browser print
- 🗓 **Dashboard summary PDF** — one-page ops snapshot for leadership review
- 🗓 **Chart widgets** — lightweight bar/donut charts using Canvas API (no chart library)

---

## v1.3 — Multi-user & Auth

- 🗓 **Supabase integration** — swap `window.OpsData` for real Postgres-backed API
- 🗓 **Supabase Auth** — email/password login, JWT session management
- 🗓 **Role-based access** — `admin` vs `viewer` roles per module
- 🗓 **Audit log** — track who changed what and when
- 🗓 **Team members module** — manage users, roles, and department assignments

---

## v2.0 — SaaS-ready

- 💡 **Multi-tenant architecture** — workspace isolation per organisation
- 💡 **Webhook integrations** — Slack alerts for new incidents or overdue invoices
- 💡 **Zapier / Make connector** — trigger ops workflows from external tools
- 💡 **Mobile PWA** — installable app with offline support via Service Worker
- 💡 **API layer** — RESTful endpoints so external tools can push/pull data
- 💡 **White-label theming** — per-tenant brand colors and logo
- 💡 **Billing module** — subscription management, usage metering, Razorpay integration

---

## Contributing

Have an idea? Open a [Feature Request](../.github/ISSUE_TEMPLATE/feature_request.md) issue.
Found a bug? Open a [Bug Report](../.github/ISSUE_TEMPLATE/bug_report.md) issue.

All contributions welcome — see [README](../README.md) for setup instructions.
