'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownIcon, DownloadIcon } from 'lucide-react';
import { useMagnetic } from '../hooks/useMagnetic';
import { EASE, SPRING_SOFT, useReducedMotion } from '../lib/motion';

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

function AnimatedName({ name, reduced }: { name: string; reduced: boolean }) {
  const words = name.split(' ');
  const containerRef = useRef<HTMLSpanElement>(null);
  // Per-letter cursor-reactive tilt: letters lean toward the pointer.
  const [origin, setOrigin] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (reduced) return;
    const onMove = (e: MouseEvent) => setOrigin({ x: e.clientX, y: e.clientY });
    const onLeave = () => setOrigin(null);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, [reduced]);

  let charOffset = 0;
  return (
    <span
      ref={containerRef}
      aria-label={name}
      className="hero-name-wrap"
      style={{
        display: 'inline-flex',
        flexWrap: 'wrap',
        gap: '0 0.22em',
        justifyContent: 'inherit',
        perspective: 600,
        position: 'relative',
      }}
    >
      {words.map((word, wi) => {
        const wordStart = charOffset;
        charOffset += word.length + 1;
        return (
          <span key={wi} style={{ display: 'inline-flex', whiteSpace: 'nowrap' }}>
            {word.split('').map((char, ci) => (
              <Letter
                key={ci}
                char={char}
                delay={(wordStart + ci) * 0.032}
                origin={origin}
                reduced={reduced}
              />
            ))}
          </span>
        );
      })}
    </span>
  );
}

function Letter({
  char,
  delay,
  origin,
  reduced,
}: {
  char: string;
  delay: number;
  origin: { x: number; y: number } | null;
  reduced: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, lift: 0 });

  useEffect(() => {
    if (reduced || !origin || !ref.current) {
      setTilt({ rx: 0, ry: 0, lift: 0 });
      return;
    }
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = origin.x - cx;
    const dy = origin.y - cy;
    const dist = Math.hypot(dx, dy);
    const radius = 220; // influence radius
    if (dist > radius) {
      setTilt({ rx: 0, ry: 0, lift: 0 });
      return;
    }
    const strength = 1 - dist / radius;
    setTilt({
      ry: (dx / radius) * 22 * strength,
      rx: -(dy / radius) * 22 * strength,
      lift: strength * 10,
    });
  }, [origin, reduced]);

  return (
    <motion.span
      ref={ref}
      initial={{ y: 64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.62, ease: EASE }}
      style={{ display: 'inline-block', transformStyle: 'preserve-3d' }}
    >
      <motion.span
        className="hero-name-sheen"
        style={{ display: 'inline-block' }}
        animate={{ rotateX: tilt.rx, rotateY: tilt.ry, z: tilt.lift }}
        transition={SPRING_SOFT}
      >
        {char === ' ' ? ' ' : char}
      </motion.span>
    </motion.span>
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
  const sectionRef = useRef<HTMLDivElement>(null);
  useMagnetic(viewWorkRef, 0.35);
  useMagnetic(resumeRef, 0.35);

  const reduced = useReducedMotion();

  // Scroll-driven parallax + fade as the hero leaves the viewport.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, reduced ? 1 : 0]);
  const auroraY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 200]);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 py-20 md:py-32 relative overflow-hidden"
    >
      {/* Aurora mesh backdrop — layers with the StarField for depth */}
      {!reduced && <motion.div className="aurora-mesh" style={{ y: auroraY }} aria-hidden />}

      {/* Readability scrim — soft radial vignette so text stays crisp over the stars */}
      <div className="hero-scrim" aria-hidden />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        style={{ y: contentY, opacity: contentOpacity }}
      >
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
              <AnimatedName name={data.name} reduced={reduced} />
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
              <motion.a
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
                whileHover={reduced ? undefined : { scale: 1.04, boxShadow: '0 0 32px var(--accent-glow)' }}
                whileTap={reduced ? undefined : { scale: 0.97 }}
                transition={SPRING_SOFT}
              >
                <ArrowDownIcon className="w-4 h-4" />
                View My Work
              </motion.a>

              <motion.a
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
                whileHover={reduced ? undefined : { scale: 1.04, borderColor: 'var(--accent)' }}
                whileTap={reduced ? undefined : { scale: 0.97 }}
                transition={SPRING_SOFT}
              >
                <DownloadIcon className="w-4 h-4" />
                Resume
              </motion.a>
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
      </motion.div>
    </div>
  );
};

export default HeroSection;
