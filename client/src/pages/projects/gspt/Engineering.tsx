import { motion, useReducedMotion } from "framer-motion";
import { Clock, Zap } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { easeOutExpo, listStagger, lineItem } from "@/lib/motion";
import { GsptShell, ChapterHeader } from "./GsptShell";
import { SwipeDeck } from "./SwipeDeck";
import { OPTIMIZATIONS, PERF_ROWS, GROK_REPORTS, type Optimization } from "./data";

/** Shared card — used by both the desktop list and the mobile deck. */
function OptimizationCard({ opt, fill = false }: { opt: Optimization; fill?: boolean }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ${
        fill ? "flex h-full flex-col" : ""
      }`}
    >
      <div className="p-6">
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-2xl font-bold text-primary/25">{opt.n}</span>
          <h3 className="font-sora text-lg font-semibold text-slate-900">{opt.title}</h3>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="mb-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-red-400">
              Problem
            </p>
            <p className="text-sm leading-relaxed text-slate-600">{opt.problem}</p>
          </div>
          <div>
            <p className="mb-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-emerald-500">
              Solution
            </p>
            <p className="text-sm leading-relaxed text-slate-600">{opt.solution}</p>
          </div>
        </div>
        <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-primary/5 px-3 py-1">
          <Zap className="h-3 w-3 text-primary" />
          <span className="font-mono text-xs font-medium text-primary">{opt.impact}</span>
        </div>
      </div>
      {opt.code && (
        <div className={`overflow-x-auto border-t border-slate-800 bg-slate-900 p-5 ${fill ? "mt-auto" : ""}`}>
          <pre className="font-mono text-xs leading-relaxed text-slate-300">
            <code>{opt.code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}

export default function GsptEngineering() {
  usePageMeta(
    "GSPT Engineering — 5 Optimizations, 75% Faster | Sharan Goutham",
    "The engineering deep-dive: AJAX interception, persistent browser pool, selective caching, concurrency semaphore, and a projection engine — with the code and the benchmarks.",
  );
  const reduce = useReducedMotion();

  return (
    <GsptShell>
      <div className="pt-14">
        <ChapterHeader
          kicker="03 · Engineering"
          title="Five optimizations, 75% faster"
          intro="Each optimization targets one specific bottleneck. Together they take a 15-second scrape down to a 4-second intelligent response — concurrent, and never stale on the data that matters."
        />

        {/* MOBILE: swipe deck */}
        <section className="relative py-10 md:hidden">
          <div className="mx-auto max-w-4xl">
            <p className="mb-4 px-4 font-mono text-xs font-medium uppercase tracking-widest text-slate-400">
              Swipe the optimizations →
            </p>
            <SwipeDeck
              slides={OPTIMIZATIONS.map((opt) => (
                <OptimizationCard key={opt.n} opt={opt} fill />
              ))}
              label="swipe"
            />
          </div>
        </section>

        {/* DESKTOP: vertical list */}
        <section className="relative hidden py-14 md:block">
          <div className="mx-auto max-w-4xl space-y-6 px-4">
            {OPTIMIZATIONS.map((opt) => (
              <motion.div
                key={opt.n}
                initial={reduce ? false : { opacity: 0, y: 22 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: easeOutExpo }}
              >
                <OptimizationCard opt={opt} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* benchmarks */}
        <section className="relative border-t border-slate-200/70 bg-white/50 py-16">
          <div className="mx-auto max-w-4xl px-4">
            <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-primary/70">
              Results
            </p>
            <h2 className="mb-8 font-sora text-2xl font-semibold text-slate-900">
              Measured, not claimed
            </h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100 text-left">
                    <th className="px-5 py-3.5 font-semibold text-slate-900">Scenario</th>
                    <th className="px-5 py-3.5 text-right font-semibold text-slate-900">Response</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  {PERF_ROWS.map((r) => (
                    <tr key={r.scenario} className={r.highlight ? "bg-emerald-50/40" : ""}>
                      <td className="px-5 py-3.5">{r.scenario}</td>
                      <td
                        className={`px-5 py-3.5 text-right font-mono ${
                          r.highlight ? "font-semibold text-emerald-700" : ""
                        }`}
                      >
                        {r.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* architecture */}
        <section className="relative py-16">
          <div className="mx-auto max-w-4xl px-4">
            <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-primary/70">
              System design
            </p>
            <h2 className="mb-6 font-sora text-2xl font-semibold text-slate-900">One pass, four seconds</h2>
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-sm">
              <pre className="whitespace-pre font-mono text-xs leading-relaxed text-slate-300">{`Grok Scheduled Tasks (8 AM / 9 PM)
        |
        v
MCP Tool Call  (Streamable HTTP)
        |
   [check cache] ----> hit? return  (<1ms)
        |
   [acquire semaphore  (max 5)]
        |
   [isolated browser context  (~50ms)]
        |
   login -> portal auto-fires AJAX: ShowStudentProfileNew
        |
   [intercept response -- zero extra page loads]
        |
   parse HTML -> structured JSON
        |
   [cache selectively  (NOT attendance)]
        |
   [destroy context, release semaphore]
        |
   return structured data  (~4s total)`}</pre>
            </div>
          </div>
        </section>

        {/* grok automation */}
        <section className="relative border-t border-slate-200/70 bg-white/50 py-16">
          <div className="mx-auto max-w-4xl px-4">
            <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-primary/70">
              Automation
            </p>
            <h2 className="mb-3 font-sora text-2xl font-semibold text-slate-900">
              Grok closes the loop
            </h2>
            <p className="mb-10 max-w-2xl text-slate-600">
              The server is wired to Grok as a tool source. Two scheduled automations turn attendance
              from something you check into something that arrives — pre-analyzed, twice a day.
            </p>
            <motion.div
              className="grid gap-6 sm:grid-cols-2"
              initial={reduce ? false : "hidden"}
              whileInView={reduce ? undefined : "show"}
              viewport={{ once: true }}
              variants={reduce ? undefined : listStagger}
            >
              {GROK_REPORTS.map((r) => (
                <motion.div
                  key={r.time}
                  variants={reduce ? undefined : lineItem}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-mono text-lg font-bold text-slate-900">{r.time}</p>
                      <p className="text-xs text-slate-500">{r.label}</p>
                    </div>
                  </div>
                  <p className="mb-3 text-xs font-medium text-slate-400">{r.when}</p>
                  <ul className="space-y-2">
                    {r.delivers.map((d) => (
                      <li key={d} className="flex gap-2 text-sm text-slate-600">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
            <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <p className="mb-2 font-sora text-sm font-semibold text-slate-900">Why push beats pull</p>
              <p className="text-sm leading-relaxed text-slate-600">
                Most student portals are pull-based — you have to remember to check. This is push-based.
                The intelligence comes to you, pre-analyzed, with actionable projections. It turns
                attendance tracking from a daily chore into a background service that surfaces only
                what you need to know.
              </p>
            </div>
          </div>
        </section>
      </div>
    </GsptShell>
  );
}
