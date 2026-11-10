import { cn } from "@/lib/utils";

/**
 * Mark: three ascending measures above a baseline — workforce, rising.
 * Geometric and legible down to 24px, with brass used for the ascent only.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 34 34"
      fill="none"
      aria-hidden="true"
      className={cn("h-8 w-8", className)}
    >
      <rect x="7" y="20" width="4" height="7" rx="1" fill="currentColor" opacity="0.4" />
      <rect x="14.5" y="14" width="4" height="13" rx="1" fill="var(--color-brass-500)" opacity="0.75" />
      <rect x="22" y="6" width="4" height="21" rx="1" fill="var(--color-brass-400)" />
      <rect x="5" y="28.5" width="24" height="1.5" rx="0.75" fill="currentColor" opacity="0.28" />
      <circle cx="24" cy="3.2" r="1.4" fill="var(--color-brass-300)" />
    </svg>
  );
}

export function Logo({
  className,
  compact = false,
  tone = "light",
}: {
  className?: string;
  compact?: boolean;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={cn(
        "group inline-flex items-center gap-3",
        tone === "light" ? "text-sand-50" : "text-ink-900",
        className,
      )}
    >
      <LogoMark className="h-7 w-7 shrink-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 sm:h-8 sm:w-8" />
      <span className="flex flex-col leading-none">
        <span className="text-[0.95rem] font-semibold tracking-[0.26em] uppercase sm:text-base">
          Pegasus
        </span>
        {!compact && (
          <span
            className={cn(
              "mt-1.5 font-mono text-[0.5rem] tracking-[0.26em] uppercase",
              tone === "light" ? "text-sand-300/60" : "text-ink-600/70",
            )}
          >
            Trading &amp; Contracting
          </span>
        )}
      </span>
    </span>
  );
}
