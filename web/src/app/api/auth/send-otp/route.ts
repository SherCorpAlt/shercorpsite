
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { redis } from '@/lib/redis-utils';
import { isAdmin } from '@/lib/constants';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { email: rawEmail, name } = await req.json();
        const email = rawEmail?.toLowerCase();

        if (!email || !name) {
            return NextResponse.json({ error: 'Email and Name are required' }, { status: 400 });
        }

        // Rate limiting check (simple based on email)
        const RATE_LIMIT_KEY = `RATE_LIMIT:${email}`;
        const hasSentRecently = await redis.get(RATE_LIMIT_KEY);

        if (hasSentRecently && !isAdmin(email)) {
            return NextResponse.json({ error: 'OTP request rate exceeded. Please try again in a few minutes.' }, { status: 429 });
        }

        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const OTP_KEY = `OTP:${email}`;

        // Store OTP in Redis - expires in 300 seconds (5 mins)
        await redis.set(OTP_KEY, JSON.stringify({ code: otp, name: name }), { ex: 300 });

        // Set Rate Limit Key - expires in 60 seconds
        await redis.set(RATE_LIMIT_KEY, "true", { ex: 60 });

        // Send OTP via Resend
        await resend.emails.send({
            from: 'SherCorp Bot <contact@khawarsher.com>',
            to: email, // Resend only allows sending to verified domain or your email in dev mode? No, this is production ready usually if domain is verified.
            subject: 'Your SherCorp Bot Access Code',
            html: `
                <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                    <h2 style="color: #39FF14; text-shadow: 1px 1px 2px #000;">SherCorp Bot Access</h2>
                    <p>Hello ${name},</p>
                    <p>Here is your verification code to access SherCorpBot:</p>
                    <div style="background-color: #f4f4f4; padding: 15px; border-radius: 4px; text-align: center; margin: 20px 0;">
                        <span style="font-size: 24px; font-weight: bold; letter-spacing: 5px; color: #000;">${otp}</span>
                    </div>
                    <p>This code is valid for 5 minutes.</p>
                    <p>If you didn't request this, purely ignore it.</p>
                </div>
            `,
        });

        return NextResponse.json({ success: true, message: 'OTP sent successfully' });

    } catch (error) {
        console.error('Send OTP Error:', error);
        return NextResponse.json({ error: 'Failed to send OTP. Please try again later.' }, { status: 500 });
    }
}
