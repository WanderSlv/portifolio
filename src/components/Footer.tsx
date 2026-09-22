import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Mail, ArrowUp, Bot } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080c] border-t border-gray-900 py-12 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2 font-mono font-bold text-white text-base">
              <Bot className="w-5 h-5 text-purple-400" />
              <span>{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-xs text-gray-400">
              Criação de Soluções, Automações & Sistemas com Inteligência Artificial
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#121522] hover:bg-[#1a1f33] text-gray-400 hover:text-white border border-gray-800 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#121522] hover:bg-[#1a1f33] text-gray-400 hover:text-blue-400 border border-gray-800 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-full bg-[#121522] hover:bg-[#1a1f33] text-gray-400 hover:text-purple-400 border border-gray-800 transition-colors"
              title="E-mail"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Scroll to Top */}
          <div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#121522] hover:bg-[#1a1f33] border border-gray-800 text-xs font-mono text-gray-300 hover:text-purple-300 transition-all cursor-pointer"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 pt-8 border-t border-gray-900/80 text-center text-xs text-gray-400 flex flex-col sm:flex-row items-center justify-center gap-2">
          <span>© {new Date().getFullYear()} {PERSONAL_INFO.fullName}. Todos os direitos reservados.</span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1">
            Projetado com React, TypeScript, Tailwind CSS & IA
          </span>
        </div>
      </div>
    </footer>
  );
};
