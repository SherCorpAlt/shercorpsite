import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ChevronDown, PhoneCall } from "lucide-react";

export const metadata: Metadata = {
  title: "Plots for Sale in Rahman Enclave | Rahman Enclave Islamabad",
  description: "Buy 5, 8, 10, 14 Marla & 1 Kanal plots directly from the company. CDA NOC Approved, possession ready plots in Rahman Enclave Islamabad.",
};

export default function PlotsForSalePage() {
  return (
    <div className="min-h-screen bg-black text-foreground pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/portfolio/rahmanenclave/rahman-enclave-hero.jpg"
            alt="Rahman Enclave Aerial View"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
        </div>

        <div className="container relative z-10 px-4 text-center space-y-6 max-w-4xl mx-auto mt-16">
          <Badge variant="outline" className="mb-2 neon-border text-neon-green bg-black/50 backdrop-blur-sm">Premium Availability</Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white drop-shadow-lg">
            Plots for Sale at Rahman Enclave
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto drop-shadow-md">
            Secure your future with premium residential plots in a CDA NOC approved gated community. 
            Limited possession-ready options available.
          </p>
          <div className="pt-4">
             <Button size="lg" className="bg-neon-green text-black hover:bg-neon-green/90 font-semibold" asChild>
                <Link href="tel:03215113643">Call for Booking Inquiries</Link>
             </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 space-y-24">
        
        {/* 5 Marla Card */}
        <section className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
                <Image src="/portfolio/rahmanenclave/rahman-enclave-family-park.jpg" alt="5 Marla Plots Rahman Enclave" fill className="object-cover" />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
                <Badge className="bg-zinc-800 text-white hover:bg-zinc-700 border-none">Highest Demand</Badge>
                <h2 className="text-3xl md:text-5xl font-bold text-white">5 Marla (25 x 50)</h2>
                <p className="text-lg text-zinc-300 leading-relaxed">
                    Ideal for smaller families that have a limited budget. Build your dream home without compromising on community living standards.
                </p>
                <ul className="space-y-3">
                    {[
                        "CDA NOC Approved layouts and building plans are available with the BCD department for details.",
                        "Possession ready plots are available.",
                        "Plots near to school plot, Mosque and Markets are available."
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-zinc-300">
                            <CheckCircle2 className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <div className="pt-4 p-6 rounded-xl border border-neon-green/20 bg-neon-green/5">
                    <p className="font-semibold text-white mb-4">5 Marla plots are limited, book your plot now.</p>
                    <Button className="w-full sm:w-auto bg-neon-green text-black hover:bg-neon-green/90" asChild>
                        <Link href="tel:03215113643"><PhoneCall className="w-4 h-4 mr-2" /> Book 5 Marla Plot</Link>
                    </Button>
                </div>
            </div>
        </section>

        {/* 8 Marla Card */}
        <section className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
                <Badge className="bg-zinc-800 text-white hover:bg-zinc-700 border-none">Most Popular</Badge>
                <h2 className="text-3xl md:text-5xl font-bold text-white">8 Marla (30 x 60)</h2>
                <p className="text-lg text-zinc-300 leading-relaxed">
                    Most popular size in Islamabad, Perfect blend of size vs budget balance. The ideal family living house.
                </p>
                <ul className="space-y-3">
                    {[
                        "Make up to 8 bedrooms in a spacious layout.",
                        "Design as per CDA ByLaws with NOC from CDA.",
                        "Fast pace of possession and construction in the area."
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-zinc-300">
                            <CheckCircle2 className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <div className="pt-4 p-6 rounded-xl border border-white/10 bg-white/5">
                    <p className="font-semibold text-white mb-4">Limited plots left, buy your plot as soon as possible.</p>
                    <Button variant="outline" className="w-full sm:w-auto border-neon-green text-neon-green hover:bg-neon-green hover:text-black" asChild>
                        <Link href="tel:03215113643"><PhoneCall className="w-4 h-4 mr-2" /> Buy 8 Marla Plot</Link>
                    </Button>
                </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/portfolio/rahmanenclave/rahman-enclave-main-road.jpg" alt="8 Marla Plots Rahman Enclave" fill className="object-cover" />
            </div>
        </section>

        {/* 10 Marla Card - MUST STAND OUT */}
        <section className="relative p-8 md:p-12 rounded-3xl overflow-hidden shadow-2xl border border-neon-green/30">
            <div className="absolute inset-0 z-0">
                <Image src="/portfolio/rahmanenclave/rahman-enclave-monument.jpg" alt="10 Marla Plot Options" fill className="object-cover opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 via-black/80 to-black/90" />
            </div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                    <Badge className="bg-neon-green text-black border-none font-bold">Premium Choice</Badge>
                    <h2 className="text-3xl md:text-5xl font-bold text-white">10 Marla (35 x 70)</h2>
                    <p className="text-xl font-medium text-neon-green">
                        Designed for affordable luxury living.
                    </p>
                    <ul className="space-y-3">
                        {[
                            "Close to Park, Close to Mosque and near to Market options available.",
                            "Only Khawar Sher can provide plots at discount from market rates.",
                            "Design and construction options are also available."
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-zinc-200">
                                <CheckCircle2 className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="pt-6">
                        <p className="font-semibold text-white mb-4 text-lg">Contact us for ready made houses as well as grey structure ready options.</p>
                        <Button size="lg" className="w-full sm:w-auto bg-neon-green text-black hover:bg-neon-green/90 font-bold" asChild>
                            <Link href="tel:03215113643"><PhoneCall className="w-5 h-5 mr-2" /> Contact for 10 Marla Details</Link>
                        </Button>
                    </div>
                </div>
                <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                    <Image src="/portfolio/rahmanenclave/rahman-enclave-park-view-1.jpg" alt="10 Marla Affordable Luxury" fill className="object-cover" />
                </div>
            </div>
        </section>

        {/* 14 Marla and 1 Kanal Card */}
        <section className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
                <Image src="/portfolio/rahmanenclave/rahman-enclave-central-mosque.jpg" alt="14 Marla & 1 Kanal Plots" fill className="object-cover" />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
                <Badge className="bg-zinc-800 text-white hover:bg-zinc-700 border-none">Executive Living</Badge>
                <h2 className="text-3xl md:text-5xl font-bold text-white">14 Marla & 1 Kanal</h2>
                <p className="text-lg text-zinc-300 leading-relaxed">
                    Luxury living in the perfect CDA NOC Approved Gated Community of Islamabad. 
                </p>
                <ul className="space-y-3">
                    {[
                        "Only society to not get any notice or problem from CDA on Lehtrar Road.",
                        "Developed and ready to move in options available.",
                        "Corner plots on 50ft and 60ft roads available on discount rates from the market."
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-zinc-300">
                            <CheckCircle2 className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <div className="pt-4">
                    <Button variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10" asChild>
                        <Link href="tel:03215113643"><PhoneCall className="w-4 h-4 mr-2" /> Enquire About Large Plots</Link>
                    </Button>
                </div>
            </div>
        </section>

        {/* SEO FAQs Section */}
        <section className="pt-16 pb-12 border-t border-zinc-800">
            <div className="text-center mb-12 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Frequently Asked Questions</h2>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                    Find out everything you need to know about investing in Rahman Enclave, from CDA approvals to available plot sizes.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {[
                    {
                        q: "Is Rahman Enclave a CDA NOC Approved society?",
                        a: "Yes, Rahman Enclave is a fully CDA NOC Approved Gated Community. It is the only society on Lehtrar Road not to receive any notice or face issues from the CDA, offering complete peace of mind for buyers."
                    },
                    {
                        q: "What plot sizes are available in Rahman Enclave?",
                        a: "We offer a variety of plot sizes to suit different needs and budgets, including 5 Marla (25x50), 8 Marla (30x60), 10 Marla (35x70), 14 Marla (40x80), and 1 Kanal."
                    },
                    {
                        q: "Are building plans available for smaller plots?",
                        a: "Yes! For example, 5 Marla plots have CDA approved layouts and building plans available with the BCD department. You can build comfortably, including up to a 5-bedroom layout with a basement."
                    },
                    {
                        q: "Do you have ready-made houses or only plots?",
                        a: "We offer possession-ready plots across all sizes. Additionally, for sizes like 10 Marla, we have ready-made houses as well as grey structure options available for purchase."
                    },
                    {
                        q: "Why is the 8 Marla size so popular?",
                        a: "The 8 Marla (30x60) is the most popular size in Islamabad because it provides the perfect balance between size and budget. It allows for up to 8 bedrooms designed as per CDA ByLaws."
                    },
                    {
                        q: "Are there any amenities nearby?",
                        a: "Absolutely. Depending on the plot you select, you can secure locations close to family parks, the central Mosque, school plots, and commercial markets. It is a fully developed society."
                    }
                ].map((faq, index) => (
                    <details key={index} className="group p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-neon-green/30 transition-colors [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex items-center justify-between cursor-pointer font-semibold text-white text-lg">
                            {faq.q}
                            <span className="transition group-open:rotate-180 text-neon-green">
                                <ChevronDown className="w-5 h-5" />
                            </span>
                        </summary>
                        <p className="mt-4 text-zinc-400 leading-relaxed text-sm md:text-base">
                            {faq.a}
                        </p>
                    </details>
                ))}
            </div>
        </section>

      </div>
    </div>
  );
}
