import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "wouter";
import { PageLayout } from "@/components/site/PageLayout";
import { HeroPremium } from "@/components/blueprint/HeroPremium";
import { AnimatedSection } from "@/components/blueprint/AnimatedSection";
import { SystemCard } from "@/components/portfolio/SystemCard";
import { systems } from "@/components/portfolio/systems";
import { ProjectCard } from "@/components/site/ProjectCard";
import { projects } from "@/content/projects";
import { DESIGN_SPEC } from "@/content/designSpec";
import { SOCOVIA_EXPERIENCE_BULLETS } from "@/content/sociovia";
import { SITE } from "@/content/site";
import { usePageMeta } from "@/hooks/usePageMeta";
import { listStagger, lineItem, easeOutExpo } from "@/lib/motion";
import { BASE } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Download, Mail, Phone, ArrowRight, X } from "lucide-react";

const META =
  "Sharan Goutham — Lead AI Developer @ Sociovia. AI-powered growth infrastructure: ads, CRM, conversational AI, backend automation.";

function CaseStudyAnnouncement() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("gspt-case-study-seen");
    if (!dismissed) {
      const timer = setTimeout(() => setOpen(true), 2400);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem("gspt-case-study-seen", "1");
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) handleClose(); }}>
      <DialogContent className="max-w-md rounded-2xl border-slate-200 p-0 overflow-hidden">
        <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 px-6 pt-8 pb-6">
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 rounded-full p-1 text-slate-400 hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
          <Badge className="mb-3 bg-primary/20 text-primary border-primary/30 font-mono text-xs">
            Just Published
          </Badge>
          <DialogHeader>
            <DialogTitle className="font-sora text-xl font-semibold text-white leading-tight">
              An immersive engineering case study is live
            </DialogTitle>
          </DialogHeader>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            The full story of GSPT — a legacy student portal turned AI-native infrastructure.
            Six versions, twelve months, five optimizations that cut response times by 75%,
            and Grok delivering attendance intelligence at 8 AM and 9 PM daily.
          </p>
        </div>
        <div className="px-6 py-5 bg-white">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-4">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Live on Render
            </span>
            <span>4-chapter walkthrough</span>
            <span>Version-wise history</span>
          </div>
          <p className="text-sm text-slate-600 mb-5">
            If you read one case study on this portfolio, make it this one. It reads like a
            product tour — the evolution, the tradeoffs, the benchmarks, the lessons. Step
            through it, then come back and tell me what you think.
          </p>
          <div className="flex gap-3">
            <Link href="/projects/gspt-mcp" onClick={handleClose}>
              <Button size="sm" className="rounded-xl shadow-sm shadow-primary/10">
                Enter the case study
                <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </Button>
            </Link>
            <Button size="sm" variant="ghost" className="rounded-xl text-slate-500" onClick={handleClose}>
              Maybe later
            </Button>
          </div>
          <p className="mt-4 text-xs text-slate-400 italic">
            -- Sharan Goutham
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function HomePage() {
  usePageMeta("Sharan Goutham | Lead AI Developer @ Sociovia — AI Growth Infrastructure", META);
  const reduce = useReducedMotion();

  return (
    <PageLayout>
      <CaseStudyAnnouncement />
      <HeroPremium />

      <AnimatedSection id="about" eyebrow="About" title="Startup engineer, systems-first" innerMax="3xl">
        <motion.div
          className="space-y-5 text-lg leading-relaxed text-slate-600"
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "show"}
          viewport={{ once: true }}
          variants={reduce ? undefined : listStagger}
        >
          {DESIGN_SPEC.about.paragraphs.map((p) => (
            <motion.p key={p} variants={reduce ? undefined : lineItem}>
              {p}
            </motion.p>
          ))}
        </motion.div>
      </AnimatedSection>

      <AnimatedSection
        id="systems"
        eyebrow="Production surface"
        title="Systems built"
        variant="muted"
        subtitle="Production-grade growth systems — not a project gallery. Each block maps to real scope, impact, and stack."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {systems.map((sys, index) => (
            <SystemCard key={sys.name} {...sys} index={index} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection
        id="projects"
        eyebrow="Side projects"
        title="What I build outside work"
        subtitle="Personal experiments, tools, and case studies — shipped end-to-end."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.filter((p) => p.featured).map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="experience" eyebrow="Experience" title="Lead AI Developer">
        <Card className="max-w-4xl border-slate-200 bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
          <CardHeader className="border-b border-slate-100 pb-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <CardTitle className="font-sora text-xl text-slate-900">Sociovia</CardTitle>
              <Badge variant="outline" className="border-slate-200 font-mono text-xs text-slate-600">
                {SITE.location}
              </Badge>
            </div>
            <p className="text-sm text-slate-600">Core technical builder — production systems & MVP architecture.</p>
          </CardHeader>
          <CardContent className="pt-6">
            <motion.ul
              className="space-y-3 text-sm leading-relaxed text-slate-600"
              initial={reduce ? false : "hidden"}
              whileInView={reduce ? undefined : "show"}
              viewport={{ once: true }}
              variants={reduce ? undefined : listStagger}
            >
              {SOCOVIA_EXPERIENCE_BULLETS.map((b) => (
                <motion.li key={b} className="flex gap-3" variants={reduce ? undefined : lineItem}>
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary ring-2 ring-primary/20" aria-hidden />
                  <span>{b}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              className="mt-6 flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: easeOutExpo, delay: reduce ? 0 : 0.1 }}
            >
              <img
                src={`${BASE}/system-pillar.jpg`}
                alt="System Pillar trophy, awarded by the Sociovia team"
                className="h-28 w-auto shrink-0 rounded-lg object-cover shadow-sm"
                loading="lazy"
              />
              <div>
                <p className="text-sm font-medium text-slate-900">&ldquo;System Pillar&rdquo; — team recognition</p>
                <p className="mt-1 text-sm text-slate-600">Awarded by the Sociovia team at the AI Bharat Expo.</p>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </AnimatedSection>

      <AnimatedSection
        id="expertise"
        eyebrow="Core expertise"
        title="What I ship"
        variant="muted"
        subtitle="Premium skill chips — the surface area I own end-to-end."
      >
        <div className="flex flex-wrap gap-2">
          {DESIGN_SPEC.coreExpertise.map((skill, i) => (
            <motion.span
              key={skill}
              initial={reduce ? false : { opacity: 0, scale: 0.9, y: 6 }}
              whileInView={reduce ? undefined : { opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reduce ? 0 : 0.03 * i, duration: 0.4, ease: easeOutExpo }}
              whileHover={reduce ? undefined : { scale: 1.05, y: -2, transition: { type: "spring", stiffness: 420, damping: 22 } }}
              className="cursor-default rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm transition-colors duration-300 hover:border-primary/35 hover:bg-primary/5"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </AnimatedSection>

      <motion.section
        id="contact"
        className="scroll-mt-24 bg-gradient-to-b from-white to-slate-50 px-4 py-20 md:py-24"
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeOutExpo }}
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-slate-500">Contact</p>
          <h2 className="font-sora text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Let&apos;s connect</h2>
          <p className="mt-4 text-slate-600">
            Recruiters, founders, and engineers — include context on role, stack, and timeline.
          </p>
          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap"
            initial={reduce ? false : "hidden"}
            whileInView={reduce ? undefined : "show"}
            viewport={{ once: true }}
            variants={reduce ? undefined : listStagger}
          >
            <motion.div variants={reduce ? undefined : lineItem} whileHover={reduce ? undefined : { scale: 1.04 }} whileTap={reduce ? undefined : { scale: 0.98 }}>
              <Button asChild size="lg" className="rounded-xl px-6 shadow-md shadow-primary/10 transition-shadow duration-300 hover:shadow-lg">
                <a href={`mailto:${SITE.email}`}>
                  <Mail className="mr-2 h-4 w-4" aria-hidden />
                  {SITE.email}
                </a>
              </Button>
            </motion.div>
            <motion.div variants={reduce ? undefined : lineItem} whileHover={reduce ? undefined : { scale: 1.04 }} whileTap={reduce ? undefined : { scale: 0.98 }}>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-slate-200 transition-colors duration-300 hover:border-primary/40">
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>
                  <Phone className="mr-2 h-4 w-4" aria-hidden />
                  {SITE.phone}
                </a>
              </Button>
            </motion.div>
            <motion.div variants={reduce ? undefined : lineItem} whileHover={reduce ? undefined : { scale: 1.04 }} whileTap={reduce ? undefined : { scale: 0.98 }}>
              <Button asChild size="lg" variant="secondary" className="rounded-xl transition-colors duration-300">
                <a href={SITE.resumePath} download>
                  <Download className="mr-2 h-4 w-4" aria-hidden />
                  Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </PageLayout>
  );
}
