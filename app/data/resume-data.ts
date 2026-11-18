import { GitHubIcon, LinkedInIcon, XIcon } from "../components/icons";

/* Locale-neutral data: names, links, stacks, numbers.
   All translatable text lives in app/i18n/dictionaries/{fr,en}.ts. */

export const RESUME_DATA = {
  name: "Youssef Sahih",
  avatarUrl: "/ysahih.jpg",

  /* TODO(Youssef): keep these two PDFs in public/ and commit them.
     /cv.pdf is the French CV, /resume.pdf the English one. The download
     buttons in the hero link straight to these paths. */
  resumeFiles: {
    fr: { href: "/cv.pdf", filename: "Youssef-Sahih-CV-FR.pdf" },
    en: { href: "/resume.pdf", filename: "Youssef-Sahih-Resume-EN.pdf" },
  },

  contact: {
    email: "youssefsahih9@gmail.com",
    tel: "+33 7 52 93 53 14",
    social: [
      { name: "GitHub", url: "https://github.com/ysahih", icon: GitHubIcon },
      { name: "LinkedIn", url: "https://linkedin.com/in/youssef-sahih", icon: LinkedInIcon },
      { name: "X", url: "https://x.com/uc3f02", icon: XIcon },
    ],
  },

  experience: [
    {
      id: "imense",
      logo: "/image.png",
      skills: ["React", "TypeScript", "Redux Toolkit", "RTK Query", "Cypress", "Playwright", "Node.js", "Agile", "Git", "CI/CD", "REST APIs"],
    },
    {
      id: "freelance",
      logo: "",
      skills: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Docker"],
    },
  ],

  projects: [
    {
      id: "billing",
      techStack: ["TypeScript", "Next.js 15", "PostgreSQL", "Prisma", "Playwright", "Vitest", "GitHub Actions", "Stripe"],
      repo: "https://github.com/ysahih/billing-service",
      liveUrl: "https://billing-service-tau.vercel.app",
      category: "personal",
      featured: true,
    },
    {
      id: "transcendence",
      techStack: ["Next.js", "NestJS", "TypeScript", "Socket.io", "PostgreSQL", "Prisma", "Docker", "OAuth", "JWT"],
      repo: "https://github.com/ysahih/PingPong",
      category: "web",
      featured: true,
    },
    {
      id: "sentra",
      techStack: ["React", "TypeScript", "Electron", "Node.js", "whisper.cpp", "AssemblyAI", "Claude API", "GitHub Actions"],
      repo: "https://github.com/ysahih/sentra-challenge",
      category: "personal",
      featured: true,
    },
    {
      id: "irc",
      techStack: ["C++98", "BSD Sockets", "Non-blocking I/O", "Network Protocols"],
      repo: "https://github.com/ysahih/IRC",
      category: "systems",
      featured: false,
    },
    {
      id: "sash",
      techStack: ["C", "Processes", "Pipes", "Signals", "Parsing"],
      repo: "https://github.com/ysahih/Sash",
      category: "systems",
      featured: false,
    },
    {
      id: "cve",
      techStack: ["Python", "NVD API", "pandas", "Requests"],
      repo: "https://github.com/ysahih/CVE-Vulnerability-Analyzer",
      category: "security",
      featured: false,
    },
    {
      id: "inception",
      techStack: ["Docker", "Nginx", "MariaDB", "WordPress", "DevOps"],
      repo: "https://github.com/ysahih/inception",
      category: "devops",
      featured: false,
    },
    {
      id: "cub3d",
      techStack: ["C", "Graphics", "Raycasting", "miniLibX"],
      repo: "https://github.com/ysahih/cub3D",
      category: "graphics",
      featured: false,
    },
  ],
} as const;

export type ProjectId = (typeof RESUME_DATA.projects)[number]["id"];
export type ProjectCategory = (typeof RESUME_DATA.projects)[number]["category"];
export type ExperienceId = (typeof RESUME_DATA.experience)[number]["id"];
