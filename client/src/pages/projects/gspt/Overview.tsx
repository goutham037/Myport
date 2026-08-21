import { motion, useReducedMotion } from "framer-motion";
import { Link } from "wouter";
import { Github, ExternalLink, ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/usePageMeta";
import { easeOutExpo, listStagger, lineItem } from "@/lib/motion";
import { GsptShell } from "./GsptShell";
import { CountUp } from "./CountUp";
import { STATS, CHAPTERS, LINKS } from "./data";

const TITLE = "GSPT";
const SUB = "GRIET Portal MCP Server";

export default function GsptOverview() {
  usePageMeta(
    "GSPT — An Engineering Case Study | Sharan Goutham",
    "How a legacy student portal with no API became AI-native infrastructure: 6 versions, 5 optimizations, 75% faster, with automated daily intelligence via Grok.",
  );
  const reduce = useReducedMotion();

  return (
    <GsptShell>
      {/* immersive hero band */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-5xl px-4 pb-16 pt-16 text-center md:pt-24">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOutExpo }}
            className="mb-6 flex flex-wrap items-center justify-center gap-2"
          >
            <Badge className="gap-1.5 border-primary/20 bg-primary/10 font-mono text-xs text-primary">
              <Sparkles className="h-3 w-3" />
              Engineering Case Study
            </Badge>
            <Badge variant="secondary" className="font-mono text-xs">Shipped 2026</Badge>
            <Badge variant="secondary" className="font-mono text-xs">Live on Render</Badge>
          </motion.div>

          {/* title assembles letter-band */}
          <h1
            className="font-sora text-6xl font-bold leading-none tracking-tight text-slate-900 sm:text-7xl md:text-8xl"
            style={{ perspective: 800 }}
          >
            {TITLE.split("").map((ch, i) => (
              <motion.span
                key={i}
                className="inline-block bg-gradient-to-br from-primary via-indigo-500 to-cyan-500 bg-clip-text text-transparent"
                style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", transformOrigin: "50% 100%" }}
                initial={reduce ? false : { opacity: 0, y: 40, rotateX: -55 }}
                animate={reduce ? undefined : { opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.65, ease: easeOutExpo, delay: reduce ? 0 : 0.15 + i * 0.08 }}
              >
                {ch}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: easeOutExpo, delay: reduce ? 0 : 0.5 }}
            className="mt-4 font-sora text-lg font-medium text-slate-500 md:text-xl"
          >
            {SUB}
          </motion.p>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOutExpo, delay: reduce ? 0 : 0.62 }}
            className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg"
          >
            A legacy ASP.NET student portal with no API, no notifications, and no way for an AI to
            reach it. Over twelve months and six versions, it became AI-native infrastructure —
            concurrent, cached where it should be, fresh where it must be, and delivering attendance
            intelligence to students before they even ask.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOutExpo, delay: reduce ? 0 : 0.74 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Button asChild size="lg" className="rounded-xl shadow-sm shadow-primary/10">
              <Link href={CHAPTERS[1].path}>
                Begin the story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl border-slate-200">
              <a href={LINKS.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="rounded-xl text-slate-600">
              <a href={LINKS.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live endpoint
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* animated stats */}
      <section className="relative pb-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: easeOutExpo, delay: reduce ? 0 : i * 0.08 }}
                className="rounded-2xl border border-slate-200 bg-white/80 p-6 text-center shadow-sm backdrop-blur-sm"
              >
                <p className="font-sora text-4xl font-bold text-slate-900 md:text-5xl">
                  <CountUp value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium text-slate-600">{s.label}</p>
                <p className="mt-0.5 font-mono text-xs text-slate-400">{s.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* what & why — two columns */}
      <section className="relative border-t border-slate-200/70 bg-white/50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-primary/70">
                The problem
              </p>
              <h2 className="mb-3 font-sora text-xl font-semibold text-slate-900">
                A portal you have to babysit
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                GRIET's portal is server-rendered ASP.NET — no REST API, no webhooks, no mobile view.
                With 8+ subjects and a 75% attendance floor, students log in several times a day just
                to check whether they can afford to miss a class. Miss the signal and you can slip
                below the line without ever noticing.
              </p>
            </div>
            <div>
              <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-primary/70">
                The solution
              </p>
              <h2 className="mb-3 font-sora text-xl font-semibold text-slate-900">
                One question, one answer
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                An MCP server between the portal and any AI client. "Can I skip tomorrow's OS class?"
                triggers a full login-scrape-parse cycle and returns a definitive answer with the math
                behind it — in about four seconds, for many students at once, with the projections and
                daily reports the portal never offered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* chapter map */}
      <section className="relative py-16">
        <div className="mx-auto max-w-4xl px-4">
          <p className="mb-2 text-center font-mono text-xs font-medium uppercase tracking-widest text-slate-400">
            Four chapters
          </p>
          <h2 className="mb-10 text-center font-sora text-2xl font-semibold text-slate-900">
            How this case study is laid out
          </h2>
          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            initial={reduce ? false : "hidden"}
            whileInView={reduce ? undefined : "show"}
            viewport={{ once: true }}
            variants={reduce ? undefined : listStagger}
          >
            {CHAPTERS.map((c) => (
              <motion.div key={c.slug} variants={reduce ? undefined : lineItem}>
                <Link href={c.path}>
                  <div className="group flex cursor-pointer items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-primary/30 hover:shadow-md">
                    <span className="font-mono text-2xl font-bold text-primary/25">{c.n}</span>
                    <div className="flex-1">
                      <p className="font-sora text-base font-semibold text-slate-900">{c.label}</p>
                      <p className="mt-0.5 text-sm text-slate-500">{c.kicker}</p>
                    </div>
                    <ArrowRight className="mt-1 h-4 w-4 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </GsptShell>
  );
}
