import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | SherCorp',
    description: 'Privacy Policy for SherCorp – Learn how we collect, use, and protect your data.',
};

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-black text-foreground pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 border-b border-zinc-800 pb-6 uppercase tracking-tight">
                    Privacy Policy
                </h1>

                <div className="prose prose-invert prose-lg max-w-none text-zinc-300">
                    <p className="lead">
                        Effective Date: {new Date().getFullYear()}-01-01
                    </p>

                    <p>
                        At SherCorp (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you visit our website or use our services. By accessing our website, you agree to the terms of this policy.
                    </p>

                    <h3 className="text-white mt-8 mb-4">1. Information We Collect</h3>
                    <p>
                        We may collect personal information that you voluntarily provide to us, such as your name, email address, phone number, and any other details you share when you contact us via email, WhatsApp, or our contact forms. We also automatically collect non-personal data such as your IP address, browser type, and usage patterns through cookies and analytics tools to improve our website&apos;s performance.
                    </p>

                    <h3 className="text-white mt-8 mb-4">2. How We Use Your Information</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>To provide and maintain our services to you.</li>
                        <li>To communicate with you regarding your inquiries, projects, or our services.</li>
                        <li>To improve our website functionality and user experience.</li>
                        <li>To comply with legal obligations and protect our rights.</li>
                    </ul>

                    <h3 className="text-white mt-8 mb-4">3. Data Sharing and Disclosure</h3>
                    <p>
                        We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted third-party service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential. We may also disclose your information if required by law or to protect the safety and security of our users.
                    </p>

                    <h3 className="text-white mt-8 mb-4">4. Data Security</h3>
                    <p>
                        We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
                    </p>

                    <h3 className="text-white mt-8 mb-4">5. Third-Party Links</h3>
                    <p>
                        Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                    </p>

                    <h3 className="text-white mt-8 mb-4">6. Your Rights</h3>
                    <p>
                        Depending on your location, you may have the right to access, correct, or delete your personal information held by us. If you wish to exercise these rights, please contact us at <a href="mailto:contactme@khawarsher.com" className="text-neon-green hover:underline">contactme@khawarsher.com</a>.
                    </p>

                    <h3 className="text-white mt-8 mb-4">7. Changes to This Policy</h3>
                    <p>
                        We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
                    </p>

                    <h3 className="text-white mt-8 mb-4">Contact Us</h3>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us:<br />
                        Email: <a href="mailto:contactme@khawarsher.com" className="text-neon-green hover:underline">contactme@khawarsher.com</a><br />
                        WhatsApp: 0321 5113643
                    </p>
                </div>
            </div>
        </div>
    );
}
