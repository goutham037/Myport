import { motion, useReducedMotion } from "framer-motion";
import { Bug as BugIcon, Wrench, ShieldCheck } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { easeOutExpo, listStagger, lineItem } from "@/lib/motion";
import { SpectrumShell, ChapterHeader } from "./SpectrumShell";
import { ENGINE, BUGS, STACK } from "./data";

export default function SpectrumEngineering() {
  usePageMeta(
    "Prism Engineering — Tool-Calling, Not SQL | Sharan Goutham",
    "How Prism answers safely: typed tools instead of model-written SQL, embedding-based tool retrieval, server-side money formatting, and a golden-set eval — plus the six production bugs that shaped the build.",
  );
  const reduce = useReducedMotion();

  return (
    <SpectrumShell>
      <div className="pt-14">
        <ChapterHeader
          kicker="03 · Engineering"
          title="How Prism answers without hallucinating the numbers"
          intro="A chatbot over financial data is only useful if you can trust the figure it gives you. Prism is built so the model can be wrong about intent, but never about the arithmetic or the schema."
        />

        {/* engine principles */}
        <section className="relative py-14">
          <div className="mx-auto max-w-4xl px-4">
            <div className="mb-8 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <p className="font-mono text-xs font-medium uppercase tracking-widest text-primary/70">
                The engine
              </p>
            </div>
            <motion.div
              className="grid gap-4 sm:grid-cols-2"
              initial={reduce ? false : "hidden"}
              whileInView={reduce ? undefined : "show"}
              viewport={{ once: true, margin: "-50px" }}
              variants={reduce ? undefined : listStagger}
            >
              {ENGINE.map((e, i) => (
                <motion.div
                  key={e.title}
                  variants={reduce ? undefined : lineItem}
                  className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ${
                    i === ENGINE.length - 1 && ENGINE.length % 2 === 1 ? "sm:col-span-2" : ""
                  }`}
                >
                  <h3 className="mb-2 font-sora text-base font-semibold text-slate-900">{e.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{e.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* the bugs worth remembering */}
        <section className="relative border-t border-slate-200/70 bg-white/50 py-16">
          <div className="mx-auto max-w-4xl px-4">
            <div className="mb-2 flex items-center gap-2">
              <BugIcon className="h-4 w-4 text-rose-400" />
              <p className="font-mono text-xs font-medium uppercase tracking-widest text-primary/70">
                Engineering challenges
              </p>
            </div>
            <h2 className="mb-3 font-sora text-2xl font-semibold text-slate-900">
              The bugs worth remembering
            </h2>
            <p className="mb-10 max-w-2xl text-slate-600">
              Real systems break in instructive ways. These are the ones that changed how the thing
              was built.
            </p>

            <div className="space-y-5">
              {BUGS.map((b) => (
                <motion.div
                  key={b.n}
                  initial={reduce ? false : { opacity: 0, y: 22 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, ease: easeOutExpo }}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="font-mono text-2xl font-bold text-primary/25">{b.n}</span>
                    <h3 className="font-sora text-lg font-semibold text-slate-900">{b.title}</h3>
                    <span className="ml-auto rounded-full bg-slate-900 px-3 py-1 font-mono text-xs font-medium text-white">
                      {b.tag}
                    </span>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="mb-1 flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-red-400">
                        <BugIcon className="h-3 w-3" /> The bug
                      </p>
                      <p className="text-sm leading-relaxed text-slate-600">{b.problem}</p>
                    </div>
                    <div>
                      <p className="mb-1 flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-emerald-500">
                        <Wrench className="h-3 w-3" /> The fix
                      </p>
                      <p className="text-sm leading-relaxed text-slate-600">{b.fix}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* stack */}
        <section className="relative py-16">
          <div className="mx-auto max-w-4xl px-4">
            <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-primary/70">
              Stack
            </p>
            <h2 className="mb-8 font-sora text-2xl font-semibold text-slate-900">
              What it runs on
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {STACK.map((s) => (
                <div
                  key={s.name}
                  className="rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
                >
                  <p className="font-mono text-sm font-semibold text-slate-900">{s.name}</p>
                  <p className="mt-1 text-xs text-slate-500">{s.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </SpectrumShell>
  );
}
