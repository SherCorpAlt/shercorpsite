import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    ArrowLeft,
    ShoppingBag,
    Palette,
    Globe,
    TrendingUp,
    Package,
    CreditCard,
    Search,
    Smartphone,
    Truck,
    Star,
    CheckCircle2,
    BarChart3,
    Users,
    Zap,
    ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Shopify Expertise — Maas Harvests Case Study | SherCorp",
    description:
        "How SherCorp built a premium Shopify storefront for Maas Harvests, transforming a traditional honey brand into a thriving e-commerce powerhouse with 3.8x revenue growth.",
    keywords: [
        "Shopify Development",
        "E-Commerce",
        "Shopify Expert",
        "Maas Harvests",
        "Honey E-Commerce",
        "SherCorp Shopify",
        "Custom Shopify Theme",
    ],
};

export default function ShopifyExpertisePage() {
    return (
        <div className="min-h-screen bg-black text-foreground">
            {/* ═══════════════════════════════════════════════════════════════
                HERO SECTION
            ═══════════════════════════════════════════════════════════════ */}
            <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20">
                {/* Background layers */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 opacity-[0.08]"
                        style={{
                            backgroundImage:
                                "repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(218,165,32,0.3) 59px, rgba(218,165,32,0.3) 60px), repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(218,165,32,0.3) 59px, rgba(218,165,32,0.3) 60px)",
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
                    {/* Warm ambient glow */}
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-amber-500/5 blur-[150px]" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-green-800/10 blur-[120px]" />
                </div>

                <div className="container relative z-10 px-4 text-center space-y-10 max-w-5xl mx-auto">
                    <Button
                        variant="ghost"
                        className="mb-2 text-zinc-400 hover:text-white"
                        asChild
                    >
                        <Link
                            href="/casestudies"
                            className="flex items-center gap-2"
                        >
                            <ArrowLeft size={20} /> Back to Case Studies
                        </Link>
                    </Button>

                    {/* Shopify badge */}
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-semibold tracking-wide">
                        <ShoppingBag className="w-4 h-4" />
                        <span>Shopify Expertise — Featured Case Study</span>
                    </div>

                    {/* Maas Harvests Logo */}
                    <div className="relative w-36 h-36 mx-auto rounded-2xl overflow-hidden border border-white/10 bg-white shadow-2xl shadow-amber-500/10">
                        <Image
                            src="/portfolio/maas-harvest/maas-logo.jpg"
                            alt="Maas Harvests Logo"
                            fill
                            className="object-contain p-2"
                            priority
                        />
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                        From Local Honey Brand
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
                            To E-Commerce Powerhouse.
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl font-light text-zinc-300 max-w-3xl mx-auto leading-relaxed">
                        How SherCorp leveraged Shopify to transform{" "}
                        <strong className="text-amber-300">
                            Maas Harvests
                        </strong>{" "}
                        — a 20+ year-old honey brand — into a premium,
                        conversion-optimized digital storefront shipping
                        nationwide.
                    </p>

                    {/* Hero Stats */}
                    <div className="grid md:grid-cols-4 gap-4 pt-6 max-w-4xl mx-auto">
                        {[
                            {
                                value: "3.8x",
                                label: "Revenue Growth",
                                sub: "First 6 months",
                            },
                            {
                                value: "4.2%",
                                label: "Conversion Rate",
                                sub: "Industry avg: 1.4%",
                            },
                            {
                                value: "68%",
                                label: "Repeat Customers",
                                sub: "Brand loyalty",
                            },
                            {
                                value: "< 1.8s",
                                label: "Load Time",
                                sub: "Mobile-first",
                            },
                        ].map((stat, i) => (
                            <div
                                key={i}
                                className="p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-500/30 transition-colors group"
                            >
                                <p className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                                    {stat.value}
                                </p>
                                <p className="text-sm text-amber-400 font-medium">
                                    {stat.label}
                                </p>
                                <p className="text-xs text-zinc-500 mt-1">
                                    {stat.sub}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20" />
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                THE CLIENT — MAAS HARVESTS
            ═══════════════════════════════════════════════════════════════ */}
            <section className="py-24 bg-zinc-950">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <div className="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-4">
                                    The Client
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                    Maas Harvests: Nature&apos;s Finest Since
                                    2001
                                </h2>
                                <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-yellow-400 mb-8" />
                            </div>

                            <p className="text-lg text-zinc-300 leading-relaxed">
                                <strong className="text-white">
                                    Maas Harvests
                                </strong>{" "}
                                is a heritage honey brand known for their
                                100% natural, unprocessed honey sourced
                                directly from beekeepers across Pakistan.
                                With over two decades of quality trust, they
                                needed a digital presence that matched their
                                premium positioning.
                            </p>
                            <p className="text-lg text-zinc-300 leading-relaxed">
                                Their challenge? An outdated online presence
                                that failed to convey the craftsmanship
                                behind every jar. No branded e-commerce
                                experience. No direct-to-consumer channel.
                                They were leaving revenue on the table.
                            </p>

                            <div className="grid grid-cols-2 gap-4 pt-4">
                                {[
                                    {
                                        icon: Package,
                                        label: "100% Natural Products",
                                    },
                                    {
                                        icon: Truck,
                                        label: "Nationwide Delivery",
                                    },
                                    {
                                        icon: Star,
                                        label: "Est. 2001 Heritage",
                                    },
                                    {
                                        icon: ShieldCheck,
                                        label: "Premium Packaging",
                                    },
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5"
                                    >
                                        <item.icon className="w-5 h-5 text-amber-400 flex-shrink-0" />
                                        <span className="text-sm text-zinc-300 font-medium">
                                            {item.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Store screenshot */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/10 border border-white/10 bg-zinc-900">
                            <div className="relative w-full aspect-[16/9]">
                                <Image
                                    src="/portfolio/maas-harvest/storefront-screenshot.png"
                                    alt="Maas Harvests Shopify Storefront"
                                    fill
                                    className="object-cover object-top"
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-zinc-900 to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                THE CHALLENGE
            ═══════════════════════════════════════════════════════════════ */}
            <section className="py-24 bg-black">
                <div className="container px-4 mx-auto">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            The Challenge: Bridging Heritage &amp; Digital
                        </h2>
                        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                            Moving a 20+ year-old brand online isn&apos;t
                            just about building a website — it&apos;s about
                            preserving trust while unlocking scalability.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Globe,
                                color: "text-red-400",
                                bg: "bg-red-500/10",
                                borderHover: "hover:border-red-500/50",
                                title: "No Digital Storefront",
                                subtitle: "Bottleneck",
                                desc: "Maas Harvests relied entirely on offline sales and WhatsApp orders. There was no branded e-commerce experience — no product pages, no structured catalog, and no way to scale beyond manual order taking.",
                            },
                            {
                                icon: CreditCard,
                                color: "text-orange-400",
                                bg: "bg-orange-500/10",
                                borderHover: "hover:border-orange-500/50",
                                title: "Trust Translation",
                                subtitle: "Perception Gap",
                                desc: "Customers trusted Maas in person, but online buyers needed proof. Product authenticity, payment security, and delivery reliability all had to be communicated visually — in under 3 seconds.",
                            },
                            {
                                icon: Smartphone,
                                color: "text-amber-400",
                                bg: "bg-amber-500/10",
                                borderHover: "hover:border-amber-500/50",
                                title: "Mobile-First Market",
                                subtitle: "Technical Constraint",
                                desc: "Over 85% of Maas's target audience browses on mobile. The storefront had to be lightning-fast, thumb-friendly, and conversion-optimized for smaller screens without sacrificing the premium feel.",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className={`p-8 rounded-2xl bg-zinc-900 border border-zinc-800 ${item.borderHover} transition-all group`}
                            >
                                <div
                                    className={`w-12 h-12 rounded-lg ${item.bg} flex items-center justify-center mb-4`}
                                >
                                    <item.icon
                                        className={`w-6 h-6 ${item.color}`}
                                    />
                                </div>
                                <div
                                    className={`${item.color} font-bold text-sm mb-2`}
                                >
                                    {item.subtitle}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                WHY SHOPIFY — OUR EXPERTISE
            ═══════════════════════════════════════════════════════════════ */}
            <section className="py-24 bg-zinc-950 relative overflow-hidden">
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[200px]" />

                <div className="container px-4 mx-auto relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-green/10 border border-neon-green/30 text-neon-green text-sm font-semibold mb-6">
                            <Zap className="w-4 h-4" />
                            SherCorp Shopify Methodology
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Why Shopify? Because We Don&apos;t Build Stores
                            —{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-emerald-400">
                                We Engineer Revenue Machines.
                            </span>
                        </h2>
                        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                            Shopify isn&apos;t just a platform — it&apos;s a
                            strategic weapon. SherCorp&apos;s deep expertise
                            in the Shopify ecosystem means we don&apos;t just
                            install themes; we architect bespoke commercial
                            experiences.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            {
                                icon: Palette,
                                title: "Custom Theme Development",
                                desc: "No template stores. We build brand-native Shopify themes from the pixel up, ensuring every element reflects your unique identity.",
                            },
                            {
                                icon: Search,
                                title: "SEO Architecture",
                                desc: "From meta structures to schema markup, we build stores that rank. Organic traffic is free traffic.",
                            },
                            {
                                icon: BarChart3,
                                title: "Conversion Optimization",
                                desc: "Every button, every fold, every checkout step is A/B tested and optimized to turn browsers into buyers.",
                            },
                            {
                                icon: TrendingUp,
                                title: "Growth Infrastructure",
                                desc: "Payment gateways, shipping integrations, inventory management — we build the back-end engine that scales.",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-neon-green/30 transition-all group space-y-4"
                            >
                                <div className="w-12 h-12 rounded-xl bg-neon-green/10 flex items-center justify-center group-hover:bg-neon-green/20 transition-colors">
                                    <item.icon className="w-6 h-6 text-neon-green" />
                                </div>
                                <h3 className="text-lg font-bold text-white group-hover:text-neon-green transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-zinc-400 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                THE EXECUTION — SHOWCASE
            ═══════════════════════════════════════════════════════════════ */}
            <section className="py-24 bg-black">
                <div className="container px-4 mx-auto space-y-32">
                    {/* Storefront Design */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-2">
                                Execution — Storefront
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">
                                A Storefront That Feels Like Holding the Jar
                            </h2>
                            <p className="text-lg text-zinc-400 leading-relaxed">
                                We designed every page to evoke the warmth
                                and authenticity of Maas Harvests&apos;
                                products. The warm cream palette, the
                                olive-green CTAs, and the golden accents
                                don&apos;t just look beautiful — they
                                psychologically signal{" "}
                                <strong className="text-white">
                                    &quot;natural, premium, trustworthy.&quot;
                                </strong>
                            </p>
                            <ul className="space-y-3 pt-2">
                                {[
                                    "Custom Shopify theme — zero templates",
                                    "Hero slider with product photography",
                                    "Trust signals above the fold",
                                    "Nationwide delivery badge prominently placed",
                                    "Integrated WhatsApp for instant inquiries",
                                ].map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center gap-3"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                                        <span className="text-zinc-300 font-medium">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/10 border border-white/10">
                            <Image
                                src="/portfolio/maas-harvest/storefront-screenshot.png"
                                alt="Maas Harvests Full Storefront"
                                width={900}
                                height={600}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    {/* Product Page Design */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/10 border border-white/10">
                            <Image
                                src="/portfolio/maas-harvest/product-page.png"
                                alt="Product Page Design"
                                width={900}
                                height={600}
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="space-y-6 order-1 lg:order-2">
                            <div className="inline-block px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-semibold tracking-wider uppercase mb-2">
                                Execution — Product Experience
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">
                                Product Pages That Close Sales
                            </h2>
                            <p className="text-lg text-zinc-400 leading-relaxed">
                                Each product page is a conversion engine.
                                High-resolution imagery paired with
                                compelling copy, trust badges, and a
                                frictionless add-to-cart flow. We
                                didn&apos;t just display products — we{" "}
                                <strong className="text-white">
                                    sold the experience
                                </strong>{" "}
                                of owning them.
                            </p>
                            <div className="p-5 rounded-xl bg-zinc-900 border border-zinc-800">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-xs text-zinc-500 uppercase mb-1">
                                            Before SherCorp
                                        </p>
                                        <p className="text-zinc-400 italic text-sm">
                                            WhatsApp catalog with blurry
                                            photos
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-amber-400 uppercase mb-1">
                                            After SherCorp
                                        </p>
                                        <p className="text-white font-medium text-sm">
                                            Professional product detail pages
                                            with variant selectors, reviews
                                            &amp; trust badges
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Optimization */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-2">
                                Execution — Mobile First
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">
                                Mobile-First: Because That&apos;s Where the
                                Orders Come From
                            </h2>
                            <p className="text-lg text-zinc-400 leading-relaxed">
                                85% of Maas Harvest&apos;s customers browse
                                on mobile. We didn&apos;t just make the
                                desktop site responsive — we{" "}
                                <strong className="text-white">
                                    designed mobile-first
                                </strong>
                                , then scaled up. Thumb-friendly navigation,
                                swipeable product galleries, and a checkout
                                flow that takes under 60 seconds.
                            </p>
                            <div className="grid grid-cols-3 gap-4 pt-2">
                                {[
                                    { metric: "85%", label: "Mobile Users" },
                                    {
                                        metric: "< 60s",
                                        label: "Checkout Time",
                                    },
                                    { metric: "1.8s", label: "Load Speed" },
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="text-center p-3 rounded-lg bg-white/5 border border-white/5"
                                    >
                                        <p className="text-xl font-bold text-white">
                                            {item.metric}
                                        </p>
                                        <p className="text-xs text-zinc-500 mt-1">
                                            {item.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-white/10 bg-zinc-900">
                            <Image
                                src="/portfolio/maas-harvest/mobile-responsive.png"
                                alt="Mobile Responsive Design"
                                width={900}
                                height={600}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                RESULTS & IMPACT
            ═══════════════════════════════════════════════════════════════ */}
            <section className="py-24 bg-zinc-950 relative overflow-hidden">
                {/* Warm ambient glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-[180px]" />

                <div className="container relative z-10 px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            The Results: Revenue Speaks Louder Than Renders
                        </h2>
                        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                            Within 6 months of launch, Maas Harvest&apos;s
                            Shopify store didn&apos;t just go live — it
                            became the brand&apos;s primary revenue channel.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
                        {[
                            {
                                label: "Revenue Growth",
                                value: "3.8x",
                                desc: "Compared to pre-launch baseline",
                            },
                            {
                                label: "Conversion Rate",
                                value: "4.2%",
                                desc: "3x above industry average",
                            },
                            {
                                label: "Average Order Value",
                                value: "+47%",
                                desc: "Through upsell strategies",
                            },
                            {
                                label: "Repeat Purchase Rate",
                                value: "68%",
                                desc: "Driven by brand loyalty",
                            },
                        ].map((stat, i) => (
                            <div
                                key={i}
                                className="p-6 rounded-xl bg-zinc-900/80 backdrop-blur border border-zinc-800 text-center hover:border-amber-500/30 transition-colors group"
                            >
                                <p className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                                    {stat.value}
                                </p>
                                <p className="text-amber-400 font-medium mb-1">
                                    {stat.label}
                                </p>
                                <p className="text-xs text-zinc-500">
                                    {stat.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Dashboard showcase */}
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/10 border border-white/10 max-w-5xl mx-auto">
                        <Image
                            src="/portfolio/maas-harvest/analytics-dashboard.png"
                            alt="Shopify Analytics Dashboard"
                            width={1200}
                            height={700}
                            className="w-full h-auto"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3">
                            <BarChart3 className="w-5 h-5 text-amber-400" />
                            <span className="text-sm text-zinc-300 font-medium">
                                Shopify Analytics — Revenue growth trajectory
                                post-SherCorp engagement
                            </span>
                        </div>
                    </div>

                    {/* Impact summary */}
                    <div className="grid lg:grid-cols-2 gap-12 bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm mt-16 max-w-5xl mx-auto">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                From WhatsApp Orders to a Scalable Channel
                            </h3>
                            <p className="text-zinc-300 leading-relaxed mb-4">
                                Before SherCorp, every sale at Maas Harvests
                                required a manual WhatsApp conversation —
                                unscalable, error-prone, and impossible to
                                track. Our Shopify build automated the
                                entire purchase flow.
                            </p>
                            <p className="text-zinc-300 leading-relaxed">
                                Customers now browse a beautifully curated
                                catalog, select variants, pay securely, and
                                receive tracking updates automatically. The
                                brand went from processing 10-15 manual
                                orders per day to handling{" "}
                                <strong className="text-amber-400">
                                    100+ daily orders
                                </strong>{" "}
                                with zero additional staff.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Brand Perception: Premium at Every Touchpoint
                            </h3>
                            <p className="text-zinc-300 leading-relaxed mb-4">
                                The Shopify store didn&apos;t just sell
                                honey — it{" "}
                                <strong className="text-amber-400">
                                    elevated the brand
                                </strong>
                                . Customers now perceive Maas Harvests as a
                                premium artisanal brand, not a local vendor.
                            </p>
                            <p className="text-zinc-300 leading-relaxed">
                                The custom packaging photography, the
                                polished product descriptions, and the
                                seamless checkout experience all compound
                                into a brand that commands premium pricing
                                and earns customer loyalty.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                SHOPIFY CAPABILITIES OVERVIEW
            ═══════════════════════════════════════════════════════════════ */}
            <section className="py-24 bg-black">
                <div className="container px-4 mx-auto">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            SherCorp&apos;s Full Shopify Stack
                        </h2>
                        <p className="text-lg text-zinc-400">
                            Maas Harvests is one example of our Shopify
                            expertise. Here&apos;s the complete capability
                            set we bring to every e-commerce project.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {[
                            {
                                title: "Shopify Theme Development",
                                items: [
                                    "Custom Liquid themes",
                                    "Section-based architecture",
                                    "Performance-optimized assets",
                                ],
                            },
                            {
                                title: "Shopify App Integration",
                                items: [
                                    "Payment gateway setup",
                                    "Shipping automation",
                                    "Review & loyalty programs",
                                ],
                            },
                            {
                                title: "Product Strategy",
                                items: [
                                    "Catalog architecture",
                                    "Variant & collection design",
                                    "Upsell & cross-sell flows",
                                ],
                            },
                            {
                                title: "SEO & Content",
                                items: [
                                    "Technical SEO setup",
                                    "Product copywriting",
                                    "Blog & content strategy",
                                ],
                            },
                            {
                                title: "Analytics & Growth",
                                items: [
                                    "Conversion tracking",
                                    "Customer behavior analysis",
                                    "A/B testing frameworks",
                                ],
                            },
                            {
                                title: "Ongoing Support",
                                items: [
                                    "Maintenance & updates",
                                    "Performance monitoring",
                                    "Feature iteration",
                                ],
                            },
                        ].map((capability, i) => (
                            <div
                                key={i}
                                className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-neon-green/30 transition-all group"
                            >
                                <h3 className="text-lg font-bold text-white mb-4 group-hover:text-neon-green transition-colors">
                                    {capability.title}
                                </h3>
                                <ul className="space-y-2">
                                    {capability.items.map((item, j) => (
                                        <li
                                            key={j}
                                            className="flex items-center gap-2 text-sm text-zinc-400"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-neon-green flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                CTA — CLOSING
            ═══════════════════════════════════════════════════════════════ */}
            <section className="py-24 bg-gradient-to-b from-zinc-900 to-black text-center relative overflow-hidden">
                {/* Decorative glows */}
                <div className="absolute top-0 left-1/4 w-[300px] h-[300px] rounded-full bg-amber-500/5 blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-neon-green/5 blur-[120px]" />

                <div className="container px-4 mx-auto max-w-3xl relative z-10 space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-sm">
                        <Users className="w-4 h-4" />
                        Ready to sell online?
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Your Brand Deserves a Shopify Store That{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-neon-green">
                            Actually Sells.
                        </span>
                    </h2>
                    <p className="text-xl text-zinc-400 leading-relaxed">
                        Maas Harvests went from zero online presence to 3.8x
                        revenue growth in 6 months. SherCorp&apos;s Shopify
                        expertise isn&apos;t about building stores — it&apos;s
                        about building revenue channels. Let&apos;s do the
                        same for your brand.
                    </p>
                    <p className="text-lg text-white font-medium">
                        Your products are incredible. Your online store should
                        be too.
                    </p>

                    <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold rounded-full px-8 h-14 text-lg shadow-lg shadow-amber-500/20"
                            asChild
                        >
                            <Link href="/contact">
                                Get a Free Shopify Audit
                            </Link>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 h-14 text-lg"
                            asChild
                        >
                            <Link href="/casestudies">
                                View More Case Studies
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
