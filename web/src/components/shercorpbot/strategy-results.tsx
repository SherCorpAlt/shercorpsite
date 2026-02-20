"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    CheckCircle2, Target, Calendar, ImageIcon,
    Zap, Mail, RefreshCw, ChevronDown, ChevronUp,
    ArrowRight, TrendingUp
} from "lucide-react";

interface RoadmapItem {
    day: string;
    task: string;
}

export interface StrategyData {
    business_summary: string;
    strategy_guidelines: string[];
    growth_roadmap: RoadmapItem[];
    image_prompts: string[];
    image_urls: string[];
    upsell_hooks: string[];
}

interface StrategyResultsProps {
    strategy: StrategyData;
    userEmail: string;
}

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function StrategyResults({ strategy, userEmail }: StrategyResultsProps) {
    const [expandedRoadmap, setExpandedRoadmap] = useState(false);
    const roadmapItems = expandedRoadmap
        ? strategy.growth_roadmap
        : strategy.growth_roadmap.slice(0, 3);

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="w-full space-y-6 pb-12"
        >
            {/* ---- Success Banner ---- */}
            <motion.div variants={itemVariants}>
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-neon-green/20 via-neon-green/10 to-transparent border border-neon-green/30 p-6 flex flex-col sm:flex-row items-center gap-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 to-transparent pointer-events-none" />
                    <div className="w-14 h-14 rounded-full bg-neon-green/20 border border-neon-green/30 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-7 h-7 text-neon-green" />
                    </div>
                    <div className="text-center sm:text-left">
                        <h2 className="text-xl font-bold text-white mb-1">Strategy Successfully Generated!</h2>
                        <p className="text-sm text-white/60">
                            A full copy has been emailed to <span className="text-neon-green font-medium">{userEmail}</span>. Check your spam folder if needed.
                        </p>
                    </div>
                    <div className="sm:ml-auto shrink-0">
                        <Button
                            variant="outline"
                            size="sm"
                            className="gap-2 border-white/20 hover:border-neon-green/50 text-white/70 hover:text-white"
                            onClick={() => window.location.reload()}
                        >
                            <RefreshCw className="w-3.5 h-3.5" />
                            New Session
                        </Button>
                    </div>
                </div>
            </motion.div>

            {/* ---- Business Summary ---- */}
            <motion.div variants={itemVariants}>
                <Card className="glass-card p-6 border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-400/20 flex items-center justify-center">
                            <TrendingUp className="w-5 h-5 text-blue-400" />
                        </div>
                        <h3 className="font-bold text-lg">Business Analysis</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{strategy.business_summary}</p>
                </Card>
            </motion.div>

            {/* ---- Strategy Guidelines ---- */}
            <motion.div variants={itemVariants}>
                <Card className="glass-card p-6 border-white/10">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-9 h-9 rounded-lg bg-neon-green/10 border border-neon-green/20 flex items-center justify-center">
                            <Target className="w-5 h-5 text-neon-green" />
                        </div>
                        <h3 className="font-bold text-lg">Strategic Guidelines</h3>
                    </div>
                    <div className="space-y-3">
                        {strategy.strategy_guidelines.map((guideline, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * i, duration: 0.4 }}
                                className="flex gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-neon-green/20 transition-colors"
                            >
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-neon-green/15 border border-neon-green/30 flex items-center justify-center text-xs font-bold text-neon-green">
                                    {i + 1}
                                </span>
                                <p className="text-sm text-white/80 leading-relaxed">{guideline}</p>
                            </motion.div>
                        ))}
                    </div>
                </Card>
            </motion.div>

            {/* ---- 30-Day Roadmap ---- */}
            <motion.div variants={itemVariants}>
                <Card className="glass-card p-6 border-white/10">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-400/20 flex items-center justify-center">
                            <Calendar className="w-5 h-5 text-purple-400" />
                        </div>
                        <h3 className="font-bold text-lg">30-Day Execution Roadmap</h3>
                    </div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-green/50 via-neon-green/20 to-transparent" />

                        <div className="space-y-1">
                            {roadmapItems.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.08 * i, duration: 0.4 }}
                                    className="flex gap-4 pl-2 group"
                                >
                                    {/* Node */}
                                    <div className="relative z-10 flex-shrink-0 w-7 h-7 rounded-full border-2 border-neon-green/40 bg-black flex items-center justify-center group-hover:border-neon-green transition-colors">
                                        <div className="w-2 h-2 rounded-full bg-neon-green/60 group-hover:bg-neon-green transition-colors" />
                                    </div>
                                    {/* Content */}
                                    <div className="pb-5 flex-1">
                                        <span className="inline-block text-xs font-mono font-bold text-neon-green bg-neon-green/10 px-2 py-0.5 rounded mb-1">
                                            {item.day}
                                        </span>
                                        <p className="text-sm text-white/70 leading-relaxed">{item.task}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {strategy.growth_roadmap.length > 3 && (
                        <button
                            onClick={() => setExpandedRoadmap(!expandedRoadmap)}
                            className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground hover:text-white transition-colors mx-auto"
                        >
                            {expandedRoadmap ? (
                                <><ChevronUp className="w-3.5 h-3.5" /> Show less</>
                            ) : (
                                <><ChevronDown className="w-3.5 h-3.5" /> Show all {strategy.growth_roadmap.length} milestones</>
                            )}
                        </button>
                    )}
                </Card>
            </motion.div>

            {/* ---- AI-Generated Social Posts ---- */}
            {strategy.image_urls && strategy.image_urls.length > 0 && (
                <motion.div variants={itemVariants}>
                    <Card className="glass-card p-6 border-white/10">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-400/20 flex items-center justify-center">
                                <ImageIcon className="w-5 h-5 text-orange-400" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">AI-Generated Social Posts</h3>
                                <p className="text-xs text-muted-foreground">Custom visuals crafted for your brand</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {strategy.image_urls.map((url, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2 * i, duration: 0.5 }}
                                    className="group relative rounded-xl overflow-hidden aspect-square bg-white/5 border border-white/10 hover:border-neon-green/30 transition-colors"
                                >
                                    {/* Loading skeleton */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="flex flex-col items-center gap-2 text-white/20">
                                            <ImageIcon className="w-8 h-8 animate-pulse" />
                                            <span className="text-xs">Generating...</span>
                                        </div>
                                    </div>
                                    {/* Actual image — loads from browser, bypasses server IP blocking */}
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={url}
                                        alt={`AI Social Post ${i + 1}`}
                                        className="relative z-10 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                        onLoad={(e) => {
                                            (e.target as HTMLImageElement).style.opacity = '1';
                                        }}
                                        style={{ opacity: 0, transition: 'opacity 0.4s ease' }}
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                        }}
                                    />
                                    {/* Post label overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <p className="text-xs text-white font-medium">Post {i + 1} • 1080×1080</p>
                                        <p className="text-[10px] text-white/60 line-clamp-2 mt-0.5">{strategy.image_prompts?.[i]}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </Card>
                </motion.div>
            )}

            {/* ---- Upsell CTA ---- */}
            <motion.div variants={itemVariants}>
                <div className="relative overflow-hidden rounded-2xl bg-black border border-neon-green/20 p-8 text-center">
                    {/* Glow bg */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-green/10 blur-[80px] rounded-full pointer-events-none" />

                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neon-green/10 border border-neon-green/20 text-neon-green text-xs font-semibold mb-4">
                            <Zap className="w-3.5 h-3.5 fill-neon-green" />
                            Scale Up with SherCorp
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2">Ready to Execute This at Scale?</h3>
                        <p className="text-white/50 text-sm mb-6 max-w-md mx-auto">
                            This strategy is just the beginning. Let SherCorp&apos;s team implement it for you with hands-on execution.
                        </p>

                        <div className="inline-block text-left mb-8">
                            <ul className="space-y-2">
                                {strategy.upsell_hooks.map((hook, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                                        <CheckCircle2 className="w-4 h-4 text-neon-green shrink-0 mt-0.5" />
                                        {hook}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-neon-green text-black font-bold px-7 py-3 rounded-full hover:bg-neon-green/85 transition-all duration-300 shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_30px_rgba(57,255,20,0.5)] hover:scale-105"
                            >
                                Book a Strategy Call <ArrowRight className="w-4 h-4" />
                            </a>
                            <a
                                href={`mailto:${userEmail}`}
                                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/70 hover:text-white px-7 py-3 rounded-full transition-all duration-300 hover:border-white/40"
                            >
                                <Mail className="w-4 h-4" />
                                View in Email
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
