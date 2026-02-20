
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Sparkles, Zap, BrainCircuit, ArrowRight } from "lucide-react";
import { Gatekeeper } from "@/components/shercorpbot/gatekeeper";
import { ChatInterface } from "@/components/shercorpbot/chat-interface";

export default function SherCorpBotPage() {
    const [isStarted, setIsStarted] = useState(false);
    const [user, setUser] = useState<{ name: string, email: string } | null>(null);

    return (
        <div className="flex flex-col gap-24 py-20 w-full overflow-hidden">
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
                <AnimatePresence mode="wait">
                    {!isStarted ? (
                        <motion.div
                            key="placeholder"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="glass-card min-h-[600px] flex flex-col items-center justify-center p-12 text-center border-neon-green/30 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-b from-neon-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                                <div className="bg-black/40 backdrop-blur-md p-6 rounded-full border border-white/10 mb-8 shadow-[0_0_30px_rgba(57,255,20,0.2)]">
                                    <Bot className="w-16 h-16 text-neon-green" />
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
                                <p className="text-muted-foreground text-lg mb-8 max-w-md">
                                    Initialize SherCorpBot to generate your comprehensive marketing strategy and social assets in seconds.
                                </p>

                                <Button
                                    onClick={() => setIsStarted(true)}
                                    className="bg-neon-green text-black font-bold h-14 px-8 text-lg hover:bg-neon-green/80 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(57,255,20,0.4)]"
                                >
                                    Start SherCorpBot Analysis <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>

                                <p className="mt-6 text-sm text-muted-foreground/60 uppercase tracking-widest font-mono">
                                    System Verified • Awaiting Input
                                </p>
                            </Card>
                        </motion.div>
                    ) : !user ? (
                        <motion.div
                            key="gatekeeper"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="min-h-[600px] flex items-center justify-center"
                        >
                            <div className="w-full max-w-md">
                                <Gatekeeper onUnlock={(name, email) => setUser({ name, email })} />
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="h-[600px]"
                        >
                            <ChatInterface userName={user.name} userEmail={user.email} />
                        </motion.div>
                    )}
                </AnimatePresence>
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
