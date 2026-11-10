import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Shared section shell: anchor target, accessible label, and consistent
 * scroll offset for the fixed header.
 */
export function SectionShell({
  id,
  children,
  className,
  label,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <section
      id={id}
      aria-label={label}
      className={cn("relative scroll-mt-24", className)}
    >
      {children}
    </section>
  );
}
