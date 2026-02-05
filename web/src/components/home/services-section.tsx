"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Palette, Video, Megaphone, Search, Cpu, LayoutGrid, ArrowUpRight } from "lucide-react"

import Image from "next/image"
import Link from "next/link"

const services = [
    { icon: Search, title: "SEO, SEM & GEM", description: "Dominating Google & AI Chatbots alike.", color: "bg-blue-500", image: "/images/seo-sem-gem.jpg" },
    { icon: Cpu, title: "AI Solutions", description: "Custom Agents & Neural Workflows.", color: "bg-purple-500", image: "/images/ai-solutions.jpg" },
    { icon: Palette, title: "Premium Design", description: "Visual identity that speaks volumes.", color: "bg-pink-500", image: "/images/premium-design.jpg" },
    { icon: LayoutGrid, title: "UI/UX Architecture", description: "Conversion-centric interfaces.", color: "bg-orange-500", image: "/images/ui-ux-architecture.jpg" },
    { icon: Video, title: "AV Production", description: "Cinematic storytelling.", color: "bg-red-500", image: "/images/AV.jpg" },
    { icon: Megaphone, title: "Social Strategies", description: "Building digital movements.", color: "bg-green-500", image: "/images/SMM.jpg" },
]

export function ServicesSection() {
    return (
        <section className="py-24 bg-background relative z-10" id="services">
            <div className="container px-4 mx-auto mb-24">
                <h2 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter uppercase break-words">
                    Our <span className="text-neon-green outline-text">Craft</span>
                </h2>
                <div className="flex flex-col gap-32">
                    {services.map((service, i) => (
                        <CardStackItem key={i} service={service} index={i} total={services.length} />
                    ))}
                </div>
            </div>
        </section>
    )
}

interface ServiceItem {
    icon: React.ElementType;
    title: string;
    description: string;
    color: string;
    image: string;
    containerClass?: string;
    className?: string;
}

function CardStackItem({ service, index }: { service: ServiceItem, index: number, total: number }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    })

    // Transform vertical scroll into horizontal slide or scale
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

    return (
        <motion.div
            ref={ref}
            style={{ scale, opacity }}
            className="sticky top-32 group"
        >
            <div
                className="glass-card w-full max-w-5xl mx-auto rounded-[2.5rem] p-8 md:p-16 border border-white/10 shadow-2xl overflow-hidden relative"
                style={{
                    // Staggering the z-index so they stack correctly
                    zIndex: index + 1,
                    // Subtle rotation for "messy" stack look
                    transform: `rotate(${index % 2 === 0 ? '-1deg' : '1deg'})`
                }}
            >
                {/* Background Gradient Blob */}
                <div className={`absolute -right-20 -top-20 w-96 h-96 ${service.color} opacity-20 blur-[100px] rounded-full pointer-events-none`} />

                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                            <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-4xl md:text-6xl font-bold leading-tight">
                            {service.title}
                        </h3>
                        <p className="text-xl text-muted-foreground">
                            {service.description}
                        </p>
                        <ul className="space-y-4 pt-4 text-sm text-foreground/80 font-mono">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-neon-green" />
                                Strategy & Planning
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-neon-green" />
                                Execution & Development
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-neon-green" />
                                Performance Analysis
                            </li>
                        </ul>
                        <Link href="/casestudies" className="flex items-center gap-2 text-neon-green font-bold uppercase tracking-wider text-sm hover:gap-4 transition-all">
                            View Case Studies <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className={`rounded-3xl bg-black/40 border border-white/5 backdrop-blur-md relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-700 ${service.containerClass || "h-[300px] md:h-full min-h-[400px]"}`}>
                        {service.image ? (
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className={service.className || "object-cover"}
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-[10rem] font-bold text-white/5 leading-none select-none">
                                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
