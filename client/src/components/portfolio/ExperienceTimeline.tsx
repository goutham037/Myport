import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import type { ExperienceItem } from "@/content/experience";
import { experienceItems } from "@/content/experience";

type Props = {
  items?: ExperienceItem[];
  title?: string;
  viewAllHref?: string;
};

export function ExperienceTimeline({ items, title = "Experience", viewAllHref }: Props) {
  const list = items ?? experienceItems.filter((e) => e.kind === "work");

  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="font-sora text-3xl font-semibold tracking-tight text-foreground md:text-4xl">{title}</h2>
          {viewAllHref ? (
            <Button asChild variant="outline" className="shrink-0 rounded-lg">
              <Link href={viewAllHref}>Full timeline</Link>
            </Button>
          ) : null}
        </div>
        <div className="relative border-l border-border pl-8 md:pl-10">
          {list.map((m, i) => (
            <motion.article
              key={m.id}
              className="relative pb-12 last:pb-0"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background md:-left-[11px]" />
              <p className="font-mono text-xs text-muted-foreground">
                {m.period}
                {m.location ? ` · ${m.location}` : ""}
              </p>
              <h3 className="font-sora mt-1 text-lg font-semibold text-foreground">
                {m.title} — {m.org}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{m.summary}</p>
              {m.highlights.length ? (
                <ul className="mt-3 max-w-2xl list-inside list-disc space-y-1 text-sm text-muted-foreground">
                  {m.highlights.slice(0, 2).map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              ) : null}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
