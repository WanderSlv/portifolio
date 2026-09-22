import React, { useEffect } from 'react';
import type { Project } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import { X, ExternalLink, Check, Layers, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#121522] border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-950/50 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#181c2e] text-gray-400 hover:text-white hover:bg-gray-700 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300">
            {project.category}
          </span>
          {project.badge && (
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              {project.badge}
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-purple-300 font-medium text-sm sm:text-base mb-6">
          {project.subtitle}
        </p>

        {/* Long Description */}
        <div className="prose prose-invert max-w-none mb-6 text-gray-300 text-sm sm:text-base leading-relaxed">
          <p>{project.longDescription}</p>
        </div>

        {/* Stats Grid if available */}
        {project.stats && (
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-[#161a2c] border border-gray-800">
            {project.stats.map((st, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-xs text-gray-400 font-mono">{st.label}</span>
                <span className="text-sm font-semibold text-white">{st.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-sm font-mono text-gray-300 uppercase tracking-wider mb-3 flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400" />
            Recursos & Funcionalidades
          </h4>
          <ul className="space-y-2">
            {project.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack List */}
        <div className="mb-8">
          <h4 className="text-sm font-mono text-gray-300 uppercase tracking-wider mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-purple-400" />
            Tecnologias Utilizadas
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-[#1a1f33] border border-gray-700 text-xs font-mono text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-800">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium transition-all shadow-md shadow-purple-600/30"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Ver Código no GitHub</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all shadow-md shadow-indigo-600/30"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Acessar Projeto Online</span>
            </a>
          )}
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#1a1f33] hover:bg-gray-700 text-gray-300 text-sm font-medium transition-colors ml-auto cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
