import { motion, useReducedMotion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowLeft, Database, Bell, CalendarClock, Sparkles, Calculator,
  ClipboardList, Phone, ListChecks, Cloud, Bug,
} from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/usePageMeta";
import { easeOutExpo, listStagger, lineItem } from "@/lib/motion";

const STATS = [
  { value: "₹12L/yr", label: "Vendor API fee avoided", sub: "₹1L / month" },
  { value: "24×7", label: "Automated follow-ups", sub: "WhatsApp alerts" },
  { value: "36", label: "Assistant tools", sub: "role-scoped" },
  { value: "11", label: "ERP domains", sub: "synced daily" },
  { value: "5", label: "Access roles", sub: "knowledge-scoped" },
  { value: "~26K", label: "Lines of code", sub: "across 121 files" },
];

const SYSTEMS = [
  { icon: Database, name: "Scraper suite", tag: "Replaced the API", body: "Playwright robots log into the ERP, export every XLSX report and capture the dashboard's own JSON, surviving start-up popups, required fields, and EJ2 dropdowns. This replaced the ₹1L/month API outright." },
  { icon: Bell, name: "24×7 alert engine", tag: "Paid for itself", body: "WhatsApp (via Sociovia) pushes per-stage production updates, per-supplier delayed/pending PO reminders, and daily productivity summaries — plus a failsafe alert if a sync ever goes silent." },
  { icon: CalendarClock, name: "Scheduled pipeline", tag: "Fresh before work", body: "APScheduler ingests 11 ERP domains on a staggered 6:00–6:30 AM refresh, with a snapshot-per-run model so a corrected total simply falls out of “current” without deletes." },
  { icon: Sparkles, name: "Prism — AI assistant", tag: "36 tools · 5 roles", body: "A role-based RAG chatbot with 36 tools over 10+ data domains. It never writes SQL from the model — it picks typed tools by cosine similarity, runs real aggregates, and answers in Markdown, ₹ Cr/L, charts, and voice. Guarded by a golden-set eval." },
  { icon: Calculator, name: "Rate Sheet engine", tag: "Pricing, automated", body: "A cost + selling-price grid built from the Bill-of-Materials, with a server-to-server Quick Quote API the on-prem CRM calls to price a party + product + pack instantly." },
  { icon: ClipboardList, name: "Dynamic Forms", tag: "Self-serve capture", body: "Admin-built product-detail forms with a shareable client link, a scoped forms-manager login, and full response tooling: lock-after-submit, search, status, and print." },
  { icon: Phone, name: "AI voice agents", tag: "It makes the calls", body: "Sarvam AI calls suppliers daily about their most-delayed POs in Hinglish. A two-way API feeds the agent the dues and takes the spoken answers back — transcribed, extracted into status + revised date, and posted to the system." },
  { icon: ListChecks, name: "Internal CRM", tag: "Backend is the CRM", body: "A follow-up board built entirely in the backend — each delayed PO becomes a trackable record (stage, owner, priority, timeline) that the voice calls populate automatically. No external CRM, no dependency." },
];

const PHASES = [
  { n: "0", when: "Before the repo", title: "The automation foundation", points: ["Playwright scrapers replacing the ₹1L/month ERP API", "24×7 WhatsApp follow-ups for production stages", "Supplier PO alerts and admin productivity summaries"] },
  { n: "1", when: "5–14 Nov", title: "Platform & operations hardening", points: ["Rate Sheet app + Quick Quote API for the on-prem CRM", "Dosage/form-first summaries, per-job WhatsApp retrigger, sync-failure alerts", "Dynamic custom Forms module with a scoped login", "Split supplier alerts — delayed at 9 AM, pending at noon"] },
  { n: "2", when: "18–19 Nov", title: "Prism — the AI assistant", points: ["RAG tool-retrieval across sales, stock, receivables, SFA, GST, order book, leaderboards", "Full-page chat, saved conversations, in-reply charts, voice input", "Shipped as “Spectrum AI”, renamed Prism the same day", "Golden-set eval, audit logging, admin monitoring"] },
  { n: "3", when: "19 Nov", title: "Voice agents & internal CRM", points: ["6 AM full data refresh so Prism is current before work starts", "Two-way voice API layer to Sarvam AI (pull dues, push outcomes)", "Internal delayed-PO follow-up CRM, built backend-only", "Live supplier call → transcript → extracted status on the dashboard"] },
];

const CHALLENGES = [
  { title: "The 10× money bug", body: "The model kept converting crore/lakh wrong — reporting ₹77.2 L for a real ₹7.72 Cr. Fix: compute every rupee figure server-side into a pre-formatted field and have the model quote it verbatim, never doing magnitude math itself." },
  { title: "Purchases double-counted", body: "The Purchase Register total came out at ₹58.30 Cr — exactly double. A blank grand-total footer row carried the full total and was being summed with the lines. Skipping rows with no document number corrected it to ₹29.15 Cr." },
  { title: "UTC vs IST timestamps", body: "Chats showed times ~5.5 hours off. The DB stores UTC-naive; the API sent no timezone marker. Fix: serialize as explicit UTC and format in Asia/Kolkata on the client." },
  { title: "The build that wiped the rate sheet", body: "Two React apps share one Firebase site; a build on the main app silently cleared the rate sheet's folder, 404-ing it after every deploy. Fix: rebuild the rate sheet and copy it back into the dist before shipping." },
  { title: "Every voice call overwrote the last", body: "The voice tool posted its request template literally — the same call reference each time — so each call replaced the previous row. Fix: mint a unique ref per call and extract the real products, statuses, and dates from the summary with an LLM." },
  { title: "ERP strings overflowing columns", body: "Exports routinely overran VARCHAR limits (concatenated dates, long period strings). The fix was a discipline, not a patch: widen columns generously and always skip the footer/grand-total row — the root of more than one double-count." },
];

const STACK = ["Python", "FastAPI", "SQLAlchemy", "Playwright", "APScheduler", "PostgreSQL / RDS", "Docker", "AWS EC2 (ARM64)", "LiteLLM gateway", "RAG + evals", "React / Vite", "Firebase", "Sarvam AI (voice)", "Sociovia (WhatsApp)"];

const TAKEAWAYS = [
  { title: "Product judgement", body: "Turned a ₹1L/month vendor toll into an asset the company owns — then made it do more than the API ever would." },
  { title: "Full-stack depth", body: "From Playwright scrapers and a scheduled ETL to a typed-tool RAG assistant and two polished React frontends." },
  { title: "Applied LLM engineering", body: "Tool-calling over SQL (never raw SQL from the model), embedding-based tool retrieval, and a golden-set eval guarding regressions." },
  { title: "Automation that acts", body: "Not just dashboards — WhatsApp follow-ups and AI voice agents that place calls and update a CRM without a human in the loop." },
  { title: "Cloud & DevOps", body: "Dockerised services on AWS EC2 + RDS, scheduled jobs, hot-patch deploys, and a prod-guard discipline for anything risky." },
  { title: "Role-based data access", body: "Five roles with knowledge scoped per role — enforced in code and verified by eval, not just hidden in the UI." },
];

export default function SpectrumErpPage() {
  usePageMeta(
    "Spectrum ERP Automation | Sharan Goutham",
    "How I replaced a ₹1L/month ERP API with a self-built data layer for a pharma manufacturer: scrapers, a 24×7 alert engine, a role-based RAG assistant (Prism), and AI voice agents."
  );
  const reduce = useReducedMotion();

  return (
    <PageLayout>
      <div className="mx-auto max-w-4xl px-4 pt-10">
        <Link href="/#projects">
          <span className="inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-slate-900">
            <ArrowLeft className="h-4 w-4" /> Back to projects
          </span>
        </Link>
      </div>

      <motion.section
        className="mx-auto max-w-4xl px-4 pb-10 pt-8"
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: easeOutExpo }}
      >
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <Badge variant="secondary" className="font-mono text-xs">Pharma · ERP automation</Badge>
          <Badge variant="secondary" className="font-mono text-xs">Shipped · 2026</Badge>
          <Badge variant="secondary" className="font-mono text-xs">RAG · Voice AI</Badge>
        </div>
        <h1 className="font-sora text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
          Spectrum ERP Automation
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
          A pharma manufacturer's ERP vendor quoted <strong>₹1,00,000 / month</strong> for API access to the
          company's own data. Instead, I built the data layer from scratch — scrapers, a 24×7 alert engine,
          a role-based RAG assistant, and AI voice agents that call suppliers and update a CRM on their own.
        </p>
        <p className="mt-4 text-sm text-slate-500">Client: Spectrum Formulation Pvt. Ltd. · Tracked build 5–19 Nov 2026 · 34 commits · ~26K lines · 121 files.</p>
      </motion.section>

      {/* impact */}
      <section className="border-t border-slate-100 bg-slate-50/60 py-14">
        <div className="mx-auto max-w-4xl px-4">
          <p className="mb-6 font-mono text-xs font-medium uppercase tracking-widest text-slate-400">Impact</p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                <p className="font-sora text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">{s.value}</p>
                <p className="mt-1 text-sm font-medium text-slate-800">{s.label}</p>
                <p className="mt-0.5 text-xs text-slate-500">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* problem */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-slate-400">The problem</p>
          <h2 className="mb-5 font-sora text-2xl font-semibold text-slate-900">Charged a lakh a month to read their own data</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>Spectrum Formulation runs on a SaaS ERP (CBO / myreporting). The vendor offered API access to the company's own production, sales, stock, and purchase data for <strong>₹1,00,000 every month</strong>. On top of the fee, the business was still running on manual follow-ups: someone phoning the factory for stage updates, someone chasing suppliers on late materials, someone compiling productivity numbers by hand.</p>
            <p>The brief became two things at once — get the data out without paying the toll, and make the operation run itself.</p>
          </div>
        </div>
      </section>

      {/* systems */}
      <section className="border-t border-slate-100 bg-slate-50/60 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-slate-400">What I built</p>
          <h2 className="mb-3 font-sora text-2xl font-semibold text-slate-900">Eight systems, one data backbone</h2>
          <p className="mb-8 max-w-2xl text-slate-600">Every piece reads from one scheduled Postgres snapshot of the ERP, so the scrapers run once and everything downstream — alerts, the assistant, the voice agents — stays consistent.</p>
          <div className="grid gap-5 sm:grid-cols-2">
            {SYSTEMS.map((s) => (
              <div key={s.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <s.icon className="h-6 w-6 text-primary" aria-hidden />
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-mono text-[11px] text-primary">{s.tag}</span>
                </div>
                <h3 className="mb-2 font-sora text-base font-semibold text-slate-900">{s.name}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* timeline */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-slate-400">Timeline</p>
          <h2 className="mb-10 font-sora text-2xl font-semibold text-slate-900">From foundation to voice agents</h2>
          <motion.div
            className="space-y-6"
            initial={reduce ? false : "hidden"}
            whileInView={reduce ? undefined : "show"}
            viewport={{ once: true }}
            variants={reduce ? undefined : listStagger}
          >
            {PHASES.map((p) => (
              <motion.div
                key={p.n}
                variants={reduce ? undefined : lineItem}
                className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="mt-0.5 shrink-0 font-mono text-2xl font-bold leading-none text-primary/30">{p.n}</span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <h3 className="font-sora text-base font-semibold text-slate-900">{p.title}</h3>
                    <span className="font-mono text-xs text-slate-400">{p.when}</span>
                  </div>
                  <ul className="mt-2 space-y-1.5">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-2 text-sm leading-relaxed text-slate-600">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/40" aria-hidden />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* challenges */}
      <section className="border-t border-slate-100 bg-slate-50/60 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-slate-400">Engineering challenges</p>
          <h2 className="mb-8 font-sora text-2xl font-semibold text-slate-900">The bugs worth remembering</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {CHALLENGES.map((c) => (
              <div key={c.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-2 flex items-center gap-2">
                  <Bug className="h-5 w-5 text-primary" aria-hidden />
                  <h3 className="font-sora text-base font-semibold text-slate-900">{c.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* architecture */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-slate-400">How it runs</p>
          <h2 className="mb-5 font-sora text-2xl font-semibold text-slate-900">Architecture in one breath</h2>
          <p className="max-w-3xl leading-relaxed text-slate-600">
            A FastAPI + SQLAlchemy backend on an ARM64 AWS EC2 box (Dockerised) ingests the ERP via Playwright into
            RDS Postgres on a schedule. Prism selects typed tools by embedding similarity and runs them against an
            OpenAI-compatible LiteLLM gateway. Two React/Vite frontends deploy to Firebase. The voice layer is a
            closed two-way API to Sarvam AI. Secrets live only in the server environment — never the repo.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {STACK.map((t) => (
              <Badge key={t} variant="secondary" className="text-sm font-normal">{t}</Badge>
            ))}
          </div>
        </div>
      </section>

      {/* takeaways */}
      <section className="border-t border-slate-100 bg-slate-50/60 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-slate-400">What it demonstrates</p>
          <h2 className="mb-8 font-sora text-2xl font-semibold text-slate-900">The takeaways</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TAKEAWAYS.map((t) => (
              <div key={t.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <Cloud className="h-5 w-5 text-primary" aria-hidden />
                <h3 className="mb-2 mt-3 font-sora text-base font-semibold text-slate-900">{t.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{t.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button asChild size="lg" variant="outline" className="rounded-xl border-slate-200">
              <Link href="/#projects"><ArrowLeft className="mr-2 h-4 w-4" /> Back to projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
