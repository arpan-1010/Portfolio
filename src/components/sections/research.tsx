"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ResearchCard } from "@/components/ui/research-card";
import { ResearchDialog } from "@/components/ui/research-dialog";
import { researchItems, type ResearchItem } from "@/data/research";
import { fadeUp } from "@/lib/motion-variants";

const stageOrder: Record<ResearchItem["stage"], number> = {
  Seminar: 0,
  "Pre-thesis": 1,
  Thesis: 2,
};

export function Research() {
  const [selected, setSelected] = useState<ResearchItem | null>(null);
  const [open, setOpen] = useState(false);

  const handleSelect = (item: ResearchItem) => {
    setSelected(item);
    setOpen(true);
  };

  const sortedItems = [...researchItems].sort(
    (a, b) => stageOrder[a.stage] - stageOrder[b.stage]
  );

  return (
    <section id="research" className="mx-auto max-w-5xl px-6 pb-16">
      <motion.h2
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={fadeUp}
        className="mb-8 text-3xl font-semibold tracking-tight"
      >
        Research Works
      </motion.h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sortedItems.map((item) => (
          <ResearchCard key={item.slug} project={item} onClick={() => handleSelect(item)} />
        ))}
      </div>

      <ResearchDialog item={selected} open={open} onOpenChange={setOpen} />
    </section>
  );
}