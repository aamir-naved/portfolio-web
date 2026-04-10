"use client";

import Lenis from "lenis";
import { useEffect } from "react";

type SmoothScrollProps = {
  children: React.ReactNode;
  /** When false, native scroll only (no Lenis). */
  enabled?: boolean;
};

export function SmoothScroll({ children, enabled = true }: SmoothScrollProps) {
  useEffect(() => {
    if (!enabled) return;
    if (typeof window === "undefined") return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const lenis = new Lenis({
      // Slightly higher lerp + neutral wheel = less “heavy” trailing scroll (felt laggy for some).
      lerp: 0.14,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      smoothWheel: true,
      syncTouch: true,
      syncTouchLerp: 0.12,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [enabled]);

  return children;
}
