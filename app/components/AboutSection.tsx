"use client";

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { revealUp, staggerContainer, staggerItem, viewportOnce } from '../lib/motion';

interface AboutProps {
  data: {
    name: string;
    summary?: string;
    about?: string;
    avatarUrl?: string;
  };
}

const AboutSection: React.FC<AboutProps> = ({ data }) => {
  return (
    <div className="py-20 px-4 sm:px-6 md:px-12 relative overflow-hidden" id="about">
      <div className="container mx-auto max-w-4xl">
        <SectionHeader title="About Me" index="01" />

        <motion.div
          className="space-y-6"
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
            variants={revealUp}
          >
            Fullstack Engineer with 3+ years building production systems across the entire stack — React/Next.js frontends, NestJS/Node.js backends, PostgreSQL databases, and containerized cloud deployments. Currently a Frontend Developer at{' '}
            <span style={{ color: 'var(--accent)' }}>Im&apos;enSe</span>, building QHSE-sector web applications with React 18 and TypeScript.
          </motion.p>

          <motion.p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
            variants={revealUp}
          >
            Pursuing an Advanced Software Engineering degree (Équivalent Bac +5) at{' '}
            <span style={{ color: 'var(--accent)' }}>1337</span> — part of the 42 Network — with a curriculum built on systems programming, algorithms, network architecture, and peer-to-peer collaboration with no lectures and no instructors.
          </motion.p>

          <motion.div className="flex gap-8 pt-4" variants={staggerContainer(0.08)}>
            {[
              { value: '3+', label: 'Years experience' },
              { value: '20+', label: 'Projects delivered' },
              { value: '7', label: 'Languages in i18n pipeline' },
            ].map((stat, i) => (
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
