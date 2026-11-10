"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { navItems, site } from "@/lib/site";
import { cn } from "@/lib/utils";

type LenisLike = { stop: () => void; start: () => void };

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });
  const lastScroll = useRef(0);
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
    const delta = latest - lastScroll.current;
    if (Math.abs(delta) > 8) {
      setHidden(delta > 0 && latest > 420 && !open);
      lastScroll.current = latest;
    }
  });

  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: LenisLike }).__lenis;
    if (!lenis) return;
    if (open) lenis.stop();
    else lenis.start();
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          hidden ? "-translate-y-full" : "translate-y-0",
        )}
      >
        <div
          className={cn(
            "relative border-b transition-all duration-700",
            scrolled && !open
              ? "border-sand-100/10 bg-ink-950/70 backdrop-blur-xl"
              : "border-transparent bg-transparent",
          )}
        >
          <div className="container-x">
            <div className="flex h-[76px] items-center justify-between gap-6">
              <a
                href="#top"
                aria-label="Pegasus Trading and Contracting — back to top"
                className="relative z-10 shrink-0"
              >
                <Logo compact />
              </a>

              <nav
                aria-label="Primary"
                className="hidden items-center gap-7 lg:flex"
              >
                {navItems.slice(0, 5).map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="group relative flex items-baseline gap-1.5 py-2 text-[0.8rem] font-medium tracking-wide text-sand-200/80 transition-colors hover:text-sand-50"
                  >
                    <span className="font-mono text-[0.5rem] text-brass-400/60 transition-colors group-hover:text-brass-400">
                      {item.index}
                    </span>
                    <span className="relative">
                      {item.label}
                      <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-brass-400 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:origin-left group-hover:scale-x-100" />
                    </span>
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-3">
                <a
                  href={site.phoneHref}
                  className="hidden font-mono text-[0.7rem] tracking-[0.12em] text-sand-200/70 transition-colors hover:text-sand-50 xl:block"
                >
                  {site.phone}
                </a>
                <a
                  href="#contact"
                  className="group hidden items-center gap-2 rounded-full border border-brass-400/40 bg-brass-400/10 py-2.5 pr-3 pl-5 text-[0.75rem] font-medium tracking-wide text-brass-300 backdrop-blur-sm transition-all duration-500 hover:border-brass-400/70 hover:bg-brass-400 hover:text-ink-950 sm:inline-flex"
                >
                  Request manpower
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-brass-400/15 transition-colors duration-500 group-hover:bg-ink-950/10">
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.8} />
                  </span>
                </a>
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  aria-label="Open menu"
                  aria-expanded={open}
                  className="grid h-10 w-10 place-items-center rounded-full border border-sand-100/15 text-sand-100 transition-colors hover:border-sand-100/40 hover:bg-sand-100/5 lg:hidden"
                >
                  <Menu className="h-4.5 w-4.5" strokeWidth={1.6} />
                </button>
              </div>
            </div>
          </div>

          {/* Scroll progress hairline */}
          <motion.div
            aria-hidden="true"
            style={{ scaleX: progress }}
            className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-brass-600 via-brass-400 to-brass-300"
          />
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-ink-950/97 backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="container-x flex h-[76px] items-center justify-between">
              <Logo compact />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center rounded-full border border-sand-100/15 text-sand-100 transition-colors hover:bg-sand-100/5"
              >
                <X className="h-4.5 w-4.5" strokeWidth={1.6} />
              </button>
            </div>

            <nav
              aria-label="Mobile"
              className="container-x flex flex-1 flex-col justify-center gap-1 py-10"
            >
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.08 + i * 0.05,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group flex items-baseline justify-between border-b border-sand-100/8 py-4"
                >
                  <span className="display text-4xl text-sand-50 transition-colors group-hover:text-brass-300">
                    {item.label}
                  </span>
                  <span className="font-mono text-[0.6rem] tracking-[0.2em] text-brass-400/60">
                    {item.index}
                  </span>
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="container-x pb-10"
            >
              <div className="mb-5 h-px w-full bg-sand-100/10" />
              <div className="flex flex-wrap items-end justify-between gap-4 text-sm text-sand-300">
                <div>
                  <p className="label mb-2 text-brass-400/70">Direct line</p>
                  <a href={site.phoneHref} className="text-lg text-sand-50">
                    {site.phone}
                  </a>
                </div>
                <a
                  href={site.emailHref}
                  className="link-underline text-sand-200"
                >
                  {site.email}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
