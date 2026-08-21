import { type ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const DURATION = 4200; // ms each card stays before auto-advancing

/**
 * Mobile "story mode" — a horizontal, snap-scrolling deck that AUTO-ADVANCES
 * like Instagram stories, so the content is seen without anyone needing to swipe.
 * Story-style segment bars fill as each card plays. The user can still swipe;
 * touching the deck pauses the auto-play so they can read.
 */
export function SwipeDeck({
  slides,
  accents,
}: {
  slides: ReactNode[];
  accents?: string[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const pausedRef = useRef(false);
  const programmaticRef = useRef(false);
  const progTimer = useRef(0);
  const reduce = useReducedMotion();

  const scrollToIndex = useCallback(
    (i: number, smooth = true) => {
      const t = trackRef.current;
      if (!t) return;
      const clamped = ((i % slides.length) + slides.length) % slides.length;
      const child = t.children[clamped] as HTMLElement | undefined;
      if (!child) return;
      // suppress `measure` while the browser animates this programmatic scroll
      programmaticRef.current = true;
      window.clearTimeout(progTimer.current);
      progTimer.current = window.setTimeout(() => {
        programmaticRef.current = false;
      }, 700);
      t.scrollTo({ left: child.offsetLeft, behavior: smooth && !reduce ? "smooth" : "auto" });
    },
    [slides.length, reduce],
  );

  useEffect(() => () => window.clearTimeout(progTimer.current), []);

  const setIndex = useCallback((i: number) => {
    activeRef.current = i;
    setActive(i);
  }, []);

  // Sync active from the scroll position when the user swipes manually.
  const measure = useCallback(() => {
    if (programmaticRef.current) return; // ignore self-driven scrolls
    const t = trackRef.current;
    if (!t || t.children.length < 1) return;
    const first = t.children[0] as HTMLElement;
    const stride =
      t.children.length > 1
        ? (t.children[1] as HTMLElement).offsetLeft - first.offsetLeft
        : first.offsetWidth || t.clientWidth;
    const i = Math.min(slides.length - 1, Math.max(0, Math.round(t.scrollLeft / stride)));
    if (i !== activeRef.current) setIndex(i);
  }, [slides.length, setIndex]);

  const goTo = (i: number) => {
    const next = ((i % slides.length) + slides.length) % slides.length;
    scrollToIndex(next);
    setIndex(next);
  };

  // Auto-advance — drives state directly (not via scroll events), so it's
  // robust. Disabled for users who prefer reduced motion.
  useEffect(() => {
    if (reduce || slides.length < 2) return;
    const id = setInterval(() => {
      if (pausedRef.current) return;
      const next = (activeRef.current + 1) % slides.length;
      scrollToIndex(next);
      setIndex(next);
    }, DURATION);
    return () => clearInterval(id);
  }, [reduce, slides.length, scrollToIndex, setIndex]);

  const pause = () => {
    pausedRef.current = true;
  };
  const resume = () => {
    pausedRef.current = false;
  };

  const pad = (n: number) => String(n + 1).padStart(2, "0");
  const accent = accents?.[active];

  return (
    <div>
      {/* story-style segment bars: past = full, active = filling, future = empty */}
      <div className="mb-4 flex gap-1.5 px-4">
        {slides.map((_, i) => {
          const barColor = accents?.[i] ?? "hsl(var(--primary))";
          return (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to card ${i + 1}`}
              className="h-1 flex-1 overflow-hidden rounded-full bg-slate-200"
            >
              {i < active && (
                <span className="block h-full rounded-full" style={{ width: "100%", backgroundColor: barColor }} />
              )}
              {i === active &&
                (reduce ? (
                  <span className="block h-full rounded-full" style={{ width: "100%", backgroundColor: barColor }} />
                ) : (
                  <motion.span
                    key={active}
                    className="block h-full rounded-full"
                    style={{ backgroundColor: barColor }}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: DURATION / 1000, ease: "linear" }}
                  />
                ))}
            </button>
          );
        })}
      </div>

      {/* the deck — touching pauses auto-play so the reader isn't rushed */}
      <div
        ref={trackRef}
        onScroll={measure}
        onPointerDown={pause}
        onPointerUp={resume}
        onPointerCancel={resume}
        onPointerLeave={resume}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((s, i) => (
          <div key={i} className="w-[85vw] max-w-sm shrink-0 snap-center">
            {s}
          </div>
        ))}
      </div>

      {/* counter */}
      <div className="mt-3 px-4 text-center">
        <span className="font-mono text-xs text-slate-400">
          <span className="font-semibold" style={{ color: accent ?? "hsl(var(--primary))" }}>
            {pad(active)}
          </span>
          <span className="text-slate-300"> / {pad(slides.length - 1)}</span>
        </span>
      </div>
    </div>
  );
}
