import { motion, useReducedMotion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Github, ScanFace, Brain, Cloud } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/usePageMeta";
import { easeOutExpo, listStagger, lineItem } from "@/lib/motion";

const REPO = "https://github.com/goutham037/face-attend";

const STEPS = [
  {
    n: "01",
    title: "Detect the face",
    body: "OpenCV with a Haar Cascade classifier finds and crops faces from the camera frame — fast, lightweight, and runs without a GPU.",
  },
  {
    n: "02",
    title: "Recognize with a CNN",
    body: "A TensorFlow/Keras convolutional neural network, trained on the enrolled faces, matches each detected face to a person.",
  },
  {
    n: "03",
    title: "Mark attendance",
    body: "A recognized person is logged as present, so attendance is taken from a camera instead of a sheet passed around.",
  },
  {
    n: "04",
    title: "Serve it on the web",
    body: "A browser UI, deployed on an AWS EC2 instance, makes the system usable from any device without installing anything.",
  },
];

export default function FaceAttendPage() {
  usePageMeta(
    "Face-Recognition Attendance (CNN) | Sharan Goutham",
    "A face-recognition attendance system: OpenCV Haar Cascade detection, a TensorFlow/Keras CNN for recognition, and a browser UI on AWS EC2."
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
          <Badge variant="secondary" className="font-mono text-xs">Computer vision</Badge>
          <Badge variant="secondary" className="font-mono text-xs">Deep learning</Badge>
          <Badge variant="secondary" className="font-mono text-xs">OpenCV · TensorFlow</Badge>
        </div>
        <h1 className="font-sora text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
          Face-Recognition Attendance (CNN)
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
          Taking attendance by hand is slow and easy to game. This system does it from a camera: OpenCV finds the
          face, a convolutional neural network recognizes who it is, and a browser UI on AWS EC2 makes it usable
          anywhere.
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

      {/* pipeline at a glance */}
      <section className="border-t border-slate-100 bg-slate-50/60 py-14">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: ScanFace, title: "Detect", sub: "OpenCV · Haar Cascade" },
              { icon: Brain, title: "Recognize", sub: "TensorFlow/Keras CNN" },
              { icon: Cloud, title: "Serve", sub: "Browser UI on AWS EC2" },
            ].map((s) => (
              <div key={s.title} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <s.icon className="h-7 w-7 shrink-0 text-primary" aria-hidden />
                <div>
                  <p className="font-sora text-base font-semibold text-slate-900">{s.title}</p>
                  <p className="text-xs text-slate-500">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* how it works */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-slate-400">How it works</p>
          <h2 className="mb-10 font-sora text-2xl font-semibold text-slate-900">Camera to attendance</h2>
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
            {["Python", "OpenCV", "TensorFlow/Keras", "CNN", "AWS EC2"].map((t) => (
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
