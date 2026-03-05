import type { ProjectData } from "@/lib/types";

export const ragAssistant: ProjectData = {
  slug: "rag-assistant",
  title: "RAG Knowledge Assistant",
  summary:
    "A retrieval-augmented generation chatbot that ingests documents, indexes them into a vector database, and answers questions with source citations. Built to replace slow manual knowledge lookup in enterprise teams.",
  tags: ["Python", "LLM", "RAG", "Vector DB", "Flask"],
  embedUrl: null,
  liveUrl: "#",
  linkText: "Try the demo",
  architecture: {
    label: "Architecture",
    steps: [
      {
        step: 1,
        title: "Ingest",
        description:
          "Documents are parsed, chunked, and cleaned for embedding.",
      },
      {
        step: 2,
        title: "Index",
        description:
          "Chunks are embedded and stored in a vector database with metadata.",
      },
      {
        step: 3,
        title: "Retrieve",
        description:
          "User queries are matched against the index. Top-k chunks are returned.",
      },
      {
        step: 4,
        title: "Generate",
        description:
          "Retrieved context is injected into the prompt. The LLM produces a grounded answer with citations.",
      },
    ],
  },
  decisions: [
    {
      key: "Model",
      highlight: "DeepSeek 14B via Ollama.",
      detail: "Local inference for data privacy and zero per-query cost.",
    },
    {
      key: "Vector Store",
      highlight: "ChromaDB.",
      detail:
        "Lightweight, embeddable, fast for document-scale collections.",
    },
    {
      key: "Backend",
      highlight: "Flask + REST API.",
      detail: "Clean separation of ingestion and query services.",
    },
    {
      key: "Trade-off",
      highlight: "Data privacy.",
      detail:
        "Chose local inference over API — critical for enterprise use cases.",
    },
  ],
  cta: {
    text: "Need a knowledge assistant?",
    detail:
      "I design and build RAG systems tailored to your data and infrastructure.",
  },
};
