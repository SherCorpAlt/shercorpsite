
"use client";

import { useState, useEffect, useRef } from 'react';
import { useChat } from '@ai-sdk/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Send, Upload, Loader2, Bot, User, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface ChatInterfaceProps {
    userName: string;
    userEmail: string;
}

export function ChatInterface({ userName, userEmail }: ChatInterfaceProps) {
    const [logoBase64, setLogoBase64] = useState<string | null>(null);
    const [isGeneratingPlan, setIsGeneratingPlan] = useState(false);
    const [planSent, setPlanSent] = useState(false);

    const [input, setInput] = useState('');

    const { messages, sendMessage, isLoading } = useChat({
        api: '/api/chat',
        body: { userName },
        onFinish: (message) => {
            if (message.content.includes('[DATA_COLLECTION_COMPLETE]')) {
                handleGeneratePlan();
            }
        }
    });

    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Initial Greeting
    useEffect(() => {
        if (messages.length === 0) {
            sendMessage({
                role: 'assistant',
                content: `Hello ${userName}! I'm SherCorpBot. I'm here to build your custom growth strategy. \n\nLet's start: Describe your industry and where do you operate? (So we can customize your plan)`
            });
        }
    }, [userName, messages.length, sendMessage]); // Only run once on mount/user change

    // Check if we should show upload button (dumb check based on last message)
    const lastMessage = messages[messages.length - 1];
    const showUpload = lastMessage?.role === 'assistant' &&
        (lastMessage.content.toLowerCase().includes('logo') ||
            lastMessage.content.toLowerCase().includes('upload'));

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setLogoBase64(reader.result as string);
                // Auto-send "Logo uploaded" message to advance chat
                sendMessage({
                    role: 'user',
                    content: `[System] Logo uploaded: ${file.name}`
                });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if ((!input.trim() && !logoBase64)) return;

        const userMessage = input;
        setInput(''); // Clear input immediately

        await sendMessage({
            role: 'user',
            content: userMessage
        });
    };

    const handleGeneratePlan = async () => {
        setIsGeneratingPlan(true);
        try {
            await fetch('/api/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: userEmail,
                    chatHistory: messages, // Send full context
                    logoBase64
                })
            });
            setPlanSent(true);
        } catch (error) {
            console.error(error);
            // Handle error (maybe toast)
        } finally {
            setIsGeneratingPlan(false);
        }
    };

    if (planSent) {
        return (
            <div className="h-[600px] flex flex-col items-center justify-center text-center p-8 space-y-6">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-24 h-24 bg-neon-green/20 rounded-full flex items-center justify-center mb-4"
                >
                    <CheckCircle2 className="w-12 h-12 text-neon-green" />
                </motion.div>
                <h2 className="text-3xl font-bold">Strategy Generated!</h2>
                <p className="text-muted-foreground max-w-md">
                    We&apos;ve analyzed your inputs and sent a comprehensive digital marketing roadmap + 2 AI-generated social posts to <strong>{userEmail}</strong>.
                </p>
                <p className="text-sm text-white/50">Check your spam folder just in case.</p>
                <Button variant="outline" onClick={() => window.location.reload()}>Start New Session</Button>
            </div>
        );
    }

    return (
        <Card className="glass-card w-full h-[600px] flex flex-col relative overflow-hidden border-neon-green/30">
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-black/20 backdrop-blur-md">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-neon-green/10 flex items-center justify-center border border-neon-green/30">
                        <Bot className="w-6 h-6 text-neon-green" />
                    </div>
                    <div>
                        <h3 className="font-bold text-sm">SherCorpBot <span className="text-xs font-normal text-muted-foreground ml-2">v1.3 (Stable)</span></h3>
                        <p className="text-xs text-neon-green animate-pulse">● Online • Connected to Gemini Pro</p>
                    </div>
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 overflow-y-auto custom-scrollbar">
                <div className="space-y-4">
                    {messages.map((m) => (
                        <motion.div
                            key={m.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div className={`flex gap-3 max-w-[80%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                <Avatar className="w-8 h-8 border border-white/10">
                                    <AvatarFallback className={m.role === 'user' ? 'bg-white/10' : 'bg-neon-green/10 text-neon-green'}>
                                        {m.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                                    </AvatarFallback>
                                </Avatar>

                                <div className={`p-3 rounded-2xl text-sm ${m.role === 'user'
                                    ? 'bg-neon-green/20 text-neon-green border border-neon-green/30 rounded-tr-none'
                                    : 'bg-white/5 border border-white/10 rounded-tl-none'
                                    }`}>
                                    {m.content === '[DATA_COLLECTION_COMPLETE]' ? (
                                        <span className="italic flex items-center gap-2">
                                            <Loader2 className="w-3 h-3 animate-spin" /> Analyzing data...
                                        </span>
                                    ) : (
                                        m.content
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none p-3 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                                <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                                <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-black/20 backdrop-blur-md border-t border-white/10">
                {isGeneratingPlan ? (
                    <div className="text-center py-4 space-y-3">
                        <Loader2 className="w-8 h-8 text-neon-green animate-spin mx-auto" />
                        <p className="text-sm font-medium">Generating your comprehensive strategy...</p>
                        <p className="text-xs text-muted-foreground">This may take up to 60 seconds.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSend} className="flex gap-2">
                        {showUpload && !logoBase64 && (
                            <div className="relative">
                                <input
                                    type="file"
                                    id="logo-upload"
                                    className="hidden"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                                <label
                                    htmlFor="logo-upload"
                                    className="cursor-pointer p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors"
                                    title="Upload Logo"
                                >
                                    <Upload className="w-5 h-5 text-muted-foreground" />
                                </label>
                            </div>
                        )}

                        {logoBase64 && showUpload && (
                            <div className="flex items-center justify-center p-2">
                                <CheckCircle2 className="w-5 h-5 text-neon-green" />
                            </div>
                        )}

                        <Input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={showUpload && !logoBase64 ? "Or type 'skip' to continue..." : "Type your answer..."}
                            className="bg-white/5 border-white/10 focus:border-neon-green/50"
                            autoFocus
                        />
                        <Button
                            type="submit"
                            disabled={isLoading || (!input.trim() && !logoBase64)}
                            size="icon"
                            className="bg-neon-green text-black hover:bg-neon-green/80"
                        >
                            <Send className="w-5 h-5" />
                        </Button>
                    </form>
                )}
            </div>
        </Card>
    );
}
