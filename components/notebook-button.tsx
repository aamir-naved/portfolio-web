"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

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
  const tone =
    variant === "primary"
      ? "bg-[#f8f1dc] text-[#24201c]"
      : "bg-[#fcf7eb]/90 text-[#373029]";

  return (
    <motion.div whileHover={{ rotate: 0.75, y: -2 }} whileTap={{ scale: 0.98 }}>
      <Link
        href={href}
        download={download}
        className={`notebook-button ${tone} ${className}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}
