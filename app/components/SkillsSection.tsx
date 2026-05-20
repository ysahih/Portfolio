'use client';

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

interface SkillCategory {
  readonly label: string;
  readonly skills: readonly string[];
}

interface SkillsSectionProps {
  skillCategories: readonly SkillCategory[];
}

const EASE = [0.16, 1, 0.3, 1] as const;

const SkillsSection: React.FC<SkillsSectionProps> = ({ skillCategories }) => {
  return (
    <div className="py-20 px-4 sm:px-6 md:px-12" id="skills">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader title="Skills" />

        <div className="space-y-10">
          {skillCategories.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: gi * 0.07, ease: EASE }}
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
                    data-cursor-expand
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: gi * 0.07 + si * 0.03, ease: EASE }}
                    style={{
                      border: '1px solid var(--border)',
                      background: 'var(--surface)',
                      padding: '5px 12px',
                      borderRadius: '3px',
                      fontFamily: 'monospace',
                      fontSize: '0.78rem',
                      letterSpacing: '0.06em',
                      color: 'var(--text-secondary)',
                      display: 'inline-block',
                      transition: 'border-color 0.18s, color 0.18s',
                      cursor: 'default',
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
