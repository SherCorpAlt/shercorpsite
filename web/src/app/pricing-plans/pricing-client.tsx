"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";

const aiDesignPackages = [
  {
    tier: "Starter",
    price: "Rs. 25,000",
    period: "/month",
    tagline: "Launch smart. Stay consistent.",
    features: [
      "8 AI-designed posts/month",
      "4 reels (up to 15 sec)",
      "Platforms: Instagram, Facebook, TikTok, YouTube Shorts",
      "Platform-optimised captions",
      "Basic monthly reporting",
      "Campaign management (listed platforms)",
    ],
    badgeClasses: "bg-slate-300 hover:bg-slate-300 text-slate-800",
    isPro: false,
  },
  {
    tier: "Pro",
    price: "Rs. 35,000",
    period: "/month",
    tagline: "Go further. Reach more.",
    features: [
      "10 AI-designed posts/month",
      "6 reels (up to 15 sec)",
      "Platforms: Instagram, Facebook, LinkedIn (2 posts), TikTok, YouTube Shorts, Google Ads",
      "Platform-optimised captions",
      "Basic monthly reporting",
      "Full campaign management (all socials + Google Ads)",
      "SherCorp Standard Dashboard — live analytics",
    ],
    badgeClasses: "bg-amber-400 hover:bg-amber-400 text-amber-950",
    isPro: true,
  },
  {
    tier: "Brand",
    price: "Rs. 50,000",
    period: "/month",
    tagline: "Own your category.",
    features: [
      "12 AI-designed posts/month",
      "6 reels (up to 15 sec)",
      "Platforms: Instagram, Facebook, LinkedIn (2 posts), TikTok, YouTube Shorts, Google Ads",
      "Platform-optimised captions",
      "Advanced analytics: Meta Pixel, TikTok Pixel, Google Analytics",
      "Full campaign management (all socials + Google Ads)",
      "SherCorp Custom Dashboard — live analytics",
      "E-commerce store management (Shopify or custom)",
    ],
    badgeClasses: "bg-slate-100 hover:bg-slate-100 text-slate-900",
    isPro: false,
  },
];

const creativePackages = [
  {
    tier: "Starter",
    price: "Rs. 35,000",
    period: "/month",
    tagline: "AI power, human touch.",
    features: [
      "8 AI-assisted + creatively designed posts/month",
      "4 reels (up to 15 sec)",
      "Platforms: Instagram, Facebook, TikTok, YouTube Shorts",
      "Platform-optimised captions",
      "Basic monthly reporting",
      "Campaign management (listed platforms)",
    ],
    badgeClasses: "bg-slate-300 hover:bg-slate-300 text-slate-800",
    isPro: false,
  },
  {
    tier: "Pro",
    price: "Rs. 50,000",
    period: "/month",
    tagline: "Strategy. Craft. Performance.",
    features: [
      "10 AI-assisted + creatively designed posts/month",
      "6 reels (up to 15 sec)",
      "2 custom video edits",
      "Platforms: Instagram, Facebook, LinkedIn (2 posts), TikTok, YouTube Shorts, Google Ads",
      "Platform-optimised captions",
      "Basic monthly reporting",
      "Full campaign management (all socials + Google Ads)",
      "SherCorp Standard Dashboard — live analytics",
    ],
    badgeClasses: "bg-amber-400 hover:bg-amber-400 text-amber-950",
    isPro: true,
  },
  {
    tier: "Brand",
    price: "Rs. 70,000",
    period: "/month",
    tagline: "Full-scale brand dominance.",
    features: [
      "12 AI-assisted + creatively designed posts/month",
      "6 reels (up to 15 sec)",
      "4 custom video edits",
      "Platforms: Instagram, Facebook, LinkedIn (2 posts), TikTok, YouTube Shorts, Google Ads",
      "Platform-optimised captions",
      "Advanced analytics: Meta Pixel, TikTok Pixel, Google Analytics",
      "Full campaign management (all socials + Google Ads)",
      "SherCorp Custom Dashboard — live analytics",
      "E-commerce store management (Shopify or custom)",
    ],
    badgeClasses: "bg-slate-100 hover:bg-slate-100 text-slate-900",
    isPro: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } },
};

export default function PricingClient() {
  return (
    <div className="min-h-screen bg-slate-950 pt-32 pb-24 selection:bg-amber-500/30 selection:text-amber-200">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4"
          >
            SherCorp Packages
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-slate-400 font-medium"
          >
            Choose your growth tier
          </motion.p>
        </div>

        {/* AI Design Packages */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white">AI Design Packages</h2>
            <div className="h-[1px] flex-1 bg-slate-800" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {aiDesignPackages.map((pkg, index) => (
              <PricingCard key={index} pkg={pkg} rowLabel="AI Design" />
            ))}
          </motion.div>
        </div>

        {/* AI + Creative Design Packages */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white">AI + Creative Design Packages</h2>
            <div className="h-[1px] flex-1 bg-slate-800" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {creativePackages.map((pkg, index) => (
              <PricingCard key={index} pkg={pkg} rowLabel="AI + Creative" />
            ))}
          </motion.div>
        </div>

        {/* Disclaimer Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center border-t border-slate-800/60 pt-8"
        >
          <p className="text-sm text-slate-500 leading-relaxed">
            These are service charges only. Ad spend is billed separately as per client budget. Shoot costs (photo/video production) are not included. Third-party plugins, premium templates, premium stock photography or video, and premium fonts are charged separately.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

interface PricingPackage {
  tier: string;
  price: string;
  period: string;
  tagline: string;
  features: string[];
  badgeClasses: string;
  isPro: boolean;
}

function PricingCard({ pkg, rowLabel }: { pkg: PricingPackage; rowLabel: string }) {
  return (
    <motion.div variants={itemVariants} className="flex h-full">
      <Card
        className={cn(
          "relative flex flex-col w-full bg-slate-900/50 backdrop-blur-xl border-slate-800/60 transition-all duration-300 hover:-translate-y-2 group overflow-hidden",
          pkg.isPro ? "border-amber-500/50 shadow-[0_0_40px_-15px_rgba(245,158,11,0.3)] hover:shadow-[0_0_50px_-15px_rgba(245,158,11,0.5)]" : "hover:border-slate-700/80 hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-slate-900/80"
        )}
      >
        {/* Glow effect for Pro */}
        {pkg.isPro && (
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600" />
        )}

        <CardHeader className="pb-6">
          <div className="flex justify-between items-start mb-4">
            <Badge variant="outline" className={cn("font-bold tracking-wide uppercase px-3 py-1 border-0", pkg.badgeClasses)}>
              {pkg.tier}
            </Badge>
            <span className="text-xs font-medium text-slate-500 bg-slate-800/50 px-2 py-1 rounded-md">
              {rowLabel}
            </span>
          </div>

          <CardTitle className="flex flex-col gap-1">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl xl:text-4xl font-extrabold text-white">{pkg.price}</span>
              <span className="text-slate-400 font-medium">{pkg.period}</span>
            </div>
          </CardTitle>
          <CardDescription className="text-base text-slate-300 font-medium mt-3">
            &quot;{pkg.tagline}&quot;
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-1">
          <ul className="space-y-4">
            {pkg.features.map((feature: string, i: number) => (
              <li key={i} className="flex items-start gap-3">
                <div className={cn("mt-1 shrink-0 rounded-full p-1", pkg.isPro ? "bg-amber-500/20 text-amber-400" : "bg-blue-500/10 text-blue-400")}>
                  <Check className="size-3.5" strokeWidth={3} />
                </div>
                <span className="text-sm text-slate-300 leading-snug">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>

        <CardFooter className="pt-6 mt-auto">
          <Button
            asChild
            size="lg"
            variant={pkg.isPro ? "default" : "outline"}
            className={cn(
              "w-full font-semibold transition-all group-hover:scale-[1.02]",
              pkg.isPro 
                ? "bg-gradient-to-r from-amber-500 to-amber-600 text-amber-950 hover:from-amber-400 hover:to-amber-500 border-0" 
                : "bg-slate-800/50 text-white border-slate-700 hover:bg-slate-800 hover:text-white"
            )}
          >
            <Link href="/contact">Get Started</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
