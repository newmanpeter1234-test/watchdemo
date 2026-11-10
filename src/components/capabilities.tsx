"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";
import { capabilities } from "@/lib/content";
import { Reveal } from "@/components/motion-primitives";
import { cn } from "@/lib/utils";
import { SectionShell } from "@/components/section";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export function Capabilities() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <SectionShell id="capabilities" label="Our capabilities">
      <div className="relative overflow-hidden bg-ink-950">
        {/* Ambient warmth */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 h-[40rem] w-[70rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brass-500/[0.06] blur-[130px]"
        />

        <div className="container-x relative py-20 sm:py-28 lg:py-36">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4">
                <span className="font-mono text-[0.62rem] tracking-[0.2em] text-brass-400">
                  02
                </span>
                <span className="label text-sand-300/70">What we do</span>
                <span className="h-px w-8 bg-sand-100/20" />
              </div>
              <h2 className="display mt-6 text-[clamp(2.2rem,5.1vw,4.2rem)] text-sand-50">
                Three ways we
                <span className="block italic text-brass-300/90">
                  put people on site.
                </span>
              </h2>
            </div>
            <Reveal delay={0.1} className="lg:col-span-5 lg:pb-3">
              <p className="max-w-md text-[0.95rem] leading-relaxed text-sand-300/85">
                We offer a wide range of professional manpower services,
                designed to make your teams productive and to apply innovative
                solutions that deliver measurable returns.
              </p>
            </Reveal>
          </div>

          <div
            ref={ref}
            className="mt-14 grid grid-cols-1 gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-14"
          >
            {/* Accompanying visual */}
            <div className="order-2 lg:order-1 lg:col-span-5">
              <div className="sticky top-28">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-ink-900">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      className="absolute inset-0"
                      initial={reduce ? undefined : { opacity: 0, scale: 1.05 }}
                      animate={reduce ? undefined : { opacity: 1, scale: 1 }}
                      exit={reduce ? undefined : { opacity: 0 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <motion.div
                        style={reduce ? undefined : { y: imgY }}
                        className="absolute inset-[-6%]"
                      >
                        <Image
                          src={capabilities[active].image}
                          alt={capabilities[active].alt}
                          fill
                          sizes="(min-width: 1024px) 40vw, 100vw"
                          className="object-cover"
                        />
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>

                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-ink-950/20" />
                  <div className="grain absolute inset-0 opacity-40" />

                  <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
                    <span className="rounded-full border border-sand-100/20 bg-ink-950/40 px-3 py-1 font-mono text-[0.55rem] tracking-[0.2em] text-sand-100/90 uppercase backdrop-blur-md">
                      {capabilities[active].index} / 03
                    </span>
                    <span className="font-mono text-[0.55rem] tracking-[0.2em] text-sand-200/60 uppercase">
                      Pegasus
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={active}
                        initial={reduce ? undefined : { opacity: 0, y: 14 }}
                        animate={reduce ? undefined : { opacity: 1, y: 0 }}
                        exit={reduce ? undefined : { opacity: 0 }}
                        transition={{ duration: 0.55, delay: 0.08 }}
                      >
                        <div className="flex flex-wrap gap-2">
                          {capabilities[active].detail.map((d) => (
                            <span
                              key={d}
                              className="inline-flex items-center gap-1.5 rounded-full border border-sand-100/15 bg-ink-950/50 px-2.5 py-1 text-[0.65rem] text-sand-200/90 backdrop-blur-md"
                            >
                              <Check
                                className="h-2.5 w-2.5 text-brass-400"
                                strokeWidth={3}
                              />
                              {d}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive index */}
            <div className="order-1 lg:order-2 lg:col-span-7">
              <div className="border-t border-sand-100/10">
                {capabilities.map((cap, i) => {
                  const isActive = i === active;
                  return (
                    <Reveal key={cap.index} delay={i * 0.05}>
                      <button
                        type="button"
                        onMouseEnter={() => setActive(i)}
                        onFocus={() => setActive(i)}
                        onClick={() => setActive(i)}
                        aria-pressed={isActive}
                        className={cn(
                          "group relative block w-full cursor-pointer border-b border-sand-100/10 py-7 text-left transition-colors duration-500 sm:py-8",
                        )}
                      >
                        <span
                          className={cn(
                            "absolute inset-y-0 left-0 w-px origin-top bg-brass-400 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                            isActive ? "scale-y-100" : "scale-y-0",
                          )}
                        />
                        <div className="flex gap-5 pl-5 sm:gap-7 sm:pl-7">
                          <span
                            className={cn(
                              "mt-1.5 shrink-0 font-mono text-[0.62rem] tracking-[0.18em] transition-colors duration-500",
                              isActive
                                ? "text-brass-400"
                                : "text-sand-400/45 group-hover:text-brass-400/70",
                            )}
                          >
                            {cap.index}
                          </span>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-6">
                              <h3
                                className={cn(
                                  "font-serif text-[1.6rem] leading-tight tracking-tight transition-colors duration-500 sm:text-[2rem]",
                                  isActive
                                    ? "text-sand-50"
                                    : "text-sand-200/60 group-hover:text-sand-100",
                                )}
                              >
                                {cap.title}
                              </h3>
                              <span
                                className={cn(
                                  "mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-500",
                                  isActive
                                    ? "border-brass-400/60 bg-brass-400/10 text-brass-300"
                                    : "border-sand-100/15 text-sand-300/50 group-hover:border-sand-100/30",
                                )}
                              >
                                <ArrowUpRight
                                  className={cn(
                                    "h-3.5 w-3.5 transition-transform duration-500",
                                    isActive && "rotate-45",
                                  )}
                                  strokeWidth={1.8}
                                />
                              </span>
                            </div>

                            <div
                              className={cn(
                                "grid transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                                isActive
                                  ? "mt-3 grid-rows-[1fr] opacity-100"
                                  : "grid-rows-[0fr] opacity-0",
                              )}
                            >
                              <div className="overflow-hidden">
                                <p className="max-w-lg text-[0.9rem] leading-relaxed text-sand-300/80">
                                  {cap.summary}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>
                    </Reveal>
                  );
                })}
              </div>

              <Reveal delay={0.15}>
                <div className="mt-9 flex flex-wrap items-center justify-between gap-5">
                  <p className="max-w-sm font-mono text-[0.58rem] leading-relaxed tracking-[0.12em] text-sand-400/60 uppercase">
                    Scopes beyond this list are assessed on specification.
                  </p>
                  <a
                    href="#workforce"
                    className="group inline-flex items-center gap-2.5 text-sm text-sand-100 transition-colors hover:text-brass-300"
                  >
                    <span className="link-underline">
                      See the full workforce
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={1.7}
                    />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
