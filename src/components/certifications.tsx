"use client";

import {
  motion,
} from "motion/react";
import { ShieldCheck } from "lucide-react";
import { certifications } from "@/lib/content";
import { Reveal, RevealWords } from "@/components/motion-primitives";
import { SectionShell } from "@/components/section";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export function Certifications() {
  const reduce = useReducedMotion();

  return (
    <SectionShell label="Certifications">
      <div className="relative overflow-hidden border-t border-sand-100/8 bg-ink-900">
        <div className="container-x py-20 sm:py-24 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4">
                <span className="font-mono text-[0.62rem] tracking-[0.2em] text-brass-400">
                  09
                </span>
                <span className="label text-sand-300/70">Certifications</span>
              </div>
              <RevealWords
                as="h2"
                text="A quality management"
                className="display mt-6 block text-[clamp(2rem,4.4vw,3.4rem)] text-sand-50"
              />
              <RevealWords
                as="h2"
                text="system that holds."
                delay={0.06}
                className="display block text-[clamp(2rem,4.4vw,3.4rem)] italic text-brass-300/90"
              />
            </div>
            <Reveal delay={0.1} className="lg:col-span-5">
              <div className="flex items-start gap-4 rounded-[2px] border border-sand-100/10 bg-ink-950/60 p-5">
                <ShieldCheck
                  className="mt-0.5 h-5 w-5 shrink-0 text-brass-400"
                  strokeWidth={1.5}
                />
                <p className="text-[0.85rem] leading-relaxed text-sand-300/85">
                  Pegasus maintains a quality management system conforming to
                  ISO 45001:2018, ISO 9001:2015 and ISO 14001:2015.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {certifications.map((c, i) => (
              <motion.article
                key={c.code}
                initial={reduce ? undefined : { opacity: 0, y: 22 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative overflow-hidden border border-sand-100/10 bg-ink-950/70 p-6 transition-colors duration-500 hover:border-brass-400/30 sm:p-7"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-mono text-[0.5rem] tracking-[0.2em] text-sand-400/50 uppercase">
                      ISO
                    </p>
                    <p className="display mt-2 text-4xl text-sand-50">
                      {c.code}
                      <span className="text-lg text-brass-300/80">
                        :{c.year}
                      </span>
                    </p>
                  </div>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-sand-100/12 text-sand-300/60 transition-colors duration-500 group-hover:border-brass-400/40 group-hover:text-brass-300">
                    <ShieldCheck className="h-4 w-4" strokeWidth={1.4} />
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-lg leading-tight text-sand-100">
                  {c.title}
                </h3>
                <p className="mt-2.5 text-[0.8rem] leading-relaxed text-sand-300/70">
                  {c.body}
                </p>
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-px w-0 bg-brass-400/50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full"
                />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
