import { motion, useReducedMotion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { DESIGN_SPEC } from "@/content/designSpec";
import { easeOutExpo, listStagger, lineItem } from "@/lib/motion";

export function TrustMetricCards() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50 px-4 py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden>
        <div className="absolute left-1/2 top-0 h-40 w-[min(100%,48rem)] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.07),transparent_70%)]" />
      </div>
      <div className="relative mx-auto max-w-6xl">
        <motion.p
          className="mb-8 font-mono text-xs font-medium uppercase tracking-[0.2em] text-slate-500"
          initial={reduce ? false : { opacity: 0, y: 8 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: easeOutExpo }}
        >
          Trust metrics
        </motion.p>
        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "show"}
          viewport={{ once: true, margin: "-5%" }}
          variants={reduce ? undefined : listStagger}
        >
          {DESIGN_SPEC.trustMetrics.map((text, idx) => (
            <motion.div key={text} variants={reduce ? undefined : lineItem}>
              <motion.div whileHover={reduce ? undefined : { y: -6, transition: { type: "spring", stiffness: 380, damping: 22 } }}>
                <Card className="group relative h-full overflow-hidden border-slate-200 bg-white shadow-sm transition-all duration-500 hover:border-primary/30 hover:shadow-xl">
                  <div
                    className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-gradient-to-br from-primary/25 to-cyan-400/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden
                  />
                  <CardContent className="relative p-5">
                    <p className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-wider text-primary/80">{String(idx + 1).padStart(2, "0")}</p>
                    <p className="text-sm font-medium leading-snug text-slate-800">{text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
