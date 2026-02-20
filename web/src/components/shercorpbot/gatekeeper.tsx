
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Loader2, Mail } from "lucide-react";
import { motion } from "framer-motion";

interface GatekeeperProps {
    onUnlock: (name: string, email: string) => void;
}

export function Gatekeeper({ onUnlock }: GatekeeperProps) {
    const [step, setStep] = useState<"email" | "otp">("email");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSendOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const res = await fetch("/api/auth/send-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, name }),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || "Failed to send OTP");
            }

            setStep("otp");
        } catch (err: unknown) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const res = await fetch("/api/auth/verify-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, code: otp }),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || "Invalid OTP");
            }

            const data = await res.json();
            onUnlock(data.name || name, email);
        } catch (err: unknown) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className="glass-card p-8 max-w-md mx-auto relative overflow-hidden transition-all duration-300">
            {/* Background Decoration */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-neon-green/10 blur-[50px] rounded-full" />

            <div className="mb-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neon-green/20 mb-4">
                    <Mail className="w-6 h-6 text-neon-green" />
                </div>
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-white">
                    {step === "email" ? "Get Started" : "Verify Email"}
                </h2>
                <p className="text-sm text-muted-foreground mt-2">
                    {step === "email"
                        ? "Enter your details to generate your personalized marketing strategy."
                        : `We sent a 6-digit code to ${email}.`}
                </p>
            </div>

            {error && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-red-500/10 border border-red-500/20 text-red-500 p-3 rounded-md mb-4 text-sm text-center"
                >
                    {error}
                </motion.div>
            )}

            {step === "email" ? (
                <form onSubmit={handleSendOtp} className="space-y-4">
                    <div className="space-y-2">
                        <Input
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="bg-white/5 border-white/10 h-10"
                            required
                        />
                        <Input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-white/5 border-white/10 h-10"
                            required
                        />
                    </div>
                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-neon-green text-black font-bold hover:bg-neon-green/80 transition-all duration-300"
                    >
                        {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                        Send Access Code
                    </Button>
                </form>
            ) : (
                <form onSubmit={handleVerifyOtp} className="space-y-4">
                    <Input
                        type="text"
                        placeholder="Enter 6-digit code"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        className="bg-white/5 border-white/10 text-center text-lg tracking-widest h-12"
                        maxLength={6}
                        required
                    />
                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-neon-green text-black font-bold hover:bg-neon-green/80 transition-all duration-300"
                    >
                        {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                        Verify & Enter
                    </Button>
                    <button
                        type="button"
                        onClick={() => setStep("email")}
                        className="text-xs text-muted-foreground hover:text-white w-full text-center underline"
                    >
                        Change Email
                    </button>
                </form>
            )}
        </Card>
    );
}
