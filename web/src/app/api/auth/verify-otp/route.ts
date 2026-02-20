
import { NextResponse } from 'next/server';
import { redis } from '@/lib/redis-utils';

export async function POST(req: Request) {
    try {
        const { email: rawEmail, code } = await req.json();
        const email = rawEmail?.toLowerCase();

        if (!email || !code) {
            return NextResponse.json({ error: 'Email and Code are required' }, { status: 400 });
        }

        const OTP_KEY = `OTP:${email}`;
        const storedData = await redis.get(OTP_KEY);

        if (!storedData) {
            return NextResponse.json({ error: 'OTP expired or not found. Please request a new one.' }, { status: 401 });
        }

        // Parse if it's a string, otherwise use directly if object
        const parsedData = typeof storedData === 'string' ? JSON.parse(storedData) : storedData;

        if (parsedData.code !== code) {
            return NextResponse.json({ error: 'Invalid OTP code. Please try again.' }, { status: 401 });
        }

        // OTP Valid - Clean up used OTP
        await redis.del(OTP_KEY);

        return NextResponse.json({ success: true, name: parsedData.name });

    } catch (error) {
        console.error('Verify OTP Error:', error);
        return NextResponse.json({ error: 'Verification failed. Please try again.' }, { status: 500 });
    }
}
