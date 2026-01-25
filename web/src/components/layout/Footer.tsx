
import Link from "next/link"

export function Footer() {
    return (
        <footer className="sticky bottom-0 -z-10 w-full border-t border-white/10 bg-black pt-20 pb-12 min-h-[50vh] flex flex-col justify-end">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Column 1: Brand */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold tracking-tighter">SherCorp</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Elevating brands through liquid glass aesthetics and data-driven digital strategies.
                        </p>
                    </div>

                    {/* Column 2: Contact */}
                    <div className="space-y-4">
                        <h4 className="font-semibold tracking-tight">Contact</h4>
                        <div className="text-sm text-muted-foreground space-y-2">
                            <p>123 Digital Avenue</p>
                            <p>Tech District, NY 10012</p>
                            <p>+1 (555) 123-4567</p>
                            <p>hello@shercorp.com</p>
                        </div>
                    </div>

                    {/* Column 3: Legal */}
                    <div className="space-y-4">
                        <h4 className="font-semibold tracking-tight">Legal</h4>
                        <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                            <Link href="/disclaimer" className="hover:text-foreground transition-colors">Disclaimer</Link>
                            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
                        </nav>
                    </div>

                    {/* Column 4: Sitemap */}
                    <div className="space-y-4">
                        <h4 className="font-semibold tracking-tight">Sitemap</h4>
                        <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
                            <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
                            <Link href="/about" className="hover:text-foreground transition-colors">About Us</Link>
                            <Link href="/contact" className="hover:text-foreground transition-colors">Contact Us</Link>
                        </nav>
                    </div>
                </div>

                <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} SherCorp. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
