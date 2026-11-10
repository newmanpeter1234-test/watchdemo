"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const frames = [
  {
    src: "/images/cap-hse.jpg",
    alt: "Safety toolbox briefing at dawn on an industrial site in Qatar",
    caption: "Toolbox briefing",
    meta: "HSE · Site 04",
  },
  {
    src: "/images/about-aerial.jpg",
    alt: "Aerial view of an industrial construction site at dusk",
    caption: "Programme overview",
    meta: "Civil · Zone 26",
  },
  {
    src: "/images/cap-welding.jpg",
    alt: "Welder working on steel pipework with sparks trailing",
    caption: "Pipework & welding",
    meta: "Mechanical · Plant",
  },
  {
    src: "/images/wf-lifting.jpg",
    alt: "Lifting supervisor coordinating a crane lift",
    caption: "Lifting operations",
    meta: "Supervision · Lift plan",
  },
  {
    src: "/images/skyline-doha.jpg",
    alt: "Doha skyline at blue hour",
    caption: "Doha, Qatar",
    meta: "Home · Since 2021",
  },
];

export function OnSiteGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const rawX = useTransform(scrollYProgress, [0, 1], ["2%", "-62%"]);
  const x = useSpring(rawX, { stiffness: 90, damping: 26, mass: 0.35 });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section aria-label="On site" className="relative bg-ink-950">
      {/* Desktop: pinned horizontal filmstrip */}
      <div ref={ref} className="relative hidden h-[320vh] lg:block">
        <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
          <div className="container-x mb-10">
            <div className="flex items-end justify-between gap-8">
              <div>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[0.62rem] tracking-[0.2em] text-brass-400">
                    04
                  </span>
                  <span className="label text-sand-300/70">On site</span>
                  <span className="h-px w-8 bg-sand-100/20" />
                </div>
                <h2 className="display mt-5 text-[clamp(2rem,3.6vw,3rem)] text-sand-50">
                  The work, as it{" "}
                  <span className="italic text-brass-300/90">happens.</span>
                </h2>
              </div>
              <p className="hidden max-w-xs text-right text-[0.8rem] leading-relaxed text-sand-400/70 xl:block">
                Skilled people, supervised properly, on site when it matters.
              </p>
            </div>
          </div>

          <motion.div
            style={reduce ? undefined : { x }}
            className="flex w-max gap-6 pl-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))]"
          >
            {frames.map((f, i) => (
              <figure
                key={f.src}
                className="group relative h-[52vh] w-[clamp(20rem,30vw,30rem)] shrink-0 overflow-hidden rounded-[2px] bg-ink-900"
              >
                <Image
                  src={f.src}
                  alt={f.alt}
                  fill
                  sizes="34vw"
                  className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/5 to-transparent" />
                <div className="grain absolute inset-0 opacity-30" />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                  <div>
                    <p className="font-serif text-xl text-sand-50">
                      {f.caption}
                    </p>
                    <p className="mt-1 font-mono text-[0.5rem] tracking-[0.18em] text-sand-300/70 uppercase">
                      {f.meta}
                    </p>
                  </div>
                  <span className="font-mono text-[0.55rem] tracking-[0.18em] text-brass-300/80">
                    0{i + 1}
                  </span>
                </figcaption>
              </figure>
            ))}
            <div className="flex h-[52vh] w-[26rem] shrink-0 flex-col justify-center pr-10">
              <p className="font-serif text-[clamp(1.5rem,2.2vw,2rem)] leading-tight text-sand-100/90">
                &ldquo;Pegasus proudly provides your required manpower, as
                needed.&rdquo;
              </p>
              <span className="mt-5 h-px w-12 bg-brass-400/60" />
              <a
                href="#contact"
                className="mt-5 w-fit font-mono text-[0.58rem] tracking-[0.18em] text-brass-300 uppercase transition-colors hover:text-brass-200"
              >
                Request manpower →
              </a>
            </div>
          </motion.div>

          <div className="container-x mt-10">
            <div className="h-px w-full bg-sand-100/10">
              <motion.div
                style={reduce ? { width: "100%" } : { width: progressWidth }}
                className="h-px bg-brass-400/70"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: native swipe strip */}
      <div className="py-16 lg:hidden">
        <div className="container-x">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[0.62rem] tracking-[0.2em] text-brass-400">
              04
            </span>
            <span className="label text-sand-300/70">On site</span>
            <span className="h-px w-8 bg-sand-100/20" />
          </div>
          <h2 className="display mt-5 text-[clamp(2rem,8vw,2.6rem)] text-sand-50">
            The work, as it{" "}
            <span className="italic text-brass-300/90">happens.</span>
          </h2>
        </div>
        <div className="no-scrollbar mt-7 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:px-10">
          {frames.map((f, i) => (
            <figure
              key={f.src}
              className="relative h-[58vw] max-h-[26rem] w-[80vw] shrink-0 snap-center overflow-hidden rounded-[2px] bg-ink-900 sm:w-[60vw]"
            >
              <Image
                src={f.src}
                alt={f.alt}
                fill
                sizes="80vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
                <div>
                  <p className="font-serif text-lg text-sand-50">{f.caption}</p>
                  <p className="mt-1 font-mono text-[0.5rem] tracking-[0.16em] text-sand-300/70 uppercase">
                    {f.meta}
                  </p>
                </div>
                <span className="font-mono text-[0.55rem] text-brass-300/80">
                  0{i + 1}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
