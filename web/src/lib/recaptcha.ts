export async function verifyRecaptcha(token: string | null) {
    if (!token) {
        return { success: false, message: "Please complete the reCAPTCHA verification." };
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
        console.warn("RECAPTCHA_SECRET_KEY is not set in environment variables. Skipping verification for development.");
        return { success: true };
    }

    try {
        const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `secret=${secretKey}&response=${token}`,
        });

        const data = await response.json();

        if (data.success) {
            return { success: true };
        } else {
            console.warn("reCAPTCHA verification failed:", data["error-codes"]);
            return { success: false, message: "reCAPTCHA verification failed. Please try again." };
        }
    } catch (error) {
        console.error("reCAPTCHA verification error:", error);
        return { success: false, message: "An error occurred during verification. Please try again." };
    }
}
