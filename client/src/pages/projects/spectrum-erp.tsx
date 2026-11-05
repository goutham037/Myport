import { motion, useReducedMotion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Calculator, Boxes, Tags } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/usePageMeta";
import { easeOutExpo, listStagger, lineItem } from "@/lib/motion";

const STATS = [
  { value: "968", label: "Products auto-priced", sub: "across the catalog" },
  { value: "519", label: "Raw-material rates", sub: "loaded into costing" },
  { value: "RM + PM", label: "+ markup", sub: "the costing model" },
  { value: "0", label: "Manual rate-sheets", sub: "once it was wired up" },
];

const STEPS = [
  {
    n: "01",
    title: "Load the raw-material rates",
    body: "519 raw-material and packaging rates are loaded into a single source of truth, so every product costs from the same numbers.",
  },
  {
    n: "02",
    title: "Build the bill of materials",
    body: "Each product maps to its raw materials and packaging. The BOM is what connects a finished product back to the rates it depends on.",
  },
  {
    n: "03",
    title: "Run the costing model",
    body: "Cost = raw-material cost + packaging cost + markup. The model computes a landed cost for every product from its BOM and the current rates.",
  },
  {
    n: "04",
    title: "Price the catalog",
    body: "968 products are priced automatically. Change a rate once and every affected product re-prices, instead of editing rate-sheets by hand.",
  },
];

export default function SpectrumErpPage() {
  usePageMeta(
    "Spectrum ERP — Cost & Pricing Automation | Sharan Goutham",
    "How I automated BOM-based product costing and pricing — 519 raw-material rates, 968 products, one costing model."
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
          <Badge variant="secondary" className="font-mono text-xs">Enterprise automation</Badge>
          <Badge variant="secondary" className="font-mono text-xs">Shipped · 2026</Badge>
          <Badge variant="secondary" className="font-mono text-xs">ERP · Pricing</Badge>
        </div>
        <h1 className="font-sora text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
          Spectrum ERP — Cost &amp; Pricing Automation
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
          Pricing a product catalog by hand means editing rate-sheets every time a raw material moves. I
          replaced that with a costing model that prices every product straight from its bill of materials.
        </p>
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
          <h2 className="mb-8 font-sora text-2xl font-semibold text-slate-900">What it does</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: Tags, title: "One rate source", body: "Raw-material and packaging rates live in one place, so costs never drift between spreadsheets." },
              { icon: Boxes, title: "BOM-driven costing", body: "Every product's cost is derived from its bill of materials, not typed in by hand." },
              { icon: Calculator, title: "Automatic pricing", body: "Change a rate and every affected product re-prices with the RM + PM + markup model." },
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
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-slate-400">How it works</p>
          <h2 className="mb-10 font-sora text-2xl font-semibold text-slate-900">Rates to prices, automatically</h2>
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
            {["JavaScript", "Firebase", "ERP integration", "REST APIs", "Business automation"].map((t) => (
              <Badge key={t} variant="secondary" className="text-sm font-normal">{t}</Badge>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
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
