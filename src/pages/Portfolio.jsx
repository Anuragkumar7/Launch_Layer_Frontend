import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/ui/SEO';
import PageHero from '../components/sections/PageHero';
import Button from '../components/ui/Button';
import Icon from '../components/icons/Icon';
import CTA from '../components/sections/CTA';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { PORTFOLIO_PROJECTS, PORTFOLIO_CATEGORIES } from '../data/siteData';

function ProjectCard({ project, onClick }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      exit={{ opacity: 0, scale: 0.95 }}
      className="glass rounded-2xl overflow-hidden cursor-pointer group"
      onClick={() => onClick(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick(project)}
    >
      <div className={`h-48 bg-gradient-to-br ${project.image} group-hover:scale-105 transition-transform duration-500`} />
      <div className="p-6">
        <span className="text-xs font-medium text-primary uppercase">{project.category}</span>
        <h3 className="font-display font-semibold text-lg mt-2 mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted text-sm line-clamp-2">{project.description}</p>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="glass-strong rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className="text-primary text-sm font-medium">{project.category}</span>
            <h2 className="font-display text-2xl font-bold mt-1">{project.title}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <Icon name="X" className="w-6 h-6" />
          </button>
        </div>

        <div className={`h-48 rounded-xl bg-gradient-to-br ${project.image} mb-6`} />
        <p className="text-muted mb-6 leading-relaxed">{project.description}</p>

        <div className="mb-6">
          <h3 className="font-semibold mb-3">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 glass rounded-full text-sm text-muted">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="font-semibold mb-3">Results Achieved</h3>
          <ul className="space-y-2">
            {project.results.map((result) => (
              <li key={result} className="flex items-center gap-2 text-muted text-sm">
                <Icon name="Check" className="w-4 h-4 text-emerald-400" />
                {result}
              </li>
            ))}
          </ul>
        </div>

        <Button to="/contact" onClick={onClose}>
          Start Your Project
        </Button>
      </motion.div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered =
    activeCategory === 'All'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <>
      <SEO
        title="Portfolio"
        description="Explore Launch Layer projects—websites, web apps, SaaS platforms, and e-commerce stores."
        path="/portfolio"
      />
      <PageHero
        badge="Portfolio"
        title="Projects That Drive Results"
        subtitle="A showcase of our work across industries and technology stacks."
      />

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {PORTFOLIO_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-primary text-white shadow-glow'
                    : 'glass text-muted hover:text-text'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={setSelectedProject}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      <CTA />
    </>
  );
}
