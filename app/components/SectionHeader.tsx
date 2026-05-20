'use client';

import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({ title, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <motion.div
      className={`mb-14 ${centered ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <h2
        className="text-3xl md:text-4xl font-bold mb-3"
        style={{ color: 'var(--text-primary)' }}
      >
        {title}
      </h2>
      <div
        className={`w-12 h-px ${centered ? 'mx-auto' : ''}`}
        style={{ background: 'var(--accent)' }}
      />
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base ${centered ? 'mx-auto' : ''}`}
          style={{ color: 'var(--text-secondary)' }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
