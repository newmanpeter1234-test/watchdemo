"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import { principles } from "@/lib/content";
import { Reveal } from "@/components/motion-primitives";
import { SectionShell } from "@/components/section";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export function Vision() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.4"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [0.35, 1]);

  return (
    <SectionShell label="Vision and mission">
      <div
        ref={ref}
        className="relative overflow-hidden border-y border-sand-100/8 bg-ink-900/50"
      >
        {/* Slow-drifting wordmark */}
        <motion.div
          aria-hidden="true"
          style={reduce ? undefined : { x, opacity }}
          className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 select-none whitespace-nowrap"
        >
          <span className="font-serif text-[22vw] leading-none text-sand-100/[0.035]">
            Vision &amp; Mission
          </span>
        </motion.div>

        <div className="container-x relative py-20 sm:py-28">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4">
                <span className="font-mono text-[0.62rem] tracking-[0.2em] text-brass-400">
                  06
                </span>
                <span className="label text-sand-300/70">
                  Vision &amp; mission
                </span>
              </div>
              <h2 className="display mt-6 text-[clamp(2.1rem,4.4vw,3.4rem)] text-sand-50">
                What we are
                <span className="block italic text-brass-300/90">
                  building towards.
                </span>
              </h2>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-sm text-[0.9rem] leading-relaxed text-sand-300/80">
                  Four statements guide how we work with clients, partners and
                  the people we employ. They are deliberately plain — and
                  deliberately binding.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-px overflow-hidden rounded-[2px] border border-sand-100/10 bg-sand-100/10 sm:grid-cols-2">
                {principles.map((p, i) => (
                  <Reveal key={p.index} delay={i * 0.06}>
                    <div className="group relative h-full bg-ink-950/85 p-6 transition-colors duration-500 hover:bg-ink-850 sm:p-7">
                      <span className="font-mono text-[0.58rem] tracking-[0.2em] text-brass-400/70">
                        {p.index}
                      </span>
                      <h3 className="mt-4 font-serif text-xl leading-tight tracking-tight text-sand-50 sm:text-[1.4rem]">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-[0.82rem] leading-relaxed text-sand-300/75">
                        {p.body}
                      </p>
                      <span className="absolute inset-x-0 bottom-0 h-px w-0 bg-brass-400/50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
