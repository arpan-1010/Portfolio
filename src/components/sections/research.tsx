"use client";

import { motion } from "motion/react";
import { ExternalLink, Presentation } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { ResearchItem } from "@/data/research";

export function ResearchCard({
  project,
  onClick,
}: {
  project: ResearchItem;
  onClick: () => void;
}) {
  return (
    <motion.div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="relative flex w-full cursor-pointer flex-col rounded-[var(--radius)] border border-dashed border-accent/50 bg-accent/5 p-6 text-left transition-colors hover:border-accent hover:bg-accent/10"
    >
      <span
        className={`absolute right-4 top-4 rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide ${
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
          <Badge key={tag} variant="outline" className="border-accent/40 text-xs text-accent">
            {tag}
          </Badge>
        ))}
      </div>

      {project.slidesUrl && (
        <a
          href={project.slidesUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => e.stopPropagation()}
          className="mt-5 inline-flex w-fit items-center gap-2 rounded-[var(--radius)] border border-accent/40 bg-background px-3 py-1.5 text-sm font-medium text-accent transition-colors hover:border-accent hover:bg-accent/10"
        >
          <Presentation className="h-4 w-4" />
          View slides
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      )}
    </motion.div>
  );
}