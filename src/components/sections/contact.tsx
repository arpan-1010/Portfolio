"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Check, Copy, Loader2, Mail, Send } from "lucide-react";
import { socials } from "@/data/socials";
import { fadeUp } from "@/lib/motion-variants";

const EMAIL = "arpanmondal455@gmail.com";

const fieldClass =
  "w-full rounded-[var(--radius)] border border-border bg-background px-3 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget; // grab before the await
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked: the mailto link below still works */
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid gap-12 sm:grid-cols-2">
        <div>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-2 text-3xl font-semibold tracking-tight"
          >
            Contact
          </motion.h2>
          <p className="mb-6 text-muted-foreground">
            Want to say anything? My inbox is open.
          </p>

          <form onSubmit={onSubmit} className="space-y-3">
            <input name="name" required maxLength={100} placeholder="Your name" className={fieldClass} />
            <input name="email" type="email" required maxLength={200} placeholder="Your email" className={fieldClass} />
            <textarea name="message" required minLength={5} maxLength={5000} rows={5} placeholder="Your message" className={fieldClass} />
            {/* honeypot: real users never see or fill this */}
            <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 rounded-[var(--radius)] bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
            >
              {status === "sending" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
              {status === "sending" ? "Sending…" : "Send message"}
            </button>

            <p role="status" aria-live="polite" className="min-h-5 text-sm">
              {status === "sent" && <span className="text-primary">Thanks! Your message is on its way.</span>}
              {status === "error" && (
                <span className="text-red-600">
                  Could not send. Please email me directly below.
                </span>
              )}
            </p>
          </form>

          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-1.5 break-all hover:text-primary">
              <Mail className="h-4 w-4 shrink-0" />
              {EMAIL}
            </a>
            <button type="button" onClick={copyEmail} className="inline-flex items-center gap-1 hover:text-primary">
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </div>

        <div>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-4 text-3xl font-semibold tracking-tight"
          >
            Connect
          </motion.h3>
          <div className="flex flex-wrap gap-4">
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
          </div>
        </div>
      </div>
    </section>
  );
}