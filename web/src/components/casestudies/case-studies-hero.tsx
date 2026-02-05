"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Play } from "lucide-react"

export function CaseStudiesHero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    })

    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

    return (
        <section ref={containerRef} className="relative h-[80vh] w-full bg-background overflow-hidden">
            <motion.div
                style={{ scale, opacity }}
                className="absolute inset-0 w-full h-full"
            >
                {/* Video Placeholder */}
                <div className="w-full h-full relative bg-gray-900 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] z-10" />

                    {/* Placeholder Pattern */}
                    <div className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
                            backgroundSize: "50px 50px"
                        }}
                    />

                    <div className="flex flex-col items-center gap-6 z-20">
                        <div className="w-24 h-24 rounded-full border-2 border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center group cursor-pointer hover:border-neon-green/50 transition-colors duration-500">
                            <Play className="w-8 h-8 text-white fill-white group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="text-center space-y-2">
                            <p className="text-muted-foreground font-mono text-sm tracking-[0.5em] uppercase">Showreel</p>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground">
                                Impact <span className="text-muted-foreground">In Motion</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
