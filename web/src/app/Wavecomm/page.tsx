import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    ArrowLeft,
    Wifi,
    Zap, // For Peak Performance
    Globe, // For Scalability
    Search, // For SEO
    Cpu, // For Node.js
    Smartphone, // For Mobile
    TrendingUp,
    Users
} from "lucide-react";

export const metadata: Metadata = {
    title: "Wavecomm - Case Study | SherCorp",
    description: "From Connectivity to Digital Experience: Future-Proofing Wavecomm’s FTTH Infrastructure.",
};

export default function WavecommPage() {
    return (
        <div className="min-h-screen bg-black text-foreground">

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/portfolio/wavecomm/Header Design.png"
                        alt="Wavecomm Digital Experience"
                        fill
                        className="object-cover opacity-40"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black" />
                </div>

                <div className="container relative z-10 px-4 text-center space-y-8 max-w-5xl mx-auto">
                    <Button variant="ghost" className="mb-4 text-zinc-400 hover:text-white" asChild>
                        <Link href="/casestudies" className="flex items-center gap-2">
                            <ArrowLeft size={20} /> Back to Case Studies
                        </Link>
                    </Button>

                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium">
                            <Wifi className="w-4 h-4" />
                            <span>Digital Transformation</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                            From Connectivity to Digital Experience:<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">
                                Future-Proofing Wavecomm’s Infrastructure
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl font-light text-zinc-300 max-w-3xl mx-auto leading-relaxed">
                            How SherCorp engineered a high-performance Node.js ecosystem, bridging the gap between fiber-speed connectivity and seamless user interaction through scalable architecture and unified branding.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 pt-8 max-w-4xl mx-auto">
                        <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                            <p className="text-4xl font-bold text-white mb-2">98/100</p>
                            <p className="text-sm text-zinc-400">Google Lighthouse Score</p>
                        </div>
                        <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                            <p className="text-4xl font-bold text-white mb-2">60%</p>
                            <p className="text-sm text-zinc-400">Increase in Session Duration</p>
                        </div>
                        <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                            <p className="text-4xl font-bold text-white mb-2">1000+</p>
                            <p className="text-sm text-zinc-400">Leads in 30 Days</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Overview */}
            <section className="py-24 bg-zinc-950">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Project Overview</h2>
                                <div className="h-1 w-20 bg-cyan-500 mb-8" />
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-3">
                                        <span className="p-2 rounded-lg bg-red-500/10 text-red-500"><TrendingUp size={20} /></span>
                                        The Challenge
                                    </h3>
                                    <p className="text-zinc-400 leading-relaxed pl-12">
                                        Wavecomm required more than a digital brochure; they needed a robust, high-performance platform capable of evolving from a service showcase into a fully integrated customer portal.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-3">
                                        <span className="p-2 rounded-lg bg-cyan-500/10 text-cyan-500"><Cpu size={20} /></span>
                                        The Solution
                                    </h3>
                                    <p className="text-zinc-400 leading-relaxed pl-12">
                                        SherCorp deployed a custom-built Node.js environment featuring an interactive UI/UX layer, designed specifically to handle high-concurrency traffic and future API integrations.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-3">
                                        <span className="p-2 rounded-lg bg-violet-500/10 text-violet-500"><Users size={20} /></span>
                                        The Impact
                                    </h3>
                                    <p className="text-zinc-400 leading-relaxed pl-12">
                                        A cohesive digital identity that resonates with enterprise telecom standards, significantly reducing bounce rates while establishing a foundation for mobile app synchronization.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-900 group">
                            <Image
                                src="/portfolio/wavecomm/Interactive Package Design.png"
                                alt="Wavecomm Packages UI"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <p className="text-white font-medium">Modular Package Interfaces</p>
                                <p className="text-zinc-400 text-sm">Mimicking modern mobile navigation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Excellence - Bento Grid */}
            <section className="py-24 bg-black">
                <div className="container px-4 mx-auto">
                    <div className="mb-16 text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 text-xs font-semibold tracking-wider uppercase mb-4">
                            Technical Excellence
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Power of a Node.js Backbone</h2>
                        <p className="text-lg text-zinc-400">
                            We bypassed off-the-shelf CMS limitations in favor of a custom Node.js architecture.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                        {/* Peak Performance */}
                        <div className="row-span-1 p-8 rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-cyan-500/50 transition-all group flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
                                    <Zap />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Peak Performance</h3>
                                <p className="text-zinc-400 text-sm">Optimized server-side rendering for sub-second load times, critical for high SEO rankings in the competitive ISP landscape.</p>
                            </div>
                        </div>

                        {/* Infinite Scalability */}
                        <div className="row-span-1 lg:col-span-2 p-8 rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-violet-500/50 transition-all group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                                <Smartphone size={120} />
                            </div>
                            <div className="relative z-10 max-w-md">
                                <div className="w-12 h-12 rounded-lg bg-violet-500/20 text-violet-400 flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
                                    <Globe />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Infinite Scalability</h3>
                                <p className="text-zinc-400">The backend is pre-configured to integrate future mobile application modules, such as real-time package management and automated billing.</p>
                            </div>
                        </div>

                        {/* Advanced SEO Integration */}
                        <div className="row-span-1 lg:col-span-2 relative rounded-2xl border border-white/10 overflow-hidden group">
                            <Image
                                src="/portfolio/wavecomm/SEO Enhanced Blogs Section.png"
                                alt="SEO Enhanced Blogs"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors p-8 flex flex-col justify-end">
                                <div className="w-12 h-12 rounded-lg bg-green-500/20 text-green-400 flex items-center justify-center mb-4">
                                    <Search />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Advanced SEO Integration</h3>
                                <p className="text-zinc-300">A custom-engineered &quot;News & Updates&quot; engine, designed for maximum crawlability and organic reach.</p>
                            </div>
                        </div>

                        {/* Tech Stack Callout */}
                        <div className="row-span-1 p-8 rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-white/10 flex flex-col justify-center items-center text-center">
                            <h3 className="text-xl font-mono text-cyan-400 mb-2">&lt;TechStack /&gt;</h3>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {["Node.js", "Next.js", "Tailwind", "Framer Motion"].map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-zinc-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Design & UX Strategy */}
            <section className="py-24 bg-zinc-950 overflow-hidden">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8 order-2 lg:order-1">
                            <div>
                                <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 text-xs font-semibold tracking-wider uppercase mb-2">
                                    Design Strategy
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Interactive Connectivity</h2>
                                <p className="text-lg text-zinc-400 text-justify">
                                    To mirror the speed of fiber optics, we implemented a fluid, tech-forward interface elements that &quot;glide&quot; rather than &quot;pop.&quot;
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="group p-6 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-all">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Dynamic Animated Header</h3>
                                    <p className="text-zinc-400">A custom-coded, interactive header that provides immediate visual feedback, reinforcing the &quot;always-on&quot; nature of Wavecomm.</p>
                                </div>
                                <div className="group p-6 rounded-xl bg-white/5 border border-white/5 hover:border-violet-500/30 transition-all">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">Horizontal Feature Navigation</h3>
                                    <p className="text-zinc-400">Breaking the traditional vertical scroll, we utilized horizontal layouts to showcase package tiers, mimicking the modular feel of modern mobile interfaces.</p>
                                </div>
                                <div className="group p-6 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Frictionless Flow</h3>
                                    <p className="text-zinc-400">Every UX decision was driven by the goal of converting curious visitors into registered leads with minimal cognitive load.</p>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-900">
                            <Image
                                src="/portfolio/wavecomm/Horizontal Scroller.png"
                                alt="Horizontal Feature Navigation"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Unified Social Strategy */}
            <section className="py-24 bg-black">
                <div className="container px-4 mx-auto space-y-16">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Unified Social Strategy</h2>
                        <p className="text-lg text-zinc-400">
                            SherCorp doesn&apos;t just manage profiles; we engineer growth engines. Our strategy for Wavecomm focuses on high-fidelity visual storytelling.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="p-8 rounded-2xl bg-zinc-900 border border-white/10">
                                <h3 className="text-2xl font-bold text-white mb-4">The Bhalwal Breakthrough</h3>
                                <p className="text-zinc-400 mb-6">
                                    We executed a hyper-localized lead generation campaign for the Bhalwal region, specifically targeting the &quot;Double Speed&quot; promotion for existing 10MB users.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center p-4 bg-black/50 rounded-lg">
                                        <span className="text-zinc-300">Qualified Leads (30 Days)</span>
                                        <span className="text-cyan-400 font-bold text-xl">1,000+</span>
                                    </div>
                                    <div className="flex justify-between items-center p-4 bg-black/50 rounded-lg">
                                        <span className="text-zinc-300">Cost Per Lead</span>
                                        <span className="text-green-400 font-bold text-xl">PKR 40 ($0.15)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 rounded-2xl bg-zinc-900 border border-white/10">
                                <h3 className="text-2xl font-bold text-white mb-4">Creative Consistency</h3>
                                <p className="text-zinc-400">
                                    By utilizing bilingual (English/Urdu) creatives and custom-designed &quot;Fiber-Light&quot; assets, we maintained premium brand positioning while ensuring maximum local accessibility.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                >
                                    <source src="/portfolio/wavecomm/Social Media Ads 2.mp4" type="video/mp4" />
                                </video>
                            </div>
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-xl w-3/4 ml-auto -mt-20 z-10">
                                <Image
                                    src="/portfolio/wavecomm/Social Media Ads.png"
                                    alt="Social Media Creative"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results & Impact */}
            <section className="py-24 bg-zinc-950 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.1),transparent_50%)]" />

                <div className="container relative z-10 px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Impact & KPI Validation</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
                        {[
                            { label: "Site Performance", value: "98/100", desc: "Google Lighthouse Speed Score" },
                            { label: "Lead Generation", value: "1,000+", desc: "Leads in 30 Days (Bhalwal)" },
                            { label: "Cost Per Lead", value: "PKR 40", desc: "$0.14 - Industry Record" },
                            { label: "Scalability", value: "100%", desc: "Ready for Mobile App API" }
                        ].map((stat, i) => (
                            <div key={i} className="p-6 rounded-xl bg-zinc-900/80 backdrop-blur border border-zinc-800 text-center hover:border-cyan-500/50 transition-colors">
                                <p className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</p>
                                <p className="text-cyan-400 font-medium mb-1">{stat.label}</p>
                                <p className="text-xs text-zinc-500">{stat.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm max-w-4xl mx-auto text-center">
                        <h3 className="text-2xl font-bold text-white mb-6">Market Position</h3>
                        <p className="text-xl text-zinc-300 leading-relaxed max-w-2xl mx-auto">
                            &quot;SherCorp established Wavecomm as a premium tier provider in the region. The new digital ecosystem not only reduced bounce rates but created a frictionless pathway for future mobile app synchronization.&quot;
                        </p>
                    </div>
                </div>
            </section>

            {/* Closing */}
            <section className="py-24 bg-gradient-to-b from-zinc-900 to-black text-center">
                <div className="container px-4 mx-auto max-w-3xl space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">Looking for Enterprise Scalability?</h2>
                    <p className="text-xl text-zinc-400 leading-relaxed">
                        Whether you are an ISP, a FinTech platform, or a global e-commerce brand, SherCorp builds digital infrastructure that scales with your ambition.
                    </p>

                    <div className="pt-8">
                        <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-8 h-14 text-lg" asChild>
                            <Link href="/contact">Book a Strategy Audit</Link>
                        </Button>
                    </div>
                </div>
            </section>

        </div>
    );
}
