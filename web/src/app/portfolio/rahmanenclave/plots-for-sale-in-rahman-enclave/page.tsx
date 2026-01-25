import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Plots for Sale in Rahman Enclave | Rahman Enclave Islamabad",
  description: "Plots for Sale In Rahman Enclave - Buy Directly from the Company. CDA NOC Approved. 5, 8, and 10 Marla plots available.",
};

export default function PlotsForSalePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 space-y-12">
      <section className="text-center space-y-4">
        <Badge variant="outline" className="mb-2 neon-border text-neon-green">Available Now</Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
          Plots for Sale at Rahman Enclave
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Secure your future with premium residential plots in a CDA NOC approved gated community. 
          limited options available.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="glass-card border-none">
          <CardHeader>
            <CardTitle className="text-2xl text-neon-green">5 Marla (25 x 50)</CardTitle>
            <CardDescription>Ideal for small families</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              The highest in-demand plot size. Ideal for small families, allowing for up to 5 bedrooms with basement construction.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold">Status:</span>
              <Badge variant="destructive">Limited Availability</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-none">
          <CardHeader>
            <CardTitle className="text-2xl text-neon-green">8 Marla (30 x 60)</CardTitle>
            <CardDescription>Most sought-after size</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              The most common and flexible plot size in Islamabad. Offers a comfortable family living style without compromising on space.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold">Status:</span>
              <Badge variant="destructive">Selling Fast</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-none">
          <CardHeader>
            <CardTitle className="text-2xl text-neon-green">10 Marla (35 x 70)</CardTitle>
            <CardDescription>Preferred Category</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              The highest number of plots at Rahman Enclave fall into this category. The most preferred option for construction.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold">Status:</span>
              <Badge variant="default" className="bg-neon-green text-black hover:bg-neon-green/80">Available</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="glass-card p-8 rounded-2xl border border-white/10 mt-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Larger Sizes Available</h2>
            <p className="text-muted-foreground">
              We also offer 14 Marla (40x80) and 1 Kanal plots for luxury living. As the project matures, more larger homes are being constructed.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Lower price per marla for larger plots</li>
              <li>Ideal for spacious luxury villas</li>
              <li>Exclusive locations available</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 items-start md:items-end">
             <div className="text-right">
                <p className="font-semibold text-lg">Contact Khawar Ali Sher</p>
                <p className="text-neon-green text-xl font-mono">0321 5113643</p>
             </div>
             <Button size="lg" className="w-full md:w-auto bg-neon-green text-black hover:bg-neon-green/90" asChild>
                <Link href="tel:03215113643">Call Now to Book</Link>
             </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
