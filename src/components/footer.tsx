"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/logo";
import { navItems, site } from "@/lib/site";

export function Footer() {
  // Resolved after mount so the server and client markup agree.
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <footer className="relative overflow-hidden border-t border-sand-100/10 bg-ink-950">
      <div className="container-x pt-16 pb-8 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href="#top" aria-label="Back to top">
              <Logo />
            </a>
            <p className="mt-6 max-w-xs text-[0.85rem] leading-relaxed text-sand-300/70">
              A Qatar-based manpower partner for construction and oil &amp; gas
              — supplying documented, trade-tested people since 2021.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {site.iso.map((i) => (
                <span
                  key={i}
                  className="rounded-full border border-sand-100/12 px-3 py-1.5 font-mono text-[0.5rem] tracking-[0.14em] text-sand-300/60 uppercase"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="label text-sand-400/50">Navigate</p>
              <ul className="mt-4 space-y-2.5">
                {navItems.map((n) => (
                  <li key={n.href}>
                    <a
                      href={n.href}
                      className="text-[0.82rem] text-sand-300/75 transition-colors hover:text-sand-50"
                    >
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="label text-sand-400/50">Contact</p>
              <ul className="mt-4 space-y-2.5 text-[0.82rem] text-sand-300/75">
                <li>
                  <a
                    href={site.phoneHref}
                    className="transition-colors hover:text-sand-50"
                  >
                    {site.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={site.phoneHref.replace("30764631", "70767604")}
                    className="transition-colors hover:text-sand-50"
                  >
                    {site.phoneAlt}
                  </a>
                </li>
                <li>
                  <a
                    href={site.emailHref}
                    className="transition-colors hover:text-sand-50"
                  >
                    {site.email}
                  </a>
                </li>
                <li className="pt-1 text-sand-400/60">{site.hours}</li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="label text-sand-400/50">Office</p>
              <address className="mt-4 space-y-1 text-[0.82rem] leading-relaxed text-sand-300/75 not-italic">
                <p>{site.address.line1}</p>
                <p>{site.address.line2}</p>
                <p>{site.address.line3}</p>
              </address>
              <a
                href="#contact"
                className="group mt-5 inline-flex items-center gap-2 text-[0.8rem] text-brass-300/90 transition-colors hover:text-brass-300"
              >
                Request manpower
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.8}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Oversized wordmark */}
        <div className="relative mt-16 select-none sm:mt-20">
          <div
            aria-hidden="true"
            className="pointer-events-none w-full overflow-hidden"
          >
            <p className="display text-[clamp(3.5rem,15.5vw,13rem)] leading-[0.8] text-sand-100/[0.055]">
              PEGASUS
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-sand-100/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.52rem] tracking-[0.14em] text-sand-500/55 uppercase">
            © {year ?? ""} {site.legal} · All rights reserved
          </p>
          <div className="flex items-center gap-5">
            <p className="font-mono text-[0.52rem] tracking-[0.14em] text-sand-500/55 uppercase">
              Doha · Qatar
            </p>
            <a
              href="#top"
              className="group inline-flex items-center gap-1.5 font-mono text-[0.52rem] tracking-[0.14em] text-sand-300/70 uppercase transition-colors hover:text-sand-50"
            >
              Back to top
              <ArrowUpRight
                className="h-3 w-3 transition-transform duration-500 group-hover:-translate-y-0.5"
                strokeWidth={1.8}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
