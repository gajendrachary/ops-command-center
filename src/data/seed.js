// Ops Command Center — Seed Data
// Replace these arrays with real API calls when upgrading to a backend

window.OCC_SEED = {
  overview: {
    kpis: [
      { label: 'Active Projects', value: '8', delta: '+2 this month', up: true },
      { label: 'Open Positions', value: '5', delta: '3 in final round', up: true },
      { label: 'MRR', value: '₹2.4L', delta: '+18% MoM', up: true },
      { label: 'Infra Uptime', value: '99.7%', delta: '1 open incident', up: false }
    ],
    activity: [
      { module: 'Delivery', event: 'JZ Green Heaven portal — milestone 3 completed', time: '2h ago' },
      { module: 'Hiring', event: 'Priya Nair moved to Interview stage (Full Stack)', time: '4h ago' },
      { module: 'Finance', event: 'INV-2024-019 paid by Skanda Cloud Kitchen', time: '6h ago' },
      { module: 'Infra', event: 'API Gateway deployed v2.4.1 to production', time: '1d ago' },
      { module: 'Hiring', event: 'New application: Rahul Mehta (React Developer)', time: '1d ago' },
      { module: 'Delivery', event: 'Sahasra Business Solutions — kickoff meeting scheduled', time: '2d ago' }
    ]
  },

  delivery: [
    { project: 'JZ Green Heaven Portal', client: 'JZ Green Heaven', status: 'In Progress', due: '2024-07-30', progress: 65 },
    { project: 'Skanda Billing v2', client: 'Skanda Cloud Kitchen', status: 'Review', due: '2024-07-15', progress: 90 },
    { project: 'Sahasra Business Website', client: 'Sahasra Business Solutions', status: 'Planning', due: '2024-08-20', progress: 15 },
    { project: 'DevHorizon SaaS Dashboard', client: 'Internal', status: 'In Progress', due: '2024-09-01', progress: 40 },
    { project: 'Sri Kenchamba E-Commerce', client: 'Sri Kenchamba Ceramics', status: 'Completed', due: '2024-06-30', progress: 100 },
    { project: 'Golden Sphere Web Revamp', client: 'Golden Sphere', status: 'On Hold', due: '2024-08-10', progress: 30 },
    { project: 'Mobile App — Client Portal', client: 'Internal', status: 'Planning', due: '2024-10-01', progress: 5 },
    { project: 'Razorpay Integration Module', client: 'Multi-client', status: 'In Progress', due: '2024-07-20', progress: 70 }
  ],

  hiring: {
    Applied: [
      { name: 'Rahul Mehta', role: 'React Developer', date: '2024-07-10' },
      { name: 'Anjali Singh', role: 'UI/UX Designer', date: '2024-07-09' },
      { name: 'Karthik Rao', role: 'Python Backend', date: '2024-07-08' }
    ],
    Screening: [
      { name: 'Sneha Patel', role: 'Full Stack Developer', date: '2024-07-07' },
      { name: 'Vikram Desai', role: 'DevOps Engineer', date: '2024-07-06' }
    ],
    Interview: [
      { name: 'Priya Nair', role: 'Full Stack Developer', date: '2024-07-05' },
      { name: 'Arjun Kumar', role: 'Android Developer', date: '2024-07-04' }
    ],
    Offer: [
      { name: 'Deepa Iyer', role: 'QA Engineer', date: '2024-07-03' }
    ]
  },

  finance: {
    kpis: [
      { label: 'MRR', value: '₹2.4L', delta: '+18% MoM', up: true },
      { label: 'ARR', value: '₹28.8L', delta: 'On track', up: true },
      { label: 'Burn Rate', value: '₹1.1L/mo', delta: '-5% vs last', up: true },
      { label: 'Runway', value: '14 months', delta: 'Stable', up: true },
      { label: 'Outstanding', value: '₹3.2L', delta: '4 invoices', up: false }
    ],
    invoices: [
      { id: 'INV-2024-021', client: 'JZ Green Heaven', amount: '₹75,000', status: 'Pending', due: '2024-07-31' },
      { id: 'INV-2024-020', client: 'Sahasra Business Solutions', amount: '₹45,000', status: 'Sent', due: '2024-07-25' },
      { id: 'INV-2024-019', client: 'Skanda Cloud Kitchen', amount: '₹60,000', status: 'Paid', due: '2024-07-10' },
      { id: 'INV-2024-018', client: 'Golden Sphere', amount: '₹30,000', status: 'Overdue', due: '2024-06-30' },
      { id: 'INV-2024-017', client: 'Sri Kenchamba Ceramics', amount: '₹50,000', status: 'Paid', due: '2024-06-20' },
      { id: 'INV-2024-016', client: 'Internal — SaaS', amount: '₹0', status: 'Draft', due: '—' }
    ]
  },

  infra: {
    kpis: [
      { label: 'Overall Uptime', value: '99.7%', delta: 'Last 30 days', up: true },
      { label: 'Open Incidents', value: '1', delta: 'P2 — API latency', up: false },
      { label: 'Deployments', value: '24', delta: 'This month', up: true },
      { label: 'Avg Deploy Time', value: '4.2 min', delta: '-0.8 min vs last', up: true }
    ],
    services: [
      { service: 'Production API (GCP)', status: 'Operational', lastDeploy: '2024-07-11 14:22', uptime: '99.9%', incidents: 0 },
      { service: 'Staging API', status: 'Operational', lastDeploy: '2024-07-11 10:05', uptime: '99.5%', incidents: 0 },
      { service: 'PostgreSQL (Cloud SQL)', status: 'Operational', lastDeploy: '2024-07-08 09:00', uptime: '100%', incidents: 0 },
      { service: 'Redis Cache', status: 'Degraded', lastDeploy: '2024-07-10 16:30', uptime: '97.2%', incidents: 1 },
      { service: 'CDN (Cloudflare)', status: 'Operational', lastDeploy: '—', uptime: '100%', incidents: 0 },
      { service: 'CI/CD Pipeline', status: 'Operational', lastDeploy: '2024-07-11 15:00', uptime: '99.1%', incidents: 0 },
      { service: 'Email Service (Zoho)', status: 'Operational', lastDeploy: '—', uptime: '99.8%', incidents: 0 }
    ]
  }
};
