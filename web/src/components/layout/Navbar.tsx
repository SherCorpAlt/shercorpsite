"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// navItems moved inside component or handled there


export function Navbar() {
    const pathname = usePathname()

    // Expanded navItems with hierarchy
    const navItems = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        {
            name: "Portfolio",
            href: "/portfolio", // Placeholder, trigger for dropdown
            children: [
                { name: "Park View Islamabad", href: "/portfolio/park-view-islamabad" },
                { name: "Rahman Enclave", href: "/portfolio/rahmanenclave" },
                { name: "Plots for Sale in Rahman Enclave", href: "/portfolio/rahmanenclave/plots-for-sale-in-rahman-enclave" },
            ]
        },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/5 backdrop-blur-md supports-[backdrop-filter]:bg-background/5">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter">
                    <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">SherCorp</span>
                </Link>
                <nav className="hidden md:flex gap-6 items-center">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || (item.children && item.children.some(child => pathname === child.href))

                        if (item.children) {
                            return (
                                <DropdownMenu key={item.name}>
                                    <DropdownMenuTrigger className={cn(
                                        "relative flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary outline-none",
                                        isActive ? "text-foreground" : "text-muted-foreground"
                                    )}>
                                        {item.name}
                                        <ChevronDown className="h-4 w-4" />
                                        {isActive && (
                                            <motion.div
                                                layoutId="navbar-indicator"
                                                className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-neon-green"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="start">
                                        {item.children.map((child) => (
                                            <DropdownMenuItem key={child.href} asChild>
                                                <Link href={child.href} className="w-full cursor-pointer">
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
                                    "relative text-sm font-medium transition-colors hover:text-primary",
                                    isActive ? "text-foreground" : "text-muted-foreground"
                                )}
                            >
                                {item.name}
                                {isActive && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-neon-green"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </Link>
                        )
                    })}
                </nav>
                <div className="flex items-center gap-4">
                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}
