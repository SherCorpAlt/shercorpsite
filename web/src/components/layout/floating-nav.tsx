"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"

// ... imports ...
import { ChevronDown } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    {
        name: "Portfolio",
        href: "/portfolio",
        children: [
            { name: "Park View Islamabad", href: "/portfolio/park-view-islamabad" },
            { name: "Rahman Enclave", href: "/portfolio/rahmanenclave" },
            { name: "Plots for Sale in Rahman Enclave", href: "/portfolio/rahmanenclave/plots-for-sale-in-rahman-enclave" },
        ]
    },
    { name: "About", href: "/about" },
]

export function FloatingNav() {
    const pathname = usePathname()

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
                                <DropdownMenu key={item.name}>
                                    <DropdownMenuTrigger className={cn(
                                        "relative px-4 py-2 text-sm font-medium transition-colors hover:text-white rounded-full flex items-center gap-1 outline-none",
                                        isActive ? "text-black" : "text-muted-foreground"
                                    )}>
                                        {isActive && (
                                            <motion.div
                                                layoutId="nav-pill"
                                                className="absolute inset-0 bg-neon-green rounded-full -z-10"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                        {item.name}
                                        <ChevronDown className="h-3 w-3" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="center" className="bg-black/80 backdrop-blur-xl border-white/10 text-white min-w-[200px]">
                                        {item.children.map((child) => (
                                            <DropdownMenuItem key={child.href} asChild className="focus:bg-white/10 focus:text-white cursor-pointer">
                                                <Link href={child.href}>
                                                    {child.name}
                                                </Link>
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
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
