import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { HeroTerminal } from "./HeroTerminal";
import { SITE } from "@/content/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center px-4 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <div>
          <motion.p
            className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            {SITE.name}
          </motion.p>
          <motion.h1
            className="font-sora text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.05 }}
          >
            {SITE.headline}
          </motion.h1>
          <motion.p
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
          >
            {SITE.tagline}
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.15 }}
          >
            <Button asChild size="lg" className="rounded-lg font-medium">
              <Link href="/systems">View Systems</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-lg font-medium">
              <Link href="/projects">Projects</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-lg font-medium">
              <a
                href={`mailto:${SITE.email}?subject=${encodeURIComponent("Resume request")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
                <ExternalLink className="ml-2 h-4 w-4" aria-hidden />
              </a>
            </Button>
          </motion.div>
        </div>
        <HeroTerminal />
      </div>
    </section>
  );
}
