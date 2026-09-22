import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Server, Layout, Database, Cpu, Bot } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Server,
  Layout,
  Database,
  Cpu,
};

export const TechStack: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="tecnologias" className="py-24 bg-[#090b10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/50 border border-blue-800/40 text-blue-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Bot className="w-3.5 h-3.5" />
            <span>Ferramentas & Tecnologias</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Tecnologias que Utilizo com IA
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Ecossistema de linguagens, frameworks e ferramentas que orquestro através de Inteligência Artificial para construir sistemas e automações.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = iconMap[cat.iconName] || Server;
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30 scale-105'
                    : 'bg-[#141726] text-gray-400 hover:text-white hover:bg-[#1a1f33] border border-gray-800/80'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES[activeTab].skills.map((skill, sIdx) => (
            <div
              key={sIdx}
              className="p-6 rounded-2xl bg-[#121522] border border-gray-800/80 hover:border-purple-500/40 transition-all duration-200 hover:shadow-lg hover:shadow-purple-900/10 group"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                  {skill.name}
                </h4>
                <span
                  className={`text-xs px-2.5 py-0.5 rounded-full font-mono font-medium ${
                    skill.level === 'Prático'
                      ? 'bg-purple-950/80 text-purple-300 border border-purple-600/50'
                      : skill.level === 'Aplicado com IA'
                      ? 'bg-blue-950/80 text-blue-300 border border-blue-600/50'
                      : 'bg-emerald-950/80 text-emerald-300 border border-emerald-600/50'
                  }`}
                >
                  {skill.level}
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* All Skills Cloud Overview */}
        <div className="mt-16 p-8 rounded-2xl bg-[#121522]/60 border border-gray-800 text-center">
          <h4 className="text-sm font-mono text-gray-400 uppercase tracking-wider mb-6">
            Visão Geral de Ferramentas & Stacks Experimentadas
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {[
              'Engenharia de Prompt', 'LLMs & Agentes IA', 'TypeScript', 'React 18',
              'Node.js', 'Express.js', 'Python', 'FastAPI', 'YOLOv8', 'OpenCV',
              'EasyOCR', 'Tauri Desktop', 'Supabase', 'PostgreSQL', 'Prisma ORM',
              'Docker', 'Web Scraping', 'Git & GitHub', 'Tailwind CSS', 'Vercel'
            ].map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-lg bg-[#181c2e] border border-gray-700/60 text-gray-300 text-xs font-mono hover:bg-purple-950 hover:text-purple-300 hover:border-purple-500/50 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
