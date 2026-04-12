import { HeroSection } from "@/components/sections/hero";
import { BenefitsSection } from "@/components/sections/benefits";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { WorkProcess } from "@/components/sections/work-process";
import { ImpactStats } from "@/components/sections/impact-stats";
import { ServicesSection } from "@/components/sections/services-section";
import { FAQSection } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/cta-final";

export default function Home() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://sorinlabs.dev",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HeroSection />
      <BenefitsSection />
      <FeaturedProjects />
      <WorkProcess />
      <ImpactStats />
      <ServicesSection />
      <FAQSection />
      <FinalCta />
    </>
  );
}
