import { motion, useReducedMotion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Github, Brain, Zap, Network } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/usePageMeta";
import { easeOutExpo, listStagger, lineItem } from "@/lib/motion";

const REPO = "https://github.com/goutham037/recall";

const STEPS = [
  {
    n: "01",
    title: "Remember everything",
    body: "A persistent memory layer (Hindsight) stores every post, result, and competitor move, so the agent carries context forward instead of starting cold each session.",
  },
  {
    n: "02",
    title: "Pull live brand context",
    body: "The Meta Graph API feeds in real account data — what's running, what's performing — so the agent reasons about the actual brand, not a generic one.",
  },
  {
    n: "03",
    title: "Think fast on Groq",
    body: "Groq handles inference, keeping the chat responsive enough to feel like talking to a chief marketer, not waiting on a model.",
  },
  {
    n: "04",
    title: "Answer like a CMO",
    body: "The agent combines its memory and live context to suggest what to post, what's working, and where rivals are moving.",
  },
];

export default function RecallPage() {
  usePageMeta(
    "recall — Memory-First Marketing Agent | Sharan Goutham",
    "A chief-marketer AI agent that remembers every post, result, and rival move. Built at MemHack '26 with Hindsight, Groq, and the Meta Graph API."
  );
  const reduce = useReducedMotion();

  return (
    <PageLayout>
      <div className="mx-auto max-w-4xl px-4 pt-10">
        <Link href="/#projects">
          <span className="inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-slate-900">
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </span>
        </Link>
      </div>

      <motion.section
        className="mx-auto max-w-4xl px-4 pb-12 pt-8"
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: easeOutExpo }}
      >
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <Badge variant="secondary" className="font-mono text-xs">Hackathon · MemHack '26</Badge>
          <Badge variant="secondary" className="font-mono text-xs">AI Agent</Badge>
          <Badge variant="secondary" className="font-mono text-xs">Groq · Meta Graph API</Badge>
        </div>
        <h1 className="font-sora text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
          recall — Memory-First Marketing Agent
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
          Most marketing bots forget everything between chats. recall is a chief-marketer agent built the other
          way around: memory first. It remembers every post, result, and rival move, and reasons from real brand
          data. Built end to end in a weekend at MemHack '26.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="rounded-xl shadow-sm shadow-primary/10">
            <a href={REPO} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>
      </motion.section>

      {/* what it does */}
      <section className="border-t border-slate-100 bg-slate-50/60 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-slate-400">Overview</p>
          <h2 className="mb-8 font-sora text-2xl font-semibold text-slate-900">What it does</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: Brain, title: "Memory first", body: "A persistent memory of posts, results, and competitor moves — the agent builds on what it already knows." },
              { icon: Network, title: "Live brand context", body: "Pulls real account data from the Meta Graph API so answers are about this brand, now." },
              { icon: Zap, title: "Fast on Groq", body: "Groq inference keeps the conversation quick enough to actually use day to day." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <c.icon className="h-6 w-6 text-primary" aria-hidden />
                <h3 className="mb-2 mt-3 font-sora text-base font-semibold text-slate-900">{c.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* how it works */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-slate-400">How it works</p>
          <h2 className="mb-10 font-sora text-2xl font-semibold text-slate-900">Memory, context, action</h2>
          <motion.div
            className="space-y-6"
            initial={reduce ? false : "hidden"}
            whileInView={reduce ? undefined : "show"}
            viewport={{ once: true }}
            variants={reduce ? undefined : listStagger}
          >
            {STEPS.map((step) => (
              <motion.div
                key={step.n}
                variants={reduce ? undefined : lineItem}
                className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="mt-0.5 shrink-0 font-mono text-2xl font-bold leading-none text-primary/30">{step.n}</span>
                <div>
                  <h3 className="mb-1 font-sora text-base font-semibold text-slate-900">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* stack + CTA */}
      <section className="border-t border-slate-100 bg-slate-50/60 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-slate-400">Stack</p>
          <h2 className="mb-6 font-sora text-2xl font-semibold text-slate-900">Built with</h2>
          <div className="flex flex-wrap gap-2">
            {["TypeScript", "Groq", "Hindsight (memory)", "Meta Graph API", "AI Agents"].map((t) => (
              <Badge key={t} variant="secondary" className="text-sm font-normal">{t}</Badge>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-xl shadow-sm shadow-primary/10">
              <a href={REPO} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl border-slate-200">
              <Link href="/#projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to projects
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
