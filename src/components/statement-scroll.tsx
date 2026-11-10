"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

/**
 * A statement that lights up word by word as the reader scrolls.
 * Each word owns a slice of the scroll range, so the sentence resolves
 * at exactly the pace of the scroll — no timers, no autoplay.
 */
function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.24, 1]);
  const y = useTransform(progress, range, [6, 0]);
  return (
    <span className="mr-[0.26em] inline-block">
      <motion.span style={{ opacity, y }} className="inline-block">
        {children}
      </motion.span>
    </span>
  );
}

export function StatementScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.45"],
  });

  const words =
    "We are dedicated to meeting your goals — supplying professional, documented manpower to Qatar's construction and oil and gas projects, without compromise on safety or standards.".split(
      " ",
    );

  return (
    <section aria-label="Our commitment" className="relative bg-ink-950">
      <div className="container-x py-16 sm:py-24 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-32">
              <div className="flex items-center gap-4">
                <span className="h-1 w-1 rounded-full bg-brass-400" />
                <span className="label text-sand-300/70">Our commitment</span>
              </div>
              <p className="mt-5 max-w-[15rem] text-[0.8rem] leading-relaxed text-sand-400/70">
                Established in Doha in 2021. Serving landmark projects across
                Qatar ever since.
              </p>
              <div className="mt-6 h-px w-16 bg-sand-100/15" />
            </div>
          </div>

          <div ref={ref} className="lg:col-span-9">
            <p className="font-serif text-[clamp(1.7rem,3.6vw,3.1rem)] leading-[1.22] tracking-[-0.015em] text-sand-50">
              {reduce ? (
                <span>{words.join(" ")}</span>
              ) : (
                words.map((w, i) => (
                  <Word
                    key={`${w}-${i}`}
                    progress={scrollYProgress}
                    range={[
                      (i / words.length) * 0.92,
                      ((i + 1) / words.length) * 0.92 + 0.08,
                    ]}
                  >
                    {w}
                  </Word>
                ))
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
