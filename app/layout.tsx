import { Navbar } from "@/components/Navbar";
import { DataProvider } from "@/context/DataContext";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Comic_Neue } from "next/font/google";
import Footer from "./footer-client";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

const comicNeue = Comic_Neue({
  subsets: ["latin"],
  weight: ["400", "700"],
});

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
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${comicNeue.className} antialiased bg-primary dark:bg-primary text-secondary dark:text-secondary transition-colors`}
        style={{
          fontFamily: `"Comic Sans MS", "Comic Sans", ${comicNeue.style.fontFamily}, serif`,
        }}
      >
        <ThemeProvider>
          <DataProvider>
            <Navbar />
            <main className="pt-24">{children}</main>
            <Footer />
            {process.env.NODE_ENV === "production" && <Analytics />}
            <SpeedInsights />
          </DataProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
