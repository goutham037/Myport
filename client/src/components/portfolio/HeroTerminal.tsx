import { motion } from "framer-motion";

const lines: { prompt?: boolean; text: string }[] = [
  { prompt: true, text: "campaign-health --account META_01" },
  { text: "[14:32:01] fatigue_index: 0.82 (elevated)" },
  { text: "[14:32:01] creative_rotation: recommended" },
  { text: "[14:32:01] budget_throttle: inactive" },
  { text: "[14:32:02] anomaly: none — pipeline stable" },
];

export function HeroTerminal() {
  return (
    <motion.div
      className="w-full overflow-hidden rounded-xl border border-border bg-card/80 shadow-xl backdrop-blur-sm"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
    >
      <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-2">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-amber-400/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
        <span className="ml-2 font-mono text-xs text-muted-foreground">sociovia / prod</span>
      </div>
      <pre className="max-h-[320px] overflow-x-auto p-4 font-mono text-xs leading-relaxed md:text-sm">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.35 + i * 0.08 }}
            className="whitespace-pre-wrap"
          >
            {line.prompt ? (
              <>
                <span className="text-emerald-600 dark:text-emerald-400">$ </span>
                {line.text}
              </>
            ) : (
              <span className="text-muted-foreground">{line.text}</span>
            )}
          </motion.div>
        ))}
        <motion.span
          className="mt-2 inline-block h-4 w-2 bg-primary"
          aria-hidden
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </pre>
    </motion.div>
  );
}
