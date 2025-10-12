import { GitHubIcon, LinkedInIcon, XIcon } from "../components/icons";

export const RESUME_DATA = {
  name: "Youssef Sahih",
  location: "Morocco",

  about:
    "Motivated software developer with a strong track record of successfully completing various projects. Proficient in various programming languages and technologies, including C, C++, and web development technologies (HTML, CSS, JavaScript). Skilled in areas such as file handling, multithreading, game development, virtualization, and networking. Strong problem-solving abilities and a solid understanding of software development principles. Committed to continuous learning and delivering high-quality solutions. Ready to contribute expertise to new challenges.",
  summary:
    "As a software Developer with a background in computer systems, algorithms, and data structures, I have two years of experience in IT and two years of English studies under my belt. I am currently furthering my education in the 42 network for a Master Digital IT Architect degree. Coding and problem-solving through code are my passions, and I am excited to collaborate with talented programmers and expand my knowledge even more!",
  avatarUrl: "./ysahih.png",

  contact: {
    email: "ucefsahih@gmail.com",
    tel: "+212708978739",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ysahih",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/youssef-sahih/",
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
      school: "Université Chouaïb Doukkali",
      degree: "Associate's Degree in English Studies.",
      start: "2020",
      end: "2022",
    },
    {
      school: "1337 - (42 network)",
      degree: "Master's Degree in IT Architecture.",
      start: "2022",
      end: "present",
    },
  ],
  skills: [
    "C",
    "C++",
    "Html",
    "Tailwind Css",
    "JavaScript",
    "TypeScript",
    "React",
    "Redux",
    "Node.js/Next.js",
    "Docker",
    "Git",
    "Jira",
    "Agile/Scrum",
  ],

  projects: [
    {
      title: "Plombier Rapide Agadir",
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO", "Google Analytics"],
      description:
        "Professional website for local plumbing service with SEO optimization, Google Business Profile integration, and analytics tracking. Real-time data shows 3 active users across 5+ Moroccan cities with 50% traffic share.",
      link: {
        label: "View Case Study",
        href: "/case-study/plombier-rapide-agadir",
      },
      impact: "50% of total website traffic from project page",
      category: "Client Work",
      featured: true,
    },
    {
      title: "Pongy",
      techStack: ["Next.js", "React", "TypeScript", "Socket.io", "Real-time"],
      description:
        "Pong contest website with real-time multiplayer games, chat, and security features. Built with modern web technologies for smooth gaming experience.",
      link: {
        label: "github.com/ysahih",
        href: "https://github.com/ysahih/PingPong",
      },
      impact: "Real-time multiplayer gaming platform",
      category: "Personal Project",
      featured: false,
    },
    {
      title: "Wordle-Game Clone",
      techStack: ["HTML", "CSS", "JavaScript", "Local Storage"],
      description: "A faithful recreation of the famous Wordle game with local storage for game history and statistics tracking.",
      link: {
        label: "github.com",
        href: "https://github.com/ysahih/blog",
      },
      impact: "Interactive word puzzle game",
      category: "Personal Project",
      featured: false,
    },
    {
      title: "Inception",
      techStack: ["Docker", "Nginx", "MariaDB", "WordPress", "DevOps"],
      description:
        "Created a Docker-based multi-container infrastructure with Nginx, WordPress, and MariaDB for a scalable web application deployment.",
      link: {
        label: "github.com",
        href: "https://github.com/ysahih/inception",
      },
      impact: "Containerized web application infrastructure",
      category: "DevOps",
      featured: false,
    },
    {
      title: "IRC Server",
      techStack: ["C++", "Socket Programming", "Network Protocols"],
      description:
        "Internet Relay Chat server implementing the IRC communication protocol with multi-client support and channel management.",
      link: {
        label: "github.com",
        href: "https://github.com/ysahih/IRC",
      },
      impact: "Multi-client chat server implementation",
      category: "System Programming",
      featured: false,
    },
    {
      title: "Cub3D",
      techStack: ["C", "Graphics", "Raycasting", "miniLibX"],
      description:
        "My first RayCaster with miniLibX. This project is inspired by the world-famous Wolfenstein 3D game, featuring 3D graphics rendering.",
      link: {
        label: "github.com",
        href: "https://github.com/ysahih/cub3D",
      },
      impact: "3D graphics engine with raycasting",
      category: "Graphics Programming",
      featured: false,
    },
    {
      title: "Sash Shell",
      techStack: ["C", "System Programming", "Process Management"],
      description: "Simple implementation of Unix Shell with C, featuring command parsing, process execution, and built-in commands.",
      link: {
        label: "github.com",
        href: "https://github.com/ysahih/Sash",
      },
      impact: "Unix shell implementation",
      category: "System Programming",
      featured: false,
    },
  ],

  experience: [
    {
      company: "Im'enSe",
      position: "Frontend Developer",
      logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQGwBEMaD6MB4Q/company-logo_200_200/company-logo_200_200/0/1670258446221?e=1749686400&v=beta&t=ke4p83O45mws8hx8rE5qkaD8KH5-aI1hPa6gesmqx_U',
      location: "Tangier, Morocco",
      startDate: "Aug 2024",
      endDate: "Present",
      description:
        "Working on front-end development projects for clients in the QHSE sector, focusing on secure, scalable web applications.",
      skills: [
        "React",
        "TypeScript",
        "Redux",
        "Node.js",
        "Jira",
        "Agile",
        "Git",
        "CI/CD",
        "REST APIs",
      ],
      achievements: [
        "Collaborated with cross-functional teams to deliver projects on time",
        "Contributed to the development of a secure authentication system",
        "Conducted code reviews and provided constructive feedback to peers",
        "Participated in the design and architecture of a new web application",
        "Worked closely with UX/UI designers to implement user-friendly interfaces",
        "Contributed to the development of a reusable component library",
        "Participated in the migration of a legacy application to a modern tech stack",
        "Worked on a project that reduced page load time by 50%",
        "Participated in the development of a web application that supports multiple languages",
        "Worked on a project that improved accessibility for users with disabilities",
        "Worked on a project that improved SEO performance by 30%",
        "Participated in the development of a web application that integrates with third-party APIs",
        "Worked on a project that improved data visualization for users",
      ],
    },
  ],
} as const;
