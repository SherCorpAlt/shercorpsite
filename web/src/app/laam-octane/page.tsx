import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    ArrowLeft,
    Zap,
    Layout,
    Box,
    Award
} from "lucide-react";

export const metadata: Metadata = {
    title: "LAAM (Octane) - Case Study | SherCorp",
    description: "How SherCorp transformed Octane from a brand concept into a high-conversion ecosystem that rivals global giants like Shopify.",
};

export default function LaamOctanePage() {
    return (
        <div className="min-h-screen bg-black text-foreground">

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/portfolio/laam-octane/animated grids.png"
                        alt="Octane Background Grid"
                        fill
                        className="object-cover opacity-30"
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
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium">
                            <Zap className="w-4 h-4" />
                            <span>High-Performance E-Commerce</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
                            We Don’t Just Build Websites.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                                We Architect Market Dominance.
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl font-light text-zinc-300 max-w-3xl mx-auto leading-relaxed">
                            How SherCorp transformed Octane from a brand concept into a high-conversion ecosystem that rivals global giants like Shopify.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 pt-8 max-w-4xl mx-auto">
                        <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                            <p className="text-4xl font-bold text-white mb-2">0 to 800+</p>
                            <p className="text-sm text-zinc-400">Registered Sellers in 90 Days</p>
                        </div>
                        <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                            <p className="text-4xl font-bold text-white mb-2">30x</p>
                            <p className="text-sm text-zinc-400">Increase in Traffic</p>
                        </div>
                        <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                            <p className="text-4xl font-bold text-white mb-2">45%</p>
                            <p className="text-sm text-zinc-400">Improvement in Retention</p>
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
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Challenge: Breaking the "Template" Ceiling</h2>
                                <div className="h-1 w-20 bg-blue-500 mb-8" />
                            </div>

                            <p className="text-lg text-zinc-300 leading-relaxed">
                                When Octane approached SherCorp, they weren't just looking for a digital storefront; they were looking to disrupt a saturated e-commerce logistics and enablement market.
                            </p>
                            <p className="text-lg text-zinc-300 leading-relaxed">
                                The existing digital landscape for boutique sellers was cluttered with mediocre interfaces and high friction. To win, Octane needed to solve three critical business bottlenecks:
                            </p>

                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                                        <Award className="w-6 h-6 text-red-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">The Credibility Gap</h3>
                                        <p className="text-zinc-400">As a new brand, Octane needed to immediately project the reliability of an industry veteran while maintaining the agility of a tech disruptor.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                                        <Box className="w-6 h-6 text-orange-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">The Complexity Barrier</h3>
                                        <p className="text-zinc-400">Explaining global logistics, warehousing, and cross-border payments often leads to cognitive overload. If the user doesn't understand the value in 5 seconds, they bounce.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                                        <Layout className="w-6 h-6 text-purple-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">The "Shopify" Standard</h3>
                                        <p className="text-zinc-400">Boutique owners are used to world-class UX. To capture them, Octane couldn't just be "good"—it had to feel premium, seamless, and technologically superior.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-900">
                            <Image
                                src="/portfolio/laam-octane/UI Layout 1.png"
                                alt="Octane UI Layout"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* The Strategy */}
            <section className="py-24 bg-black">
                <div className="container px-4 mx-auto">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Strategy: Conversion by Design</h2>
                        <p className="text-lg text-zinc-400">
                            SherCorp didn't start with a wireframe. We started with a Business Intelligence Audit. Our strategy was built on three pillars of elite digital positioning:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Cognitive Fluency",
                                subtitle: "Reduced Friction",
                                desc: "We identified that the primary barrier was complexity. We replaced 'Information Dumping' with 'Guided Discovery,' prioritizing the user's profit margins over features."
                            },
                            {
                                title: "Visual Authority",
                                subtitle: "High-Trust Design",
                                desc: "Aesthetics are a proxy for security. Using a 'Tech-Forward' design language with 3D assets and motion, we signaled Octane as a future-proof platform."
                            },
                            {
                                title: "Global Benchmark",
                                subtitle: "The Standard",
                                desc: "We benchmarked against Shopify and Stripe. A boutique owner moving from their storefront to Octane’s backend feels zero drop-off in quality."
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 transition-all group">
                                <div className="text-blue-500 font-bold mb-2">{item.subtitle}</div>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                                <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Execution */}
            <section className="py-24 bg-zinc-950">
                <div className="container px-4 mx-auto space-y-32">

                    {/* UI/UX & 3D Elements */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video bg-zinc-900">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            >
                                <source src="/portfolio/laam-octane/3D interactive element.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className="space-y-6 order-1 lg:order-2">
                            <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-semibold tracking-wider uppercase mb-2">
                                Execution
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Interactive 3D Elements: Tangible Technology</h2>
                            <p className="text-lg text-zinc-400">
                                To showcase Octane’s logistics prowess, we integrated interactive 3D elements that visualize the supply chain. These aren't just "eye candy"—they serve as visual anchors that explain complex warehousing and distribution flows faster than any paragraph of text could.
                            </p>
                            <div className="pt-4 space-y-4">
                                <h3 className="text-xl font-semibold text-white">UI/UX Design: The Logic of Luxury</h3>
                                <p className="text-zinc-400">
                                    We moved away from standard corporate palettes to a sleek, high-contrast interface. Every pixel drives the eye toward "Register" or "Calculate Profit".
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Shipping Calculator */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="inline-block px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-semibold tracking-wider uppercase mb-2">
                                Utility
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Location-Based Shipping Estimators</h2>
                            <p className="text-lg text-zinc-400">
                                The "Aha!" moment happens when a seller sees potential profit. We developed a proprietary, location-intelligent shipping calculator. By entering origin and destination, sellers get real-time transparency into costs, transforming the website from a brochure into a functional utility.
                            </p>
                            <div className="pt-4 space-y-4">
                                <h3 className="text-xl font-semibold text-white">Performance Comparison Tools</h3>
                                <p className="text-zinc-400">
                                    Transparency is the ultimate conversion tool. Dynamic comparison matrices pit Octane against competitors, objectively showcasing superior speed and lower costs.
                                </p>
                            </div>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                            <Image
                                src="/portfolio/laam-octane/Interactive element 1.png"
                                alt="Shipping Estimator Interface"
                                width={800}
                                height={600}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    {/* FAQ Architecture */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                            <Image
                                src="/portfolio/laam-octane/FAQ Layout.png"
                                alt="FAQ Layout Design"
                                width={800}
                                height={600}
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="space-y-6 order-1 lg:order-2">
                            <div className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 text-xs font-semibold tracking-wider uppercase mb-2">
                                Content Strategy
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">FAQ Architecture & Copywriting</h2>
                            <p className="text-lg text-zinc-400">
                                We stripped away the jargon. Our senior copywriters reframed Octane’s features into "Seller Benefits."
                            </p>
                            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 my-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-xs text-zinc-500 uppercase">Old Way</p>
                                        <p className="text-zinc-400 italic">"Integrated API for logistics."</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-blue-500 uppercase">SherCorp Reframing</p>
                                        <p className="text-white font-medium">"Sell to London from Lahore as easily as selling next door."</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-lg text-zinc-400">
                                Most FAQs are an afterthought. Ours was a strategic tool to preemptively strike objections on security, costs, and delivery times, turning a support page into a closing tool.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Results & Impact */}
            <section className="py-24 bg-black relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/portfolio/laam-octane/Interactive element demo2.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/80" />
                </div>

                <div className="container relative z-10 px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Results: Growth by the Numbers</h2>
                        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                            The launch of the Octane platform didn't just meet expectations; it redefined what was possible for the brand within a single quarter.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
                        {[
                            { label: "Website Traffic", value: "30x", desc: "Increase from baseline" },
                            { label: "Partner Registrations", value: "800+", desc: "New Sellers in 3 months" },
                            { label: "Network Growth", value: "15%", desc: "Increase in total partners" },
                            { label: "User Retention", value: "45%", desc: "Improvement in session duration" }
                        ].map((stat, i) => (
                            <div key={i} className="p-6 rounded-xl bg-zinc-900/80 backdrop-blur border border-zinc-800 text-center">
                                <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                                <p className="text-blue-400 font-medium mb-1">{stat.label}</p>
                                <p className="text-xs text-zinc-500">{stat.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">Experience That Rivals Global Leaders</h3>
                            <p className="text-zinc-300 leading-relaxed mb-6">
                                When a boutique owner visits the Octane site, they aren't just seeing a local logistics company. They are interacting with a platform that feels like Shopify, Stripe, or Revolut.
                            </p>
                            <p className="text-zinc-300 leading-relaxed">
                                By prioritizing Micro-interactions—the subtle animations when a button is hovered over, the smooth transitions between pages, and the lightning-fast load speeds—SherCorp ensured that Octane’s digital presence matched its global ambitions.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">Business Impact: Beyond the Screen</h3>
                            <p className="text-zinc-300 leading-relaxed mb-6">
                                This wasn't just a "web project." It was the creation of a Scalable Sales Force. The new Octane website <strong className="text-blue-400">reduced the sales cycle by 40%</strong>.
                            </p>
                            <p className="text-zinc-300 leading-relaxed">
                                Because the site effectively educates, handles objections, and demonstrates value through interactive tools, the leads arriving at the registration stage were pre-qualified and ready to ship. SherCorp turned Octane’s digital presence from a cost center into a Revenue Driver.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Closing */}
            <section className="py-24 bg-gradient-to-b from-zinc-900 to-black text-center">
                <div className="container px-4 mx-auto max-w-3xl space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">Are You Ready to Scale?</h2>
                    <p className="text-xl text-zinc-400 leading-relaxed">
                        The success of Octane is not an anomaly—it is the result of a rigorous, conversion-first methodology. At SherCorp, we believe in building digital assets that capture market share, command premium pricing, and turn visitors into lifetime partners.
                    </p>
                    <p className="text-lg text-white font-medium">
                        Your brand has the potential to be the next industry leader. You just need the digital infrastructure to prove it.
                    </p>

                    <div className="pt-8">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 text-lg" asChild>
                            <Link href="/contact">Book a Strategy Audit with SherCorp</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
