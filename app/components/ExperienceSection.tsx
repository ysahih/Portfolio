"use client";

import { motion } from 'framer-motion';
import { BriefcaseIcon, CalendarIcon, MapPinIcon, CheckIcon } from 'lucide-react';
import SectionHeader from './SectionHeader';

interface Experience {
  company: string;
  position: string;
  logo?: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: readonly string[];
  achievements: readonly string[];
}

interface ExperienceSectionProps {
  experience: readonly Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  // Generate initials-based avatar without external requests
  const generateDefaultLogo = (companyName: string) => {
    const initials = companyName.split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase();
    return `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><rect width="128" height="128" rx="16" fill="%230D8ABC"/><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="52" font-family="monospace" font-weight="bold">${initials}</text></svg>`)}`;
  };

  return (
    <div className="py-20 px-4 sm:px-6 md:px-12 overflow-hidden" id="experience">
      <div className="container mx-auto max-w-6xl relative">
        <SectionHeader
          title="Work Experience"
          subtitle="My professional journey and key accomplishments in the tech industry."
        />

        {/* Experience Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px rounded-full transform -translate-x-1/2 md:translate-x-0" style={{ background: 'var(--border)' }} />

          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {experience.map((exp, index) => (
              <motion.div 
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                variants={itemVariants}
              >
                {/* Timeline point */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full border-2 transform -translate-x-1/2 flex items-center justify-center z-10" style={{ background: 'var(--bg)', borderColor: 'var(--accent)', color: 'var(--accent)' }}>
                  <BriefcaseIcon className="w-4 h-4" />
                </div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <motion.div 
                    className="p-6 rounded-lg"
                    style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                    whileHover={{ y: -4, borderColor: 'var(--accent)' }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center ${index % 2 === 1 ? 'order-1' : 'md:order-2'}`} style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                        <img src={exp.logo || generateDefaultLogo(exp.company)} alt={`${exp.company} logo`} className="w-10 h-10 object-contain" />
                      </div>
                      <div className={index % 2 === 1 ? 'order-2' : 'md:order-1 md:text-right'}>
                        <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>{exp.position}</h3>
                        <p className="font-medium" style={{ color: 'var(--accent)' }}>{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className={`flex items-center gap-2 text-sm ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`} style={{ color: 'var(--text-muted)' }}>
                        <CalendarIcon className="w-4 h-4 flex-shrink-0" />
                        <span>{exp.startDate} - {exp.endDate}</span>
                      </div>
                      <div className={`flex items-center gap-2 text-sm ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`} style={{ color: 'var(--text-muted)' }}>
                        <MapPinIcon className="w-4 h-4 flex-shrink-0" />
                        <span>{exp.location}</span>
                      </div>
                      <p className="py-3 my-3" style={{ color: 'var(--text-secondary)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
                        {exp.description}
                      </p>
                      <div className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                        {exp.skills.map((skill, si) => (
                          <span key={si} className="px-2 py-1 text-xs rounded-full font-mono" style={{ background: 'var(--accent-tint)', color: 'var(--accent)', border: '1px solid var(--accent-tint-border)' }}>
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="space-y-2">
                        <h4 className={`text-sm font-semibold ${index % 2 === 0 ? 'md:text-right' : 'text-left'}`} style={{ color: 'var(--text-primary)' }}>Key Achievements:</h4>
                        <ul className={`space-y-1 ${index % 2 === 0 ? 'md:text-right' : 'text-left'}`}>
                          {exp.achievements.map((ach, ai) => (
                            <li key={ai} className="flex items-start gap-2">
                              <CheckIcon className={`w-4 h-4 mt-1 flex-shrink-0 ${index % 2 === 0 ? 'md:order-2' : 'order-1'}`} style={{ color: 'var(--accent)' }} />
                              <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default ExperienceSection; 