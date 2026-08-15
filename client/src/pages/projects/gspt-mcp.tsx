import { motion, useReducedMotion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/usePageMeta";
import { easeOutExpo, listStagger, lineItem } from "@/lib/motion";

const STACK = [
  { name: "FastMCP 1.18", note: "MCP server framework" },
  { name: "Playwright (async)", note: "Headless Chromium automation" },
  { name: "Streamable-HTTP", note: "Transport for ChatGPT plugin API" },
  { name: "BeautifulSoup4", note: "AJAX response HTML parsing" },
  { name: "uvicorn", note: "ASGI server for cloud deploy" },
  { name: "Render", note: "Cloud deployment platform" },
];

const STEPS = [
  {
    n: "01",
    title: "Get the server URL",
    body: "The MCP server is live at https://gspt-4dis.onrender.com/mcp. You can use this directly or deploy your own fork to Render — the repo is public on GitHub.",
  },
  {
    n: "02",
    title: "Add it as a ChatGPT plugin",
    body: 'In ChatGPT, go to Plugin store → Develop your own plugin → paste the server URL. ChatGPT will fetch the tool list from /mcp and register all available tools automatically.',
  },
  {
    n: "03",
    title: "Set your credentials on Render",
    body: "In your Render service → Environment tab, add STUDENT_ROLL (your roll number) and STUDENT_PASSWORD. This is required for the no-arg tools (get_my_attendance, get_my_profile, etc.) — they read credentials from the server environment so nothing sensitive ever appears in your chat prompt. Only use the credential-accepting tools (get_student_data, get_attendance) if you need to query a different roll number.",
  },
  {
    n: "04",
    title: "Use it in ChatGPT",
    body: 'Type a prompt like "Call get_my_attendance and show my attendance. Flag anything below 75%." ChatGPT calls the tool, the server logs in, intercepts the AJAX, and returns structured data.',
  },
];

const PROMPTS = [
  {
    label: "Attendance check",
    text: "Call get_my_attendance and show my attendance. Flag any subject below 75% and tell me how many classes I need to attend to get back above it.",
  },
  {
    label: "Full profile",
    text: "Call get_my_profile and show my student info — name, branch, semester, and overall attendance.",
  },
  {
    label: "Timetable",
    text: "Call get_my_timetable and show today's classes with faculty names.",
  },
  {
    label: "Library",
    text: "Call get_my_library and list any books I have issued, with due dates and fines.",
  },
];

export default function GsptMcpPage() {
  usePageMeta(
    "GSPT — GRIET Portal MCP Server | Sharan Goutham",
    "How I built an MCP server that exposes GRIET student portal data as AI-callable tools and integrated it with ChatGPT.",
  );
  const reduce = useReducedMotion();

  return (
    <PageLayout>
      {/* back nav */}
      <div className="mx-auto max-w-4xl px-4 pt-10">
        <Link href="/#projects">
          <span className="inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-slate-900">
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </span>
        </Link>
      </div>

      {/* hero */}
      <motion.section
        className="mx-auto max-w-4xl px-4 pb-12 pt-8"
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: easeOutExpo }}
      >
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <Badge variant="secondary" className="font-mono text-xs">AI tool</Badge>
          <Badge variant="secondary" className="font-mono text-xs">Shipped · 2026</Badge>
          <Badge variant="secondary" className="font-mono text-xs">MCP · Playwright · ChatGPT plugin</Badge>
        </div>
        <h1 className="font-sora text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
          GSPT — GRIET Portal MCP Server
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
          An MCP server that scrapes the GRIET student portal using headless Playwright, intercepts the AJAX call that fires on login, and exposes attendance, profile, timetable, and library data as AI-callable tools — integrated directly with ChatGPT.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="rounded-xl shadow-sm shadow-primary/10">
            <a href="https://github.com/goutham037/gspt" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-xl border-slate-200">
            <a href="https://gspt-4dis.onrender.com/mcp" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live endpoint
            </a>
          </Button>
        </div>
      </motion.section>

      {/* hero screenshot */}
      <motion.div
        className="mx-auto max-w-5xl px-4 pb-16"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1, ease: easeOutExpo }}
      >
        <img
          src="/projects/gspt/demo.jpg"
          alt="ChatGPT calling get_my_attendance — tool call and attendance table result"
          className="w-full rounded-2xl border border-slate-200 shadow-lg"
          loading="lazy"
        />
      </motion.div>

      {/* what it does */}
      <section className="border-t border-slate-100 bg-slate-50/60 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-slate-400">Overview</p>
          <h2 className="font-sora text-2xl font-semibold text-slate-900 mb-8">What it does</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "AJAX interception",
                body: "After login, the portal fires a ShowStudentProfileNew AJAX POST that returns the full student record. Playwright intercepts this response — one login session returns everything in 4–6 seconds.",
              },
              {
                title: "Zero-credential prompts",
                body: "Credentials live in Render environment variables. The get_my_* tools take no arguments, so ChatGPT prompts never contain a password — bypassing the safety-filter block.",
              },
              {
                title: "Streamable-HTTP transport",
                body: "FastMCP 1.18 serves tools over streamable-http (the protocol ChatGPT's plugin API expects). Locally it falls back to stdio for Claude Desktop.",
              },
              {
                title: "Self-healing Chromium",
                body: "Render's build and runtime containers are separate — the browser binary vanishes between deploys. The server installs Chromium at startup via subprocess so cold starts always work.",
              },
            ].map((card) => (
              <div key={card.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-sora text-base font-semibold text-slate-900 mb-2">{card.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* architecture */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-slate-400">Architecture</p>
          <h2 className="font-sora text-2xl font-semibold text-slate-900 mb-3">How it works</h2>
          <p className="text-slate-600 mb-8 max-w-2xl">
            ChatGPT calls the MCP endpoint → uvicorn receives the request → FastMCP dispatches to the tool handler → Playwright opens a headless browser, logs in, and intercepts the AJAX response → parsed JSON flows back to ChatGPT.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <img
              src="https://mermaid.ink/img/Zmxvd2NoYXJ0IExSCiAgICBBKFtDaGF0R1BUXSkgLS0+fHRvb2wgY2FsbCB2aWEgU3RyZWFtYWJsZS1IVFRQfCBCW01DUCBTZXJ2ZXJcbkZhc3RNQ1AgwrcgdXZpY29ybl0KICAgIEIgLS0+fGxhdW5jaGVzfCBDW1BsYXl3cmlnaHRcbkhlYWRsZXNzIENocm9taXVtXQogICAgQyAtLT58UE9TVCBjcmVkZW50aWFsc3wgRFtHUklFVCBQb3J0YWxcbndlYnByb3NpbmRpYS5jb21dCiAgICBEIC0tPnxBSkFYIHJlc3BvbnNlXG5TaG93U3R1ZGVudFByb2ZpbGVOZXd8IEMKICAgIEMgLS0+fEhUTUx8IEVbQmVhdXRpZnVsU291cDRcbnBhcnNlcl0KICAgIEUgLS0+fHN0cnVjdHVyZWQgZGljdHwgQgogICAgQiAtLT58SlNPTiByZXN1bHR8IEEKICAgIHN0eWxlIEEgZmlsbDojMTBhMzdmLGNvbG9yOiNmZmYsc3Ryb2tlOm5vbmUKICAgIHN0eWxlIEIgZmlsbDojNGY0NmU1LGNvbG9yOiNmZmYsc3Ryb2tlOm5vbmUKICAgIHN0eWxlIEMgZmlsbDojMGYxNzJhLGNvbG9yOiNmZmYsc3Ryb2tlOm5vbmUKICAgIHN0eWxlIEQgZmlsbDojNjQ3NDhiLGNvbG9yOiNmZmYsc3Ryb2tlOm5vbmUKICAgIHN0eWxlIEUgZmlsbDojMDM2OWExLGNvbG9yOiNmZmYsc3Ryb2tlOm5vbmU="
              alt="Architecture diagram — ChatGPT to MCP server to Playwright to GRIET portal AJAX"
              className="mx-auto max-w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* how to connect */}
      <section className="border-t border-slate-100 bg-slate-50/60 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-slate-400">Setup</p>
          <h2 className="font-sora text-2xl font-semibold text-slate-900 mb-10">How to connect</h2>
          <motion.div
            className="space-y-6"
            initial={reduce ? false : "hidden"}
            whileInView={reduce ? undefined : "show"}
            viewport={{ once: true }}
            variants={reduce ? undefined : listStagger}
          >
            {STEPS.map((step) => (
              <motion.div
                key={step.n}
                variants={reduce ? undefined : lineItem}
                className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="font-mono text-2xl font-bold text-primary/30 shrink-0 leading-none mt-0.5">
                  {step.n}
                </span>
                <div>
                  <h3 className="font-sora text-base font-semibold text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10">
            <img
            src="/projects/gspt/plugin-dialog.jpg"
            alt="ChatGPT Add plugin dialog with server URL https://gspt-4dis.onrender.com/mcp"
            className="w-full rounded-2xl border border-slate-200 shadow-lg"
            loading="lazy"
          />
          </div>
        </div>
      </section>

      {/* usage prompts */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-slate-400">Usage</p>
          <h2 className="font-sora text-2xl font-semibold text-slate-900 mb-3">Ready-to-use prompts</h2>
          <p className="text-slate-600 mb-8">Copy and paste these into ChatGPT after connecting the plugin.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {PROMPTS.map((p) => (
              <div key={p.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="font-mono text-xs font-medium text-primary mb-3">{p.label}</p>
                <p className="font-mono text-sm text-slate-700 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <img
            src="/projects/gspt/attendance-output.jpg"
            alt="Full attendance report — table with colored rows and classes-needed breakdown"
            className="w-full rounded-2xl border border-slate-200 shadow-lg"
            loading="lazy"
          />
          </div>
        </div>
      </section>

      {/* compatibility */}
      <section className="border-t border-slate-100 bg-slate-50/60 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-slate-400">Compatibility</p>
          <h2 className="font-sora text-2xl font-semibold text-slate-900 mb-3">When it works — and when it doesn't</h2>
          <p className="text-slate-600 mb-8 max-w-2xl">
            There are two kinds of tools in this server. Which one you use determines whether ChatGPT will call it at all.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 mb-10">
            {/* no-cred */}
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <p className="font-sora text-sm font-semibold text-emerald-900">No-credential tools — always work</p>
              </div>
              <div className="space-y-1 font-mono text-xs text-emerald-800 mb-4">
                <p>get_my_attendance</p>
                <p>get_my_profile</p>
                <p>get_my_timetable</p>
                <p>get_my_library</p>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Take zero arguments. Credentials are stored in Render environment variables and never appear in the conversation. ChatGPT's content policy has nothing to flag — these call reliably across all models and plans.
              </p>
            </div>

            {/* cred */}
            <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                <p className="font-sora text-sm font-semibold text-amber-900">Credential-accepting tools — sometimes blocked</p>
              </div>
              <div className="space-y-1 font-mono text-xs text-amber-800 mb-4">
                <p>get_student_data(roll_no, password)</p>
                <p>get_attendance(roll_no, password)</p>
                <p>get_library_books(roll_no, password)</p>
                <p>get_timetable(roll_no, password)</p>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Require passing a password as a tool argument. When the password appears in the prompt or tool call payload, some model configurations flag it. Use these only for querying other students' data.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="font-sora text-sm font-semibold text-slate-900 mb-4">Why the credential tools get blocked</p>
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                ChatGPT applies safety filters at multiple layers — model-level and policy-level. When a <span className="font-mono text-xs bg-slate-100 px-1 rounded">password</span> field appears in a tool's input schema or in the prompt text, certain model tiers treat it as a credential-handling request and refuse to call the tool, returning a message like <em>"I couldn't complete this request due to safety guidelines."</em>
              </p>
              <p>
                This behaviour varies by model. <strong className="text-slate-800">GPT-4o and GPT-4o mini</strong> are the most permissive with plugin/MCP tool calls. <strong className="text-slate-800">o1, o3, and GPT-4.5</strong> apply stricter safety layers and are more likely to refuse. The free plan also has tighter content controls than Plus/Team.
              </p>
              <p>
                The fix applied here: the <span className="font-mono text-xs bg-slate-100 px-1 rounded">get_my_*</span> tools expose no sensitive fields whatsoever. There is nothing for the safety layer to detect, so the call goes through every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* tools exposed */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-slate-400">API</p>
          <h2 className="font-sora text-2xl font-semibold text-slate-900 mb-8">Tools exposed</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-left">
                  <th className="px-5 py-3.5 font-semibold text-slate-900">Tool</th>
                  <th className="px-5 py-3.5 font-semibold text-slate-900">Args</th>
                  <th className="px-5 py-3.5 font-semibold text-slate-900">Returns</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                {[
                  { tool: "get_my_attendance", args: "none", returns: "Overall % + per-subject table, flagged below 75%" },
                  { tool: "get_my_profile", args: "none", returns: "Personal info, parents, education, attendance" },
                  { tool: "get_my_timetable", args: "none", returns: "Weekly timetable, faculty allocation, academic calendar" },
                  { tool: "get_my_library", args: "none", returns: "Issued books, due dates, fine amounts" },
                  { tool: "get_student_data", args: "roll_no, password", returns: "Full profile (multi-student use)" },
                  { tool: "get_attendance", args: "roll_no, password", returns: "Attendance for any roll number" },
                ].map((row) => (
                  <tr key={row.tool}>
                    <td className="px-5 py-3.5 font-mono text-xs text-primary">{row.tool}</td>
                    <td className="px-5 py-3.5 font-mono text-xs text-slate-500">{row.args}</td>
                    <td className="px-5 py-3.5">{row.returns}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* stack */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-slate-400">Stack</p>
          <h2 className="font-sora text-2xl font-semibold text-slate-900 mb-8">Technical stack</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {STACK.map((s) => (
              <div key={s.name} className="rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
                <p className="font-mono text-sm font-semibold text-slate-900">{s.name}</p>
                <p className="mt-1 text-xs text-slate-500">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="border-t border-slate-100 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-sora text-2xl font-semibold text-slate-900 mb-3">Try it yourself</h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            The endpoint is live. Fork the repo, deploy to Render, add your credentials as env vars, and connect it to ChatGPT in under five minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="rounded-xl shadow-sm shadow-primary/10">
              <a href="https://github.com/goutham037/gspt" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl border-slate-200">
              <Link href="/#projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to projects
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
