/**
 * Design blueprint — canonical copy + structure for the portfolio and /spec page.
 * Reference throughout builds: theme, section order, and messaging.
 */
export const DESIGN_SPEC = {
  brand: {
    name: "Sharan Goutham",
    /** One-line brand lockup shown in hero / nav */
    lockup: "First technical hire · Sociovia",
    role: "Lead AI Developer · Sociovia",
    tagline:
      "I build the production systems a growth team runs on — the backends, the data, the assistants, and the glue between them.",
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
      "I'm a computer-science undergrad and the first technical hire at Sociovia, an AI growth startup. Most of what I do is take a feature from a rough first cut to something that holds up in production — and stay on it after launch day.",
      "Day to day that's backends in Python and Node, Postgres and the data paths around it, CRM and follow-up flows, ad integrations, and the AI assistants on top. I care about clear boundaries between the data, the automation, and the people using it, so nothing falls over when traffic or ad spend spikes.",
      "Outside work I build in the open — scrapers, MCP servers, RAG assistants — and write the real ones up as proper case studies. I'd rather ship something people depend on and learn from how it breaks than demo something that only works once.",
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
    metaTitle: "Sharan Goutham — Software Engineer",
    metaDescription:
      "First technical hire at Sociovia. I build and ship production systems: backends in Python and Node, data pipelines, CRM and ad automation, and the AI assistants on top.",
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
