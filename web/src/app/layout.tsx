
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingNav } from "@/components/layout/floating-nav";
import { Footer } from "@/components/layout/Footer";
import { ParticleBackground } from "@/components/ui/particle-background";
import { FluidCursor } from "@/components/ui/fluid-cursor";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "SherCorp | %s",
    default: "SherCorp | Digital Marketing Agency",
  },
  description: "High-performance digital marketing agency specializing in AI Solutions, SEO, and Premium Design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col bg-background text-foreground selection:bg-neon-green/30 selection:text-neon-green`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <FluidCursor />
          <FloatingNav />

          {/* Main Content Wrapper - needs background to cover footer */}
          <div className="relative z-10 bg-background shadow-2xl mb-[50vh] rounded-b-[3rem] overflow-hidden">
            <main className="flex-1 flex flex-col min-h-screen">
              {children}
            </main>
          </div>

          <Footer />
          <div className="fixed inset-0 -z-50 pointer-events-none">
            <ParticleBackground />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
