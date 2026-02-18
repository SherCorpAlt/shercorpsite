import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Disclaimer | SherCorp',
    description: 'SherCorp Disclaimer – Limitations of liability.',
};

export default function DisclaimerPage() {
    return (
        <div className="min-h-screen bg-black text-foreground pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 border-b border-zinc-800 pb-6 uppercase tracking-tight">
                    Disclaimer
                </h1>

                <div className="prose prose-invert prose-lg max-w-none text-zinc-300">
                    <p className="lead">
                        Effective Date: {new Date().getFullYear()}-01-01
                    </p>

                    <p>
                        The information provided on this website (the &quot;Service&quot;) is for general informational purposes only. SherCorp (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) assumes no responsibility for errors or omissions in the contents on the Service.
                    </p>

                    <h3 className="text-white mt-8 mb-4">No Professional Advice</h3>
                    <p>
                        The information contained on the Service is not intended as, and shall not be understood or construed as, professional advice. While the employees and/or owners of the Service are professionals and the information provided on this Service relates to issues within the Company’s area of professionalism, the information contained on this Service is not a substitute for advice from a professional who is aware of the facts and circumstances of your individual situation.
                    </p>

                    <h3 className="text-white mt-8 mb-4">Accuracy of Information</h3>
                    <p>
                        Although we strive to keep the information on the Service up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the Service or the information, products, services, or related graphics contained on the Service for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
                    </p>

                    <h3 className="text-white mt-8 mb-4">External Links Disclaimer</h3>
                    <p>
                        The Service may contain links to external websites that are not provided or maintained by or in any way affiliated with the Company. Please note that the Company does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
                    </p>

                    <h3 className="text-white mt-8 mb-4">Limitation of Liability</h3>
                    <p>
                        In no event shall the Company be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. The Company reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice.
                    </p>

                    <h3 className="text-white mt-8 mb-4">Contact Us</h3>
                    <p>
                        If you have any questions about this Disclaimer, please contact us:<br />
                        Email: <a href="mailto:contactme@khawarsher.com" className="text-neon-green hover:underline">contactme@khawarsher.com</a><br />
                        WhatsApp: 0321 5113643
                    </p>
                </div>
            </div>
        </div>
    );
}
