export interface ResearchItem {
  slug: string;
  title: string;
  tags: string[];
  stage: "Seminar" | "Pre-thesis" | "Thesis";
  status: "Completed" | "Ongoing";
  highlights: string[];
  supervisor: string;
}

export const researchItems: ResearchItem[] = [

  {
    slug: "seminar",
    title: "Extreme Learning Machine with and without Backpropagation",
    tags: ["Iris Clasification", "Deep Learning"],
    stage: "Seminar",
    status : "Completed",
    highlights: [
      "Presented a seminar on Extreme Learning Machine with Backpropagation (ELM-BP), explaining how iterative weight optimization improves the predictive performance of standard ELM while balancing training speed and accuracy.",
      "Implemented and evaluated ELM-BP for Iris dataset classification using NumPy, Pandas, and Matplotlib, with a sigmoid activation function and an 80:20 train-test split.",
      "Conducted a comparative analysis between standard ELM and ELM-BP, demonstrating an improvement in test accuracy from 80.0% to 96.67% through backpropagation-based parameter refinement.",
      "Explained the mathematical foundations, working mechanism, applications, advantages, and limitations of ELM-BP, including gradient-based optimization, convergence, and real-world use cases in classification, regression, and medical diagnosis."
    ],
    supervisor: "Dr. Parashjyoti Borah",
  },

  {
    slug: "pre-thesis",
    title: "Normalization Dynamics in CNNs",
    tags: ["PyTorch", "CIFAR-10", "Deep Learning"],
    stage: "Pre-thesis",
    status : "Completed",
    highlights: [
      "Conducted a comparative study of Batch Normalization, Layer Normalization, Group Normalization, and No Normalization on a CNN trained with the CIFAR-10 dataset, evaluating convergence speed, accuracy, and training stability.",
      "Developed a hook-based instrumentation framework in PyTorch using forward and backward hooks to capture layer-wise activation statistics and gradient norms, enabling in-depth analysis of internal training dynamics.",
      "Analyzed gradient flow, activation drift, and heatmaps to investigate vanishing/exploding gradients and compare normalization techniques, revealing Batch Normalization as the most stable and best-performing approach.",
      "Optimized CNN hyperparameters and evaluated training behavior through loss, accuracy, convergence, and activation stability analyses, providing interpretable insights beyond conventional performance metrics."
    ],
    supervisor: "Dr. Parashjyoti Borah",
  },

  {
    slug: "thesis",
    title: "Transformer Architectures & Efficient Attention Mechanisms",
    tags: ["PyTorch", "NLP"],
    stage: "Thesis",
    status : "Ongoing",
    highlights: [
      "Conducted an in-depth study of four foundational Transformer papers—Attention Is All You Need, Reformer, Linformer, and Performers—to understand the evolution of scalable self-attention mechanisms for large-scale sequence modeling.",
      "Analyzed and compared efficient attention techniques including LSH Attention (Reformer), Low-Rank Projection (Linformer), and FAVOR+ Kernel Attention (Performers), evaluating their computational complexity, memory efficiency, and scalability against standard self-attention.",
      "Developed a strong understanding of Transformer internals, including multi-head self-attention, positional encoding, feed-forward networks, residual connections, layer normalization, and the mathematical foundations behind linear and sparse attention.",
      "Implemented and experimented with Transformer variants in PyTorch, reproducing core components and gaining hands-on experience with efficient attention architectures for modern NLP and deep learning applications."
    ],
    supervisor: "Dr. Parashjyoti Borah",
  },
];