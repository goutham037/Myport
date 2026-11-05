import type { SystemCardProps } from "./SystemCard";

export const systems: Omit<SystemCardProps, "index">[] = [
  {
    status: "live",
    name: "Meta advertisement optimization engine",
    impactLine: "Keeps Meta ad spend efficient as campaigns scale.",
    description:
      "Pulls Meta campaign performance, flags creative fatigue, and gives the growth team clear views so they can cut waste before it adds up.",
    businessOutcome: "Faster feedback between spend, creative changes, and results.",
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
    impactLine: "Moves leads from first contact to conversion without manual busywork.",
    description:
      "Defined pipeline stages, automation hooks, and integrations so sales and growth work from the same data.",
    businessOutcome: "Better conversion follow-through and fewer leads slipping through the cracks.",
    features: ["Lead pipelines", "Conversion workflows", "Customer lifecycle automation"],
    stack: ["REST APIs", "Webhooks", "Workflow engines", "FastAPI"],
  },
  {
    status: "building",
    name: "Conversational AI sales assistant",
    impactLine: "An Instagram assistant that answers inbound leads the way a good rep would.",
    description:
      "Grounded replies, a clean handoff to a human when it's needed, and prompts tuned for sales, so social DMs convert without eating the team's time.",
    businessOutcome: "Quicker replies to qualified leads and a consistent brand voice.",
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
    impactLine: "Scheduling and monitoring across social accounts, handled automatically.",
    description:
      "Scheduling, content automation, and integrations that keep campaigns in step with the rest of the stack.",
    businessOutcome: "Less manual coordination and a steadier posting cadence.",
    features: ["Scheduling workflows", "Content automation", "Social integration pipelines"],
    stack: ["Node.js / Python jobs", "Queue workers", "Platform APIs"],
  },
  {
    status: "live",
    name: "CI/CD & infrastructure layer",
    impactLine: "Deploys that are predictable and boring, which is the whole point.",
    description:
      "Deployment automation, clean environments, and clear service boundaries so pushing to production doesn't break things.",
    businessOutcome: "Faster, safer releases on the paths that touch revenue.",
    features: ["Deployment pipelines", "Modular architecture", "Scalable backend services"],
    stack: ["Docker", "GitHub Actions", "Cloud deploys", "Observability"],
  },
];
