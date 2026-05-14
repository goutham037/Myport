/**
 * Design blueprint — canonical copy + structure for the portfolio and /spec page.
 * Reference throughout builds: theme, section order, and messaging.
 */
export const DESIGN_SPEC = {
  brand: {
    name: "Sharan Goutham",
    /** One-line brand lockup shown in hero / nav */
    lockup: "Sociovia · AI & growth engineering",
    role: "Lead AI Developer · Sociovia",
    tagline:
      "I ship production systems where ads data, CRM state, assistants, and backend services meet — so growth teams move faster with fewer fragile handoffs.",
    personality: [
      "Operator-minded",
      "Systems-first",
      "Quietly premium",
      "Evidence in the build",
      "Founder-speed without chaos",
    ],
  },
  colors: {
    /** Indigo-led primary (pairs with cyan accent) */
    primary: "#4F46E5",
    primaryLegacy: "#2563EB",
    accent: "#06B6D4",
    background: "#FFFFFF",
    section: "#F8FAFC",
    text: "#0F172A",
    textMuted: "#475569",
    border: "#E2E8F0",
  },
  typography: {
    headings: "Sora",
    body: "Inter",
  },
  sectionOrder: [
    "Hero",
    "Trust metrics",
    "About",
    "Systems built",
    "Experience",
    "Core expertise",
    "Currently building",
    "Recognition",
    "Contact",
  ],
  trustMetrics: [
    "Paid social: ingestion → fatigue → retargeting in one loop",
    "CRM & lifecycle automation wired to revenue, not vanity KPIs",
    "CI/CD and service boundaries that keep releases boring",
    "Assistants and agents scoped, grounded, and safe to scale",
    "Hands-on core of a revenue-bearing product org",
  ],
  about: {
    paragraphs: [
      "I treat growth engineering like reliability engineering: clear contracts between data, automation, and humans — so the system keeps working when traffic and spend spike.",
      "Most of my time goes to ads intelligence, CRM and nurture flows, conversational surfaces, and the Python/Node services and pipelines behind them.",
      "At Sociovia I own slices of the stack end-to-end: from MVP spikes to the guardrails that keep production calm.",
    ],
  },
  currentlyBuilding: [
    "Deeper Google Ads ecosystem wiring (signals, budgets, experiments)",
    "Business-aware assistants with escalation and audit trails",
    "Cross-channel automation that respects rate limits and data residency",
    "Operator dashboards that answer “what changed?” in one glance",
  ],
  coreExpertise: [
    "LLM productization",
    "Python & FastAPI services",
    "Workflow & queue automation",
    "Ads & attribution surfaces",
    "CRM & lifecycle design",
    "API integrations & webhooks",
    "Postgres & analytics paths",
    "Docker / GitHub Actions",
    "System & MVP architecture",
    "Technical writing for handoff",
  ],
  recognition: {
    quote:
      "Internally recognized as “System Pillar” for owning foundational paths — the parts of the platform other teams stand on every day.",
  },
  /** Section chrome, meta, hero CTAs, and hero visual copy — single source for home + components */
  page: {
    metaTitle: "Sharan · Lead AI Developer — Sociovia (growth systems)",
    metaDescription:
      "Production AI and growth infrastructure: paid social intelligence, CRM automation, assistants, and dependable backends — built at Sociovia.",
    trustStripTitle: "Where the work shows up",
    about: {
      eyebrow: "Profile",
      title: "Reliability for growth teams",
    },
    systems: {
      eyebrow: "Shipped surface area",
      title: "Systems you can trace",
      subtitle:
        "Not a trophy wall — each block is a real lane of ownership: scope, how it hits the business, and what actually runs in prod.",
    },
    experience: {
      eyebrow: "Now",
      title: "Sociovia — lead builder",
      cardSubtitle: "End-to-end delivery on the growth stack: experiments, automation, and the services underneath.",
    },
    expertise: {
      eyebrow: "Ownership map",
      title: "Disciplines in rotation",
      subtitle: "What I reach for when the problem is fuzzy but the bar for production isn’t.",
    },
    building: {
      eyebrow: "Next",
      title: "On the bench",
    },
    recognition: {
      eyebrow: "Peers",
      title: "Signal from the org",
      footer: "Internal recognition · Sociovia",
    },
    contact: {
      eyebrow: "Reach",
      title: "Start a thread",
      subtitle:
        "If you’re hiring, collaborating, or comparing notes — send role, stack, and timeline. I read everything.",
    },
    footerPitch:
      "Production-grade growth systems — opinionated interfaces, boring deploys, and traces you can trust.",
    footerLegal: "Built for signal, not noise.",
    heroCtas: {
      systems: "Explore systems",
      resume: "Résumé (email)",
      contact: "Contact",
    },
    heroExplore: "Continue",
  },
  heroVisual: {
    stackTitle: "Execution layer",
    liveLabel: "Live",
    gridLabels: ["Paid social", "CRM", "Assistants", "Services"],
    gridSub: "Composable tracks",
    terminalTitle: "Prod invariants",
    terminalLines: ["pipelines · observable", "releases · reversible", "agents · bounded"],
  },
  uiPrinciples: {
    use: [
      "Soft shadows",
      "Rounded cards",
      "Large spacing",
      "Clean grids",
      "Smooth hover animations",
      "Premium white-space-heavy layouts",
    ],
    avoid: [
      "Overly dark cyberpunk themes",
      "Excessive gradients",
      "Too many floating particles",
      "Generic portfolio templates",
      "Gaming-style UI",
    ],
  },
  animation: [
    "Smooth fade transitions",
    "Slight card elevation on hover",
    "Soft gradient motion",
    "Subtle scroll reveals",
  ],
  brandGoal:
    "Visitors should leave thinking: this person ships production growth systems — the kind you’d trust next to revenue — not weekend experiments.",
} as const;
