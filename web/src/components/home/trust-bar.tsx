import { Anchor, Triangle, Hexagon, Activity, Award, Box } from "lucide-react"

export function TrustBar() {
    const partners = [
        { icon: Anchor, name: "NEXUS", color: "text-blue-500" },
        { icon: Triangle, name: "VORTEX", color: "text-purple-500" },
        { icon: Hexagon, name: "ECHO", color: "text-emerald-500" },
        { icon: Activity, name: "PULSE", color: "text-red-500" },
        { icon: Award, name: "ELITE", color: "text-amber-500" },
        { icon: Box, name: "CUBE", color: "text-cyan-500" },
    ]

    return (
        <section className="py-16 border-y border-white/5 bg-background/20 backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <p className="text-center text-xs font-semibold text-muted-foreground mb-10 uppercase tracking-[0.3em]">
                    Trusted by Industry Leaders
                </p>
                <div className="flex flex-wrap justify-center gap-12 md:gap-20 items-center">
                    {partners.map((partner, i) => (
                        <div key={i} className="group flex items-center gap-2 cursor-pointer transition-all duration-300 filter grayscale hover:grayscale-0 opacity-50 hover:opacity-100 hover:scale-110">
                            <partner.icon className={`w-8 h-8 ${partner.color}`} />
                            <span className="text-xl font-bold tracking-tighter">{partner.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
