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
      "Practical",
      "Systems-first",
      "Detail-oriented",
      "Ships and iterates",
      "Fast without the chaos",
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
    "About",
    "Systems built",
    "Projects",
    "Experience",
    "Core expertise",
    "Contact",
  ],
  about: {
    paragraphs: [
      "I build systems that keep working after launch day. That comes down to clear boundaries between the data, the automation, and the people using it, so nothing falls over when traffic or ad spend spikes.",
      "Most of my time goes to ad analytics, CRM and follow-up flows, chat assistants, and the Python and Node services behind them.",
      "At Sociovia I take features from a rough first cut to something stable in production, and I stay on them the whole way.",
    ],
  },
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
      eyebrow: "At Sociovia",
      title: "Systems built",
      subtitle:
        "The systems I work on at Sociovia. Each one covers what it does, why it matters to the business, and what it's built with.",
    },
    experience: {
      eyebrow: "Now",
      title: "Sociovia — lead builder",
      cardSubtitle: "Working across the growth stack: experiments, automation, and the services underneath.",
    },
    expertise: {
      eyebrow: "Ownership map",
      title: "Disciplines in rotation",
      subtitle: "What I reach for when the problem is fuzzy but the bar for production isn’t.",
    },
    contact: {
      eyebrow: "Reach",
      title: "Start a thread",
      subtitle:
        "If you’re hiring, collaborating, or comparing notes — send role, stack, and timeline. I read everything.",
    },
    footerPitch:
      "I build AI and growth systems at Sociovia, and ship side projects across AI, web, and mobile.",
    footerLegal: "Built and maintained by me.",
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
