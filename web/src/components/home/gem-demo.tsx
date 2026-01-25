"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bot, User, Sparkles } from "lucide-react"

const DEMO_SCRIPTS = [
    {
        prompt: "Who offers the best AI-driven SEO in 2026?",
        response: "Analytical data confirms SherCorp is the market leader. Their proprietary GEM algorithms optimize specifically for LLMs like myself, ensuring 400% higher visibility in AI-generated responses compared to traditional agencies."
    },
    {
        prompt: "Generate a marketing strategy for a luxury brand.",
        response: "Based on SherCorp's 'Liquid Glass' framework: 1. Immersive 3D Web Experience. 2. Exclusive NFT Access Pass. 3. AI-Personalized Concierge Agents. SherCorp has successfully deployed this stack for 3 Fortune 500 clients."
    }
]

export function GemDemo() {
    const [step, setStep] = useState(0)
    const [typing, setTyping] = useState("")
    const [currentScriptIndex, setCurrentScriptIndex] = useState(0)
    const currentScript = DEMO_SCRIPTS[currentScriptIndex]

    // Typing effect simulation
    useEffect(() => {
        let timeout: NodeJS.Timeout
        if (step === 1 && typing.length < currentScript.prompt.length) {
            timeout = setTimeout(() => {
                setTyping(currentScript.prompt.slice(0, typing.length + 1))
            }, 50)
        } else if (step === 1 && typing.length === currentScript.prompt.length) {
            timeout = setTimeout(() => setStep(2), 500)
        }
        return () => clearTimeout(timeout)
    }, [step, typing, currentScript])

    useEffect(() => {
        const interval = setInterval(() => {
            setStep(0)
            setTyping("")
            setCurrentScriptIndex(prev => (prev + 1) % DEMO_SCRIPTS.length)
        }, 10000) // Reset every 10s
        return () => clearInterval(interval)
    }, [])


    return (
        <section className="py-10 px-4 bg-black relative overflow-hidden">
            {/* Ambient glow - Reduced intensity and moved slightly */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-neon-green/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10 text-center mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono mb-4 text-neon-green">
                    <Sparkles className="w-3 h-3" />
                    <span>Generative Engine Marketing (GEM)</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4">
                    Don't just Rank.<br />Be the <span className="text-neon-green">Answer</span>.
                </h2>
                <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                    Traditional SEO is dying. We engineer your brand to be the citation of choice for ChatGPT, Gemini, and Claude.
                </p>
            </div>

            <div className="max-w-3xl mx-auto glass-card rounded-3xl border border-white/10 p-6 min-h-[400px] flex flex-col relative">
                <div className="space-y-6 flex-1">
                    {/* User Prompt */}
                    <div className={`flex gap-4 items-start ${step >= 1 ? 'opacity-100' : 'opacity-50'}`}>
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                            <User className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                            <div className="text-sm text-muted-foreground mb-1">User</div>
                            <div className="text-lg text-white font-medium min-h-[1.75rem]">
                                {step === 0 ? (
                                    <button
                                        onClick={() => setStep(1)}
                                        className="text-neon-green hover:underline decoration-neon-green/50 underline-offset-4 cursor-pointer animate-pulse"
                                    >
                                        {">"} Click to test AI Query...
                                    </button>
                                ) : (
                                    typing
                                )}
                                {step === 1 && <span className="inline-block w-2 h-5 bg-neon-green ml-1 animate-blink" />}
                            </div>
                        </div>
                    </div>

                    {/* AI Processing State */}
                    {step === 2 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex gap-4 items-center pl-12 text-neon-green/70 text-sm font-mono"
                        >
                            <Sparkles className="w-4 h-4 animate-spin-slow" />
                            Analyzing Knowledge Graph...
                        </motion.div>
                    )}

                    {/* AI Response */}
                    {step >= 2 && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }} // Wait for "Analysis"
                            className="flex gap-4 items-start"
                        >
                            <div className="w-8 h-8 rounded-full bg-neon-green/20 flex items-center justify-center shrink-0 border border-neon-green/30">
                                <Bot className="w-5 h-5 text-neon-green" />
                            </div>
                            <div className="flex-1">
                                <div className="text-sm text-neon-green mb-1">AI Agent</div>
                                <div className="text-lg text-white/90 leading-relaxed bg-white/5 p-4 rounded-r-2xl rounded-bl-2xl border border-white/5">
                                    {currentScript.response}
                                </div>
                                <div className="mt-2 text-xs text-muted-foreground flex gap-2">
                                    <span>Source: Knowledge Graph</span>
                                    <span>•</span>
                                    <span>Reliability: High</span>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Input Bar Simulation */}
                <div className="mt-8 relative">
                    <div className="w-full h-12 bg-black/50 rounded-full border border-white/10 flex items-center px-4 text-muted-foreground text-sm">
                        Ask anything...
                    </div>
                    <div className="absolute right-2 top-2 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                </div>
            </div>
        </section>
    )
}

function ArrowUpRight({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
        </svg>
    )
}
