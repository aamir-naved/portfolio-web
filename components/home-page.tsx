"use client";

import dynamic from "next/dynamic";
import { about, contact, experience, hero, projects, skills, testimonials } from "@/assets/site-content";
import {
  ApiFlowDoodle,
  ArrowDoodle,
  CodeBracesDoodle,
  ContainersDoodle,
  DatabaseDoodle,
  GitBranchDoodle,
  HttpBadgeDoodle,
  LaptopDoodle,
  MicrochipDoodle,
  NetworkNodesDoodle,
  ScribbleLoop,
  ServerStackDoodle,
  TerminalDoodle,
} from "@/components/doodles";
import { NotebookButton } from "@/components/notebook-button";
import { NotebookSheet } from "@/components/notebook-sheet";
import { ProjectCard } from "@/components/project-card";
import { Reveal, StaggerGroup } from "@/components/reveal";

const ContactForm = dynamic(
  () => import("@/components/contact-form").then((m) => m.ContactForm),
  {
    ssr: true,
    loading: () => (
      <div className="sketch-panel mx-auto flex min-h-[260px] max-w-md flex-col gap-3 p-5">
        <div className="sketch-input h-[3.25rem] border-[#dccfb8] bg-[#f0e8d8]" />
        <div className="sketch-input h-[3.25rem] border-[#dccfb8] bg-[#f0e8d8]" />
        <div className="sketch-input h-[8.5rem] resize-none border-[#dccfb8] bg-[#f0e8d8]" />
      </div>
    ),
  },
);

export function HomePage() {
  return (
    <div className="relative mx-auto max-w-[88rem] px-4 py-6 sm:px-6 lg:px-10 lg:py-10">
      <div className="margin-doodles hidden xl:block" aria-hidden="true">
        <TerminalDoodle className="left-[3.2vw] top-[5%] w-16 rotate-[-10deg]" />
        <NetworkNodesDoodle className="left-[0.8vw] top-[13%] w-28 rotate-[-5deg]" />
        <ApiFlowDoodle className="left-[3.5vw] top-[23%] w-36 rotate-[-8deg]" />
        <CodeBracesDoodle className="left-[6.5vw] top-[32%] w-14 rotate-[12deg]" />
        <MicrochipDoodle className="left-[2vw] top-[41%] w-20 rotate-[-11deg]" />
        <ServerStackDoodle className="left-[1vw] top-[50%] w-[4.5rem] rotate-[4deg]" />
        <LaptopDoodle className="left-[4.5vw] top-[60%] w-32 rotate-[-6deg]" />
        <DatabaseDoodle className="left-[3vw] top-[70%] w-14 rotate-[-11deg]" />
        <ContainersDoodle className="left-[0.8vw] top-[79%] w-28 rotate-[-4deg]" />
        <GitBranchDoodle className="left-[5vw] top-[87%] w-16 rotate-[14deg]" />
        <HttpBadgeDoodle className="left-[6.5vw] top-[95%] w-20 rotate-[-7deg]" />

        <TerminalDoodle className="right-[1.5vw] top-[7%] w-[4.5rem] rotate-[8deg]" />
        <LaptopDoodle className="right-[4vw] top-[16%] w-28 rotate-[10deg]" />
        <ServerStackDoodle className="right-[2vw] top-[25%] w-20 rotate-[-14deg]" />
        <ApiFlowDoodle className="right-[1vw] top-[35%] w-[8.5rem] rotate-[6deg]" />
        <DatabaseDoodle className="right-[3.5vw] top-[44%] w-14 rotate-[10deg]" />
        <NetworkNodesDoodle className="right-[5.5vw] top-[53%] w-24 rotate-[-12deg]" />
        <MicrochipDoodle className="right-[2vw] top-[62%] w-[4.75rem] rotate-[9deg]" />
        <CodeBracesDoodle className="right-[1vw] top-[71%] w-16 rotate-[-9deg]" />
        <GitBranchDoodle className="right-[4.5vw] top-[80%] w-[3.75rem] rotate-[11deg]" />
        <ContainersDoodle className="right-[2vw] top-[88%] w-28 rotate-[-6deg]" />
        <LaptopDoodle className="right-[6vw] top-[96%] w-14 rotate-[10deg]" />

        <div className="scribble-swoosh left-[4vw] top-[19%] h-16 w-36 rotate-[12deg]" />
        <div className="scribble-swoosh right-[4vw] top-[31%] h-20 w-40 rotate-[-12deg]" />
        <div className="scribble-swoosh left-[3vw] top-[48%] h-16 w-32 rotate-[-8deg]" />
        <div className="scribble-swoosh right-[3.5vw] top-[59%] h-[4.25rem] w-36 rotate-[8deg]" />
        <div className="scribble-swoosh left-[4vw] top-[76%] h-16 w-36 rotate-[10deg]" />
        <div className="scribble-swoosh right-[4vw] top-[84%] h-20 w-40 rotate-[-10deg]" />
      </div>

      <div className="space-y-8">
        <Reveal>
          <NotebookSheet className="paper-stack mx-auto max-w-6xl overflow-hidden" layoutSeed="hero">
            <StaggerGroup className="relative">
              <div className="section-kicker">
                <span>✎</span>
                <span>Dear Internet, meet my portfolio.</span>
              </div>
              <div className="relative">
                <div className="absolute left-0 top-10 hidden w-10 rotate-[-8deg] opacity-90 sm:block md:left-2">
                  <CodeBracesDoodle className="h-auto w-full" />
                </div>
                <div className="absolute right-16 top-12 hidden w-14 rotate-[6deg] opacity-90 sm:block lg:right-28">
                  <TerminalDoodle className="h-auto w-full" />
                </div>
                <div className="absolute right-0 top-0 hidden w-[5.5rem] rotate-[5deg] sm:block md:w-28">
                  <LaptopDoodle className="h-auto w-full" />
                </div>

                <h1 className="handwritten max-w-3xl text-[3.7rem] leading-[0.84] text-[#1d1815] sm:text-[6.2rem]">
                  {hero.name}
                </h1>

                <div className="mt-5 inline-flex rotate-[-1.2deg] rounded-[14px] border-[3px] border-[#2c2823] bg-[#f9f1df] px-6 py-3 shadow-[3px_4px_0_#9d8a6a]">
                  <span className="handwritten text-[1.8rem] text-[#201b18] sm:text-[2.2rem]">{hero.title}</span>
                </div>

                <p className="body-copy mt-5 max-w-2xl text-[1.35rem] text-[#342f29] sm:text-[1.55rem]">{hero.subtitle}</p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <NotebookButton href="#projects">{hero.ctaLabel}</NotebookButton>
                  <NotebookButton href="/resume/aamir-naved-resume.pdf" download variant="secondary">
                    Download Resume
                  </NotebookButton>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
                  <ArrowDoodle className="w-36 rotate-[4deg] sm:w-44" />
                  <div className="scribble-note">REST • microservices</div>
                  <div className="hidden w-36 shrink-0 sm:block md:w-44">
                    <ApiFlowDoodle className="h-auto w-full" />
                  </div>
                </div>

                <div className="doodle-divider">
                  <div className="dash" />
                  <span className="micro-caption">systems • cloud • genai</span>
                  <div className="dash" />
                </div>
              </div>
            </StaggerGroup>
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
                  <div className="w-10 rotate-[-8deg]">
                    <TerminalDoodle className="h-auto w-full" />
                  </div>
                  <div>
                    <ScribbleLoop className="h-12 w-36 rotate-[5deg]" />
                  </div>
                  <div className="w-10 rotate-[10deg]">
                    <GitBranchDoodle className="h-auto w-full" />
                  </div>
                </div>
              </div>
              <div className="relative flex justify-center md:justify-end">
                <div className="absolute -left-1 top-4 w-12 rotate-[-10deg] md:-left-2">
                  <MicrochipDoodle className="h-auto w-full" />
                </div>
                <div className="absolute bottom-4 left-0 w-24 rotate-[14deg]">
                  <ArrowDoodle className="w-full" />
                </div>
                <div className="rotate-[1.8deg]">
                  <div className="sketch-frame flex min-h-[320px] w-[280px] flex-col justify-between p-5 sm:w-[320px]">
                    <div className="flex items-center justify-between">
                      <div className="w-9 rotate-[-10deg]">
                        <CodeBracesDoodle className="h-auto w-full" />
                      </div>
                      <span className="micro-caption">backend notes</span>
                      <div className="w-14 rotate-[6deg]">
                        <HttpBadgeDoodle className="h-auto w-full" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="mini-note rotate-[-1deg]">Java + Spring</div>
                      <div className="mini-note rotate-[1deg]">Cloud + AI</div>
                      <div className="mini-note rotate-[-0.5deg]">Reliable systems</div>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <ServerStackDoodle className="w-16 rotate-[-6deg]" />
                      <NetworkNodesDoodle className="w-[4.25rem] rotate-[4deg]" />
                      <DatabaseDoodle className="w-12 rotate-[-4deg]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NotebookSheet>
        </Reveal>

        <Reveal delay={0.1}>
          <NotebookSheet id="projects" title="My Projects" className="mx-auto max-w-6xl">
            <hr className="section-rule" />
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div className="mini-note rotate-[-0.8deg]">☑ built from real resume work</div>
              <div className="flex items-center gap-4">
                <div className="w-[7.5rem] rotate-[-4deg]">
                  <ApiFlowDoodle className="h-auto w-full" />
                </div>
                <div className="hidden w-12 rotate-[10deg] sm:block">
                  <CodeBracesDoodle className="h-auto w-full" />
                </div>
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
            <div className="relative mb-6 flex flex-wrap items-center justify-between gap-4">
              <div className="mini-note rotate-[1deg]">✎ tools I reach for often</div>
              <div className="flex items-center gap-4">
                <ScribbleLoop className="h-12 w-32 rotate-[-6deg]" />
                <div className="hidden w-20 rotate-[7deg] md:block">
                  <ServerStackDoodle className="h-auto w-full" />
                </div>
              </div>
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
                  {["Microservices", "REST APIs", "GitHub Workflows", "Vertex AI"].map((item) => (
                    <span key={item} className="skill-badge">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="laptop-sketch mx-auto max-w-md rotate-[1.4deg]">
                  <div className="screen">
                    <div className="screen-line w-1/4" />
                    <div className="screen-line w-5/6" />
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      <div className="screen-card h-10" />
                      <div className="screen-card h-10 bg-[#cfe0b3]" />
                      <div className="screen-card h-10 bg-[#efd08c]" />
                    </div>
                    <div className="screen-line mt-3 w-2/5" />
                  </div>
                  <div className="keyboard" />
                </div>
                <div className="absolute left-1 top-2 w-9 opacity-90">
                  <CodeBracesDoodle className="h-auto w-full" />
                </div>
                <div className="absolute right-2 top-1 w-9 opacity-90">
                  <TerminalDoodle className="h-auto w-full" />
                </div>
                <div className="absolute -left-2 bottom-3 w-[3.75rem] rotate-[-8deg]">
                  <MicrochipDoodle className="h-auto w-full" />
                </div>
                <div className="absolute bottom-[-1.5rem] right-0 w-32 rotate-[5deg]">
                  <NetworkNodesDoodle className="h-auto w-full" />
                </div>
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
            <div className="mt-6 flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-end gap-4">
                <ScribbleLoop className="h-12 w-40 rotate-[4deg]" />
                <div className="hidden w-28 rotate-[-8deg] sm:block">
                  <LaptopDoodle className="h-auto w-full" />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-14 rotate-[-6deg]">
                  <DatabaseDoodle className="h-auto w-full" />
                </div>
                <div className="hidden w-12 rotate-[8deg] md:block">
                  <GitBranchDoodle className="h-auto w-full" />
                </div>
              </div>
            </div>
          </NotebookSheet>
        </Reveal>

        <Reveal delay={0.22}>
          <NotebookSheet id="testimonials" title="Client testimonials" className="mx-auto max-w-6xl">
            <hr className="section-rule" />
            <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
              <div className="mini-note rotate-[-0.6deg]">✎ freelance & Flutter • kind words</div>
              <div className="section-side-note rotate-[1deg]">
                <strong>Privacy</strong>
                Names and org details are kept light here—happy to share references when we talk about your project.
              </div>
            </div>
            <div className="testimonial-grid">
              {testimonials.map((t, index) => (
                <blockquote
                  key={`${t.name}-${index}`}
                  className="testimonial-card m-0"
                  style={{ transform: `rotate(${index % 2 === 0 ? "-0.4deg" : "0.45deg"})` }}
                >
                  <p className="testimonial-card__quote">{t.quote}</p>
                  <footer className="testimonial-card__meta">
                    <span className="testimonial-card__name">{t.name}</span>
                    <span className="testimonial-card__role">{t.role}</span>
                    <span className="testimonial-card__tag">{t.projectTag}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
            <div className="doodle-divider mt-8">
              <div className="dash" />
              <span className="micro-caption">build → ship → iterate</span>
              <div className="dash" />
            </div>
          </NotebookSheet>
        </Reveal>

        <Reveal delay={0.25}>
          <NotebookSheet id="contact" title="Contact Me" className="mx-auto max-w-6xl">
            <hr className="section-rule" />
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div className="mini-note rotate-[-0.8deg]">Let&apos;s build something useful.</div>
              <div className="flex items-center gap-3">
                <div className="w-12 rotate-[-6deg]">
                  <TerminalDoodle className="h-auto w-full" />
                </div>
                <div className="hidden w-[6.5rem] rotate-[5deg] sm:block">
                  <ApiFlowDoodle className="h-auto w-full" />
                </div>
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
                <div className="mt-6 w-full max-w-xs">
                  <NetworkNodesDoodle className="h-auto w-full opacity-95" />
                </div>
                <div className="contact-doodle-board">
                  <div className="contact-doodle-card">
                    <div className="w-11 rotate-[8deg]">
                      <GitBranchDoodle className="h-auto w-full" />
                    </div>
                  </div>
                  <div className="contact-doodle-card">
                    <div className="w-14 rotate-[-6deg]">
                      <MicrochipDoodle className="h-auto w-full" />
                    </div>
                  </div>
                  <div className="contact-doodle-card">
                    <div className="w-14 rotate-[5deg]">
                      <LaptopDoodle className="h-auto w-full" />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="mb-4 text-[1.3rem] leading-8 text-[#3d352f] sm:text-[1.65rem] sm:leading-9">
                  If you&apos;re building systems that need dependable backend foundations, thoughtful APIs, practical
                  GenAI features, or a Flutter freelance partner for a mobile product—let&apos;s talk.
                </p>
                <ContactForm />
                <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                  <ScribbleLoop className="h-12 w-36 rotate-[-4deg]" />
                  <div className="flex items-center gap-3">
                    <div className="w-24 rotate-[4deg]">
                      <ContainersDoodle className="h-auto w-full" />
                    </div>
                    <div className="hidden w-11 rotate-[-10deg] lg:block">
                      <HttpBadgeDoodle className="h-auto w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NotebookSheet>
        </Reveal>
      </div>
    </div>
  );
}
