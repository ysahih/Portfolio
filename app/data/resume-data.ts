import { GitHubIcon, LinkedInIcon, XIcon } from "../components/icons";

export const RESUME_DATA = {
  name: "Youssef Sahih",
  title: "Frontend & Fullstack Engineer",
  location: "Morocco",

  about:
    "Fullstack Engineer with 3+ years building production systems across the entire stack — React/Next.js frontends, NestJS/Node.js backends, PostgreSQL databases, and containerized cloud deployments. Experienced in real-time architecture, REST API design, JWT/OAuth authentication, CI/CD pipelines, and AI-powered integrations.",

  summary:
    "Fullstack Engineer with 3+ years building production systems across the entire stack — React/Next.js frontends, NestJS/Node.js backends, PostgreSQL databases, and containerized cloud deployments. Experienced in real-time architecture, REST API design, JWT/OAuth authentication, CI/CD pipelines, and AI-powered integrations.",

  avatarUrl: "./ysahih.png",

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
      school: "1337 Coding School — 42 Network",
      degree: "Advanced Software Engineering Program (Équivalent Bac +5)",
      start: "2022",
      end: "present",
      location: "Khouribga, Morocco",
      description: "Algorithms & Data Structures, System Programming, Network Programming, Web Architecture, Relational Databases",
    },
    {
      school: "Chouaïb Doukkali University",
      degree: "Associate's Degree in English Studies",
      start: "2020",
      end: "2022",
      location: "El Jadida, Morocco",
      description: "",
    },
  ],

  skills: [
    "React.js", "Next.js", "TypeScript", "JavaScript", "HTML5/CSS", "Tailwind CSS",
    "Node.js", "NestJS", "Express.js", "Python", "REST API Design", "WebSockets", "Socket.io",
    "JWT", "OAuth 2.0", "2FA", "Refresh Token Rotation", "Session Management", "Rate Limiting", "Middleware",
    "PostgreSQL", "MySQL", "Prisma ORM", "Relational Modeling",
    "Docker", "Docker Compose", "GitHub Actions", "Vercel", "Railway", "VPS Deployment",
    "Whisper AI", "AssemblyAI", "Claude API", "LLM Integration",
    "Cypress", "Jest", "React Testing Library", "Postman", "Vite", "Electron", "Git", "Jira", "Agile/Scrum",
  ],

  skillCategories: [
    { label: "Frontend", skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5/CSS", "Tailwind CSS"] },
    { label: "Backend", skills: ["Node.js", "NestJS", "Express.js", "Python", "REST API Design", "WebSockets", "Socket.io"] },
    { label: "Auth & Security", skills: ["JWT", "OAuth 2.0", "2FA", "Refresh Token Rotation", "Session Management", "Rate Limiting", "Middleware"] },
    { label: "Database", skills: ["PostgreSQL", "MySQL", "Prisma ORM", "Relational Modeling"] },
    { label: "DevOps & CI/CD", skills: ["Docker", "Docker Compose", "GitHub Actions", "Vercel", "Railway", "VPS Deployment"] },
    { label: "AI & LLM", skills: ["Whisper AI", "AssemblyAI", "Claude API", "LLM Integration"] },
    { label: "Testing & Tools", skills: ["Cypress", "Jest", "React Testing Library", "Postman", "Vite", "Electron", "Git", "Jira", "Agile/Scrum"] },
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
        "~1,500 translation keys across 7 locales; collaborated with backend on REST API contracts and payload design",
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
      skills: ["React", "Next.js", "Node.js", "PostgreSQL"],
      achievements: [],
    },
  ],

  projects: [
    {
      title: "Pong — Multiplayer Platform",
      techStack: ["Next.js", "NestJS", "TypeScript", "Socket.io", "PostgreSQL", "Prisma", "Docker", "OAuth", "JWT"],
      description:
        "Architected full-stack end-to-end: Next.js frontend, NestJS REST API, PostgreSQL/Prisma backend. Implemented JWT auth with OAuth 2.0, 2FA, refresh token rotation, rate limiting, and guard middleware. Engineered real-time multiplayer with Socket.io, matchmaking, and full chat system with public/private channels. Containerized with Docker Compose.",
      link: { label: "GitHub", href: "https://github.com/ysahih/PingPong" },
      impact: "Real-time multiplayer gaming platform",
      category: "Personal Project",
      featured: true,
    },
    {
      title: "Sentra — Meeting Intelligence",
      techStack: ["React", "TypeScript", "Electron", "Node.js", "Whisper AI", "AssemblyAI", "Claude API", "GitHub Actions"],
      description:
        "Dual-pipeline Electron desktop app: offline local Whisper inference + cloud AssemblyAI diarization. Node.js backend for audio chunking, model orchestration, and streaming JSON updates to React UI. Claude API for transcript-grounded research chat; packaged via Electron Builder with GitHub Actions CI/CD.",
      link: { label: "GitHub", href: "https://github.com/ysahih" },
      impact: "AI-powered meeting intelligence desktop app",
      category: "Personal Project",
      featured: true,
    },
    {
      title: "IRC Server",
      techStack: ["C++", "Socket Programming", "Network Protocols"],
      description:
        "Internet Relay Chat server implementing the IRC protocol to C++98 standard with multi-client support, channel management, and operator commands.",
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
