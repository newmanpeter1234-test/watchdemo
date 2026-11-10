"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
} from "motion/react";
import { stats } from "@/lib/content";
import { useReducedMotion } from "@/lib/use-reduced-motion";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const reduce = useReducedMotion();
  // Years are facts, not quantities: never animate them up from zero.
  // Always start at 0 so SSR and the first client render agree, then settle
  // the value in an effect (hydration-safe for reduced-motion users too).
  const isYear = value > 1000 && value < 3000;
  const [n, setN] = useState(0);

  useEffect(() => {
    if (isYear || reduce) {
      setN(value);
      return;
    }
    if (!inView) return;
    const duration = 1500;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, value, isYear]);

  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  );
}

export function StatsBand() {
  return (
    <div className="relative border-b border-sand-100/8 bg-ink-900/30">
      <div className="container-x">
        <div className="grid grid-cols-2 divide-sand-100/8 md:grid-cols-4 md:divide-x">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative px-0 py-8 md:px-8 md:py-10 md:first:pl-0"
            >
              <span className="absolute top-0 left-0 h-px w-0 bg-brass-400/60 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full md:hidden" />
              <div className="display text-[2.4rem] leading-none text-sand-50 sm:text-[3rem]">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 font-mono text-[0.55rem] tracking-[0.2em] text-sand-300/60 uppercase">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
