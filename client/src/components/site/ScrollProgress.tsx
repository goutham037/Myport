import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

/** Thin progress bar along the bottom edge of the sticky header. */
export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, {
    stiffness: reduce ? 400 : 90,
    damping: reduce ? 60 : 28,
    mass: 0.15,
  });

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] overflow-hidden" aria-hidden>
      <motion.div
        className="h-full w-full origin-left bg-gradient-to-r from-primary via-cyan-500 to-violet-500"
        style={{ scaleX: smooth }}
      />
    </div>
  );
}
