
import { NextResponse } from 'next/server';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateObject } from 'ai';
import { z } from 'zod';
import { Resend } from 'resend';
import { redis } from '@/lib/redis-utils';
import { isAdmin } from '@/lib/constants';
import { GENERATOR_SYSTEM_PROMPT } from '@/lib/shercorp-prompts';

const google = createGoogleGenerativeAI({
    apiKey: process.env.GEMINI_API_KEY,
});

const resend = new Resend(process.env.RESEND_API_KEY);

export const maxDuration = 60; // Allow more time for generation

export async function POST(req: Request) {
    try {
        const { email: rawEmail, chatHistory, logoBase64 } = await req.json();
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
        // We need to convert the chat history to a format the model understands
        const coreMessages = chatHistory.map((m: { role: string; content: string }) => ({
            role: m.role as "user" | "assistant" | "system",
            content: m.content
        }));

        const { object: strategy } = await generateObject({
            model: google('gemini-2.0-flash'), // Current recommended model
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

        // 3. Image Generation URLs
        const imageUrls = strategy.image_prompts.map((prompt: string) => {
            const encodedPrompt = encodeURIComponent(prompt + " realistic, high quality, 8k");
            return `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1080&height=1080&nologo=true`;
        });

        // 4. Construct Email HTML
        const logoHtml = logoBase64
            ? `<div style="text-align: center; margin-bottom: 20px;"><img src="${logoBase64}" alt="Your Logo" style="max-height: 80px; width: auto;" /></div>`
            : '';

        const roadmapHtml = strategy.growth_roadmap.map((item: { day: string; task: string }) => `
            <div style="margin-bottom: 10px; border-left: 3px solid #39FF14; padding-left: 10px;">
                <strong>${item.day}:</strong> ${item.task}
            </div>
        `).join('');

        const imagesHtml = imageUrls.map((url: string) => `
            <div style="flex: 1; min-width: 250px; padding: 10px;">
                <img src="${url}" alt="AI Generated Concept" style="width: 100%; border-radius: 8px; border: 1px solid #ddd;" />
            </div>
        `).join('');

        const upsellHtml = strategy.upsell_hooks.map((hook: string) => `<li>${hook}</li>`).join('');

        const emailHtml = `
            <!DOCTYPE html>
            <html>
            <body style="font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f9f9f9; padding: 20px;">
                <div style="max-width: 700px; margin: 0 auto; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    
                    <!-- Header -->
                    <div style="background: #000; color: #fff; padding: 30px; text-align: center;">
                        <h1 style="color: #39FF14; margin: 0; font-size: 28px;">SherCorp Digital Strategy</h1>
                        <p style="margin-top: 10px; opacity: 0.8;">AI-Powered Roadmap for Growth</p>
                    </div>

                    <div style="padding: 30px;">
                        ${logoHtml}

                        <!-- Business Summary -->
                        <div style="margin-bottom: 30px; background: #f4f4f4; padding: 20px; border-radius: 8px;">
                            <h3 style="margin-top: 0; color: #333;">Business Analysis</h3>
                            <p>${strategy.business_summary}</p>
                        </div>

                        <!-- Core Strategy -->
                        <div style="margin-bottom: 30px;">
                            <h3 style="color: #333; border-bottom: 2px solid #39FF14; padding-bottom: 5px; display: inline-block;">Strategic Guidelines</h3>
                            <ul style="margin-top: 15px;">
                                ${strategy.strategy_guidelines.map((g: string) => `<li>${g}</li>`).join('')}
                            </ul>
                        </div>

                        <!-- 30-Day Roadmap -->
                        <div style="margin-bottom: 30px;">
                            <h3 style="color: #333; border-bottom: 2px solid #39FF14; padding-bottom: 5px; display: inline-block;">30-Day Execution Plan</h3>
                            <div style="margin-top: 15px;">
                                ${roadmapHtml}
                            </div>
                        </div>

                        <!-- Visual Concepts -->
                        <div style="margin-bottom: 30px;">
                            <h3 style="color: #333; border-bottom: 2px solid #39FF14; padding-bottom: 5px; display: inline-block;">AI-Generated Visual Concepts</h3>
                            <p style="font-size: 14px; color: #666;">Based on your brand identity parameters.</p>
                            <div style="display: flex; flex-wrap: wrap; margin: 0 -10px;">
                                ${imagesHtml}
                            </div>
                        </div>

                        <!-- Next Steps / Upsell -->
                        <div style="background: #000; color: #fff; padding: 25px; border-radius: 8px; text-align: center;">
                            <h3 style="color: #39FF14; margin-top: 0;">Ready to execute this at scale?</h3>
                            <div style="text-align: left; display: inline-block; margin: 0 auto;">
                                <ul style="margin-bottom: 20px;">
                                    ${upsellHtml}
                                </ul>
                            </div>
                            <div style="margin-top: 20px;">
                                <a href="https://khawarsher.com/contact" style="background-color: #39FF14; color: #000; padding: 12px 25px; text-decoration: none; font-weight: bold; border-radius: 50px;">Book a Strategy Call</a>
                            </div>
                        </div>
                    </div>
                    
                    <div style="background: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; color: #888;">
                        &copy; ${new Date().getFullYear()} SherCorp. Generated by SherCorpBot.
                    </div>
                </div>
            </body>
            </html>
        `;

        // 5. Send Email
        await resend.emails.send({
            from: 'SherCorp Bot <contact@khawarsher.com>',
            to: email,
            bcc: 'khawaralisher@gmail.com', // Always notify admin
            subject: 'Your AI-Generated Digital Strategy - SherCorp',
            html: emailHtml,
        });

        // 6. Lock (if not admin)
        if (!isAdmin(email)) {
            await redis.set(PLAN_KEY, "true");
        }

        return NextResponse.json({ success: true, message: 'Strategy sent to email!' });

    } catch (error) {
        console.error('Generation Error:', error);
        return NextResponse.json({ error: 'Failed to generate strategy. Please try again.' }, { status: 500 });
    }
}
