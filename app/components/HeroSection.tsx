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
    availability: string;
    headline: string;
    heroStats: readonly { value: string; label: string }[];
    avatarUrl: string;
    contact: { email: string };
  };
}

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
      className="hero-name-wrap justify-center md:justify-start"
      style={{
        display: 'inline-flex',
        flexWrap: 'wrap',
        gap: '0 0.22em',
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
              className="mb-4"
              style={{
                fontSize: 'clamp(3.75rem, 8.5vw, 7.5rem)',
                fontFamily: 'var(--font-display), sans-serif',
                fontWeight: 800,
                lineHeight: 0.92,
                letterSpacing: '-0.035em',
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
              {data.title}
            </motion.p>

            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full text-xs md:text-sm font-mono"
              style={{ color: 'var(--accent)', background: 'var(--accent-tint)', border: '1px solid var(--accent-tint-border)' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6, ease: EASE }}
            >
              <span className="relative flex h-2 w-2 flex-shrink-0" aria-hidden>
                {!reduced && <span className="absolute inline-flex h-full w-full rounded-full animate-ping" style={{ background: 'var(--accent)', opacity: 0.6 }} />}
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: 'var(--accent)' }} />
              </span>
              {data.availability}
            </motion.div>

            {/* Proof first: the numbers that back the title. Rendered visible
                from the server (y-only motion) so they don't delay first paint. */}
            <motion.dl
              className="flex justify-center md:justify-start gap-8 md:gap-10 mb-8"
              initial={{ y: 16 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.9, duration: 0.6, ease: EASE }}
            >
              {data.heroStats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse text-center md:text-left">
                  <dt className="text-xs md:text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>{stat.label}</dt>
                  <dd
                    className="text-3xl md:text-4xl font-bold leading-none"
                    style={{ color: 'var(--accent)', fontFamily: 'var(--font-display), sans-serif', letterSpacing: '-0.02em' }}
                  >
                    {stat.value}
                  </dd>
                </div>
              ))}
            </motion.dl>

            <motion.hr
              style={{ borderColor: 'var(--border)', transformOrigin: 'left', marginBottom: '2rem' }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.1, duration: 0.8, ease: EASE }}
            />

            <motion.p
              className="mb-8 text-base md:text-lg max-w-xl"
              style={{ color: 'var(--text-secondary)' }}
              initial={{ y: 16 }}
              animate={{ y: 0 }}
              transition={{ delay: 1.0, duration: 0.6, ease: EASE }}
            >
              {data.headline}
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
