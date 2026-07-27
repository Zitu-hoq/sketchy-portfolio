"use client";

import { GithubIcon } from "@/components/Icons";
import Loading from "@/components/Loading";
import { Project, useData } from "@/context/DataContext";
import dynamic from "next/dynamic";
import Image from "next/image";
import { notFound, useRouter } from "next/navigation";

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

export default function ProjectDetailClient({
  projectName,
}: {
  projectName: string;
}) {
  const { data, loading } = useData();
  const router = useRouter();
  const project = data.projects.find((p: Project) => p.name === projectName);

  if (loading) return <Loading />;
  if (!project) return notFound();

  return (
    <div className="min-h-screen max-md:min-h-0 text-justify">
      <div className="mx-auto max-w-4xl px-6 py-12 max-md:py-6 flex flex-col">
        <WiredLink
          href="/work"
          elevation={2}
          className="max-md:order-last max-md:mt-8 max-md:self-center"
          style={
            {
              "--wired-link-decoration-color": "#eab308",
              "--wired-link-underline": "false",
            } as React.CSSProperties
          }
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            router.push("/work");
          }}
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

        <div className="relative aspect-video w-full my-8 max-md:my-2">
          {project.img && (
            <Image
              src={project.img}
              alt={project.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
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

        <h1 className="text-3xl max-md:text-xl font-bold mb-2">
          {project.name}
        </h1>
        <p className="text-link font-semibold uppercase text-sm max-md:text-xs mb-4">
          {project.type}
        </p>

        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech: string) => (
              <span
                key={tech}
                className="inline-block bg-btn-primary dark:bg-btn-primary text-xs font-medium px-2.5 py-0.5 rounded uppercase"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <p className="leading-relaxed text-lg max-md:text-sm mb-8">
          {project.summary}
        </p>

        <div className="flex items-center justify-between gap-6 pt-6 border-t border-btn-primary-hover dark:border-btn-primary">
          {project.githubLink && (
            <WiredIconButton
              onClick={() =>
                window.open(project.githubLink, "_blank", "noopener,noreferrer")
              }
              className="hover:opacity-80"
            >
              <GithubIcon
                width={32}
                height={32}
                className="max-md:w-6 max-md:h-6"
              />
            </WiredIconButton>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <WiredButton
                elevation={1}
                className="bg-btn-primary hover:bg-btn-primary-hover dark:bg-btn-primary dark:hover:bg-btn-primary-hover uppercase text-secondary dark:text-slate-50 max-md:text-sm"
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
