"use client";

import {
  FacebookIcon,
  GithubIcon,
  InstaIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/components/Icons";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";

const WiredButton = dynamic(
  () => import("wired-elements-react").then((m) => m.WiredButton),
  { ssr: false },
);

const WiredIconButton = dynamic(
  () => import("wired-elements-react").then((m) => m.WiredIconButton),
  { ssr: false },
);

const WiredInput = dynamic(
  () => import("wired-elements-react").then((m) => m.WiredInput),
  { ssr: false },
);

const WiredLink = dynamic(
  () => import("wired-elements-react").then((m) => m.WiredLink),
  { ssr: false },
);

const WiredTextarea = dynamic(
  () => import("wired-elements-react").then((m) => m.WiredTextarea),
  { ssr: false },
);

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const pathname = usePathname();

  const isWorkPage = pathname === "/work";
  const emailRef = useCallback((el: any) => {
    if (!el) return;
    el.updateComplete.then(() => {
      const root = el.shadowRoot;
      if (root) {
        const style = document.createElement("style");
        style.textContent = "input { background: transparent !important; }";
        root.appendChild(style);
      }
    });
  }, []);

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
      className={`bg-slate-900 text-amber-50 mt-20 max-sm:mt-8 ${isWorkPage ? "max-md:rounded-t-3xl md:[clip-path:url(#top-arch)]" : "rounded-t-3xl"}`}
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
        <div className="max-w-7xl mx-auto px-6 max-sm:px-2 pt-6 pb-1 text-center">
          <h2 className="text-3xl max-sm:text-lg font-bold mb-4 max-sm:mb-0 md:mt-12">
            Thank you for taking the time to scroll through my work!
          </h2>
          <p className="text-xl max-sm:text-sm text-white/70 mb-2">
            Want to chat? Drop me a message{" "}
            <WiredLink
              elevation={2}
              className=""
              href="mailto:zhzitu121@gmail.com"
              style={
                {
                  "--wired-link-decoration-color": "#fcd34d",
                } as React.CSSProperties
              }
            >
              here
            </WiredLink>
          </p>
          <p className="text-lg max-sm:text-xs text-white/50 py-4">
            Ready to resurface? Hit the button below to head back up!
          </p>
          <WiredButton
            elevation={1}
            className="bg-amber-200 text-slate-900 hover:bg-amber-300"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Let's go to Top
          </WiredButton>
        </div>
      )}

      <div
        className={`max-w-7xl mx-auto px-6 ${isWorkPage ? "pt-1 pb-16" : "py-16 max-sm:py-8"}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-md:gap-8">
          {/* Left Section */}
          <div className="flex flex-col h-full justify-between max-md:contents">
            <div className="max-md:order-1">
              <p className="text-2xl max-sm:text-lg mb-6 max-sm:mb-2">
                Want to chat? Please email me :
              </p>
              <a
                href="mailto:zhzitu121@gmail.com"
                className="text-yellow-300 text-2xl max-sm:mb-2 max-sm:text-lg hover:text-yellow-200 transition-colors"
              >
                zhzitu121@gmail.com
              </a>
            </div>

            {/* social icons */}
            <div className="max-md:order-5">
              <p className="text-xl max-sm:text-lg mb-6 max-sm:mb-2">
                You can find my socials & github below!
              </p>
              <div className="flex gap-6 max-sm:gap-2 text-2xl max-sm:text-sm max-md:justify-between">
                <WiredIconButton
                  className="hover:opacity-80"
                  onClick={() => window.open("#", "_blank")}
                  style={{ color: "#000", filter: "brightness(0) invert(1)" }}
                >
                  <GithubIcon className="w-8 h-8" />
                </WiredIconButton>
                <WiredIconButton
                  className="hover:opacity-80"
                  onClick={() => window.open("#", "_blank")}
                  style={{ color: "#000", filter: "brightness(0) invert(1)" }}
                >
                  <LinkedInIcon className="w-8 h-8" />
                </WiredIconButton>
                <WiredIconButton
                  className="hover:opacity-80"
                  onClick={() => window.open("#", "_blank")}
                  style={{ color: "#000", filter: "brightness(0) invert(1)" }}
                >
                  <TwitterIcon className="w-8 h-8" />
                </WiredIconButton>
                <WiredIconButton
                  className="hover:opacity-80"
                  onClick={() => window.open("#", "_blank")}
                  style={{ color: "#000", filter: "brightness(0) invert(1)" }}
                >
                  <FacebookIcon className="w-8 h-8" />
                </WiredIconButton>
                <WiredIconButton
                  className="hover:opacity-80"
                  onClick={() => window.open("#", "_blank")}
                  style={{ color: "#000", filter: "brightness(0) invert(1)" }}
                >
                  <InstaIcon className="w-8 h-8" />
                </WiredIconButton>
              </div>
            </div>

            <div className="text-lg max-sm:text-xs text-white/60 max-md:order-6">
              <p>
                ©{new Date().getFullYear()} Zitu Hoque. All rights reserved.
              </p>
            </div>
          </div>
          {/* mail gif */}

          {/* Right Section - Contact Form */}
          <div className="max-md:contents">
            <div className="max-md:order-2">
              <img
                src="/mail.gif"
                alt="mail"
                className="h-32 -ml-12 max-sm:h-16 max-sm:-ml-6"
              />
            </div>
            <form onSubmit={handleSubmit} className="space-y-6 max-md:order-3">
              <div>
                <label className="block text-2xl mb-3 -mt-4 max-sm:text-lg max-sm:mb-0">
                  Email <span className="text-white/50">(required)</span>
                </label>
                <WiredInput
                  ref={emailRef}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail((e.target as any).value)}
                  required
                  placeholder="Email"
                  className="w-full p-2"
                  style={{ color: "#000", filter: "brightness(0) invert(1)" }}
                />
              </div>

              <div>
                <label className="block text-2xl mb-3 max-sm:text-lg max-sm:mb-0">
                  Message <span className="text-white/50">(required)</span>
                </label>
                <WiredTextarea
                  value={message}
                  onChange={(e) => setMessage((e.target as any).value)}
                  required
                  placeholder="Let's chat!"
                  rows={3}
                  className="w-full p-1"
                  style={{ color: "#000", filter: "brightness(0) invert(1)" }}
                />
              </div>

              <div>
                <WiredButton
                  elevation={1}
                  className="bg-amber-200 text-slate-900 hover:bg-amber-300"
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
