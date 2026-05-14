import type { SystemCardProps } from "./SystemCard";

export const systems: Omit<SystemCardProps, "index">[] = [
  {
    status: "live",
    name: "Meta advertisement optimization engine",
    impactLine: "Campaign intelligence that keeps spend efficient as scale grows.",
    description:
      "End-to-end signals for Meta campaigns: performance ingestion, fatigue curves, and operator-ready views so growth teams act before waste compounds.",
    businessOutcome: "Tighter feedback loops between spend, creative rotation, and revenue outcomes.",
    features: [
      "Underperformer detection",
      "Fatigue analysis",
      "Retargeting workflows",
      "Automated reporting",
    ],
    stack: ["Meta Marketing API", "Python", "FastAPI", "PostgreSQL", "Analytics pipelines"],
  },
  {
    status: "live",
    name: "CRM & lead nurturing infrastructure",
    impactLine: "Pipelines that move prospects from first touch to conversion without manual glue.",
    description:
      "Structured stages, automation hooks, and integrations so sales and growth share one operational truth.",
    businessOutcome: "Higher conversion discipline and less revenue leakage between channels.",
    features: ["Lead pipelines", "Conversion workflows", "Customer lifecycle automation"],
    stack: ["REST APIs", "Webhooks", "Workflow engines", "FastAPI"],
  },
  {
    status: "building",
    name: "Conversational AI sales assistant",
    impactLine: "Business-aware Instagram assistant that mirrors strong rep judgment.",
    description:
      "Grounded responses, safe escalation paths, and sales-aware prompts so inbound social volume converts without burning team time.",
    businessOutcome: "Faster qualified replies and consistent brand voice at scale.",
    features: [
      "Business-aware Instagram AI chatbot",
      "AI-assisted customer interaction",
      "Sales-rep simulation logic",
    ],
    stack: ["LLM APIs", "RAG", "Instagram integrations", "Python"],
  },
  {
    status: "live",
    name: "Social automation system",
    impactLine: "Repeatable publishing and monitoring across social surfaces.",
    description:
      "Scheduling, content automation, and integration pipelines so campaigns stay coordinated with the rest of growth infrastructure.",
    businessOutcome: "Less manual coordination; more reliable execution cadence.",
    features: ["Scheduling workflows", "Content automation", "Social integration pipelines"],
    stack: ["Node.js / Python jobs", "Queue workers", "Platform APIs"],
  },
  {
    status: "live",
    name: "CI/CD & infrastructure layer",
    impactLine: "Modular services and pipelines that make shipping boring — in a good way.",
    description:
      "Deployment automation, environment discipline, and service boundaries that keep production changes predictable.",
    businessOutcome: "Faster safe releases and lower incident surface for revenue-critical paths.",
    features: ["Deployment pipelines", "Modular architecture", "Scalable backend services"],
    stack: ["Docker", "GitHub Actions", "Cloud deploys", "Observability"],
  },
];
