import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | SherCorp',
    description: 'SherCorp Terms of Service – The agreement between you and SherCorp.',
};

export default function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-black text-foreground pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 border-b border-zinc-800 pb-6 uppercase tracking-tight">
                    Terms of Service
                </h1>

                <div className="prose prose-invert prose-lg max-w-none text-zinc-300">
                    <p className="lead">
                        Effective Date: {new Date().getFullYear()}-01-01
                    </p>

                    <p>
                        Welcome to SherCorp. By utilizing our website and services, you acknowledge that you have read, understood, and agree to be bound by the following Terms of Service. If you do not agree to these terms, pleaase refrain from using our services.
                    </p>

                    <h3 className="text-white mt-8 mb-4">1. Acceptance of Terms</h3>
                    <p>
                        These Terms constitute a legally binding agreement between you and SherCorp regarding your use of our website and services.
                    </p>

                    <h3 className="text-white mt-8 mb-4">2. Services</h3>
                    <p>
                        SherCorp provides digital marketing, branding, web development, and related services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without notice.
                    </p>

                    <h3 className="text-white mt-8 mb-4">3. User Conduct</h3>
                    <p>
                        You agree to use our services only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else&apos;s use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our website.
                    </p>

                    <h3 className="text-white mt-8 mb-4">4. Intellectual Property</h3>
                    <p>
                        All content, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and data compilations, is the property of SherCorp or its content suppliers and is protected by international copyright laws. Unauthorized use of any materials on this site is strictly prohibited.
                    </p>

                    <h3 className="text-white mt-8 mb-4">5. Limitation of Liability</h3>
                    <p>
                        SherCorp shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses resulting from the use of or inability to use the service.
                    </p>

                    <h3 className="text-white mt-8 mb-4">6. Governing Law</h3>
                    <p>
                        These Terms shall be governed and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions.
                    </p>

                    <h3 className="text-white mt-8 mb-4">7. Changes to Terms</h3>
                    <p>
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                    </p>

                    <h3 className="text-white mt-8 mb-4">Contact Us</h3>
                    <p>
                        If you have any questions about these Terms, please contact us:<br />
                        Email: <a href="mailto:contactme@khawarsher.com" className="text-neon-green hover:underline">contactme@khawarsher.com</a><br />
                        WhatsApp: 0321 5113643
                    </p>
                </div>
            </div>
        </div>
    );
}
