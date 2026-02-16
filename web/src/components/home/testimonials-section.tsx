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
        quote: "SherCorp&apos;s strategic partnership over 7 years drove over PKR 2 Billion in sales, building our brand from a concept to a market leader.",
        stat: "PKR 2B+ Sales",
        image: "/portfolio/rahmanenclave/rahman-enclave-hero.jpg",
        href: "/portfolio/rahmanenclave",
        className: "md:col-span-2 md:row-span-2",
        color: "group-hover:text-green-400"
    },
    {
        id: 2,
        client: "LAAM (Octane)",
        industry: "E-Commerce",
        quote: "They didn&apos;t just build a site; they engineered a growth engine. 30x traffic surge and 800+ sellers in just 3 months.",
        stat: "30x Growth",
        image: "/portfolio/laam-octane/UI Layout 1.png",
        href: "/laam-octane",
        className: "md:col-span-1 md:row-span-1",
        color: "group-hover:text-blue-400"
    },
    {
        id: 3,
        client: "Wavecomm",
        industry: "Telecom",
        quote: "A complete B2B transformation. We generated 1000+ qualified leads and achieved a perfect performance score.",
        stat: "1000+ Leads",
        image: "/portfolio/wavecomm/Header Design.png",
        href: "/Wavecomm",
        className: "md:col-span-1 md:row-span-1",
        color: "group-hover:text-orange-400"
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
                {successStories.map((story) => (
                    <Link
                        key={story.id}
                        href={story.href}
                        className={cn(
                            "group relative overflow-hidden rounded-3xl border border-white/10 bg-black/50 transition-all hover:border-white/20",
                            story.className
                        )}
                    >
                        {/* Background Image /w Parallax-ish feel */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src={story.image}
                                alt={story.client}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-30"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                        </div>

                        <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-white/80 border border-white/10 backdrop-blur-md">
                                        {story.industry}
                                    </span>
                                    <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <div className={cn("text-4xl md:text-5xl font-black text-white transition-colors duration-300", story.color)}>
                                        {story.stat}
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{story.client}</h3>
                                </div>

                                <p className="text-zinc-400 leading-relaxed text-sm md:text-base border-l-2 border-white/10 pl-4">
                                    &quot;{story.quote}&quot;
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}
