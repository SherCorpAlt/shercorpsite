"use client"

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight, Code, Layout, Smartphone } from "lucide-react"

const projects = [
    {
        title: "Octane Store",
        category: "E-Commerce",
        description: "A high-performance e-commerce experience driven by speed and conversion. Redefined the digital storefront with seamless navigation and instant loads.",
        icon: Smartphone,
        image: "/images/premium-design.jpg", // Using placeholder existing image
        stats: ["98% Performance", "+45% Conversion", "0.5s Load Time"],
        color: "bg-blue-500"
    },
    {
        title: "LAAM Seller Central",
        category: "Enterprise Dashboard",
        description: "Empowering thousands of sellers with a unified, data-driven dashboard. Complex logistics simplified into an intuitive, powerful interface.",
        icon: Layout,
        image: "/images/ai-solutions.jpg", // Using placeholder existing image
        stats: ["10k+ Sellers", "Real-time Analytics", "Automated Workflows"],
        color: "bg-purple-500"
    },
    {
        title: "Wavecomm Telecom",
        category: "Corporate Identity",
        description: "Modernizing telecom infrastructure's digital presence. A sleek, trust-building platform for a nationwide connectivity provider.",
        icon: Code,
        image: "/images/ui-ux-architecture.jpg", // Using placeholder existing image
        stats: ["National Coverage", "B2B Integration", "Service Automation"],
        color: "bg-orange-500"
    }
]

export function WebsiteCaseStudies() {
    return (
        <section className="py-24 bg-background relative z-10">
            <div className="container px-4 mx-auto">
                <div className="mb-24 space-y-4">
                    <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-foreground max-w-4xl">
                        Websites that <span className="text-neon-green">re-defined</span> the industry standard
                    </h2>
                </div>

                <div className="space-y-32">
                    {projects.map((project, index) => (
                        <CaseStudyItem key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

interface Project {
    title: string;
    category: string;
    description: string;
    icon: React.ElementType;
    image: string;
    stats: string[];
    color: string;
}

function CaseStudyItem({ project, index }: { project: Project, index: number }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const isEven = index % 2 === 0

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`flex flex-col md:flex-row gap-12 md:gap-24 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}
        >
            {/* Image Side */}
            <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
                    <div className={`absolute inset-0 ${project.color} opacity-20 blur-[100px]`} />
                    <div className="relative h-full w-full bg-card border border-border backdrop-blur-sm rounded-3xl overflow-hidden">
                        {/* Placeholder for actual screenshot */}
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 space-y-8">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center">
                        <project.icon className="w-6 h-6 text-neon-green" />
                    </div>
                    <span className="text-neon-green font-mono text-sm tracking-wider uppercase">{project.category}</span>
                </div>

                <h3 className="text-4xl md:text-5xl font-bold text-foreground">{project.title}</h3>
                <p className="text-xl text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-border">
                    {project.stats.map((stat: string, i: number) => (
                        <div key={i} className="space-y-1">
                            <div className="w-2 h-2 rounded-full bg-neon-green mb-2" />
                            <p className="text-sm font-medium text-muted-foreground">{stat}</p>
                        </div>
                    ))}
                </div>

                <button className="group flex items-center gap-2 text-foreground font-bold hover:text-neon-green transition-colors mt-8">
                    <span className="border-b border-transparent group-hover:border-neon-green transition-all pt-1">View Case Study</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
            </div>
        </motion.div>
    )
}
