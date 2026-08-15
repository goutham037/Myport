import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/content/site";
import { easeOutExpo, staggerChildren } from "@/lib/motion";

const HERO_BLUE = "#2563EB";
const HERO_TEXT = "#0F172A";

const HERO_DESCRIPTION =
  "I build production systems where ads data, CRM state, assistants, and backend services come together — turning scattered workflows into automated growth infrastructure.";

/** Soft horizontal dissolve into the page — reads as canvas, not a photo box. */
const FIGURE_MASK =
  "linear-gradient(to right, #000 0%, #000 28%, rgba(0,0,0,0.55) 48%, rgba(0,0,0,0.2) 68%, transparent 100%)";

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

/** Bold name flips in word-by-word out of 3D space — needs an ancestor with CSS `perspective` set. */
function BoldNameReveal({ text, reduce }: { text: string; reduce: boolean | null }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <motion.span
          key={word + i}
          className="inline-block will-change-transform"
          initial={reduce ? false : { opacity: 0, y: 34, rotateX: -60 }}
          animate={reduce ? undefined : { opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.7, ease: easeOutExpo, delay: reduce ? 0 : 0.3 + i * 0.1 }}
          style={{ transformOrigin: "50% 100%", marginRight: "0.24em" }}
        >
          {word}
        </motion.span>
      ))}
    </>
  );
}

export function HeroPremium() {
  const reduce = useReducedMotion();
  const roleTitle = SITE.headline.split("·")[0]?.trim() ?? "Lead AI Developer";
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative scroll-mt-24 overflow-hidden border-b border-slate-200/60 bg-white min-h-0 md:min-h-[100svh] lg:min-h-[110vh]"
    >
      <div className="pointer-events-none absolute inset-0 bg-white" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 opacity-60 motion-reduce:opacity-40"
        style={{
          background: `radial-gradient(ellipse 90% 70% at 85% 0%, rgba(37, 99, 235, 0.06), transparent 55%),
            radial-gradient(ellipse 70% 60% at 0% 100%, rgba(6, 182, 212, 0.05), transparent 55%)`,
        }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-[0.3] motion-reduce:opacity-[0.12] [background-image:radial-gradient(rgb(148_163_184/0.12)_1px,transparent_1px)] [background-size:24px_24px] sm:[background-size:28px_28px]"
        style={reduce ? undefined : { y: bgY }}
        aria-hidden
      />

      {/* Ambient figure — desktop only (mobile uses stacked portrait below so the face isn’t cropped off) */}
      <motion.div
        className="pointer-events-none absolute inset-y-0 left-0 z-[1] hidden w-[min(58vw,42rem)] select-none lg:block"
        style={reduce ? undefined : { y: photoY, scale: photoScale }}
        aria-hidden
      >
        <div
          className="relative h-full w-full"
          style={{
            WebkitMaskImage: FIGURE_MASK,
            maskImage: FIGURE_MASK,
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
          }}
        >
          <img
            src={SITE.profilePhoto}
            alt=""
            width={900}
            height={1400}
            className="h-[115%] w-full max-w-none -translate-y-[3%] object-cover object-[center_8%] opacity-[0.88] saturate-[0.92] motion-reduce:translate-y-0 motion-reduce:scale-100"
            decoding="async"
            aria-hidden
          />
        </div>
        {/* Tiny cool wash so pixels tie to the hero grade, not a pasted JPEG */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(248,250,252,0.12)] to-white/95"
          style={{
            WebkitMaskImage: FIGURE_MASK,
            maskImage: FIGURE_MASK,
          }}
          aria-hidden
        />
      </motion.div>

      <span className="sr-only">{`${SITE.fullName}, ${SITE.headline}. ${HERO_DESCRIPTION}`}</span>

      {/* Mobile: full-width flow + centered portrait (face visible). Desktop: padding clears ambient strip. */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-32 pt-16 sm:px-6 sm:pt-20 md:pb-36 md:pt-24 lg:px-8 lg:pl-[min(30rem,42vw)] lg:pt-28 xl:pl-[min(34rem,40vw)]">
        {/* Stacked portrait on small screens only (avoids side-strip cropping your face) */}
        <div className="mb-10 flex justify-center lg:mb-0 lg:hidden">
          <div className="relative w-[min(88vw,20rem)] overflow-hidden rounded-2xl border border-slate-200/70 bg-slate-50 shadow-sm sm:w-[min(80vw,22rem)] sm:rounded-3xl">
            <img
              src={SITE.profilePhoto}
              alt={SITE.fullName}
              width={720}
              height={960}
              className="aspect-[3/4] w-full object-cover object-top sm:aspect-[4/5]"
              decoding="async"
            />
          </div>
        </div>

        <motion.div
          style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
          className="mx-auto flex min-w-0 max-w-2xl flex-col text-center sm:mx-0 sm:max-w-none sm:text-left lg:max-w-2xl"
        >
        <motion.div
          initial={reduce ? false : "hidden"}
          animate={reduce ? undefined : "show"}
          variants={reduce ? undefined : staggerChildren}
          className="flex flex-col"
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

          <p
            className="font-sora text-4xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl"
            style={{ color: HERO_TEXT, perspective: 800 }}
          >
            <BoldNameReveal text={SITE.name} reduce={reduce} />
          </p>

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
                  Resume
                  <ExternalLink className="ml-2 h-4 w-4 opacity-70" aria-hidden />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
        </motion.div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-28 bg-gradient-to-t from-[#F8FAFC] to-transparent sm:h-32 lg:h-40"
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
