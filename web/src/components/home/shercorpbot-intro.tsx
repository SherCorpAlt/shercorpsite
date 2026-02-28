"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bot, Sparkles, CheckCircle2, ChevronRight, Layers, Target, Database } from "lucide-react"
import Link from "next/link"

const CHAT_MESSAGES = [
    { type: 'bot', text: "Analyzing your Q1 goals..." },
    { type: 'bot', text: "Generating LinkedIn Content Plan..." },
    { type: 'bot', text: "Strategy Complete." }
]

export function SherCorpBotIntro() {
    const [messageIndex, setMessageIndex] = useState(0)
    const [typingText, setTypingText] = useState("")
    const [isTyping, setIsTyping] = useState(true)
    const [completedMessages, setCompletedMessages] = useState<string[]>([])

    useEffect(() => {
        if (messageIndex >= CHAT_MESSAGES.length) {
            const resetTimeout = setTimeout(() => {
                setMessageIndex(0)
                setCompletedMessages([])
                setTypingText("")
                setIsTyping(true)
            }, 5000)
            return () => clearTimeout(resetTimeout)
        }

        const currentMessage = CHAT_MESSAGES[messageIndex].text

        if (isTyping) {
            if (typingText.length < currentMessage.length) {
                const typingTimeout = setTimeout(() => {
                    setTypingText(currentMessage.slice(0, typingText.length + 1))
                }, 40)
                return () => clearTimeout(typingTimeout)
            } else {
                const waitTimeout = setTimeout(() => {
                    setIsTyping(false)
                }, 1000)
                return () => clearTimeout(waitTimeout)
            }
        } else {
            setCompletedMessages(prev => [...prev, currentMessage])
            setMessageIndex(prev => prev + 1)
            setTypingText("")
            setIsTyping(true)
        }
    }, [messageIndex, typingText, isTyping])

    return (
        <section id="SherCorpBot-Intro" className="py-20 px-4 bg-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Chat Preview (Mobile: Stacks Below) */}
                    <div className="order-2 lg:order-1 relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                        <div className="relative glass-card bg-zinc-900/80 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                            {/* Window Header */}
                            <div className="flex items-center gap-2 p-4 border-b border-white/5 bg-white/5">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>
                                <div className="ml-4 flex items-center gap-2 text-xs font-mono text-white/40">
                                    <Bot className="w-3 h-3" />
                                    <span>SHERCORP_BOT_V1.0</span>
                                </div>
                            </div>

                            {/* Chat Content */}
                            <div className="p-6 min-h-[400px] flex flex-col gap-4 font-mono">
                                <AnimatePresence mode="popLayout">
                                    {completedMessages.map((msg, idx) => (
                                        <motion.div
                                            key={`msg-${idx}`}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="flex gap-3 items-start"
                                        >
                                            <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0 mt-1">
                                                <Bot className="w-3.5 h-3.5 text-cyan-400" />
                                            </div>
                                            <div className="flex-1 text-sm md:text-base text-gray-300">
                                                <span className="text-cyan-400 mr-2">{">"}</span>
                                                {msg}
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>

                                {isTyping && messageIndex < CHAT_MESSAGES.length && (
                                    <div className="flex gap-3 items-start">
                                        <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0 mt-1">
                                            <Bot className="w-3.5 h-3.5 text-cyan-400" />
                                        </div>
                                        <div className="flex-1 text-sm md:text-base text-gray-300">
                                            <span className="text-cyan-400 mr-2">{">"}</span>
                                            {typingText}
                                            <span className="inline-block w-2 h-4 bg-cyan-400 ml-1 animate-pulse" />
                                        </div>
                                    </div>
                                )}

                                {messageIndex >= CHAT_MESSAGES.length && (
                                    <motion.div
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        className="mt-6 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center gap-3"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                                        <span className="text-sm font-semibold text-cyan-100 uppercase tracking-wider">Strategy Generation Complete</span>
                                    </motion.div>
                                )}
                            </div>

                            {/* Window Footer */}
                            <div className="p-4 bg-black/40 border-t border-white/5">
                                <div className="flex items-center gap-2 text-xs text-white/30">
                                    <Sparkles className="w-3 h-3" />
                                    <span>AI Processing: High Precision Execution Plan</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="order-1 lg:order-2 flex flex-col gap-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono mb-4 text-cyan-400">
                                <Sparkles className="w-3 h-3" />
                                <span>AI ARCHITECT</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
                                Meet SherCorpBot:<br />
                                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent italic font-light decoration-cyan-500/40 underline-offset-8">
                                    Your AI Growth Architect
                                </span>
                            </h2>
                            <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                                Stop guessing. Start scaling with AI Strategy providing Agency-Level Thinking with Zero Guesswork.
                            </p>
                        </div>

                        {/* Feature Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors group">
                                <div className="p-2 w-fit rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                                    <Layers className="w-5 h-5 text-blue-400" />
                                </div>
                                <h3 className="font-bold text-white">Deep-Context Analysis</h3>
                                <p className="text-sm text-gray-400 leading-snug">
                                    Processes your specific business details and email history to understand your unique value proposition.
                                </p>
                            </div>

                            <div className="flex flex-col gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors group">
                                <div className="p-2 w-fit rounded-lg bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
                                    <Target className="w-5 h-5 text-cyan-400" />
                                </div>
                                <h3 className="font-bold text-white">30-Day Precision</h3>
                                <p className="text-sm text-gray-400 leading-snug">
                                    Receive a day-by-day execution planâ€”from social media hooks to email sequencesâ€”tailored to your business stage.
                                </p>
                            </div>

                            <div className="flex flex-col gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors group sm:col-span-2">
                                <div className="p-2 w-fit rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                                    <Database className="w-5 h-5 text-blue-400" />
                                </div>
                                <h3 className="font-bold text-white">AI-Driven Market Intelligence</h3>
                                <p className="text-sm text-gray-400 leading-snug">
                                    Leveraging the same RAG technology we use for enterprise-level bots, providing insights traditional agencies take weeks to compile.
                                </p>
                            </div>
                        </div>

                        {/* Callout */}
                        <div className="p-5 rounded-2xl bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-white/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-3 opacity-20">
                                <Sparkles className="w-8 h-8 text-cyan-400" />
                            </div>
                            <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2 font-mono">Why we built this</h4>
                            <p className="text-sm text-gray-300 italic leading-relaxed">
                                &quot;At SherCorp, we believe the future of digital marketing isn&apos;t just creative&mdash;it&apos;s computational. SherCorpBot is a live demonstration of our ability to build intelligent, autonomous systems that solve complex business problems.&quot;
                            </p>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link
                                href="/shercorpbot"
                                className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold flex items-center gap-2 group transition-all hover:translate-y-[-2px] hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                            >
                                Generate Your Strategy Now
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/services"
                                className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold border border-white/10 transition-all"
                            >
                                Learn About Our Custom AI Bots
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

