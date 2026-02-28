"use client"

import React, { useRef, useState } from "react"
import { Palette, Video, Megaphone, Search, Cpu, LayoutGrid, ArrowUpRight, TrendingUp, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

const successStories = [
    {
        id: "t1",
        client: "Rahman Enclave",
        industry: "Real Estate",
        quote: "Khawar Sher successfully sold off the entire project primarily via Digital Marketing over 7 years.",
        stat: "PKR 2B+ Sales",
        image: "/portfolio/rahmanenclave/rahman-enclave-hero.jpg",
        href: "/portfolio/rahmanenclave",
        color: "text-green-400",
        highlights: [
            { label: "Duration", value: "7+ Years" },
            { label: "Community", value: "30k+" },
            { label: "Impressions", value: "1M+/mo" }
        ]
    },
    {
        id: "t2",
        client: "LAAM (Octane)",
        industry: "E-Commerce",
        quote: "Octane's website was developed by SherCorp, giving their commerce platform a distinct identity.",
        stat: "30x Growth",
        image: "/portfolio/laam-octane/UI Layout 1.png",
        href: "/laam-octane",
        color: "text-blue-400",
        highlights: [
            { label: "Sellers", value: "800+" },
            { label: "Timeframe", value: "90 Days" },
            { label: "Retention", value: "+45%" }
        ]
    },
    {
        id: "t3",
        client: "Wavecomm",
        industry: "Telecom",
        quote: "A complete B2B transformation with 1000+ qualified leads and a perfect performance score.",
        stat: "1000+ Leads",
        image: "/portfolio/wavecomm/Header Design.png",
        href: "/Wavecomm",
        color: "text-orange-400",
        highlights: [
            { label: "Performance", value: "98/100" },
            { label: "CPL", value: "$0.14" },
            { label: "Scalability", value: "100%" }
        ]
    },
    {
        id: "t4",
        client: "Artimes Luxe",
        industry: "Fashion & Events",
        quote: "Managed content strategy resulting in 10k new followers in 6 months with elite visual resonance.",
        stat: "10k Followers",
        image: "/portfolio/artimes-luxe/main-post-visual-2.jpeg",
        href: "/artimes-luxe",
        color: "text-pink-400",
        highlights: [
            { label: "Growth", value: "10k+" },
            { label: "Location", value: "Dubai, UAE" },
            { label: "Timeframe", value: "06 Months" }
        ],
    }
]

export function SuccessStoriesSection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)
    const [activeIndex, setActiveIndex] = useState(0)

    useGSAP(() => {
        if (!containerRef.current || !trackRef.current) return

        const cards = gsap.utils.toArray(".story-item") as HTMLElement[]
        const totalItems = successStories.length

        const scrollTween = gsap.to(trackRef.current, {
            x: () => -(trackRef.current!.scrollWidth - window.innerWidth + (window.innerWidth * 0.15)),
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 1,
                start: "top top",
                end: () => `+=${trackRef.current!.scrollWidth}`,
                invalidateOnRefresh: true,
                snap: {
                    snapTo: 1 / (totalItems - 1),
                    duration: { min: 0.1, max: 0.3 },
                    delay: 0,
                    ease: "power1.inOut"
                },
                onUpdate: (self) => {
                    setActiveIndex(Math.round(self.progress * (totalItems - 1)))
                }
            }
        })

        cards.forEach((card) => {
            gsap.fromTo(card,
                { opacity: 0, x: 100 },
                {
                    opacity: 1, x: 0,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        containerAnimation: scrollTween,
                        start: "left 90%",
                        end: "left 60%",
                        scrub: true,
                    }
                }
            )
        })
    }, { scope: containerRef, dependencies: [] })

    return (
        <section
            ref={containerRef}
            className="h-screen bg-black relative flex flex-col justify-center overflow-hidden"
            id="success-stories"
        >
            <div className="container px-4 mx-auto pt-10 relative z-20">
                <h2 className="text-4xl md:text-7xl font-black mb-12 tracking-tighter uppercase whitespace-nowrap">
                    Success <span className="text-neon-green outline-text">Stories</span>
                </h2>
            </div>

            <div
                ref={trackRef}
                className="flex items-center gap-12 px-[10vw] md:px-[20vw] will-change-transform"
            >
                {successStories.map((item, i) => (
                    <div
                        key={item.id}
                        className="story-item flex-shrink-0 w-[85vw] md:w-[70vw] lg:w-[60vw]"
                    >
                        <StoryCard item={item} isActive={activeIndex === i} />
                    </div>
                ))}
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
                {successStories.map((_, i) => (
                    <div
                        key={`dot-${i}`}
                        className={`transition-all duration-500 rounded-full ${activeIndex === i ? "w-8 h-2 bg-neon-green" : "w-2 h-2 bg-white/20"
                            }`}
                    />
                ))}
            </div>
        </section>
    )
}

function StoryCard({ item, isActive }: { item: any, isActive: boolean }) {
    return (
        <div
            className={`glass-card relative rounded-[2.5rem] p-8 md:p-12 border transition-all duration-500 overflow-hidden ${isActive ? "border-neon-green/40 shadow-[0_0_30px_rgba(34,197,94,0.15)] bg-white/10" : "border-white/10 bg-white/5 opacity-50"
                }`}
        >
            {isActive && (
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <div className="absolute w-[200%] h-full top-0 -left-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg] animate-shimmer" />
                </div>
            )}
            <div className="relative z-10 grid md:grid-cols-5 gap-8 items-center text-left">
                <div className="md:col-span-3 space-y-6">
                    <div className="flex items-center justify-between">
                        <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-white/80 border border-white/10">
                            {item.industry}
                        </span>
                        <TrendingUp className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{item.client}</h3>
                    <div className={`text-5xl font-black ${item.color} leading-tight`}>{item.stat}</div>
                    <div className="grid grid-cols-3 gap-4">
                        {item.highlights.map((h: any, i: number) => (
                            <div key={i} className="flex flex-col p-3 rounded-xl bg-white/5 border border-white/5">
                                <span className="text-[10px] uppercase text-zinc-400 mb-1 leading-none">{h.label}</span>
                                <span className="text-base font-bold text-white leading-none whitespace-nowrap">{h.value}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-zinc-400 italic border-l-2 border-white/10 pl-4">&quot;{item.quote}&quot;</p>
                    <div className="pt-4">
                        <Link href={item.href} className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-neon-green hover:text-black hover:border-neon-green transition-all group">
                            Case Details <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    </div>
                </div>
                <div className="md:col-span-2">
                    <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 transition-transform duration-700 hover:scale-[1.05]">
                        <Image src={item.image} alt={item.client} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                </div>
            </div>
        </div>
    )
}
