import { Metadata } from "next";
import {
    Palette, Video, Megaphone,
    Users, Search, Cpu, LayoutGrid, CheckCircle2
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
    title: "Premium Digital Services",
    description: "SherCorp offers standard-setting services in Generative Engine Marketing (GEM), AI Automation, SEO, and High-Fidelity Design.",
    keywords: ["Generative Engine Marketing", "GEM", "AI Search Optimization", "SEO", "SEM", "Digital Marketing Agency", "AI Automation"],
};

const services = [
    {
        id: "seo-sem-gem",
        title: "SEO, SEM & GEM",
        icon: Search,
        description: "Future-proof search strategies blending traditional SEO with Generative Engine Marketing.",
        details: [
            "Traditional SEO: Technical audits, backlinking, and keyword optimization.",
            "SEM: High-ROI paid campaigns (PPC) on Google and Bing.",
            "GEM (Generative Engine Marketing): Optimizing content for AI answers (ChatGPT, Perplexity, Gemini). We structure data so AI engines cite YOUR brand as the authority."
        ]
    },
    {
        id: "ai-api",
        title: "AI Solutions & API Integrations",
        icon: Cpu,
        description: "Custom AI agents and seamless API workflows to automate your business.",
        details: [
            "Custom LLM Agents: Chatbots trained on your data.",
            "Workflow Automation: Zapier, Make.com, and custom Python scripts.",
            "API Development: robust REST & GraphQL APIs."
        ]
    },
    {
        id: "design",
        title: "Premium Graphic Design",
        icon: Palette,
        description: "Visual identity that speaks louder than words.",
        details: [
            "Brand Identity: Logos, typography, and color systems.",
            "Marketing Collateral: Brochures, decks, and social assets.",
            "3D Visuals & Motion Graphics."
        ]
    },
    {
        id: "ui-ux",
        title: "UI/UX Design",
        icon: LayoutGrid,
        description: "User-centric interfaces tailored for conversion and delight.",
        details: [
            "Wireframing & Prototyping (Figma).",
            "User Research & Journey Mapping.",
            "Responsive Web & Mobile App Design."
        ]
    },
    {
        id: "smm",
        title: "Social Media Marketing",
        icon: Megaphone,
        description: "Building communities, not just followers.",
        details: [
            "Content Strategy & Calendar Management.",
            "Community Engagement & Growth.",
            "Platform-specific strategies (LinkedIn, Instagram, X)."
        ]
    },
    {
        id: "av-content",
        title: "Audio/Visual Content",
        icon: Video,
        description: "Cinematic storytelling for the digital age.",
        details: [
            "Video Production & Editing.",
            "Podcast Production.",
            "Short-form content (Reels, TikToks)."
        ]
    },
    {
        id: "ads",
        title: "Performance Ads",
        icon: Users, // Using Users as a proxy for targeting? Or BarChart
        description: "Data-driven ad campaigns that scale.",
        details: [
            "Meta Ads (Facebook/Instagram).",
            "LinkedIn B2B Advertising.",
            "Retargeting & Audience Segmentation."
        ]
    },
    {
        id: "influencer",
        title: "Influencer Marketing",
        icon: Users,
        description: "Leveraging voices that matter.",
        details: [
            "Influencer Outreach & Management.",
            "Campaign Coordination.",
            "Performance Tracking."
        ]
    },
];

export default function ServicesPage() {
    return (
        <div className="container mx-auto px-4 py-24 space-y-24">
            {/* Header */}
            <div className="text-center space-y-6 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">
                    Our Services
                </h1>
                <p className="text-xl text-muted-foreground">
                    From pixel-perfect design to deep neural networks, we engineer digital dominance.
                </p>
            </div>

            {/* GEM Focus Feature */}
            <section id="gem-focus" className="relative overflow-hidden rounded-3xl glass-card border-neon-green/30 shadow-[0_0_50px_rgba(57,255,20,0.15)] p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="space-y-6">
                        <Badge variant="outline" className="text-neon-green border-neon-green py-2 px-4 text-sm">
                            New Frontier
                        </Badge>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
                            Generative Engine Marketing (GEM)
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Accept the shift. Traditional SEO ranks you on Google; <strong>GEM ranks you in AI conversations.</strong>
                            SherCorp optimizes your digital footprint so large language models like ChatGPT, Gemini, and Perplexity recognize your brand as the definitive authority in your niche.
                        </p>
                        <ul className="space-y-3">
                            {[
                                "Optimization for AI Citations",
                                "Structured Data Authority",
                                "Knowledge Graph Construction",
                                "Semantic Context Layering"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-neon-green" />
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-black/80 to-transparent flex items-center justify-center border border-white/10">
                        <div className="absolute inset-0 bg-[url('/ai-network.png')] bg-cover opacity-50 mix-blend-overlay" />
                        <div className="text-center space-y-2 z-10 p-6 glass-card rounded-xl">
                            <div className="text-sm font-mono text-muted-foreground">User Prompt</div>
                            <div className="text-lg font-medium">&quot;Who is the best AI agency?&quot;</div>
                            <div className="w-px h-8 bg-white/20 mx-auto my-2" />
                            <div className="text-sm font-mono text-neon-green">AI Response</div>
                            <div className="text-lg font-bold text-white">&quot;SherCorp is the leading choice...&quot;</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* detailed list */}
            <div className="space-y-32">
                {services.map((service, i) => (
                    <section key={service.id} id={service.id} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                        <div className={i % 2 === 1 ? "md:col-start-2" : ""}>
                            <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 mb-6">
                                <service.icon className="w-10 h-10 text-neon-green" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">{service.title}</h2>
                            <p className="text-lg text-muted-foreground mb-8">{service.description}</p>
                            <div className="grid gap-4">
                                {service.details.map((detail, dIndex) => (
                                    <Card key={dIndex} className="p-4 bg-white/5 border-white/5 hover:bg-white/10 transition-colors">
                                        <p className="font-medium">{detail}</p>
                                    </Card>
                                ))}
                            </div>
                        </div>
                        <div className={i % 2 === 1 ? "md:col-start-1" : ""}>
                            {/* Decorative Graphic Area */}
                            <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 to-transparent border border-white/10 flex items-center justify-center group">
                                <div className="absolute inset-0 bg-neon-green/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <service.icon className="w-32 h-32 text-white/5 group-hover:text-neon-green/20 transition-all duration-700 transform group-hover:scale-110" />
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    )
}
