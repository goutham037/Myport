import { motion, useReducedMotion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tilt3D } from "@/components/site/Tilt3D";
import { cn } from "@/lib/utils";
import { springSoft } from "@/lib/motion";

export type SystemStatus = "live" | "building" | "internal";

export type SystemCardProps = {
  status: SystemStatus;
  name: string;
  impactLine: string;
  description: string;
  businessOutcome: string;
  features: string[];
  stack: string[];
  index: number;
};

const statusLabel: Record<SystemStatus, string> = {
  live: "Live",
  building: "Building",
  internal: "Internal",
};

const statusClass: Record<SystemStatus, string> = {
  live: "border-emerald-200 bg-emerald-50 text-emerald-800",
  building: "border-amber-200 bg-amber-50 text-amber-900",
  internal: "border-slate-200 bg-slate-50 text-slate-600",
};

export function SystemCard({
  status,
  name,
  impactLine,
  description,
  businessOutcome,
  features,
  stack,
  index,
}: SystemCardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: reduce ? 0 : index * 0.07 }}
      whileHover={reduce ? undefined : { y: -6, transition: springSoft }}
    >
      <Tilt3D className="h-full" max={6}>
        <Card className="group relative h-full overflow-hidden border-slate-200/90 bg-white shadow-sm transition-all duration-500 hover:border-primary/35 hover:shadow-2xl hover:shadow-slate-900/[0.06]">
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-cyan-500/[0.05] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden
          />
          <CardHeader className="relative space-y-3 pb-2">
            <Badge variant="outline" className={cn("w-fit border font-medium transition-colors duration-300", statusClass[status])}>
              {statusLabel[status]}
            </Badge>
            <div>
              <h3 className="font-sora text-xl font-semibold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-primary">
                {name}
              </h3>
              <p className="mt-1 text-sm text-slate-600">{impactLine}</p>
            </div>
          </CardHeader>
          <CardContent className="relative space-y-4 text-sm leading-relaxed text-slate-600">
            <p>{description}</p>
            <div>
              <p className="font-medium text-slate-900">Key features</p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-slate-600">
                {features.map((f, i) => (
                  <motion.li
                    key={f}
                    initial={reduce ? false : { opacity: 0, x: -6 }}
                    whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: reduce ? 0 : 0.04 * i + index * 0.02, duration: 0.35 }}
                  >
                    {f}
                  </motion.li>
                ))}
              </ul>
            </div>
            <p>
              <span className="font-medium text-slate-900">Business impact: </span>
              {businessOutcome}
            </p>
            <div>
              <p className="mb-2 font-medium text-slate-900">Technologies</p>
              <div className="flex flex-wrap gap-2">
                {stack.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="border-slate-200 bg-slate-50 font-normal text-slate-700 transition-colors duration-200 hover:border-primary/30 hover:bg-primary/5"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </Tilt3D>
    </motion.div>
  );
}
