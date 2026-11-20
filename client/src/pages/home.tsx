import { motion, useReducedMotion } from "framer-motion";
import { PageLayout } from "@/components/site/PageLayout";
import { Ambient } from "@/components/site/Ambient";
import { HeroPremium } from "@/components/blueprint/HeroPremium";
import { AnimatedSection } from "@/components/blueprint/AnimatedSection";
import { SystemCard } from "@/components/portfolio/SystemCard";
import { systems } from "@/components/portfolio/systems";
import { GitHubStats } from "@/components/portfolio/GitHubStats";
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
import { Download, Mail, Phone } from "lucide-react";

const META =
  "Sharan Goutham — first technical hire at Sociovia. I build and ship production systems: backends in Python and Node, data pipelines, CRM and ad automation, and the AI assistants on top.";

/** Lead the grid with the flagship case studies, then the rest of the featured work. */
const FEATURED_ORDER = [
  "spectrum-erp",
  "gspt-mcp",
  "lexamplify",
  "recall",
  "face-attend",
  "ask-griet",
  "smart-holovision",
  "insta-mcp",
];

const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => {
    const ia = FEATURED_ORDER.indexOf(a.id);
    const ib = FEATURED_ORDER.indexOf(b.id);
    return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
  });

export default function HomePage() {
  usePageMeta("Sharan Goutham — Software Engineer", META);
  const reduce = useReducedMotion();

  return (
    <PageLayout>
      <Ambient />
      <div className="relative z-10">
        <HeroPremium />

        <AnimatedSection id="about" eyebrow="About" title="How I work" innerMax="3xl">
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
          eyebrow="At Sociovia"
          title="Systems built"
          variant="muted"
          subtitle="The systems I work on at Sociovia — not side projects. Each one: what it does, why it matters to the business, and what it's built with."
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
          subtitle="Things I've built on my own time. A few are quick experiments; the ones with a case study are the real builds — worth a read."
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, i) => (
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
              <p className="text-sm text-slate-600">First technical hire. I work across production systems and the early architecture of new features, from a rough first cut to something that holds up in production.</p>
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
          id="github"
          eyebrow="Open source"
          title="On GitHub"
          subtitle="I build in the open and in teams. Here's the shape of the last year."
        >
          <GitHubStats />
        </AnimatedSection>

        <AnimatedSection
          id="expertise"
          eyebrow="Core expertise"
          title="What I ship"
          variant="muted"
          subtitle="The tools and areas I work with most."
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
          className="scroll-mt-24 bg-gradient-to-b from-white/85 to-slate-50/85 px-4 py-20 backdrop-blur-sm md:py-24"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
        >
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-slate-500">Contact</p>
            <h2 className="font-sora text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Let&apos;s connect</h2>
            <p className="mt-4 text-slate-600">
              If you're hiring or want to build something together, send a note with the role, the stack, and your timeline.
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
      </div>
    </PageLayout>
  );
}
