"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { reasons } from "@/lib/content";
import { Reveal } from "@/components/motion-primitives";
import { SectionShell } from "@/components/section";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rawY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const y = useSpring(rawY, { stiffness: 80, damping: 24, mass: 0.4 });
  const lineScale = useTransform(scrollYProgress, [0.1, 0.85], [0, 1]);

  return (
    <SectionShell id="why-us" label="Why choose Pegasus">
      <div ref={ref} className="relative overflow-hidden bg-ink-950">
        <div className="container-x py-20 sm:py-28 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            {/* Sticky visual */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <div className="relative aspect-[5/6] overflow-hidden rounded-[2px] bg-ink-900">
                  <motion.div
                    style={reduce ? undefined : { y }}
                    className="absolute inset-[-8%]"
                  >
                    <Image
                      src="/images/about-aerial.jpg"
                      alt="Aerial view of a large industrial construction site in the Qatari desert at dusk"
                      fill
                      sizes="(min-width: 1024px) 42vw, 100vw"
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/15 to-transparent" />
                  <div className="grain absolute inset-0 opacity-45" />

                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <p className="font-mono text-[0.55rem] tracking-[0.2em] text-brass-400/90 uppercase">
                      Why choose us
                    </p>
                    <p className="mt-2 max-w-xs font-serif text-2xl leading-tight text-sand-50 sm:text-[1.75rem]">
                      Four commitments we are measured on.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-4 border-t border-sand-100/10 pt-5">
                  <span className="h-1.5 w-1.5 rounded-full bg-brass-400" />
                  <p className="font-mono text-[0.55rem] leading-relaxed tracking-[0.15em] text-sand-400/70 uppercase">
                    Committed to maintaining our reputation — in all conditions.
                  </p>
                </div>
              </div>
            </div>

            {/* Reasons */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4">
                <span className="font-mono text-[0.62rem] tracking-[0.2em] text-brass-400">
                  05
                </span>
                <span className="label text-sand-300/70">Our difference</span>
                <span className="h-px w-8 bg-sand-100/20" />
              </div>

              <h2 className="display mt-6 text-[clamp(2.2rem,5.1vw,4.2rem)] text-sand-50">
                Reliability is
                <span className="block italic text-brass-300/90">
                  the whole product.
                </span>
              </h2>

              <div className="relative mt-12">
                <div className="absolute top-0 left-0 h-full w-px bg-sand-100/10">
                  <motion.div
                    style={
                      reduce ? { scaleY: 1 } : { scaleY: lineScale }
                    }
                    className="h-full w-px origin-top bg-gradient-to-b from-brass-400 via-brass-500/60 to-transparent"
                  />
                </div>

                <div className="divide-y divide-sand-100/10 border-t border-sand-100/10 pl-0">
                  {reasons.map((r, i) => (
                    <Reveal key={r.title} delay={i * 0.04}>
                      <div className="group grid grid-cols-[auto_1fr] gap-5 py-8 pl-6 sm:gap-8 sm:pl-8">
                        <div className="min-w-0">
                          <div className="flex items-baseline gap-3">
                            <span className="font-mono text-[0.6rem] tracking-[0.18em] text-brass-400/80">
                              0{i + 1}
                            </span>
                            <h3 className="font-serif text-2xl leading-tight tracking-tight text-sand-50 sm:text-[1.8rem]">
                              {r.title}
                            </h3>
                          </div>
                          <p className="mt-3 max-w-lg text-[0.9rem] leading-relaxed text-sand-300/80">
                            {r.body}
                          </p>
                        </div>
                        <div className="hidden text-right sm:block">
                          <div className="font-serif text-lg text-sand-100/90">
                            {r.metric}
                          </div>
                          <div className="mt-1 font-mono text-[0.5rem] tracking-[0.16em] text-sand-400/55 uppercase">
                            {r.metricLabel}
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
