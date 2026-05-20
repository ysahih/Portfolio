"use client";

import { motion } from 'framer-motion';

interface SkillsProps {
  skills: string[];
}

const EASE = [0.16, 1, 0.3, 1] as const;

// Grouped skill categories
const SKILL_CATEGORIES: { label: string; skills: string[] }[] = [
  {
    label: 'Languages',
    skills: ['C', 'C++', 'JavaScript', 'TypeScript'],
  },
  {
    label: 'Frontend',
    skills: ['HTML', 'Tailwind CSS', 'React', 'Redux', 'Next.js'],
  },
  {
    label: 'Backend & Infra',
    skills: ['Node.js', 'Docker', 'RESTful APIs', 'Socket.io'],
  },
  {
    label: 'Tools & Methods',
    skills: ['Git', 'Jira', 'Agile / Scrum', 'CI/CD', 'Linux', 'System Design'],
  },
];

const SkillsSection: React.FC<SkillsProps> = () => {
  return (
    <div className="py-20 px-4 sm:px-6 md:px-12 overflow-hidden" id="skills">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            Skills
          </h2>
          <div className="w-12 h-px" style={{ background: 'var(--accent)' }} />
        </motion.div>

        {/* Category groups */}
        <div className="space-y-10">
          {SKILL_CATEGORIES.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: gi * 0.08, ease: EASE }}
            >
              <p
                className="text-xs uppercase tracking-widest mb-4 font-mono"
                style={{ color: 'var(--text-muted)' }}
              >
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: gi * 0.06 + si * 0.04 }}
                    style={{
                      border: '1px solid var(--border)',
                      background: 'var(--surface)',
                      padding: '6px 14px',
                      borderRadius: 4,
                      fontFamily: 'monospace',
                      fontSize: '0.78rem',
                      letterSpacing: '0.08em',
                      color: 'var(--text-secondary)',
                      transition: 'border-color 0.2s, color 0.2s',
                      display: 'inline-block',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
                      (e.currentTarget as HTMLElement).style.color = 'var(--accent)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                      (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;