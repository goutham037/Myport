import { type ReactNode, useCallback, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";

/**
 * Mobile "story mode" — a horizontal, snap-scrolling deck of full-width cards.
 * Story-style segment bars up top, a live counter, and a peek of the next card
 * so the sideways gesture is obvious. Used only on small screens; desktop keeps
 * its own richer vertical layout.
 */
export function SwipeDeck({
  slides,
  accents,
  label = "swipe",
}: {
  slides: ReactNode[];
  accents?: string[];
  label?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [nudged, setNudged] = useState(false);

  const measure = useCallback(() => {
    const t = trackRef.current;
    if (!t || t.children.length < 1) return;
    const first = t.children[0] as HTMLElement;
    const stride =
      t.children.length > 1
        ? (t.children[1] as HTMLElement).offsetLeft - first.offsetLeft
        : first.offsetWidth || t.clientWidth;
    const i = Math.round(t.scrollLeft / stride);
    setActive(Math.min(slides.length - 1, Math.max(0, i)));
  }, [slides.length]);

  const onScroll = () => {
    if (!nudged) setNudged(true);
    measure(); // direct: cheap for a short deck, and works even when rAF is throttled
  };

  const goTo = (i: number) => {
    const t = trackRef.current;
    if (!t) return;
    const child = t.children[i] as HTMLElement | undefined;
    if (child) t.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
  };

  const accent = accents?.[active];
  const pad = (n: number) => String(n + 1).padStart(2, "0");

  return (
    <div>
      {/* story-style segment bars */}
      <div className="mb-4 flex gap-1.5 px-4">
        {slides.map((_, i) => {
          const on = i <= active;
          return (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to card ${i + 1}`}
              className="h-1 flex-1 overflow-hidden rounded-full bg-slate-200"
            >
              <span
                className="block h-full rounded-full transition-all duration-300"
                style={{
                  width: on ? "100%" : "0%",
                  backgroundColor: on ? accents?.[i] ?? "hsl(var(--primary))" : "transparent",
                }}
              />
            </button>
          );
        })}
      </div>

      {/* the deck */}
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((s, i) => (
          <div key={i} className="w-[85vw] max-w-sm shrink-0 snap-center">
            {s}
          </div>
        ))}
      </div>

      {/* counter + swipe hint */}
      <div className="mt-3 flex items-center justify-between px-4">
        <span className="font-mono text-xs text-slate-400">
          <span className="font-semibold" style={{ color: accent ?? "hsl(var(--primary))" }}>
            {pad(active)}
          </span>
          <span className="text-slate-300"> / {pad(slides.length - 1)}</span>
        </span>
        <span
          className={`inline-flex items-center gap-0.5 font-mono text-xs uppercase tracking-wider text-slate-400 transition-opacity duration-500 ${
            nudged ? "opacity-0" : "opacity-100"
          }`}
        >
          {label}
          <ChevronRight className="h-3.5 w-3.5 animate-pulse" />
        </span>
      </div>
    </div>
  );
}
