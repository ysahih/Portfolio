"use client";

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

interface AboutProps {
  data: {
    name: string;
    summary?: string;
    about?: string;
    avatarUrl?: string;
  };
}

const EASE = [0.16, 1, 0.3, 1] as const;

const AboutSection: React.FC<AboutProps> = ({ data }) => {
  return (
    <div className="py-20 px-4 sm:px-6 md:px-12 relative overflow-hidden" id="about">
      <div className="container mx-auto max-w-4xl">
        <SectionHeader title="About Me" />

        <div className="space-y-6">
          <motion.p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            Fullstack Engineer with 3+ years building production systems across the entire stack — React/Next.js frontends, NestJS/Node.js backends, PostgreSQL databases, and containerized cloud deployments. Currently a Frontend Developer at{' '}
            <span style={{ color: 'var(--accent)' }}>Im&apos;enSe</span>, building QHSE-sector web applications with React 18 and TypeScript.
          </motion.p>

          <motion.p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          >
            Pursuing an Advanced Software Engineering degree (Équivalent Bac +5) at{' '}
            <span style={{ color: 'var(--accent)' }}>1337</span> — part of the 42 Network — with a curriculum built on systems programming, algorithms, network architecture, and peer-to-peer collaboration with no lectures and no instructors.
          </motion.p>

          <motion.div
            className="flex gap-8 pt-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          >
            {[
              { value: '3+', label: 'Years experience' },
              { value: '20+', label: 'Projects delivered' },
              { value: '7', label: 'Languages in i18n pipeline' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>{stat.value}</div>
                <div className="text-sm" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
