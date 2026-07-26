"use client";

import Tape from "@/components/Tape";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";

const WiredButton = dynamic(
  () => import("wired-elements-react").then((m) => m.WiredButton),
  { ssr: false },
);
const WiredLink = dynamic(
  () => import("wired-elements-react").then((m) => m.WiredLink),
  { ssr: false },
);

export default function Home() {
  const router = useRouter();
  return (
    <div>
      {/* Hero Section */}
      <section className="relative -mt-4 bg-slate-900 text-amber-50 pb-32 max-sm:pt-8 px-6 max-sm:h-[50vh]">
        <div className="mx-auto max-w-7xl flex flex-col items-center text-center max-sm:justify-center">
          <img src="/hero.svg" alt="Hero" className="w-3/7 max-sm:w-4/7" />
          <h1 className="text-6xl max-sm:text-3xl max-sm:pt-4 max-md:text-5xl font-bold tracking-tighter text-balance">
            Md Ziaul Hoque Zitu
          </h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="pt-20 max-sm:pt-4 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24 text-justify">
            <div>
              <h2 className="text-5xl max-sm:text-3xl font-bold mb-8 max-sm:mb-4">
                Hi, I'm Zitu
              </h2>
              <p className="text-lg max-sm:text-sm mb-6 max-sm:mb-4 leading-relaxed">
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
                  className="bg-btn-primary hover:bg-btn-primary-hover dark:bg-btn-primary dark:hover:bg-btn-primary-hover uppercase text-secondary dark:text-slate-50"
                >
                  Learn more about me
                </WiredButton>
              </Link>
            </div>
            <div className="h-80 rounded-lg flex items-center justify-center">
              <img
                src="/profile.svg"
                alt="Profile"
                className="h-full w-full object-cover rounded-lg fill-primary dark:fill-primary"
              />
            </div>
          </div>
          <Tape />
        </div>
      </section>

      {/* Portfolio & Chat CTA Section */}
      <section className="bg-primary dark:bg-primary py-20 max-sm:py-4 max-md:py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-md:gap-8">
            {/* Portfolio */}
            <div className="flex flex-col items-center justify-center space-y-6 max-sm:space-y-4 text-center">
              <div className="w-full max-w-xs h-64 bg-transparent rounded-lg flex items-center justify-center">
                <img
                  src="/files.svg"
                  alt="Profile"
                  className="h-full w-full object-contain rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl max-sm:text-3xl font-bold">
                  My Portfolio
                </h2>
                <p className="text-2xl max-sm:text-xl">
                  Browse through a selection of my most recent&nbsp;
                  <WiredLink
                    elevation={2}
                    href="/work"
                    className="text-2xl max-sm:text-xl text-secondary"
                    style={
                      {
                        "--wired-link-decoration-color": "#eab308",
                      } as React.CSSProperties
                    }
                    onClick={(e: React.MouseEvent) => {
                      e.preventDefault();
                      router.push("/work");
                    }}
                  >
                    work here.
                  </WiredLink>
                </p>
              </div>
            </div>

            {/* Chat CTA */}
            <div className="flex flex-col items-center justify-center space-y-6 text-center max-sm:space-y-4">
              <div className="w-full max-w-xs h-64 bg-transparent rounded-lg flex items-center justify-center">
                <img
                  src="/chat.svg"
                  alt="Chat"
                  className="h-full w-full object-contain rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl max-sm:text-3xl font-bold">
                  Let&apos;s chat!
                </h2>
                <p className="text-2xl max-sm:text-xl">
                  I love working with teams, agencies and individuals &nbsp;
                  <WiredLink
                    elevation={2}
                    className="text-2xl max-sm:text-xl text-secondary"
                    style={
                      {
                        "--wired-link-decoration-color": "#eab308",
                      } as React.CSSProperties
                    }
                    onClick={(e: React.MouseEvent) => {
                      e.preventDefault();
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
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
