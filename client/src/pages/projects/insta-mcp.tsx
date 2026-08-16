import { motion, useReducedMotion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Github, ExternalLink, Instagram } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/usePageMeta";
import { easeOutExpo, listStagger, lineItem } from "@/lib/motion";
import { BASE } from "@/lib/utils";

const STACK = [
  { name: "FastMCP", note: "MCP server framework" },
  { name: "Python", note: "Backend and automation logic" },
  { name: "Playwright", note: "Browser automation and media extraction" },
  { name: "BeautifulSoup4", note: "HTML and response parsing" },
  { name: "Instagram", note: "Publishing and media workflow" },
  { name: "Streamable-HTTP", note: "Remote MCP transport" },
  { name: "AsyncIO", note: "Async publishing pipeline" },
  { name: "Render", note: "Cloud deployment" },
];

const STEPS = [
  {
    n: "01",
    title: "Connect the MCP server",
    body: "Connect the deployed Instagram Publisher MCP server to an AI client capable of calling MCP tools.",
  },
  {
    n: "02",
    title: "Generate the content",
    body: "The AI workflow can generate or receive Instagram-ready images, captions, and carousel slides for TheML.Matrix.",
  },
  {
    n: "03",
    title: "Process the media",
    body: "The server processes the supplied media, extracts the required image resources, prepares carousel assets, and validates the publishing payload.",
  },
  {
    n: "04",
    title: "Publish to Instagram",
    body: "The MCP tool handles the publishing workflow and sends the prepared content to the connected @theml.matrix Instagram account.",
  },
];

const PROMPTS = [
  {
    label: "Publish a post",
    text: "Publish this generated image to @theml.matrix with the provided caption.",
  },
  {
    label: "Publish carousel",
    text: "Create and publish this Instagram carousel to @theml.matrix in the correct slide order.",
  },
  {
    label: "Process media",
    text: "Process these generated images and prepare them for Instagram publishing.",
  },
  {
    label: "Complete workflow",
    text: "Generate the content, prepare the media, and publish the completed Instagram post to @theml.matrix.",
  },
];

const TOOLS = [
  {
    tool: "generate / process media",
    args: "content or media",
    returns: "Instagram-ready media",
  },
  {
    tool: "publish image",
    args: "image + caption",
    returns: "Published Instagram post",
  },
  {
    tool: "publish carousel",
    args: "images + caption",
    returns: "Published Instagram carousel",
  },
  {
    tool: "media extraction",
    args: "generated media",
    returns: "Resolved image resources",
  },
];

export default function InstagramMcpPage() {
  usePageMeta(
    "TheML.Matrix — Instagram Publisher MCP Server | Sharan Goutham",
    "How I built an MCP server that connects AI content workflows with Instagram publishing for TheML.Matrix."
  );

  const reduce = useReducedMotion();

  return (
    <PageLayout>
      {/* back nav */}
      <div className="mx-auto max-w-4xl px-4 pt-10">
        <Link href="/#projects">
          <span className="inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-slate-900">
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </span>
        </Link>
      </div>

      {/* hero */}
      <motion.section
        className="mx-auto max-w-4xl px-4 pb-12 pt-8"
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: easeOutExpo }}
      >
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <Badge variant="secondary" className="font-mono text-xs">
            AI tool
          </Badge>

          <Badge variant="secondary" className="font-mono text-xs">
            Shipped · 2026
          </Badge>

          <Badge variant="secondary" className="font-mono text-xs">
            MCP · Instagram · Automation
          </Badge>
        </div>

        <h1 className="font-sora text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
          TheML.Matrix — Instagram Publisher MCP Server
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
          An MCP server that connects AI-powered content workflows with
          Instagram publishing — allowing AI assistants to process generated
          media, prepare carousel content, and publish posts directly to
          @theml.matrix.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            asChild
            size="lg"
            className="rounded-xl shadow-sm shadow-primary/10"
          >
            <a
              href="https://github.com/goutham037/instagram-automation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-xl border-slate-200"
          >
            <a
              href="https://www.instagram.com/theml.matrix/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="mr-2 h-4 w-4" />
              @theml.matrix
            </a>
          </Button>
        </div>
      </motion.section>

      {/* hero thumbnail */}
      <motion.div
        className="mx-auto max-w-5xl px-4 pb-16"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{
          duration: 0.55,
          delay: 0.1,
          ease: easeOutExpo,
        }}
      >
        <img
          src={`${BASE}/projects/insta-mcp.jpg`}
          alt="TheML.Matrix Instagram Publisher MCP Server"
          className="w-full rounded-2xl border border-slate-200 shadow-lg"
          loading="lazy"
        />
      </motion.div>

      {/* overview */}
      <section className="border-t border-slate-100 bg-slate-50/60 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-slate-400">
            Overview
          </p>

          <h2 className="mb-8 font-sora text-2xl font-semibold text-slate-900">
            What it does
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "AI-powered publishing",
                body: "Connects AI content-generation workflows directly to Instagram publishing, reducing the manual steps between generated content and a live post.",
              },
              {
                title: "Carousel automation",
                body: "Handles multiple generated images as a single Instagram carousel while preserving the intended slide order.",
              },
              {
                title: "Media processing",
                body: "Processes generated media and resolves the image resources required by the publishing workflow.",
              },
              {
                title: "MCP interface",
                body: "Publishing capabilities are exposed as AI-callable MCP tools, allowing an AI assistant to execute the workflow through natural-language instructions.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="mb-2 font-sora text-base font-semibold text-slate-900">
                  {card.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-600">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* architecture */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-slate-400">
            Architecture
          </p>

          <h2 className="mb-3 font-sora text-2xl font-semibold text-slate-900">
            How it works
          </h2>

          <p className="mb-8 max-w-2xl text-slate-600">
            AI assistant → MCP server → media extraction and processing →
            Instagram publishing workflow → @theml.matrix.
          </p>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-6 py-4">
                <p className="font-mono text-sm font-semibold text-slate-900">
                  AI ASSISTANT
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Natural-language publishing request
                </p>
              </div>

              <div className="text-xl text-slate-400">↓</div>

              <div className="rounded-xl border border-orange-200 bg-orange-50 px-8 py-5">
                <p className="font-mono text-sm font-semibold text-orange-700">
                  TheML.Matrix MCP
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Tool dispatch and workflow orchestration
                </p>
              </div>

              <div className="text-xl text-slate-400">↓</div>

              <div className="grid w-full gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-200 p-5">
                  <p className="font-mono text-xs font-semibold text-slate-900">
                    MEDIA
                  </p>
                  <p className="mt-2 text-xs text-slate-500">
                    Extract & process
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-5">
                  <p className="font-mono text-xs font-semibold text-slate-900">
                    CAROUSEL
                  </p>
                  <p className="mt-2 text-xs text-slate-500">
                    Order & prepare slides
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-5">
                  <p className="font-mono text-xs font-semibold text-slate-900">
                    PUBLISH
                  </p>
                  <p className="mt-2 text-xs text-slate-500">
                    Send to Instagram
                  </p>
                </div>
              </div>

              <div className="text-xl text-slate-400">↓</div>

              <div className="rounded-xl border border-slate-200 bg-slate-900 px-8 py-5 text-white">
                <p className="font-mono text-sm font-semibold">
                  @theml.matrix
                </p>

                <p className="mt-1 text-xs text-slate-300">
                  Instagram published content
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* workflow */}
      <section className="border-t border-slate-100 bg-slate-50/60 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-slate-400">
            Workflow
          </p>

          <h2 className="mb-10 font-sora text-2xl font-semibold text-slate-900">
            Publishing workflow
          </h2>

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
                <span className="mt-0.5 shrink-0 font-mono text-2xl font-bold leading-none text-primary/30">
                  {step.n}
                </span>

                <div>
                  <h3 className="mb-1 font-sora text-base font-semibold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600">
                    {step.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* prompts */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-slate-400">
            Usage
          </p>

          <h2 className="mb-3 font-sora text-2xl font-semibold text-slate-900">
            Ready-to-use prompts
          </h2>

          <p className="mb-8 text-slate-600">
            Example prompts for driving the Instagram publishing workflow.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {PROMPTS.map((p) => (
              <div
                key={p.label}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <p className="mb-3 font-mono text-xs font-medium text-primary">
                  {p.label}
                </p>

                <p className="font-mono text-sm leading-relaxed text-slate-700">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* tools */}
      <section className="border-t border-slate-100 bg-slate-50/60 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-slate-400">
            API
          </p>

          <h2 className="mb-8 font-sora text-2xl font-semibold text-slate-900">
            Publishing capabilities
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-left">
                  <th className="px-5 py-3.5 font-semibold text-slate-900">
                    Tool
                  </th>

                  <th className="px-5 py-3.5 font-semibold text-slate-900">
                    Args
                  </th>

                  <th className="px-5 py-3.5 font-semibold text-slate-900">
                    Returns
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 text-slate-600">
                {TOOLS.map((row) => (
                  <tr key={row.tool}>
                    <td className="px-5 py-3.5 font-mono text-xs text-primary">
                      {row.tool}
                    </td>

                    <td className="px-5 py-3.5 font-mono text-xs text-slate-500">
                      {row.args}
                    </td>

                    <td className="px-5 py-3.5">
                      {row.returns}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* stack */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-slate-400">
            Stack
          </p>

          <h2 className="mb-8 font-sora text-2xl font-semibold text-slate-900">
            Technical stack
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {STACK.map((s) => (
              <div
                key={s.name}
                className="rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
              >
                <p className="font-mono text-sm font-semibold text-slate-900">
                  {s.name}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {s.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-100 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-3 font-sora text-2xl font-semibold text-slate-900">
            AI → Content → Instagram
          </h2>

          <p className="mx-auto mb-8 max-w-xl text-slate-600">
            A production MCP workflow that turns AI-generated content into
            publishable Instagram posts and carousels for TheML.Matrix.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-xl shadow-sm shadow-primary/10"
            >
              <a
                href="https://github.com/goutham037/instagram-automation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-xl border-slate-200"
            >
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