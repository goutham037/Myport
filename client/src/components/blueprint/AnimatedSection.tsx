import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { easeOutExpo } from "@/lib/motion";

type Variant = "white" | "muted";

const shell: Record<Variant, string> = {
  white: "bg-white border-slate-200",
  muted: "bg-slate-50 border-slate-200",
};

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  variant?: Variant;
  /** Default max-w-6xl; use max-w-3xl for narrative columns */
  innerMax?: "6xl" | "3xl";
  children: ReactNode;
};

export function AnimatedSection({
  id,
  eyebrow,
  title,
  subtitle,
  variant = "white",
  innerMax = "6xl",
  children,
}: Props) {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const blobY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <motion.section
      id={id}
      ref={sectionRef}
      className={cn("relative scroll-mt-24 overflow-hidden border-b", shell[variant], "px-4 py-20 md:py-24")}
      initial={reduce ? false : { opacity: 0, y: 36 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: reduce ? 0 : 0.72, ease: easeOutExpo }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-[0.45] motion-reduce:opacity-25"
        aria-hidden
        style={{
          background:
            variant === "muted"
              ? "radial-gradient(ellipse 80% 50% at 100% 0%, rgba(79,70,229,0.06), transparent 55%), radial-gradient(ellipse 60% 40% at 0% 100%, rgba(6,182,212,0.05), transparent 50%)"
              : "radial-gradient(ellipse 70% 45% at 0% 0%, rgba(79,70,229,0.05), transparent 50%)",
          y: reduce ? undefined : blobY,
        }}
      />
      <div className={cn("relative mx-auto", innerMax === "3xl" ? "max-w-3xl" : "max-w-6xl")}>
        <div className="relative inline-block">
          <motion.p
            className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-slate-500"
            initial={reduce ? false : { opacity: 0, x: -14 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.48, ease: easeOutExpo }}
          >
            {eyebrow}
          </motion.p>
          <motion.span
            aria-hidden
            className="absolute -bottom-0.5 left-0 h-px w-full max-w-[12rem] origin-left rounded-full bg-gradient-to-r from-primary via-cyan-500 to-transparent"
            initial={reduce ? false : { scaleX: 0, opacity: 0 }}
            whileInView={reduce ? undefined : { scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: easeOutExpo, delay: reduce ? 0 : 0.08 }}
          />
        </div>
        <motion.h2
          className="mt-5 font-sora text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl lg:text-6xl"
          initial={reduce ? false : { opacity: 0, y: 22, filter: "blur(10px)" }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.62, ease: easeOutExpo, delay: reduce ? 0 : 0.04 }}
        >
          {title}
        </motion.h2>
        {subtitle ? (
          <motion.p
            className="mt-4 max-w-2xl text-slate-600"
            initial={reduce ? false : { opacity: 0, y: 12, filter: "blur(6px)" }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.52, ease: easeOutExpo, delay: reduce ? 0 : 0.1 }}
          >
            {subtitle}
          </motion.p>
        ) : null}
        <motion.div
          className={subtitle ? "mt-10" : "mt-8"}
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.58, ease: easeOutExpo, delay: reduce ? 0 : 0.14 }}
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
}
