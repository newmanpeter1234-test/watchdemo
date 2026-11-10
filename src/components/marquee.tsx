"use client";

import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useTransform,
  useVelocity,
  useSpring,
} from "motion/react";
import { sectors } from "@/lib/content";
import { useReducedMotion } from "@/lib/use-reduced-motion";

function wrap(min: number, max: number, v: number) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

/**
 * Velocity-reactive ticker: base speed plus the reader's scroll velocity,
 * so the marquee responds to the page instead of looping blindly.
 */
export function SectorsMarquee() {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1200], [0, 3], {
    clamp: false,
  });
  const direction = useRef(1);
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    let moveBy = direction.current * -3.2 * (delta / 1000);
    const vf = velocityFactor.get();
    if (vf < 0) direction.current = -1;
    else if (vf > 0) direction.current = 1;
    moveBy += direction.current * moveBy * vf;
    baseX.set(baseX.get() + moveBy);
  });

  const row = [...sectors, ...sectors, ...sectors, ...sectors];

  return (
    <div className="relative overflow-hidden border-y border-sand-100/8 bg-ink-900/40 py-5">
      <div className="mask-fade-x relative flex flex-nowrap overflow-hidden">
        <motion.div className="flex flex-nowrap whitespace-nowrap" style={{ x }}>
          {row.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-6 pr-6 font-serif text-xl tracking-tight text-sand-300/60 sm:text-2xl"
            >
              {item}
              <span
                aria-hidden="true"
                className="h-1 w-1 rotate-45 bg-brass-400/50"
              />
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
