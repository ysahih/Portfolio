"use client";

import { motion } from 'framer-motion';
import { GraduationCapIcon, CalendarIcon, BookOpenIcon } from 'lucide-react';
import SectionHeader from './SectionHeader';

interface Education {
  school: string;
  degree: string;
  start: string;
  end: string;
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

  return (
    <div className="py-20 px-4 sm:px-6 md:px-12 overflow-hidden" id="education">
      <div className="container mx-auto max-w-6xl relative">
        <SectionHeader
          title="Education"
          subtitle="My academic background and educational qualifications that have shaped my skills and knowledge."
        />

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px transform -translate-x-1/2 md:translate-x-0" style={{ background: 'var(--border)' }} />

          <motion.div className="space-y-12" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            {education.map((edu, index) => (
              <motion.div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`} variants={itemVariants}>
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full border-2 transform -translate-x-1/2 flex items-center justify-center z-10" style={{ background: 'var(--bg)', borderColor: 'var(--accent)', color: 'var(--accent)' }}>
                  <GraduationCapIcon className="w-4 h-4" />
                </div>
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <motion.div className="p-6 rounded-lg" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }} whileHover={{ y: -4, borderColor: 'var(--accent)' }}>
                    <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{edu.school}</h3>
                    <p className="font-medium mb-3" style={{ color: 'var(--accent)' }}>{edu.degree}</p>
                    <div className={`flex items-center gap-2 text-sm mb-4 ${index % 2 === 0 ? 'justify-start md:justify-end' : 'justify-start'}`} style={{ color: 'var(--text-muted)' }}>
                      <CalendarIcon className="w-4 h-4" />
                      <span>{edu.start} - {edu.end}</span>
                    </div>
                    {index === 1 && (
                      <div className="mt-4 p-3 rounded" style={{ background: 'rgba(79,195,247,0.08)', border: '1px solid rgba(79,195,247,0.15)' }}>
                        <div className="flex items-start gap-2">
                          <BookOpenIcon className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: 'var(--accent)' }} />
                          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Part of the prestigious 42 Network, known for its project-based, peer-to-peer learning methodology.</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div className="mt-16 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}>
          <blockquote className="text-xl italic max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            &ldquo;Education is the passport to the future, for tomorrow belongs to those who prepare for it today.&rdquo;
          </blockquote>
          <p className="mt-2" style={{ color: 'var(--text-muted)' }}>― Malcolm X</p>
        </motion.div>
      </div>
    </div>
  );
};

export default EducationSection;