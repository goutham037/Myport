import { motion, useReducedMotion } from "framer-motion";
import { PageLayout } from "@/components/site/PageLayout";
import { HeroPremium } from "@/components/blueprint/HeroPremium";
import { TrustMetricCards } from "@/components/blueprint/TrustMetricCards";
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Mail, Phone } from "lucide-react";

const META =
  "Sharan Goutham — Lead AI Developer @ Sociovia. AI-powered growth infrastructure: ads, CRM, conversational AI, backend automation.";

export default function HomePage() {
  usePageMeta("Sharan Goutham | Lead AI Developer @ Sociovia — AI Growth Infrastructure", META);
  const reduce = useReducedMotion();

  return (
    <PageLayout>
      <HeroPremium />
      <TrustMetricCards />

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
