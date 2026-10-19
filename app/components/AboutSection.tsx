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
          className="space-y-6 about-panel"
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
            Frontend engineer with three years in production React and TypeScript, who owns the end-to-end test suite as well as the features. 138 merged pull requests over 26 months in one production codebase, 109 Cypress specs and a 133-test Playwright suite. Backend and systems work in Node, NestJS and C++ through personal and 42 Network projects. Currently a Frontend Developer at{' '}
            <span style={{ color: 'var(--accent)' }}>Im&apos;enSe</span>, building QHSE-sector web applications with React 18 and TypeScript.
          </motion.p>

          <motion.p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
            variants={revealUp}
          >
            Trained at{' '}
            <span style={{ color: 'var(--accent)' }}>1337</span> — part of the 42 Network — from 2022 to 2026, a curriculum built on systems programming, algorithms, network architecture, and peer-to-peer collaboration with no lectures and no instructors. Now transferring to{' '}
            <span style={{ color: 'var(--accent)' }}>42 Paris</span> to prepare the RNCP level 7 IT Architecture Expert title.
          </motion.p>

          <motion.div className="flex gap-8 pt-4" variants={staggerContainer(0.08)}>
            {[
              { value: '3+', label: 'Years experience' },
              { value: '138', label: 'Merged pull requests' },
              { value: '7', label: 'Locales in production i18n' },
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
