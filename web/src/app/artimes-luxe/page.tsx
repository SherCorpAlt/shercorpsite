import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    ArrowLeft,
    Instagram,
    TrendingUp,
    Users,
    Palette,
    Sparkles
} from "lucide-react";

export const metadata: Metadata = {
    title: "Artimes Luxe - Social Media Strategy | SherCorp",
    description: "How SherCorp grew Artimes Luxe by 10k followers in 6 months through curated visual storytelling.",
};

export default function ArtimesLuxePage() {
    return (
        <div className="min-h-screen bg-black text-foreground">

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/portfolio/artimes-luxe/main-post-visual-2.jpeg"
                        alt="Artimes Luxe Social Media"
                        fill
                        className="object-cover opacity-40"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
                </div>

                <div className="container relative z-10 px-4 text-center space-y-8 max-w-5xl mx-auto">
                    <Button variant="ghost" className="mb-4 text-zinc-400 hover:text-white" asChild>
                        <Link href="/casestudies" className="flex items-center gap-2">
                            <ArrowLeft size={20} /> Back to Case Studies
                        </Link>
                    </Button>

                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-sm font-medium">
                            <Instagram className="w-4 h-4" />
                            <span>Luxury Fashion Social Strategy</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
                            Artimes Luxe:<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-500">
                                Curating Elite Aesthetics.
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl font-light text-zinc-300 max-w-3xl mx-auto leading-relaxed">
                            How SherCorp transformed a high-end fashion events coordinator&apos;s digital presence into a visual magnet for the global elite.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 pt-8 max-w-4xl mx-auto">
                        <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                            <p className="text-4xl font-bold text-white mb-2">10k+</p>
                            <p className="text-sm text-zinc-400">New Followers in 6 Months</p>
                        </div>
                        <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                            <p className="text-4xl font-bold text-white mb-2">300%</p>
                            <p className="text-sm text-zinc-400">Increase in Engagement</p>
                        </div>
                        <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                            <p className="text-4xl font-bold text-white mb-2">Elite</p>
                            <p className="text-sm text-zinc-400">Market Resonance</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Challenge */}
            <section className="py-24 bg-zinc-950">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Objective: Fashioning a Global Identity</h2>
                                <div className="h-1 w-20 bg-pink-500 mb-8" />
                            </div>

                            <p className="text-lg text-zinc-300 leading-relaxed">
                                Artimes Luxe, a premier fashion events coordinator based in Dubai, needed a social media presence that matched the opulence of their real-world events.
                            </p>
                            <p className="text-lg text-zinc-300 leading-relaxed">
                                To resonate with elite fashion markets worldwide, SherCorp was tasked with managing their Instagram content strategy, focusing on three core areas:
                            </p>

                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                                        <Palette className="w-6 h-6 text-amber-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Visual Magnetism</h3>
                                        <p className="text-zinc-400">Developing a curated visual appeal that immediately signals luxury and exclusivity to high-net-worth audiences.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center flex-shrink-0">
                                        <Users className="w-6 h-6 text-pink-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Rapid Audience Growth</h3>
                                        <p className="text-zinc-400">Scaling the follower base without compromising the &quot;exclusive&quot; feel of the brand.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                                        <TrendingUp className="w-6 h-6 text-blue-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Market Credibility</h3>
                                        <p className="text-zinc-400">Positioning the client as the go-to coordinator for top-tier fashion events in the UAE and beyond.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-900">
                            <Image
                                src="/portfolio/artimes-luxe/main-post-visual-2.jpeg"
                                alt="Artimes Luxe Featured Content"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual Portfolio Grid */}
            <section className="py-24 bg-black">
                <div className="container px-4 mx-auto">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Visual Strategy</h2>
                        <p className="text-lg text-zinc-400">
                            Every post was engineered to be a standalone piece of art, contributing to a cohesive brand tapestry.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        <div className="space-y-8">
                            <div className="group relative overflow-hidden rounded-2xl border border-white/10 aspect-square">
                                <Image
                                    src="/portfolio/artimes-luxe/art-of-branding.jpg"
                                    alt="Art of Branding"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
                                    <h3 className="text-2xl font-bold text-white">Art of Branding</h3>
                                    <p className="text-zinc-300">Identity systems for elite markets.</p>
                                </div>
                            </div>
                            <div className="group relative overflow-hidden rounded-2xl border border-white/10 aspect-[4/5]">
                                <Image
                                    src="/portfolio/artimes-luxe/profile-design-mockup.jpg"
                                    alt="Profile Design Mockup"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
                                    <h3 className="text-2xl font-bold text-white">Profile Architecture</h3>
                                    <p className="text-zinc-300">Cohesive grid design for maximum impact.</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8 pt-12 md:pt-24">
                            <div className="group relative overflow-hidden rounded-2xl border border-white/10 aspect-[4/5]">
                                <Image
                                    src="/portfolio/artimes-luxe/main-post-visual-2.jpeg"
                                    alt="Main Post Visual"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
                                    <h3 className="text-2xl font-bold text-white">Curated Content</h3>
                                    <p className="text-zinc-300">Photography and design that scales.</p>
                                </div>
                            </div>
                            <div className="group relative overflow-hidden rounded-2xl border border-white/10 aspect-square">
                                <Image
                                    src="/portfolio/artimes-luxe/financial-management.jpg"
                                    alt="Financial Management"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
                                    <h3 className="text-2xl font-bold text-white">Strategic Growth</h3>
                                    <p className="text-zinc-300">Beyond aesthetics: Measurable business impact.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results & Impact */}
            <section className="py-24 bg-zinc-950 relative overflow-hidden">
                <div className="container relative z-10 px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Impact: 06 Months of Growth</h2>
                        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                            Our strategy didn&apos;t just add followers; it built a community of high-intent fashion enthusiasts.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
                        {[
                            { label: "Follower Growth", value: "10k+", desc: "Pure organic & strategic growth" },
                            { label: "Timeframe", value: "06 Mo", desc: "Rapid market penetration" },
                            { label: "Design Quality", value: "Elite", desc: "Global fashion benchmarks" }
                        ].map((stat, i) => (
                            <div key={i} className="p-8 rounded-xl bg-zinc-900/80 backdrop-blur border border-zinc-800 text-center">
                                <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                                <p className="text-pink-400 font-medium mb-1">{stat.label}</p>
                                <p className="text-xs text-zinc-500">{stat.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm max-w-4xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="w-32 h-32 relative shrink-0">
                                <Image
                                    src="/portfolio/artimes-luxe/logo.jpg"
                                    alt="Artimes Luxe Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-white italic">
                                    &quot;Using our provided strategy the client has developed a visual appeal that resonates with the elite fashion markets around the world.&quot;
                                </h3>
                                <p className="text-zinc-400">
                                    SherCorp manages the social media page content for their Instagram Page, ensuring every interaction is a reflection of the brand&apos;s luxury heritage.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Closing */}
            <section className="py-24 bg-gradient-to-b from-zinc-900 to-black text-center">
                <div className="container px-4 mx-auto max-w-3xl space-y-8">
                    <div className="w-16 h-16 mx-auto bg-pink-500/20 rounded-full flex items-center justify-center border border-pink-500/30">
                        <Sparkles className="w-8 h-8 text-pink-500" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white">Elevate Your Presence</h2>
                    <p className="text-xl text-zinc-400 leading-relaxed">
                        Artimes Luxe is proof that with the right visual strategy, your brand can become a global authority in any niche.
                    </p>

                    <div className="pt-8">
                        <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white rounded-full px-8 h-14 text-lg" asChild>
                            <Link href="/contact">Scale Your Social Strategy</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
