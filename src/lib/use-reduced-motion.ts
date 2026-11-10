"use client";

import { useEffect, useState } from "react";

/**
 * Hydration-safe reduced-motion preference.
 *
 * `motion/react`'s `useReducedMotion` reads the media query synchronously,
 * which means a reduced-motion visitor hydrates markup that differs from
 * what the server rendered. This version returns `false` on the server and
 * during the first client render, then settles on the real value.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
}
