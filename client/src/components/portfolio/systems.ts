import type { SystemCardProps } from "./SystemCard";

export const systems: Omit<SystemCardProps, "index">[] = [
  {
    status: "live",
    name: "Sociovia CRM & Smart Funnel Builder",
    impactLine: "The core of how the platform tracks leads and customers.",
    description:
      "Built roughly 70% of the CRM and the Smart Funnel Builder as the first technical hire, from pipeline stages to the automation that moves leads through them.",
    businessOutcome: "One place for leads and customers, with fewer handoffs dropped between channels.",
    features: ["Lead & customer management", "Smart Funnel Builder", "Pipeline automation"],
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis", "React"],
  },
  {
    status: "live",
    name: "AdOptimizer & multi-platform ads",
    impactLine: "Ad automation across every channel the team runs on.",
    description:
      "AI-driven ad optimization plus integrations for Meta (Marketing API + Conversion API), Instagram, WhatsApp, Google, LinkedIn, X, and Reddit, so campaigns run from one place.",
    businessOutcome: "Less manual campaign work and faster reaction to what's performing.",
    features: ["AI ad optimization", "Meta Marketing API + CAPI", "7-platform ad integrations"],
    stack: ["Meta Marketing API", "Conversion API", "Python", "FastAPI", "Platform APIs"],
  },
  {
    status: "live",
    name: "Sociopilot — AI copilots & agents",
    impactLine: "Agentic workflows that handle multi-step marketing work.",
    description:
      "AI copilots and autonomous agent workflows for marketing operations, with grounded, RAG-based answers and clear checkpoints where a human steps in.",
    businessOutcome: "Routine, multi-step work runs on its own without losing oversight.",
    features: ["AI copilots", "Agentic workflows", "RAG + contextual retrieval"],
    stack: ["LLM APIs", "RAG", "Gemini", "Python"],
  },
  {
    status: "live",
    name: "SocioChat — WhatsApp & conversational AI",
    impactLine: "Conversations and messaging automation on WhatsApp.",
    description:
      "WhatsApp automation and conversational AI that answer inbound messages and route them where they need to go, built into the rest of the platform.",
    businessOutcome: "Faster replies and less manual message handling.",
    features: ["WhatsApp automation", "Conversational AI", "Message routing"],
    stack: ["WhatsApp API", "LLM APIs", "Node.js / Python", "Webhooks"],
  },
  {
    status: "live",
    name: "Spectrum — ERP & pricing automation",
    impactLine: "Costing and pricing that used to be done by hand, automated.",
    description:
      "BOM-based raw-material and packaging cost calculations wired into product pricing. Loaded 519 raw-material rates and auto-priced 968 products with an RM + PM + markup model.",
    businessOutcome: "Consistent, repeatable pricing across the catalog.",
    features: ["968 products auto-priced", "519 raw-material rates", "BOM-based costing"],
    stack: ["JavaScript", "Firebase", "ERP integration", "APIs"],
  },
];
