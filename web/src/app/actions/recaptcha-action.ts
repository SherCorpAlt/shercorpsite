"use server";

import { verifyRecaptcha } from "@/lib/recaptcha";

export async function verifyRecaptchaAction(token: string) {
    return await verifyRecaptcha(token);
}
