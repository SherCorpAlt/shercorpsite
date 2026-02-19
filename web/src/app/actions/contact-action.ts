"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormState {
    success: boolean;
    message: string;
}

export async function submitContactForm(
    prevState: ContactFormState,
    formData: FormData
): Promise<ContactFormState> {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;
    // Verify token logic removed for debugging purposes
    /*
    const token = formData.get("recaptchaToken") as string;

    if (!token) {
        return { success: false, message: "Anti-spam verification failed. Please try again." };
    }

    try {
        const verificationResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
        });

        const verificationResult = await verificationResponse.json();

        if (!verificationResult.success || verificationResult.score < 0.5) {
            console.warn("Recaptcha verification failed:", verificationResult);
            return {
                success: false,
                message: "Our systems detected unusual activity. Please try again later.",
            };
        }
    } catch (error) {
        console.error("Recaptcha verification error:", error);
        return {
            success: false,
            message: "Anti-spam verification error. Please try again.",
        };
    }
    */

    if (!name || !email || !message) {
        return { success: false, message: "Please fill in all required fields." };
    }

    const emailBody = `
    <h1>New Inquiry from SherCorp Website</h1>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject || "No Subject"}</p>
    <p><strong>Message:</strong></p>
    <p style="white-space: pre-wrap;">${message}</p>
  `;

    try {
        // Send to contactme@khawarsher.com
        await resend.emails.send({
            from: "SherCorp <contact@khawarsher.com>",
            to: "contactme@khawarsher.com",
            subject: `New SherCorp Inquiry: ${subject || "Web Inquiry"}`,
            html: emailBody,
            replyTo: email,
        });

        // Send copy to khawaralisher@gmail.com
        await resend.emails.send({
            from: "SherCorp <contact@khawarsher.com>",
            to: "khawaralisher@gmail.com",
            subject: `From website: ${subject || "Web Inquiry"}`,
            html: emailBody,
            replyTo: email,
        });

        return { success: true, message: "Message sent successfully!" };
    } catch (error) {
        console.error("Resend Error:", error);
        return { success: false, message: "Failed to send message. Please try again." };
    }
}
