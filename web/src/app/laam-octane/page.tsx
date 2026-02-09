import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "LAAM (Octane) - Case Study | SherCorp",
    description: "A high-performance e-commerce experience driven by speed and conversion.",
};

export default function LaamOctanePage() {
    return (
        <div className="min-h-screen bg-black text-foreground pt-24 pb-12">
            <div className="container mx-auto px-4">
                <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all" asChild>
                    <Link href="/casestudies" className="flex items-center gap-2 text-muted-foreground hover:text-white">
                        <ArrowLeft size={20} /> Back to Case Studies
                    </Link>
                </Button>

                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="space-y-6">
                        <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium">
                            E-Commerce
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white">LAAM (Octane)</h1>
                        <p className="text-xl text-zinc-400 leading-relaxed">
                            A high-performance e-commerce experience driven by speed and conversion. Redefined the digital storefront with seamless navigation and instant loads.
                        </p>
                    </div>

                    <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-zinc-900">
                        <div className="absolute inset-0 flex items-center justify-center text-zinc-500">
                            {/* Placeholder for actual case study image */}
                            <p>Project Screenshot / Video Placeholder</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { label: "Performance", value: "98%" },
                            { label: "Conversion Uplift", value: "+45%" },
                            { label: "Load Time", value: "0.5s" }
                        ].map((stat, i) => (
                            <div key={i} className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                                <p className="text-sm text-zinc-400">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="prose prose-invert max-w-none">
                        <h2 className="text-2xl font-bold text-white">Project Overview</h2>
                        <p className="text-zinc-400">
                            Detailed case study content coming soon...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
