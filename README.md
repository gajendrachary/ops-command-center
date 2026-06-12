# Ops Command Center

> A GitHub-ready, zero-dependency founder/operator internal dashboard starter for **DevHorizon-style** teams managing delivery, hiring, finance, and infrastructure — all in one place.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
![Vanilla JS](https://img.shields.io/badge/Built%20With-Vanilla%20JS-f0db4f)

---

## What Is This?

Ops Command Center is a **single-file-first, modular starter** for building internal founder dashboards. It ships with four operational modules:

| Module | Purpose |
|---|---|
| **Delivery** | Track client projects, milestones, and delivery status |
| **Hiring** | Pipeline of candidates across stages |
| **Finance** | Revenue, invoices, and burn visibility |
| **Infrastructure** | Service uptime, incidents, and deployment status |

No React. No Webpack. No build step. Open the HTML file and it works.

---

## Project Structure

```
ops-command-center/
├── ops-command-center.html      # Main app shell (open this in browser)
├── src/
│   ├── data/
│   │   └── seed.js              # Starter seed data for all modules
│   ├── js/
│   │   └── app.js               # Routing, state, and interaction logic
│   └── styles/
│       └── theme.css            # CSS custom properties and theme tokens
├── docs/
│   ├── ARCHITECTURE.md          # System design notes
│   └── ROADMAP.md               # Planned features and evolution path
├── .github/
│   └── ISSUE_TEMPLATE/
│       ├── bug_report.md        # Bug report template
│       └── feature_request.md  # Feature request template
├── .gitignore
├── LICENSE
└── README.md
```

---

## Quick Start

```bash
# Clone the repository
git clone https://github.com/gajendrachary/ops-command-center.git
cd ops-command-center

# Open in browser (no install needed)
open ops-command-center.html
# Or on Linux:
xdg-open ops-command-center.html
# Or on Windows:
start ops-command-center.html
```

That's it. No `npm install`. No environment setup.

---

## Features

- **Executive Overview** — KPI summary cards across all modules
- **Delivery Tracker** — Project list with status badges, deadlines, and client names
- **Hiring Pipeline** — Candidate cards across Applied / Screening / Interview / Offer stages
- **Finance Panel** — Revenue vs target, invoice status, burn rate
- **Infrastructure Monitor** — Service health, last deploy time, open incidents
- **Hash-based Routing** — Deep-linkable sections via `#delivery`, `#hiring`, `#finance`, `#infra`
- **Command Palette** — Press `Ctrl+K` / `Cmd+K` to jump between sections
- **Dark Mode** — System preference detected, toggle available
- **Responsive Layout** — Works on mobile, tablet, and desktop
- **Seed Data** — Realistic dummy data for all modules to demo immediately

---

## Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl+K` / `Cmd+K` | Open command palette |
| `Esc` | Close command palette / modal |
| `1` | Go to Overview |
| `2` | Go to Delivery |
| `3` | Go to Hiring |
| `4` | Go to Finance |
| `5` | Go to Infrastructure |

---

## Upgrading to a Framework

When you're ready to move beyond the static file:

1. **React / Next.js** — Each module maps to a page/route, seed data becomes API calls
2. **Vue 3** — Drop the module JS into composables, use `vue-router` for hash routing
3. **Supabase backend** — Replace seed arrays with real-time Supabase queries
4. **Tailwind CSS** — Replace `theme.css` custom properties with Tailwind utility classes

See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for migration guidance.

---

## Roadmap

- [ ] CSV export for each module
- [ ] Filterable tables with search
- [ ] Chart.js integration for revenue and delivery trends
- [ ] API adapter layer for Supabase / Firebase
- [ ] React/Next.js port in `packages/web`
- [ ] Notification center
- [ ] Role-based view (founder vs team member)

See [`docs/ROADMAP.md`](docs/ROADMAP.md) for full details.

---

## Contributing

PRs are welcome. Please open an issue first to discuss what you'd like to change.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## License

[MIT](LICENSE) — built by [gajendrachary](https://github.com/gajendrachary) at **DevHorizon Technologies**.
