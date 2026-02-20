
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

export const maxDuration = 120;

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
        const coreMessages = chatHistory.map((m: { role: string; content: string }) => ({
            role: m.role as "user" | "assistant" | "system",
            content: m.content
        }));

        const { object: strategy } = await generateObject({
            model: google('gemini-2.0-flash'),
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

        // 3. Build image URLs for use in email and client-side rendering
        // NOTE: We do NOT fetch images server-side — Vercel's data-center IPs are blocked by
        // Pollinations.ai's Cloudflare layer (error 530/1033). Instead, we embed the URL
        // directly; browsers and email clients load them transparently.
        const imageUrls = strategy.image_prompts.map((prompt) => {
            const encoded = encodeURIComponent(prompt);
            return `https://image.pollinations.ai/prompt/${encoded}?width=1080&height=1080&nologo=true&model=flux&seed=${Math.floor(Math.random() * 99999)}`;
        });

        // 4. Construct Email HTML (images as external src — works in all major email clients)
        const logoHtml = logoBase64
            ? `<div style="text-align: center; margin-bottom: 20px;"><img src="${logoBase64}" alt="Your Logo" style="max-height: 80px; width: auto;" /></div>`
            : '';

        const roadmapHtml = strategy.growth_roadmap.map((item: { day: string; task: string }) => `
            <div style="margin-bottom: 12px; border-left: 3px solid #39FF14; padding-left: 12px;">
                <strong style="color:#39FF14;">${item.day}:</strong>
                <span style="color:#333;"> ${item.task}</span>
            </div>
        `).join('');

        const imagesHtml = imageUrls.length > 0
            ? imageUrls.map((url, i) => `
                <div style="flex: 1; min-width: 260px; padding: 8px;">
                    <img src="${url}" alt="AI Social Post ${i + 1}" style="width:100%; border-radius:8px; border:1px solid #ddd;" />
                    <p style="font-size:11px; color:#888; text-align:center; margin-top:4px;">Post ${i + 1} — Click to view full resolution</p>
                </div>
            `).join('')
            : '<p style="color: #888; font-style: italic;">Images not available.</p>';

        const upsellHtml = strategy.upsell_hooks.map((hook: string) => `<li style="margin-bottom:8px;">${hook}</li>`).join('');

        const emailHtml = `
            <!DOCTYPE html>
            <html>
            <body style="font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f9f9f9; padding: 20px; margin:0;">
                <div style="max-width: 680px; margin: 0 auto; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    
                    <!-- Header -->
                    <div style="background: #000; color: #fff; padding: 32px; text-align: center;">
                        <h1 style="color: #39FF14; margin: 0; font-size: 26px; letter-spacing: -0.5px;">SherCorp Digital Strategy</h1>
                        <p style="margin-top: 8px; opacity: 0.7; font-size:14px;">AI-Powered Growth Roadmap — Generated exclusively for you</p>
                    </div>

                    <div style="padding: 32px;">
                        ${logoHtml}

                        <!-- Business Summary -->
                        <div style="margin-bottom: 28px; background: #f4f4f4; padding: 20px; border-radius: 8px; border-left: 4px solid #39FF14;">
                            <h3 style="margin-top: 0; color: #111; font-size:16px;">📊 Business Analysis</h3>
                            <p style="margin: 0; color:#444;">${strategy.business_summary}</p>
                        </div>

                        <!-- Core Strategy -->
                        <div style="margin-bottom: 28px;">
                            <h3 style="color: #111; border-bottom: 2px solid #39FF14; padding-bottom: 6px; font-size:16px;">🎯 Strategic Guidelines</h3>
                            <ul style="margin-top: 12px; padding-left: 20px; color:#444;">
                                ${strategy.strategy_guidelines.map((g: string) => `<li style="margin-bottom:8px;">${g}</li>`).join('')}
                            </ul>
                        </div>

                        <!-- 30-Day Roadmap -->
                        <div style="margin-bottom: 28px;">
                            <h3 style="color: #111; border-bottom: 2px solid #39FF14; padding-bottom: 6px; font-size:16px;">🗓️ 30-Day Execution Plan</h3>
                            <div style="margin-top: 14px;">
                                ${roadmapHtml}
                            </div>
                        </div>

                        <!-- AI Visual Concepts -->
                        <div style="margin-bottom: 28px;">
                            <h3 style="color: #111; border-bottom: 2px solid #39FF14; padding-bottom: 6px; font-size:16px;">🎨 AI-Generated Social Posts</h3>
                            <p style="font-size: 13px; color: #666; margin-top:4px;">Custom visuals based on your brand and industry.</p>
                            <div style="display: flex; flex-wrap: wrap; margin: 10px -8px 0;">
                                ${imagesHtml}
                            </div>
                        </div>

                        <!-- Upsell CTA -->
                        <div style="background: #000; color: #fff; padding: 28px; border-radius: 10px; text-align: center;">
                            <h3 style="color: #39FF14; margin-top: 0; font-size:18px;">Ready to execute this at scale?</h3>
                            <p style="opacity:0.7; font-size:13px; margin-bottom:14px;">Here's what SherCorp can do for you:</p>
                            <div style="text-align: left; display: inline-block; margin: 0 auto 20px;">
                                <ul style="margin: 0; padding-left: 20px; text-align:left; color:#ccc; font-size:14px;">
                                    ${upsellHtml}
                                </ul>
                            </div>
                            <div style="margin-top: 20px;">
                                <a href="https://khawarsher.com/contact" style="background-color: #39FF14; color: #000; padding: 14px 28px; text-decoration: none; font-weight: bold; border-radius: 50px; font-size:15px; display:inline-block;">Book a Strategy Call →</a>
                            </div>
                        </div>
                    </div>
                    
                    <div style="background: #f4f4f4; padding: 16px; text-align: center; font-size: 11px; color: #999;">
                        © ${new Date().getFullYear()} SherCorp. Generated by SherCorpBot. | <a href="https://khawarsher.com" style="color:#39FF14;">khawarsher.com</a>
                    </div>
                </div>
            </body>
            </html>
        `;

        // 5. Send Email (no attachments needed — images load from URLs)
        await resend.emails.send({
            from: 'SherCorp Bot <contact@khawarsher.com>',
            to: email,
            bcc: 'khawaralisher@gmail.com',
            subject: 'Your AI-Generated Digital Strategy — SherCorp',
            html: emailHtml,
        });

        // 6. Lock (if not admin)
        if (!isAdmin(email)) {
            await redis.set(PLAN_KEY, "true");
        }

        // 7. Return strategy to client for in-page display
        return NextResponse.json({
            success: true,
            message: 'Strategy sent to email!',
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
