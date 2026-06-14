"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLinkIcon } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { useReducedMotion, useFinePointer } from '../lib/motion';

interface Project {
  title: string;
  techStack: readonly string[];
  description: string;
  link: { label: string; href: string };
  impact: string;
  category: string;
  featured: boolean;
}

interface ProjectsSectionProps {
  projects: readonly Project[];
}

const EASE = [0.16, 1, 0.3, 1] as const;

const CATEGORY_COLORS: Record<string, string> = {
  'System Programming': '#f97316',
  'DevOps': '#22d3ee',
  'Graphics Programming': '#a78bfa',
  'Personal Project': '#4fc3f7',
  'Security': '#f43f5e',
};

const PROJECT_TERMINALS: Record<string, { command: string; output: string[] }> = {
  'Pong — Multiplayer Platform': {
    command: 'docker compose up --build',
    output: ['✓ postgres:5432', '✓ nestjs api :3001', '✓ next.js :3000', '→ ready in 2.3s'],
  },
  'Sentra — Meeting Intelligence': {
    command: 'npm run electron:dev',
    output: ['✓ whisper model loaded', '✓ assemblyai connected', '✓ claude api ready', '→ listening...'],
  },
  'IRC Server': {
    command: './ircserv 6667 password',
    output: ['[IRC] binding to port 6667', '[IRC] server ready', '[IRC] waiting for clients...'],
  },
  'Inception': {
    command: 'docker compose up -d',
    output: ['✓ mariadb', '✓ wordpress', '✓ nginx + TLS', '→ https://localhost'],
  },
  'Cub3D': {
    command: 'make && ./cub3D map.cub',
    output: ['[cub3D] parsing map...', '[cub3D] init miniLibX', '[cub3D] rendering 60fps'],
  },
  'Sash — Unix Shell': {
    command: 'make && ./sash',
    output: ['sash$ ls -la | grep .c > files.txt', 'sash$ export PATH=$PATH:/usr/local', '→ signals & pipes ready'],
  },
  'CVE Vulnerability Analyzer': {
    command: 'python cve_analyzer.py',
    output: ['→ fetching NVD feed...', '✓ 248,193 CVEs loaded', '✓ filtered with pandas', '→ CVE-2024-XXXX ready'],
  },
};

function TerminalCard({ title }: { title: string }) {
  const data = PROJECT_TERMINALS[title] ?? { command: 'npm start', output: ['→ ready'] };
  const [typedCmd, setTypedCmd] = useState('');
  const [outputLines, setOutputLines] = useState<string[]>([]);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    setTypedCmd('');
    setOutputLines([]);
    const typing = setInterval(() => {
      i++;
      setTypedCmd(data.command.slice(0, i));
      if (i >= data.command.length) {
        clearInterval(typing);
        let lineIndex = 0;
        const outputInterval = setInterval(() => {
          if (lineIndex >= data.output.length) {
            clearInterval(outputInterval);
            return;
          }
          setOutputLines((prev) => [...prev, data.output[lineIndex]]);
          lineIndex++;
          if (lineIndex >= data.output.length) clearInterval(outputInterval);
        }, 180);
      }
    }, 35);
    return () => clearInterval(typing);
  }, [started, data.command, data.output]);

  return (
    <div
      ref={ref}
      style={{
        width: '100%',
        aspectRatio: '16/9',
        background: '#0a0a0f',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '8px 8px 0 0',
        overflow: 'hidden',
        fontFamily: 'ui-monospace, "Cascadia Code", "Fira Code", monospace',
        flexShrink: 0,
      }}
    >
      {/* title bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 12px', background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
        <span style={{ marginLeft: 8, fontSize: '0.68rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.06em' }}>
          {title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-')}
        </span>
      </div>
      {/* terminal body */}
      <div style={{ padding: '10px 14px', fontSize: '0.72rem', lineHeight: 1.75 }}>
        <div>
          <span style={{ color: '#28c840' }}>➜</span>
          <span style={{ color: '#4fc3f7', marginLeft: 6 }}>~/projects</span>
          <span style={{ color: 'rgba(255,255,255,0.3)', marginLeft: 6 }}>$</span>
          <span style={{ color: '#e2e8f0', marginLeft: 6 }}>{typedCmd}</span>
          {typedCmd.length < data.command.length && started && (
            <span style={{ display: 'inline-block', width: 6, height: '0.8em', background: '#4fc3f7', marginLeft: 1, verticalAlign: 'text-bottom', animation: 'termBlink 1s step-end infinite' }} />
          )}
        </div>
        {outputLines.filter(Boolean).map((line, i) => (
          <div
            key={i}
            style={{
              color: line.startsWith('✓') ? '#28c840' : line.startsWith('→') ? '#4fc3f7' : line.startsWith('[') ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.35)',
              paddingLeft: 16,
            }}
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const accentColor = CATEGORY_COLORS[project.category] || 'var(--accent)';
  const reduced = useReducedMotion();
  const finePointer = useFinePointer();
  const interactive = !reduced && finePointer;

  const cardRef = useRef<HTMLDivElement>(null);

  // Cursor position within the card (0..1), springed for smoothness.
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 220, damping: 26, mass: 0.7 });
  const sy = useSpring(py, { stiffness: 220, damping: 26, mass: 0.7 });

  // Map cursor position → subtle 3D tilt (degrees).
  const rotateY = useTransform(sx, [0, 1], [6, -6]);
  const rotateX = useTransform(sy, [0, 1], [-6, 6]);

  // Spotlight follows the raw pointer position; build the gradient string
  // from both axes via a single combined transform.
  const spotlight = useTransform(
    [px, py],
    ([x, y]: number[]) =>
      `radial-gradient(220px circle at ${x * 100}% ${y * 100}%, ${accentColor}22, transparent 70%)`
  );
  const [hovered, setHovered] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    px.set(0.5);
    py.set(0.5);
    setHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 28 }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: EASE }}
      className="relative flex flex-col overflow-hidden group"
      style={{
        background: 'var(--card-surface)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        rotateX: interactive ? rotateX : 0,
        rotateY: interactive ? rotateY : 0,
        transformPerspective: 900,
        borderColor: hovered ? accentColor : 'var(--border)',
        transition: 'border-color 0.25s ease',
        boxShadow: hovered
          ? `0 18px 50px -12px ${accentColor}40, 0 0 0 1px ${accentColor}30`
          : '0 12px 32px -16px rgba(0,0,0,0.6)',
      }}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      whileHover={interactive ? { y: -4 } : undefined}
    >
      {/* Cursor spotlight */}
      {interactive && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-20"
          style={{
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.3s ease',
            background: spotlight,
          }}
        />
      )}

      <TerminalCard title={project.title} />

      {/* Content */}
      <div className="flex flex-col flex-1 p-5" style={{ borderRadius: '0 0 8px 8px' }}>
        {project.featured && (
          <span className="text-xs font-mono uppercase tracking-widest mb-2 block" style={{ color: accentColor, letterSpacing: '0.12em' }}>
            ✦ Featured
          </span>
        )}
        <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--text-secondary)' }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-0.5 rounded font-mono"
              style={{ background: `${accentColor}15`, color: accentColor, border: `1px solid ${accentColor}30` }}
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 5 && (
            <span className="text-xs px-2 py-0.5" style={{ color: 'var(--text-muted)' }}>
              +{project.techStack.length - 5}
            </span>
          )}
        </div>

        <a
          href={project.link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm font-medium transition-colors"
          style={{ color: accentColor }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.75')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
        >
          <ExternalLinkIcon className="w-4 h-4" />
          {project.link.label}
        </a>
      </div>
    </motion.div>
  );
}

const FILTERS = ['All', 'Personal Project', 'System Programming', 'DevOps', 'Graphics Programming', 'Security'];

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const featured = projects.filter((p) => p.featured);
  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="py-20 px-4 sm:px-6 md:px-12" id="projects">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader title="Projects" index="04" />

        {/* Filter */}
        <motion.div
          className="flex flex-wrap gap-2 mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {FILTERS.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="px-4 py-1.5 rounded text-sm font-mono transition-all"
              style={{
                background: activeFilter === cat ? 'var(--accent)' : 'var(--surface)',
                color: activeFilter === cat ? 'var(--on-accent)' : 'var(--text-secondary)',
                border: `1px solid ${activeFilter === cat ? 'var(--accent)' : 'var(--border)'}`,
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectsSection;
