import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    CheckCircle2,
    MapPin,
    Building2,
    Trees,
    Users,
    TrendingUp,
    Target,
    Megaphone,
    BarChart3,
    Palette,
    Globe,
    Share2,
    Briefcase,
    Timer,
    Award
} from "lucide-react";

export const metadata: Metadata = {
    title: "Rahman Enclave — End-to-End Real Estate Marketing Case Study | SherCorp",
    description: "A flagship SherCorp case study showcasing 7+ years of brand building, digital marketing, and sales enablement that contributed to PKR 2+ Billion in real estate sales.",
};

export default function RahmanEnclavePage() {
    return (
        <div className="min-h-screen bg-black text-foreground">

            {/* Hero Section */}
            <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/portfolio/rahmanenclave/rahman-enclave-hero.jpg"
                        alt="Rahman Enclave Aerial View"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
                </div>

                <div className="container relative z-10 px-4 text-center space-y-6 max-w-5xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-green/10 border border-neon-green/30 text-neon-green text-sm font-medium mb-4">
                        <Award className="w-4 h-4" />
                        <span>A Flagship SherCorp Case Study</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
                        Rahman Enclave
                    </h1>
                    <p className="text-2xl md:text-3xl font-light text-zinc-200">
                        End-to-End Brand, Marketing & Sales Execution
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center pt-6">
                        <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-neon-green/30 bg-neon-green/10 text-neon-green text-sm font-medium">
                            <CheckCircle2 size={16} /> CDA Approved
                        </span>
                        <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white text-sm font-medium">
                            <Timer size={16} /> 2016 – 2023
                        </span>
                        <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white text-sm font-medium">
                            <MapPin size={16} /> Islamabad, Pakistan
                        </span>
                    </div>
                </div>
            </section>

            {/* Quick Stats Bar */}
            <section className="bg-zinc-900 border-y border-zinc-800 py-8">
                <div className="container px-4 mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
                        {[
                            { label: "Project Duration", value: "7+ Years" },
                            { label: "Organic Following", value: "30,000+" },
                            { label: "Monthly Impressions", value: "1M+" },
                            { label: "Leads / Month", value: "100+" },
                            { label: "Sales Contribution", value: "PKR 2B+", highlight: true }
                        ].map((stat, i) => (
                            <div key={i} className={stat.highlight ? "col-span-2 md:col-span-1" : ""}>
                                <p className={`text-3xl md:text-4xl font-bold ${stat.highlight ? "text-neon-green" : "text-white"}`}>
                                    {stat.value}
                                </p>
                                <p className="text-sm text-zinc-400 mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Overview */}
            <section className="py-24 bg-black">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Project Overview</h2>
                                <div className="h-1 w-20 bg-neon-green mb-8" />
                            </div>

                            <p className="text-lg text-zinc-300 leading-relaxed">
                                <strong className="text-white">Rahman Enclave</strong> is a CDA-approved gated residential community located on <strong className="text-white">Main Lehtrar Road, Islamabad</strong>. Developed by <strong className="text-white">Bin Abdur Rahman (Pvt) Ltd.</strong>, the project has emerged as one of the most trusted residential developments in Zone IV of Islamabad.
                            </p>

                            <p className="text-lg text-zinc-300 leading-relaxed">
                                SherCorp was engaged at an early stage of the project, where I served as <strong className="text-neon-green">Marketing Manager for over seven years</strong>. During this period, I led and executed the entire creative, branding, digital marketing, and sales enablement ecosystem — from initial brand identity creation to sustained revenue growth.
                            </p>

                            <div className="p-6 rounded-xl bg-neon-green/5 border border-neon-green/20">
                                <p className="text-xl font-semibold text-white">Result:</p>
                                <p className="text-lg text-zinc-300 mt-2">
                                    The combined marketing and sales strategy contributed to <strong className="text-neon-green text-2xl">over PKR 2 Billion</strong> in realized real estate sales.
                                </p>
                            </div>
                        </div>

                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/portfolio/rahmanenclave/rahman-enclave-main-road.jpg"
                                alt="Rahman Enclave Main Road"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Location Strategy */}
            <section className="py-24 bg-zinc-950">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
                            <Image
                                src="/portfolio/rahmanenclave/rahman-enclave-location-map.jpg"
                                alt="Rahman Enclave Location Map"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="space-y-6 order-1 lg:order-2">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Project Context & Location Strategy</h2>
                            <p className="text-lg text-zinc-400">
                                Rahman Enclave is strategically located on <strong className="text-white">Main Lehtrar Road</strong>, offering fast connectivity to Islamabad Expressway, Park Road, and major twin-city routes.
                            </p>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-neon-green">Key Location Advantages</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Approx. 10 minutes drive from Islamabad Expressway",
                                        "Dual access routes enhancing traffic flow",
                                        "Close proximity to Gulberg Greens, Ghori Town, and Park Road corridor",
                                        "Faster commute compared to other major housing schemes"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-zinc-300">
                                            <CheckCircle2 className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Community Planning */}
            <section className="py-24 bg-black">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Community Planning & Infrastructure</h2>
                        <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
                            Rahman Enclave was positioned as a family-centric, fully developed gated community, built in strict compliance with CDA planning standards.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: CheckCircle2, title: "CDA-Approved NOC", desc: "Fully compliant with Capital Development Authority regulations" },
                            { icon: Building2, title: "Underground Utilities", desc: "Electricity, water supply, and sewerage infrastructure" },
                            { icon: Users, title: "Secure Gated Access", desc: "24/7 security with controlled entry points" },
                            { icon: TrendingUp, title: "Planned Expansion", desc: "Future utility expansion including gas infrastructure" }
                        ].map((item, i) => (
                            <Card key={i} className="bg-zinc-900/50 border-zinc-800 hover:border-neon-green/30 transition-all group">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-neon-green/10 flex items-center justify-center mb-4 group-hover:bg-neon-green/20 transition-colors">
                                        <item.icon className="w-6 h-6 text-neon-green" />
                                    </div>
                                    <CardTitle className="text-lg text-white">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-zinc-400">{item.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Amenities & Lifestyle */}
            <section className="py-24 bg-zinc-950">
                <div className="container px-4 mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">Amenities & Lifestyle Features</h2>

                    {/* Parks & Recreation */}
                    <div className="mb-20">
                        <h3 className="text-2xl font-semibold text-neon-green mb-8 flex items-center gap-3">
                            <Trees className="w-6 h-6" /> Parks & Recreation
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="relative h-[350px] rounded-xl overflow-hidden group">
                                <Image
                                    src="/portfolio/rahmanenclave/rahman-enclave-family-park.jpg"
                                    alt="Family Park"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                    <p className="text-white font-semibold text-lg">Family Park</p>
                                </div>
                            </div>
                            <div className="relative h-[350px] rounded-xl overflow-hidden group">
                                <Image
                                    src="/portfolio/rahmanenclave/rahman-enclave-sports-complex.jpg"
                                    alt="Sports Complex"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                    <p className="text-white font-semibold text-lg">Sports Complex & Japanese Garden</p>
                                </div>
                            </div>
                        </div>
                        <ul className="flex flex-wrap gap-4 mt-6">
                            {["Two large family parks", "Dedicated sports complex", "Open-air and specialized fitness areas"].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800 text-zinc-300 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-neon-green" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Community & Identity */}
                    <div>
                        <h3 className="text-2xl font-semibold text-neon-green mb-8 flex items-center gap-3">
                            <Building2 className="w-6 h-6" /> Community & Identity
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="relative h-[350px] rounded-xl overflow-hidden group">
                                <Image
                                    src="/portfolio/rahmanenclave/rahman-enclave-monument.jpg"
                                    alt="Grand Monument"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                    <p className="text-white font-semibold text-lg">Grand Monument</p>
                                </div>
                            </div>
                            <div className="relative h-[350px] rounded-xl overflow-hidden group">
                                <Image
                                    src="/portfolio/rahmanenclave/rahman-enclave-central-mosque.jpg"
                                    alt="Central Mosque"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                    <p className="text-white font-semibold text-lg">Naseem Masjid — Central Mosque</p>
                                </div>
                            </div>
                        </div>
                        <ul className="flex flex-wrap gap-4 mt-6">
                            {[
                                "Central grand monument with Islamic architectural elements",
                                "Dedicated 8-kanal school site",
                                "Purpose-built central mosque"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800 text-zinc-300 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-neon-green" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* SherCorp's Role */}
            <section className="py-24 bg-black relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1/2 h-full bg-neon-green/5 blur-3xl -translate-x-1/2" />
                <div className="container px-4 mx-auto relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">SherCorp&apos;s Role & Responsibilities</h2>
                        <p className="text-lg text-zinc-400">
                            SherCorp&apos;s involvement went far beyond conventional marketing execution. I was responsible for building the project&apos;s identity from the ground up and sustaining growth over multiple market cycles.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: Palette, title: "Brand Identity Development", desc: "Created the complete visual identity and logo from scratch" },
                            { icon: Target, title: "Creative Direction", desc: "Led design systems across all marketing channels" },
                            { icon: Globe, title: "Digital Marketing", desc: "Built and scaled online presence from zero" },
                            { icon: TrendingUp, title: "Sales Enablement", desc: "Lead management and conversion optimization" },
                            { icon: BarChart3, title: "Market Positioning", desc: "Strategic pricing communication and positioning" },
                            { icon: Users, title: "Team Coordination", desc: "Internal coordination between marketing, sales and operations" }
                        ].map((item, i) => (
                            <div key={i} className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-neon-green/30 transition-all group">
                                <item.icon className="w-8 h-8 text-neon-green mb-4" />
                                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-zinc-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brand Identity & Creative */}
            <section className="py-24 bg-zinc-950">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Brand Identity & Creative Foundations</h2>
                            <p className="text-lg text-zinc-400">
                                The <strong className="text-white">Rahman Enclave logo</strong> was conceptualized and finalized in 2016 to reflect:
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Stability and long-term value",
                                    "Community-driven living",
                                    "Scalability for future phases"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-zinc-300">
                                        <CheckCircle2 className="w-5 h-5 text-neon-green" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-4">
                                <h3 className="text-xl font-semibold text-neon-green mb-4">Marketing Collaterals</h3>
                                <p className="text-zinc-400">
                                    Designed and produced the <strong className="text-white">first official 16-page project booklet</strong>, establishing a consistent visual language across print, digital, and OOH media.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative h-[300px] rounded-xl overflow-hidden">
                                <Image
                                    src="/portfolio/rahmanenclave/rahman-enclave-booklet-cover.jpg"
                                    alt="Booklet Cover"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative h-[300px] rounded-xl overflow-hidden">
                                <Image
                                    src="/portfolio/rahmanenclave/rahman-enclave-booklet-inside.jpg"
                                    alt="Booklet Inside"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Digital Marketing */}
            <section className="py-24 bg-black">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/portfolio/rahmanenclave/rahman-enclave-layout-plan.jpg"
                                alt="Layout Plan"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Digital Marketing & Online Presence</h2>
                                <p className="text-lg text-zinc-400">
                                    SherCorp built Rahman Enclave&apos;s digital footprint from scratch and scaled it organically over time.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-neon-green">Key Digital Achievements</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { icon: Globe, text: "Designed & launched official website" },
                                        { icon: TrendingUp, text: "Strong SEO visibility for Islamabad real estate" },
                                        { icon: Users, text: "30,000+ organic social following" },
                                        { icon: BarChart3, text: "1M+ monthly impressions at peak" },
                                        { icon: Target, text: "100+ qualified leads per month" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                                            <item.icon className="w-5 h-5 text-neon-green flex-shrink-0" />
                                            <span className="text-sm text-zinc-300">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Advertising & Outreach */}
            <section className="py-24 bg-zinc-950">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Advertising & Outreach Strategy</h2>

                            <div className="space-y-6">
                                <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Megaphone className="w-6 h-6 text-neon-green" />
                                        <h3 className="text-lg font-semibold text-white">Out-of-Home (OOH)</h3>
                                    </div>
                                    <ul className="space-y-2 text-zinc-400">
                                        <li>• Conceptualized and designed large-format billboards</li>
                                        <li>• Strategic placement on high-traffic roads and expressways</li>
                                    </ul>
                                </div>

                                <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Share2 className="w-6 h-6 text-neon-green" />
                                        <h3 className="text-lg font-semibold text-white">Paid Media</h3>
                                    </div>
                                    <ul className="space-y-2 text-zinc-400">
                                        <li>• Carefully timed paid social and search campaigns</li>
                                        <li>• Focused on conversion efficiency over vanity metrics</li>
                                        <li>• Supported sales launches and new phase announcements</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/portfolio/rahmanenclave/rahman-enclave-ooh-billboard.jpg"
                                alt="OOH Billboard Design"
                                fill
                                className="object-contain bg-zinc-900"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Sales Enablement */}
            <section className="py-24 bg-black">
                <div className="container px-4 mx-auto max-w-4xl text-center">
                    <Briefcase className="w-12 h-12 text-neon-green mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Sales Enablement & Process Optimization</h2>
                    <p className="text-lg text-zinc-400 mb-8">
                        Beyond marketing execution, I worked closely with internal sales teams to improve operational efficiency. This integrated approach ensured marketing translated into <strong className="text-white">actual bookings and revenue</strong>, not just visibility.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            "Sales funnel structuring",
                            "Lead qualification workflows",
                            "Campaign performance reporting",
                            "Marketing-Sales-Management coordination"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-zinc-900 border border-zinc-800 text-left">
                                <CheckCircle2 className="w-5 h-5 text-neon-green flex-shrink-0" />
                                <span className="text-zinc-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Measurable Outcomes */}
            <section className="py-24 bg-zinc-950">
                <div className="container px-4 mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">Measurable Outcomes</h2>

                    <div className="max-w-4xl mx-auto">
                        <div className="rounded-2xl overflow-hidden border border-zinc-800">
                            <table className="w-full">
                                <thead className="bg-zinc-900">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-300">Metric</th>
                                        <th className="px-6 py-4 text-right text-sm font-semibold text-zinc-300">Result</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-zinc-800">
                                    {[
                                        { metric: "Project Duration", value: "7+ Years" },
                                        { metric: "Organic Social Following", value: "30,000+" },
                                        { metric: "Monthly Impressions", value: "1,000,000+" },
                                        { metric: "Qualified Leads (Peak)", value: "100+ / month" },
                                        { metric: "Sales Contribution", value: "PKR 2+ Billion", highlight: true }
                                    ].map((row, i) => (
                                        <tr key={i} className="bg-zinc-900/50">
                                            <td className="px-6 py-4 text-zinc-300">{row.metric}</td>
                                            <td className={`px-6 py-4 text-right font-semibold ${row.highlight ? "text-neon-green text-xl" : "text-white"}`}>
                                                {row.value}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Legacy */}
            <section className="py-24 bg-black relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/portfolio/rahmanenclave/rahman-enclave-park-view-1.jpg"
                        alt="Park View"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/70" />
                </div>

                <div className="container px-4 mx-auto relative z-10 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Project Legacy</h2>
                    <p className="text-xl text-zinc-300 mb-12 leading-relaxed">
                        Rahman Enclave stands as a <strong className="text-white">long-term success story</strong> — not driven by short-term hype, but by disciplined branding, trust-building, and sustained market presence.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: Target, title: "Full-Cycle Expertise", desc: "Complete real estate marketing from concept to conversion" },
                            { icon: TrendingUp, title: "Proven Scalability", desc: "Demonstrated ability to scale a brand over years" },
                            { icon: BarChart3, title: "Measurable Impact", desc: "Real, demonstrable impact on revenue" }
                        ].map((item, i) => (
                            <div key={i} className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                <item.icon className="w-8 h-8 text-neon-green mx-auto mb-4" />
                                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-zinc-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-zinc-900 border-t border-zinc-800">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">Interested in Working Together?</h3>
                            <p className="text-zinc-400">Let&apos;s discuss how SherCorp can help with your next project.</p>
                        </div>
                        <div className="flex gap-4">
                            <Button size="lg" className="bg-neon-green text-black hover:bg-neon-green/90" asChild>
                                <Link href="/contact">Get in Touch</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800" asChild>
                                <Link href="/portfolio">View More Projects</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Copyright */}
            <footer className="py-8 bg-black border-t border-zinc-900">
                <div className="container px-4 mx-auto text-center">
                    <p className="text-sm text-zinc-500">
                        © SherCorp — All Rights Reserved | A Digital Marketing & Strategy Consultancy | Islamabad, Pakistan
                    </p>
                </div>
            </footer>
        </div>
    );
}
