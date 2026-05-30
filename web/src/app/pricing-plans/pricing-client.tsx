"use client";

import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, ChevronLeft, ChevronRight, Sparkles, Bot, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const faqs = [
  {
    question: "What's the difference between AI Design and AI + Creative Design packages?",
    answer:
      "Our AI Design packages are fully powered by SherCorp's intelligent content engine. The AI researches your market, builds the strategy, and produces ready-to-publish posts and reels at speed and scale — the most cost-effective way to stay consistently active online. AI + Creative Design packages layer in our senior human designers, strategists, and editors who art-direct, refine, and add the original storytelling that machines alone can't. You get the speed of AI plus the nuance and craft of an experienced creative team.",
  },
  {
    question: "Will the content actually match my brand, or look generic?",
    answer:
      "Every engagement begins with a brand discovery step where we capture your tone, audience, products, and goals. Our AI is guided by that brand profile, so the output is tailored — not generic. On AI + Creative Design packages, human designers do a final pass on every asset to guarantee your brand voice and visual identity are spot-on before anything goes live.",
  },
  {
    question: "How quickly will I start seeing content and results?",
    answer:
      "Once onboarding is complete, your content calendar and first batch of designs are typically ready within a few business days — far faster than a traditional agency. Reach and engagement usually begin improving within the first 4 to 6 weeks of consistent posting, while measurable lead and sales impact builds over the first quarter as the strategy compounds.",
  },
  {
    question: "Which package is right for my business?",
    answer:
      "If you need to stay consistently present across platforms on a lean budget, an AI Design package is the perfect starting point. If you're an established or scaling brand that needs premium, highly differentiated creative, custom video edits, and a dedicated strategist, the AI + Creative Design packages are the better fit. Not sure? Talk to Mehak or our team and we'll recommend the right plan — no pressure.",
  },
  {
    question: "Can I upgrade, downgrade, or cancel later?",
    answer:
      "Yes. All plans are flexible and billed monthly. You can move from an AI Design plan to an AI + Creative Design plan (or change tiers) as your needs grow, and you're never locked into a long-term contract. We believe in earning your business every month through results.",
  },
];

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
        {/* Hero Section - Mehak (Business Development Manager) */}
        <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 md:mb-28">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <Badge
              variant="outline"
              className="mb-5 inline-flex items-center gap-2 border-amber-500/40 bg-amber-500/10 text-amber-300 px-4 py-1.5 font-medium"
            >
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              Your AI Strategy Partner
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-5">
              Welcome to SherCorp — I&apos;m Mehak, your strategy development partner
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              At SherCorp, we fuse cutting-edge artificial intelligence with real human creativity to deliver
              content and digital marketing solutions that actually move the needle. From data-driven strategy and
              ready-to-publish designs to full-scale campaign management, I&apos;m here to keep your brand consistent,
              relevant, and ahead of the competition — without the overhead of a traditional agency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="font-semibold bg-gradient-to-r from-amber-500 to-amber-600 text-amber-950 hover:from-amber-400 hover:to-amber-500 border-0"
              >
                <Link href="/shercorpbot">Get Your Free Strategy</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="font-semibold bg-slate-800/50 text-white border-slate-700 hover:bg-slate-800 hover:text-white"
              >
                <Link href="/contact">Talk to Our Team</Link>
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-tr from-amber-500/20 via-blue-500/10 to-indigo-500/20 blur-3xl rounded-full" />
              <div className="relative aspect-square w-64 sm:w-80 lg:w-[26rem] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <Image
                  src="/images/mehak-bdm.jpeg"
                  alt="Mehak — AI Business Development Manager at SherCorp"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 20rem, 26rem"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur-xl border border-slate-700/60 px-5 py-2 rounded-full shadow-lg whitespace-nowrap">
                <span className="text-sm font-semibold text-amber-400">Mehak</span>
                <span className="text-sm text-slate-400"> · Business Development Manager</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Packages Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4"
          >
            SherCorp Packages
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 font-medium"
          >
            Choose your growth tier — pure AI speed, or AI supercharged with human creativity.
          </motion.p>
        </div>

        {/* AI Design Packages */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="grid place-items-center size-10 rounded-xl bg-blue-500/10 text-blue-400">
                  <Bot className="size-5" />
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">AI Design Packages</h2>
              </div>
              <div className="h-[1px] flex-1 bg-slate-800" />
            </div>
            <p className="text-slate-400 max-w-3xl leading-relaxed">
              Fully powered by our intelligent content engine — speed, scale, and consistency at the most
              accessible price point. The AI handles research, strategy, and ready-to-publish posts and reels so
              your brand shows up every day across platforms. Perfect for startups, founders, and growing businesses
              that want to stay visible without stretching the budget.
            </p>
          </motion.div>

          {/* Mobile horizontal scroll */}
          <MobilePackageScroller packages={aiDesignPackages} rowLabel="AI Design" accentColor="blue" />

          {/* Desktop grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="hidden md:grid md:grid-cols-3 gap-8"
          >
            {aiDesignPackages.map((pkg, index) => (
              <PricingCard key={index} pkg={pkg} rowLabel="AI Design" />
            ))}
          </motion.div>
        </div>

        {/* AI + Creative Design Packages */}
        <div className="mb-16">
          {/* Section header with image background */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mb-10 rounded-2xl overflow-hidden"
          >
            {/* Background image */}
            <Image
              src="/images/creative-design-packages-bg.webp"
              alt=""
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 1200px"
            />

            {/* Diffuse gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-slate-950/55 to-slate-950" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/25 via-transparent to-slate-950/85" />

            {/* Grid layout: left spacer shows image, right holds text */}
            <div className="relative z-10 grid lg:grid-cols-2 min-h-[200px] lg:min-h-[260px]">
              {/* Left column: intentionally empty to expose the image */}
              <div className="h-28 lg:h-auto" />

              {/* Right column: heading + description */}
              <div className="px-6 pb-8 pt-2 lg:py-10 lg:pr-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="grid place-items-center size-10 rounded-xl bg-amber-500/20 text-amber-400 backdrop-blur-sm border border-amber-500/30 shrink-0">
                    <Palette className="size-5" />
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">AI + Creative Design Packages</h2>
                  <div className="hidden lg:block h-[1px] flex-1 bg-white/10" />
                </div>
                <p className="text-slate-200 leading-relaxed text-sm md:text-base">
                  The best of both worlds. Everything in our AI Design plans, elevated by senior human designers,
                  strategists, and editors who art-direct, refine, and add the original storytelling machines can&apos;t.
                  Built for established and scaling brands that demand premium, on-brand creative, custom video edits,
                  and a dedicated team guiding every campaign.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mobile horizontal scroll */}
          <MobilePackageScroller packages={creativePackages} rowLabel="AI + Creative" accentColor="amber" />

          {/* Desktop grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="hidden md:grid md:grid-cols-3 gap-8"
          >
            {creativePackages.map((pkg, index) => (
              <PricingCard key={index} pkg={pkg} rowLabel="AI + Creative" />
            ))}
          </motion.div>
        </div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <Badge
            variant="outline"
            className="mb-5 inline-flex items-center gap-2 border-amber-500/40 bg-amber-500/10 text-amber-300 px-4 py-1.5 font-medium"
          >
            <Sparkles className="size-3.5" />
            See It In Action
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How SherCorp Powers Your Growth</h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            Watch a quick walkthrough of how our AI and creative teams turn your brand goals into consistent,
            high-performing content and campaigns.
          </p>
          <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-slate-800/60 aspect-video bg-slate-900">
            <iframe
              className="absolute inset-0 size-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="SherCorp — AI Powered Content & Digital Marketing"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <p className="text-xs text-slate-600 mt-3">Placeholder video — replace with your SherCorp intro reel.</p>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-3xl mx-auto mb-24"
        >
          <div className="text-center mb-10">
            <Badge
              variant="outline"
              className="mb-5 inline-flex items-center gap-2 border-blue-500/40 bg-blue-500/10 text-blue-300 px-4 py-1.5 font-medium"
            >
              FAQs
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-400">
              Everything you need to know about our AI Design and AI + Creative Design packages.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FaqItem key={index} faq={faq} />
            ))}
          </div>
        </motion.div>

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

function MobilePackageScroller({
  packages,
  rowLabel,
  accentColor,
}: {
  packages: PricingPackage[];
  rowLabel: string;
  accentColor: "blue" | "amber";
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIdx, setCurrentIdx] = useState(0);

  const scrollToCard = (idx: number) => {
    const clamped = Math.max(0, Math.min(packages.length - 1, idx));
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[clamped] as HTMLElement;
    if (card) {
      container.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
    }
    setCurrentIdx(clamped);
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = container.scrollWidth / packages.length;
    const newIdx = Math.round(container.scrollLeft / cardWidth);
    setCurrentIdx(Math.max(0, Math.min(packages.length - 1, newIdx)));
  };

  const dotActive = accentColor === "amber" ? "bg-amber-400" : "bg-blue-400";

  return (
    <div className="md:hidden mb-2">
      {/* Scrollable strip */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto gap-4 pb-1 snap-x snap-mandatory hide-scrollbar"
        style={{ scrollbarWidth: "none" } as React.CSSProperties}
      >
        {packages.map((pkg, index) => (
          <div key={index} className="w-[calc(100%-1.5rem)] flex-shrink-0 snap-start flex">
            <PricingCard pkg={pkg} rowLabel={rowLabel} />
          </div>
        ))}
      </div>

      {/* Navigation row */}
      <div className="flex items-center justify-between mt-5 px-1">
        <button
          type="button"
          onClick={() => scrollToCard(currentIdx - 1)}
          disabled={currentIdx === 0}
          aria-label="Previous package"
          className="flex items-center justify-center size-10 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-300 disabled:opacity-30 hover:bg-slate-700 active:bg-slate-600 transition-colors"
        >
          <ChevronLeft className="size-5" />
        </button>

        {/* Dot indicators */}
        <div className="flex items-center gap-2">
          {packages.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToCard(i)}
              aria-label={`View ${packages[i].tier} package`}
              className={cn(
                "rounded-full transition-all duration-300 focus:outline-none",
                i === currentIdx ? `w-6 h-2 ${dotActive}` : "w-2 h-2 bg-slate-600 hover:bg-slate-500"
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollToCard(currentIdx + 1)}
          disabled={currentIdx === packages.length - 1}
          aria-label="Next package"
          className="flex items-center justify-center size-10 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-300 disabled:opacity-30 hover:bg-slate-700 active:bg-slate-600 transition-colors"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}

function PricingCard({ pkg, rowLabel }: { pkg: PricingPackage; rowLabel: string }) {
  return (
    <motion.div variants={itemVariants} className="flex h-full w-full">
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

function FaqItem({ faq }: { faq: { question: string; answer: string } }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-slate-800/60 bg-slate-900/40 overflow-hidden transition-colors hover:border-slate-700/80">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-base md:text-lg font-semibold text-white">{faq.question}</span>
        <ChevronDown
          className={cn(
            "size-5 shrink-0 text-amber-400 transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-slate-400 leading-relaxed">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
