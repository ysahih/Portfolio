"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLinkIcon, GithubIcon, CodeIcon } from 'lucide-react';
import SectionHeader from './SectionHeader';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  link?: {
    href: string;
    label?: string;
  };
  impact?: string;
  category?: string;
  featured?: boolean;
}

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Extract unique categories for filter
  const categories = Array.from(
    new Set(projects.map(project => project.category).filter(Boolean))
  );

  // Filter projects based on category
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  // Generate a random image for each project (for demo purposes)
  // In a real project, you'd use actual project images
  const getProjectImage = (title: string) => {
    const seed = title.charCodeAt(0) + title.length;
    return `https://picsum.photos/seed/${seed}/600/400`;
  };

  return (
    <div className="py-20 px-4 sm:px-6 md:px-12 overflow-hidden" id="projects">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          title="My Projects"
          subtitle="A showcase of my technical projects and applications, demonstrating my skills and expertise in various technologies."
        />

        {/* Filter controls */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {['All', ...categories].map((cat, index) => (
            <motion.button
              key={index}
              className="px-4 py-2 rounded text-sm font-mono transition-all duration-200"
              style={{
                background: activeFilter === cat ? 'var(--accent)' : 'var(--surface)',
                color: activeFilter === cat ? '#070710' : 'var(--text-secondary)',
                border: `1px solid ${activeFilter === cat ? 'var(--accent)' : 'var(--border)'}`,
              }}
              onClick={() => setActiveFilter(cat as string)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat || 'All Projects'}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={activeFilter}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              layout
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="rounded-xl overflow-hidden"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
              whileHover={{ y: -8, borderColor: 'var(--accent)' }}
              onHoverStart={() => setHoveredProject(project.title)}
              onHoverEnd={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={getProjectImage(project.title)} 
                  alt={`${project.title} - Project Screenshot`}
                  className="w-full h-full object-cover transition-transform duration-500"
                  loading="lazy"
                  width={600}
                  height={400}
                  style={{ transform: hoveredProject === project.title ? 'scale(1.1)' : 'scale(1)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-5">
                {project.featured && (
                  <div className="mb-3">
                    <span className="px-2 py-1 text-xs rounded font-mono" style={{ background: 'rgba(79,195,247,0.1)', color: 'var(--accent)', border: '1px solid rgba(79,195,247,0.2)' }}>
                      Featured
                    </span>
                  </div>
                )}
                
                <p className="mb-4 line-clamp-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {project.description}
                </p>
                
                {project.impact && (
                  <div className="mb-4 p-3 rounded" style={{ background: 'rgba(79,195,247,0.06)', border: '1px solid rgba(79,195,247,0.15)' }}>
                    <p className="text-sm font-medium" style={{ color: 'var(--accent)' }}>
                      🎯 {project.impact}
                    </p>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, ti) => (
                    <span key={ti} className="px-2 py-1 text-xs rounded font-mono" style={{ background: 'var(--border)', color: 'var(--text-muted)' }}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <button 
                    className="font-medium flex items-center gap-1 text-sm"
                    style={{ color: 'var(--accent)' }}
                    onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                  >
                    <CodeIcon className="w-4 h-4" />
                    View Details
                  </button>
                  {project.link && (
                    <a 
                      href={project.link.href}
                      target={project.link.href.startsWith('/') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm transition-colors"
                      style={{ color: 'var(--text-muted)' }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                      <span className="text-xs">{project.link.label}</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              style={{ background: 'rgba(0,0,0,0.7)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div 
                className="rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                style={{ background: '#0d0d1a', border: '1px solid var(--border)' }}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-64 md:h-80">
                  <img src={getProjectImage(selectedProject.title)} alt={selectedProject.title} className="w-full h-full object-cover" loading="lazy" width={800} height={400} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-white text-2xl md:text-3xl font-bold">{selectedProject.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedProject.techStack.map((tech, ti) => (
                        <span key={ti} className="px-2 py-1 text-xs bg-white/20 text-white rounded-full">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>{selectedProject.description}</p>
                  {selectedProject.link && (
                    <div className="flex justify-end">
                      <a href={selectedProject.link.href} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium" style={{ background: 'var(--accent)', color: '#070710' }}>
                        <ExternalLinkIcon className="w-4 h-4" />
                        {selectedProject.link.label || 'View Project'}
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectsSection;