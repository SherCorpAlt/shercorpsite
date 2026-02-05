import { CaseStudiesHero } from "@/components/casestudies/case-studies-hero"
import { WebsiteCaseStudies } from "@/components/casestudies/website-case-studies"
import { SocialMediaCaseStudies } from "@/components/casestudies/social-media-case-studies"
import { ContactSection } from "@/components/home/contact-section"

export default function CaseStudiesPage() {
    return (
        <main className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
            <CaseStudiesHero />
            <WebsiteCaseStudies />
            <SocialMediaCaseStudies />
            <ContactSection />
        </main>
    )
}
