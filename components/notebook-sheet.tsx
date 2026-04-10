"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode, useMemo } from "react";
import { getNotebookSheetLayout, notebookSheetHoverVariants } from "@/lib/animations";
import { useNarrowScreen } from "@/lib/use-narrow-screen";

type NotebookSheetProps = {
  id?: string;
  title?: string;
  className?: string;
  children: ReactNode;
  /** Stable seed for layout when `id` is missing (e.g. hero block) */
  layoutSeed?: string;
};

export function NotebookSheet({ id, title, className = "", children, layoutSeed = "intro" }: NotebookSheetProps) {
  const narrow = useNarrowScreen();
  const reduceMotion = useReducedMotion();
  const seed = id ?? title ?? layoutSeed;

  const layout = useMemo(() => getNotebookSheetLayout(seed), [seed]);
  const tiltFactor = narrow ? 0.45 : 1;
  const restRotate = layout.rotate * tiltFactor;
  const restY = layout.translateY * tiltFactor;
  const translateX = layout.translateX * tiltFactor;

  return (
    <motion.div
      className="relative"
      style={{ marginInlineStart: layout.marginInlineStart }}
      variants={notebookSheetHoverVariants(restRotate, restY)}
      initial="rest"
      animate="rest"
      whileHover={reduceMotion ? undefined : "hover"}
    >
      <section
        id={id}
        className={`notebook-sheet ${className}`}
        style={{ transform: `translateX(${translateX}px)` }}
      >
        {title ? (
          <div className="mb-6 flex items-center gap-3">
            <span className="doodle-star text-xl text-[#d4a82e]">★</span>
            <h2 className="handwritten text-[2.8rem] leading-none text-[#1f1a17] sm:text-[3.7rem]">{title}</h2>
            <span className="ml-auto text-2xl text-[#5679a6]">✦</span>
          </div>
        ) : null}
        {children}
      </section>
    </motion.div>
  );
}
