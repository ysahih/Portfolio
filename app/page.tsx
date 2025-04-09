"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { useTheme } from './Contexts/ThemeContext';
import { RESUME_DATA } from './data/resume-data';

export default function Portfolio() {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading to ensure smooth animations
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Add scroll event listener for setting active section
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background-light dark:bg-background-dark">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center"
        >
          <motion.img
            src="/ucefLogo.svg"
            alt="Logo"
            className="w-16 h-16"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 360] 
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
          <motion.p 
            className="mt-4 text-text-light dark:text-text-dark text-lg font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Loading Portfolio...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <NavigationBar activeSection={activeSection} />

      <motion.main 
        className="flex-grow"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        <motion.section id="home" variants={fadeInUp}>
          <HeroSection data={RESUME_DATA} />
        </motion.section>
        
        <motion.section id="about" variants={fadeInUp}>
          <AboutSection data={RESUME_DATA} />
        </motion.section>
        
        <motion.section id="skills" variants={fadeInUp}>
          <SkillsSection skills={RESUME_DATA.skills} />
        </motion.section>
        
        <motion.section id="projects" variants={fadeInUp}>
          <ProjectsSection projects={RESUME_DATA.projects} />
        </motion.section>
        
        <motion.section id="education" variants={fadeInUp}>
          <EducationSection education={RESUME_DATA.education} />
        </motion.section>
        
        <motion.section id="contact" variants={fadeInUp}>
          <ContactSection contact={RESUME_DATA.contact} location={RESUME_DATA.location} />
        </motion.section>
      </motion.main>
      
      <Footer socialLinks={RESUME_DATA.contact.social} />
    </div>
  );
}