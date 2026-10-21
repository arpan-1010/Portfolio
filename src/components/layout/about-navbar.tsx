"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export function AboutNavbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-mono text-sm font-semibold">
          arpan.dev
        </Link>
        <Link href="/">
            <Button variant="outline" size="sm" className="gap-2">
                <Home className="h-4 w-4" />
                Home
            </Button>
        </Link>
      </nav>
    </motion.header>
  );
}