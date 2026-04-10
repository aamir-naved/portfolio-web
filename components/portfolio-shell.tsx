"use client";

import { MotionConfig } from "framer-motion";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { MotionRoot } from "@/components/motion-root";
import { SmoothScroll } from "@/components/smooth-scroll";

const STORAGE_KEY = "portfolio-animations-on";

type AnimationPreferenceContextValue = {
  /** When false: no Lenis, Framer treats reduced motion, CSS doodle keyframes off. */
  animationsOn: boolean;
  setAnimationsOn: (next: boolean) => void;
  hydrated: boolean;
};

const AnimationPreferenceContext = createContext<AnimationPreferenceContextValue | null>(null);

export function useAnimationPreference() {
  const ctx = useContext(AnimationPreferenceContext);
  if (!ctx) {
    throw new Error("useAnimationPreference must be used within PortfolioShell");
  }
  return ctx;
}

function AnimationDevToggle() {
  const { animationsOn, setAnimationsOn, hydrated } = useAnimationPreference();

  if (!hydrated) return null;

  return (
    <div className="animation-dev-toggle-wrap">
      <button
        type="button"
        className="animation-dev-toggle"
        onClick={() => setAnimationsOn(!animationsOn)}
        aria-pressed={animationsOn}
        title="Turn all motion off (Framer, CSS doodles, smooth scroll) to compare performance. Preference is saved in this browser."
      >
        <span className="animation-dev-toggle__label">Motion</span>
        <span className={`animation-dev-toggle__pill ${animationsOn ? "is-on" : "is-off"}`}>
          {animationsOn ? "On" : "Off"}
        </span>
      </button>
    </div>
  );
}

export function PortfolioShell({ children }: { children: ReactNode }) {
  const [animationsOn, setAnimationsOn] = useState(true);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored !== null) {
        setAnimationsOn(stored === "true");
      }
    } catch {
      /* private mode */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, String(animationsOn));
    } catch {
      /* ignore */
    }
    document.documentElement.dataset.animations = animationsOn ? "on" : "off";
  }, [animationsOn, hydrated]);

  return (
    <AnimationPreferenceContext.Provider value={{ animationsOn, setAnimationsOn, hydrated }}>
      <MotionRoot>
        <MotionConfig reducedMotion={animationsOn ? "user" : "always"}>
          <SmoothScroll enabled={animationsOn}>{children}</SmoothScroll>
          <AnimationDevToggle />
        </MotionConfig>
      </MotionRoot>
    </AnimationPreferenceContext.Provider>
  );
}
