"use client";

import { motion } from "motion/react";
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
      viewport={{ once: false, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group rounded-[var(--radius)] border border-border bg-muted/40 p-6 text-left transition-colors hover:border-primary/50 hover:bg-muted"
    >
      <h4 className="mb-4 text-lg font-semibold group-hover:text-primary transition-colors">
        {project.title}
      </h4>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
        {project.paragraph}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary transition-colors group-hover:border-primary/50 group-hover:bg-primary/15"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.button>
  );
}