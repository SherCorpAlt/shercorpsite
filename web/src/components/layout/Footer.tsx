
import Link from "next/link"
import Image from "next/image"

export function Footer() {
    return (
        <footer className="relative w-full border-t border-white/10 bg-black pt-20 pb-12 flex flex-col justify-end z-40">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Column 1: Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="block w-40">
                            <Image
                                src="/images/shercorp-logo-white.png"
                                alt="SherCorp Logo"
                                width={160}
                                height={60}
                                className="w-full h-auto object-contain"
                            />
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Elevating brands through liquid glass aesthetics and data-driven digital strategies.
                        </p>
                    </div>

                    {/* Column 2: Contact */}
                    <div className="space-y-4">
                        <h4 className="font-semibold tracking-tight">Contact</h4>
                        <div className="text-sm text-muted-foreground space-y-2">
                            <p>Email: <a href="mailto:contactme@khawarsher.com" className="hover:text-white transition-colors">contactme@khawarsher.com</a></p>
                            <p>Whatsapp: <a href="https://wa.me/923215113643" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">0321 5113643</a></p>
                        </div>
                    </div>

                    {/* Column 3: Legal */}
                    <div className="space-y-4">
                        <h4 className="font-semibold tracking-tight">Legal</h4>
                        <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                            <Link href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                            <Link href="/disclaimer" className="hover:text-foreground transition-colors">Disclaimer</Link>
                            <Link href="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link>
                        </nav>
                    </div>

                    {/* Column 4: Sitemap */}
                    <div className="space-y-4">
                        <h4 className="font-semibold tracking-tight">Sitemap</h4>
                        <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
                            <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
                            <Link href="/casestudies" className="hover:text-foreground transition-colors">Case Studies</Link>
                            <Link href="/contact" className="hover:text-foreground transition-colors">Contact Khawar</Link>
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
