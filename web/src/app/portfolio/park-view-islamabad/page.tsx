import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BedDouble, CheckCircle2, Home } from "lucide-react";

export const metadata: Metadata = {
    title: "Park View Islamabad | 5 Marla House for Sale | Vision Group",
    description: "Plots and houses for Sale in Park View Islamabad. Ready Made 5 Marla House for Sale with possession. Developed by Vision Group.",
};

export default function ParkViewPage() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-24 space-y-16">

            {/* Hero */}
            <section className="text-center space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
                    PARK VIEW CITY <br />
                    <span className="text-3xl md:text-5xl font-light text-muted-foreground">ISLAMABAD</span>
                </h1>
                <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
                    The most sought-after property aimed at becoming a green and healthy society. Located on the foothills of Margalla National Park.
                </p>
            </section>

            {/* Main Feature */}
            <section className="glass-card p-1 bg-gradient-to-br from-neon-green/20 via-transparent to-transparent rounded-3xl overflow-hidden">
                <div className="bg-black/40 backdrop-blur-md p-8 md:p-12 rounded-[22px]">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <Badge className="bg-neon-green text-black hover:bg-neon-green/90">Featured Listing</Badge>
                            <h2 className="text-4xl font-bold">5 Marla Houses for Sale</h2>
                            <p className="text-lg text-muted-foreground">
                                We currently have an inventory of 5 Marla Houses ready for immediate possession. These are fully built and semi-furnished options perfect for modern families.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "3 or 4 Bed Room Options",
                                    "CDA NOC Approved Design",
                                    "Ready for Immediate Possession",
                                    "Fully developed sector with all amenities",
                                    "Gated & Secure Community"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-neon-green/10 flex items-center justify-center text-neon-green">
                                            <CheckCircle2 size={16} />
                                        </div>
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-4">
                                <Button size="lg" className="bg-neon-green text-black hover:bg-neon-green/90 w-full md:w-auto" asChild>
                                    <Link href="tel:03215113643">Contact for Price: 0321 5113643</Link>
                                </Button>
                            </div>
                        </div>

                        <div className="relative aspect-square md:aspect-auto h-full min-h-[300px] rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center p-8 text-center space-y-4">
                            <Home className="w-24 h-24 text-white/20" />
                            <h3 className="text-2xl font-semibold">Vision Group</h3>
                            <p className="text-sm text-muted-foreground">
                                Developed by Vision Group under the leadership of Aleem Khan. Known for delivering exceptional masterpieces with top-notch horticulture and infrastructure.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Details Grid */}
            <div className="grid md:grid-cols-3 gap-6">
                <Card className="glass-card border-none">
                    <CardHeader><CardTitle>Master Plan</CardTitle></CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            Designed with a curvilinear concept that respects the natural layout of the land. The beautiful curves and bends provide scenic views of the Margalla Hills.
                        </p>
                    </CardContent>
                </Card>
                <Card className="glass-card border-none">
                    <CardHeader><CardTitle>Location</CardTitle></CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            Located in the scenic foothills of Margalla National Park. Accessible via a dedicated 400 FT highway connecting to every major destination in the twin cities.
                        </p>
                    </CardContent>
                </Card>
                <Card className="glass-card border-none">
                    <CardHeader><CardTitle>Eco-Friendly</CardTitle></CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            An amazing example of self-sustainable eco-friendly development. Envisioned to be a green housing society with lush green adjoining areas.
                        </p>
                    </CardContent>
                </Card>
            </div>

        </div>
    );
}
