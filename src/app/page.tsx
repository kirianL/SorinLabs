import dynamic from "next/dynamic";
import { HeroSection } from "@/components/sections/hero";
import { LazySection } from "@/components/ui/lazy-section";

const BenefitsSection = dynamic(() => import("@/components/sections/benefits").then(mod => ({ default: mod.BenefitsSection })));
const FeaturedProjects = dynamic(() => import("@/components/sections/featured-projects").then(mod => ({ default: mod.FeaturedProjects })));
const WorkProcess = dynamic(() => import("@/components/sections/work-process").then(mod => ({ default: mod.WorkProcess })));
const ImpactStats = dynamic(() => import("@/components/sections/impact-stats").then(mod => ({ default: mod.ImpactStats })));
const ServicesSection = dynamic(() => import("@/components/sections/services-section").then(mod => ({ default: mod.ServicesSection })));
const FAQSection = dynamic(() => import("@/components/sections/faq").then(mod => ({ default: mod.FAQSection })));
const FinalCta = dynamic(() => import("@/components/sections/cta-final").then(mod => ({ default: mod.FinalCta })));

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
      <LazySection>
        <BenefitsSection />
      </LazySection>
      <LazySection>
        <FeaturedProjects />
      </LazySection>
      <LazySection>
        <WorkProcess />
      </LazySection>
      <LazySection>
        <ImpactStats />
      </LazySection>
      <LazySection>
        <ServicesSection />
      </LazySection>
      <LazySection>
        <FAQSection />
      </LazySection>
      <LazySection>
        <FinalCta />
      </LazySection>
    </>
  );
}
