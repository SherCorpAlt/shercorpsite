import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, MapPin, Building2, Trees } from "lucide-react";

export const metadata: Metadata = {
    title: "Rahman Enclave | CDA NOC Approved Housing Society",
    description: "Rahman Enclave is a CDA NOC approved project located in Zone IV of Islamabad. Ready for construction plots with flexible payment plans.",
};

export default function RahmanEnclavePage() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-24 space-y-16">
            {/* Hero Section */}
            <section className="relative rounded-3xl overflow-hidden glass-card p-8 md:p-16 text-center space-y-6">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-green/5 to-transparent pointer-events-none" />
                <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-white">
                    RAHMAN ENCLAVE
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto">
                    The Premier Gated Community in Zone IV Islamabad
                </p>
                <div className="flex flex-wrap gap-4 justify-center pt-4">
                    <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-neon-green/30 bg-neon-green/10 text-neon-green text-sm font-medium">
                        <CheckCircle2 size={16} /> CDA NOC Approved
                    </span>
                    <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white text-sm font-medium">
                        <Building2 size={16} /> Ready for Possession
                    </span>
                </div>
            </section>

            {/* Payment Plan & Investment */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-neon-green">Investment Potential</h2>
                    <div className="prose prose-invert">
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Rahman Enclave offers a unique opportunity to purchase ready-for-construction plots.
                            With its prime location, plot prices are projected to give a return on investment
                            in excess of <strong>20% to 30%</strong> within the next year.
                        </p>
                        <p className="text-muted-foreground mt-4">
                            The project is 100% completed with families already residing inside. Prices have
                            seen significant appreciation recently.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            "Fully developed plots",
                            "Underground water supply",
                            "IESCO NOC Approved",
                            "Electric Meters Installed",
                            "Community Mosque",
                            "Gated Secure Community"
                        ].map((feature, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                                <CheckCircle2 className="text-neon-green h-5 w-5" />
                                <span className="text-sm">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <Card className="glass-card border-none h-full">
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Link href="/portfolio/rahmanenclave/plots-for-sale-in-rahman-enclave" className="block">
                            <div className="p-4 rounded-xl border border-neon-green/20 bg-neon-green/5 hover:bg-neon-green/10 transition-colors group cursor-pointer">
                                <h3 className="text-lg font-semibold text-neon-green group-hover:underline">View Plots for Sale</h3>
                                <p className="text-sm text-muted-foreground mt-1">Check 5, 8, and 10 Marla availability</p>
                            </div>
                        </Link>

                        <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                            <h3 className="text-lg font-semibold mb-2">Contact for Prices</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Prices change frequently due to high demand. Call now for the latest rates.
                            </p>
                            <Button className="w-full bg-white text-black hover:bg-white/90" asChild>
                                <Link href="tel:03215113643">Call 0321 5113643</Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Amenities */}
            <section className="space-y-8">
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold">Amenities & Features</h2>
                    <div className="h-px flex-1 bg-gradient-to-r from-neon-green/50 to-transparent ml-6"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <Card className="glass-card border-none">
                        <CardHeader>
                            <Trees className="w-10 h-10 text-neon-green mb-2" />
                            <CardTitle>Sports Complex & Parks</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-sm">
                                Featuring a family park, exclusive sports complex for residents, open-air gym, and planned female-exclusive gym facilities.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="glass-card border-none">
                        <CardHeader>
                            <div className="w-10 h-10 rounded-full bg-neon-green/20 flex items-center justify-center mb-2 text-neon-green font-bold text-lg">🕌</div>
                            <CardTitle>Naseem Masjid</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-sm">
                                A spacious central mosque named "Naseem Masjid", fully operational for daily and Friday prayers.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="glass-card border-none">
                        <CardHeader>
                            <MapPin className="w-10 h-10 text-neon-green mb-2" />
                            <CardTitle>Grand Monument</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-sm">
                                A grand monument on the main roundabout, symbolizing a flower with Islamic architectural elements.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}
