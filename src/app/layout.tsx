import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import { IntroCurtain } from "@/components/intro-curtain";
import { CursorGlow } from "@/components/cursor-glow";
import { site } from "@/lib/site";
import { MotionProvider } from "@/components/motion-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://pegasus-qatar.com"),
  title: {
    default: `${site.name} W.L.L. — Manpower Supply in Qatar`,
    template: `%s · ${site.shortName} Qatar`,
  },
  description:
    "Pegasus Trading and Contracting W.L.L. supplies skilled, documented manpower to Qatar's construction and oil & gas sectors. ISO 9001, 45001 and 14001 aligned. Established in Doha, 2021.",
  keywords: [
    "manpower supply Qatar",
    "skilled workers Doha",
    "oil and gas manpower",
    "construction manpower Qatar",
    "HSE manpower",
    "Pegasus Trading and Contracting",
  ],
  openGraph: {
    title: `${site.name} W.L.L. — Manpower supply for construction & oil and gas`,
    description:
      "Trade-tested people for Qatar's construction and oil & gas programmes. Sourced against your specification, documented, and mobilised in step with your schedule.",
    type: "website",
    locale: "en_QA",
    siteName: site.name,
    images: [
      {
        url: "/images/hero-site.jpg",
        width: 1915,
        height: 821,
        alt: "Pegasus site team at an oil and gas construction site in Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} W.L.L. — Manpower supply, Qatar`,
    description:
      "Trade-tested manpower for Qatar's construction and oil & gas programmes. Established 2021, Doha.",
    images: ["/images/hero-site.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0b0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="antialiased">
      <body className="bg-ink-950 text-sand-100 selection:bg-brass-400 selection:text-ink-950">
        <MotionProvider>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded-full focus:bg-brass-400 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink-950"
        >
          Skip to content
        </a>
        <IntroCurtain />
        <SmoothScroll />
        <CursorGlow />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
