"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import type { ResearchItem } from "@/data/research";

export function ResearchCard({ project, onClick }: { project: ResearchItem; onClick: () => void }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="relative w-full rounded-[var(--radius)] border border-dashed border-accent/50 bg-accent/5 p-6 text-left transition-colors hover:border-accent hover:bg-accent/10"
    >
      <span
        className={`absolute top-4 right-4 rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide ${
          project.status === "Completed"
            ? "bg-primary/15 text-primary"
            : "bg-accent/20 text-accent"
        }`}
      >
        {project.status}
      </span>

      <p className="mb-2 font-mono text-xs uppercase tracking-wider text-accent">
        {project.stage}
      </p>
      <h4 className="mb-4 max-w-[85%] text-lg font-semibold">{project.title}</h4>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="outline" className="text-xs border-accent/40 text-accent">
            {tag}
          </Badge>
        ))}
      </div>
    </motion.button>
  );
}