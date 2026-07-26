import type { Metadata } from "next";
import ProjectDetailClient from "./project-detail-client";

export async function generateMetadata({ params }: { params: Promise<{ projectName: string }> }): Promise<Metadata> {
  const { projectName } = await params;
  return { title: `${decodeURIComponent(projectName)} — Zitu Hoq` };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ projectName: string }>;
}) {
  const { projectName } = await params;
  return <ProjectDetailClient projectName={decodeURIComponent(projectName)} />;
}
