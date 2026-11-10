"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealWords } from "@/components/motion-primitives";
import { SectionShell } from "@/components/section";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const facts = [
  { k: "Founded", v: "2021, Doha" },
  { k: "Focus", v: "Construction & Oil/Gas" },
  { k: "Model", v: "Specification-led supply" },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const raw = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const y = useSpring(raw, { stiffness: 80, damping: 24, mass: 0.4 });

  return (
    <SectionShell id="about" label="About Pegasus">
      <div className="relative overflow-hidden border-t border-sand-100/8 bg-ink-950">
        <div className="container-x py-20 sm:py-28 lg:pb-28 lg:pt-36">
          <div ref={ref} className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
            {/* Image column */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -top-4 -left-4 h-16 w-16 border-t border-l border-brass-400/30" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-ink-900">
                  <motion.div
                    style={reduce ? undefined : { y }}
                    className="absolute inset-[-8%]"
                  >
                    <Image
                      src="/images/about-engineer.jpg"
                      alt="Pegasus HSE engineer with a tablet at an industrial plant in Qatar"
                      fill
                      sizes="(min-width: 1024px) 42vw, 100vw"
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
                  <div className="grain absolute inset-0 opacity-40" />

                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <p className="font-mono text-[0.55rem] tracking-[0.2em] text-brass-400/90 uppercase">
                      On site · Qatar
                    </p>
                    <p className="mt-2 font-serif text-2xl leading-tight text-sand-50 sm:text-[1.7rem]">
                      Skilled people, held to a standard.
                    </p>
                  </div>
                </div>

                <div className="absolute -right-3 -bottom-3 h-16 w-16 border-r border-b border-brass-400/30" />
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-sand-100/10 pt-5">
                {facts.map((f) => (
                  <div key={f.k}>
                    <p className="font-mono text-[0.5rem] tracking-[0.18em] text-sand-400/60 uppercase">
                      {f.k}
                    </p>
                    <p className="mt-1.5 text-[0.78rem] leading-snug text-sand-200/90">
                      {f.v}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Copy column */}
            <div className="lg:col-span-7 lg:pl-6 xl:pl-12">
              <div className="flex items-center gap-4">
                <span className="font-mono text-[0.62rem] tracking-[0.2em] text-brass-400">
                  01
                </span>
                <span className="label text-sand-300/70">The company</span>
                <span className="h-px w-8 bg-sand-100/20" />
              </div>

              <RevealWords
                as="h2"
                text="A Qatar-based partner"
                className="display mt-6 block text-[clamp(2.2rem,4.9vw,4rem)] text-sand-50"
              />
              <RevealWords
                as="h2"
                text="for critical manpower."
                delay={0.06}
                className="display mt-1 block text-[clamp(2.2rem,4.9vw,4rem)] italic text-brass-300/90"
              />

              <div className="mt-9 grid gap-6 sm:grid-cols-2">
                <Reveal delay={0.1}>
                  <p className="text-[0.95rem] leading-relaxed text-sand-200/85">
                    Pegasus Trading and Contracting W.L.L. is a key contributor
                    to manpower supply across Qatar&apos;s construction and oil
                    &amp; gas sectors. We take pride in associating ourselves
                    with prestigious, landmark projects.
                  </p>
                </Reveal>
                <Reveal delay={0.16}>
                  <p className="text-[0.95rem] leading-relaxed text-sand-300/80">
                    As we grow, our ambition is clear: to become the leading,
                    most valued provider of professional workers in Qatar. Client
                    satisfaction is our prime motto — and in every condition we
                    are committed to maintaining our reputation.
                  </p>
                </Reveal>
              </div>

              <Reveal delay={0.2}>
                <div className="mt-10 border-t border-sand-100/10 pt-7">
                  <p className="max-w-lg font-serif text-xl leading-snug text-sand-100/90 sm:text-2xl">
                    &ldquo;We take pride in lending our hands in creating the
                    kind of professional environment that enterprises are built
                    upon.&rdquo;
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <span className="h-px w-8 bg-brass-400/60" />
                    <p className="font-mono text-[0.58rem] tracking-[0.18em] text-sand-400/70 uppercase">
                      Founder &amp; CEO, Pegasus Trading &amp; Contracting
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.24}>
                <a
                  href="#why-us"
                  className="group mt-9 inline-flex items-center gap-3 text-sm text-sand-100 transition-colors hover:text-brass-300"
                >
                  <span className="link-underline">Why clients choose us</span>
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-sand-100/20 transition-all duration-500 group-hover:border-brass-400/60 group-hover:bg-brass-400/10">
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.8} />
                  </span>
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
