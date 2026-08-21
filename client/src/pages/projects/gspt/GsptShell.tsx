import { type ReactNode, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Github } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { easeOutExpo } from "@/lib/motion";
import { CHAPTERS, LINKS } from "./data";

/** Strip the router base so we can compare against CHAPTERS paths. */
function useChapterIndex() {
  const [loc] = useLocation();
  const path = loc.replace(/\/$/, "") || "/";
  const idx = CHAPTERS.findIndex((c) => c.path === path);
  return idx === -1 ? 0 : idx;
}

/** Premium ambient background — dot grid + indigo/cyan radial glows. */
function Ambient() {
  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-70"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 80% -5%, rgba(79,70,229,0.10), transparent 55%),
            radial-gradient(ellipse 70% 55% at 0% 105%, rgba(6,182,212,0.08), transparent 55%)`,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.35] [background-image:radial-gradient(rgb(148_163_184/0.14)_1px,transparent_1px)] [background-size:26px_26px]"
        aria-hidden
      />
    </>
  );
}

/** Sticky chapter progress rail — the spine of the multi-page experience. */
function ChapterRail({ current }: { current: number }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLSpanElement>(null);

  // Mobile: keep the current chapter centered in the horizontally-scrolling rail.
  // Retries briefly because the exact overflow only settles once web fonts load.
  useEffect(() => {
    const center = () => {
      const s = scrollerRef.current;
      const c = activeRef.current;
      if (!s || !c) return;
      const target = c.offsetLeft - (s.clientWidth - c.offsetWidth) / 2;
      const clamped = Math.max(0, Math.min(target, s.scrollWidth - s.clientWidth));
      s.scrollLeft = clamped; // scroll-independent, so instant + idempotent
    };

    center();
    let tries = 0;
    const id = setInterval(() => {
      center();
      if (++tries >= 6) clearInterval(id);
    }, 120);
    return () => clearInterval(id);
  }, [current]);

  return (
    <div className="sticky top-16 z-30 border-b border-slate-200/70 bg-white/85 backdrop-blur-md">
      <div className="relative mx-auto max-w-6xl">
        {/* edge fades hint that the rail scrolls */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-white to-transparent sm:hidden" aria-hidden />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-white to-transparent sm:hidden" aria-hidden />
        <div
          ref={scrollerRef}
          className="flex items-center gap-1 overflow-x-auto px-4 py-2.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <Link href="/#projects">
            <span className="mr-1 inline-flex shrink-0 items-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-medium text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900">
              <ArrowLeft className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Projects</span>
            </span>
          </Link>
          <div className="h-4 w-px shrink-0 bg-slate-200" />
          {CHAPTERS.map((c, i) => {
            const active = i === current;
            const done = i < current;
            return (
              <Link key={c.slug} href={c.path}>
                <span
                  ref={active ? activeRef : undefined}
                  className={`group relative inline-flex shrink-0 items-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-medium transition-colors sm:px-3 ${
                    active
                      ? "bg-primary/10 text-primary"
                      : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] ${
                      active ? "text-primary" : done ? "text-emerald-500" : "text-slate-400"
                    }`}
                  >
                    {done ? "✓" : c.n}
                  </span>
                  {c.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
      {/* progress bar */}
      <div className="h-0.5 w-full bg-slate-100">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-cyan-400"
          initial={false}
          animate={{ width: `${((current + 1) / CHAPTERS.length) * 100}%` }}
          transition={{ duration: 0.5, ease: easeOutExpo }}
        />
      </div>
    </div>
  );
}

/** Bottom prev / next navigation — turns pages like a product tour. */
function ChapterNav({ current }: { current: number }) {
  const prev = current > 0 ? CHAPTERS[current - 1] : null;
  const next = current < CHAPTERS.length - 1 ? CHAPTERS[current + 1] : null;

  return (
    <section className="relative z-10 border-t border-slate-200/70 bg-white/60 py-10">
      <div className="mx-auto grid max-w-4xl gap-4 px-4 sm:grid-cols-2">
        {prev ? (
          <Link href={prev.path}>
            <div className="group flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-primary/30 hover:shadow-md">
              <ArrowLeft className="h-4 w-4 shrink-0 text-slate-400 transition-colors group-hover:text-primary" />
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                  {prev.n} · Previous
                </p>
                <p className="font-sora text-sm font-semibold text-slate-900">{prev.label}</p>
              </div>
            </div>
          </Link>
        ) : (
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer">
            <div className="group flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-primary/30 hover:shadow-md">
              <Github className="h-4 w-4 shrink-0 text-slate-400 transition-colors group-hover:text-primary" />
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">Source</p>
                <p className="font-sora text-sm font-semibold text-slate-900">View on GitHub</p>
              </div>
            </div>
          </a>
        )}
        {next ? (
          <Link href={next.path}>
            <div className="group flex cursor-pointer items-center justify-end gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-right shadow-sm transition-all hover:border-primary/30 hover:shadow-md">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                  Next · {next.n}
                </p>
                <p className="font-sora text-sm font-semibold text-slate-900">{next.label}</p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition-colors group-hover:text-primary" />
            </div>
          </Link>
        ) : (
          <a href={LINKS.live} target="_blank" rel="noopener noreferrer">
            <div className="group flex cursor-pointer items-center justify-end gap-3 rounded-2xl border border-primary/20 bg-primary/5 p-5 text-right shadow-sm transition-all hover:border-primary/40 hover:shadow-md">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-primary/60">Live now</p>
                <p className="font-sora text-sm font-semibold text-slate-900">Try the endpoint</p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-primary" />
            </div>
          </a>
        )}
      </div>
    </section>
  );
}

/**
 * Shared immersive shell for every GSPT chapter.
 * Wraps chapter content with the progress rail, ambient background,
 * page-transition animation, and prev/next navigation.
 */
export function GsptShell({ children }: { children: ReactNode }) {
  const current = useChapterIndex();
  const reduce = useReducedMotion();

  // Each chapter is a real page — start it at the top.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }, [current, reduce]);

  return (
    <PageLayout>
      <Ambient />
      <div className="relative z-10">
        <ChapterRail current={current} />
        <motion.div
          key={current}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOutExpo }}
        >
          {children}
        </motion.div>
        <ChapterNav current={current} />
      </div>
    </PageLayout>
  );
}

/** Small shared building blocks reused across chapters. */
export function ChapterHeader({
  kicker,
  title,
  intro,
}: {
  kicker: string;
  title: string;
  intro?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="mx-auto max-w-4xl px-4"
      initial={reduce ? false : { opacity: 0, y: 20 }}
      animate={reduce ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: easeOutExpo }}
    >
      <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-primary/70">
        {kicker}
      </p>
      <h1 className="font-sora text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h1>
      {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">{intro}</p>}
    </motion.div>
  );
}

export { LINKS };
