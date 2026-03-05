"use client";

import { useState } from "react";
import type { FlowStep, Decision } from "@/lib/types";

interface ArchRevealProps {
  architectureLabel: string;
  steps: FlowStep[];
  decisions: Decision[];
  cta: {
    text: string;
    detail: string;
  };
}

export default function ArchReveal({
  architectureLabel,
  steps,
  decisions,
  cta,
}: ArchRevealProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-gray-800 pt-8">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-[0.4rem] text-blue text-[0.9rem] font-normal cursor-pointer bg-transparent border-none p-0 transition-all duration-250 hover:gap-[0.65rem] select-none"
      >
        How it was designed{" "}
        <span
          className="inline-block text-[0.8rem] transition-transform duration-500"
          style={{
            transform: open ? "rotate(90deg)" : "rotate(0deg)",
            transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)",
          }}
        >
          &rsaquo;
        </span>
      </button>

      <div className={`arch-body ${open ? "open" : ""}`}>
        <div className="pt-10 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Architecture flow steps */}
          <div>
            <h4 className="text-[0.7rem] font-medium text-gray-500 uppercase tracking-[0.1em] mb-6">
              {architectureLabel}
            </h4>
            {steps.map((step, i) => (
              <div key={step.step} className="flex gap-4 mb-7 relative">
                {/* Connecting line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-[11px] top-7 bottom-[-14px] w-px bg-gray-800" />
                )}
                <div className="w-[22px] h-[22px] rounded-full bg-gray-800 shrink-0 flex items-center justify-center text-[0.6rem] font-semibold text-gray-300 mt-[1px]">
                  {step.step}
                </div>
                <div className="text-sm text-gray-400 leading-[1.55]">
                  <strong className="text-gray-200 font-medium block mb-[0.15rem]">
                    {step.title}
                  </strong>
                  {step.description}
                </div>
              </div>
            ))}
          </div>

          {/* Decisions */}
          <div>
            <h4 className="text-[0.7rem] font-medium text-gray-500 uppercase tracking-[0.1em] mb-6">
              Decisions
            </h4>
            {decisions.map((decision) => (
              <div
                key={decision.key}
                className="py-4 border-b border-gray-800 last:border-b-0"
              >
                <div className="text-[0.65rem] font-medium text-gray-500 uppercase tracking-[0.08em] mb-[0.35rem]">
                  {decision.key}
                </div>
                <div className="text-sm text-gray-300 leading-[1.55] font-light">
                  <strong className="text-gray-100 font-medium">
                    {decision.highlight}
                  </strong>{" "}
                  {decision.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inline CTA */}
        <div className="mt-10 p-8 bg-gray-950 border border-gray-800 rounded-[14px] flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <p className="text-[0.95rem] text-gray-400 font-light">
            <strong className="text-gray-100 font-medium">{cta.text}</strong>{" "}
            {cta.detail}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-[0.35rem] px-[1.4rem] py-[0.65rem] rounded-full bg-blue text-white text-[0.85rem] font-medium no-underline whitespace-nowrap transition-colors hover:bg-[#0077ed]"
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
}
