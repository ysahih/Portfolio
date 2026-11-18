/* English dictionary. This file is the source of truth for the Dictionary
   type: fr.ts must provide exactly the same shape.
   In paragraph strings, **text** is rendered as an accent-coloured span. */

const en = {
  meta: {
    title: 'Youssef Sahih — React/TypeScript Developer · Apprenticeship January 2027 · Paris',
    description:
      'React/TypeScript developer at 42 Paris, seeking a 24-month apprenticeship (alternance) from January 2027 in Île-de-France: frontend, fullstack or QA automation.',
    ogAlt: 'Youssef Sahih — React/TypeScript developer, apprenticeship from January 2027, Paris',
    ogTagline: '24-month apprenticeship · January 2027 intake · Paris',
    ogRole: 'React / TypeScript Developer',
    ogLocale: 'en_US',
    jobTitle: 'Software Engineer',
  },

  nav: {
    items: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      education: 'Education',
      contact: 'Contact',
    },
    homeAria: 'Youssef Sahih — back to top',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    toLight: 'Switch to light mode',
    toDark: 'Switch to dark mode',
    langSwitch: { label: 'FR', aria: 'Lire en français', href: '/fr', hrefLang: 'fr' },
  },

  hero: {
    title: 'Software Engineer — React, TypeScript, Testing',
    availability: 'Seeking a 24-month apprenticeship (alternance) · January 2027 intake · Paris / Île-de-France',
    headline:
      'Software engineer with three years in production React and TypeScript, who has owned the end-to-end test suite as well as the features.',
    stats: [
      { value: '138', label: 'Merged pull requests' },
      { value: '109', label: 'Cypress specs' },
      { value: '133', label: 'Playwright tests' },
    ],
    viewWork: 'View my work',
    resume: {
      primary: 'Download résumé',
      secondary: 'CV en français',
      secondaryLang: 'fr',
    },
  },

  about: {
    title: 'About Me',
    paragraphs: [
      "Software engineer with three years in production React and TypeScript, who has owned the end-to-end test suite as well as the features. 138 merged pull requests over 26 months in one production codebase, 109 Cypress specs and a 133-test Playwright suite. Backend and systems work in Node, NestJS and C++ through personal and 42 Network projects. Frontend Developer at **Im'enSe** from August 2024 to October 2026, building QHSE-sector web applications with React 18 and TypeScript.",
      'Trained at **1337** — part of the 42 Network — from 2022 to October 2026, a curriculum built on systems programming, algorithms, network architecture, and peer-to-peer collaboration with no lectures and no instructors. Since November 2026 at **42 Paris**, preparing RNCP 39774 “Expert en architecture informatique” (level 7). Based in Paris 17e and looking for a 24-month apprenticeship (alternance) starting with the January 2027 intake, on frontend, fullstack or QA automation work.',
    ],
    stats: [
      { value: '3+', label: 'Years experience' },
      { value: '138', label: 'Merged pull requests' },
      { value: '7', label: 'Locales in production i18n' },
    ],
  },

  skills: {
    title: 'Skills',
    categories: [
      { label: 'Frontend', skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5/CSS', 'SCSS', 'Tailwind CSS', 'Design Tokens', 'Redux Toolkit', 'RTK Query', 'Formik', 'Yup', 'react-i18next'] },
      { label: 'Libraries', skills: ['React Router v6', 'TanStack Table', 'Recharts', 'Framer Motion', 'react-dnd', 'dayjs'] },
      { label: 'Backend & Systems', skills: ['Node.js', 'NestJS', 'Express.js', 'REST API Design', 'WebSockets', 'Socket.io', 'Python', 'C', 'C++98'] },
      { label: 'Auth & Security', skills: ['JWT', 'OAuth 2.0', '2FA', 'Refresh Token Rotation', 'Session Management', 'Rate Limiting', 'Middleware'] },
      { label: 'Database', skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL', 'Prisma ORM', 'Relational Modeling'] },
      { label: 'DevOps & CI/CD', skills: ['Git', 'CI/CD', 'Docker', 'Docker Compose', 'Nginx', 'GitHub Actions', 'Vercel', 'Railway', 'VPS Deployment'] },
      { label: 'AI & LLM', skills: ['Claude Code', 'Claude API', 'whisper.cpp', 'AssemblyAI', 'LLM Integration'] },
      { label: 'Testing & Tools', skills: ['Cypress', 'Playwright', 'Jest', 'Vitest', 'React Testing Library', 'Network Mocking', 'Test Fixtures', 'Postman', 'Vite', 'Electron', 'Jira', 'Agile/Scrum'] },
    ],
  },

  experience: {
    title: 'Work Experience',
    subtitle: 'My professional journey and key accomplishments.',
    achievementsLabel: 'Key achievements:',
    logoAlt: 'logo',
    items: {
      imense: {
        position: 'Frontend Developer',
        company: "Im'enSe",
        location: 'Tangier, Morocco',
        period: 'Aug 2024 – Oct 2026',
        description: 'Built QHSE-sector web applications with React 18 and TypeScript.',
        scale: '138 merged pull requests over 26 months, across roughly 1,500 files.',
        achievements: [
          'Owned the end-to-end test suite. 109 Cypress specs covering roughly a thousand assertions, running against both mocked network and a live dev backend, plus a Playwright suite of 133 tests using route mocking and role-based selectors',
          'Hardened the Cypress CI workflow with a concurrency group so parallel runs stopped corrupting the shared test backend',
          'Built the RTK Query data layer: 13 API modules with tag-based cache invalidation across 17 files',
          'Introduced CSS-variable design tokens into the Tailwind config, which became the colour system across 450+ component files',
          'Built a feature-level component set from Figma specs on top of the internal design system — form fields, status badges, KPI and data cards — shown in an in-app playground route. The status badge was promoted into the shared core library and imported by six screens',
          'Developed and maintained 30+ React 18 modules using TypeScript, Redux Toolkit, and RTK Query in production',
          "Added route-level code splitting across the app's route files, a lazy-loading image component with blur placeholders, and a cache-key fix that stopped filtered result sets collapsing into a single entry",
          'Resolved non-deterministic hook ordering bugs and optimistic UI timing issues through precise cache lifecycle management',
          'Worked across ~1,500 translation keys in 7 locales, 94 custom hooks and 1,538 typed interfaces across 465 files; collaborated with backend on REST API contracts and payload design',
        ],
      },
      freelance: {
        position: 'Freelance Web Developer',
        company: 'Independent',
        location: 'Remote',
        period: 'Dec 2022 – Aug 2024',
        description:
          'Web applications for direct clients, remote and solo, alongside the 1337 curriculum. Owned scoping through deployment. Client-owned code, nothing public.',
        scale: '',
        achievements: [] as string[],
      },
    },
  },

  projects: {
    title: 'Projects',
    featured: 'Featured',
    filters: {
      all: 'All',
      personal: 'Personal Project',
      web: 'Web Development',
      systems: 'System Programming',
      devops: 'DevOps',
      graphics: 'Graphics Programming',
      security: 'Security',
    },
    liveDemo: 'Demo',
    challengeLabel: 'The hard part:',
    repo: 'GitHub',
    filterAria: 'Filter projects by category',
    items: {
      billing: {
        title: 'billing-service',
        impact: 'Stripe subscription billing, deployed',
        description:
          'Webhook-driven billing where Stripe is the source of truth and the database is a read model. Idempotency through a unique constraint on the event id, written inside the same transaction as the state change. The test suite fires 8 copies of one webhook concurrently and asserts exactly one is processed. A Playwright run covers the pricing page through Stripe Checkout to an active account.',
        challenge:
          '',
      },
      transcendence: {
        title: 'ft_transcendence — Multiplayer Platform',
        impact: 'Real-time multiplayer gaming platform',
        description:
          '42 Network project. Architected full-stack end-to-end: Next.js frontend, NestJS REST API, PostgreSQL/Prisma backend. Implemented JWT auth with OAuth 2.0, 2FA, refresh token rotation, rate limiting, and guard middleware. Engineered real-time multiplayer with Socket.io, matchmaking, and full chat system with public/private channels. Containerized with Docker Compose.',
        challenge:
          'Keeping game state and chat in sync in real time over Socket.io, behind JWT, OAuth 2.0 and 2FA authentication.',
      },
      sentra: {
        title: 'Sentra — Meeting Intelligence',
        impact: 'AI-powered meeting intelligence desktop app',
        description:
          'Dual-pipeline Electron desktop app: offline local Whisper inference + cloud AssemblyAI diarization. Node.js backend for audio chunking, model orchestration, and streaming JSON updates to React UI. Claude API for transcript-grounded research chat; packaged via Electron Builder with GitHub Actions CI/CD.',
        challenge:
          'Running offline Whisper inference and cloud diarization side by side, and streaming both into a single React UI.',
      },
      irc: {
        title: 'IRC Server',
        impact: 'Multi-client IRC server implementation',
        description:
          'IRC server written to protocol in C++98 with no networking library: raw sockets, non-blocking I/O, concurrent multi-client handling, per-channel state, operator commands, and partial-message buffering across reads.',
        challenge:
          'Reassembling partial messages across non-blocking reads for many clients at once, with no networking library.',
      },
      sash: {
        title: 'Sash — Unix Shell',
        impact: 'Bash-like shell with pipes, redirection & signals',
        description:
          'A Bash-like Unix shell written in C. Implements command execution, built-ins (cd, echo, pwd, export, exit), input/output redirection (<, >, >>, <<), pipelines, environment variable expansion, and Unix signal handling (Ctrl+C/Ctrl+\\/Ctrl+D).',
        challenge:
          'Matching Bash behaviour for pipelines, redirections, heredocs and signals while managing child processes by hand.',
      },
      cve: {
        title: 'CVE Vulnerability Analyzer',
        impact: 'Security data tooling over the NVD CVE database',
        description:
          'A Python tool that fetches Common Vulnerabilities and Exposures (CVE) data from the National Vulnerability Database (NVD), filters and processes it with pandas, and surfaces vulnerability descriptions for analysis.',
        challenge:
          'Turning raw NVD API responses into a clean, filterable pandas dataset.',
      },
      inception: {
        title: 'Inception',
        impact: 'Containerized web application infrastructure',
        description:
          'Docker-based multi-container infrastructure with Nginx, WordPress, and MariaDB. Custom Dockerfiles only — no pre-built images. TLS via self-signed certificates.',
        challenge:
          'Building every image from a hand-written Dockerfile and wiring Nginx, WordPress and MariaDB together over TLS.',
      },
      cub3d: {
        title: 'Cub3D',
        impact: '3D graphics engine with raycasting',
        description:
          'First-person 3D raycaster in C using miniLibX. Implements DDA algorithm for wall rendering, texture mapping, and player collision detection.',
        challenge:
          'Implementing DDA raycasting and texture mapping in C on top of a minimal graphics library.',
      },
    },
  },

  education: {
    title: 'Education',
    subtitle: 'My academic background and the programmes that shaped my skills.',
    items: [
      {
        school: '42 Paris',
        degree: 'IT Architecture Expert (“Expert en architecture informatique”), RNCP level 7 title — RNCP 39774',
        period: 'Since Nov 2026',
        location: 'Paris, France',
        description:
          'Preparing RNCP 39774, “Expert en architecture informatique”. Software architecture, systems, networking, data architecture. Level 14 reached; work-experience requirement validated; eligible for a 24-month apprenticeship contract.',
      },
      {
        school: '1337 Coding School — 42 Network',
        degree: 'Software Engineering Program',
        period: '2022 – Oct 2026',
        location: 'Khouribga, Morocco',
        description:
          'Systems and network programming in C/C++, algorithms, web architecture, relational databases. Peer-learning, code review and project-based assessment, no lectures.',
      },
      {
        school: 'Chouaïb Doukkali University',
        degree: "Associate's Degree in English Studies",
        period: '2022 – 2023',
        location: 'El Jadida, Morocco',
        description: '',
      },
    ],
  },

  contact: {
    title: 'Get in Touch',
    subtitle: 'Recruiting for a January 2027 apprenticeship? I would be glad to talk.',
    sendEmail: 'Send an email',
    infoTitle: 'Contact information',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    locationLabel: 'Location',
    location: 'Paris 17e, France',
    languagesLabel: 'Languages',
    languages: [
      { name: 'Arabic', level: 'Native' },
      { name: 'English', level: 'Fluent, working language (C1)' },
      { name: 'French', level: 'A2, in progress' },
    ],
    fallback: {
      title: 'Email or phone',
      body: 'The contact form is not available right now. The quickest way to reach me is directly:',
      call: 'Call me',
    },
    connect: 'Connect with me',
    form: {
      title: 'Send me a message',
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'your.email@example.com',
      subject: 'Subject',
      subjectPlaceholder: 'What is this regarding?',
      message: 'Message',
      messagePlaceholder: 'Your message here…',
      send: 'Send message',
      sending: 'Sending…',
      sent: 'Message sent!',
      failed: 'Failed to send',
      errors: {
        nameRequired: 'Name is required',
        emailRequired: 'Email is required',
        emailInvalid: 'Email is invalid',
        subjectRequired: 'Subject is required',
        messageRequired: 'Message is required',
      },
      toastFix: 'Please fix the errors in the form',
      toastSuccess: 'Message sent successfully!',
      toastError: 'Failed to send message. Please try again or email me directly.',
    },
  },

  footer: {
    tagline:
      'Software engineer building production web applications with React and TypeScript, and the test suites behind them.',
    quickLinks: 'Quick links',
    contact: 'Contact',
    copyright: '© 2026 Youssef Sahih — Software Engineer',
    builtBy: 'Designed & built by Youssef Sahih',
    scrollTop: 'Scroll to top',
  },

  notFound: {
    title: 'Lost in Space',
    body: 'The page you are looking for might have been moved, deleted, or perhaps never existed in this universe.',
    home: 'Return home',
  },
};

export type Dictionary = typeof en;
export default en;
