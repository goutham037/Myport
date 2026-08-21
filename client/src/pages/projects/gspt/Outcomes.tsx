import { motion, useReducedMotion } from "framer-motion";
import { Link } from "wouter";
import { Github, ExternalLink, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/usePageMeta";
import { easeOutExpo, listStagger, lineItem } from "@/lib/motion";
import { GsptShell, ChapterHeader } from "./GsptShell";
import { OUTCOMES, SKILLS, STACK, LINKS } from "./data";

export default function GsptOutcomes() {
  usePageMeta(
    "GSPT Outcomes — What It Proves | Sharan Goutham",
    "The learned outcomes and skills demonstrated by GSPT: async concurrency, browser reverse-engineering, systems design under constraints, LLM tool-calling internals, and production debugging.",
  );
  const reduce = useReducedMotion();

  return (
    <GsptShell>
      <div className="pt-14">
        <ChapterHeader
          kicker="04 · Outcomes"
          title="What it actually proves"
          intro="A student attendance tool is a small thing. Building one that survives production, serves a whole class concurrently, and delivers itself on a schedule is not. Here's what the project demonstrates — and the lessons that carry to the next system."
        />

        {/* learned outcomes */}
        <section className="relative py-14">
          <div className="mx-auto max-w-4xl px-4">
            <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-primary/70">
              Learned outcomes
            </p>
            <h2 className="mb-8 font-sora text-2xl font-semibold text-slate-900">
              Five lessons, one per turning point
            </h2>
            <motion.div
              className="space-y-4"
              initial={reduce ? false : "hidden"}
              whileInView={reduce ? undefined : "show"}
              viewport={{ once: true }}
              variants={reduce ? undefined : listStagger}
            >
              {OUTCOMES.map((o, i) => (
                <motion.div
                  key={o.title}
                  variants={reduce ? undefined : lineItem}
                  className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <span className="font-sora text-3xl font-bold text-primary/20">{`0${i + 1}`}</span>
                  <div>
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <h3 className="font-sora text-base font-semibold text-slate-900">{o.title}</h3>
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-[10px] text-slate-500">
                        {o.from}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600">{o.body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* skills mapped to evidence */}
        <section className="relative border-t border-slate-200/70 bg-white/50 py-16">
          <div className="mx-auto max-w-4xl px-4">
            <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-primary/70">
              Skills, with evidence
            </p>
            <h2 className="mb-3 font-sora text-2xl font-semibold text-slate-900">
              Not claimed — demonstrated
            </h2>
            <p className="mb-8 max-w-2xl text-slate-600">
              Every skill below maps to a specific decision in the codebase. That's the whole point of
              a case study: not a list of technologies, but proof of judgment.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {SKILLS.map((s) => (
                <motion.div
                  key={s.skill}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, ease: easeOutExpo }}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    <p className="font-sora text-sm font-semibold text-slate-900">{s.skill}</p>
                  </div>
                  <p className="pl-6 text-sm leading-relaxed text-slate-600">{s.evidence}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* the frontier statement */}
        <section className="relative py-16">
          <div className="mx-auto max-w-4xl px-4">
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-8 md:p-12">
              <div
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  background: `radial-gradient(ellipse 60% 50% at 90% 0%, rgba(79,70,229,0.25), transparent 60%),
                    radial-gradient(ellipse 50% 50% at 0% 100%, rgba(6,182,212,0.18), transparent 60%)`,
                }}
                aria-hidden
              />
              <div className="relative">
                <p className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-cyan-300/80">
                  Why it matters
                </p>
                <h2 className="mb-5 font-sora text-2xl font-semibold leading-tight text-white md:text-3xl">
                  This is what building at the frontier actually looks like
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-slate-300">
                  <p>
                    Not a demo. Not a notebook. A deployed system that real students depend on every
                    morning — engineered through five production failures into a four-second response,
                    concurrent for a whole class, and honest about the data it must never cache.
                  </p>
                  <p>
                    The frontier of software isn't a bigger model or a trendier framework. It's the
                    judgment to notice the AJAX call already on the wire, to split a tool schema so a
                    model will trust it, to cap concurrency at exactly the number a 512MB box can hold.
                    Small decisions, made correctly, under real constraints.
                  </p>
                  <p className="font-medium text-white">
                    That's the work I want to be doing — and this is the proof I can do it.
                  </p>
                </div>
                <p className="mt-6 font-mono text-sm text-slate-400">— Sharan Goutham</p>
              </div>
            </div>
          </div>
        </section>

        {/* stack */}
        <section className="relative border-t border-slate-200/70 bg-white/50 py-16">
          <div className="mx-auto max-w-4xl px-4">
            <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-primary/70">
              Stack
            </p>
            <h2 className="mb-8 font-sora text-2xl font-semibold text-slate-900">
              Four dependencies, one file
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

        {/* final CTA */}
        <section className="relative py-16">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="mb-3 font-sora text-2xl font-semibold text-slate-900">See the code</h2>
            <p className="mx-auto mb-8 max-w-xl text-slate-600">
              The entire server is a single 575-line Python file. Four dependencies. Deployed on
              Render's free tier. Fork it, set your credentials as env vars, and connect it to any MCP
              client in under five minutes.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="rounded-xl shadow-sm shadow-primary/10">
                <a href={LINKS.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-slate-200">
                <a href={LINKS.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live endpoint
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-xl text-slate-600">
                <Link href="/#projects">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  All projects
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </GsptShell>
  );
}
