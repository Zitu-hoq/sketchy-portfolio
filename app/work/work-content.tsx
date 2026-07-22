"use client";

import Loading from "@/components/Loading";
import { useData } from "@/context/DataContext";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const WiredButton = dynamic(
  () => import("wired-elements-react").then((m) => m.WiredButton),
  { ssr: false },
);

const WiredImage = dynamic(
  () => import("wired-elements-react").then((m) => m.WiredImage),
  { ssr: false },
);

const TRANSPARENT_PIXEL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

function truncateWords(text: string | undefined, max: number): string {
  if (!text) return "";
  const words = text.split(/\s+/);
  if (words.length <= max) return text;
  return words.slice(0, max).join(" ") + "...";
}

export default function WorkContent() {
  const { data, loading } = useData();
  const projects = data.projects;
  const [filter, setFilter] = useState("All");

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

  if (loading) return <Loading />;

  return (
    <>
      <section className="py-6 px-6 border-b border-amber-200 dark:border-amber-800">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <div
                key={category}
                className={
                  filter === category
                    ? "bg-amber-100 rounded-lg dark:bg-amber-600"
                    : ""
                }
              >
                <WiredButton elevation={2} onClick={() => setFilter(category)}>
                  {category}
                </WiredButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-20 max-md:pt-4 pb-1 px-6 text-justify">
        <div className="mx-auto max-w-7xl">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {rows.map((row, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 gap-8 ${
                  row.cols === 2
                    ? "mb-16 md:grid-cols-2"
                    : "mb-10 md:grid-cols-3"
                }`}
              >
                {row.items.map((project) => (
                  <Link
                    key={project.$id}
                    href={`/work/${encodeURIComponent(project.name)}`}
                    className="group block"
                  >
                    <div
                      className={`bg-transparent mb-4 relative ${
                        row.cols === 2 ? "h-80" : "h-64"
                      }`}
                    >
                      {project.img && (
                        <Image
                          src={project.img}
                          alt={project.name}
                          fill
                          className="object-cover scale-97 group-hover:grayscale transition"
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
                    <p className="text-xl max-md:text-sm text-amber-600 dark:text-amber-400 font-semibold uppercase mb-2">
                      {project.type}
                    </p>
                    <h3 className="font-bold text-lg max-md:text-sm mb-2">
                      {project.name}
                    </h3>
                    {project.technologies &&
                      project.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-2">
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
                    <p className="text-md max-md:text-xs leading-relaxed">
                      {truncateWords(project.summary, 20)}
                    </p>
                  </Link>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
