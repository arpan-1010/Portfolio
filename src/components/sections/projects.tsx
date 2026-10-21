"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/ui/project-card";
import { ProjectDialog } from "@/components/ui/project-dialog";
import { projects, type Project } from "@/data/projects";
import { fadeUp } from "@/lib/motion-variants";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);

  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <motion.h2
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-3xl font-semibold tracking-tight"
        >
          Featured Projects
        </motion.h2>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          View all ({projects.length}) <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, i) => (
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

      <ProjectDialog project={selected} open={open} onOpenChange={setOpen} />
    </section>
  );
}