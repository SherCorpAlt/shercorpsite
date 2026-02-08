"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import { motion } from "framer-motion"
import { ChevronDown, Menu, X } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// navItems moved inside component or handled there


export function Navbar() {
    const pathname = usePathname()
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

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
    ]

    return (
        <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto max-w-5xl">
            <div className="flex items-center justify-between gap-1 p-1 rounded-full border border-white/10 bg-black/50 backdrop-blur-xl shadow-2xl pl-6 pr-2 py-2">
                <Link href="/" className="mr-4 shrink-0">
                    <Image src="/images/shercorp-logo-white.png" alt="SherCorp" width={150} height={35} className="h-6 md:h-[35px] w-auto" />
                </Link>

                <nav className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || (item.children && item.children.some(child => pathname === child.href))

                        if (item.children) {
                            return (
                                <DropdownMenu key={item.name}>
                                    <DropdownMenuTrigger className={cn(
                                        "relative px-4 py-2 text-sm font-medium transition-colors hover:text-white rounded-full flex items-center gap-1 outline-none whitespace-nowrap",
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
                                    "relative px-4 py-2 text-sm font-medium transition-colors hover:text-white rounded-full whitespace-nowrap",
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
                </nav>

                <div className="flex items-center gap-2 pl-2 md:border-l border-white/10 ml-2">
                    <div className="hidden md:block">
                        <ModeToggle />
                    </div>

                    <Link href="/contact" className="hidden md:block ml-2">
                        <button className="bg-white text-black text-sm font-semibold px-4 py-2 rounded-full hover:scale-105 transition-transform whitespace-nowrap">
                            Contact Khawar
                        </button>
                    </Link>

                    {/* Mobile Actions */}
                    <div className="md:hidden flex items-center gap-2">
                        <ModeToggle />
                        <button
                            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    className="md:hidden mt-2 border border-white/10 bg-black/90 backdrop-blur-xl rounded-3xl overflow-hidden p-4"
                >
                    <div className="flex flex-col gap-4">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href || (item.children && item.children.some(child => pathname === child.href))

                            if (item.children) {
                                return (
                                    <div key={item.name} className="flex flex-col gap-2">
                                        <div className={cn(
                                            "text-lg font-semibold px-2",
                                            isActive ? "text-white" : "text-muted-foreground"
                                        )}>
                                            {item.name}
                                        </div>
                                        <div className="pl-4 flex flex-col gap-2 border-l-2 border-white/10 ml-2">
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.href}
                                                    href={child.href}
                                                    className="py-1 text-sm text-muted-foreground hover:text-white transition-colors"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )
                            }

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "text-lg font-semibold px-2 py-1 transition-colors hover:text-primary",
                                        isActive ? "text-white" : "text-muted-foreground"
                                    )}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            )
                        })}
                        <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="mt-2">
                            <button className="w-full bg-white text-black text-sm font-semibold px-4 py-3 rounded-xl hover:scale-105 transition-transform whitespace-nowrap">
                                Contact Khawar
                            </button>
                        </Link>
                    </div>
                </motion.div>
            )}
        </header>
    )
}
