import { HeroSection } from "@/components/home/hero-section";
import { ServicesSection } from "@/components/home/services-section";
import { SocialMediaPostsSection } from "@/components/home/social-media-posts-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { TrustBar } from "@/components/home/trust-bar";
import { ContactSection } from "@/components/home/contact-section";
import { SherCorpBotIntro } from "@/components/home/shercorpbot-intro";

export default function Home() {
  console.log("Rendering Home Page during build - Vercel Check 2");
  return (
    <div className="flex flex-col gap-0 w-full">
      <HeroSection />
      <SherCorpBotIntro />
      <TrustBar />
      <TestimonialsSection />
      <ServicesSection />
      <SocialMediaPostsSection />
      <ContactSection />
    </div>
  );
}

