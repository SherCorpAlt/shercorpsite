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

        // 2. AI Generation (Strategy)
        const coreMessages = chatHistory.map((m: { role: string; content: string }) => ({
            role: m.role as "user" | "assistant" | "system",
            content: m.content
        }));

        const { object: strategy } = await generateObject({
            model: google('gemini-2.5-pro'),
            schema: z.object({
                business_summary: z.string(),
                strategy_guidelines: z.array(z.string()),
                growth_roadmap: z.array(z.object({
                    day: z.string(),
                    task: z.string()
                })),
                image_prompts: z.array(z.string()),
                upsell_hooks: z.array(z.string())
            }),
            system: GENERATOR_SYSTEM_PROMPT,
            messages: coreMessages,
        });

        // 3. Fetch images from Pollinations API server-side and convert to Base64
        const imagesBase64 = await Promise.all(
            strategy.image_prompts.map(async (prompt: string) => {
                const encoded = encodeURIComponent(prompt);
                const url = `https://image.pollinations.ai/prompt/${encoded}?width=1080&height=1080&nologo=true&model=flux&seed=${Math.floor(Math.random() * 99999)}`;

                try {
                    const response = await fetch(url);
                    if (!response.ok) throw new Error(`HTTP ${response.status}`);
                    const arrayBuffer = await response.arrayBuffer();
                    const buffer = Buffer.from(arrayBuffer);
                    return `data:image/jpeg;base64,${buffer.toString('base64')}`;
                } catch (e) {
                    console.error("Image generation error:", e);
                    return null;
                }
            })
        );

        const validImages = imagesBase64.filter(Boolean);

        // 4. Lock (if not admin)
        if (!isAdmin(email)) {
            await redis.set(PLAN_KEY, "true");
        }

        // 5. Return strategy to client for in-page display FIRST
        // The client will then trigger the email sending from its component
        return NextResponse.json({
            success: true,
            strategy: {
                ...strategy,
                image_urls: validImages,
            }
        });

    } catch (error) {
        console.error('Generation Error:', error);
        return NextResponse.json({ error: 'Failed to generate strategy. Please try again.' }, { status: 500 });
    }
}
