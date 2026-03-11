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
        title: "Receive",
        description:
          "Events arrive from 10 built-in connectors — Gmail, Slack, Zendesk, Xero, and more — normalised into a universal WorkItem model.",
      },
      {
        step: 2,
        title: "Understand",
        description:
          "AI classifies intent, urgency, and category. RAG retrieves relevant context from knowledge bases.",
      },
      {
        step: 3,
        title: "Safeguard",
        description:
          "Guardrails check for PII, prohibited content, and bias. Confidence-based routing decides auto-resolve vs. human review.",
      },
      {
        step: 4,
        title: "Act",
        description:
          "Approved responses sent, tickets updated, notifications dispatched. Full audit trail with Langfuse tracing.",
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
