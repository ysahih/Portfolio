'use client';

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { EASE, viewportOnce, staggerContainer, staggerItem } from '../lib/motion';

interface SkillCategory {
  readonly label: string;
  readonly skills: readonly string[];
}

interface SkillsSectionProps {
  skillCategories: readonly SkillCategory[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skillCategories }) => {
  return (
    <div className="py-20 px-4 sm:px-6 md:px-12" id="skills">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader title="Skills" index="02" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillCategories.map((group, gi) => (
            <motion.div
              key={group.label}
              className="rounded-xl p-6"
              style={{
                background: 'var(--card-surface)',
                border: '1px solid var(--border)',
                boxShadow: '0 12px 32px -16px rgba(0,0,0,0.6)',
              }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, delay: gi * 0.08, ease: EASE }}
              whileHover={{ y: -4, borderColor: 'var(--accent)' } as any}
            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="font-mono text-xs"
                  style={{ color: 'var(--accent)' }}
                >
                  {String(gi + 1).padStart(2, '0')}
                </span>
                <p
                  className="text-sm uppercase tracking-widest font-mono"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {group.label}
                </p>
                <span className="flex-1 h-px" style={{ background: 'var(--border)' }} />
              </div>

              <motion.div
                className="flex flex-wrap gap-2"
                variants={staggerContainer(0.025)}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    data-cursor-expand
                    variants={staggerItem}
                    className="skill-chip"
                    style={{
                      border: '1px solid var(--border)',
                      background: 'var(--surface)',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      fontFamily: 'monospace',
                      fontSize: '0.78rem',
                      letterSpacing: '0.04em',
                      color: 'var(--text-secondary)',
                      display: 'inline-block',
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
