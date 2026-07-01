"use client";

import { GithubIcon } from "@/components/Icons";
import dynamic from "next/dynamic";
import Image from "next/image";

const WiredLink = dynamic(
  () => import("wired-elements-react").then((m) => m.WiredLink),
  { ssr: false },
);

const WiredImage = dynamic(
  () => import("wired-elements-react").then((m) => m.WiredImage),
  { ssr: false },
);

const WiredButton = dynamic(
  () => import("wired-elements-react").then((m) => m.WiredButton),
  { ssr: false },
);

const WiredIconButton = dynamic(
  () => import("wired-elements-react").then((m) => m.WiredIconButton),
  { ssr: false },
);

const TRANSPARENT_PIXEL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

export default function ProjectDetailClient({ project }: { project: any }) {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <WiredLink
          href="/work"
          elevation={2}
          style={
            {
              "--wired-link-decoration-color": "#eab308",
            } as React.CSSProperties
          }
        >
          <span className="inline-flex items-center gap-2 hover:opacity-80 transition-colors">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            Back to projects
          </span>
        </WiredLink>

        <div className="relative aspect-video w-full mb-8 mt-8">
          {project.img && (
            <Image
              src={project.img}
              alt={project.name}
              fill
              className="object-cover scale-97"
            />
          )}
          {project.img && (
            <WiredImage
              src={TRANSPARENT_PIXEL}
              elevation={1}
              className="absolute inset-0 w-full h-full pointer-events-none"
            />
          )}
        </div>

        <h1 className="text-3xl font-bold mb-2">{project.name}</h1>
        <p className="text-amber-600 dark:text-amber-400 font-semibold uppercase text-sm mb-4">
          {project.type}
        </p>

        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech: string) => (
              <span
                key={tech}
                className="inline-block bg-amber-100 dark:bg-amber-900 text-xs font-medium px-2.5 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <p className="leading-relaxed text-lg mb-8">{project.summary}</p>

        <div className="flex items-center gap-6 pt-6 border-t border-amber-200 dark:border-amber-900">
          {project.githubLink && (
            <WiredIconButton
              onClick={() =>
                window.open(project.githubLink, "_blank", "noopener,noreferrer")
              }
              className="hover:opacity-80"
            >
              <GithubIcon width={32} height={32} />
            </WiredIconButton>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <WiredButton
                elevation={1}
                className="bg-amber-100 hover:bg-amber-200 dark:bg-amber-800 dark:hover:bg-amber-700 uppercase text-slate-900 dark:text-slate-50"
              >
                Visit Project
              </WiredButton>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
