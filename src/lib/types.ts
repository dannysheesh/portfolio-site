export interface FlowStep {
  step: number;
  title: string;
  description: string;
}

export interface Decision {
  key: string;
  highlight: string;
  detail: string;
}

export interface ProjectData {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  embedUrl: string | null;
  liveUrl: string;
  linkText: string;
  architecture: {
    label: string;
    steps: FlowStep[];
  };
  decisions: Decision[];
  cta: {
    text: string;
    detail: string;
  };
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  description: string;
}
