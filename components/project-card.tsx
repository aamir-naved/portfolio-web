"use client";

import { memo } from "react";
import { ArrowDoodle, CodeBracesDoodle } from "@/components/doodles";
import { NotebookButton } from "@/components/notebook-button";

type ProjectCardProps = {
  name: string;
  description: string;
  tech: readonly string[];
  tilt: number;
};

export const ProjectCard = memo(function ProjectCard({ name, description, tech, tilt }: ProjectCardProps) {
  return (
    <article className="sketch-panel p-5 md:p-6" style={{ transform: `rotate(${tilt}deg)` }}>
      <div className="mb-6 grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:gap-7">
        <div className="space-y-3">
          <div className="project-sketch-strip">
            <span className="project-sketch-chip">☑ backend</span>
            <span className="project-sketch-chip">✎ product thinking</span>
            <span className="project-sketch-chip">↗ real use case</span>
          </div>
          <h3 className="handwritten text-4xl leading-[0.95] text-[#1f1a17] sm:text-[2.65rem]">{name}</h3>
          <p className="body-copy text-[1.08rem] text-[#3b352f] sm:text-[1.18rem]">{description}</p>
        </div>
        <div className="relative min-h-[200px]">
          <CodeBracesDoodle className="absolute -left-2 -top-2 w-9 rotate-[-8deg] opacity-95" />
          <ArrowDoodle className="absolute -bottom-3 right-8 w-24 rotate-[6deg]" />
          <div className="laptop-sketch">
            <div className="screen">
              <div className="screen-line w-1/3" />
              <div className="screen-line w-4/5" />
              <div className="mt-3 grid grid-cols-[1.2fr_0.8fr] gap-2">
                <div className="screen-card h-12" />
                <div className="screen-card h-12 bg-[#f0d47b]" />
              </div>
              <div className="screen-line mt-3 w-2/3" />
            </div>
            <div className="keyboard" />
          </div>
        </div>
      </div>
      <div className="mb-5 flex flex-wrap gap-2.5 sm:gap-3">
        {tech.map((item) => (
          <span key={item} className="tag-pill">
            {item}
          </span>
        ))}
      </div>
      <NotebookButton href="#contact" variant="secondary" className="inline-flex !text-[1.75rem]">
        View Project
      </NotebookButton>
    </article>
  );
});
