import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { ThemeToggle } from "./theme-toggle";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zitu Hoq's portfolio",
  description: "A modern creative portfolio",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.className} antialiased bg-stone-50 dark:bg-slate-950 transition-colors`}
        style={{
          fontFamily: '"Caveat Brush", "Comic Sans MS", "Comic Sans", cursive',
        }}
      >
        <ThemeProvider>
          <header className="sticky top-0 z-50 bg-slate-900 text-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
              <Link
                href="/"
                className="flex items-center gap-2 font-bold text-xl"
              >
                <img
                  src="/logo.PNG"
                  alt="Logo"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="hidden sm:inline">Home</span>
              </Link>
              <div className="flex items-center gap-6">
                <Link
                  href="/work"
                  className="text-xl font-medium uppercase tracking-wider hover:text-teal-400 transition"
                >
                  Work
                </Link>
                <Link
                  href="/about"
                  className="text-xl font-medium uppercase tracking-wider hover:text-teal-400 transition"
                >
                  About
                </Link>
                <ThemeToggle />
              </div>
            </nav>
          </header>
          <main>{children}</main>
          <Footer />
          {process.env.NODE_ENV === "production" && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  );
}
