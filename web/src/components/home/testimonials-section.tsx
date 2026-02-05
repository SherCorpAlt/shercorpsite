import { Quote, Star } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

const testimonials = [
    {
        content: "SherCorp's AI-driven strategies didn't just meet our expectations—they utterly shattered them. We saw a 200% ROI within the first quarter.",
        author: "Alex Rivera",
        role: "CEO, TechStart",
        avatar: "AR",
        className: "md:col-span-2 md:row-span-2",
    },
    {
        content: "The most cost-effective growth partner we've ever worked with. Their GEM approach put us on the top of AI search results.",
        author: "Sarah Chen",
        role: "Marketing Director, RetailFlow",
        avatar: "SC",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        content: "Stunning visuals matched with high-performance code. Our conversion rates increased by 40% immediately after the redesign.",
        author: "James Wilson",
        role: "Founder, CreativeLabs",
        avatar: "JW",
        className: "md:col-span-1 md:row-span-1",
    },
]

export function TestimonialsSection() {
    return (
        <section className="py-24 container mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Client Success</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Real results driven by data and design.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
                {testimonials.map((t, i) => (
                    <div key={i} className={cn("glass-card p-8 rounded-2xl flex flex-col justify-between hover:bg-white/5 transition-colors", t.className)}>
                        <div className="space-y-4">
                            <Quote className="w-10 h-10 text-neon-green/50" />
                            <p className={cn("font-medium text-foreground/90 leading-relaxed", i === 0 ? "text-2xl" : "text-lg")}>
                                &quot;{t.content}&quot;
                            </p>
                        </div>

                        <div className="mt-8 flex items-center gap-4">
                            <Avatar className="h-12 w-12 border border-white/10">
                                <AvatarFallback className="bg-neon-green/10 text-neon-green">{t.avatar}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-bold">{t.author}</p>
                                <p className="text-sm text-muted-foreground">{t.role}</p>
                            </div>
                            <div className="ml-auto flex gap-0.5 text-neon-green">
                                {Array.from({ length: 5 }).map((_, j) => (
                                    <Star key={j} className="w-4 h-4 fill-current" />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
