"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ProjectCard } from "@/components/ui/project-card";
import { ProjectDialog } from "../ui/project-dialog";
import { projects, type Project } from "@/data/projects";
import { fadeUp } from "@/lib/motion-variants";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);

  const handleSelect = (project: Project) => {
    setSelected(project);
    setOpen(true);
  };

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <motion.h2
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={fadeUp}
        className="mb-8 text-3xl font-semibold tracking-tight"
      >
        Projects
      </motion.h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={i}
            onClick={() => handleSelect(project)}
          />
        ))}
      </div>

      <ProjectDialog project={selected} open={open} onOpenChange={setOpen} />
    </section>
  );
}