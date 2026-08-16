import { Link } from "wouter";
import { PageLayout } from "@/components/site/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  AlertCircle,
  ArrowLeft,
  Home,
  Search,
  Terminal,
} from "lucide-react";

export default function NotFound() {
  return (
    <PageLayout>
      <main className="relative flex min-h-[75vh] items-center justify-center overflow-hidden px-4 py-20">
        {/* Background glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl"
          aria-hidden="true"
        />

        {/* Decorative grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <Card className="relative w-full max-w-2xl overflow-hidden rounded-3xl border-slate-200 bg-white/95 shadow-xl backdrop-blur">
          {/* Top accent */}
          <div className="h-1.5 w-full bg-gradient-to-r from-primary/40 via-primary to-primary/40" />

          <CardContent className="px-6 py-10 sm:px-10 sm:py-12">
            {/* Status */}
            <div className="mb-8 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5">
                <span
                  className="h-2 w-2 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <span className="font-mono text-xs font-medium uppercase tracking-wider text-slate-500">
                  Route unavailable
                </span>
              </div>

              <span className="font-mono text-xs text-slate-400">
                ERROR::404
              </span>
            </div>

            {/* Main content */}
            <div className="text-center">
              {/* 404 */}
              <div className="relative mb-6">
                <span
                  className="select-none font-sora text-[7rem] font-bold leading-none tracking-[-0.08em] text-slate-100 sm:text-[9rem]"
                  aria-hidden="true"
                >
                  404
                </span>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 shadow-sm">
                    <AlertCircle
                      className="h-8 w-8 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>

              <h1 className="font-sora text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Page not found
              </h1>

              <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-slate-600">
                Looks like this route doesn't exist. The page may have moved,
                been renamed, or the URL might be incorrect.
              </p>
            </div>

            {/* Route diagnostic */}
            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-950 p-4 shadow-inner">
              <div className="mb-3 flex items-center gap-2">
                <Terminal
                  className="h-4 w-4 text-primary"
                  aria-hidden="true"
                />

                <span className="font-mono text-xs text-slate-400">
                  route diagnostic
                </span>
              </div>

              <div className="space-y-2 font-mono text-xs sm:text-sm">
                <div className="flex gap-3">
                  <span className="text-slate-500">$</span>
                  <span className="text-slate-300">
                    resolve_current_route
                  </span>
                </div>

                <div className="flex gap-3">
                  <span className="text-slate-500">→</span>
                  <span className="text-red-300">
                    route_not_found
                  </span>
                </div>

                <div className="flex gap-3">
                  <span className="text-slate-500">→</span>
                  <span className="text-slate-400">
                    suggestion: return_to_home
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-xl px-6 shadow-sm shadow-primary/10"
              >
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Back to home
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-xl border-slate-200 px-6"
              >
                <Link href="/#projects">
                  <Search className="mr-2 h-4 w-4" />
                  Explore projects
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="ghost"
                className="rounded-xl px-6"
              >
                <Link href="/spec">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Design spec
                </Link>
              </Button>
            </div>

            {/* Footer hint */}
            <div className="mt-10 border-t border-slate-100 pt-6 text-center">
              <p className="font-mono text-xs text-slate-400">
                lost in the matrix?
                <span className="mx-2 text-primary">→</span>
                head back to the portfolio
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </PageLayout>
  );
}