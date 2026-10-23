import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Arpan Mondal — background, skills, and research focus.",
};

export default function AboutPage() {
  return (
    <>
      <div className="pt-24">
        <About />
        <Skills />
      </div>
    </>
  );
}