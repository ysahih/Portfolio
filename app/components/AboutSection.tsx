"use client";

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { CodeIcon, BookOpenIcon, BrainCircuitIcon, GraduationCapIcon } from 'lucide-react';

interface AboutProps {
  data: {
    summary: string;
    name: string;
  };
}

const AboutSection: React.FC<AboutProps> = ({ data }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const qualities = [
    {
      icon: <CodeIcon className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Approaching complex coding challenges with analytical thinking and persistence."
    },
    {
      icon: <BookOpenIcon className="w-6 h-6" />,
      title: "Continuous Learner",
      description: "Passionate about staying updated with the latest technologies and best practices."
    },
    {
      icon: <BrainCircuitIcon className="w-6 h-6" />,
      title: "Creative Thinker",
      description: "Finding innovative solutions by thinking outside the box."
    },
    {
      icon: <GraduationCapIcon className="w-6 h-6" />,
      title: "Academic Focus",
      description: "Pursuing a Master's Degree in IT Architecture in the 42 network."
    }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 md:px-12 relative overflow-hidden" id="about">
      <div className="absolute right-0 top-0 w-96 h-96 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl -z-10" style={{ background: 'rgba(79,195,247,0.06)' }} />
      <div className="absolute left-0 bottom-0 w-96 h-96 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl -z-10" style={{ background: 'rgba(79,195,247,0.04)' }} />
      
      <div className="container mx-auto max-w-6xl">
        <SectionHeader title="About Me" />

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side */}
          <motion.div 
            className="w-full lg:w-5/12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative p-6 rounded-lg" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--accent)' }}>Who I Am</h3>
              <p className="leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                {data.summary}
              </p>
              <div className="pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                <p className="font-medium" style={{ color: 'var(--text-primary)' }}>
                  Currently pursuing my passion for programming in the 42 network, working toward a Master&apos;s Degree in IT Architecture.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Qualities */}
          <motion.div 
            className="w-full lg:w-7/12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left" style={{ color: 'var(--text-primary)' }}>My Qualities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {qualities.map((quality, index) => (
                <motion.div 
                  key={index}
                  className="p-6 rounded-lg group"
                  style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                  variants={itemVariants}
                  whileHover={{ y: -5, borderColor: 'var(--accent)' }}
                >
                  <div className="mb-4 inline-flex p-3 rounded-lg" style={{ background: 'rgba(79,195,247,0.1)', color: 'var(--accent)' }}>
                    {quality.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{quality.title}</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    {quality.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="mt-8 text-center lg:text-left"
              variants={itemVariants}
            >
              <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
                I am <span className="font-semibold" style={{ color: 'var(--accent)' }}>passionate about solving problems</span> through code and building applications that provide genuine value.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;