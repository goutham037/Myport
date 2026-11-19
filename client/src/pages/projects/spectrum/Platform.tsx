import { motion, useReducedMotion } from "framer-motion";
import { Layers, ArrowDown } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { easeOutExpo, listStagger, lineItem } from "@/lib/motion";
import { SpectrumShell, ChapterHeader } from "./SpectrumShell";
import { SYSTEMS, ARCH_LAYERS, FLOW } from "./data";

export default function SpectrumPlatform() {
  usePageMeta(
    "Prism Platform — Eight Systems, One Backbone | Sharan Goutham",
    "The eight systems of the Spectrum ERP automation platform — scrapers, a 24×7 alert engine, a scheduled pipeline, the Prism assistant, a rate-sheet engine, dynamic forms, voice agents and an internal CRM — all reading from one daily Postgres snapshot.",
  );
  const reduce = useReducedMotion();

  return (
    <SpectrumShell>
      <div className="pt-14">
        <ChapterHeader
          kicker="02 · The Platform"
          title="Eight systems, one data backbone"
          intro="Every piece reads from one scheduled Postgres snapshot of the ERP, so the scrapers run once and everything downstream — alerts, the assistant, the voice agents — stays consistent."
        />

        {/* the eight systems */}
        <section className="relative py-14">
          <div className="mx-auto max-w-5xl px-4">
            <motion.div
              className="grid gap-4 sm:grid-cols-2"
              initial={reduce ? false : "hidden"}
              whileInView={reduce ? undefined : "show"}
              viewport={{ once: true, margin: "-60px" }}
              variants={reduce ? undefined : listStagger}
            >
              {SYSTEMS.map((s) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.name}
                    variants={reduce ? undefined : lineItem}
                    className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="mb-1 flex flex-wrap items-center gap-2">
                        <h3 className="font-sora text-base font-semibold text-slate-900">{s.name}</h3>
                        <span className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-[10px] text-slate-500">
                          {s.tag}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-600">{s.body}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* the architecture, rebuilt natively as a layered stack */}
        <section className="relative border-t border-slate-200/70 bg-white/50 py-16">
          <div className="mx-auto max-w-4xl px-4">
            <div className="mb-10 flex items-center gap-2">
              <Layers className="h-4 w-4 text-primary" />
              <p className="font-mono text-xs font-medium uppercase tracking-widest text-primary/70">
                Technical architecture
              </p>
            </div>
            <h2 className="mb-8 font-sora text-2xl font-semibold text-slate-900">
              One raw ERP stream, refracted into six layers
            </h2>

            <div className="space-y-3">
              {ARCH_LAYERS.map((layer, i) => (
                <div key={layer.name}>
                  <motion.div
                    initial={reduce ? false : { opacity: 0, x: -14 }}
                    whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, ease: easeOutExpo, delay: reduce ? 0 : i * 0.05 }}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                  >
                    <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center">
                      <div className="flex items-center gap-3 sm:w-52 sm:shrink-0">
                        <span
                          className="h-9 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: layer.accent }}
                          aria-hidden
                        />
                        <span className="font-sora text-sm font-semibold text-slate-900">
                          {layer.name}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {layer.items.map((it) => (
                          <span
                            key={it}
                            className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 font-mono text-xs text-slate-600"
                          >
                            {it}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                  {i < ARCH_LAYERS.length - 1 && (
                    <div className="flex justify-center py-1.5" aria-hidden>
                      <ArrowDown className="h-4 w-4 text-slate-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-relaxed text-slate-600 shadow-sm">
              A FastAPI + SQLAlchemy backend on an ARM64 AWS EC2 box ingests the ERP via Playwright
              into RDS Postgres on a schedule. Prism selects typed tools by embedding similarity and
              runs them against an OpenAI-compatible LiteLLM gateway. Two React/Vite frontends deploy
              to Firebase. The voice layer is a closed two-way API to Sarvam AI. Secrets live only in
              the server environment — never the repo.
            </p>
          </div>
        </section>

        {/* Ask -> Act flow */}
        <section className="relative py-16">
          <div className="mx-auto max-w-4xl px-4">
            <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-primary/70">
              Ask. Analyze. Act.
            </p>
            <h2 className="mb-10 font-sora text-2xl font-semibold text-slate-900">
              What happens between a question and an answer
            </h2>

            <div className="relative">
              <div
                className="absolute left-[18px] top-3 bottom-3 w-px bg-gradient-to-b from-emerald-400 via-sky-400 to-amber-400"
                aria-hidden
              />
              <motion.div
                className="space-y-5"
                initial={reduce ? false : "hidden"}
                whileInView={reduce ? undefined : "show"}
                viewport={{ once: true }}
                variants={reduce ? undefined : listStagger}
              >
                {FLOW.map((f, i) => (
                  <motion.div
                    key={f.step}
                    variants={reduce ? undefined : lineItem}
                    className="relative flex gap-5 pl-12"
                  >
                    <span className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white font-mono text-xs font-bold text-primary shadow-sm">
                      {i + 1}
                    </span>
                    <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                      <p className="mb-1 font-sora text-sm font-semibold text-slate-900">{f.step}</p>
                      <p className="text-sm leading-relaxed text-slate-600">{f.body}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </SpectrumShell>
  );
}
