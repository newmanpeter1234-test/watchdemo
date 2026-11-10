"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
} from "motion/react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

/**
 * A short, typographic opening curtain. It sets the tone in under a second
 * and then lifts away — no spinner, no layout shift, no scroll lock.
 */
export function IntroCurtain() {
  const [done, setDone] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      setDone(true);
      return;
    }
    const t = setTimeout(() => setDone(true), 1500);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.85, 0, 0.15, 1] }}
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-8 bg-brass-400/50" />
              <span className="font-mono text-[0.55rem] tracking-[0.3em] text-sand-300/70 uppercase">
                Doha · Qatar
              </span>
              <span className="h-px w-8 bg-brass-400/50" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="display mt-4 text-[clamp(2.5rem,9vw,5rem)] tracking-[0.18em] text-sand-50"
            >
              PEGASUS
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 h-px w-40 origin-left bg-gradient-to-r from-transparent via-brass-400/70 to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
