import { HeroSection } from "@/components/sections/hero";
import { BenefitsSection } from "@/components/sections/benefits";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { WorkProcess } from "@/components/sections/work-process";
import { ImpactStats } from "@/components/sections/impact-stats";
import { Testimonials } from "@/components/sections/testimonials";
import { ServicesSection } from "@/components/sections/services-section";
import { FinalCta } from "@/components/sections/cta-final";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <FeaturedProjects />
      <WorkProcess />
      <ImpactStats />
      <Testimonials />
      <ServicesSection />
      <FinalCta />
    </>
  );
}
