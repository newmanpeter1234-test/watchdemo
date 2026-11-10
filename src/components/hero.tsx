"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const heroStats = [
  { value: "2021", label: "Established in Qatar" },
  { value: "15+", label: "Trades & disciplines" },
  { value: "24/7", label: "Client support" },
  { value: "3", label: "ISO certifications" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const RAWscale = useTransform(scrollYProgress, [0, 1], [1.02, 1.16]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const y = useSpring(rawY, { stiffness: 90, damping: 26, mass: 0.5 });
  const scale = useSpring(RAWscale, { stiffness: 90, damping: 26, mass: 0.5 });

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate min-h-[100svh] w-full overflow-hidden bg-ink-950"
      aria-label="Pegasus Trading and Contracting"
    >
      {/* Cinematic backdrop */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={reduce ? undefined : { y, scale }}
      >
        <motion.div
          className="absolute inset-0"
          initial={reduce ? undefined : { scale: 1.14, opacity: 0 }}
          animate={reduce ? undefined : { scale: 1, opacity: 1 }}
          transition={{ duration: 2.4, ease }}
        >
          <Image
            src="/images/hero-site.jpg"
            alt="Pegasus site team reviewing drawings at an oil and gas construction site in Qatar at golden hour"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[62%_55%]"
          />
        </motion.div>

        {/* Legibility & grade */}
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(10,11,10,0.95)_0%,rgba(10,11,10,0.84)_30%,rgba(10,11,10,0.46)_56%,rgba(10,11,10,0.3)_76%,rgba(10,11,10,0.55)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_85%_at_50%_8%,transparent_30%,rgba(10,11,10,0.8)_100%)]" />
        {/* Copy-side scrim: guarantees contrast for the headline block */}
        <div className="absolute inset-y-0 left-0 w-full bg-[linear-gradient(90deg,rgba(10,11,10,0.9)_0%,rgba(10,11,10,0.62)_38%,rgba(10,11,10,0.18)_62%,transparent_78%)] md:w-[80%]" />
        <div className="absolute inset-x-0 bottom-0 h-[46%] bg-gradient-to-t from-ink-950 via-ink-950/70 to-transparent" />
        <div className="absolute inset-0 bg-[#c8964f] opacity-[0.07] mix-blend-soft-light" />
        <div className="grain absolute inset-0 opacity-70" />
      </motion.div>

      {/* Thin architectural guides */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 hidden w-full lg:block"
      >
        <div className="container-x relative h-full">
          <div className="absolute inset-y-0 left-0 w-px bg-sand-100/[0.07]" />
          <div className="absolute inset-y-0 left-1/2 w-px bg-sand-100/[0.04]" />
          <div className="absolute inset-y-0 right-0 w-px bg-sand-100/[0.07]" />
        </div>
      </div>

      <motion.div
        style={reduce ? undefined : { y: contentY, opacity: fade }}
        className="relative z-10 flex min-h-[100svh] flex-col justify-end pt-[5.5rem] pb-8 sm:pt-32 sm:pb-6"
      >
        <div className="container-x w-full">
          {/* Meta row */}
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 18 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55, ease }}
            className="mb-5 flex flex-wrap items-center gap-x-6 gap-y-2.5 sm:mb-14"
          >
            <span className="inline-flex items-center gap-2.5 rounded-full border border-sand-100/15 bg-ink-950/30 py-1.5 pr-4 pl-2 backdrop-blur-md">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brass-400 opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brass-400" />
              </span>
              <span className="label text-[0.6rem] text-sand-200/90">
                Manpower supply · Doha, Qatar
              </span>
            </span>
            <span className="hidden h-px w-10 bg-sand-100/20 sm:block" />
            <span className="font-mono text-[0.6rem] tracking-[0.22em] text-sand-300/70 uppercase">
              Construction &amp; Oil · Gas
            </span>
          </motion.div>

          <div className="grid grid-cols-1 items-end gap-x-12 gap-y-10 lg:grid-cols-12">
            {/* Headline */}
            <div className="lg:col-span-8 xl:col-span-7">
              <h1 className="display text-sand-50 text-[clamp(2.7rem,10.4vw,8.6rem)]">
                <span className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={reduce ? undefined : { y: "116%" }}
                    animate={reduce ? undefined : { y: "0%" }}
                    transition={{ duration: 1.35, delay: 0.15, ease }}
                  >
                    Manpower
                  </motion.span>
                </span>
                <span className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={reduce ? undefined : { y: "116%" }}
                    animate={reduce ? undefined : { y: "0%" }}
                    transition={{ duration: 1.35, delay: 0.26, ease }}
                  >
                    you can{" "}
                    <span className="relative inline-block">
                      <span className="italic text-brass-300">build</span>
                      <motion.svg
                        viewBox="0 0 300 24"
                        fill="none"
                        aria-hidden="true"
                        className="absolute -bottom-1 left-0 w-full text-brass-400/50 sm:-bottom-2"
                        initial={reduce ? undefined : { pathLength: 0 }}
                        animate={reduce ? undefined : { pathLength: 1 }}
                        transition={{ duration: 1.6, delay: 1.3, ease }}
                      >
                        <motion.path
                          d="M2 18C60 7 148 3 298 8"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          initial={reduce ? undefined : { pathLength: 0 }}
                          animate={reduce ? undefined : { pathLength: 1 }}
                          transition={{ duration: 1.7, delay: 1.25, ease }}
                        />
                      </motion.svg>
                    </span>
                  </motion.span>
                </span>
                <span className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={reduce ? undefined : { y: "116%" }}
                    animate={reduce ? undefined : { y: "0%" }}
                    transition={{ duration: 1.35, delay: 0.37, ease }}
                  >
                    on.
                  </motion.span>
                </span>
              </h1>
            </div>

            {/* Supporting copy + actions */}
            <div className="lg:col-span-4 xl:col-span-5 xl:pl-6">
              <motion.div
                initial={reduce ? undefined : { opacity: 0, y: 24 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 0.8, ease }}
              >
                <p className="max-w-md text-[0.9rem] leading-relaxed text-sand-200/85 sm:text-base">
                  Trade-tested people for Qatar&apos;s construction and oil
                  &amp; gas programmes. Sourced against your specification,
                  documented, and mobilised in step with your schedule.
                </p>

                <div className="mt-6 flex flex-nowrap items-center gap-2.5 sm:mt-8 sm:flex-wrap sm:gap-3">
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-sand-50 py-2 pr-2 pl-5 text-[0.82rem] font-medium text-ink-950 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-brass-300 sm:gap-3 sm:py-3 sm:pr-3 sm:pl-6 sm:text-sm"
                  >
                    Request manpower
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-ink-950 text-sand-50 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-45 sm:h-8 sm:w-8">
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
                    </span>
                  </a>
                  <a
                    href="#capabilities"
                    className="group inline-flex items-center gap-2.5 rounded-full border border-sand-100/25 bg-ink-950/40 px-4 py-3 text-[0.82rem] text-sand-100 backdrop-blur-md transition-all duration-500 hover:border-sand-100/50 hover:bg-sand-50 hover:text-ink-950 sm:gap-3 sm:px-6 sm:py-3.5 sm:text-sm"
                  >
                    Capabilities
                    <span className="hidden h-px w-5 bg-sand-100/40 transition-all duration-500 group-hover:w-8 group-hover:bg-brass-400 sm:block" />
                  </a>
                </div>


              </motion.div>
            </div>
          </div>

          {/* Bottom rail */}
          <motion.div
            initial={reduce ? undefined : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.05 }}
            className="mt-5 hidden grid-cols-2 gap-y-4 border-t border-sand-100/10 pt-4 sm:mt-16 sm:gap-y-6 sm:pt-6 md:grid md:grid-cols-4"
          >
            {heroStats.map((s, i) => (
              <div
                key={s.label}
                className={
                  i === 0
                    ? "md:border-l-0 md:pl-0"
                    : "md:border-l md:border-sand-100/10 md:pl-6"
                }
              >
                <div className="display text-[1.35rem] text-sand-50 sm:text-[1.9rem]">
                  {s.value}
                </div>
                <div className="mt-1 font-mono text-[0.52rem] tracking-[0.16em] text-sand-300/60 uppercase sm:mt-1.5 sm:text-[0.55rem] sm:tracking-[0.18em]">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>


        </div>

        {/* Scroll cue */}
        <motion.a
          href="#about"
          aria-label="Scroll to about section"
          initial={reduce ? undefined : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="group absolute top-[52%] right-6 hidden w-14 flex-col items-center gap-4 text-sand-300/60 transition-colors hover:text-brass-300 xl:flex"
        >
          <span className="label rotate-180 text-[0.5rem] [writing-mode:vertical-rl]">
            Scroll to explore
          </span>
          <span className="relative h-16 w-px overflow-hidden bg-sand-100/15">
            <motion.span
              className="absolute inset-x-0 top-0 h-6 bg-brass-400"
              animate={reduce ? undefined : { y: ["-100%", "270%"] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: [0.65, 0.05, 0.36, 1],
                repeatDelay: 0.3,
              }}
            />
          </span>
          <ArrowDown className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-y-1" />
        </motion.a>
      </motion.div>
    </section>
  );
}
