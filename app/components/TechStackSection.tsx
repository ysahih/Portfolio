"use client";

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

interface TechItem {
  name: string;
  icon: string;
  category: string;
}

const techStack: TechItem[] = [
  { name: "React", icon: "devicon-react-original", category: "Frontend" },
  { name: "Next.js", icon: "devicon-nextjs-original", category: "Frontend" },
  { name: "TypeScript", icon: "devicon-typescript-original", category: "Language" },
  { name: "JavaScript", icon: "devicon-javascript-plain", category: "Language" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain", category: "Styling" },
  { name: "Node.js", icon: "devicon-nodejs-plain", category: "Backend" },
  { name: "Git", icon: "devicon-git-plain", category: "Tools" },
  { name: "Docker", icon: "devicon-docker-plain", category: "DevOps" },
  { name: "SEO", icon: "devicon-google-plain", category: "Marketing" },
  { name: "Analytics", icon: "devicon-googleanalytics-plain", category: "Analytics" },
  { name: "C", icon: "devicon-c-plain", category: "Language" },
  { name: "C++", icon: "devicon-cplusplus-plain", category: "Language" }
];

const TechStackSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        when: "beforeChildren"
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="py-20 px-4 sm:px-6 md:px-12 overflow-hidden" id="tech-stack">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          title="Tech Stack"
          subtitle="Modern technologies and tools I use to build fast, scalable, and maintainable applications"
        />

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-xl p-4 transition-all duration-300 group text-center"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <div className="flex flex-col items-center">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${tech.icon} colored`}></i>
                </div>
                <h3 className="text-sm font-medium mb-1">
                  {tech.name}
                </h3>
                <span className="text-xs px-2 py-1 rounded-full" style={{ color: 'var(--text-muted)', background: 'rgba(255,255,255,0.05)' }}>
                  {tech.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="rounded-2xl p-8" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
            <h3 className="text-xl font-semibold mb-4">
              Always Learning & Growing
            </h3>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              I stay up-to-date with the latest technologies and best practices to deliver cutting-edge solutions. 
              My diverse background in both frontend and backend development allows me to create comprehensive, 
              full-stack applications that meet modern business needs.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechStackSection;
