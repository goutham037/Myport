/**
 * Spectrum ERP Automation — Prism — immersive case study content.
 * A multi-chapter story: overview → the platform → engineering → outcomes.
 */
import {
  Database,
  Bell,
  CalendarClock,
  Sparkles,
  Calculator,
  ClipboardList,
  Phone,
  ListChecks,
  type LucideIcon,
} from "lucide-react";

export type Chapter = {
  n: string;
  slug: string;
  path: string;
  label: string;
  kicker: string;
};

export const CHAPTERS: Chapter[] = [
  { n: "01", slug: "overview", path: "/projects/spectrum-erp", label: "Overview", kicker: "The toll & the fix" },
  { n: "02", slug: "platform", path: "/projects/spectrum-erp/platform", label: "The Platform", kicker: "8 systems, one backbone" },
  { n: "03", slug: "engineering", path: "/projects/spectrum-erp/engineering", label: "Engineering", kicker: "How Prism answers" },
  { n: "04", slug: "outcomes", path: "/projects/spectrum-erp/outcomes", label: "Outcomes", kicker: "What it proves" },
];

/** The Prism rainbow — pulled from the brand mark (green → cyan → blue → violet → magenta → amber). */
export const PRISM_GRADIENT =
  "linear-gradient(120deg, #22c55e 0%, #0ea5e9 24%, #6366f1 46%, #a855f7 64%, #ec4899 82%, #f59e0b 100%)";

export const LOGO = "/projects/spectrum/prism-logo.webp";

/** Headline stats. `display` renders verbatim (non-countable); otherwise CountUp animates value. */
export type Stat = {
  value?: number;
  prefix?: string;
  suffix?: string;
  display?: string;
  label: string;
  sub: string;
};

export const STATS: Stat[] = [
  { value: 12, prefix: "₹", suffix: "L/yr", label: "Vendor API fee avoided", sub: "was ₹1L / month" },
  { display: "24×7", label: "Automated follow-ups", sub: "WhatsApp alerts" },
  { value: 36, label: "Assistant tools", sub: "role-scoped RAG" },
  { value: 11, label: "ERP domains", sub: "synced daily" },
  { value: 5, label: "Access roles", sub: "knowledge-scoped" },
  { value: 26, prefix: "~", suffix: "K", label: "Lines of code", sub: "across 121 files" },
];

/** The eight systems, one data backbone. */
export type System = {
  icon: LucideIcon;
  name: string;
  tag: string;
  body: string;
};

export const SYSTEMS: System[] = [
  {
    icon: Database,
    name: "Scraper suite",
    tag: "Replaced the ₹1L API",
    body: "Playwright robots log into the ERP, export every XLSX report and capture the dashboard's own JSON — surviving start-up popups, required fields and EJ2 dropdowns. This replaced the ₹1L/month API outright.",
  },
  {
    icon: Bell,
    name: "24×7 alert engine",
    tag: "Paid for itself",
    body: "WhatsApp, via Sociovia, pushes per-stage production updates, per-supplier delayed and pending PO reminders, and daily productivity summaries — plus a failsafe alert if a sync ever goes silent.",
  },
  {
    icon: CalendarClock,
    name: "Scheduled pipeline",
    tag: "Fresh before work",
    body: "APScheduler ingests 11 ERP domains on a staggered 6:00–6:30 AM refresh, with a snapshot-per-run model so a corrected total simply falls out of “current” without deletes.",
  },
  {
    icon: Sparkles,
    name: "Prism — AI assistant",
    tag: "36 tools · 5 roles",
    body: "A role-based RAG chatbot with 36 tools over 10+ data domains. It never writes SQL from the model — it picks typed tools by cosine similarity, runs real aggregates, and answers in Markdown, ₹ Cr/L, charts and voice. Guarded by a golden-set eval.",
  },
  {
    icon: Calculator,
    name: "Rate Sheet engine",
    tag: "Pricing, automated",
    body: "A cost + selling-price grid built from the Bill-of-Materials, with a server-to-server Quick Quote API the on-prem CRM calls to price a party + product + pack instantly.",
  },
  {
    icon: ClipboardList,
    name: "Dynamic Forms",
    tag: "Self-serve capture",
    body: "Admin-built product-detail forms with a shareable client link, a scoped forms-manager login, and full response tooling: lock-after-submit, search, status and print.",
  },
  {
    icon: Phone,
    name: "AI voice agents",
    tag: "It makes the calls",
    body: "Sarvam AI calls suppliers daily about their most-delayed POs in Hinglish. A two-way API feeds the agent the dues and takes the spoken answers back — transcribed, extracted into status + revised date, and posted to the system.",
  },
  {
    icon: ListChecks,
    name: "Internal CRM",
    tag: "Backend is the CRM",
    body: "A follow-up board built entirely in the backend — each delayed PO becomes a trackable record (stage, owner, priority, timeline) that the voice calls populate automatically. No external CRM, no dependency.",
  },
];

/** The technical architecture, rebuilt natively as a layered stack. */
export type ArchLayer = {
  name: string;
  items: string[];
  accent: string;
};

export const ARCH_LAYERS: ArchLayer[] = [
  { name: "Data sources", items: ["CBO / myreporting ERP", "XLSX report exports", "Dashboard JSON"], accent: "#22c55e" },
  { name: "Ingestion layer", items: ["Playwright scrapers", "APScheduler 6:00–6:30 AM", "Snapshot per run"], accent: "#0ea5e9" },
  { name: "Database layer", items: ["PostgreSQL on AWS RDS", "11 ERP domains", "Current + history, no deletes"], accent: "#6366f1" },
  { name: "Prism AI engine", items: ["Embedding tool-retrieval", "36 typed tools", "LiteLLM gateway", "Golden-set eval"], accent: "#a855f7" },
  { name: "Output layer", items: ["Markdown + ₹ Cr/L", "In-reply charts", "Spoken answers"], accent: "#ec4899" },
  { name: "User access", items: ["5 roles, knowledge-scoped", "Web chat + WhatsApp", "On-prem CRM API"], accent: "#f59e0b" },
];

/** The Ask → Act flow. */
export type FlowStep = {
  step: string;
  body: string;
};

export const FLOW: FlowStep[] = [
  { step: "Ask", body: "Someone asks in plain language — “top 10 overdue parties this month” — from web chat, WhatsApp, or a voice call." },
  { step: "Retrieve", body: "Prism embeds the question and picks the right typed tools by cosine similarity. No SQL is ever written by the model." },
  { step: "Analyze", body: "The chosen tools run real aggregates against the morning's Postgres snapshot, scoped to the caller's role." },
  { step: "Compose", body: "Answers come back as Markdown with ₹ Cr/L figures formatted server-side, in-reply charts, and a spoken summary." },
  { step: "Act", body: "The same engine places supplier calls, fires WhatsApp follow-ups, and updates the internal CRM — no human in the loop." },
];

/** What makes the Prism engine trustworthy — the design principles. */
export const ENGINE = [
  {
    title: "Tools, never raw SQL",
    body: "The model never writes a query. It selects from 36 typed, hand-written tools that run vetted aggregates — so an answer can be wrong about intent, but never about the math or the schema.",
  },
  {
    title: "Embedding-based tool retrieval",
    body: "With dozens of tools, stuffing every signature into the prompt is noise. Prism embeds the question and retrieves the closest tools by cosine similarity, then calls only those.",
  },
  {
    title: "Money is computed server-side",
    body: "Every rupee figure is pre-formatted into a *_fmt string on the server and the model is told to quote it verbatim — never to do magnitude math itself. That one rule killed the 10× crore/lakh bug.",
  },
  {
    title: "Guarded by a golden-set eval",
    body: "A fixed set of questions with known-correct answers runs against Prism on every change. Regressions in tool choice or totals are caught before they reach a user, not after.",
  },
  {
    title: "Roles scoped in code",
    body: "Five roles each see a different slice of the data. The scope is enforced in the tools themselves and verified by eval — not hidden in the UI where a crafted prompt could walk around it.",
  },
];

/** The engineering challenges — the bugs worth remembering. */
export type Bug = {
  n: string;
  title: string;
  problem: string;
  fix: string;
  tag: string;
};

export const BUGS: Bug[] = [
  {
    n: "01",
    title: "The 10× money bug",
    problem: "The model kept converting crore/lakh wrong — reporting ₹77.2 L for a real ₹7.72 Cr. A single misplaced magnitude turns a right answer into a dangerous one.",
    fix: "Compute every rupee figure server-side into a pre-formatted *_fmt field and instruct the model to quote it verbatim, never doing magnitude math itself.",
    tag: "₹77.2 L → ₹7.72 Cr",
  },
  {
    n: "02",
    title: "Purchases double-counted",
    problem: "The Purchase Register total came out at ₹58.30 Cr — exactly double. A blank grand-total footer row carried the full total and was being summed in with the line items.",
    fix: "Skip rows with no document number. That dropped the footer out of the sum and corrected the total to ₹29.15 Cr.",
    tag: "₹58.30 Cr → ₹29.15 Cr",
  },
  {
    n: "03",
    title: "UTC vs IST timestamps",
    problem: "Chats showed times about 5.5 hours off. The database stores UTC naive, and the API sent no timezone marker, so the client guessed wrong.",
    fix: "Serialize timestamps as explicit UTC and format them in Asia/Kolkata on the client. No more silent 5:30 drift.",
    tag: "−5:30 drift",
  },
  {
    n: "04",
    title: "The build that wiped the rate sheet",
    problem: "Two React apps share one Firebase site. Running npm run build on the main app silently cleared dist/ratesheet, 404-ing the rate sheet after every single deploy.",
    fix: "Rebuild the rate sheet and copy it back into the dist before shipping — a deploy step, not a code change.",
    tag: "404 after every deploy",
  },
  {
    n: "05",
    title: "Every voice call overwrote the last",
    problem: "The voice tool posted its request template literally — the same call_ref “call_id” each time — so each call replaced the previous row and showed placeholder text.",
    fix: "Strip the template literals, mint a unique ref per call, and extract the real products, statuses and dates from the call summary with an LLM.",
    tag: "1 row for every call",
  },
  {
    n: "06",
    title: "CBO strings overflowing columns",
    problem: "ERP exports routinely overran VARCHAR limits — concatenated joining dates, long period strings. A silent truncation is a corrupted record.",
    fix: "A discipline, not a patch: widen columns generously and always skip the footer / grand-total row — the root of more than one double-count.",
    tag: "widen + skip the footer",
  },
];

/** The build timeline — foundation to voice agents. */
export type Phase = {
  tag: string;
  title: string;
  date: string;
  what: string;
  points: string[];
  accent: string;
};

export const PHASES: Phase[] = [
  {
    tag: "Phase 0",
    title: "The automation foundation",
    date: "before the repo",
    what: "The core that made everything possible, built and running before the first commit — then pushed in bundled with the Rate Sheet.",
    points: [
      "Playwright scrapers replacing the ₹1L/month ERP API",
      "24×7 WhatsApp follow-ups for production stages",
      "Supplier PO alerts and admin productivity summaries",
    ],
    accent: "#22c55e",
  },
  {
    tag: "Phase 1",
    title: "Platform & operations hardening",
    date: "5–14 Nov",
    what: "The initial push, then refinement into a dependable daily operation.",
    points: [
      "Rate Sheet app + Quick Quote API for the on-prem CRM",
      "Dosage/form-first summaries, per-job WhatsApp retrigger, sync-failure alerts",
      "Dynamic custom Forms module with a scoped forms-manager login",
      "Split supplier alerts — delayed at 9 AM, pending at noon",
    ],
    accent: "#0ea5e9",
  },
  {
    tag: "Phase 2",
    title: "Prism — the AI assistant",
    date: "18–19 Nov",
    what: "A role-based assistant grown across every commercial and operational domain in two days.",
    points: [
      "RAG tool-retrieval: sales, stock, receivables, SFA, GST, order book, leaderboards",
      "ChatGPT-style full-page chat, saved conversations, in-reply charts, voice input",
      "Shipped as “Spectrum AI”, renamed Prism the same day",
      "Golden-set eval, audit logging, admin monitoring",
    ],
    accent: "#a855f7",
  },
  {
    tag: "Phase 3",
    title: "Voice agents & internal CRM",
    date: "19 Nov",
    what: "The operation starts making its own phone calls.",
    points: [
      "6 AM full data refresh so Prism is current before work starts",
      "Two-way voice API layer to Sarvam AI (pull dues, push outcomes)",
      "Internal delayed-PO follow-up CRM, built backend-only",
      "Live supplier call → transcript → extracted status on the dashboard",
    ],
    accent: "#ec4899",
  },
];

/** Portfolio takeaways — skill mapped to concrete evidence. */
export const TAKEAWAYS = [
  { skill: "Product judgement", evidence: "Turned a ₹1L/month vendor toll into an asset the company owns — then made it do more than the API ever would." },
  { skill: "Full-stack depth", evidence: "From Playwright scrapers and a scheduled ETL to a typed-tool RAG assistant and two polished React frontends." },
  { skill: "Applied LLM engineering", evidence: "Tool-calling over SQL (never raw SQL from the model), embedding-based tool retrieval, and a golden-set eval guarding regressions." },
  { skill: "Automation that acts", evidence: "Not just dashboards — WhatsApp follow-ups and AI voice agents that place calls and update a CRM without a human in the loop." },
  { skill: "Cloud & DevOps", evidence: "Dockerised services on AWS EC2 + RDS, scheduled jobs, hot-patch deploys, and a prod-guard discipline for anything risky." },
  { skill: "Role-based data access", evidence: "Five roles with knowledge scoped per role — enforced in code and verified by eval, not just hidden in the UI." },
];

export const STACK = [
  { name: "Python · FastAPI", note: "SQLAlchemy backend" },
  { name: "Playwright", note: "ERP scraping" },
  { name: "APScheduler", note: "Staggered daily ingest" },
  { name: "PostgreSQL · RDS", note: "Snapshot per run" },
  { name: "Docker · AWS EC2", note: "ARM64" },
  { name: "LiteLLM gateway", note: "OpenAI-compatible" },
  { name: "React · Vite · Firebase", note: "Two frontends" },
  { name: "Sarvam AI · Sociovia", note: "Voice + WhatsApp" },
];
