import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Unused — kept so existing call sites stay valid. */
  delay?: number;
  y?: number;
};

/** Static wrapper (scroll/hover animations removed). */
export function Reveal({ children, className }: RevealProps) {
  return className ? <div className={className}>{children}</div> : <>{children}</>;
}

type StaggerGroupProps = {
  children: ReactNode;
  className?: string;
  amount?: number;
  staggerDelay?: number;
  staggerInterval?: number;
};

export function StaggerGroup({ children, className }: StaggerGroupProps) {
  return <div className={className}>{children}</div>;
}
