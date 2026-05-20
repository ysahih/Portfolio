'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MailIcon, DownloadIcon } from 'lucide-react';
import { useMagnetic } from '../hooks/useMagnetic';

interface HeroProps {
  data: {
    name: string;
    about: string;
    avatarUrl: string;
    contact: {
      email: string;
      social: {
        name: string;
        url: string;
        icon: any;
      }[];
    };
  };
}

const SPECIALTIES = [
  'Full-Stack Developer',
  'Next.js Engineer',
  'UI/UX Craftsperson',
  'Performance Optimizer',
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
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: (wordStart + ci) * 0.04, duration: 0.7, ease: EASE }}
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
    <div
      style={{
        display: 'inline-block',
        overflow: 'hidden',
        height: '1.4em',
        verticalAlign: 'bottom',
        minWidth: 260,
      }}
    >
      <motion.span
        key={index}
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={{ clipPath: visible ? 'inset(0 0% 0 0)' : 'inset(0 0 0 100%)' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{
          display: 'inline-block',
          color: 'var(--accent)',
          fontWeight: 600,
        }}
      >
        {SPECIALTIES[index]}
      </motion.span>
    </div>
  );
}

const HeroSection: React.FC<HeroProps> = ({ data }) => {
  const ctaRef = useRef<HTMLAnchorElement>(null);
  useMagnetic(ctaRef, 0.35);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="w-full md:w-7/12 text-center md:text-left">
            <motion.p
              className="text-sm tracking-widest uppercase mb-4"
              style={{ color: 'var(--text-muted)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: EASE }}
            >
              Hey, I&apos;m
            </motion.p>

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

            <motion.div
              className="text-xl md:text-2xl mb-4"
              style={{ color: 'var(--text-secondary)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <CyclingSubtitle />
            </motion.div>

            {/* Animated HR */}
            <motion.hr
              style={{ borderColor: 'var(--border)', transformOrigin: 'left', marginBottom: '2rem' }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 0.8, ease: EASE }}
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
              transition={{ delay: 1.1, duration: 0.6, ease: EASE }}
            >
              <motion.a
                ref={ctaRef}
                href={`mailto:${data.contact.email}`}
                className="px-6 py-3 rounded-lg flex items-center gap-2 font-medium text-sm"
                style={{
                  background: 'var(--accent)',
                  color: '#070710',
                  boxShadow: '0 0 20px rgba(79,195,247,0.25)',
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <MailIcon className="w-4 h-4" />
                Contact Me
              </motion.a>

              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg flex items-center gap-2 font-medium text-sm"
                style={{
                  border: '1px solid var(--border)',
                  background: 'var(--surface)',
                  color: 'var(--text-primary)',
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <DownloadIcon className="w-4 h-4" />
                Resume
              </motion.a>
            </motion.div>

            <motion.div
              className="mt-8 flex gap-4 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
            >
              {data.contact.social.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-secondary)',
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
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
                style={{ background: 'rgba(79,195,247,0.12)' }}
              />
              <div
                className="relative w-full h-full rounded-full p-[3px]"
                style={{ background: 'linear-gradient(135deg, var(--accent), transparent)' }}
              >
                <div
                  className="w-full h-full rounded-full overflow-hidden"
                  style={{ background: 'var(--bg)' }}
                >
                  <img
                    src={data.avatarUrl}
                    alt={`${data.name} — Web Developer`}
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