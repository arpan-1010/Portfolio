"use client";

import { motion } from "motion/react";
import { fadeUp } from "@/lib/motion-variants";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-2xl px-6 py-16">
      <motion.h2
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={fadeUp}
        className="mb-6 text-3xl font-semibold tracking-tight"
      >
        About Me
      </motion.h2>

      <motion.p
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={fadeUp}
        className="text-lg leading-relaxed text-muted-foreground"
      >
        Currently I'm an M.Tech CSE student at Indian Institute of Information Technology, Guwahati, developing across full-stack
        development, and AI/ML applications. My current thesis work focuses on different strategies of Transformers,
        under the supervision of Dr. Parashjyoti Borah. Outside research, I build and productionize things like real-time applications and AI/ML applications.
        <br />
        I like projects that force me to work up and down the whole stack.
      </motion.p>
    </section>
  );
}