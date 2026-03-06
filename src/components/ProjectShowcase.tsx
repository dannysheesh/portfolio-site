import type { ProjectData } from "@/lib/types";
import ScrollReveal from "./ScrollReveal";
import ArchReveal from "./ArchReveal";

interface ProjectShowcaseProps {
  project: ProjectData;
}

export default function ProjectShowcase({ project }: ProjectShowcaseProps) {
  return (
    <ScrollReveal className="mb-24">
      {/* Screen / Embed area */}
      <div className="w-full aspect-[16/10] bg-gray-950 rounded-2xl overflow-hidden relative border border-gray-800 mb-10">
        <span className="absolute top-5 left-5 flex items-center gap-[0.4rem] text-[0.65rem] font-medium text-gray-400 tracking-[0.04em] uppercase z-10">
          <span className="w-1.5 h-1.5 bg-green rounded-full" />
          Live
        </span>
        {project.embedUrl ? (
          <iframe
            src={project.embedUrl}
            loading="lazy"
            title={project.title}
            className="w-full h-full border-none"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            allow="clipboard-read; clipboard-write"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3">
            <div className="text-[2.5rem] opacity-25">&#x2588;&#x2588;&#x2588;</div>
            <div className="text-xs text-gray-600 font-normal">
              {project.title} &mdash; embed your live app here
            </div>
          </div>
        )}
      </div>

      {/* Meta: info + arch reveal */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_340px] gap-8 md:gap-12 items-start">
        <div>
          <h3 className="text-[1.75rem] font-semibold tracking-[-0.025em] mb-3">
            {project.title}
          </h3>
          <p className="text-base text-gray-400 leading-[1.65] font-light mb-6">
            {project.summary}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[0.7rem] font-[450] text-gray-300 px-[0.85rem] py-[0.35rem] rounded-full bg-gray-900 border border-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={project.liveUrl}
            target={project.liveUrl.startsWith("http") ? "_blank" : undefined}
            rel={project.liveUrl.startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-blue no-underline text-[0.95rem] font-normal inline-flex items-center gap-[0.3rem] transition-all duration-250 hover:gap-[0.55rem]"
          >
            {project.linkText} <span>&rsaquo;</span>
          </a>
        </div>

        <ArchReveal
          architectureLabel={project.architecture.label}
          steps={project.architecture.steps}
          decisions={project.decisions}
          cta={project.cta}
        />
      </div>
    </ScrollReveal>
  );
}
