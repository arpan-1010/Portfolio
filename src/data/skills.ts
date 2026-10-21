export type SkillCategory = "Web Development" | "ML/AI" | "Tools";

export interface Skill {
  name: string;
  category: SkillCategory;
}

export const skills: Skill[] = [
  { name: "TypeScript", category: "Web Development" },
  { name: "React", category: "Web Development" },
  { name: "TailwindCSS", category: "Web Development" },
  { name: "ShadCn", category: "Web Development" },
  { name: "Next.js", category: "Web Development" },
  { name: "Tailwind CSS", category: "Web Development" },
  { name: "Bun", category: "Web Development" },
  { name: "Prisma ORM", category: "Web Development" },
  { name: "WebSockets", category: "Web Development" },
  { name: "LangChain", category: "ML/AI" },
  { name: "LangGraph", category: "ML/AI" },
  { name: "LlamaIndex", category: "ML/AI" },
  { name: "ChromaDB", category: "ML/AI" },
  { name: "HuggingFace", category: "ML/AI" },
  { name: "Git", category: "Tools" },
  { name: "Docker", category: "Tools" },
  { name: "Kubernetes", category: "Tools" },
  { name: "AWS", category: "Tools" },
];