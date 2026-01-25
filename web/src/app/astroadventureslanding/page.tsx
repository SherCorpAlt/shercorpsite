import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Telescope, GraduationCap, Calendar, Star } from "lucide-react";

export const metadata: Metadata = {
    title: "Astro Adventures | Islamabad Astronomy Society",
    description: "Join Astro Adventures for observation sessions, astronomy lectures, and educational events in Islamabad.",
};

export default function AstroAdventuresPage() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-24 space-y-16">

            {/* Hero */}
            <section className="text-center space-y-6 py-10">
                <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400">
                    <Telescope className="w-6 h-6 mr-2" />
                    <span className="font-semibold">Explore the Cosmos</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-white">
                    ASTRO ADVENTURES
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    A journey to the stars. Hands-on learning experiences, lectures, and observation sessions for students and enthusiasts in Islamabad.
                </p>
                <div className="flex justify-center gap-4">
                    <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white" asChild>
                        <Link href="#register">Register Today</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-950/30" asChild>
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                </div>
            </section>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    {
                        icon: GraduationCap,
                        title: "Educational",
                        desc: "Specially designed lectures and presentations for teachers and students."
                    },
                    {
                        icon: Telescope,
                        title: "Observation",
                        desc: "Hands-on experience with advanced telescopes. Inspect craters on the moon, rings of Saturn, and more."
                    },
                    {
                        icon: Star,
                        title: "Fun Activity",
                        desc: "A fun-filled exciting outdoor activity suitable for students of all ages."
                    },
                    {
                        icon: Calendar,
                        title: "Regular Events",
                        desc: "We catch up almost every week with brilliant minds all across Islamabad."
                    }
                ].map((item, i) => (
                    <Card key={i} className="glass-card border-none bg-purple-900/5 hover:bg-purple-900/10 transition-colors">
                        <CardHeader>
                            <item.icon className="w-8 h-8 text-purple-400 mb-2" />
                            <CardTitle className="text-lg">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Main Content Sections */}
            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <section>
                        <h2 className="text-3xl font-bold mb-4 text-purple-200">Journey With Us</h2>
                        <div className="glass-card p-6 space-y-4">
                            <p className="text-muted-foreground">
                                Our Public Observation Sessions are totally free of cost. Sign up to our mailing list to get:
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500" />Updates about every event</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500" />Special invites for members only events</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500" />Giveaways and goodie bags</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500" />Calendar updates for cosmic events</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-4 text-purple-200">Community</h2>
                        <p className="text-muted-foreground mb-4">
                            Every month the members of Pak Astronomers Islamabad and Islamabad Astronomy Society gather at F-9 Park Islamabad.
                            Meeting is usually held between the 6th and 9th of the lunar month.
                        </p>
                        <p className="text-muted-foreground">
                            Previous events include sessions at COMSATS University Islamabad and Air University, attended by hundreds of students.
                        </p>
                    </section>
                </div>

                <div id="register" className="glass-card p-8 border-purple-500/20 shadow-purple-500/10">
                    <h3 className="text-2xl font-bold mb-2">Host a Session</h3>
                    <p className="text-muted-foreground mb-6">
                        Want to conduct an Astronomy Session at your school? Register today and our team will handle the arrangements.
                    </p>
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Name</label>
                                <input type="text" className="w-full bg-background/50 border border-white/10 rounded-md h-10 px-3" placeholder="Your Name" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Phone</label>
                                <input type="tel" className="w-full bg-background/50 border border-white/10 rounded-md h-10 px-3" placeholder="0300..." />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Institution/Venue</label>
                            <input type="text" className="w-full bg-background/50 border border-white/10 rounded-md h-10 px-3" placeholder="School Name" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Message</label>
                            <textarea className="w-full bg-background/50 border border-white/10 rounded-md min-h-[100px] p-3" placeholder="Tell us about the event..." />
                        </div>
                        <Button className="w-full bg-purple-600 hover:bg-purple-700">Submit Request</Button>
                    </form>
                </div>
            </div>

        </div>
    );
}
