import { motion, useReducedMotion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Github, Palette, LayoutGrid, Sparkles } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/usePageMeta";
import { easeOutExpo, listStagger, lineItem } from "@/lib/motion";

const REPO = "https://github.com/goutham037/lexamplify-template";

const STATS = [
  { value: "8", label: "Core screens", sub: "redesigned" },
  { value: "7", label: "Themes", sub: "in the Theme Studio" },
  { value: "3", label: "Layouts", sub: "switchable in-app" },
  { value: "1", label: "Design system", sub: "shared across the app" },
];

const STEPS = [
  {
    n: "01",
    title: "Set the visual identity",
    body: "A warm, premium palette — ivory, forest green, and gold — gives the product a calm, editorial feel that fits a legal-AI audience rather than a generic SaaS look.",
  },
  {
    n: "02",
    title: "Build one design system",
    body: "Type scale, spacing, color tokens, and components are defined once and reused, so every screen looks like part of the same product.",
  },
  {
    n: "03",
    title: "Redesign the core screens",
    body: "Eight core screens were rebuilt on top of the system, replacing inconsistent one-off layouts with a coherent, polished experience.",
  },
  {
    n: "04",
    title: "Ship an in-app Theme Studio",
    body: "Seven themes and three layouts can be switched inside the app, so the look can be tuned without touching code.",
  },
];

export default function LexAmplifyPage() {
  usePageMeta(
    "LexAmplify — Legal-AI Platform Redesign | Sharan Goutham",
    "A front-end redesign for a legal-AI product: one design system, 8 core screens, and an in-app Theme Studio with 7 themes and 3 layouts."
  );
  const reduce = useReducedMotion();

  return (
    <PageLayout>
      <div className="mx-auto max-w-4xl px-4 pt-10">
        <Link href="/#projects">
          <span className="inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-slate-900">
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </span>
        </Link>
      </div>

      <motion.section
        className="mx-auto max-w-4xl px-4 pb-12 pt-8"
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: easeOutExpo }}
      >
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <Badge variant="secondary" className="font-mono text-xs">Front-end</Badge>
          <Badge variant="secondary" className="font-mono text-xs">Design system</Badge>
          <Badge variant="secondary" className="font-mono text-xs">Legal AI</Badge>
        </div>
        <h1 className="font-sora text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
          LexAmplify — Legal-AI Platform Redesign
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
          A legal-AI product with screens that each looked a little different. I rebuilt the front-end on one
          design system — a warm ivory, forest-green, and gold identity — and gave it an in-app Theme Studio so
          the look can be tuned without code.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="rounded-xl shadow-sm shadow-primary/10">
            <a href={REPO} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>
      </motion.section>

      {/* stats */}
      <section className="border-t border-slate-100 bg-slate-50/60 py-14">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 px-4 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
              <p className="font-sora text-3xl font-bold tracking-tight text-slate-900">{s.value}</p>
              <p className="mt-1 text-sm font-medium text-slate-800">{s.label}</p>
              <p className="mt-0.5 text-xs text-slate-500">{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* what it does */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-slate-400">Overview</p>
          <h2 className="mb-8 font-sora text-2xl font-semibold text-slate-900">What changed</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: Palette, title: "A real identity", body: "Ivory, forest green, and gold give the product a premium, trustworthy feel built for legal work." },
              { icon: Sparkles, title: "One system", body: "Shared tokens and components mean every screen is consistent instead of hand-styled." },
              { icon: LayoutGrid, title: "Theme Studio", body: "Seven themes and three layouts can be switched inside the app, no code change needed." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <c.icon className="h-6 w-6 text-primary" aria-hidden />
                <h3 className="mb-2 mt-3 font-sora text-base font-semibold text-slate-900">{c.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* how it works */}
      <section className="border-t border-slate-100 bg-slate-50/60 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-slate-400">The redesign</p>
          <h2 className="mb-10 font-sora text-2xl font-semibold text-slate-900">From mixed screens to one product</h2>
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
                <span className="mt-0.5 shrink-0 font-mono text-2xl font-bold leading-none text-primary/30">{step.n}</span>
                <div>
                  <h3 className="mb-1 font-sora text-base font-semibold text-slate-900">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* stack + CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-slate-400">Stack</p>
          <h2 className="mb-6 font-sora text-2xl font-semibold text-slate-900">Built with</h2>
          <div className="flex flex-wrap gap-2">
            {["TypeScript", "React", "Tailwind CSS", "Design system", "Theming"].map((t) => (
              <Badge key={t} variant="secondary" className="text-sm font-normal">{t}</Badge>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-xl shadow-sm shadow-primary/10">
              <a href={REPO} target="_blank" rel="noopener noreferrer">
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
