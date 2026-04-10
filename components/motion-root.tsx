"use client";

import { LazyMotion, domMax } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Lazy-loaded motion features (smaller than pulling everything eagerly).
 * `domMax` includes box-shadow + color so cards/buttons keep hover depth.
 */
export function MotionRoot({ children }: { children: ReactNode }) {
  return <LazyMotion features={domMax}>{children}</LazyMotion>;
}
