import { useRef, type MouseEvent, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type Tilt3DProps = {
  children: ReactNode;
  className?: string;
  /** Max tilt in degrees */
  max?: number;
  glare?: boolean;
};

const SPRING = { stiffness: 300, damping: 30, mass: 0.6 };

/** Mouse-tracked 3D tilt + light glare — pure CSS perspective, no WebGL. No-ops under reduced motion / touch. */
export function Tilt3D({ children, className, max = 8, glare = true }: Tilt3DProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, SPRING);
  const sy = useSpring(py, SPRING);
  const lift = useSpring(0, SPRING);

  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const translateZ = useTransform(lift, [0, 1], [0, 22]);
  const glareBackground = useTransform([sx, sy], (latest) => {
    const [gx, gy] = latest as number[];
    return `radial-gradient(circle at ${gx * 100}% ${gy * 100}%, rgba(79,70,229,0.16), rgba(6,182,212,0.06) 35%, transparent 60%)`;
  });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseEnter() {
    if (reduce) return;
    lift.set(1);
  }

  function handleMouseLeave() {
    px.set(0.5);
    py.set(0.5);
    lift.set(0);
  }

  return (
    <div
      ref={ref}
      className={cn("relative", className)}
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative h-full will-change-transform"
        style={{ rotateX, rotateY, z: translateZ, transformStyle: "preserve-3d" }}
      >
        {children}
        {glare ? (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-lg"
            style={{ opacity: lift, background: glareBackground }}
          />
        ) : null}
      </motion.div>
    </div>
  );
}
