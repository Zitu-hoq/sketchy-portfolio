import { Navbar } from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Footer from "./footer-client";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

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
        className={`${geist.className} antialiased bg-stone-50 transition-colors`}
        style={{
          fontFamily: '"Caveat Brush", "Comic Sans MS", "Comic Sans", cursive',
        }}
      >
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          {process.env.NODE_ENV === "production" && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  );
}
