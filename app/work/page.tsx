import type { Metadata } from "next";
import WorkContent from "./work-content";

export const metadata: Metadata = { title: "Zitu Hoq — Work" };

export default function WorkPage() {
  return (
    <div>
      <WorkContent />
    </div>
  );
}
