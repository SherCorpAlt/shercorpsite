"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"

export function ContactSection() {
    return (
        <section className="py-24 relative overflow-hidden" id="contact">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-green/20 blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="mx-auto px-4 w-[90%] md:w-[40%]">
                <div className="text-center mb-12 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Get in Touch</h2>
                    <p className="text-muted-foreground text-lg">
                        Ready to accelerate your digital growth?
                    </p>
                </div>

                <Card className="glass-card p-8 backdrop-blur-2xl border-white/20">
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">Name</label>
                            <Input id="name" placeholder="John Doe" required className="bg-white/5 border-white/10 focus:border-neon-green/50 placeholder:text-muted-foreground/50" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                            <Input id="email" type="email" placeholder="john@example.com" required className="bg-white/5 border-white/10 focus:border-neon-green/50 placeholder:text-muted-foreground/50" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">Message</label>
                            <Textarea id="message" placeholder="Tell us about your project..." required className="min-h-[150px] bg-white/5 border-white/10 focus:border-neon-green/50 placeholder:text-muted-foreground/50" />
                        </div>

                        <Button type="submit" className="w-full bg-neon-green text-black font-bold hover:bg-neon-green/80 transition-all duration-300 animate-pulse-green shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_30px_rgba(57,255,20,0.5)]">
                            Send Message
                        </Button>
                    </form>
                </Card>
            </div>
        </section>
    )
}
