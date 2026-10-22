import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { Courses } from "@/components/sections/courses";
import { Projects } from "@/components/sections/projects";
import { ResearchSection } from "@/components/sections/research-section";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Courses />
      <Projects />
      <ResearchSection />
      <Contact />
    </>
  );
}