"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLinkIcon } from 'lucide-react';
import SectionHeader from './SectionHeader';

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
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const accentColor = CATEGORY_COLORS[project.category] || 'var(--accent)';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 28 }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: EASE }}
      className="flex flex-col rounded-xl overflow-hidden group"
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
      }}
      whileHover={{ y: -4, borderColor: accentColor } as any}
    >
      {/* Card visual header */}
      <div
        className="relative h-40 flex flex-col items-start justify-end p-5 overflow-hidden"
        style={{
          background: 'var(--surface)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(${accentColor}22 1px, transparent 1px), linear-gradient(90deg, ${accentColor}22 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
        {/* Glow */}
        <div
          className="absolute top-0 right-0 w-32 h-32 blur-3xl opacity-20"
          style={{ background: accentColor }}
        />

        <div className="relative z-10 w-full">
          {project.featured && (
            <span
              className="text-xs font-mono uppercase tracking-widest mb-2 block"
              style={{ color: accentColor, letterSpacing: '0.12em' }}
            >
              ✦ Featured
            </span>
          )}
          <h3
            className="text-lg font-bold leading-tight"
            style={{ color: 'var(--text-primary)', fontFamily: 'monospace' }}
          >
            {project.title}
          </h3>
          <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
            {project.category}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
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

const FILTERS = ['All', 'Personal Project', 'System Programming', 'DevOps', 'Graphics Programming'];

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const featured = projects.filter((p) => p.featured);
  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="py-20 px-4 sm:px-6 md:px-12" id="projects">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader title="Projects" />

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
