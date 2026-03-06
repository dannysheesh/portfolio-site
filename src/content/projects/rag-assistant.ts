import type { ProjectData } from "@/lib/types";

export const ragAssistant: ProjectData = {
  slug: "rag-assistant",
  title: "CouncilMate AI",
  summary:
    "A RAG-powered AI assistant that helps Melbourne residents navigate city council services — from waste management and parking permits to pet registration and community events. Scrapes and processes real council data, then answers questions with grounded, cited responses.",
  tags: ["Python", "RAG", "FastAPI", "ChromaDB", "Next.js", "Scrapy"],
  embedUrl: "https://frontend-ten-umber-71.vercel.app/",
  liveUrl: "https://frontend-ten-umber-71.vercel.app/",
  linkText: "Try the demo",
  architecture: {
    label: "Architecture",
    steps: [
      {
        step: 1,
        title: "Scrape",
        description:
          "Scrapy + Playwright crawl City of Melbourne pages and PDFs, extracting structured content.",
      },
      {
        step: 2,
        title: "Process & Index",
        description:
          "Documents are chunked, embedded, and stored in ChromaDB with metadata for fast retrieval.",
      },
      {
        step: 3,
        title: "Route & Retrieve",
        description:
          "User queries are routed to the right domain. Top-k relevant chunks are retrieved from the vector store.",
      },
      {
        step: 4,
        title: "Generate",
        description:
          "Retrieved context is injected into the prompt. The LLM produces a grounded answer scoped to council services.",
      },
    ],
  },
  decisions: [
    {
      key: "LLM",
      highlight: "Claude API.",
      detail: "High-quality reasoning for nuanced council policy questions.",
    },
    {
      key: "Vector Store",
      highlight: "ChromaDB.",
      detail:
        "Lightweight and embeddable — ideal for document-scale council data.",
    },
    {
      key: "Backend",
      highlight: "FastAPI + Pydantic.",
      detail: "Async API with typed request/response models for reliability.",
    },
    {
      key: "Data Pipeline",
      highlight: "Scrapy + Playwright.",
      detail:
        "Handles both static pages and JS-rendered council content for comprehensive coverage.",
    },
  ],
  cta: {
    text: "Need a domain-specific AI assistant?",
    detail:
      "I design and build RAG systems that turn messy real-world data into reliable, grounded answers.",
  },
};
