import { NextResponse } from 'next/server';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateObject } from 'ai';
import { z } from 'zod';
import { redis } from '@/lib/redis-utils';
import { isAdmin } from '@/lib/constants';
import { GENERATOR_SYSTEM_PROMPT } from '@/lib/shercorp-prompts';

const google = createGoogleGenerativeAI({
    apiKey: process.env.GEMINI_API_KEY,
});

export const maxDuration = 120;

const strategySchema = z.object({
    business_summary: z.string(),
    strategy_guidelines: z.array(z.string()),
    growth_roadmap: z.array(z.object({
        day: z.string(),
        task: z.string()
    })),
    image_prompts: z.array(z.string()),
    upsell_hooks: z.array(z.string())
});

export async function POST(req: Request) {
    try {
        const { email: rawEmail, chatHistory } = await req.json();
        const email = rawEmail?.toLowerCase();

        if (!email || !chatHistory) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // 1. Check Admin / Duplicate
        const PLAN_KEY = `PLAN_GENERATED:${email}`;
        const alreadyGenerated = await redis.get(PLAN_KEY);

        if (alreadyGenerated && !isAdmin(email)) {
            return NextResponse.json({ error: 'You have already generated your free plan. Contact us for more.' }, { status: 403 });
        }

        // 2. AI Generation (Strategy) — try flash first, fallback to pro
        const coreMessages = chatHistory.map((m: { role: string; content: string }) => ({
            role: m.role as "user" | "assistant" | "system",
            content: m.content
        }));

        let strategy;
        try {
            // Primary: gemini-2.5-flash (fast, reliable, rarely overloaded)
            const result = await generateObject({
                model: google('gemini-2.5-flash'),
                schema: strategySchema,
                system: GENERATOR_SYSTEM_PROMPT,
                messages: coreMessages,
            });
            strategy = result.object;
        } catch (primaryError) {
            console.warn('Flash model failed, attempting pro fallback:', primaryError);
            try {
                // Fallback: gemini-2.5-pro
                const result = await generateObject({
                    model: google('gemini-2.5-pro'),
                    schema: strategySchema,
                    system: GENERATOR_SYSTEM_PROMPT,
                    messages: coreMessages,
                });
                strategy = result.object;
            } catch (fallbackError) {
                console.error('Both models failed:', fallbackError);
                return NextResponse.json(
                    { error: 'AI models are currently overloaded. Please try again in a few minutes.' },
                    { status: 503 }
                );
            }
        }

        // 3. Build image URLs for client-side rendering
        // NOTE: We do NOT fetch images server-side — Vercel's data-center IPs are blocked by
        // Pollinations.ai's Cloudflare layer (error 530/1033). Instead, we pass the URL
        // directly to the client; browsers load them transparently.
        const imageUrls = strategy.image_prompts.map((prompt: string) => {
            const encoded = encodeURIComponent(prompt);
            return `https://image.pollinations.ai/prompt/${encoded}?width=1080&height=1080&nologo=true&model=flux&seed=${Math.floor(Math.random() * 99999)}`;
        });

        // 4. Lock (if not admin)
        if (!isAdmin(email)) {
            await redis.set(PLAN_KEY, "true");
        }

        // 5. Return strategy to client for in-page display
        return NextResponse.json({
            success: true,
            strategy: {
                ...strategy,
                image_urls: imageUrls,
            }
        });

    } catch (error) {
        console.error('Generation Error:', error);
        return NextResponse.json({ error: 'Failed to generate strategy. Please try again.' }, { status: 500 });
    }
}
