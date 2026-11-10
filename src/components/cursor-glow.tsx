"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

/**
 * A very restrained brass light that follows the pointer. Pointer-device
 * only, skipped for reduced-motion users, and rendered at low opacity so it
 * reads as material rather than decoration.
 */
export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const reduce = useReducedMotion();
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const sx = useSpring(x, { stiffness: 120, damping: 22, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 120, damping: 22, mass: 0.35 });

  useEffect(() => {
    if (reduce) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduce, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ left: sx, top: sy }}
      className="pointer-events-none fixed z-[5] -ml-[300px] -mt-[300px] hidden h-[600px] w-[600px] rounded-full opacity-40 mix-blend-soft-light lg:block"
    >
      <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(200,150,79,0.55)_0%,rgba(200,150,79,0.12)_38%,transparent_68%)] blur-2xl" />
    </motion.div>
  );
}
