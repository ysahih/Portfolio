import { GitHubIcon, LinkedInIcon, XIcon } from "../components/icons";

export const RESUME_DATA = {
  name: "Youssef Sahih",
  title: "Frontend Engineer — React, TypeScript, Testing",
  location: "Morocco — relocating to Paris, 27 October 2026",

  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Fluent, working language (C1)" },
    { name: "French", level: "A2, in progress" },
  ],

  availability:
    "Open to a 24-month apprenticeship from the January 2027 intake — frontend, fullstack or QA automation.",

  about:
    "Frontend engineer with three years in production React and TypeScript, who owns the end-to-end test suite as well as the features. 138 merged pull requests over 26 months in one production codebase, 109 Cypress specs and a 133-test Playwright suite. Backend and systems work in Node, NestJS and C++ through personal and 42 Network projects.",

  summary:
    "Frontend engineer with three years in production React and TypeScript, who owns the end-to-end test suite as well as the features. 138 merged pull requests over 26 months in one production codebase, 109 Cypress specs and a 133-test Playwright suite. Backend and systems work in Node, NestJS and C++ through personal and 42 Network projects.",

  avatarUrl: "/ysahih.jpg",

  contact: {
    email: "youssefsahih9@gmail.com",
    tel: "+212708978739",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ysahih",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/youssef-sahih",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/uc3f02",
        icon: XIcon,
      },
    ],
  },

  education: [
    {
      school: "42 Paris",
      degree: "IT Architecture Expert, RNCP title level 7 (EQF 7)",
      start: "Oct 2026",
      end: "present",
      location: "Paris, France",
      description: "Preparing RNCP 39774, \"Expert en architecture informatique\". Software architecture, systems, networking, data architecture. Level 14 and Work Experience validated; eligible for a 24-month apprenticeship contract.",
    },
    {
      school: "1337 Coding School — 42 Network",
      degree: "Software Engineering Program",
      start: "2022",
      end: "2026",
      location: "Khouribga, Morocco",
      description: "Systems and network programming in C/C++, algorithms, web architecture, relational databases. Peer-learning, code review and project-based assessment, no lectures.",
    },
    {
      school: "Chouaïb Doukkali University",
      degree: "Associate's Degree in English Studies",
      start: "2022",
      end: "2023",
      location: "El Jadida, Morocco",
      description: "",
    },
  ],

  skills: [
    "React.js", "Next.js", "TypeScript", "JavaScript", "HTML5/CSS", "SCSS", "Tailwind CSS", "Design Tokens", "Redux Toolkit", "RTK Query", "Formik", "Yup", "react-i18next",
    "React Router v6", "TanStack Table", "Recharts", "Framer Motion", "react-dnd", "dayjs",
    "Node.js", "NestJS", "Express.js", "REST API Design", "WebSockets", "Socket.io", "Python", "C", "C++98",
    "JWT", "OAuth 2.0", "2FA", "Refresh Token Rotation", "Session Management", "Rate Limiting", "Middleware",
    "PostgreSQL", "MySQL", "MongoDB", "SQL", "Prisma ORM", "Relational Modeling",
    "Git", "CI/CD", "Docker", "Docker Compose", "Nginx", "GitHub Actions", "Vercel", "Railway", "VPS Deployment",
    "Claude Code", "Claude API", "whisper.cpp", "AssemblyAI", "LLM Integration",
    "Cypress", "Playwright", "Jest", "Vitest", "React Testing Library", "Network Mocking", "Test Fixtures", "Postman", "Vite", "Electron", "Jira", "Agile/Scrum",
  ],

  skillCategories: [
    { label: "Frontend", skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5/CSS", "SCSS", "Tailwind CSS", "Design Tokens", "Redux Toolkit", "RTK Query", "Formik", "Yup", "react-i18next"] },
    { label: "Libraries", skills: ["React Router v6", "TanStack Table", "Recharts", "Framer Motion", "react-dnd", "dayjs"] },
    { label: "Backend & Systems", skills: ["Node.js", "NestJS", "Express.js", "REST API Design", "WebSockets", "Socket.io", "Python", "C", "C++98"] },
    { label: "Auth & Security", skills: ["JWT", "OAuth 2.0", "2FA", "Refresh Token Rotation", "Session Management", "Rate Limiting", "Middleware"] },
    { label: "Database", skills: ["PostgreSQL", "MySQL", "MongoDB", "SQL", "Prisma ORM", "Relational Modeling"] },
    { label: "DevOps & CI/CD", skills: ["Git", "CI/CD", "Docker", "Docker Compose", "Nginx", "GitHub Actions", "Vercel", "Railway", "VPS Deployment"] },
    { label: "AI & LLM", skills: ["Claude Code", "Claude API", "whisper.cpp", "AssemblyAI", "LLM Integration"] },
    { label: "Testing & Tools", skills: ["Cypress", "Playwright", "Jest", "Vitest", "React Testing Library", "Network Mocking", "Test Fixtures", "Postman", "Vite", "Electron", "Jira", "Agile/Scrum"] },
  ],

  experience: [
    {
      company: "Im'enSe",
      position: "Frontend Developer",
      logo: "/image.png",
      location: "Tangier, Morocco",
      startDate: "Aug 2024",
      endDate: "Present",
      description: "Building QHSE-sector web applications with React 18 and TypeScript.",
      scale: "138 merged pull requests over 26 months, across roughly 1,500 files.",
      skills: ["React", "TypeScript", "Redux Toolkit", "RTK Query", "Cypress", "Playwright", "Node.js", "Jira", "Agile", "Git", "CI/CD", "REST APIs"],
      achievements: [
        "Own the end-to-end test suite. 109 Cypress specs covering roughly a thousand assertions, running against both mocked network and a live dev backend, plus a Playwright suite of 133 tests using route mocking and role-based selectors",
        "Hardened the Cypress CI workflow with a concurrency group so parallel runs stopped corrupting the shared test backend",
        "Built the RTK Query data layer: 13 API modules with tag-based cache invalidation across 17 files",
        "Introduced CSS-variable design tokens into the Tailwind config, now the colour system across 450+ component files",
        "Built a feature-level component set from Figma specs on top of the internal design system — form fields, status badges, KPI and data cards — shown in an in-app playground route. The status badge was promoted into the shared core library and is imported by six screens",
        "Developed and maintained 30+ React 18 modules using TypeScript, Redux Toolkit, and RTK Query in production",
        "Route-level code splitting across the app's route files, a lazy-loading image component with blur placeholders, and a cache-key fix that stopped filtered result sets collapsing into a single entry",
        "Resolved non-deterministic hook ordering bugs and optimistic UI timing issues through precise cache lifecycle management",
        "~1,500 translation keys across 7 locales; 94 custom hooks; 1,538 typed interfaces across 465 files; collaborated with backend on REST API contracts and payload design",
      ],
    },
    {
      company: "Independent",
      position: "Freelance Web Developer",
      logo: "",
      location: "Remote",
      startDate: "Dec 2022",
      endDate: "Aug 2024",
      description: "Web applications for direct clients, remote and solo, alongside the 1337 cursus. Owned scoping through deployment. Client-owned code, nothing public.",
      skills: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Docker"],
      achievements: [],
    },
  ],

  projects: [
    {
      title: "billing-service",
      techStack: ["TypeScript", "Next.js 15", "PostgreSQL", "Prisma", "Playwright", "Vitest", "GitHub Actions", "Stripe"],
      description:
        "Webhook-driven billing where Stripe is the source of truth and the database is a read model. Idempotency through a unique constraint on the event id, written inside the same transaction as the state change. The test suite fires 8 copies of one webhook concurrently and asserts exactly one is processed. A Playwright run covers the pricing page through Stripe Checkout to an active account.",
      link: { label: "GitHub", href: "https://github.com/ysahih/billing-service" },
      liveLink: { label: "Live demo", href: "https://billing-service-tau.vercel.app" },
      impact: "Stripe subscription billing, deployed",
      category: "Personal Project",
      featured: true,
    },
    {
      title: "ft_transcendence — Multiplayer Platform",
      techStack: ["Next.js", "NestJS", "TypeScript", "Socket.io", "PostgreSQL", "Prisma", "Docker", "OAuth", "JWT"],
      description:
        "42 Network project. Architected full-stack end-to-end: Next.js frontend, NestJS REST API, PostgreSQL/Prisma backend. Implemented JWT auth with OAuth 2.0, 2FA, refresh token rotation, rate limiting, and guard middleware. Engineered real-time multiplayer with Socket.io, matchmaking, and full chat system with public/private channels. Containerized with Docker Compose.",
      link: { label: "GitHub", href: "https://github.com/ysahih/PingPong" },
      impact: "Real-time multiplayer gaming platform",
      category: "Web Development",
      featured: true,
    },
    {
      title: "Sentra — Meeting Intelligence",
      techStack: ["React", "TypeScript", "Electron", "Node.js", "whisper.cpp", "AssemblyAI", "Claude API", "GitHub Actions"],
      description:
        "Dual-pipeline Electron desktop app: offline local Whisper inference + cloud AssemblyAI diarization. Node.js backend for audio chunking, model orchestration, and streaming JSON updates to React UI. Claude API for transcript-grounded research chat; packaged via Electron Builder with GitHub Actions CI/CD.",
      link: { label: "GitHub", href: "https://github.com/ysahih/sentra-challenge" },
      impact: "AI-powered meeting intelligence desktop app",
      category: "Personal Project",
      featured: true,
    },
    {
      title: "IRC Server",
      techStack: ["C++98", "BSD Sockets", "Non-blocking I/O", "Network Protocols"],
      description:
        "IRC server written to protocol in C++98 with no networking library: raw sockets, non-blocking I/O, concurrent multi-client handling, per-channel state, operator commands, and partial-message buffering across reads.",
      link: { label: "GitHub", href: "https://github.com/ysahih/IRC" },
      impact: "Multi-client IRC server implementation",
      category: "System Programming",
      featured: false,
    },
    {
      title: "Sash — Unix Shell",
      techStack: ["C", "Processes", "Pipes", "Signals", "Parsing"],
      description:
        "A Bash-like Unix shell written in C. Implements command execution, built-ins (cd, echo, pwd, export, exit), input/output redirection (<, >, >>, <<), pipelines, environment variable expansion, and Unix signal handling (Ctrl+C/Ctrl+\\/Ctrl+D).",
      link: { label: "GitHub", href: "https://github.com/ysahih/Sash" },
      impact: "Bash-like shell with pipes, redirection & signals",
      category: "System Programming",
      featured: false,
    },
    {
      title: "CVE Vulnerability Analyzer",
      techStack: ["Python", "NVD API", "pandas", "Requests"],
      description:
        "A Python tool that fetches Common Vulnerabilities and Exposures (CVE) data from the National Vulnerability Database (NVD), filters and processes it with pandas, and surfaces vulnerability descriptions for analysis.",
      link: { label: "GitHub", href: "https://github.com/ysahih/CVE-Vulnerability-Analyzer" },
      impact: "Security data tooling over the NVD CVE database",
      category: "Security",
      featured: false,
    },
    {
      title: "Inception",
      techStack: ["Docker", "Nginx", "MariaDB", "WordPress", "DevOps"],
      description:
        "Docker-based multi-container infrastructure with Nginx, WordPress, and MariaDB. Custom Dockerfiles only — no pre-built images. TLS via self-signed certificates.",
      link: { label: "GitHub", href: "https://github.com/ysahih/inception" },
      impact: "Containerized web application infrastructure",
      category: "DevOps",
      featured: false,
    },
    {
      title: "Cub3D",
      techStack: ["C", "Graphics", "Raycasting", "miniLibX"],
      description:
        "First-person 3D raycaster in C using miniLibX. Implements DDA algorithm for wall rendering, texture mapping, and player collision detection.",
      link: { label: "GitHub", href: "https://github.com/ysahih/cub3D" },
      impact: "3D graphics engine with raycasting",
      category: "Graphics Programming",
      featured: false,
    },
  ],
} as const;
