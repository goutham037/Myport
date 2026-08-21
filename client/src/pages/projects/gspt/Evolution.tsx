import { motion, useReducedMotion } from "framer-motion";
import { Lightbulb, AlertTriangle, GitCommit } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { easeOutExpo } from "@/lib/motion";
import { GsptShell, ChapterHeader } from "./GsptShell";
import { VERSIONS } from "./data";

export default function GsptEvolution() {
  usePageMeta(
    "GSPT Evolution — 6 Versions, 12 Months | Sharan Goutham",
    "The version-wise history of GSPT: Flask monolith → MCP pivot → the deploy war → safety-filter breakthrough → performance rewrite → automation. Each version, the problem it faced, and the lesson it taught.",
  );
  const reduce = useReducedMotion();

  return (
    <GsptShell>
      <div className="pt-14">
        <ChapterHeader
          kicker="02 · Evolution"
          title="Six versions, twelve months"
          intro="This project was never designed — it was discovered, one failure at a time. Here is the honest arc from a hardcoded Flask script to concurrent AI infrastructure, and the specific lesson each version taught."
        />

        <section className="relative py-16">
          <div className="mx-auto max-w-4xl px-4">
            <div className="relative">
              {/* vertical spine */}
              <div
                className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-slate-300 via-slate-200 to-transparent md:left-1/2"
                aria-hidden
              />

              <div className="space-y-8">
                {VERSIONS.map((v, i) => {
                  const left = i % 2 === 0;
                  return (
                    <motion.div
                      key={v.tag}
                      initial={reduce ? false : { opacity: 0, y: 26 }}
                      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.55, ease: easeOutExpo }}
                      className={`relative pl-12 md:pl-0 ${left ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)]"}`}
                    >
                      {/* node */}
                      <div
                        className="absolute left-2 top-5 flex h-6 w-6 items-center justify-center rounded-full border-2 bg-white shadow-sm md:left-1/2 md:-translate-x-1/2"
                        style={{ borderColor: v.accent }}
                        aria-hidden
                      >
                        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: v.accent }} />
                      </div>

                      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                        {/* header */}
                        <div className="mb-4 flex flex-wrap items-center gap-2">
                          <span
                            className="rounded-md px-2 py-0.5 font-mono text-xs font-bold text-white"
                            style={{ backgroundColor: v.accent }}
                          >
                            {v.tag}
                          </span>
                          <span className="font-sora text-base font-semibold text-slate-900">
                            {v.phase}
                          </span>
                        </div>
                        <div className="mb-4 flex flex-wrap items-center gap-3 font-mono text-[11px] text-slate-400">
                          <span>{v.date}</span>
                          <span className="h-1 w-1 rounded-full bg-slate-300" />
                          <span>{v.stack}</span>
                        </div>

                        {/* what */}
                        <p className="mb-4 text-sm leading-relaxed text-slate-600">{v.what}</p>

                        {/* problem */}
                        <div className="mb-3 rounded-xl border border-amber-100 bg-amber-50/50 p-3.5">
                          <div className="mb-1 flex items-center gap-1.5">
                            <AlertTriangle className="h-3.5 w-3.5 text-amber-500" />
                            <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                              The wall
                            </span>
                          </div>
                          <p className="text-sm leading-relaxed text-slate-600">{v.problem}</p>
                        </div>

                        {/* lesson */}
                        <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-3.5">
                          <div className="mb-1 flex items-center gap-1.5">
                            <Lightbulb className="h-3.5 w-3.5 text-emerald-500" />
                            <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-emerald-600">
                              What it taught
                            </span>
                          </div>
                          <p className="text-sm leading-relaxed text-slate-700">{v.lesson}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* closing note */}
        <section className="relative pb-8">
          <div className="mx-auto max-w-4xl px-4">
            <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
              <GitCommit className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm leading-relaxed text-slate-600">
                <span className="font-semibold text-slate-900">22 commits, start to finish.</span>{" "}
                The messy early ones (<span className="font-mono text-xs">"sssss"</span>,{" "}
                <span className="font-mono text-xs">"hehhe"</span>) are still in the history — I keep
                them there on purpose. The polish came from the pressure of real failures, and the log
                is the honest record of that.
              </p>
            </div>
          </div>
        </section>
      </div>
    </GsptShell>
  );
}
