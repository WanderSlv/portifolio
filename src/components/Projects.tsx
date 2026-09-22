import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './Icons';
import {
  FolderGit2,
  Sparkles,
  Search,
  ArrowUpRight,
  Info
} from 'lucide-react';

const CATEGORIES = ['Todos', 'Sistemas & Web', 'Automações & Bots', 'Visão Computacional & IA', 'Desktop'] as const;

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((proj) => {
      const matchesCat =
        selectedCategory === 'Todos' || proj.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        proj.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="projetos" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/50 border border-purple-800/40 text-purple-400 text-xs font-mono uppercase tracking-wider mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Portfólio Prático</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Projetos & Aplicações Criadas com IA
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Aplicações funcionais, MVPs e automações construídas aliando direcionamento humano e velocidade de Inteligência Artificial.
          </p>
        </div>

        {/* Filters & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/30 font-semibold'
                    : 'bg-[#121522] text-gray-400 hover:text-white border border-gray-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por tag, ferramenta ou nome..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121522] border border-gray-800 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-[#121522]/40 rounded-2xl border border-gray-800">
            <p className="text-gray-400 font-mono text-sm">
              Nenhum projeto encontrado para o filtro selecionado.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col justify-between rounded-2xl bg-[#121522] border border-gray-800/90 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/10 hover:-translate-y-1.5 p-6 group"
              >
                <div>
                  {/* Card Header: Category & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#181c2e] text-purple-300 border border-purple-900/40">
                      {project.category}
                    </span>
                    {project.badge && (
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-emerald-950/80 text-emerald-300 border border-emerald-600/40 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        {project.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-purple-300/80 font-medium mb-3">
                    {project.subtitle}
                  </p>

                  {/* Short Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md bg-[#161a2b] border border-gray-800 text-[11px] font-mono text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-gray-800/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 group-hover:underline cursor-pointer"
                  >
                    <Info className="w-4 h-4" />
                    <span>Ver Detalhes</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#181c2e] hover:bg-purple-600 text-gray-300 hover:text-white transition-colors"
                        title="Ver Código no GitHub"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#181c2e] hover:bg-indigo-600 text-gray-300 hover:text-white transition-colors"
                        title="Ver Projeto Online"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
