"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { MeshGradient } from "@/components/ui/mesh-gradient";
import { fadeUp } from "@/lib/motion-variants";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <MeshGradient />
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10" />

      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <motion.span
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-6 rounded-full border border-border bg-card/60 px-4 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur"
        >
          M.Tech CSE · IIIT Guwahati
        </motion.span>

        <motion.p
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-3 text-sm font-light uppercase tracking-[0.3em] text-muted-foreground"
        >
          Hello from
        </motion.p>

        <motion.h1
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-gradient text-5xl font-semibold tracking-tight sm:text-7xl"
        >
          Arpan Mondal
        </motion.h1>

        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-6 max-w-lg text-lg text-muted-foreground sm:text-xl"
        >
          The guy who is aimed for building and productionizing apps.
        </motion.p>

        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <Link
            href="/#courses"
            className={buttonVariants({ variant: "outline", size: "lg", className: "h-11 rounded-full px-6" })}
          >
            Professional Courses
          </Link>
          <Link
            href="/projects"
            className={buttonVariants({ size: "lg", className: "h-11 gap-2 rounded-full px-6" })}
          >
            View Projects <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}