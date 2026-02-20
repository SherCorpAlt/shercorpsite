
import { google } from '@ai-sdk/google';
import { streamText } from 'ai';
import { INTERVIEWER_PROMPT } from '@/lib/shercorp-prompts';

export const maxDuration = 30;

export async function POST(req: Request) {
    const { messages, userName } = await req.json();

    const systemPrompt = INTERVIEWER_PROMPT.replace('[Name]', userName || 'User');

    const result = streamText({
        model: google('gemini-1.5-flash'),
        system: systemPrompt,
        messages,
    });

    return result.toTextStreamResponse();
}
