import { databases } from "@/lib/appwrite";
import { Query } from "appwrite";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./project-detail-client";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ projectName: string }>;
}) {
  const { projectName } = await params;
  const decodedName = decodeURIComponent(projectName);

  let project: any;

  try {
    const res = await databases.listDocuments(
      process.env.NEXT_PUBLIC_DATABASE!,
      process.env.NEXT_PUBLIC_PROJECT!,
      [Query.equal("name", decodedName)],
    );
    if (!res.documents.length) return notFound();
    project = JSON.parse(JSON.stringify(res.documents[0]));
  } catch {
    return notFound();
  }

  return <ProjectDetailClient project={project} />;
}
