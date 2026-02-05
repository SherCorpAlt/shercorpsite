"use client"

import * as React from "react"
import Link from "next/link"
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
        { name: "Contact", href: "/contact" },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/5 backdrop-blur-md supports-[backdrop-filter]:bg-background/5">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter">
                    <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">SherCorp</span>
                </Link>
                <nav className="hidden min-[500px]:flex gap-6 items-center">
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
                    {/* Mobile Menu Toggle */}
                    <button
                        className="min-[500px]:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="min-[500px]:hidden border-b border-white/10 bg-background/95 backdrop-blur-md overflow-hidden"
                >
                    <div className="container py-6 flex flex-col gap-6 px-6">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href || (item.children && item.children.some(child => pathname === child.href))

                            if (item.children) {
                                return (
                                    <div key={item.name} className="flex flex-col gap-3">
                                        <div className={cn(
                                            "text-lg font-semibold",
                                            isActive ? "text-foreground" : "text-muted-foreground"
                                        )}>
                                            {item.name}
                                        </div>
                                        <div className="pl-4 flex flex-col gap-3 border-l-2 border-white/10 ml-1">
                                            {item.children.map((child) => {
                                                const isChildActive = pathname === child.href
                                                return (
                                                    <Link
                                                        key={child.href}
                                                        href={child.href}
                                                        className={cn(
                                                            "text-sm font-medium transition-colors hover:text-primary",
                                                            isChildActive ? "text-foreground" : "text-muted-foreground"
                                                        )}
                                                        onClick={() => setMobileMenuOpen(false)}
                                                    >
                                                        {child.name}
                                                    </Link>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            }

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "text-lg font-semibold transition-colors hover:text-primary",
                                        isActive ? "text-foreground" : "text-muted-foreground"
                                    )}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            )
                        })}
                    </div>
                </motion.div>
            )}
        </header>
    )
}
