# Architecture — Ops Command Center

## Overview

Ops Command Center is a **single-file, zero-dependency** internal dashboard built with vanilla HTML, CSS, and JavaScript. It is designed to run directly in a browser without a build step, making it trivially deployable to GitHub Pages, Netlify, or any static host.

---

## File Structure

```
ops-command-center/
├── ops-command-center.html   # Entry point — entire shell UI
├── src/
│   ├── js/
│   │   └── app.js            # Routing, rendering, command palette
│   ├── styles/
│   │   └── theme.css         # CSS custom properties, dark/light mode
│   └── data/
│       └── seed.js           # In-memory sample data (projects, candidates, invoices, incidents)
├── docs/
│   ├── ARCHITECTURE.md       # This file
│   └── ROADMAP.md            # Planned features and milestones
├── .github/
│   └── ISSUE_TEMPLATE/
│       ├── bug_report.md
│       └── feature_request.md
├── .gitignore
├── LICENSE
└── README.md
```

---

## Module Breakdown

### `ops-command-center.html`
- Provides the outer chrome: sidebar nav, header, main content area.
- Loads `theme.css`, `seed.js`, and `app.js` in order.
- Uses a `<div id="app">` mount point that the JS router swaps per view.

### `src/styles/theme.css`
- Defines CSS custom properties for color, spacing, radius, shadow.
- Implements `prefers-color-scheme` dark/light auto-switching.
- Provides utility classes: `.card`, `.badge`, `.btn`, `.table`, `.grid-2`, `.grid-3`.

### `src/data/seed.js`
- Exports a global `window.OpsData` object with four collections:
  - `projects` — delivery tracking (status, owner, due date, budget)
  - `candidates` — hiring pipeline (role, stage, rating)
  - `invoices` — finance records (client, amount, status)
  - `incidents` — infra alerts (severity, status, assignee)

### `src/js/app.js`
- **Router**: Hash-based (`#/projects`, `#/hiring`, etc.) with `hashchange` listener.
- **Renderers**: One render function per module — `renderProjects()`, `renderHiring()`, `renderFinance()`, `renderIncidents()`.
- **Command Palette**: `Ctrl+K` opens a fuzzy-search overlay that navigates across modules.
- **Theme Toggle**: Persists preference to `localStorage`.
- **KPI Cards**: Dashboard home aggregates counts and totals from `OpsData`.

---

## Data Flow

```
browser load
  └─► theme.css applied
  └─► seed.js populates window.OpsData
  └─► app.js initialises router
        └─► reads current hash → calls render fn
              └─► reads OpsData → builds DOM strings → innerHTML swap
```

---

## Design Decisions

| Decision | Rationale |
|---|---|
| No framework | Zero install friction; any dev can open and edit |
| CSS custom properties | Single source of truth for theming |
| Hash routing | Works on static hosts with no server config |
| `innerHTML` rendering | Fast for small datasets; avoids VDOM complexity |
| `window.OpsData` global | Simple inter-module data sharing without bundler |
| In-memory data | Replace with API calls or localStorage for persistence |

---

## Extending the App

### Add a new module
1. Add a data array to `src/data/seed.js` under `window.OpsData`.
2. Write a `renderMyModule()` function in `src/js/app.js`.
3. Register the route in the `router()` switch statement.
4. Add a `<li>` nav link in `ops-command-center.html`.

### Add persistence
- Replace `window.OpsData` reads/writes with `localStorage.getItem/setItem`.
- Or proxy through a REST API (Supabase, Firebase, custom Express).

### Add authentication
- Wrap the router init in a token check.
- Redirect unauthenticated users to a `/login` hash route.

---

## Browser Support

Targets evergreen browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+). No polyfills required.
