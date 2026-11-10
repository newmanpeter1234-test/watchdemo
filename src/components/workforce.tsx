"use client";

import Image from "next/image";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
} from "motion/react";
import { ArrowUpRight, Plus } from "lucide-react";
import { disciplines } from "@/lib/content";
import { Reveal } from "@/components/motion-primitives";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { SectionShell } from "@/components/section";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const total = disciplines.reduce((n, d) => n + d.count, 0);

export function Workforce() {
  const [open, setOpen] = useState<string | null>(disciplines[0].id);
  const reduce = useReducedMotion();

  return (
    <SectionShell id="workforce" label="Workforce details">
      <div className="relative overflow-hidden border-y border-sand-100/8 bg-ink-900">
        <div className="grain pointer-events-none absolute inset-0 opacity-30" />
        <div className="container-x relative py-20 sm:py-28 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4">
                <span className="font-mono text-[0.62rem] tracking-[0.2em] text-brass-400">
                  03
                </span>
                <span className="label text-sand-300/70">Workforce</span>
                <span className="h-px w-8 bg-sand-100/20" />
              </div>
              <h2 className="display mt-6 text-[clamp(2.2rem,5.1vw,4.2rem)] text-sand-50">
                The trades we
                <span className="block italic text-brass-300/90">
                  supply, in detail.
                </span>
              </h2>
            </div>
            <Reveal delay={0.1} className="lg:col-span-5">
              <div className="flex items-start gap-6 lg:justify-end">
                <div>
                  <p className="display text-4xl text-sand-50">{total}</p>
                  <p className="mt-1 font-mono text-[0.52rem] tracking-[0.18em] text-sand-400/60 uppercase">
                    Roles listed
                  </p>
                </div>
                <div className="h-12 w-px bg-sand-100/10" />
                <p className="max-w-[16rem] text-[0.85rem] leading-relaxed text-sand-300/80">
                  Committed to providing the following manpower as per your
                  requirements — and to assessing any additional scope.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Accordion */}
          <div className="mt-12 border-t border-sand-100/12 lg:mt-16">
            {disciplines.map((group, gi) => {
              const isOpen = open === group.id;
              return (
                <Reveal key={group.id} delay={gi * 0.04}>
                  <div className="border-b border-sand-100/12">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : group.id)}
                      aria-expanded={isOpen}
                      aria-controls={`panel-${group.id}`}
                      className="group grid w-full cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-5 py-6 text-left sm:gap-8 sm:py-7"
                    >
                      <span
                        className={cn(
                          "font-mono text-[0.6rem] tracking-[0.2em] transition-colors duration-500",
                          isOpen
                            ? "text-brass-400"
                            : "text-sand-400/40 group-hover:text-brass-400/70",
                        )}
                      >
                        {group.index}
                      </span>

                      <span className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                        <span
                          className={cn(
                            "font-serif text-[1.5rem] leading-tight tracking-tight transition-colors duration-500 sm:text-[2.1rem]",
                            isOpen
                              ? "text-sand-50"
                              : "text-sand-100/75 group-hover:text-sand-50",
                          )}
                        >
                          {group.title}
                        </span>
                        <span className="font-mono text-[0.55rem] tracking-[0.18em] text-sand-400/50 uppercase">
                          {group.count} roles
                        </span>
                      </span>

                      <span
                        className={cn(
                          "grid h-10 w-10 place-items-center rounded-full border transition-all duration-500",
                          isOpen
                            ? "rotate-45 border-brass-400/60 bg-brass-400/10 text-brass-300"
                            : "border-sand-100/15 text-sand-200/60 group-hover:border-sand-100/35",
                        )}
                      >
                        <Plus className="h-4 w-4" strokeWidth={1.5} />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`panel-${group.id}`}
                          initial={reduce ? undefined : { height: 0, opacity: 0 }}
                          animate={
                            reduce ? undefined : { height: "auto", opacity: 1 }
                          }
                          exit={reduce ? undefined : { height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.6,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="grid gap-8 pb-9 sm:grid-cols-12 sm:pl-[3.4rem]">
                            <div className="sm:col-span-7 lg:col-span-8">
                              <p className="max-w-lg text-[0.9rem] leading-relaxed text-sand-300/85">
                                {group.description}
                              </p>
                              <ul className="mt-6 flex flex-wrap gap-2">
                                {group.roles.map((role) => (
                                  <li key={role}>
                                    <span className="inline-flex items-center gap-2 rounded-full border border-sand-100/12 bg-ink-950/50 px-3.5 py-2 text-[0.78rem] text-sand-200/90 transition-colors duration-300 hover:border-brass-400/40 hover:text-sand-50">
                                      <span
                                        aria-hidden="true"
                                        className="h-1 w-1 rounded-full bg-brass-400/70"
                                      />
                                      {role}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="sm:col-span-5 lg:col-span-4">
                              <div className="relative aspect-[16/10] overflow-hidden rounded-[2px] bg-ink-800">
                                <Image
                                  src={group.image}
                                  alt={group.alt}
                                  fill
                                  sizes="(min-width: 640px) 32vw, 100vw"
                                  className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 to-transparent" />
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-lg font-mono text-[0.58rem] leading-relaxed tracking-[0.12em] text-sand-400/60 uppercase">
                Need a role that isn&apos;t listed? Send the specification — we
                will assess and revert.
              </p>
              <a
                href={site.emailHref}
                className="group inline-flex w-fit items-center gap-3 rounded-full border border-sand-100/15 px-5 py-3 text-sm text-sand-100 transition-colors duration-500 hover:border-brass-400/50 hover:bg-brass-400/[0.06]"
              >
                Send a requirement
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.7}
                />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
