import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const principles = [
  {
    title: "Depth over demos",
    body: "I optimize for builds that survive judges, users, and production-like constraints — not one-off scripts.",
  },
  {
    title: "Measurable impact",
    body: "CGPA, competition ranks, publications, and real users are the bar — not vanity metrics.",
  },
  {
    title: "Ownership end-to-end",
    body: "From scraping messy data to shipping UI and write-ups, I close the loop without waiting for perfect specs.",
  },
];

export function PhilosophySection() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-sora mb-10 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          How I work
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {principles.map((p, index) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="h-full border-border bg-card/60">
                <CardHeader>
                  <CardTitle className="font-sora text-lg">{p.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
