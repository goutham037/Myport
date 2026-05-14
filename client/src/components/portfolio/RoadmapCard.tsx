import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const columns = [
  {
    title: "Now",
    items: [
      { head: "NexMeet", sub: "WebRTC polish, moderation, and safer stranger pairing." },
      { head: "Quizmaker", sub: "Launch prep — analytics, adaptive difficulty, store readiness." },
    ],
  },
  {
    title: "Next",
    items: [
      { head: "Higher studies & placements", sub: "BTech / competitive exams — deepen systems & ML." },
      { head: "GreenBridge scale", sub: "More languages, stronger disease models, partner onboarding." },
    ],
  },
];

export function RoadmapCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
    >
      <Card className="border-border bg-card/60 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="font-sora text-2xl">Currently building</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8 md:grid-cols-2">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="mb-4 border-b border-border pb-2 font-mono text-sm font-medium text-foreground">
                  {col.title}
                </h3>
                <ul className="space-y-6">
                  {col.items.map((item) => (
                    <li key={item.head}>
                      <p className="font-medium text-foreground">{item.head}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{item.sub}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
