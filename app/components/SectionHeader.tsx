'use client';

import { motion } from 'framer-motion';
import { EASE, viewportOnce, useReducedMotion } from '../lib/motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  /** Optional ordinal shown as a mono index label, e.g. "02". */
  index?: string;
}

export default function SectionHeader({ title, subtitle, centered = false, index }: SectionHeaderProps) {
  const reduced = useReducedMotion();

  return (
    <div className={`mb-14 ${centered ? 'text-center' : ''}`}>
      {index && (
        <motion.span
          className="block font-mono text-xs tracking-[0.3em] uppercase mb-3"
          style={{ color: 'var(--accent)' }}
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, ease: EASE }}
        >
          {index}
        </motion.span>
      )}

      {/* Title reveals through a clip mask, line by line */}
      <div style={{ overflow: 'hidden' }} className={centered ? 'flex justify-center' : ''}>
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          style={{ color: 'var(--text-primary)' }}
          initial={reduced ? { opacity: 0 } : { y: '110%' }}
          whileInView={reduced ? { opacity: 1 } : { y: '0%' }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: EASE }}
        >
          {title}
        </motion.h2>
      </div>

      {/* Accent line that draws itself in from the left */}
      <motion.div
        className={`h-px mt-3 ${centered ? 'mx-auto' : ''}`}
        style={{ background: 'var(--accent)', transformOrigin: centered ? 'center' : 'left', width: 48 }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
      />

      {subtitle && (
        <motion.p
          className={`mt-4 max-w-2xl text-base ${centered ? 'mx-auto' : ''}`}
          style={{ color: 'var(--text-secondary)' }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
