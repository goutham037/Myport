import { Link } from "wouter";
import { PageLayout } from "@/components/site/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <PageLayout>
      <div className="flex min-h-[55vh] items-center justify-center px-4 py-20">
        <Card className="w-full max-w-md border-slate-200 bg-white shadow-sm">
          <CardContent className="pt-8">
            <div className="mb-4 flex gap-3">
              <AlertCircle className="h-8 w-8 shrink-0 text-primary" aria-hidden />
              <div>
                <h1 className="font-sora text-2xl font-semibold text-slate-900">404 — Page not found</h1>
                <p className="mt-2 text-sm text-slate-600">That route does not exist. Return home or open the spec.</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button asChild className="rounded-xl">
                <Link href="/">Home</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-xl border-slate-200">
                <Link href="/spec">Design spec</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}
