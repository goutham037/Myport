import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { SITE } from "@/content/site";
import { easeOutExpo } from "@/lib/motion";
import { ScrollProgress } from "@/components/site/ScrollProgress";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#systems", label: "Systems" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#expertise", label: "Expertise" },
  { href: "/#contact", label: "Contact" },
] as const;

function scrollToHash(hash: string) {
  if (!hash || hash === "#") return;
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function NavAnchor({
  href,
  label,
  onClick,
  className,
}: {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
}) {
  const [loc] = useLocation();
  const isSpec = href === "/spec";
  const isHash = href.startsWith("/#");
  const active = isSpec ? loc === "/spec" : false;

  const linkClass = cn(
    "relative block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors duration-300 after:absolute after:bottom-1 after:left-3 after:right-3 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-primary after:to-cyan-500 after:transition-transform after:duration-300 hover:bg-slate-50/80 hover:text-slate-900 hover:after:scale-x-100",
    active && "text-primary after:scale-x-100",
    className,
  );

  if (isSpec) {
    return (
      <Link href="/spec" onClick={onClick}>
        <span className={linkClass}>{label}</span>
      </Link>
    );
  }

  if (isHash) {
    const hash = href.slice(1);
    return (
      <a
        href={href}
        className={linkClass}
        onClick={(e) => {
          onClick?.();
          if (loc !== "/") {
            return;
          }
          e.preventDefault();
          scrollToHash(hash);
        }}
      >
        {label}
      </a>
    );
  }

  return null;
}

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [loc] = useLocation();
  const reduce = useReducedMotion();

  useEffect(() => {
    if (loc !== "/") return;
    const hash = window.location.hash;
    if (hash) {
      const t = setTimeout(() => scrollToHash(hash), 100);
      return () => clearTimeout(t);
    }
  }, [loc]);

  return (
    <motion.header
      className="relative sticky top-0 z-40 border-b border-slate-200/90 bg-white/85 backdrop-blur-md"
      initial={reduce ? false : { y: -12, opacity: 0 }}
      animate={reduce ? undefined : { y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: easeOutExpo }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" className="group flex shrink-0 flex-col gap-0.5">
          <span className="font-sora text-lg font-semibold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-primary">
            {SITE.navBrand}
          </span>
          <span className="hidden max-w-[200px] truncate text-[10px] font-medium uppercase tracking-wider text-slate-500 sm:block">
            {SITE.lockup}
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {links.map(({ href, label }) => (
            <NavAnchor key={href} href={href} label={label} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="border-slate-200 lg:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="border-slate-200 bg-white">
              <SheetHeader>
                <SheetTitle className="font-sora text-left text-slate-900">Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-1">
                {links.map(({ href, label }) => (
                  <NavAnchor key={href} href={href} label={label} onClick={() => setOpen(false)} />
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <ScrollProgress />
    </motion.header>
  );
}
