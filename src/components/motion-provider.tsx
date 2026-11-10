"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * `reducedMotion="user"` makes Framer Motion skip transform and layout
 * animations whenever the visitor has asked their OS for reduced motion.
 * Opacity changes still play, so the page never feels broken — it simply
 * stops moving. Handled here (not per component) so hydration output is
 * identical for every visitor.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
