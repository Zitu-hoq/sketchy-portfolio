"use client";

import Tape from "@/components/Tape";
import dynamic from "next/dynamic";
import Link from "next/link";

const WiredButton = dynamic(
  () => import("wired-elements-react").then((m) => m.WiredButton),
  { ssr: false },
);
const WiredLink = dynamic(
  () => import("wired-elements-react").then((m) => m.WiredLink),
  { ssr: false },
);

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-amber-50 pb-32 px-6">
        <div className="mx-auto max-w-7xl flex flex-col items-center text-center">
          <img src="/hero.svg" alt="Hero" className="w-3/7" />
          <h1 className="text-6xl md:text-6xl font-bold tracking-tighter text-balance">
            Md Ziaul Hoque Zitu
          </h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="pt-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Hi, I'm Zitu
              </h2>
              <p className="text-lg mb-6 leading-relaxed">
                I&apos;m a skilled full-stack developer and a cyber security
                analyst, I am dedicated to turning ideas into innovative and
                secure web applications. Explore my latest projects and
                articles, showcasing my expertise in web development and cyber
                security.
              </p>
              <p className="mb-8 leading-relaxed">
                Transforming ideas into solutions with innovation and security.
              </p>
              <Link href="/about">
                <WiredButton
                  elevation={2}
                  className="bg-amber-100 hover:bg-amber-200 dark:bg-amber-800 dark:hover:bg-amber-700 uppercase text-slate-900 dark:text-slate-50"
                >
                  Learn more about me
                </WiredButton>
              </Link>
            </div>
            <div className="h-80 rounded-lg flex items-center justify-center">
              <img
                src="/profile.svg"
                alt="Profile"
                className="h-full w-full object-cover rounded-lg fill-amber-50 dark:fill-amber-950"
              />
            </div>
          </div>
          <Tape />
        </div>
      </section>

      {/* Portfolio & Chat CTA Section */}
      <section className="bg-amber-50 dark:bg-amber-950 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Portfolio */}
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="w-full max-w-xs h-64 bg-transparent rounded-lg flex items-center justify-center">
                <img
                  src="/files.svg"
                  alt="Profile"
                  className="h-full w-full object-contain rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl font-bold">My Portfolio</h2>
                <p className="text-2xl">
                  Browse through a selection of my most recent&nbsp;
                  <WiredLink
                    elevation={2}
                    href="/work"
                    className="text-2xl"
                    style={
                      {
                        "--wired-link-decoration-color": "#eab308",
                      } as React.CSSProperties
                    }
                  >
                    work here.
                  </WiredLink>
                </p>
              </div>
            </div>

            {/* Chat CTA */}
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="w-full max-w-xs h-64 bg-transparent rounded-lg flex items-center justify-center">
                <img
                  src="/chat.svg"
                  alt="Chat"
                  className="h-full w-full object-contain rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl font-bold">Let&apos;s chat!</h2>
                <p className="text-2xl">
                  I love working with teams, agencies and individuals &nbsp;
                  <WiredLink
                    elevation={2}
                    href="/contact"
                    className="text-2xl"
                    style={
                      {
                        "--wired-link-decoration-color": "#eab308",
                      } as React.CSSProperties
                    }
                  >
                    get in touch.
                  </WiredLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
