"use client";

import ReCAPTCHA from "react-google-recaptcha";
import { useRef, forwardRef, useImperativeHandle } from "react";

interface RecaptchaV2Props {
    onChange?: (token: string | null) => void;
    sitekey?: string;
    theme?: "light" | "dark";
}

export const RecaptchaV2 = forwardRef<{ reset: () => void; getValue: () => string | null }, RecaptchaV2Props>(
    ({ onChange, sitekey = "6LcvyXwsAAAAAPGR8jWlPtWrwsMNz6zvfpge7i5o", theme = "dark" }, ref) => {
        const recaptchaRef = useRef<ReCAPTCHA>(null);

        useImperativeHandle(ref, () => ({
            reset: () => recaptchaRef.current?.reset(),
            getValue: () => recaptchaRef.current?.getValue() || null,
        }));

        return (
            <div className="flex justify-center my-4">
                <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={sitekey}
                    onChange={onChange}
                    theme={theme}
                />
            </div>
        );
    }
);

RecaptchaV2.displayName = "RecaptchaV2";
