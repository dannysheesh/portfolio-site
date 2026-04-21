import type { ProjectData } from "@/lib/types";
import Image from "next/image";

interface ProjectShowcaseProps {
  project: ProjectData;
  index?: number;
}

const SLUG_TO_FILE: Record<string, string> = {
  sakura: "~/projects/sakura/main.py",
  "rag-assistant": "~/projects/councilmate/app.py",
  "workflow-automation": "~/projects/workflow/server.py",
};

export default function ProjectShowcase({
  project,
  index = 0,
}: ProjectShowcaseProps) {
  const filepath =
    SLUG_TO_FILE[project.slug] ?? `~/projects/${project.slug}/index.ts`;

  return (
    <div className="proj">
      <div className="proj-top">
        <span className="live">LIVE</span>
        <span>PROJECT_{String(index + 1).padStart(2, "0")}</span>
        <span className="filepath">{filepath}</span>
      </div>

      {project.previewImage && (
        <div className="proj-preview">
          <Image
            src={project.previewImage}
            alt={project.title}
            fill
            sizes="(max-width: 1100px) 100vw, 1100px"
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
          <div className="scan" />
        </div>
      )}

      <div className="proj-body">
        <div className="proj-info">
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
          <div className="tag-row">
            {project.tags.map((t) => (
              <span key={t} className="tag">
                #{t}
              </span>
            ))}
          </div>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary"
          >
            &gt; {project.linkText}
          </a>
        </div>

        <div className="proj-arch">
          <h4>◆ {project.architecture.label.toUpperCase()}</h4>
          {project.architecture.steps.map((s) => (
            <div key={s.step} className="step">
              <span className="n">{String(s.step).padStart(2, "0")}</span>
              <div>
                <h5>{s.title}</h5>
                <p>{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
