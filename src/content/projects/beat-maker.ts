import type { ProjectData } from "@/lib/types";

export const beatMaker: ProjectData = {
  slug: "beat-maker",
  title: "Beat Maker",
  summary:
    "A browser-based music creation tool with an interactive sequencer. Compose, layer, and play beats \u2014 all running client-side with the Web Audio API. Ships as a single HTML file.",
  tags: ["JavaScript", "Web Audio", "Vercel"],
  embedUrl: "https://beatmaker-vert.vercel.app",
  liveUrl: "https://beatmaker-vert.vercel.app",
  linkText: "Open full app",
  architecture: {
    label: "Architecture",
    steps: [
      {
        step: 1,
        title: "Grid Interface",
        description:
          "Users place beats on an interactive sequencer grid across instrument channels.",
      },
      {
        step: 2,
        title: "Audio Engine",
        description:
          "Web Audio API synthesises sound in real-time. Zero server dependency.",
      },
      {
        step: 3,
        title: "Playback",
        description:
          "Loop playback with BPM control. Entirely client-side.",
      },
    ],
  },
  decisions: [
    {
      key: "Stack",
      highlight: "Single HTML file.",
      detail: "Maximum simplicity and portability.",
    },
    {
      key: "Audio",
      highlight: "Web Audio API.",
      detail:
        "Native browser audio \u2014 zero dependencies, low latency.",
    },
    {
      key: "Trade-off",
      highlight: "Simplicity over features.",
      detail:
        "Ships in one file, loads instantly, works anywhere.",
    },
  ],
  cta: {
    text: "Need a custom interactive prototype?",
    detail: "I go from idea to deployed product in days.",
  },
};
