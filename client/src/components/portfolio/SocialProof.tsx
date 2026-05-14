import { motion } from "framer-motion";

export function SocialProof() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <motion.figure
          className="rounded-xl border border-border bg-muted/40 p-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <blockquote className="text-center text-base italic leading-relaxed text-foreground md:text-lg">
            &ldquo;Twice district winner at Srujana Tech Fest, Top 5 at state (2025), and published research in IJARST
            — proof that I ship under pressure and document what I build.&rdquo;
          </blockquote>
          <figcaption className="mt-4 text-center font-mono text-xs text-muted-foreground">
            — Competition & research highlights (Govt Polytechnic Nalgonda)
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
