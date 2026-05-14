import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

type Props = {
  email: string;
  phone: string;
  /** When set, applied as `id` on the section for deep links */
  sectionId?: string;
};

export function ContactMinimal({ email, phone, sectionId }: Props) {
  return (
    <section id={sectionId} className="scroll-mt-20 px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="font-sora text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Contact</h2>
          <p className="mt-3 text-muted-foreground">
            Direct line for founders and hiring managers. No agency spam.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <Button asChild size="lg" className="rounded-lg">
              <a href={`mailto:${email}`}>
                <Mail className="mr-2 h-4 w-4" aria-hidden />
                {email}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-lg">
              <a href={`tel:${phone.replace(/\s/g, "")}`}>
                <Phone className="mr-2 h-4 w-4" aria-hidden />
                {phone}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
