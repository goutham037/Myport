import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SiteShell } from "./SiteShell";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { easeOutExpo } from "@/lib/motion";

export function PageLayout({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <SiteShell>
      <SiteNav />
      <motion.main
        className="relative z-10"
        initial={reduce ? false : { opacity: 0, y: 10 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: easeOutExpo }}
      >
        {children}
      </motion.main>
      <SiteFooter />
    </SiteShell>
  );
}
