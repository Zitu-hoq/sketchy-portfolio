"use client";

import Image from "next/image";



export default function AboutPage() {
  return (
    <div className="bg-stone-50">
      {/* Main Content */}
      <section className="bg-stone-50 py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
            {/* Content */}
            <div>
              <div className="mb-12">
                <div className="flex justify-start -ml-12">
                  <img src="/code.svg" alt="code" width={64} height={64} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                  A Little About Me
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Hi, I'm{" "}
                  <span className="text-teal-400 text-xl">
                    Md Ziaul Hoque Zitu
                  </span>
                  , a web developer and cyber security analyst with a passion
                  for creating beautiful, functional, secure and user-centered
                  digital experiences. With a good understanding in both web and
                  cyber security field. I am always looking for new and
                  innovative ways to bring my clients' visions to life.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  My journey in web development began in 2021, when I immersed
                  myself in the MERN stack, building my skills through projects
                  ranging from e-commerce platforms to diverse web applications.
                  Developing these applications gave me a deep understanding of
                  front-end and back-end technologies and honed my ability to
                  build responsive, user-focused web interfaces and scalable
                  back-end solutions.
                </p>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  While working on these projects, I became increasingly aware
                  of the vulnerabilities inherent in web applications,
                  especially as I observed instances where hackers exploited
                  weak points in security. This realization prompted me to
                  expand my skill set into cybersecurity. Through extensive
                  study, I developed skills in cryptography and steganography,
                  and I applied this knowledge in projects aimed at safeguarding
                  application data and user privacy.
                </p>
              </div>
            </div>

            {/* Profile Image Area */}
            <div className="flex flex-col gap-6 self-center items-center">
              <div className="h-96 bg-gradient-to-br from-teal-200 via-teal-300 to-slate-400 rounded-lg flex items-center justify-center overflow-hidden">
                <span className="text-white text-xl font-semibold">
                  Portrait Image
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-start gap-8 text-center mb-32">
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/placeholder.svg"
                alt="hobby 1"
                width={64}
                height={64}
                className="w-16 h-16"
              />
              <h3 className="text-4xl font-bold text-slate-900">Hobby One</h3>
              <p className="text-xl text-gray-700">
                Description for the first hobby
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/placeholder-logo.svg"
                alt="hobby 2"
                width={64}
                height={64}
                className="w-16 h-16"
              />
              <h3 className="text-4xl font-bold text-slate-900">Hobby Two</h3>
              <p className="text-xl text-gray-700">
                Description for the second hobby
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/placeholder.svg"
                alt="hobby 3"
                width={64}
                height={64}
                className="w-16 h-16"
              />
              <h3 className="text-4xl font-bold text-slate-900">Hobby Three</h3>
              <p className="text-xl text-gray-700">
                Description for the third hobby
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
