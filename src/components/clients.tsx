"use client";

import {
  motion,
} from "motion/react";
import { Reveal } from "@/components/motion-primitives";
import { SectionShell } from "@/components/section";
import { useReducedMotion } from "@/lib/use-reduced-motion";

/**
 * Client marks are rendered as a typographic wall rather than scanned logos:
 * the originals are low-resolution raster files, so a curated wordmark
 * treatment keeps the page crisp and consistent at every size.
 */
const clientMarks = [
  { name: "Qatar Construction", abbr: "QC", sector: "Main contracting" },
  { name: "Al Rayyan Projects", abbr: "AR", sector: "Infrastructure" },
  { name: "Gulf Energy Group", abbr: "GE", sector: "Oil & gas" },
  { name: "Doha EPC", abbr: "DE", sector: "EPC contractor" },
  { name: "North Field Services", abbr: "NF", sector: "Industrial services" },
];

export function Clients() {
  const reduce = useReducedMotion();

  return (
    <SectionShell id="clients" label="Our main clients">
      <div className="relative overflow-hidden bg-ink-950">
        <div className="container-x py-20 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-4">
                <span className="font-mono text-[0.62rem] tracking-[0.2em] text-brass-400">
                  08
                </span>
                <span className="label text-sand-300/70">Clients</span>
                <span className="h-px w-8 bg-sand-100/20" />
              </div>
              <h2 className="display mt-6 text-[clamp(2.1rem,4.6vw,3.6rem)] text-sand-50">
                Trusted on
                <span className="italic text-brass-300/90"> landmark work.</span>
              </h2>
            </div>
            <Reveal delay={0.08} className="lg:col-span-6">
              <p className="max-w-md text-[0.9rem] leading-relaxed text-sand-300/80 lg:ml-auto">
                We take pride in associating ourselves with prestigious and
                landmark projects across Qatar — from plant shutdowns to civil
                packages and infrastructure programmes.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden border border-sand-100/10 bg-sand-100/10 sm:grid-cols-3 lg:grid-cols-5">
            {clientMarks.map((c, i) => (
              <motion.div
                key={c.abbr}
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative flex flex-col justify-between gap-6 bg-ink-950 p-5 transition-colors duration-500 hover:bg-ink-900 sm:aspect-[4/3] sm:gap-0"
              >
                <span className="font-mono text-[0.5rem] tracking-[0.18em] text-sand-400/40 uppercase">
                  {c.sector}
                </span>
                <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-sand-100/15 font-mono text-[0.6rem] tracking-wider text-sand-200/80 transition-colors duration-500 group-hover:border-brass-400/50 group-hover:text-brass-300">
                    {c.abbr}
                  </span>
                  <span className="text-[0.8rem] leading-tight text-sand-200/75 transition-colors duration-500 group-hover:text-sand-50">
                    {c.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-5 font-mono text-[0.52rem] tracking-[0.16em] text-sand-500/50 uppercase">
              Representative client categories — references available on request.
            </p>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
