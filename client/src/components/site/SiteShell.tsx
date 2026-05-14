import type { ReactNode } from "react";

/**
 * Background chrome inspired by an ads-optimizer / monitoring log shell:
 * horizontal “log lines”, left gutter, console frame hints, and a status strip.
 * Stays behind all content (fixed layers at -z-10).
 */
export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f6f7f9] text-slate-900 antialiased selection:bg-primary/15 selection:text-primary">
      {/* Panel base — log viewer off-white */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[#f6f7f9]" aria-hidden />

      {/* Horizontal stream lines (read as log rows) */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.85] motion-reduce:opacity-[0.4] [background-image:repeating-linear-gradient(to_bottom,transparent_0px,transparent_25px,rgb(203_213_225/0.5)_26px,rgb(203_213_225/0.5)_27px)] [mask-image:linear-gradient(to_right,black_0%,black_78%,transparent_100%)]"
        aria-hidden
      />

      {/* Left gutter — line-number / severity column */}
      <div
        className="pointer-events-none fixed inset-y-0 left-0 -z-10 w-10 border-r border-slate-300/60 bg-gradient-to-b from-slate-200/35 via-slate-100/25 to-slate-200/30 sm:w-12 md:w-14 motion-reduce:opacity-60"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-y-0 left-0 -z-10 w-10 sm:w-12 md:w-14 [background-image:repeating-linear-gradient(to_bottom,transparent_0px,transparent_25px,rgb(148_163_184/0.12)_26px,rgb(148_163_184/0.12)_27px)] motion-reduce:opacity-40"
        aria-hidden
      />

      {/* “Running” accent — narrow rail like a live log cursor */}
      <div
        className="pointer-events-none fixed bottom-8 left-0 top-[5.5rem] -z-10 w-0.5 bg-gradient-to-b from-emerald-500/0 via-emerald-500/35 to-cyan-500/0 motion-reduce:via-emerald-500/20"
        aria-hidden
      />

      {/* Top chrome — stream title bar */}
      <div
        className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-1 bg-gradient-to-r from-slate-300/40 via-slate-200/60 to-slate-300/40"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-x-0 top-1 -z-10 h-px bg-white/80"
        aria-hidden
      />

      {/* Console frame corners (below sticky nav) */}
      <div
        className="pointer-events-none fixed left-3 top-[4.75rem] -z-10 hidden h-9 w-9 rounded-tl-md border-l border-t border-slate-400/35 md:block"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed right-3 top-[4.75rem] -z-10 hidden h-9 w-9 rounded-tr-md border-r border-t border-slate-400/35 md:block"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed bottom-4 left-3 -z-10 hidden h-9 w-9 rounded-bl-md border-b border-l border-slate-400/35 md:block"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed bottom-4 right-3 -z-10 hidden h-9 w-9 rounded-br-md border-b border-r border-slate-400/35 md:block"
        aria-hidden
      />

      {/* Bottom status strip — healthy stream / optimizer OK */}
      <div
        className="pointer-events-none fixed inset-x-0 bottom-0 -z-10 h-1 bg-gradient-to-r from-emerald-600/25 via-primary/35 to-cyan-500/25"
        aria-hidden
      />

      {children}
    </div>
  );
}
