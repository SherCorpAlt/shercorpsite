"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"

// ... imports ...
import { ChevronDown } from "lucide-react"
// DropdownMenu imports removed

interface NavItem {
    name: string;
    href: string;
    children?: { name: string; href: string }[];
}

const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    {
        name: "Case Studies",
        href: "/casestudies",
        children: [
            { name: "Rahman Enclave", href: "/portfolio/rahmanenclave" },
            { name: "LAAM (Octane)", href: "/laam-octane" },
            { name: "LAAM Seller Central", href: "/laamsellercentral" },
            { name: "Wavecomm", href: "/Wavecomm" },
        ]
    },
    { name: "About", href: "/about" },
]

export function FloatingNav() {
    const pathname = usePathname()
    const [hoveredItem, setHoveredItem] = React.useState<string | null>(null)

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center gap-1 p-1 rounded-full border border-white/10 bg-black/50 backdrop-blur-xl shadow-2xl pl-6 pr-2 py-2">
                <Link href="/" className="mr-4">
                    <Image src="/images/shercorp-logo-white.png" alt="SherCorp" width={120} height={30} className="h-6 w-auto" />
                </Link>

                <div className="flex items-center gap-1">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || (item.children && item.children.some(child => pathname === child.href))

                        if (item.children) {
                            return (
                                <div
                                    key={item.name}
                                    className="relative"
                                    onMouseEnter={() => setHoveredItem(item.name)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                >
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "relative px-4 py-2 text-sm font-medium transition-colors hover:text-white rounded-full flex items-center gap-1 outline-none",
                                            isActive ? "text-black" : "text-muted-foreground"
                                        )}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="nav-pill"
                                                className="absolute inset-0 bg-neon-green rounded-full -z-10"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                        {item.name}
                                        <ChevronDown className="h-3 w-3" />
                                    </Link>

                                    <AnimatePresence>
                                        {hoveredItem === item.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 mt-2 min-w-[200px] bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-xl p-1 z-50"
                                            >
                                                {item.children.map((child) => (
                                                    <Link
                                                        key={child.href}
                                                        href={child.href}
                                                        className="block px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                                    >
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            )
                        }

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "relative px-4 py-2 text-sm font-medium transition-colors hover:text-white rounded-full",
                                    isActive ? "text-black" : "text-muted-foreground"
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-pill"
                                        className="absolute inset-0 bg-neon-green rounded-full -z-10"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                {item.name}
                            </Link>
                        )
                    })}
                </div>

                <div className="ml-2 pl-2 border-l border-white/10">
                    <ModeToggle />
                </div>

                <Link href="/contact" className="ml-2">
                    <button className="bg-white text-black text-sm font-semibold px-4 py-2 rounded-full hover:scale-105 transition-transform">
                        Let&apos;s Talk
                    </button>
                </Link>
            </div>
        </nav>
    )
}
