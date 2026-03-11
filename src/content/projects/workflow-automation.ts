import type { ProjectData } from "@/lib/types";

export const workflowAutomation: ProjectData = {
  slug: "workflow-automation",
  title: "AI Workflow Automation Platform",
  summary:
    "A self-hosted, multi-tenant platform that connects to business systems — email, CRM, helpdesk, accounting — and processes inbound events through configurable AI pipelines. Features a visual drag-and-drop workflow builder, 10 preset templates, and triple-provider LLM architecture with automatic fallback.",
  tags: ["Python", "FastAPI", "React", "Celery", "PostgreSQL", "Docker"],
  embedUrl: null,
  previewImage: "/images/workflow-builder.png",
  liveUrl: "https://github.com/dannysheesh",
  linkText: "View on GitHub",
  architecture: {
    label: "Architecture",
    steps: [
      {
        step: 1,
        title: "Ingest",
        description:
          "Events arrive from 10 built-in connectors — Gmail, Slack, Zendesk, Xero, and more — normalised into a universal WorkItem model.",
      },
      {
        step: 2,
        title: "Classify & Retrieve",
        description:
          "AI classifies intent, urgency, and category. Hybrid RAG retrieves relevant context from knowledge bases via semantic + keyword search.",
      },
      {
        step: 3,
        title: "Reason & Safeguard",
        description:
          "LLM drafts a response using classification and retrieved context. Guardrails check for PII, prohibited content, and bias.",
      },
      {
        step: 4,
        title: "Route & Act",
        description:
          "Confidence-based routing: high-confidence items auto-resolve, uncertain ones go to human review. Replies sent, tickets updated, full audit trail logged.",
      },
    ],
  },
  decisions: [
    {
      key: "Stack",
      highlight: "FastAPI + Celery + PostgreSQL.",
      detail:
        "Async API with distributed task queue for reliable workflow execution at scale.",
    },
    {
      key: "LLM Strategy",
      highlight: "Triple-provider with fallback.",
      detail:
        "Ollama (local), Anthropic, and OpenAI — supports air-gapped deployments.",
    },
    {
      key: "Builder",
      highlight: "React Flow visual canvas.",
      detail:
        "Drag-and-drop DAG builder with live validation and one-click deployment.",
    },
    {
      key: "Multi-tenancy",
      highlight: "YAML-configured per tenant.",
      detail:
        "No code changes per client — connectors, workflows, and branding all configurable.",
    },
  ],
  cta: {
    text: "Need intelligent workflow automation?",
    detail:
      "I build AI-powered platforms that replace manual triage, classification, and routing across entire business operations.",
  },
};
