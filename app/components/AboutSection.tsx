"use client";

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { revealUp, staggerContainer, staggerItem, viewportOnce } from '../lib/motion';
import { useDictionary, Accented } from '../i18n/DictionaryContext';

const AboutSection: React.FC = () => {
  const { dict } = useDictionary();
  const t = dict.about;
  return (
    <div className="py-20 px-4 sm:px-6 md:px-12 relative overflow-hidden" id="about">
      <div className="container mx-auto max-w-4xl">
        <SectionHeader title={t.title} index="01" />

        <motion.div
          className="space-y-6 about-panel"
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {t.paragraphs.map((para, i) => (
            <motion.p
              key={i}
              className="text-base md:text-lg leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
              variants={revealUp}
            >
              <Accented text={para} />
            </motion.p>
          ))}

          <motion.div className="flex gap-8 pt-4" variants={staggerContainer(0.08)}>
            {t.stats.map((stat, i) => (
              <motion.div key={i} variants={staggerItem}>
                <div className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>{stat.value}</div>
                <div className="text-sm" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
