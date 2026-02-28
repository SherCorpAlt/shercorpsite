"use client"

import React, { useState, useRef, useCallback, useEffect } from "react"
import { Palette, Video, Megaphone, Search, Cpu, LayoutGrid, ArrowUpRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const services = [
    {
        icon: Search,
        title: "SEO, SEM & GEM",
        description: "Dominating Google & AI Chatbots alike.",
        color: "bg-blue-500",
        glowColor: "rgba(59,130,246,0.12)",
        image: "/images/seo-sem-gem.jpg",
        points: ["Generative Search Optimization", "Semantic Keyword Architecture", "Predictive Ranking Analysis"]
    },
    {
        icon: Cpu,
        title: "AI Solutions",
        description: "Custom Agents & Neural Workflows.",
        color: "bg-purple-500",
        glowColor: "rgba(168,85,247,0.12)",
        image: "/images/ai-solutions.jpg",
        points: ["Custom Neural Workflows", "Autonomous Agent Deployment", "Enterprise RAG Integration"]
    },
    {
        icon: Palette,
        title: "Premium Design",
        description: "Visual identity that speaks volumes.",
        color: "bg-pink-500",
        glowColor: "rgba(236,72,153,0.12)",
        image: "/images/premium-design.jpg",
        points: ["High-Fidelity Brand Systems", "Motion Identity & Animation", "Visual Storytelling Strategy"]
    },
    {
        icon: LayoutGrid,
        title: "UI/UX Architecture",
        description: "Conversion-centric interfaces.",
        color: "bg-orange-500",
        glowColor: "rgba(249,115,22,0.12)",
        image: "/images/ui-ux-architecture.jpg",
        points: ["Conversion Flow Engineering", "Behavioral Pattern Analysis", "Atomic Design Frameworks"]
    },
    {
        icon: Video,
        title: "AV Production",
        description: "Cinematic storytelling.",
        color: "bg-red-500",
        glowColor: "rgba(239,68,68,0.12)",
        image: "/images/AV.jpg",
        points: ["Cinematic Narrative Design", "Advanced Post-Production", "Multi-Platform Content Strategy"]
    },
    {
        icon: Megaphone,
        title: "Social Strategies",
        description: "Building digital movements.",
        color: "bg-green-500",
        glowColor: "rgba(34,197,94,0.12)",
        image: "/images/SMM.jpg",
        points: ["Community Momentum Building", "Viral Growth Loops", "Data-Driven Engagement Plans"]
    },
]

export function ServicesSection() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const [direction, setDirection] = useState<"left" | "right">("right")
    const autoRef = useRef<NodeJS.Timeout | null>(null)

    const goTo = useCallback((index: number, dir: "left" | "right") => {
        if (isAnimating) return
        setIsAnimating(true)
        setDirection(dir)
        setActiveIndex(index)
        setTimeout(() => setIsAnimating(false), 450)
    }, [isAnimating])

    const prev = useCallback(() => {
        const newIndex = activeIndex === 0 ? services.length - 1 : activeIndex - 1
        goTo(newIndex, "left")
    }, [activeIndex, goTo])

    const next = useCallback(() => {
        const newIndex = activeIndex === services.length - 1 ? 0 : activeIndex + 1
        goTo(newIndex, "right")
    }, [activeIndex, goTo])

    // Auto-advance every 6 seconds
    useEffect(() => {
        autoRef.current = setInterval(next, 6000)
        return () => { if (autoRef.current) clearInterval(autoRef.current) }
    }, [next])

    // Reset on manual interaction
    const handleManualNav = useCallback((fn: () => void) => {
        if (autoRef.current) clearInterval(autoRef.current)
        fn()
        autoRef.current = setInterval(next, 6000)
    }, [next])

    const service = services[activeIndex]

    return (
        <section id="services" className="py-20 bg-black relative overflow-hidden">
            {/* Ambient glow that changes with card */}
            <div
                className="absolute inset-0 pointer-events-none transition-all duration-700"
                style={{ background: `radial-gradient(ellipse 60% 60% at 70% 50%, ${service.glowColor}, transparent)` }}
            />

            <div className="container mx-auto px-4 mb-12 relative z-10">
                <div className="flex items-end justify-between gap-6">
                    <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase">
                        Our <span className="text-neon-green outline-text">Craft</span>
                    </h2>
                    {/* Desktop nav buttons */}
                    <div className="hidden md:flex items-center gap-3">
                        <button
                            onClick={() => handleManualNav(prev)}
                            aria-label="Previous service"
                            className="w-12 h-12 rounded-full border border-white/15 bg-white/5 text-white hover:border-neon-green hover:text-neon-green hover:bg-neon-green/10 flex items-center justify-center transition-all duration-300"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => handleManualNav(next)}
                            aria-label="Next service"
                            className="w-12 h-12 rounded-full border border-white/15 bg-white/5 text-white hover:border-neon-green hover:text-neon-green hover:bg-neon-green/10 flex items-center justify-center transition-all duration-300"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Card viewport — single active card with slide transition */}
            <div className="relative z-10 container mx-auto px-4">
                <div
                    className={`glass-card rounded-[2.5rem] border overflow-hidden transition-all duration-500 ${isAnimating
                            ? direction === "right"
                                ? "opacity-0 translate-x-8"
                                : "opacity-0 -translate-x-8"
                            : "opacity-100 translate-x-0"
                        } border-neon-green/30 shadow-[0_0_40px_rgba(57,255,20,0.08)] bg-white/5`}
                    style={{ transform: isAnimating ? undefined : undefined }}
                >
                    <div className="grid md:grid-cols-2 gap-0">
                        {/* Left text panel */}
                        <div className="p-8 md:p-12 flex flex-col justify-between min-h-[480px]">
                            <div className="space-y-6">
                                {/* Service number + icon */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                        <service.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="text-xs font-mono text-neon-green uppercase tracking-[0.25em]">
                                        0{activeIndex + 1} / 0{services.length}
                                    </span>
                                </div>

                                <div>
                                    <h3 className="text-4xl md:text-5xl font-bold leading-tight text-white tracking-tight mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-lg text-gray-400 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>

                                <ul className="space-y-3 pt-2">
                                    {service.points.map((point, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-neon-green flex-shrink-0 shadow-[0_0_6px_rgba(57,255,20,0.7)]" />
                                            <span className="text-sm text-gray-300">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-8 flex items-center gap-4">
                                <Link
                                    href="/casestudies"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neon-green text-black font-bold text-sm hover:bg-neon-green/80 transition-all group shadow-[0_0_20px_rgba(57,255,20,0.3)]"
                                >
                                    View Case Studies
                                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </Link>
                            </div>
                        </div>

                        {/* Right image panel */}
                        <div className="relative min-h-[320px] md:min-h-[480px]">
                            {/* Colour blob behind image */}
                            <div className={`absolute inset-0 ${service.color} opacity-10 blur-[60px]`} />
                            {service.image ? (
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                    priority={activeIndex === 0}
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
                                    <Sparkles className="w-16 h-16 text-white/10" />
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent md:bg-gradient-to-r" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Dot indicators + mobile arrows */}
            <div className="container mx-auto px-4 mt-8 flex items-center justify-between relative z-10">
                {/* Mobile prev */}
                <button
                    onClick={() => handleManualNav(prev)}
                    aria-label="Previous"
                    className="md:hidden w-10 h-10 rounded-full border border-white/15 bg-white/5 text-white flex items-center justify-center"
                >
                    <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Dots */}
                <div className="flex items-center gap-2 mx-auto">
                    {services.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => handleManualNav(() => goTo(i, i > activeIndex ? "right" : "left"))}
                            aria-label={`Go to ${services[i].title}`}
                            className={`transition-all duration-400 rounded-full ${activeIndex === i
                                    ? "w-8 h-2 bg-neon-green shadow-[0_0_8px_#39FF14]"
                                    : "w-2 h-2 bg-white/25 hover:bg-white/50"
                                }`}
                        />
                    ))}
                </div>

                {/* Mobile next */}
                <button
                    onClick={() => handleManualNav(next)}
                    aria-label="Next"
                    className="md:hidden w-10 h-10 rounded-full border border-white/15 bg-white/5 text-white flex items-center justify-center"
                >
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </section>
    )
}
