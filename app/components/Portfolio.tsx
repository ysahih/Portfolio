"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NavigationBar from './NavigationBar';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import ExperienceSection from './ExperienceSection';
import ProjectsSection from './ProjectsSection';
import EducationSection from './EducationSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import { RESUME_DATA } from '../data/resume-data';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden" style={{ background: 'transparent' }}>
      <NavigationBar activeSection={activeSection} />

      <motion.main
        className="flex-grow"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {/* No fade on the hero: it must paint before hydration for a fast LCP. */}
        <section id="home">
          <HeroSection />
        </section>

        <motion.section id="about" variants={fadeInUp}>
          <AboutSection />
        </motion.section>

        <motion.section id="skills" variants={fadeInUp}>
          <SkillsSection />
        </motion.section>

        <motion.section id="experience" variants={fadeInUp}>
          <ExperienceSection />
        </motion.section>

        <motion.section id="projects" variants={fadeInUp}>
          <ProjectsSection />
        </motion.section>

        <motion.section id="education" variants={fadeInUp}>
          <EducationSection />
        </motion.section>

        <motion.section id="contact" variants={fadeInUp}>
          <ContactSection />
        </motion.section>
      </motion.main>

      <Footer socialLinks={[...RESUME_DATA.contact.social]} />
    </div>
  );
}
