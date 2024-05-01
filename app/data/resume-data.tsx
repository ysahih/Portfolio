
import { GitHubIcon, LinkedInIcon, XIcon } from "@/app/Components/icons";

export const RESUME_DATA = {
  name: "Youssef Sahih",
  location: "Morocco",

  about:
    "Software Engineer specializing in front-end web design and development, passionate about building efficient websites. With expertise in multiple programming languages, I confidently navigate various technical challenges. I thrive on problem-solving and enjoy collaborating with teams on projects. My dedication to writing efficient code ensures optimal performance and user experiences. Let's work together to create exceptional digital experiences.",
  summary:
    "As a Front-end Web Developer with a background in computer systems, algorithms, and data structures, I have two years of experience in IT and two years of English studies under my belt. I am currently furthering my education in the 42 network for a Master Digital IT Architect degree. Coding and problem-solving through code are my passions, and I am excited to collaborate with talented programmers and expand my knowledge even more!",
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
    "React/Next.js",
  ],
  projects: [
    {
      title: "Pongy",
      techStack: [
        "Ongoing Project",
        "Next.js",
        "React",
        "TypeScript",
      ],
      description: "Pong contest website with real-time multiplayer games, chat, and security",
      // link: {
      //   // label: "consultly.com",
      //   href: "https://github.com/ysahih/Pongy",
      // },
    },
    {
      title: "Wordle-Game clone",
      techStack: ["Html", "Css", "JavaScript"],
      description:
        "a simple clone of the famous wordle game",

      link: {
        label: "github.com",
        href: "https://github.com/ysahih/blog",
      },
    },
    {
      title: "Inception",
      techStack: ["Docker", "Nginx", "mariaDb", "Wordpress"],
      description:
        "Created a Docker-based multi-container infrastructure with Nginx, WordPress, and MariaDB for a web application.",
      link: {
        label: "github.com",
        href: "https://github.com/ysahih/inception",
      },
    },
    {
      title: "IRC",
      techStack: ["C++", "Socket"],
      description:
        "Internet Relay Chat server (Communication protocol on the Internet)",
      link: {
        label: "github.com",
        href: "https://github.com/ysahih/IRC",
      },
    },
  ],
} as const;
