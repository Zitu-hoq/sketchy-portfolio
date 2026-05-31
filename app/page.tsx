"use client";

import Tape from "@/components/Tape";
import Link from "next/link";
import { WiredButton, WiredLink } from "wired-elements-react";

export default function Home() {
  const portfolioItems = [
    { id: 1, title: "Ocean Dreams", category: "Animation" },
    { id: 2, title: "Urban Landscape", category: "Illustration" },
    { id: 3, title: "Character Development", category: "Design" },
    { id: 4, title: "Story Animation", category: "Animation" },
    { id: 5, title: "Digital Painting", category: "Art" },
    { id: 6, title: "Concept Art Series", category: "Design" },
    { id: 7, title: "Motion Graphics", category: "Animation" },
    { id: 8, title: "Character Illustration", category: "Illustration" },
    { id: 9, title: "Environmental Design", category: "Design" },
  ];

  return (
    <div className="bg-stone-50">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-stone-200 pb-32 px-6">
        <div className="mx-auto max-w-7xl flex flex-col items-center text-center">
          <img src="/hero.svg" alt="Hero" className="w-3/7" />
          <h1 className="text-6xl md:text-6xl font-bold tracking-tighter text-balance">
            Md Ziaul Hoque Zitu
          </h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-stone-50 pt-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">
                Hi, I'm Zitu
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I&apos;m a skilled full-stack developer and a cyber security
                analyst, I am dedicated to turning ideas into innovative and
                secure web applications. Explore my latest projects and
                articles, showcasing my expertise in web development and cyber
                security.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Transforming ideas into solutions with innovation and security.
              </p>
              <Link href="/about">
                <WiredButton
                  elevation={2}
                  className="bg-teal-400 uppercase text-slate-900"
                >
                  Learn more about me
                </WiredButton>
              </Link>
            </div>
            <div className="h-80 rounded-lg flex items-center justify-center">
              <img
                src="/profile.svg"
                alt="Profile"
                className="h-full w-full object-cover rounded-lg fill-slate-900"
              />
            </div>
          </div>
          <Tape />
        </div>
      </section>

      {/* Portfolio & Chat CTA Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Portfolio */}
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="w-full max-w-xs h-64 bg-gray-200 rounded-lg flex items-center justify-center border-2 border-navy/20">
                <img
                  src="/portfolio.svg"
                  alt="Portfolio"
                  className="h-full w-full object-contain rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-slate-900">
                  My Portfolio
                </h2>
                <p className="text-slate-900 text-2xl">
                  Browse through a selection of my most recent&nbsp;
                  <WiredLink
                    elevation={2}
                    href="/work"
                    className="text-2xl"
                    style={
                      {
                        "--wired-link-decoration-color": "#26A69A",
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
              <div className="w-full max-w-xs h-64 bg-gray-200 rounded-lg flex items-center justify-center border-2 border-navy/20">
                <img
                  src="/portfolio.svg"
                  alt="Chat"
                  className="h-full w-full object-contain rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl text-slate-900 font-bold">
                  Let&apos;s chat!
                </h2>
                <p className="text-slate-900 text-2xl">
                  I love working with teams, agencies and individuals &nbsp;
                  <WiredLink
                    elevation={2}
                    href="/contact"
                    className="text-2xl"
                    style={
                      {
                        "--wired-link-decoration-color": "#26A69A",
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
