export const hero = {
  name: "Aamir Naved",
  title: "Software Engineer",
  subtitle: "Building Microservices, Goal-Driven Products & GenAI Solutions",
  ctaLabel: "View My Projects",
};

export const about = {
  eyebrow: "About Me",
  summary:
    "Software engineer based in Hyderabad with a background in Computer Science and Engineering from Integral University. I build backend-heavy products with Java, Spring Boot, Python, GCP, and modern microservice patterns, with a growing focus on GenAI and cloud-native systems.",
  details: [
    "Working on microservices-based systems with Spring Boot, Spring Cloud, Kafka, and GitHub Workflows.",
    "Implementing cloud and AI features using GCP, Vertex AI, Docker, and Gemini-powered search experiences.",
    "Building full-stack product features when needed with React, PostgreSQL, and secure authentication flows.",
  ],
};

export const projects = [
  {
    name: "Goal Accountability Webapp",
    description:
      "A privacy-focused goal accountability platform with Spring Boot and React, built with JWT authentication, CORS protection, collaborative monitoring, and PostgreSQL-backed goal storage.",
    tech: ["Java", "Spring Boot", "React", "PostgreSQL"],
    accent: "rotate-[-1.4deg]",
  },
  {
    name: "Daily Task Update Solution",
    description:
      "A Slack-inspired task update system featuring React UI flows, OAuth-based security, Redis-backed session management, Spring Boot APIs, and fast dashboard reporting.",
    tech: ["React", "Spring Boot", "Redis", "Java"],
    accent: "rotate-[1.1deg]",
  },
  {
    name: "Gemini Retail Search",
    description:
      "An AI-assisted retail search experience implemented with Gemini Pro LLM and Vertex AI, focused on advanced language processing and product discovery in a cloud-native environment.",
    tech: ["GCP", "Vertex AI", "Gemini", "Docker"],
    accent: "rotate-[-0.9deg]",
  },
] as const;

export const skills = [
  "Java",
  "Python",
  "Spring Boot",
  "Spring Cloud",
  "GCP",
  "PostgreSQL",
  "Kafka",
  "Docker",
];

export const experience = [
  {
    company: "SpringML India Development Center",
    period: "Jun 2024–Present",
    bullets: [
      "Contributed to a microservices-based project using Java, Spring Boot, Spring Cloud, Kafka, and GitHub Workflows.",
      "Participated in system design discussions for trading and prediction workflows, with a focus on scalable asynchronous processing and reliable data exchange.",
      "Built backend services with Python, Django 5, Google Cloud, Vertex AI, and Docker, and integrated Google Gemini Pro LLM for advanced retail search use cases.",
    ],
  },
  {
    company: "Nucleus Software Exports Limited",
    period: "Jan 2023–Jun 2024",
    bullets: [
      "Built a PAN validation and report generation system with Java 8 and Spring Boot that improved validation efficiency and maintained SONAR-compliant code quality.",
      "Developed a file writing utility that processed data from five databases using Multi-Threading and Spring Scheduler, enabling over 2.5 million records to be written into distinct files on schedule.",
    ],
  },
];

export const contact = {
  email: "aamirnaved0020@gmail.com",
  linkedin: "linkedin.com/in/aamir-naved-7452921a6",
  github: "github.com/aamir-naved",
};
