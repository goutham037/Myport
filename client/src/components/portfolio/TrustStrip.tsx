import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const rows = [
  { label: "Diploma CGPA (CSE)", value: "9.52 / 10.0" },
  { label: "Class 10 CGPA", value: "10.0 / 10.0" },
  { label: "Srujana Tech Fest", value: "2× district winner · state Top 5 / Top 10" },
  { label: "Research", value: "Published — IJARST (Holovision)" },
] as const;

export function TrustStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });

  return (
    <motion.section
      ref={ref}
      className="border-y border-border bg-muted/30"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-6xl px-4 py-10">
        <table className="w-full border-collapse font-mono text-xs md:text-sm">
          <tbody>
            {rows.map((row, index) => (
              <motion.tr
                key={row.label}
                className="border-b border-border last:border-0"
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: index * 0.1 }}
              >
                <td className="py-3 pr-4 align-top text-muted-foreground md:py-4">{row.label}</td>
                <td className="py-3 text-right font-medium text-foreground md:py-4">{row.value}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.section>
  );
}
