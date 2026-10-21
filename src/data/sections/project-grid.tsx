"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ui/project-card";
import { ProjectDialog } from "@/components/ui/project-dialog";
import { projects, type Project, type ProjectCategory } from "@/data/projects";

type Filter = "All" | ProjectCategory;
const filters: Filter[] = ["All", "Full-stack", "Game", "AI / ML"];

export function ProjectsGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);

  const visible =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              filter === f
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:border-primary hover:text-primary"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={i}
            onClick={() => {
              setSelected(project);
              setOpen(true);
            }}
          />
        ))}
      </div>

      {visible.length === 0 && (
        <p className="text-muted-foreground">Nothing here yet, more on the way.</p>
      )}

      <ProjectDialog project={selected} open={open} onOpenChange={setOpen} />
    </>
  );
}