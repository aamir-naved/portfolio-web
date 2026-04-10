"use client";

import { motion } from "framer-motion";
import { ArrowDoodle, SparkDoodle } from "@/components/doodles";
import { NotebookButton } from "@/components/notebook-button";

type ProjectCardProps = {
  name: string;
  description: string;
  tech: readonly string[];
  accent: string;
};

export function ProjectCard({ name, description, tech, accent }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6, rotate: 0.35 }}
      transition={{ duration: 0.2 }}
      className={`sketch-panel p-5 ${accent}`}
    >
      <div className="mb-5 grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="project-sketch-strip">
            <span className="project-sketch-chip">☑ backend</span>
            <span className="project-sketch-chip">✎ product thinking</span>
            <span className="project-sketch-chip">↗ real use case</span>
          </div>
          <h3 className="handwritten mb-2 text-4xl leading-[0.95] text-[#1f1a17]">{name}</h3>
          <p className="text-[1.15rem] leading-8 text-[#3b352f]">{description}</p>
        </div>
        <div className="relative">
          <SparkDoodle className="absolute -left-2 -top-2 w-8 rotate-[-8deg]" />
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
      <div className="mb-5 flex flex-wrap gap-3">
        {tech.map((item) => (
          <span key={item} className="tag-pill">
            {item}
          </span>
        ))}
      </div>
      <NotebookButton href="#contact" variant="secondary" className="inline-flex !text-[1.75rem]">
        View Project
      </NotebookButton>
    </motion.article>
  );
}
