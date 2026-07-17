"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { MeshGradient } from "@/components/ui/mesh-gradient";
import { fadeUp } from "@/lib/motion-variants";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      <MeshGradient />

      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <motion.p
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-2 text-4xl text-accent"
          style={{ fontFamily: "var(--font-hello-script)" }}
        >
          Hello from
        </motion.p>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-5xl font-semibold tracking-tight sm:text-6xl"
        >
          Arpan Mondal
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-6 max-w-lg text-xl text-muted-foreground"
        >
          The guy who is aimed for building and productionizing apps.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          <Button size="lg" variant="outline">
            <a href="#courses">Professional Courses</a>
          </Button>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="#projects">View Projects</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
