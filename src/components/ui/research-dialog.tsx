"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { ResearchItem } from "@/data/research";

export function ResearchDialog({
  item,
  open,
  onOpenChange,
}: {
  item: ResearchItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!item) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-background border-border sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{item.title}</DialogTitle>
        </DialogHeader>

        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
          {item.highlights.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>

        <div className="mt-2 rounded-[var(--radius)] border border-accent/30 bg-accent/5 px-4 py-3">
          <p className="mb-1 font-mono text-xs uppercase tracking-wider text-accent">
            Supervisor
          </p>
          <p className="text-sm font-medium text-foreground">{item.supervisor}</p>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide ${
              item.status === "Completed" ? "bg-primary/15 text-primary" : "bg-accent/20 text-accent"
            }`}
          >
            {item.status}
          </span>
          <span className="font-mono text-xs uppercase tracking-wider text-accent">{item.stage}</span>
        </div>
      </DialogContent>
    </Dialog>
  );
}