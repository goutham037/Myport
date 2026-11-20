/**
 * Shared ambient background — dot grid + soft indigo/cyan radial glows.
 * The same atmosphere the case-study shells use, so the whole site reads as one system.
 * Render once near the top of a page, with the page content wrapped in `relative z-10`.
 */
export function Ambient() {
  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-70"
        style={{
          background: `radial-gradient(ellipse 80% 55% at 85% -5%, rgba(79,70,229,0.07), transparent 55%),
            radial-gradient(ellipse 70% 55% at 0% 105%, rgba(6,182,212,0.05), transparent 55%)`,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-30 [background-image:radial-gradient(rgb(148_163_184/0.12)_1px,transparent_1px)] [background-size:26px_26px]"
        aria-hidden
      />
    </>
  );
}
