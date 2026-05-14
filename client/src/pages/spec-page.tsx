import { PageLayout } from "@/components/site/PageLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { DESIGN_SPEC } from "@/content/designSpec";
import { systems } from "@/components/portfolio/systems";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function SpecPage() {
  usePageMeta(
    "Design spec — Sharan portfolio",
    "Interactive blueprint: brand, colors, typography, section order, systems, and UX principles.",
  );

  return (
    <PageLayout>
      <PageHeader
        eyebrow="Living document"
        title="Design blueprint"
        subtitle="Canonical spec for this portfolio build — brand, layout, systems copy, and UX guardrails. Edit content/designSpec.ts and aligned components together."
      />

      <div className="mx-auto max-w-3xl space-y-6 px-4 pb-24">
        <Card className="border-slate-200 bg-slate-50">
          <CardContent className="p-5 text-sm text-slate-600">
            <p>
              <strong className="text-slate-900">Brand goal:</strong> {DESIGN_SPEC.brandGoal}
            </p>
          </CardContent>
        </Card>

        <Accordion type="multiple" className="w-full space-y-2">
          <AccordionItem value="brand" className="rounded-xl border border-slate-200 border-b-0 bg-white px-4">
            <AccordionTrigger className="font-sora text-slate-900 hover:no-underline">Brand & positioning</AccordionTrigger>
            <AccordionContent className="space-y-2 pb-4 text-sm text-slate-600">
              <p>
                <span className="font-medium text-slate-800">Name:</span> {DESIGN_SPEC.brand.name}
              </p>
              <p>
                <span className="font-medium text-slate-800">Role:</span> {DESIGN_SPEC.brand.role}
              </p>
              <p>
                <span className="font-medium text-slate-800">Tagline:</span> {DESIGN_SPEC.brand.tagline}
              </p>
              <p className="font-medium text-slate-800">Personality</p>
              <ul className="list-inside list-disc">
                {DESIGN_SPEC.brand.personality.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="visual" className="rounded-xl border border-slate-200 border-b-0 bg-white px-4">
            <AccordionTrigger className="font-sora text-slate-900 hover:no-underline">Color & typography</AccordionTrigger>
            <AccordionContent className="pb-4">
              <dl className="grid gap-2 text-sm text-slate-600">
                {Object.entries(DESIGN_SPEC.colors).map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 border-b border-slate-100 py-1">
                    <dt className="capitalize text-slate-800">{k}</dt>
                    <dd className="font-mono text-xs">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-sm text-slate-600">
                Headings: {DESIGN_SPEC.typography.headings} · Body: {DESIGN_SPEC.typography.body}
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="layout" className="rounded-xl border border-slate-200 border-b-0 bg-white px-4">
            <AccordionTrigger className="font-sora text-slate-900 hover:no-underline">Section order</AccordionTrigger>
            <AccordionContent className="pb-4">
              <ol className="list-inside list-decimal space-y-1 text-sm text-slate-600">
                {DESIGN_SPEC.sectionOrder.map((s, i) => (
                  <li key={s}>
                    {i + 1}. {s}
                  </li>
                ))}
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="systems" className="rounded-xl border border-slate-200 border-b-0 bg-white px-4">
            <AccordionTrigger className="font-sora text-slate-900 hover:no-underline">Systems built (titles)</AccordionTrigger>
            <AccordionContent className="pb-4">
              <ul className="space-y-2 text-sm text-slate-600">
                {systems.map((s) => (
                  <li key={s.name}>
                    <span className="font-medium text-slate-800">{s.name}</span> — {s.impactLine}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="ux" className="rounded-xl border border-slate-200 border-b-0 bg-white px-4">
            <AccordionTrigger className="font-sora text-slate-900 hover:no-underline">UI / animation guardrails</AccordionTrigger>
            <AccordionContent className="pb-4 text-sm text-slate-600">
              <p className="font-medium text-slate-800">Use</p>
              <ul className="mb-3 list-inside list-disc">
                {DESIGN_SPEC.uiPrinciples.use.map((u) => (
                  <li key={u}>{u}</li>
                ))}
              </ul>
              <p className="font-medium text-slate-800">Avoid</p>
              <ul className="mb-3 list-inside list-disc">
                {DESIGN_SPEC.uiPrinciples.avoid.map((u) => (
                  <li key={u}>{u}</li>
                ))}
              </ul>
              <p className="font-medium text-slate-800">Motion</p>
              <ul className="list-inside list-disc">
                {DESIGN_SPEC.animation.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </PageLayout>
  );
}
