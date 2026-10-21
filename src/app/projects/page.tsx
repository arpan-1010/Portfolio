import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { ProjectsGrid } from "@/data/sections/project-grid";


export const metadata: Metadata = {
  title: "Projects",
  description: "Full-stack, game and AI/ML projects built by Arpan Mondal.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 pb-16 pt-28">
        <h1 className="mb-2 text-4xl font-semibold tracking-tight">Projects</h1>
        <p className="mb-8 text-muted-foreground">
          Things I have built, and things I am still building.
        </p>
        <ProjectsGrid />
      </main>
    </>
  );
}