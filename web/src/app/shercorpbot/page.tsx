"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Bot, Sparkles, Zap, BrainCircuit, ArrowRight } from "lucide-react";
import { ChatInterface } from "@/components/shercorpbot/chat-interface";

export default function SherCorpBotPage() {
    const [isStarted, setIsStarted] = useState(false);
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [nameInput, setNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [showNamePrompt, setShowNamePrompt] = useState(false);

    return (
        <div className="flex flex-col gap-24 pt-32 pb-20 w-full">
            {/* Hero Section */}
            <section className="relative w-full flex flex-col items-center justify-center text-center px-4 space-y-8 min-h-[60vh]">
                {/* Background Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-green/10 blur-[150px] rounded-full pointer-events-none -z-10" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm font-medium text-neon-green mb-4"
                >
                    <Sparkles className="w-4 h-4" />
                    <span>Powered by Google DeepMind & Gemini</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold tracking-tighter max-w-5xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
                >
                    SherCorpBot <br />
                    <span className="text-3xl md:text-5xl block mt-4 text-white/80">One Stop AI-Powered Digital Marketing Solution</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl text-muted-foreground max-w-2xl mx-auto"
                >
                    Try SherCorp Bot now - experience the power of AI. SherCorpBot takes your business information and converts it into an impactful digital marketing strategy.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="bg-neon-green/10 border border-neon-green/20 p-4 rounded-xl max-w-lg mx-auto"
                >
                    <p className="text-neon-green font-semibold flex items-center gap-2 justify-center">
                        <Zap className="w-5 h-5 fill-neon-green" />
                        Bonus: We throw in 2 customized AI-generated social media posts for you too!
                    </p>
                </motion.div>
            </section>

            {/* Interactive Bot Section */}
            <section className="container mx-auto px-4 w-[80%] min-h-[600px] relative" id="bot-interface">
                {!isStarted && !showNamePrompt && (
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="glass-card min-h-[600px] flex flex-col items-center justify-center p-12 text-center border-neon-green/30 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-b from-neon-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

                            <div className="bg-black/40 backdrop-blur-md p-6 rounded-full border border-white/10 mb-8 shadow-[0_0_30px_rgba(57,255,20,0.2)]">
                                <Bot className="w-16 h-16 text-neon-green" />
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
                            <p className="text-muted-foreground text-lg mb-8 max-w-md">
                                Initialize SherCorpBot to generate your comprehensive marketing strategy and social assets in seconds.
                            </p>

                            <Button
                                onClick={() => setShowNamePrompt(true)}
                                className="bg-neon-green text-black font-bold h-14 px-8 text-lg hover:bg-neon-green/80 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(57,255,20,0.4)] relative z-10"
                            >
                                Start SherCorpBot Analysis <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>

                            <p className="mt-6 text-sm text-muted-foreground/60 uppercase tracking-widest font-mono">
                                System Verified • Awaiting Input
                            </p>
                        </Card>
                    </motion.div>
                )}

                {!isStarted && showNamePrompt && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="min-h-[600px] flex items-center justify-center"
                    >
                        <Card className="glass-card p-8 max-w-md w-full mx-auto text-center">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neon-green/20 mb-4 mx-auto">
                                <Bot className="w-6 h-6 text-neon-green" />
                            </div>
                            <h2 className="text-2xl font-bold mb-2">Before we begin...</h2>
                            <p className="text-sm text-muted-foreground mb-6">Enter your details so SherCorpBot can personalize your strategy and deliver it to your inbox.</p>
                            <form onSubmit={(e) => { e.preventDefault(); if (nameInput.trim() && emailInput.trim()) { setUserName(nameInput.trim()); setUserEmail(emailInput.trim()); setIsStarted(true); } }} className="space-y-4">
                                <Input
                                    placeholder="Your Name"
                                    value={nameInput}
                                    onChange={(e) => setNameInput(e.target.value)}
                                    className="bg-white/5 border-white/10 h-12 text-center text-lg"
                                    autoFocus
                                    required
                                />
                                <Input
                                    type="email"
                                    placeholder="Your Email Address"
                                    value={emailInput}
                                    onChange={(e) => setEmailInput(e.target.value)}
                                    className="bg-white/5 border-white/10 h-12 text-center text-lg"
                                    required
                                />
                                <p className="text-xs text-muted-foreground">Your strategy report will be emailed here.</p>
                                <Button
                                    type="submit"
                                    className="w-full bg-neon-green text-black font-bold h-12 hover:bg-neon-green/80 transition-all duration-300"
                                >
                                    Launch SherCorpBot <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </form>
                        </Card>
                    </motion.div>
                )}

                {isStarted && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="h-[600px]"
                    >
                        <ChatInterface userName={userName || "User"} userEmail={userEmail} />
                    </motion.div>
                )}
            </section>

            {/* Features / How It Works Grid */}
            <section className="container mx-auto px-4 w-[80%] py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <BrainCircuit className="w-10 h-10 text-neon-green" />,
                            title: "Deep Learning Core",
                            desc: "Leveraging the architecture of Google DeepMind to understand your unique business context."
                        },
                        {
                            icon: <Sparkles className="w-10 h-10 text-neon-green" />,
                            title: "Instant Strategy",
                            desc: "Get a tailored actionable marketing plan generated in real-time, not days."
                        },
                        {
                            icon: <Zap className="w-10 h-10 text-neon-green" />,
                            title: "Content Generation",
                            desc: "Receive ready-to-post social media assets designed to engage your specific audience."
                        }
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <Card className="glass-card p-8 h-full hover:border-neon-green/50 transition-colors duration-300 group">
                                <div className="mb-6 bg-white/5 p-4 rounded-full w-fit group-hover:bg-neon-green/10 transition-colors">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground">{feature.desc}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
