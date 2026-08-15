import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { SITE } from "@/content/site";
import { easeOutExpo } from "@/lib/motion";
import { BASE } from "@/lib/utils";

const footerLinks = [
  { href: `${BASE}/#about`, label: "About" },
  { href: `${BASE}/#systems`, label: "Systems" },
  { href: `${BASE}/#projects`, label: "Projects" },
  { href: `${BASE}/#experience`, label: "Experience" },
  { href: `${BASE}/#contact`, label: "Contact" },
];

export function SiteFooter() {
  const reduce = useReducedMotion();

  return (
    <motion.footer
      className="border-t border-slate-200 bg-slate-50/90 px-4 py-14"
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.55, ease: easeOutExpo }}
    >
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <p className="font-sora text-lg font-semibold text-slate-900">{SITE.name}</p>
          <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-primary/90">{SITE.lockup}</p>
          <p className="mt-2 text-sm text-slate-600">{SITE.headline}</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
            Building production-grade AI growth infrastructure — calm, technical, product-first.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <a
              className="inline-flex items-center gap-1.5 text-slate-600 transition-all duration-300 hover:translate-x-0.5 hover:text-primary"
              href={`mailto:${SITE.email}`}
            >
              <Mail className="h-4 w-4" aria-hidden />
              Email
            </a>
            <a
              className="inline-flex items-center gap-1.5 text-slate-600 transition-all duration-300 hover:translate-x-0.5 hover:text-primary"
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" aria-hidden />
              GitHub
            </a>
            <a
              className="inline-flex items-center gap-1.5 text-slate-600 transition-all duration-300 hover:translate-x-0.5 hover:text-primary"
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" aria-hidden />
              LinkedIn
            </a>
          </div>
        </div>
        <nav className="flex flex-col gap-2 text-sm md:items-end">
          {footerLinks.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              className="text-slate-600 transition-colors duration-300 hover:text-primary"
              initial={reduce ? false : { opacity: 0, x: 8 }}
              whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reduce ? 0 : 0.04 * i, duration: 0.35, ease: easeOutExpo }}
            >
              {l.label}
            </motion.a>
          ))}
        </nav>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-center text-xs text-slate-500 md:text-left">
        © {new Date().getFullYear()} {SITE.fullName}. Crafted for clarity and signal.
      </p>
    </motion.footer>
  );
}
