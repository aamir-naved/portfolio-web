"use client";

import { motion, type Variants, useReducedMotion } from "framer-motion";
import { type ReactNode, useMemo } from "react";
import { fadeInUp, fadeInUpDelayed, staggerContainer } from "@/lib/animations";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Vertical offset before reveal (default 28) */
  y?: number;
  variants?: Variants;
};

export function Reveal({ children, className, delay = 0, y, variants }: RevealProps) {
  const reduceMotion = useReducedMotion();

  const resolvedVariants: Variants = useMemo(() => {
    if (variants) return variants;
    if (y !== undefined) {
      return {
        hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : y },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: reduceMotion ? 0.01 : 0.52,
            ease: [0.22, 1, 0.36, 1],
            delay: reduceMotion ? 0 : delay,
          },
        },
      } satisfies Variants;
    }
    if (delay > 0) return fadeInUpDelayed(reduceMotion ? 0 : delay);
    if (reduceMotion) {
      return {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0, transition: { duration: 0 } },
      } satisfies Variants;
    }
    return fadeInUp;
  }, [variants, y, delay, reduceMotion]);

  return (
    <motion.div
      className={className}
      variants={resolvedVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22, margin: "0px 0px -8% 0px" }}
    >
      {children}
    </motion.div>
  );
}

type StaggerGroupProps = {
  children: ReactNode;
  className?: string;
  /** Intersection threshold; lower = starts earlier */
  amount?: number;
  staggerDelay?: number;
  staggerInterval?: number;
};

export function StaggerGroup({
  children,
  className,
  amount = 0.18,
  staggerDelay = 0.05,
  staggerInterval = 0.09,
}: StaggerGroupProps) {
  const reduceMotion = useReducedMotion();
  const containerVariants = useMemo(
    () => staggerContainer(reduceMotion ? 0 : staggerDelay, reduceMotion ? 0 : staggerInterval),
    [reduceMotion, staggerDelay, staggerInterval],
  );

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount, margin: "0px 0px -8% 0px" }}
    >
      {children}
    </motion.div>
  );
}

export function useStaggerChildVariants(): Variants {
  const reduceMotion = useReducedMotion();
  return useMemo(
    () =>
      reduceMotion
        ? ({
            hidden: { opacity: 1, y: 0 },
            visible: { opacity: 1, y: 0, transition: { duration: 0 } },
          } satisfies Variants)
        : fadeInUp,
    [reduceMotion],
  );
}
