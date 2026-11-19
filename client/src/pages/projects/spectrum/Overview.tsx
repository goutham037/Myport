import { motion, useReducedMotion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/usePageMeta";
import { easeOutExpo, listStagger, lineItem } from "@/lib/motion";
import { SpectrumShell } from "./SpectrumShell";
import { CountUp } from "./CountUp";
import { STATS, CHAPTERS, PRISM_GRADIENT, LOGO } from "./data";

const TITLE = "PRISM";

export default function SpectrumOverview() {
  usePageMeta(
    "Prism — Spectrum ERP Automation | Sharan Goutham",
    "A pharma ERP vendor quoted ₹1L/month for API access to the company's own data. Instead we built the data layer ourselves: scrapers, a 24×7 alert engine, a role-based RAG assistant, and AI voice agents that call suppliers and update a CRM on their own.",
  );
  const reduce = useReducedMotion();

  return (
    <SpectrumShell>
      {/* immersive hero band */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-5xl px-4 pb-16 pt-16 text-center md:pt-24">
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.9 }}
            animate={reduce ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
            className="mx-auto mb-7 h-20 w-20 md:h-24 md:w-24"
          >
            <img
              src={LOGO}
              alt="Prism by Spectrum"
              className="h-full w-full rounded-2xl shadow-lg shadow-slate-900/5 ring-1 ring-slate-900/5"
            />
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOutExpo, delay: reduce ? 0 : 0.1 }}
            className="mb-6 flex flex-wrap items-center justify-center gap-2"
          >
            <Badge className="gap-1.5 border-primary/20 bg-primary/10 font-mono text-xs text-primary">
              <Sparkles className="h-3 w-3" />
              Engineering Case Study
            </Badge>
            <Badge variant="secondary" className="font-mono text-xs">Pharma · ERP automation</Badge>
            <Badge variant="secondary" className="font-mono text-xs">Shipped 2026</Badge>
          </motion.div>

          {/* title assembles letter by letter in the prism spectrum */}
          <h1
            className="font-sora text-6xl font-bold leading-none tracking-tight sm:text-7xl md:text-8xl"
            style={{ perspective: 800 }}
          >
            {TITLE.split("").map((ch, i) => (
              <motion.span
                key={i}
                className="inline-block bg-clip-text text-transparent"
                style={{
                  backgroundImage: PRISM_GRADIENT,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  transformOrigin: "50% 100%",
                }}
                initial={reduce ? false : { opacity: 0, y: 40, rotateX: -55 }}
                animate={reduce ? undefined : { opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.65, ease: easeOutExpo, delay: reduce ? 0 : 0.25 + i * 0.08 }}
              >
                {ch}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: easeOutExpo, delay: reduce ? 0 : 0.6 }}
            className="mt-4 font-sora text-lg font-medium text-slate-500 md:text-xl"
          >
            Spectrum ERP Automation Platform
          </motion.p>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOutExpo, delay: reduce ? 0 : 0.72 }}
            className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg"
          >
            A pharma manufacturer's ERP vendor quoted ₹1,00,000 a month for API access to the
            company's own data. Instead of paying the toll, we built the data layer ourselves —
            scrapers, a 24×7 alert engine, a role-based RAG assistant, and AI voice agents that call
            suppliers and update a CRM without a human in the loop.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOutExpo, delay: reduce ? 0 : 0.84 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Button asChild size="lg" className="rounded-xl shadow-sm shadow-primary/10">
              <Link href={CHAPTERS[1].path}>
                Begin the story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl border-slate-200">
              <Link href="/#projects">All projects</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* animated stats */}
      <section className="relative pb-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: easeOutExpo, delay: reduce ? 0 : i * 0.07 }}
                className="rounded-2xl border border-slate-200 bg-white/80 p-6 text-center shadow-sm backdrop-blur-sm"
              >
                <p className="font-sora text-4xl font-bold text-slate-900 md:text-5xl">
                  {s.display ? (
                    s.display
                  ) : (
                    <CountUp value={s.value ?? 0} prefix={s.prefix} suffix={s.suffix} />
                  )}
                </p>
                <p className="mt-2 text-sm font-medium text-slate-600">{s.label}</p>
                <p className="mt-0.5 font-mono text-xs text-slate-400">{s.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* problem & solution — two columns */}
      <section className="relative border-t border-slate-200/70 bg-white/50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-rose-400">
                The problem
              </p>
              <h2 className="mb-3 font-sora text-xl font-semibold text-slate-900">
                Charged a lakh a month to read their own data
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Spectrum Formulation Pvt. Ltd. runs on a SaaS ERP. The vendor wanted
                ₹1,00,000 every month for API access to the company's own production, sales, stock
                and purchase data. On top of the fee, the operation still ran on manual follow-ups —
                phoning the factory for stage updates, chasing suppliers on late materials, compiling
                productivity numbers by hand.
              </p>
            </div>
            <div>
              <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-emerald-500">
                The solution
              </p>
              <h2 className="mb-3 font-sora text-xl font-semibold text-slate-900">
                Build the data layer, then make it run itself
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Playwright scrapers export the data for free into one scheduled Postgres snapshot that
                feeds everything downstream. On top of it: a 24×7 WhatsApp alert engine, a role-based
                assistant that answers in ₹ and charts, and AI voice agents that place supplier calls
                and update a CRM on their own. The brief was two things at once — get the data out
                without paying the toll, and make the operation run itself.
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
    </SpectrumShell>
  );
}
