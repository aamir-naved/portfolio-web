import type { Transition, Variants } from "framer-motion";

/** Shared easing — premium, not bouncy */
export const motionEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const baseTransition: Transition = {
  duration: 0.52,
  ease: motionEase,
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: baseTransition,
  },
};

export function fadeInUpDelayed(delay: number): Variants {
  return {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ...baseTransition, delay },
    },
  };
}

export function staggerContainer(delayChildren = 0.06, staggerChildren = 0.085): Variants {
  return {
    hidden: {},
    visible: {
      transition: { delayChildren, staggerChildren },
    },
  };
}

const liftShadow =
  "0 20px 40px rgba(63, 43, 20, 0.13), 0 10px 18px rgba(63, 43, 20, 0.07), 4px 6px 0 rgba(157, 138, 106, 0.9)";
/** Matches `.sketch-panel` base shadow so idle/hover handoff is seamless */
const restShadow = "3px 4px 0 rgba(157, 138, 106, 0.9)";

/** Card / button hover: straighten, lift, slight scale, richer shadow */
export function hoverTilt(idleRotate: number): Variants {
  return {
    rest: {
      rotate: idleRotate,
      y: 0,
      scale: 1,
      boxShadow: restShadow,
    },
    hover: {
      rotate: 0,
      y: -10,
      scale: 1.02,
      boxShadow: liftShadow,
      transition: { duration: 0.28, ease: motionEase },
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.12, ease: motionEase },
    },
  };
}

/** Notebook sheet outer wrapper — idle skew, hover lifts and slightly straightens */
export function notebookSheetHoverVariants(restRotate: number, restY: number): Variants {
  return {
    rest: {
      rotate: restRotate,
      y: restY,
      scale: 1,
    },
    hover: {
      rotate: restRotate * 0.35,
      y: restY - 6,
      scale: 1.005,
      transition: { duration: 0.32, ease: motionEase },
    },
  };
}

const SHEET_ROTATIONS = [-1.15, -0.82, 0.72, 1.08, -0.58, 0.92, -0.95, 0.68];
const SHEET_X = [-8, -4, 6, 10, -6, 3, 7, -5];

export function getNotebookSheetLayout(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (Math.imul(31, h) + seed.charCodeAt(i)) | 0;
  }
  const idx = Math.abs(h) % SHEET_ROTATIONS.length;
  const marginShift = ((Math.abs(h) % 5) - 2) * 5;
  return {
    rotate: SHEET_ROTATIONS[idx],
    translateX: SHEET_X[idx],
    translateY: SHEET_X[(idx + 3) % SHEET_X.length] * 0.25,
    marginInlineStart: marginShift,
  };
}
