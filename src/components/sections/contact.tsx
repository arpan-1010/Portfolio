"use client";

import { motion } from "motion/react";
import { Mail } from "lucide-react";
import { socials } from "@/data/socials";
import { fadeUp } from "@/lib/motion-variants";

const EMAIL = "arpanmondal455@gmail.com";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid gap-12 sm:grid-cols-2">
        {/* Contact */}
        <div>
          <motion.h2
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={fadeUp}
            className="mb-4 text-3xl font-semibold tracking-tight"
          >
            Contact
          </motion.h2>

          <motion.p
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={fadeUp}
            className="mb-6 text-muted-foreground"
          >
            Want to say anything? My inbox is open.
          </motion.p>

          <motion.a
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={fadeUp}
            href={`mailto:${EMAIL}`}
            onClick={() => console.log("mailto href:", `mailto:${EMAIL}`)}
            className="inline-flex w-fit items-center gap-2 whitespace-nowrap rounded-[var(--radius)] bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Mail className="h-4 w-4 shrink-0" />
            {EMAIL}
          </motion.a>
        </div>

        {/* Connect */}
        <div>
          <motion.h3
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={fadeUp}
            className="mb-4 text-3xl font-semibold tracking-tight"
          >
            Connect
          </motion.h3>

          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={fadeUp}
            className="flex flex-wrap gap-4"
          >
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-[var(--radius)] border border-border bg-muted/40 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                  {social.label}
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}