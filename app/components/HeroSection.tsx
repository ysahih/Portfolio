'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon, DownloadIcon } from 'lucide-react';
import { useMagnetic } from '../hooks/useMagnetic';

interface HeroProps {
  data: {
    name: string;
    title: string;
    about: string;
    avatarUrl: string;
    contact: { email: string };
  };
}

const SPECIALTIES = [
  'React & Next.js',
  'TypeScript',
  'Real-Time Systems',
  'AI-Powered Apps',
  'NestJS & Node.js',
];

const EASE = [0.16, 1, 0.3, 1] as const;

function AnimatedName({ name }: { name: string }) {
  const words = name.split(' ');
  let charOffset = 0;
  return (
    <span aria-label={name} style={{ display: 'inline-flex', flexWrap: 'wrap', gap: '0 0.22em', justifyContent: 'inherit' }}>
      {words.map((word, wi) => {
        const wordStart = charOffset;
        charOffset += word.length + 1;
        return (
          <span key={wi} style={{ display: 'inline-flex', whiteSpace: 'nowrap' }}>
            {word.split('').map((char, ci) => (
              <motion.span
                key={ci}
                initial={{ y: 64, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: (wordStart + ci) * 0.032, duration: 0.62, ease: EASE }}
                style={{ display: 'inline-block' }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        );
      })}
    </span>
  );
}

function CyclingSubtitle() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const cycle = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % SPECIALTIES.length);
        setVisible(true);
      }, 350);
    }, 2800);
    return () => clearInterval(cycle);
  }, []);

  return (
    <div style={{ display: 'inline-block', overflow: 'hidden', height: '1.4em', verticalAlign: 'bottom', minWidth: 280 }}>
      <motion.span
        key={index}
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={{ clipPath: visible ? 'inset(0 0% 0 0)' : 'inset(0 0 0 100%)' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{ display: 'inline-block', color: 'var(--accent)', fontWeight: 600 }}
      >
        {SPECIALTIES[index]}
      </motion.span>
    </div>
  );
}

const HeroSection: React.FC<HeroProps> = ({ data }) => {
  const viewWorkRef = useRef<HTMLAnchorElement>(null);
  const resumeRef = useRef<HTMLAnchorElement>(null);
  useMagnetic(viewWorkRef, 0.35);
  useMagnetic(resumeRef, 0.35);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="w-full md:w-7/12 text-center md:text-left">
            <h1
              className="font-extrabold mb-4 leading-none tracking-tight"
              style={{
                fontSize: 'clamp(3.5rem, 8vw, 7rem)',
                fontFamily: 'var(--font-syne), sans-serif',
                color: 'var(--text-primary)',
              }}
            >
              <AnimatedName name={data.name} />
            </h1>

            <motion.p
              className="text-lg mb-3 font-medium tracking-wide"
              style={{ color: 'var(--text-secondary)' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6, ease: EASE }}
            >
              Frontend & Fullstack Engineer
            </motion.p>

            <motion.div
              className="text-xl md:text-2xl mb-6"
              style={{ color: 'var(--text-secondary)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <CyclingSubtitle />
            </motion.div>

            <motion.hr
              style={{ borderColor: 'var(--border)', transformOrigin: 'left', marginBottom: '2rem' }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.1, duration: 0.8, ease: EASE }}
            />

            <motion.p
              className="mb-8 text-base md:text-lg max-w-xl"
              style={{ color: 'var(--text-secondary)' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6, ease: EASE }}
            >
              {data.about}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6, ease: EASE }}
            >
              <a
                ref={viewWorkRef}
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-lg flex items-center gap-2 font-medium text-sm"
                style={{
                  background: 'var(--accent)',
                  color: 'var(--on-accent)',
                  boxShadow: '0 0 20px var(--accent-glow)',
                }}
              >
                <ArrowDownIcon className="w-4 h-4" />
                View My Work
              </a>

              <a
                ref={resumeRef}
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg flex items-center gap-2 font-medium text-sm"
                style={{
                  border: '1px solid var(--border)',
                  background: 'var(--surface)',
                  color: 'var(--text-primary)',
                }}
              >
                <DownloadIcon className="w-4 h-4" />
                Resume
              </a>
            </motion.div>
          </div>

          {/* Right content — Avatar */}
          <motion.div
            className="w-full md:w-5/12"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
          >
            <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80">
              <div
                className="absolute inset-0 rounded-full blur-2xl animate-pulse"
                style={{ background: 'var(--accent-tint)' }}
              />
              <div
                className="relative w-full h-full rounded-full p-[3px]"
                style={{ background: 'linear-gradient(135deg, var(--accent), transparent)' }}
              >
                <div className="w-full h-full rounded-full overflow-hidden" style={{ background: 'var(--bg)' }}>
                  <img
                    src={data.avatarUrl}
                    alt={data.name}
                    className="w-full h-full rounded-full object-cover"
                    loading="eager"
                    width={320}
                    height={320}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
