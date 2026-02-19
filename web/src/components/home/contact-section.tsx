"use client"

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm } from "@/app/actions/contact-action";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { useRef, useEffect, useCallback, startTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button
            type="submit"
            disabled={pending}
            className="w-full bg-neon-green text-black font-bold hover:bg-neon-green/80 transition-all duration-300 animate-pulse-green shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_30px_rgba(57,255,20,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {pending ? "Sending..." : "Send Message"}
        </Button>
    );
}

const initialState = {
    success: false,
    message: "",
};

export function ContactSection() {
    const [state, formAction] = useActionState(submitContactForm, initialState);
    const { executeRecaptcha } = useGoogleReCaptcha();

    // Create a wrapper for the form action to include the reCAPTCHA token
    const handleFormSubmit = useCallback(async (formData: FormData) => {
        if (!executeRecaptcha) {
            console.error("Recaptcha not available");
            return;
        }

        try {
            const token = await executeRecaptcha("contact_form");
            formData.set("recaptchaToken", token);

            startTransition(() => {
                formAction(formData);
            });
        } catch (error) {
            console.error("Recaptcha execution failed:", error);
        }
    }, [executeRecaptcha, formAction]);

    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (state.success && formRef.current) {
            formRef.current.reset();
        }
    }, [state.success]);

    return (
        <section className="py-24 relative overflow-hidden" id="contact">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-green/20 blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="mx-auto px-4 w-[90%] md:w-[40%] text-center mb-12 space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Get in Touch</h2>
                <p className="text-muted-foreground text-lg">
                    Ready to accelerate your digital growth?
                </p>
            </div>

            <div className="mx-auto px-4 w-[90%] md:w-[40%]">
                <Card className="glass-card p-8 backdrop-blur-2xl border-white/20">
                    <form ref={formRef} action={handleFormSubmit} className="space-y-6">
                        <AnimatePresence mode="wait">
                            {state.message && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className={`p-4 rounded-lg flex items-center gap-3 text-sm font-medium ${state.success
                                        ? "bg-green-500/10 text-green-400 border border-green-500/20"
                                        : "bg-red-500/10 text-red-400 border border-red-500/20"
                                        }`}
                                >
                                    {state.success ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                                    {state.message}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">Name</label>
                            <Input name="name" id="name" placeholder="John Doe" required className="bg-white/5 border-white/10 focus:border-neon-green/50 placeholder:text-muted-foreground/50" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                            <Input name="email" id="email" type="email" placeholder="john@example.com" required className="bg-white/5 border-white/10 focus:border-neon-green/50 placeholder:text-muted-foreground/50" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                            <Input name="subject" id="subject" placeholder="Project Inquiry" className="bg-white/5 border-white/10 focus:border-neon-green/50 placeholder:text-muted-foreground/50" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">Message</label>
                            <Textarea name="message" id="message" placeholder="Tell us about your project..." required className="min-h-[150px] bg-white/5 border-white/10 focus:border-neon-green/50 placeholder:text-muted-foreground/50" />
                        </div>

                        <SubmitButton />
                    </form>
                </Card>
            </div>
        </section>
    )
}
// force update
