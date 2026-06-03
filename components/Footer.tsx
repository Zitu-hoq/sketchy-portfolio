"use client";

import {
  FacebookIcon,
  GithubIcon,
  InstaIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/components/Icons";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { WiredButton, WiredLink } from "wired-elements-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const pathname = usePathname();
  const isWorkPage = pathname === "/work";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", { email, message });
    setSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setMessage("");
      setSubmitted(false);
    }, 2000);
  };

  return (
    <footer
      className={`bg-slate-900 text-white mt-20 ${isWorkPage ? "[clip-path:url(#top-arch)]" : "rounded-t-3xl"}`}
    >
      {/* Sketchy filter for social icons */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter
            id="sketchy-filter"
            x="-10%"
            y="-10%"
            width="120%"
            height="120%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.04"
              numOctaves="3"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="2"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          <clipPath id="top-arch" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 Q 0.5,0.15 1,0 L 1,1 L 0,1 Z" />
          </clipPath>
        </defs>
      </svg>

      {isWorkPage && (
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Thank you for taking the time to scroll through my work!
          </h2>
          <p className="text-xl text-white/70 mb-2">
            Want to chat? Drop me a message{" "}
            <WiredLink
              elevation={3}
              className=""
              href="mailto:zhzitu121@gmail.com"
              style={
                {
                  "--wired-link-decoration-color": "#26A69A",
                } as React.CSSProperties
              }
            >
              here
            </WiredLink>
          </p>
          <p className="text-lg text-white/50 py-4">
            Ready to resurface? Hit the button below to head back up!
          </p>
          <WiredButton
            elevation={2}
            className="bg-teal-200 text-slate-900"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Let's go to Top
          </WiredButton>
        </div>
      )}

      <div
        className={`max-w-7xl mx-auto px-6 ${isWorkPage ? "pt-8 pb-16" : "py-16"}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="flex flex-col h-full justify-between">
            <div>
              <p className="text-2xl mb-6">Want to chat? Please email me :</p>
              <a
                href="mailto:hey@joycemuller.com"
                className="text-yellow-300 text-2xl hover:text-yellow-200 transition-colors"
              >
                zhzitu121@gmail.com
              </a>
            </div>

            {/* social icons */}
            <div>
              <p className="text-xl mb-6">
                You can find my socials & github below!
              </p>
              <div
                className="flex gap-6 text-2xl"
                style={{ filter: "url(#sketchy-filter)" }}
              >
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <GithubIcon className="w-8 h-8" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <LinkedInIcon className="w-8 h-8" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <TwitterIcon className="w-8 h-8" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <FacebookIcon className="w-8 h-8" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <InstaIcon className="w-8 h-8" />
                </a>
              </div>
            </div>

            <div className="text-lg text-white/60">
              <p>©2025 Zitu Hoque. All rights reserved.</p>
            </div>
          </div>
          {/* mail gif */}

          {/* Right Section - Contact Form */}
          <div>
            <div>
              <img src="/mail.gif" alt="mail" className="h-32 -ml-12" />
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-2xl mb-3 -mt-4">
                  Email <span className="text-white/50">(required)</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-transparent border-b-4 rounded-xs border-white/30 pb-2 text-white text-xl placeholder-white/50 focus:outline-none focus:border-green-accent transition-colors"
                  placeholder=""
                />
              </div>

              <div>
                <label className="block text-2xl mb-3">
                  Message <span className="text-white/50">(required)</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="Let's chat!"
                  rows={3}
                  className="w-full bg-transparent border-b-4 rounded-xs border-white/30 pb-2 text-white text-lg placeholder-white/50 placeholder:text-xl focus:outline-none focus:border-green-accent transition-colors resize-none"
                />
              </div>

              <div>
                <WiredButton
                  elevation={2}
                  className="bg-teal-400 text-black hover:text-white hover:bg-slate-600"
                >
                  {submitted ? "Sent!" : "Submit"}
                </WiredButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
