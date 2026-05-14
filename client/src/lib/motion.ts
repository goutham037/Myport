/** Shared easing + motion presets — use with `useReducedMotion()` from framer-motion when needed. */
export const easeOutExpo = [0.22, 1, 0.36, 1] as const;

export const springSnappy = { type: "spring" as const, stiffness: 380, damping: 28 };

export const springSoft = { type: "spring" as const, stiffness: 260, damping: 32 };

export const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: easeOutExpo, delay: 0.06 * i },
  }),
};

export const staggerChildren = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

export const listStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.06 } },
};

export const lineItem = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.48, ease: easeOutExpo } },
};

export const cardHover = {
  rest: { scale: 1, y: 0, boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.04)" },
  hover: {
    scale: 1.015,
    y: -4,
    boxShadow: "0 20px 40px -16px rgb(15 23 42 / 0.12)",
    transition: springSnappy,
  },
  tap: { scale: 0.99, transition: { duration: 0.15 } },
};
