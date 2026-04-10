"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { type ReactNode, useMemo } from "react";
import { motionEase } from "@/lib/animations";

const MotionLink = motion(Link);

type NotebookButtonProps = {
  href: string;
  children: ReactNode;
  download?: boolean;
  variant?: "primary" | "secondary";
  className?: string;
};

export function NotebookButton({
  href,
  children,
  download,
  variant = "primary",
  className = "",
}: NotebookButtonProps) {
  const reduceMotion = useReducedMotion();

  const tone =
    variant === "primary"
      ? "bg-[#f8f1dc] text-[#24201c]"
      : "bg-[#fcf7eb]/90 text-[#373029]";

  const variants = useMemo(
    () => ({
      rest: {
        rotate: -0.65,
        y: 0,
        scale: 1,
        boxShadow: "3px 4px 0 rgba(157, 138, 106, 0.9)",
      },
      hover: {
        rotate: 0,
        y: -3,
        scale: 1.02,
        boxShadow: "0 14px 28px rgba(63, 43, 20, 0.12), 4px 5px 0 rgba(157, 138, 106, 0.9)",
        transition: { duration: 0.26, ease: motionEase },
      },
      tap: { scale: 0.97, transition: { duration: 0.1, ease: motionEase } },
    }),
    [],
  );

  return (
    <MotionLink
      href={href}
      download={download}
      className={`notebook-button ${tone} ${className}`}
      variants={variants}
      initial="rest"
      whileHover={reduceMotion ? undefined : "hover"}
      whileTap="tap"
    >
      {children}
    </MotionLink>
  );
}
