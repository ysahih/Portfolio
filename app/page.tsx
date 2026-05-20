"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ServicesSection from './components/ServicesSection';
import TechStackSection from './components/TechStackSection';
import ProjectsSection from './components/ProjectsSection';
import TestimonialsSection from './components/TestimonialsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import StickyContactCTA from './components/StickyContactCTA';
import { useTheme } from './Contexts/ThemeContext';
import { RESUME_DATA } from './data/resume-data';
import ExperienceSection from './components/ExperienceSection';

export default function Portfolio() {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  useEffect(() => {
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
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <div className="min-h-screen flex flex-col overflow-x-hidden" style={{ background: 'transparent' }}>
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
          <HeroSection data={RESUME_DATA as any} />
        </motion.section>
        
        <motion.section id="about" variants={fadeInUp}>
          <AboutSection data={RESUME_DATA} />
        </motion.section>
        
        <motion.section id="services" variants={fadeInUp}>
          <ServicesSection />
        </motion.section>
        
        <motion.section id="tech-stack" variants={fadeInUp}>
          <TechStackSection />
        </motion.section>
        
        <motion.section id="skills" variants={fadeInUp}>
          <SkillsSection skills={[...RESUME_DATA.skills]} />
        </motion.section>
        
        <motion.section id="experience" variants={fadeInUp}>
          <ExperienceSection experience={RESUME_DATA.experience} />
        </motion.section>
        
        <motion.section id="projects" variants={fadeInUp}>
          <ProjectsSection 
            projects={RESUME_DATA.projects.map(project => ({
              ...project,
              techStack: [...project.techStack]
            }))}
          />
        </motion.section>
        
        <motion.section id="testimonials" variants={fadeInUp}>
          <TestimonialsSection />
        </motion.section>
        
        <motion.section id="education" variants={fadeInUp}>
          <EducationSection education={[...RESUME_DATA.education]} />
        </motion.section>
        
        <motion.section id="contact" variants={fadeInUp}>
          <ContactSection 
            contact={{
              ...RESUME_DATA.contact,
              social: [...RESUME_DATA.contact.social]
            }} 
            location={RESUME_DATA.location}
          />
        </motion.section>
      </motion.main>
      
      <Footer socialLinks={[...RESUME_DATA.contact.social]} />
      
      {/* Sticky Contact CTA */}
      <StickyContactCTA 
        phone={RESUME_DATA.contact.tel}
        email={RESUME_DATA.contact.email}
      />
    </div>
  );
}