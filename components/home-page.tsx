"use client";

import { motion } from "framer-motion";
import { about, contact, experience, hero, projects, skills } from "@/assets/site-content";
import { ContactForm } from "@/components/contact-form";
import {
  ArrowDoodle,
  BulbDoodle,
  CloudDoodle,
  DatabaseDoodle,
  PaperPlaneDoodle,
  RocketDoodle,
  ScribbleLoop,
  SparkDoodle,
} from "@/components/doodles";
import { NotebookButton } from "@/components/notebook-button";
import { NotebookSheet } from "@/components/notebook-sheet";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";

function Twinkle({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      animate={{ opacity: [0.45, 1, 0.55], scale: [0.92, 1.08, 0.95], rotate: [-6, 4, -6] }}
      transition={{ duration: 2.8, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <SparkDoodle className="w-full" />
    </motion.div>
  );
}

function FloatCloud({
  className = "",
  delay = 0,
  distance = 8,
}: {
  className?: string;
  delay?: number;
  distance?: number;
}) {
  return (
    <motion.div
      className={className}
      animate={{ x: [0, distance, 0], y: [0, -4, 0] }}
      transition={{ duration: 6, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <CloudDoodle className="w-full" />
    </motion.div>
  );
}

export function HomePage() {
  return (
    <div className="relative mx-auto max-w-[88rem] px-4 py-6 sm:px-6 lg:px-10 lg:py-10">
      <div className="margin-doodles hidden xl:block">
        <SparkDoodle className="left-[3.5vw] top-24 w-12 rotate-[-12deg]" />
        <CloudDoodle className="left-[1.5vw] top-[28rem] w-40 rotate-[-7deg]" />
        <PaperPlaneDoodle className="left-[4vw] top-[60rem] w-24 rotate-[-16deg]" />
        <SparkDoodle className="left-[7vw] top-[94rem] w-10 rotate-[10deg]" />
        <BulbDoodle className="left-[2vw] top-[122rem] w-14 rotate-[-14deg]" />
        <CloudDoodle className="left-[0.5vw] top-[150rem] w-36 rotate-[5deg]" />
        <PaperPlaneDoodle className="left-[5vw] top-[183rem] w-24 rotate-[10deg]" />
        <SparkDoodle className="left-[6vw] top-[214rem] w-11 rotate-[-6deg]" />
        <CloudDoodle className="right-[2vw] top-[22rem] w-36 rotate-[8deg]" />
        <SparkDoodle className="right-[5vw] top-[42rem] w-12 rotate-[18deg]" />
        <RocketDoodle className="right-[4vw] top-[74rem] w-16 rotate-[22deg]" />
        <PaperPlaneDoodle className="right-[2vw] top-[108rem] w-28 rotate-[12deg]" />
        <DatabaseDoodle className="right-[3vw] top-[136rem] w-14 rotate-[-10deg]" />
        <CloudDoodle className="right-[1vw] top-[166rem] w-34 rotate-[-8deg]" />
        <RocketDoodle className="right-[5vw] top-[196rem] w-14 rotate-[16deg]" />
        <SparkDoodle className="right-[6vw] top-[226rem] w-10 rotate-[10deg]" />
        <div className="scribble-swoosh left-[4vw] top-[15rem] h-16 w-36 rotate-[12deg]" />
        <div className="scribble-swoosh right-[4vw] top-[88rem] h-20 w-40 rotate-[-12deg]" />
        <div className="scribble-swoosh left-[3vw] top-[145rem] h-16 w-32 rotate-[-8deg]" />
        <div className="scribble-swoosh right-[3vw] top-[205rem] h-20 w-36 rotate-[8deg]" />
      </div>

      <div className="space-y-8">
        <Reveal>
          <NotebookSheet className="paper-stack mx-auto max-w-6xl overflow-hidden">
            <div className="section-kicker">
              <span>✎</span>
              <span>Dear Internet, meet my portfolio.</span>
            </div>
            <div className="relative">
              <Twinkle className="absolute left-2 top-14 hidden w-7 rotate-[-10deg] sm:block" delay={0.1} />
              <Twinkle className="absolute right-24 top-16 hidden w-8 rotate-[10deg] sm:block" delay={1.2} />
              <motion.div
                animate={{ y: [0, -6, 0], rotate: [0, 1.2, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-0 top-0 hidden w-24 rotate-[8deg] sm:block"
              >
                <RocketDoodle className="h-auto w-full" />
              </motion.div>

              <h1 className="handwritten max-w-3xl text-[3.7rem] leading-[0.84] text-[#1d1815] sm:text-[6.2rem]">
                {hero.name}
              </h1>

              <div className="mt-5 inline-flex rotate-[-1.2deg] rounded-[14px] border-[3px] border-[#2c2823] bg-[#f9f1df] px-6 py-3 shadow-[3px_4px_0_#9d8a6a]">
                <span className="handwritten text-[1.8rem] text-[#201b18] sm:text-[2.2rem]">{hero.title}</span>
              </div>

              <p className="mt-5 max-w-2xl text-[1.45rem] leading-8 text-[#342f29] sm:text-[1.8rem] sm:leading-9">{hero.subtitle}</p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <NotebookButton href="#projects">{hero.ctaLabel}</NotebookButton>
                <NotebookButton href="/resume/aamir-naved-resume.pdf" download variant="secondary">
                  Download Resume
                </NotebookButton>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
                <ArrowDoodle className="w-36 rotate-[4deg] sm:w-44" />
                <div className="scribble-note">Scalable APIs</div>
                <FloatCloud className="w-40 sm:w-48" delay={0.5} distance={10} />
              </div>

              <div className="doodle-divider">
                <div className="dash" />
                <span className="micro-caption">systems • cloud • genai</span>
                <div className="dash" />
              </div>
            </div>
          </NotebookSheet>
        </Reveal>

        <Reveal delay={0.05}>
          <NotebookSheet id="about" title="About Me" className="mx-auto max-w-6xl">
            <hr className="section-rule" />
            <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
              <div className="mini-note rotate-[-1deg]">✿ backend, cloud, shipping energy</div>
              <div className="section-side-note rotate-[1.5deg]">
                <strong>Little Note</strong>
                I like software that feels calm under pressure, even when the system behind it is doing a lot of heavy lifting.
              </div>
            </div>
            <div className="grid items-start gap-8 md:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-5 text-[1.45rem] leading-8 text-[#372f2a] sm:text-[1.9rem] sm:leading-10">
                <p>{about.summary}</p>
                <ul className="space-y-4">
                  {about.details.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 text-[#5c8c5f]">✿</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="doodle-divider">
                  <Twinkle className="w-7 rotate-[-10deg]" delay={0.2} />
                  <motion.div
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ScribbleLoop className="h-12 w-36 rotate-[5deg]" />
                  </motion.div>
                  <Twinkle className="w-8 rotate-[14deg]" delay={1} />
                </div>
              </div>
              <div className="relative flex justify-center md:justify-end">
                <Twinkle className="absolute -left-2 top-4 w-9 rotate-[-12deg]" delay={0.7} />
                <motion.div
                  className="absolute bottom-4 left-0 w-24 rotate-[14deg]"
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowDoodle className="w-full" />
                </motion.div>
                <motion.div
                  className="rotate-[1.8deg]"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="sketch-frame flex min-h-[320px] w-[280px] flex-col justify-between p-5 sm:w-[320px]">
                    <div className="flex items-center justify-between">
                      <Twinkle className="w-7 rotate-[-12deg]" delay={0.3} />
                      <span className="micro-caption">backend notes</span>
                      <Twinkle className="w-7 rotate-[12deg]" delay={1.1} />
                    </div>
                    <div className="space-y-4">
                      <div className="mini-note rotate-[-1deg]">Java + Spring</div>
                      <div className="mini-note rotate-[1deg]">Cloud + AI</div>
                      <div className="mini-note rotate-[-0.5deg]">Reliable systems</div>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <BulbDoodle className="w-14 rotate-[-8deg]" />
                      <CloudDoodle className="w-20 rotate-[6deg]" />
                      <RocketDoodle className="w-12 rotate-[10deg]" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </NotebookSheet>
        </Reveal>

        <Reveal delay={0.1}>
          <NotebookSheet id="projects" title="My Projects" className="mx-auto max-w-6xl">
            <hr className="section-rule" />
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div className="mini-note rotate-[-0.8deg]">☑ built from real resume work</div>
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ x: [0, 8, 0], y: [0, -3, 0], rotate: [8, 12, 8] }}
                  transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <PaperPlaneDoodle className="w-16" />
                </motion.div>
                <Twinkle className="w-8 rotate-[18deg]" delay={0.8} />
              </div>
            </div>
            <div className="space-y-6">
              {projects.map((project) => (
                <ProjectCard key={project.name} {...project} />
              ))}
            </div>
            <div className="doodle-divider">
              <div className="dash" />
              <span className="micro-caption">idea → architecture → shipped</span>
              <div className="dash" />
            </div>
          </NotebookSheet>
        </Reveal>

        <Reveal delay={0.15}>
          <NotebookSheet id="skills" title="My Skills" className="mx-auto max-w-6xl">
            <hr className="section-rule" />
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div className="mini-note rotate-[1deg]">✎ tools I reach for often</div>
              <ScribbleLoop className="h-12 w-32 rotate-[-6deg]" />
            </div>
            <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr]">
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <label
                    key={skill}
                    className="flex items-center gap-4 text-[1.6rem] text-[#2f2923] sm:text-[2rem]"
                    style={{ transform: `rotate(${index % 2 === 0 ? "-0.7deg" : "0.6deg"})` }}
                  >
                    <span className="checkbox-sketch" aria-hidden="true">
                      ✓
                    </span>
                    <span>{skill}</span>
                  </label>
                ))}
                <div className="skill-cloud">
                  {["Microservices", "REST APIs", "GitHub Workflows", "Vertex AI"].map((item, index) => (
                    <motion.span
                      key={item}
                      className="skill-badge"
                      animate={{ y: [0, index % 2 === 0 ? -2 : 2, 0] }}
                      transition={{ duration: 3 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="relative">
                <motion.div
                  className="laptop-sketch mx-auto max-w-md rotate-[1.4deg]"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="screen">
                    <div className="screen-line w-1/4" />
                    <div className="screen-line w-5/6" />
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      <motion.div className="screen-card h-10" animate={{ opacity: [0.65, 1, 0.65] }} transition={{ duration: 2.8, repeat: Infinity }} />
                      <motion.div className="screen-card h-10 bg-[#cfe0b3]" animate={{ opacity: [1, 0.65, 1] }} transition={{ duration: 3.1, repeat: Infinity, delay: 0.6 }} />
                      <motion.div className="screen-card h-10 bg-[#efd08c]" animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 2.5, repeat: Infinity, delay: 1 }} />
                    </div>
                    <div className="screen-line mt-3 w-2/5" />
                  </div>
                  <div className="keyboard" />
                </motion.div>
                <motion.span
                  className="absolute left-2 top-1 text-3xl text-[#d4aa38]"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2.2, repeat: Infinity }}
                >
                  ✦
                </motion.span>
                <motion.span
                  className="absolute right-4 top-0 text-3xl text-[#6589b8]"
                  animate={{ opacity: [1, 0.45, 1] }}
                  transition={{ duration: 2.8, repeat: Infinity, delay: 0.7 }}
                >
                  ✦
                </motion.span>
                <motion.div
                  className="absolute -left-2 bottom-3 w-14 rotate-[-10deg]"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <BulbDoodle className="w-full" />
                </motion.div>
                <FloatCloud className="absolute bottom-[-1.5rem] right-0 w-32 rotate-[4deg]" delay={1.2} distance={7} />
              </div>
            </div>
          </NotebookSheet>
        </Reveal>

        <Reveal delay={0.2}>
          <NotebookSheet id="experience" title="Experience" className="mx-auto max-w-6xl">
            <hr className="section-rule" />
            <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
              <div className="section-side-note rotate-[-1deg]">
                <strong>What matters to me</strong>
                Clean backend architecture, strong reliability, and shipping features that actually help users.
              </div>
              <div className="mini-note rotate-[1deg]">★ enterprise systems + AI search</div>
            </div>
            <div className="space-y-5">
              {experience.map((role, index) => (
                <article
                  key={role.company}
                  className="sketch-panel p-5"
                  style={{ transform: `rotate(${index % 2 === 0 ? "0.45deg" : "-0.45deg"})` }}
                >
                  <div className="mb-3 flex flex-wrap items-end justify-between gap-3">
                    <h3 className="handwritten text-[2.7rem] leading-none text-[#1d1714]">{role.company}</h3>
                    <p className="rounded-full border-[2px] border-[#2a2622] px-3 py-1 text-[1rem] uppercase tracking-[0.18em] text-[#615548]">
                      {role.period}
                    </p>
                  </div>
                  <ul className="space-y-3 text-[1.28rem] leading-8 text-[#3d352d] sm:text-[1.55rem] sm:leading-9">
                    {role.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-1 text-[#d1a737]">★</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <ScribbleLoop className="h-12 w-40 rotate-[4deg]" />
              </motion.div>
              <motion.div
                className="w-16 rotate-[-6deg]"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4.3, repeat: Infinity, ease: "easeInOut" }}
              >
                <DatabaseDoodle className="w-full" />
              </motion.div>
            </div>
          </NotebookSheet>
        </Reveal>

        <Reveal delay={0.25}>
          <NotebookSheet id="contact" title="Contact Me" className="mx-auto max-w-6xl">
            <hr className="section-rule" />
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div className="mini-note rotate-[-0.8deg]">Let&apos;s build something useful.</div>
              <div className="flex items-center gap-3">
                <Twinkle className="w-8 rotate-[-8deg]" delay={0.4} />
                <motion.div
                  animate={{ x: [0, 6, 0], y: [0, -3, 0], rotate: [14, 18, 14] }}
                  transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <PaperPlaneDoodle className="w-14" />
                </motion.div>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr]">
              <div className="space-y-5 text-[1.4rem] text-[#312a24] sm:text-[1.75rem]">
                <a href={`mailto:${contact.email}`} className="contact-row">
                  <span className="contact-icon bg-[#bcd1eb]">✉</span>
                  <span>{contact.email}</span>
                </a>
                <a href={`https://${contact.linkedin}`} target="_blank" rel="noreferrer" className="contact-row">
                  <span className="contact-icon bg-[#8aa6d9]">in</span>
                  <span>{contact.linkedin}</span>
                </a>
                <a href={`https://${contact.github}`} target="_blank" rel="noreferrer" className="contact-row">
                  <span className="contact-icon bg-[#d4d2ce]">⌘</span>
                  <span>{contact.github}</span>
                </a>
                <div className="flex flex-wrap gap-4 pt-2">
                  <NotebookButton href="/resume/aamir-naved-resume.pdf" download>
                    Download Resume
                  </NotebookButton>
                  <NotebookButton href="#top" variant="secondary">
                    Back To Top
                  </NotebookButton>
                </div>
                <CloudDoodle className="mt-6 w-48" />
                <div className="contact-doodle-board">
                  <div className="contact-doodle-card">
                    <Twinkle className="w-8 rotate-[12deg]" delay={0.2} />
                  </div>
                  <div className="contact-doodle-card">
                    <motion.div
                      className="w-12 rotate-[-8deg]"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <BulbDoodle className="w-full" />
                    </motion.div>
                  </div>
                  <div className="contact-doodle-card">
                    <motion.div
                      className="w-14 rotate-[10deg]"
                      animate={{ x: [0, 5, 0], y: [0, -2, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <PaperPlaneDoodle className="w-full" />
                    </motion.div>
                  </div>
                </div>
              </div>

              <div>
                <p className="mb-4 text-[1.3rem] leading-8 text-[#3d352f] sm:text-[1.65rem] sm:leading-9">
                  If you&apos;re building systems that need dependable backend foundations, thoughtful APIs, or practical GenAI features, let&apos;s talk.
                </p>
                <ContactForm />
                <div className="mt-5 flex items-center justify-between gap-4">
                  <motion.div
                    animate={{ x: [0, -5, 0] }}
                    transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ScribbleLoop className="h-12 w-36 rotate-[-4deg]" />
                  </motion.div>
                  <FloatCloud className="w-24 rotate-[6deg]" delay={0.6} distance={6} />
                </div>
              </div>
            </div>
          </NotebookSheet>
        </Reveal>
      </div>
    </div>
  );
}
