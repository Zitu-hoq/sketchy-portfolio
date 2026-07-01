"use client";

import AnimatedText, { AnimatedNumbers } from "@/components/AnimatedText";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Loading from "@/components/Loading";
import Skills from "@/components/Skills";
import Tape from "@/components/Tape";
import { useData } from "@/context/DataContext";
import Image from "next/image";

export default function AboutPage() {
  const { data, loading } = useData();
  if (loading) return <Loading />;

  const pageData = data.aboutPage[0];
  const { title, biography, proPicDark, total_project, experience } = pageData;

  return (
    <div>
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <AnimatedText
            text={title}
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
            <div>
              <div className="mb-12">
                <div className="flex justify-start -ml-12">
                  <img src="/code.svg" alt="code" width={64} height={64} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  Biography
                </h2>
                <p className="text-lg mb-6 leading-relaxed">
                  Hi, I&apos;m
                  <span className="text-slate-950 dark:text-amber-100 text-xl">
                    &nbsp;Md Ziaul Hoque Zitu
                  </span>
                  ,&nbsp;
                  <span>{biography[0]}</span>
                </p>
                <p className="mb-6 leading-relaxed">{biography[1]}</p>
                <p className="mb-8 leading-relaxed">{biography[2]}</p>

                <div className="flex gap-8 mt-8">
                  <div className="flex flex-col items-center">
                    <span className="text-5xl font-bold">
                      <AnimatedNumbers value={total_project} />+
                    </span>
                    <span className="text-sm font-medium opacity-90 uppercase">
                      projects completed
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-5xl font-bold">
                      <AnimatedNumbers value={experience} />+
                    </span>
                    <span className="text-sm font-medium opacity-90 uppercase">
                      years of experience
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 self-center items-center">
              <div className="relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-amber-950 dark:border-amber-50">
                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
                <Image
                  src={proPicDark}
                  alt="developer image"
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Hobbies Section */}
          <h2 className="text-4xl font-bold text-center mb-12">
            What I love to do:
          </h2>
          <div className="flex flex-row justify-between items-start gap-8 text-center mb-32">
            <div className="flex flex-col items-center gap-4 w-1/3">
              <div className="w-full aspect-square flex items-center justify-center">
                <img
                  src="/building-app.svg"
                  alt="building-app"
                  className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-4xl font-bold">Building Apps</h3>
              <p className="text-xl opacity-90">
                Architecting scalable and user-friendly applications
              </p>
              <p className="text-xl opacity-90">
                Turning ideas into functional, polished software
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 w-1/3">
              <div className="w-full aspect-square flex items-center justify-center">
                <img
                  src="/coding.svg"
                  alt="coding"
                  className="w-3/5 h-full object-contain grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-4xl font-bold">Finding Vulnerabilities</h3>
              <p className="text-xl opacity-90">
                Analyzing code to uncover hidden security flaws
              </p>
              <p className="text-xl opacity-90">
                Ensuring robust and secure systems
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 w-1/3">
              <div className="w-full aspect-square flex items-center justify-center">
                <img
                  src="/fix-bug.svg"
                  alt="fix-bug"
                  className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-4xl font-bold">Fixing Bugs</h3>
              <p className="text-xl opacity-90">
                Debugging and resolving issues with precision
              </p>
              <p className="text-xl opacity-90">
                Restoring stability and improving performance
              </p>
            </div>
          </div>
          <Tape />
          <Skills />
          <Certifications />
          <Education />
        </div>
      </section>
    </div>
  );
}
