import { motion, useReducedMotion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle2, GitCommit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/usePageMeta";
import { easeOutExpo, listStagger, lineItem } from "@/lib/motion";
import { SpectrumShell, ChapterHeader } from "./SpectrumShell";
import { PHASES, TAKEAWAYS, PRISM_GRADIENT } from "./data";

export default function SpectrumOutcomes() {
  usePageMeta(
    "Prism Outcomes — What It Proves | Sharan Goutham",
    "From a scraping foundation to AI voice agents in 15 tracked days — the build timeline, how Prism got its name, and what the project demonstrates: product judgement, full-stack depth, applied LLM engineering and automation that acts.",
  );
  const reduce = useReducedMotion();

  return (
    <SpectrumShell>
      <div className="pt-14">
        <ChapterHeader
          kicker="04 · Outcomes"
          title="From a foundation to voice agents"
          intro="The tracked git history spans 15 days and 34 commits — but it opens on the second act. The scraping and alert foundation was built and running first, then arrived bundled in the initial commit."
        />

        {/* timeline */}
        <section className="relative py-14 md:py-16">
          <div className="mx-auto max-w-4xl px-4">
            <div className="relative">
              <div
                className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-slate-300 via-slate-200 to-transparent md:left-1/2"
                aria-hidden
              />
              <div className="space-y-8">
                {PHASES.map((p, i) => {
                  const left = i % 2 === 0;
                  return (
                    <motion.div
                      key={p.tag}
                      initial={reduce ? false : { opacity: 0, y: 26 }}
                      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.55, ease: easeOutExpo }}
                      className={`relative pl-12 md:pl-0 ${left ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)]"}`}
                    >
                      <div
                        className="absolute left-2 top-5 flex h-6 w-6 items-center justify-center rounded-full border-2 bg-white shadow-sm md:left-1/2 md:-translate-x-1/2"
                        style={{ borderColor: p.accent }}
                        aria-hidden
                      >
                        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: p.accent }} />
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                        <div className="mb-3 flex flex-wrap items-center gap-2">
                          <span
                            className="rounded-md px-2 py-0.5 font-mono text-xs font-bold text-white"
                            style={{ backgroundColor: p.accent }}
                          >
                            {p.tag}
                          </span>
                          <span className="font-sora text-base font-semibold text-slate-900">
                            {p.title}
                          </span>
                          <span className="font-mono text-[11px] text-slate-400">{p.date}</span>
                        </div>
                        <p className="mb-4 text-sm leading-relaxed text-slate-600">{p.what}</p>
                        <ul className="space-y-2">
                          {p.points.map((pt) => (
                            <li key={pt} className="flex gap-2 text-sm text-slate-600">
                              <span
                                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                                style={{ backgroundColor: p.accent }}
                              />
                              {pt}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
              <GitCommit className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm leading-relaxed text-slate-600">
                <span className="font-semibold text-slate-900">34 commits over 15 days (5–19 Nov).</span>{" "}
                The scraping and alert engine that made all of it possible predates the repository
                entirely — built and running in production before the first line was ever pushed.
              </p>
            </div>
          </div>
        </section>

        {/* how Prism got its name */}
        <section className="relative border-t border-slate-200/70 bg-white/50 py-16">
          <div className="mx-auto max-w-4xl px-4">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="h-1.5 w-full" style={{ backgroundImage: PRISM_GRADIENT }} aria-hidden />
              <div className="p-8 md:p-10">
                <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-primary/70">
                  The name
                </p>
                <h2 className="mb-5 font-sora text-2xl font-semibold text-slate-900">
                  One beam in, a full spectrum out
                </h2>
                <div className="space-y-4 text-sm leading-relaxed text-slate-600 md:text-base">
                  <p>
                    The assistant first shipped as “Spectrum AI”. It was renamed Prism the same
                    day — and the metaphor fit on two levels. A prism takes a single beam of white
                    light and refracts it into its full spectrum of colours.
                  </p>
                  <p>
                    Prism takes one raw ERP data stream and refracts it into a clear, role-specific
                    view for every team — production sees stages, procurement sees POs, management
                    sees money. And the company itself is Spectrum Formulation, so the instrument that
                    produces a spectrum was the natural name for the tool that reads it.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-2 font-mono text-xs text-slate-500">
                  <span className="rounded-lg bg-slate-100 px-3 py-1.5">One ERP data stream</span>
                  <span className="text-slate-300">→</span>
                  <span
                    className="rounded-lg px-3 py-1.5 font-semibold text-white"
                    style={{ backgroundImage: PRISM_GRADIENT }}
                  >
                    Prism
                  </span>
                  <span className="text-slate-300">→</span>
                  <span className="rounded-lg bg-slate-100 px-3 py-1.5">Production</span>
                  <span className="rounded-lg bg-slate-100 px-3 py-1.5">Procurement</span>
                  <span className="rounded-lg bg-slate-100 px-3 py-1.5">Sales</span>
                  <span className="rounded-lg bg-slate-100 px-3 py-1.5">Management</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* takeaways */}
        <section className="relative py-16">
          <div className="mx-auto max-w-4xl px-4">
            <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-primary/70">
              What it demonstrates
            </p>
            <h2 className="mb-3 font-sora text-2xl font-semibold text-slate-900">
              Not claimed — demonstrated
            </h2>
            <p className="mb-8 max-w-2xl text-slate-600">
              Every takeaway below maps to a specific decision in the build. That's the whole point of
              a case study: not a list of technologies, but proof of judgment.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {TAKEAWAYS.map((t) => (
                <motion.div
                  key={t.skill}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, ease: easeOutExpo }}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    <p className="font-sora text-sm font-semibold text-slate-900">{t.skill}</p>
                  </div>
                  <p className="pl-6 text-sm leading-relaxed text-slate-600">{t.evidence}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* frontier statement */}
        <section className="relative pb-4">
          <div className="mx-auto max-w-4xl px-4">
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-8 md:p-12">
              <div
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  background: `radial-gradient(ellipse 60% 50% at 90% 0%, rgba(168,85,247,0.25), transparent 60%),
                    radial-gradient(ellipse 50% 50% at 0% 100%, rgba(34,197,94,0.16), transparent 60%)`,
                }}
                aria-hidden
              />
              <div className="relative">
                <p className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-cyan-300/80">
                  Why it matters
                </p>
                <h2 className="mb-5 font-sora text-2xl font-semibold leading-tight text-white md:text-3xl">
                  A toll turned into an asset the company owns
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-slate-300">
                  <p>
                    Not a dashboard demo. A system a pharma manufacturer runs its day on — the data
                    the vendor wanted ₹1 lakh a month for, pulled for free and then made to do far
                    more than the API ever would: chase suppliers, price products, place calls, update
                    a CRM, and answer any team's question in its own terms.
                  </p>
                  <p>
                    The interesting part isn't any one model call. It's the judgment to compute money
                    server-side so the model can't fumble a crore, to pick tools by embedding instead of
                    trusting the model with SQL, to skip the one footer row that quietly doubled a
                    total. Small decisions, made correctly, under real business stakes.
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

        {/* credit + CTA */}
        <section className="relative py-16">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-slate-500">
              Built for Spectrum Formulation Pvt. Ltd. — an ERP automation, scraping, assistant and
              voice-agent platform. Source and live endpoints are private to the client.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" variant="outline" className="rounded-xl border-slate-200">
                <Link href="/projects/spectrum-erp">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Restart the story
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-xl text-slate-600">
                <Link href="/#projects">All projects</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </SpectrumShell>
  );
}
