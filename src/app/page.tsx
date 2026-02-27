import { HeroSection } from "@/components/sections/hero";
import { PhilosophySection } from "@/components/sections/philosophy";
import { ServicesHighlight } from "@/components/sections/services-highlight";
import { ProcessSection } from "@/components/sections/process";
import { PortfolioTeaser } from "@/components/sections/portfolio-teaser";
import { FAQSection } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/cta-final";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <ServicesHighlight />
      <ProcessSection />
      <PortfolioTeaser />
      <FAQSection />
      <FinalCta />
    </>
  );
}
