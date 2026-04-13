export const hero = {
  name: "Aamir Naved",
  title: "Backend Software Engineer",
  subtitle:
    "Distributed systems, cloud-native backends, and LLM-powered workflows—from high-throughput microservices to commercial telehealth and full-stack products.",
  ctaLabel: "View My Projects",
};

export const about = {
  eyebrow: "About Me",
  summary:
    "Backend engineer in Hyderabad. I build and evolve microservices and cloud backends with Java, Spring Boot, Kafka, and Python—plus GenAI integrations with Vertex AI (Gemini)—and ship full-stack product slices with React, Flutter, and PostgreSQL when the problem calls for it.",
  details: [
    "B.Tech in Computer Science & Engineering from Integral University (First Division with Honours, GPA 9.24/10).",
    "At Egen Data I work on Java/Spring Boot/Kafka microservices, system design for sync vs async trade-offs, Django services with Vertex AI, and GCP deployments (e.g. Cloud Run, BigQuery, Cloud Storage) with reliability patterns for external failures.",
    "Earlier at Nucleus Software: PAN validation and reporting at scale, and multi-threaded pipelines across five databases producing millions of scheduled records.",
    "Certifications: Google Associate Cloud Engineer; Programming in Java (IIT Kharagpur, 86%); The Joy of Computing using Python (IIT Madras, 87%).",
  ],
};

/**
 * Client quotes for the testimonials rail. To add one: push a new object with the same
 * shape—`quote`, `name`, `role`, and `projectTag` (short topic line). Cards scroll sideways,
 * so the section stays compact no matter how many you add.
 */
export const testimonials = [
  {
    quote:
      "Aamir built our telemedicine app end-to-end in Flutter: patient booking, doctor dashboards, and smooth video consult flows. Communication was clear, milestones were reliable, and the app felt polished—not rushed. Our doctors and patients actually enjoy using it.",
    name: "Priya S.",
    role: "Product lead",
    projectTag: "Telemedicine • Flutter",
  },
  {
    quote:
      "We hired Aamir for a mobile product with a tight timeline. He owned the Flutter UI, state, and integrations, asked the right questions early, and shipped builds we could show investors with confidence. I'd work with him again on the next release.",
    name: "James R.",
    role: "Founder",
    projectTag: "Mobile app • Flutter",
  },
  {
    quote:
      "Professional, fast, and detail-oriented. Aamir translated vague requirements into a concrete app structure, handled API wiring cleanly, and fixed edge cases we hadn't thought of. The handoff docs made it easy for our team to take over.",
    name: "Ananya K.",
    role: "Engineering manager",
    projectTag: "Freelance • APIs + mobile",
  },
  {
    quote:
      "Great experience from scoping to release. Aamir kept us in the loop, proposed sensible defaults when we were stuck, and delivered a stable build on both Android and iOS. Exactly what we needed from a freelance partner.",
    name: "Marcus T.",
    role: "Operations director",
    projectTag: "Cross-platform app",
  },
] as const;

export const projects = [
  {
    name: "Telemedicine platform (commercial)",
    description:
      "End-to-end monetizable telehealth: pay-per-visit and subscriptions, from registration through consultation to PDF delivery. Stripe Checkout with webhooks, idempotent backend state, and state machines for payments, appointments, and consultations. Payment-gated booking, doctor notes, PDF generation, cloud storage, and email. Modular monolith with clear domains (Auth, Patient, Payment, Booking, Consultation). Delivered for international clients (€15,000+ in project revenue).",
    tech: ["Flutter", "React", "Java", "Spring Boot", "PostgreSQL", "Stripe", "Terraform", "Docker", "AWS"],
    tilt: -1.2,
    image: "/projects/telemedicine.png",
    imageMatte: true,
    imageAlt:
      "Hand-drawn telemedicine sketch on lined notebook paper: TM logo, phones, stethoscope, and TELEMEDICINE label.",
  },
  {
    name: "Goal accountability webapp",
    description:
      "Full-stack goal tracking with Spring Boot and React, JWT authentication, and an accountability model with mutual consent. Real-time updates via WebSockets. PostgreSQL schema for relationships and activity. Deployed on Railway and Vercel.",
    tech: ["Java", "Spring Boot", "React", "PostgreSQL", "JWT", "Railway", "Vercel"],
    tilt: 1.05,
    image: "/projects/goals.png",
    imageMatte: true,
    imageAlt:
      "Hand-drawn goals sketch on lined notebook paper: goals, progress, and accountability.",
  },
] as const;

/** Primary checklist in the Skills section */
export const skills = [
  "Java",
  "Python",
  "Go",
  "Spring Boot",
  "Django & REST APIs",
  "Microservices",
  "PostgreSQL",
  "Kafka",
  "Docker",
  "Terraform",
  "GCP & AWS",
  "Vertex AI (Gemini)",
] as const;

/** Extra tags shown in the skills “cloud” strip */
export const skillBadges = [
  "Redis",
  "MySQL",
  "ArgoCD",
  "GraphQL",
  "Flutter",
  "Git",
  "Stripe",
  "WebSockets",
] as const;

export const experience = [
  {
    company: "Egen Data Private Limited",
    period: "Jun 2024 – Present",
    bullets: [
      "Built and maintained microservices with Java, Spring Boot, and Kafka for high-throughput workflows across distributed systems.",
      "Contributed to re-architecture by evaluating synchronous vs asynchronous communication—improving scalability and fault isolation.",
      "Developed Python and Django backends integrating Vertex AI (Gemini Pro) for LLM-powered workflows.",
      "Designed and deployed cloud-native services on GCP (Cloud Run, BigQuery, Cloud Storage) for scalable, cost-efficient pipelines.",
      "Improved reliability with retry-safe workflows and resilient handling of external failures (LLMs, third-party APIs).",
    ],
  },
  {
    company: "Nucleus Software Exports Limited",
    period: "Jan 2023 – Jun 2024",
    bullets: [
      "Built a PAN validation and reporting system with Java and Spring Boot, improving data accuracy by about 20% across millions of records.",
      "Designed a multi-threaded data processing pipeline pulling from five databases and generating 2.5M+ records, optimizing runtime with concurrency and scheduling.",
    ],
  },
] as const;

export const contact = {
  email: "aamirnaved0020@gmail.com",
  linkedin: "linkedin.com/in/aamir-naved-7452921a6",
  github: "github.com/aamir-naved",
};
