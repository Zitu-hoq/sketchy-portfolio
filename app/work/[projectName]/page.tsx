import ProjectDetailClient from "./project-detail-client";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ projectName: string }>;
}) {
  const { projectName } = await params;
  return <ProjectDetailClient projectName={decodeURIComponent(projectName)} />;
}
