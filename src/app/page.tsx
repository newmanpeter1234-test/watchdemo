import { Hero } from "@/components/hero";
import { SectorsMarquee } from "@/components/marquee";
import { StatsBand } from "@/components/stats-band";
import { About } from "@/components/about";
import { StatementScroll } from "@/components/statement-scroll";
import { Capabilities } from "@/components/capabilities";
import { OnSiteGallery } from "@/components/on-site-gallery";
import { Workforce } from "@/components/workforce";
import { WhyUs } from "@/components/why-us";
import { Vision } from "@/components/vision";
import { CeoMessage } from "@/components/ceo";
import { Clients } from "@/components/clients";
import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";
import { site } from "@/lib/site";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.legal,
  alternateName: "Pegasus Qatar",
  description:
    "Manpower supply for construction and oil & gas sectors in Qatar — skilled and semi-skilled trades, HSE, engineering, quality and supervision.",
  foundingDate: "2021",
  telephone: site.phone,
  email: site.email,
  areaServed: "Qatar",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.line1}, ${site.address.line2}`,
    addressLocality: "Doha",
    addressCountry: "QA",
  },
  knowsAbout: [
    "Manpower supply",
    "Construction",
    "Oil and gas",
    "Health safety and environment",
    "QA/QC inspection",
  ],
  hasCredential: site.iso,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <SectorsMarquee />
      <StatsBand />
      <About />
      <StatementScroll />
      <Capabilities />
      <Workforce />
      <OnSiteGallery />
      <WhyUs />
      <Vision />
      <CeoMessage />
      <Clients />
      <Certifications />
      <Contact />
    </>
  );
}
