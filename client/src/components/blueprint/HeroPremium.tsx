import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/content/site";
import { easeOutExpo, staggerChildren } from "@/lib/motion";

const HERO_BLUE = "#2563EB";
const HERO_TEXT = "#0F172A";

const HERO_DESCRIPTION =
  "I build production systems where ads data, CRM state, assistants, and backend services come together — turning scattered workflows into automated growth infrastructure.";

/** Headline with gradient only on “AI”. */
function HeadlineWithAIGradient({ text }: { text: string }) {
  const parts = text.split("AI");
  if (parts.length < 2) {
    return <>{text}</>;
  }
  return (
    <>
      {parts[0]}
      <span
        className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent"
        style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
      >
        AI
      </span>
      {parts.slice(1).join("AI")}
    </>
  );
}

export function HeroPremium() {
  const reduce = useReducedMotion();
  const roleTitle = SITE.headline.split("·")[0]?.trim() ?? "Lead AI Developer";

  return (
    <section
      id="hero"
      className="relative scroll-mt-24 overflow-hidden border-b border-slate-200/60 bg-white min-h-0 md:min-h-[100svh] lg:min-h-[110vh]"
    >
      {/* Background — no blur, soft flat gradients only */}
      <div className="pointer-events-none absolute inset-0 bg-white" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 opacity-60 motion-reduce:opacity-40"
        style={{
          background: `radial-gradient(ellipse 90% 70% at 85% 0%, rgba(37, 99, 235, 0.06), transparent 55%),
            radial-gradient(ellipse 70% 60% at 0% 100%, rgba(6, 182, 212, 0.05), transparent 55%)`,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.3] motion-reduce:opacity-[0.12] [background-image:radial-gradient(rgb(148_163_184/0.12)_1px,transparent_1px)] [background-size:24px_24px] sm:[background-size:28px_28px]"
        aria-hidden
      />

      <span className="sr-only">{`${SITE.fullName}, ${SITE.headline}. ${HERO_DESCRIPTION}`}</span>

      {/* Content: stacked ≤1023px; two columns ≥1024px — no absolute portrait, no fog overlays */}
      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-4 pb-32 pt-16 sm:gap-10 sm:px-6 sm:pt-20 md:gap-12 md:pb-36 md:pt-24 lg:grid-cols-[minmax(260px,38%)_minmax(0,1fr)] lg:items-start lg:gap-14 lg:px-8 lg:pt-28 xl:gap-16">
        {/* Portrait */}
        <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:mx-0 lg:max-w-none">
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-100 shadow-md sm:rounded-3xl lg:rounded-3xl lg:border-slate-200/70">
            {/* Sharp glow (no filter: blur) */}
            <div
              className="pointer-events-none absolute inset-0 opacity-50 transition-opacity duration-300 group-hover:opacity-80"
              style={{
                background: `radial-gradient(ellipse 85% 75% at 50% 20%, rgba(37, 99, 235, 0.12), rgba(6, 182, 212, 0.06) 45%, transparent 70%)`,
              }}
              aria-hidden
            />
            <img
              src={SITE.profilePhoto}
              alt=""
              width={720}
              height={1200}
              className="relative z-[1] aspect-[3/4] w-full object-cover object-top transition-transform duration-300 ease-out motion-reduce:transition-none motion-reduce:group-hover:scale-100 group-hover:scale-[1.03] sm:aspect-[4/5] lg:aspect-auto lg:min-h-[min(78vh,720px)] lg:max-h-[85vh]"
              style={{ objectPosition: "center top" }}
              decoding="async"
              aria-hidden
            />
            {/* Light bottom edge only — blends into section, not a full fog */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-1/4 bg-gradient-to-t from-white/90 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-60"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 z-[2] rounded-2xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4)] transition-shadow duration-300 group-hover:shadow-[inset_0_0_0_2px_rgba(37,99,235,0.35),0_0_0_3px_rgba(37,99,235,0.2)] sm:rounded-3xl"
              aria-hidden
            />
          </div>
        </div>

        {/* Copy */}
        <motion.div
          initial={reduce ? false : "hidden"}
          animate={reduce ? undefined : "show"}
          variants={reduce ? undefined : staggerChildren}
          className="flex min-w-0 flex-col text-center sm:text-left lg:pt-2 xl:pt-6"
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOutExpo } },
            }}
            className="mx-auto mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm sm:mx-0"
            style={{ color: HERO_TEXT }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#06B6D4] motion-safe:animate-pulse" />
            {SITE.lockup}
          </motion.span>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOutExpo } },
            }}
            className="font-sora text-4xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl"
            style={{ color: HERO_TEXT }}
          >
            {SITE.name}
          </motion.p>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 22 },
              show: { opacity: 1, y: 0, transition: { duration: 0.58, ease: easeOutExpo } },
            }}
            className="mt-3 max-w-xl self-center font-sora text-xl font-semibold leading-tight tracking-tight sm:mt-4 sm:self-start sm:text-2xl md:text-3xl lg:text-4xl"
            style={{ color: HERO_TEXT }}
          >
            <HeadlineWithAIGradient text={roleTitle} />
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOutExpo } },
            }}
            className="mt-6 max-w-2xl self-center text-base leading-relaxed text-slate-600 sm:mt-8 sm:self-start sm:text-lg md:text-xl"
          >
            {HERO_DESCRIPTION}
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOutExpo } },
            }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10 sm:justify-start sm:gap-4"
          >
            <motion.div whileHover={reduce ? undefined : { y: -2 }} whileTap={reduce ? undefined : { scale: 0.98 }}>
              <Button
                asChild
                size="lg"
                className="rounded-xl border-0 px-6 font-semibold text-white shadow-[0_10px_40px_rgba(37,99,235,0.12)] transition-[transform,box-shadow] duration-300 hover:shadow-[0_14px_48px_rgba(37,99,235,0.18)] sm:px-7"
                style={{ backgroundColor: HERO_BLUE }}
              >
                <a href="/#systems">Explore Systems</a>
              </Button>
            </motion.div>
            <motion.div whileHover={reduce ? undefined : { y: -2 }} whileTap={reduce ? undefined : { scale: 0.98 }}>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-xl border-slate-200 bg-white px-6 font-semibold text-slate-800 shadow-sm transition-[transform,background-color] duration-300 hover:bg-slate-50 sm:px-7"
              >
                <a
                  href={`mailto:${SITE.email}?subject=${encodeURIComponent("Résumé request")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Résumé
                  <ExternalLink className="ml-2 h-4 w-4 opacity-70" aria-hidden />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-32 bg-gradient-to-t from-[#F8FAFC] to-transparent sm:h-40"
        aria-hidden
      />

      <motion.a
        href="/#about"
        className="motion-reduce:hidden absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 transition-colors hover:text-[#2563EB] sm:bottom-8 sm:text-[11px] sm:tracking-[0.22em]"
        initial={reduce ? false : { opacity: 0, y: 10 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.55, ease: easeOutExpo }}
      >
        <span>Scroll to Explore</span>
        <ChevronDown className="h-5 w-5 animate-scroll-cue text-slate-400" aria-hidden />
      </motion.a>
    </section>
  );
}
