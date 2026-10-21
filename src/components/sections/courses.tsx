"use client";

import { motion } from "motion/react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { courses } from "@/data/courses";
import { fadeUp } from "@/lib/motion-variants";

export function Courses() {
  return (
    <section id="courses" className="mx-auto max-w-5xl px-6 py-16">
      <motion.h2
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={fadeUp}
        className="mb-8 text-3xl font-semibold tracking-tight"
      >
        Professional Courses
      </motion.h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {courses.map((course, i) => (
          <motion.div
            key={course.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            whileHover={{ y: -4 }}
          >
            <Card className="border-border bg-muted/40 h-full">
              <CardHeader>
                <CardTitle className="text-lg">{course.degree}</CardTitle>
                <CardDescription>{course.branch}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-1.5 text-sm">
                <p className="text-foreground">{course.institution}</p>
                <p className="text-muted-foreground">Passing Year: {course.passingYear}</p>
                <p className="text-muted-foreground">CGPA: {course.cgpa}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}