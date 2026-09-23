import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.2 });
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <motion.div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-px origin-left bg-lime"
      style={{ scaleX }}
    />
  );
}
