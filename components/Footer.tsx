"use client";

import { useState } from "react";
import { WiredButton } from "wired-elements-react";
import { GithubIcon, LinkedInIcon, TwitterIcon, FacebookIcon, InstaIcon } from "@/components/Icons";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

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
    <footer className="bg-slate-900 text-white rounded-t-3xl mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
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
              <div className="flex gap-6 text-2xl">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <GithubIcon className="w-6 h-6" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <LinkedInIcon className="w-6 h-6" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <TwitterIcon className="w-6 h-6" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <FacebookIcon className="w-6 h-6" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <InstaIcon className="w-6 h-6" />
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
