import { motion, useReducedMotion } from "framer-motion";
import { Github, GitPullRequest, GitBranch, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/content/site";
import { easeOutExpo, listStagger, lineItem } from "@/lib/motion";

/** Verified from GitHub (goutham037). Update the numbers as they grow. */
const STATS = [
  { value: "1,150+", label: "Contributions", sub: "in the past year" },
  { value: "55", label: "Repositories", sub: "public & private" },
  { value: "~90%", label: "Via pull requests", sub: "team code review flow" },
  { value: "Daily", label: "Active", sub: "shipping in production" },
] as const;

export function GitHubStats() {
  const reduce = useReducedMotion();

  return (
    <div className="space-y-8">
      <motion.div
        className="grid grid-cols-2 gap-4 md:grid-cols-4"
        initial={reduce ? false : "hidden"}
        whileInView={reduce ? undefined : "show"}
        viewport={{ once: true }}
        variants={reduce ? undefined : listStagger}
      >
        {STATS.map((s) => (
          <motion.div
            key={s.label}
            variants={reduce ? undefined : lineItem}
            className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-shadow duration-300 hover:shadow-md"
          >
            <p className="font-sora text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{s.value}</p>
            <p className="mt-1 text-sm font-medium text-slate-800">{s.label}</p>
            <p className="mt-0.5 text-xs text-slate-500">{s.sub}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:flex-row sm:items-center">
        <div className="flex items-start gap-3">
          <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-slate-600">
            <span className="inline-flex items-center gap-1.5">
              <GitPullRequest className="h-4 w-4 text-primary" aria-hidden />
              Merged PRs across team codebases
            </span>
            <span className="inline-flex items-center gap-1.5">
              <GitBranch className="h-4 w-4 text-primary" aria-hidden />
              Contributor to open-source AI tooling
            </span>
          </div>
        </div>
        <Button asChild size="sm" className="shrink-0 rounded-xl">
          <a href={SITE.github} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" aria-hidden />
            View GitHub
            <ArrowRight className="ml-2 h-3.5 w-3.5" aria-hidden />
          </a>
        </Button>
      </div>
    </div>
  );
}
