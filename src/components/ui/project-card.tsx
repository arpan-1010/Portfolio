"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group flex h-full flex-col rounded-[var(--radius)] border border-border bg-card p-6 text-left transition-[border-color,box-shadow] hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          {project.category}
        </span>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
      </div>

      <h4 className="mb-2 text-lg font-semibold transition-colors group-hover:text-primary">
        {project.title}
      </h4>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{project.paragraph}</p>

      <div className="mt-auto flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.button>
  );
}