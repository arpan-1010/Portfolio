"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { skills, type SkillCategory } from "@/data/skills";
import { fadeUp } from "@/lib/motion-variants";

const categories: SkillCategory[] = ["Web Development", "ML/AI", "Tools"];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export function Skills() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-16">
      <motion.h3
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={fadeUp}
        className="mb-8 text-xl font-semibold tracking-tight"
      >
        Skills & Tools
      </motion.h3>

      <div className="space-y-6">
        {categories.map((category, i) => {
          const categorySkills = skills.filter((s) => s.category === category);
          if (categorySkills.length === 0) return null;

          return (
            <motion.div
              key={category}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
              variants={fadeUp}
            >
              <p className="mb-2 font-mono text-xs uppercase tracking-wider text-accent">
                {category}
              </p>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
                variants={container}
                className="flex flex-wrap gap-2"
              >
                {categorySkills.map((skill) => (
                  <motion.div key={skill.name} variants={item}>
                    <Badge
                      variant="outline"
                      className="border-border bg-muted px-3 py-1 text-sm text-foreground hover:border-primary hover:text-primary transition-colors"
                    >
                      {skill.name}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}