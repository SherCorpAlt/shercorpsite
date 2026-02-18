"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

const successStories = [
    {
        id: 1,
        client: "Rahman Enclave",
        industry: "Real Estate",
        quote: "As the Marketing Manager of Rahman Enclave, Khawar Sher spent 7 years building the brand from scratch, and successfully sold off the entire project primarily via Digital Marketing.",
        stat: "PKR 2B+ Sales",
        image: "/portfolio/rahmanenclave/rahman-enclave-hero.jpg",
        href: "/portfolio/rahmanenclave",
        color: "group-hover:text-green-400",
        highlights: [
            { label: "Duration", value: "7+ Years" },
            { label: "Community", value: "30k+" },
            { label: "Impressions", value: "1M+/mo" },
            { label: "Leads", value: "100+/mo" }
        ]
    },
    {
        id: 2,
        client: "LAAM (Octane)",
        industry: "E-Commerce",
        quote: "LAAM is based on Octane, and Octane's website was developed by SherCorp, giving their platform the home and identity it deserves.",
        stat: "30x Growth",
        image: "/portfolio/laam-octane/UI Layout 1.png",
        href: "/laam-octane",
        color: "group-hover:text-blue-400",
        highlights: [
            { label: "Sellers", value: "800+" },
            { label: "Timeframe", value: "90 Days" },
            { label: "Retention", value: "+45%" },
            { label: "Network", value: "+15%" }
        ]
    },
    {
        id: 3,
        client: "Wavecomm",
        industry: "Telecom",
        quote: "A complete B2B transformation. We generated 1000+ qualified leads and achieved a perfect performance score.",
        stat: "1000+ Leads",
        image: "/portfolio/wavecomm/Header Design.png",
        href: "/Wavecomm",
        color: "group-hover:text-orange-400",
        highlights: [
            { label: "Performance", value: "98/100" },
            { label: "Scalability", value: "100%" },
            { label: "CPL", value: "$0.14" },
            { label: "Sessions", value: "+60%" }
        ]
    }
]

export function TestimonialsSection() {
    return (
        <section className="py-24 container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div className="space-y-4">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
                        Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-emerald-600">Stories</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-xl">
                        We don&apos;t just promise results. We have a track record of shattering benchmarks across industries.
                    </p>
                </div>
                <Link href="/casestudies" className="group flex items-center gap-2 text-neon-green font-bold uppercase tracking-wider text-sm hover:gap-4 transition-all">
                    All Case Studies <ArrowUpRight className="w-4 h-4" />
                </Link>
            </div>

            {/* 
                Updated Layout: 2x2 Grid with Fixed Aspect Ratio 
                - Mobile: 1 col, Desktop: 2 cols
                - Fixed Aspect Ratio: 3:5
                - Image Top, Text Bottom
            */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {successStories.map((story) => (
                    <Link
                        key={story.id}
                        href={story.href}
                        className={cn(
                            "group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-black/50 transition-all hover:border-white/20 aspect-[3/5]"
                        )}
                    >
                        {/* Image Container: Top 45% - Giving more room to text content */}
                        <div className="relative w-full h-[45%] overflow-hidden bg-zinc-900">
                            <Image
                                src={story.image}
                                alt={story.client}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* Content Container: Bottom 55% - Filled with Details */}
                        <div className="relative p-6 md:p-8 h-[55%] flex flex-col justify-between bg-zinc-950/50">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-white/80 border border-white/10 backdrop-blur-md">
                                        {story.industry}
                                    </span>
                                    <ArrowUpRight className="w-6 h-6 text-white/50 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-zinc-200 transition-colors">{story.client}</h3>
                                    <div className={cn("text-4xl md:text-5xl font-black text-white transition-colors duration-300 leading-tight", story.color)}>
                                        {story.stat}
                                    </div>
                                </div>
                            </div>

                            {/* Key Highlights Grid to Fill Space */}
                            <div className="grid grid-cols-2 gap-4">
                                {story.highlights.map((item, idx) => (
                                    <div key={idx} className="flex flex-col p-3 rounded-xl bg-white/5 border border-white/5 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20 group-hover:translate-x-1">
                                        <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium mb-1">{item.label}</span>
                                        <span className="text-lg font-bold text-white leading-none">{item.value}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="text-zinc-400 leading-relaxed text-sm lg:text-base border-l-2 border-white/10 pl-4 line-clamp-3 group-hover:text-zinc-300 transition-colors">
                                &quot;{story.quote}&quot;
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}
