"use client";

import { motion } from 'framer-motion';
import { GraduationCapIcon, CalendarIcon, BookOpenIcon } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { viewportOnce } from '../lib/motion';

interface Education {
  school: string;
  degree: string;
  start: string;
  end: string;
  location?: string;
  description?: string;
}

interface EducationSectionProps {
  education: Education[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
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
    // y-offset (not x) so reveals never cause horizontal overflow on mobile
    hidden: { y: 32, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 14,
      },
    },
  };

  return (
    <div className="py-20 px-4 sm:px-6 md:px-12 overflow-hidden" id="education">
      <div className="container mx-auto max-w-6xl relative">
        <SectionHeader
          index="05"
          title="Education"
          subtitle="My academic background and educational qualifications that have shaped my skills and knowledge."
        />

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px transform -translate-x-1/2 md:translate-x-0" style={{ background: 'var(--border)' }} />

          <motion.div className="space-y-12" variants={containerVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {education.map((edu, index) => (
              <motion.div key={index} className={`relative flex items-start md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`} variants={itemVariants}>
                <div className="absolute left-4 md:left-1/2 top-5 md:top-1/2 w-8 h-8 rounded-full border-2 transform -translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center z-10" style={{ background: 'var(--bg)', borderColor: 'var(--accent)', color: 'var(--accent)' }}>
                  <GraduationCapIcon className="w-4 h-4" />
                </div>
                <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <motion.div className="p-6 rounded-lg" style={{ background: 'var(--card-surface)', border: '1px solid var(--border)', boxShadow: '0 12px 32px -16px rgba(0,0,0,0.6)' }} whileHover={{ y: -4, borderColor: 'var(--accent)' }}>
                    <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{edu.school}</h3>
                    <p className="font-medium mb-3" style={{ color: 'var(--accent)' }}>{edu.degree}</p>
                    <div className={`flex items-center gap-2 text-sm mb-4 ${index % 2 === 0 ? 'justify-start md:justify-end' : 'justify-start'}`} style={{ color: 'var(--text-muted)' }}>
                      <CalendarIcon className="w-4 h-4" />
                      <span>{edu.start} - {edu.end}</span>
                    </div>
                    {edu.location && (
                      <p className="text-sm mb-3" style={{ color: 'var(--text-muted)' }}>📍 {edu.location}</p>
                    )}
                    {edu.description && (
                      <div className="mt-2 p-3 rounded" style={{ background: 'var(--accent-tint)', border: '1px solid var(--accent-tint-border)' }}>
                        <div className="flex items-start gap-2">
                          <BookOpenIcon className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: 'var(--accent)' }} />
                          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{edu.description}</p>
                        </div>
                      </div>
                    )}
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

export default EducationSection;