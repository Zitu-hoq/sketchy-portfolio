import { databases } from "@/lib/appwrite";
import WorkContent from "./work-content";

export default async function WorkPage() {
  let projects: any[] = [];

  try {
    const res = await databases.listDocuments(
      process.env.NEXT_PUBLIC_DATABASE!,
      process.env.NEXT_PUBLIC_PROJECT!,
    );
    projects = JSON.parse(JSON.stringify(res.documents));
  } catch (err) {
    console.error("Error fetching projects:", err);
  }

  return (
    <div className="bg-stone-50">
      <WorkContent projects={projects} />
    </div>
  );
}
