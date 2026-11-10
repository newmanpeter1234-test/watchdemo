import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[80svh] items-center bg-ink-950">
      <div className="container-x">
        <p className="font-mono text-[0.6rem] tracking-[0.24em] text-brass-400 uppercase">
          404
        </p>
        <h1 className="display mt-5 text-[clamp(2.6rem,7vw,5rem)] text-sand-50">
          This page has
          <span className="block italic text-brass-300/90">left the site.</span>
        </h1>
        <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-sand-300/80">
          The page you were looking for isn&apos;t here. Head back to the
          homepage to explore our capabilities and workforce.
        </p>
        <Link
          href="/"
          className="mt-9 inline-flex items-center gap-3 rounded-full bg-sand-50 px-6 py-3 text-sm font-medium text-ink-950 transition-colors hover:bg-brass-300"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
