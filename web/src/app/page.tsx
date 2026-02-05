import { HeroSection } from "@/components/home/hero-section";
import { ServicesSection } from "@/components/home/services-section";
import { TrustBar } from "@/components/home/trust-bar";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { ContactSection } from "@/components/home/contact-section";

import { GemDemo } from "@/components/home/gem-demo";

export default function Home() {
  console.log("Rendering Home Page during build - Vercel Check 2");
  return (
    <div className="flex flex-col gap-0 w-full overflow-hidden">
      <HeroSection />
      <GemDemo />
      <ServicesSection />
      <TrustBar />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
