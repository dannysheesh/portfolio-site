import type { ProjectData } from "@/lib/types";

export const sakura: ProjectData = {
  slug: "sakura",
  title: "Sakura \u2014 Autonomous ML Agent",
  summary:
    "An agentic AI system that handles the full ML pipeline autonomously \u2014 data profiling, feature engineering, model selection, training, and validation. Built iteratively across eight development phases with end-to-end testing.",
  tags: ["Python", "Agentic AI", "AutoML", "E2E Testing"],
  embedUrl: null,
  liveUrl: "#",
  linkText: "View on GitHub",
  architecture: {
    label: "Agent Workflow",
    steps: [
      {
        step: 1,
        title: "Profile",
        description:
          "Agent receives a dataset and autonomously analyses types, distributions, and quality.",
      },
      {
        step: 2,
        title: "Engineer",
        description:
          "Generates and selects features based on data characteristics.",
      },
      {
        step: 3,
        title: "Train",
        description:
          "Evaluates model families, tunes hyperparameters, selects the best performer.",
      },
      {
        step: 4,
        title: "Validate",
        description:
          "Cross-validation, metrics generation, and structured reporting.",
      },
    ],
  },
  decisions: [
    {
      key: "Development",
      highlight: "8 iterative phases.",
      detail:
        "Each phase added a capability layer, tested before proceeding.",
    },
    {
      key: "Orchestration",
      highlight: "LLM as the decision backbone.",
      detail:
        "The agent reasons about which pipeline step to execute next.",
    },
    {
      key: "Testing",
      highlight: "E2E + integration tests",
      detail:
        "including Ollama inference tests for local model validation.",
    },
    {
      key: "Trade-off",
      highlight: "Autonomous operation.",
      detail:
        "The agent works on new data with zero manual config.",
    },
  ],
  cta: {
    text: "Want to automate ML workflows?",
    detail:
      "I build agentic systems that handle repetitive data science tasks.",
  },
};
