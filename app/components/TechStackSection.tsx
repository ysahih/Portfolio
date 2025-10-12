"use client";

import { motion } from 'framer-motion';

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
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Modern technologies and tools I use to build fast, scalable, and maintainable applications
          </p>
        </motion.div>

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
              className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 group text-center"
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <div className="flex flex-col items-center">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${tech.icon} colored`}></i>
                </div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                  {tech.name}
                </h3>
                <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
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
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Always Learning & Growing
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
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
