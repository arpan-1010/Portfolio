export interface Project {
  slug: string;
  title: string;
  paragraph : string;
  tags: string[];
  type: "dev";
  highlights: string[];
  repoUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "ludo-king",
    title: "Ludo — Multiplayer Game",
    paragraph : "Realtime Ludo Multiplayer game",
    tags: ["Bun", "WebSockets", "TypeScript"],
    type: "dev",
    highlights: [
      "Developed a desktop-based Ludo King game implementing complete game mechanics, including dice rolling, token movement, safe zones, capture rules, and win-condition validation.",
      "Designed an interactive graphical user interface with smooth player interactions, real-time board updates, and intuitive controls to deliver a classic board-game experience.",
      "Implemented a modular game architecture by separating game logic, board state management, player actions, and rendering, improving code maintainability and extensibility.",
      "Demonstrating proficiency in event-driven programming, object-oriented design, and GUI application development.",
    ],
    repoUrl: "https://github.com/arpan-1010/Ludo-King",
    liveUrl: "https://ludo-king-gilt.vercel.app/",
  },
  
  {
    slug: "learn-at-ease",
    title: "Learn@Ease",
    paragraph : "A Course selling platform",
    tags: ["React", "TypeScript", "Tailwind"],
    type: "dev",
    highlights: [
      "Developed a MERN stack course selling platform with separate Admin and User portals, enabling secure course management, enrollment, and personalized dashboards.",
      "Implemented JWT-based authentication and role-based authorization, protecting private routes and ensuring secure access control for administrators and learners.",
      "Built comprehensive course management features including CRUD operations, course purchasing, and enrollment workflows using React, Node.js, Express.js, and MongoDB.",
      "Designed a responsive, modern user interface with React and Tailwind CSS, integrating RESTful APIs for seamless real-time interactions and an improved learning experience."
    ],
    repoUrl: "https://github.com/arpan-1010/Course-selling-app",
    liveUrl: "https://learnatease.vercel.app/",
  },

  {
    slug: "research-paper-explainer",
    title: "Research Paper Explainer",
    paragraph : "A simple AI-powered research paper explainer",
    tags: ["LangChain", "FAISS", "HuggingFace"],
    type: "dev",
    highlights: [
      "Developed an AI-powered research paper explainer that enables users to upload academic PDFs and receive structured, easy-to-understand explanations with support for follow-up question answering.",
      "Implemented a Retrieval-Augmented Generation (RAG) pipeline using semantic document chunking, vector embeddings, and similarity search to generate context-aware, grounded responses from research papers.",
      "Built a modern full-stack web application with an interactive chat interface, PDF processing pipeline, and real-time streaming responses for an intuitive research experience.",
      "Integrated LLM-based document understanding with citation-aware retrieval, enabling users to summarize papers, explain complex concepts, and query specific sections while minimizing hallucinations."
    ],
    repoUrl: "https://github.com/arpan-1010/Research-paper-explainer",
    liveUrl: "https://your-rag-deployment.com",
  },
];