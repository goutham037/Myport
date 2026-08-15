import { motion } from "framer-motion";
import { Link } from "wouter";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tilt3D } from "@/components/site/Tilt3D";
import type { Project } from "@/content/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-6%" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -6, transition: { type: "spring", stiffness: 260, damping: 32 } }}
    >
      <Tilt3D className="h-full" max={6}>
        <Card className="flex h-full flex-col overflow-hidden border-border bg-card/70 backdrop-blur-sm">
          {project.image ? (
            <div className="relative h-44 w-full overflow-hidden border-b border-border bg-muted">
              <img src={project.image} alt="" className="h-full w-full object-cover" loading="lazy" />
              {project.featured ? (
                <span className="absolute left-3 top-3 rounded-md bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                  Featured
                </span>
              ) : null}
            </div>
          ) : (
            <div className="flex h-28 items-center justify-center border-b border-border bg-gradient-to-br from-primary/20 via-background to-accent/15">
              <span className="font-mono text-xs text-muted-foreground">{project.category}</span>
            </div>
          )}
          <CardContent className="flex flex-1 flex-col gap-3 p-5">
            <div>
              <p className="font-mono text-xs text-muted-foreground">
                {project.year} · {project.category}
              </p>
              <h3 className="font-sora mt-1 text-lg font-semibold text-foreground">{project.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{project.summary}</p>
            </div>
            <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <Badge key={t} variant="secondary" className="text-xs font-normal">
                  {t}
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {project.links.map((l) => {
                const external = l.href.startsWith("http") || l.href.startsWith("mailto");
                if (l.href.startsWith("/")) {
                  return (
                    <Button key={l.label} asChild variant="outline" size="sm" className="rounded-md">
                      <Link href={l.href}>{l.label}</Link>
                    </Button>
                  );
                }
                return (
                  <Button key={l.label} asChild variant="outline" size="sm" className="rounded-md">
                    <a href={l.href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
                      {l.label}
                      {external ? <ExternalLink className="ml-1.5 h-3.5 w-3.5" aria-hidden /> : null}
                    </a>
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </Tilt3D>
    </motion.div>
  );
}
