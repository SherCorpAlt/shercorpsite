"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Instagram, Linkedin, Twitter, ArrowRight } from "lucide-react"

const socialProjects = [
    // Main feature
    {
        title: "TechFlow Growth",
        platform: "LinkedIn",
        growth: "+240% Followers",
        image: "/images/seo-sem-gem.jpg", // Placeholder
        featured: true,
        color: "bg-blue-600"
    },
    // Grid items
    {
        title: "Fashion Week",
        platform: "Instagram",
        growth: "2.5M Reach",
        image: "/images/premium-design.jpg", // Placeholder
        featured: false,
        color: "bg-pink-600"
    },
    {
        title: "Startup Launch",
        platform: "Twitter/X",
        growth: "50k Engagements",
        image: "/images/ai-solutions.jpg",
        featured: false,
        color: "bg-cyan-600"
    },
    {
        title: "Food Fest",
        platform: "TikTok",
        growth: "Viral Series",
        image: "/images/ui-ux-architecture.jpg",
        featured: false,
        color: "bg-red-600"
    },
    {
        title: "Corp Culture",
        platform: "LinkedIn",
        growth: "Top Voice",
        image: "/images/seo-sem-gem.jpg",
        featured: false,
        color: "bg-blue-500"
    }
]

export function SocialMediaCaseStudies() {
    return (
        <section className="py-24 bg-background relative z-10 border-t border-border">
            <div className="container px-4 mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-6xl font-black text-foreground mb-4">
                        Socials that create <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-emerald-500">
                            Impact with visuals
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Visuals that drive engagement and growth across every channel.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {/* Main Featured Item - Spans 2 columns, 2 rows */}
                    <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl border border-border bg-card">
                        <Image
                            src={socialProjects[0].image}
                            alt={socialProjects[0].title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-40"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

                        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase mb-4 border border-blue-500/20">
                                <Linkedin className="w-3 h-3" /> {socialProjects[0].platform}
                            </div>
                            <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-2">{socialProjects[0].title}</h3>
                            <div className="text-2xl md:text-4xl font-bold text-foreground/80">{socialProjects[0].growth}</div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="mt-6 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                            >
                                View Strategy <ArrowRight className="w-4 h-4" />
                            </motion.div>
                        </div>
                    </div>

                    {/* Small Grid Items */}
                    {socialProjects.slice(1).map((project, i) => (
                        <div key={i} className="relative group overflow-hidden rounded-3xl border border-border bg-card">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-40"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <div className={`inline-block w-8 h-1 mb-3 ${project.color}`} />
                                <h4 className="text-xl font-bold text-foreground mb-1">{project.title}</h4>
                                <p className="text-sm font-medium text-foreground/70">{project.growth}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
