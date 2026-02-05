"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    })

    // 3D Portal Effect transforms
    // 3D Portal Effect transforms
    // 3D Portal Effect transforms
    const scale = useTransform(scrollYProgress, [0, 1], [1, 15])
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

    const boxScale = useTransform(scrollYProgress, [0, 1], [0.8, 2])
    const boxOpacity = useTransform(scrollYProgress, [0, 0.6], [0.6, 0])

    return (
        <section ref={containerRef} className="relative h-[120vh] w-full bg-black">
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden perspective-[1000px]">
                {/* Main Title - Fades out as you enter portal */}
                <motion.div
                    style={{ opacity }}
                    className="z-20 text-center space-y-4 px-4"
                >
                    <div className="inline-block px-6 py-2 rounded-full border border-neon-green/50 bg-black/60 backdrop-blur-md text-neon-green text-base md:text-lg font-bold mb-8 animate-pulse-green shadow-[0_0_15px_rgba(57,255,20,0.2)]">
                        The Future of Digital is Liquid
                    </div>
                    <div className="relative w-64 h-24 md:w-[600px] md:h-[200px] mb-8 mx-auto">
                        <Image
                            src="/images/shercorp-logo-white.png"
                            alt="SherCorp Logo"
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority
                        />
                    </div>
                    <p className="text-xl md:text-2xl text-muted-foreground/80 max-w-2xl mx-auto">
                        Where <span className="text-neon-green">Intelligence</span> flows into <span className="text-neon-green">Design</span>.
                    </p>
                </motion.div>

                {/* 3D Portal Images */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {/* Center Image - The "Portal" Destination */}
                    <motion.div
                        style={{ scale: scale }}
                        className="absolute inset-0 w-full h-full z-0"
                    >
                        <div className="w-full h-full relative overflow-hidden shadow-[0_0_100px_rgba(57,255,20,0.2)]">
                            <div className="absolute inset-0 bg-black/50 z-20" />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,black_100%)] z-20" />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/90 z-20" />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/90 z-20" />
                            <Image src="/ai-network.png" alt="Portal Center" fill className="object-cover" priority />
                        </div>
                    </motion.div>

                    {/* Floating Elements acting as depth markers */}
                    {[
                        { src: "/portfolio/portfolio-1.jpg", x: "-30vw", y: "-10vh", z: 100, rotate: -5 },
                        { src: "/portfolio/portfolio-2.jpg", x: "35vw", y: "15vh", z: 50, rotate: 5 },
                        { src: "/portfolio/portfolio-3.jpg", x: "-25vw", y: "25vh", z: 150, rotate: -2 },
                        { src: "/portfolio/portfolio-4.jpg", x: "28vw", y: "-20vh", z: 75, rotate: 3 },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            style={{
                                x: item.x,
                                y: item.y,
                                rotate: item.rotate,
                                scale: boxScale,
                                opacity: boxOpacity
                            }}
                            className="absolute w-[200px] h-[300px] rounded-xl overflow-hidden glass-card border border-white/5 opacity-60 grayscale hover:grayscale-0 hover:!opacity-100 transition-all duration-500 pointer-events-auto z-10"
                        >
                            <div className="w-full h-full transition-transform duration-500 hover:scale-105">
                                <Image src={item.src} alt="Floating Work" fill className="object-cover" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Scroll Indicator */}
                <motion.button
                    style={{ opacity }}
                    onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                    className="absolute bottom-10 flex flex-col items-center gap-2 cursor-pointer z-50 hover:scale-110 transition-transform"
                >
                    <div className="animate-bounce p-2 rounded-full border border-neon-green/20 bg-black/20 backdrop-blur-sm">
                        <ChevronDown className="w-6 h-6 text-neon-green" />
                    </div>
                    <div className="w-px h-16 bg-gradient-to-b from-neon-green via-neon-green/50 to-transparent" />
                </motion.button>
            </div>
        </section>
    )
}
