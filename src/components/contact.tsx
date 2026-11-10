"use client";

import Image from "next/image";
import { useId, useState } from "react";
import {
  motion,
} from "motion/react";
import { ArrowRight, Check, Clock, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "@/components/motion-primitives";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const needs = [
  "Skilled workforce",
  "Oil & gas support",
  "HSE team",
  "Engineering & site",
  "Something else",
];

const details: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
  sub?: string;
}[] = [
  {
    icon: Phone,
    label: "Direct line",
    value: site.phone,
    href: site.phoneHref,
    sub: `Also ${site.phoneAlt}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: site.emailHref,
    sub: site.salesEmail,
  },
  {
    icon: MapPin,
    label: "Office",
    value: site.address.line1,
    sub: `${site.address.line2}, ${site.address.line3}`,
  },
  {
    icon: Clock,
    label: "Hours",
    value: site.hours,
    sub: "Support available around the clock",
  },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [need, setNeed] = useState(needs[0]);
  const formId = useId();
  const reduce = useReducedMotion();

  return (
    <section
      id="contact"
      aria-label="Contact Pegasus"
      className="relative scroll-mt-24 overflow-hidden bg-ink-950"
    >
      {/* Atmospheric backdrop */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/skyline-doha.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/85 to-ink-950" />
        <div className="grain absolute inset-0 opacity-40" />
      </div>

      <div className="container-x relative py-20 sm:py-28 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: pitch + details */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[0.62rem] tracking-[0.2em] text-brass-400">
                10
              </span>
              <span className="label text-sand-300/70">Get in touch</span>
              <span className="h-px w-8 bg-sand-100/20" />
            </div>

            <h2 className="display mt-6 text-[clamp(2.4rem,5.6vw,4.4rem)] text-sand-50">
              Tell us the
              <span className="block italic text-brass-300/90">
                specification.
              </span>
            </h2>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-[0.92rem] leading-relaxed text-sand-300/85">
                Send the trades, quantities and mobilisation dates. We will come
                back with a considered, documented proposal — and a clear view
                of what is achievable.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-px overflow-hidden border border-sand-100/10 bg-sand-100/10 sm:grid-cols-2">
              {details.map((d, i) => {
                const Icon = d.icon;
                const inner = (
                  <div className="group flex h-full flex-col justify-between gap-4 bg-ink-950/80 p-5 transition-colors duration-500 hover:bg-ink-900/90">
                    <Icon
                      className="h-4 w-4 text-brass-400/80"
                      strokeWidth={1.5}
                    />
                    <div>
                      <p className="font-mono text-[0.5rem] tracking-[0.18em] text-sand-400/55 uppercase">
                        {d.label}
                      </p>
                      <p className="mt-1.5 text-[0.85rem] leading-snug text-sand-100">
                        {d.value}
                      </p>
                      {d.sub && (
                        <p className="mt-1 text-[0.72rem] leading-snug text-sand-300/70">
                          {d.sub}
                        </p>
                      )}
                    </div>
                  </div>
                );
                return (
                  <Reveal key={d.label} delay={i * 0.04}>
                    {d.href ? (
                      <a href={d.href} className="block h-full">
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[3px] border border-sand-100/12 bg-ink-900/70 p-6 backdrop-blur-md sm:p-9">
              <div className="absolute -top-px left-6 h-px w-24 bg-brass-400/60" />

              {sent ? (
                <motion.div
                  initial={reduce ? undefined : { opacity: 0, y: 14 }}
                  animate={reduce ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex min-h-[26rem] flex-col items-start justify-center"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-brass-400/40 bg-brass-400/10 text-brass-300">
                    <Check className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="display mt-6 text-3xl text-sand-50">
                    Enquiry noted.
                  </h3>
                  <p className="mt-3 max-w-sm text-[0.9rem] leading-relaxed text-sand-300/80">
                    Thank you. This is a front-end demonstration form — no data
                    was transmitted. In production, enquiries route to{" "}
                    <a
                      href={`mailto:${site.salesEmail}`}
                      className="text-brass-300 underline decoration-brass-400/40 underline-offset-4"
                    >
                      {site.salesEmail}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-7 inline-flex items-center gap-2 text-sm text-sand-200 transition-colors hover:text-brass-300"
                  >
                    Send another enquiry
                    <ArrowRight className="h-4 w-4" strokeWidth={1.7} />
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-serif text-xl text-sand-50 sm:text-2xl">
                      Request manpower
                    </p>
                    <span className="font-mono text-[0.5rem] tracking-[0.18em] text-sand-400/50 uppercase">
                      Est. reply · 1 day
                    </span>
                  </div>

                  <div className="mt-7 grid gap-5 sm:grid-cols-2">
                    <Field
                      id={`${formId}-name`}
                      label="Full name"
                      placeholder="Your name"
                      autoComplete="name"
                      required
                    />
                    <Field
                      id={`${formId}-company`}
                      label="Company"
                      placeholder="Company name"
                      autoComplete="organization"
                      required
                    />
                    <Field
                      id={`${formId}-email`}
                      label="Email"
                      type="email"
                      placeholder="you@company.com"
                      autoComplete="email"
                      required
                    />
                    <Field
                      id={`${formId}-phone`}
                      label="Phone"
                      type="tel"
                      placeholder="+974 ..."
                      autoComplete="tel"
                    />
                  </div>

                  <fieldset className="mt-6">
                    <legend className="font-mono text-[0.52rem] tracking-[0.18em] text-sand-400/60 uppercase">
                      Requirement
                    </legend>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {needs.map((n) => (
                        <button
                          key={n}
                          type="button"
                          onClick={() => setNeed(n)}
                          aria-pressed={need === n}
                          className={cn(
                            "cursor-pointer rounded-full border px-3.5 py-2 text-[0.75rem] transition-all duration-300",
                            need === n
                              ? "border-brass-400/60 bg-brass-400/15 text-brass-200"
                              : "border-sand-100/12 text-sand-300/75 hover:border-sand-100/30 hover:text-sand-100",
                          )}
                        >
                          {n}
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  <div className="mt-6">
                    <label
                      htmlFor={`${formId}-message`}
                      className="font-mono text-[0.52rem] tracking-[0.18em] text-sand-400/60 uppercase"
                    >
                      Details
                    </label>
                    <textarea
                      id={`${formId}-message`}
                      rows={4}
                      required
                      placeholder="Trades, quantity, site location, mobilisation date…"
                      className="mt-2 w-full resize-none rounded-[2px] border border-sand-100/12 bg-ink-950/60 px-4 py-3 text-sm text-sand-50 transition-colors placeholder:text-sand-500/45 hover:border-sand-100/20 focus:border-brass-400/60 focus:outline-none"
                    />
                  </div>

                  <div className="mt-7 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-[17rem] font-mono text-[0.5rem] leading-relaxed tracking-[0.1em] text-sand-500/55 uppercase">
                      By sending this you agree to be contacted about your
                      enquiry.
                    </p>
                    <button
                      type="submit"
                      className="group inline-flex items-center justify-center gap-3 rounded-full bg-sand-50 py-3 pr-3 pl-6 text-sm font-medium text-ink-950 transition-all duration-500 hover:bg-brass-300"
                    >
                      Send enquiry
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-ink-950 text-sand-50 transition-transform duration-500 group-hover:rotate-45">
                        <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  placeholder,
  type = "text",
  required,
  autoComplete,
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="font-mono text-[0.52rem] tracking-[0.18em] text-sand-400/60 uppercase"
      >
        {label}
        {required && <span className="ml-1 text-brass-400/70">*</span>}
      </label>
      <input
        id={id}
        name={label.toLowerCase()}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="mt-2 w-full rounded-[2px] border border-sand-100/12 bg-ink-950/60 px-4 py-3 text-sm text-sand-50 transition-colors placeholder:text-sand-500/45 hover:border-sand-100/20 focus:border-brass-400/60 focus:outline-none"
      />
    </div>
  );
}
