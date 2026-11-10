"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { Reveal, RevealWords } from "@/components/motion-primitives";
import { SectionShell } from "@/components/section";

export function CeoMessage() {
  return (
    <SectionShell label="Message from the CEO">
      <div className="relative overflow-hidden bg-ink-950">
        <div className="container-x py-20 sm:py-28 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-sm lg:mx-0">
                <div className="absolute -inset-3 rounded-[2px] border border-brass-400/20" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-ink-900">
                  <Image
                    src="/images/ceo-portrait.jpg"
                    alt="Chief Executive Officer of Pegasus Trading and Contracting"
                    fill
                    sizes="(min-width: 1024px) 34vw, 80vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
                  <div className="grain absolute inset-0 opacity-35" />
                </div>
                <div className="mt-6 flex items-end justify-between border-t border-sand-100/10 pt-4">
                  <div>
                    <p className="text-sm text-sand-50">Chief Executive Officer</p>
                    <p className="mt-1 font-mono text-[0.52rem] tracking-[0.18em] text-sand-400/60 uppercase">
                      Founder · Pegasus
                    </p>
                  </div>
                  <span className="font-serif text-3xl text-brass-400/30">
                    &rsquo;21
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="flex items-center gap-4">
                <span className="font-mono text-[0.62rem] tracking-[0.2em] text-brass-400">
                  07
                </span>
                <span className="label text-sand-300/70">CEO message</span>
                <span className="h-px w-8 bg-sand-100/20" />
              </div>

              <RevealWords
                as="h2"
                text="Twenty-four seven,"
                className="display mt-6 block text-[clamp(2.1rem,4.6vw,3.6rem)] text-sand-50"
              />
              <RevealWords
                as="h2"
                text="we are dedicated."
                delay={0.06}
                className="display block text-[clamp(2.1rem,4.6vw,3.6rem)] italic text-brass-300/90"
              />

              <Reveal delay={0.12}>
                <div className="relative mt-9">
                  <Quote
                    aria-hidden="true"
                    className="absolute -top-2 -left-1 h-8 w-8 text-brass-400/20"
                    strokeWidth={1}
                  />
                  <div className="space-y-5 pl-1 text-[0.95rem] leading-relaxed text-sand-200/85">
                    <p>
                      Pegasus Trading and Contracting started its journey to
                      build a corporate business relationship with our valuable
                      clients in Qatar in 2021. To meet their best service
                      requirements, we are highly dedicated to serving around
                      the clock.
                    </p>
                    <p>
                      We provide quality services in manpower supply of skilled
                      workers since our inception. We take pride in lending our
                      hands in creating the professional environment that
                      fulfills the mission and vision enterprises are built
                      upon — in highly dynamic and diversified global markets.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-sand-100/10 pt-6">
                  <p className="font-serif text-lg italic text-sand-100/85">
                    &ldquo;Client satisfaction is our prime motto.&rdquo;
                  </p>
                  <span className="h-px flex-1 bg-sand-100/10" />
                  <p className="font-mono text-[0.55rem] tracking-[0.18em] text-sand-400/60 uppercase">
                    Est. 2021 · Doha
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
