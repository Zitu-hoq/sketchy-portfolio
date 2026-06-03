"use client";

import { GithubIcon } from "@/components/Icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useMemo, useState } from "react";

const WiredButton = dynamic(
  () => import("wired-elements-react").then((m) => m.WiredButton),
  { ssr: false },
);


function truncateWords(text: string | undefined, max: number): string {
  if (!text) return "";
  const words = text.split(/\s+/);
  if (words.length <= max) return text;
  return words.slice(0, max).join(" ") + "...";
}

export default function WorkContent({ projects }: { projects: any[] }) {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const categories = ["All", ...new Set(projects.map((p) => p.type))];

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.type === filter);

  const rows = useMemo(() => {
    const rowSizes = [2, 3, 3];
    const result: { cols: number; items: any[] }[] = [];
    let i = 0;
    const remaining = [...filtered];
    while (remaining.length > 0) {
      const cols = rowSizes[i % rowSizes.length];
      result.push({ cols, items: remaining.splice(0, cols) });
      i++;
    }
    return result;
  }, [filtered]);

  return (
    <Dialog
      open={!!selectedProject}
      onOpenChange={(open) => {
        if (!open) setSelectedProject(null);
      }}
    >
      <section className="bg-stone-50 py-6 px-6 border-b border-gray-200">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <div
                key={category}
                className={filter === category ? "bg-teal-400 rounded-lg" : ""}
              >
                <WiredButton elevation={2} onClick={() => setFilter(category)}>
                  {category}
                </WiredButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-20 px-6">
        <div className="mx-auto max-w-7xl">
          {rows.map((row, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-1 gap-8 ${
                row.cols === 2 ? "mb-16 md:grid-cols-2" : "mb-10 md:grid-cols-3"
              }`}
            >
              {row.items.map((project) => (
                <div
                  key={project.$id}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div
                    className={`bg-gradient-to-br from-slate-400 via-teal-300 to-slate-500 rounded-lg mb-4 relative overflow-hidden ${
                      row.cols === 2 ? "h-80" : "h-64"
                    }`}
                  >
                    {project.img && (
                      <Image
                        src={project.img}
                        alt={project.name}
                        fill
                        className="object-cover group-hover:scale-105 transition"
                      />
                    )}
                  </div>
                  <p className="text-xl text-teal-400 font-semibold uppercase mb-2">
                    {project.type}
                  </p>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">
                    {project.name}
                  </h3>
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.technologies.map((tech: string) => (
                        <span
                          key={tech}
                          className="inline-block bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  <p className="text-md text-slate-700 leading-relaxed">
                    {truncateWords(project.summary, 20)}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {selectedProject && (
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-stone-100 border-0 p-0">
            <div className="p-12">
              <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
                {selectedProject.img && (
                  <Image
                    src={selectedProject.img}
                    alt={selectedProject.name}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <DialogTitle className="text-2xl font-bold text-slate-900">
                {selectedProject.name}
              </DialogTitle>
              <p className="text-teal-400 font-semibold uppercase text-sm">
                {selectedProject.type}
              </p>
              {selectedProject.technologies &&
                selectedProject.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech: string) => (
                      <span
                        key={tech}
                        className="inline-block bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              <DialogDescription className="text-slate-700 leading-relaxed text-base">
                {selectedProject.summary}
              </DialogDescription>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200 mt-4">
                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <GithubIcon width={48} height={48} />
                  </a>
                )}
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WiredButton elevation={2}>Visit Project</WiredButton>
                  </a>
                )}
              </div>
            </div>
        </DialogContent>
      )}
    </Dialog>
  );
}
