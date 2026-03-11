import type { ProjectData } from "@/lib/types";

export const sakura: ProjectData = {
  slug: "sakura",
  title: "Sakura — Autonomous ML Agent",
  summary:
    "A local-first, multi-agent AI system that autonomously completes the full ML lifecycle — from data ingestion and exploratory analysis through feature engineering, model training, evaluation, and artifact delivery. 10 specialist agents coordinate through an orchestrator, with sandboxed code execution and support for 11 LLM providers.",
  tags: ["Python", "Multi-Agent AI", "Streamlit", "SQLite", "Ollama"],
  embedUrl: null,
  previewImage: "/images/Autonomous_ML_Agent.png",
  liveUrl: "https://github.com/dannysheesh",
  linkText: "View on GitHub",
  architecture: {
    label: "Agent Workflow",
    steps: [
      {
        step: 1,
        title: "Ingest & Profile",
        description:
          "Upload raw data with a business goal. The Data Analyst agent profiles types, distributions, and quality issues.",
      },
      {
        step: 2,
        title: "Research & Engineer",
        description:
          "Web Researcher gathers domain context. Preprocessor cleans data. Feature Engineer creates and selects features.",
      },
      {
        step: 3,
        title: "Design & Train",
        description:
          "Model Architect selects algorithms. Trainer runs training loops with hyperparameter tuning in a sandboxed environment.",
      },
      {
        step: 4,
        title: "Evaluate & Deliver",
        description:
          "Evaluator runs cross-validation and metrics. Explainer generates SHAP analysis, model cards, and a final delivery report.",
      },
    ],
  },
  decisions: [
    {
      key: "Agents",
      highlight: "10 specialist agents.",
      detail:
        "Each handles a distinct ML lifecycle phase, coordinated by the Orchestrator.",
    },
    {
      key: "LLM Routing",
      highlight: "11 provider adapters.",
      detail:
        "Ollama (local), Anthropic, OpenAI, Google, Mistral, and more with automatic fallback.",
    },
    {
      key: "Sandbox",
      highlight: "Secure code execution.",
      detail:
        "Agent-generated scripts run in an isolated sandbox with memory and time limits.",
    },
    {
      key: "Development",
      highlight: "16 iterative phases.",
      detail:
        "From bootstrapping through security hardening, each phase tested before proceeding.",
    },
  ],
  cta: {
    text: "Want to automate ML workflows?",
    detail:
      "I build multi-agent systems that handle the full data science lifecycle autonomously.",
  },
};
