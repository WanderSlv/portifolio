import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import {
  ArrowRight,
  Terminal,
  Sparkles
} from 'lucide-react';

const TYPING_PHRASES = [
  'Desenvolvedor Full Stack',
  'Java • Spring Boot • APIs RESTful',
  'TypeScript • React • Next.js',
  'Python • Automações • Visão IA',
  'Construindo Soluções Escaláveis',
];

export const Hero: React.FC = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = TYPING_PHRASES[currentPhraseIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
        }
      }, 35);
    } else {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
        }
      }, 70);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex]);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Decorative Grids & Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/25 via-[#0b0d13] to-[#0b0d13] -z-10" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-purple-600/15 to-pink-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono mb-8 shadow-sm backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-4" />
          <span>{PERSONAL_INFO.status}</span>
        </div>

        {/* Profile Avatar & Ring */}
        <div className="relative inline-block mb-6">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-purple-500 via-indigo-500 to-pink-500 shadow-xl shadow-purple-500/25 animate-float mx-auto">
            <img
              src={PERSONAL_INFO.avatarUrl}
              alt={PERSONAL_INFO.name}
              className="w-full h-full rounded-full object-cover bg-gray-900 border-2 border-[#0b0d13]"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-[#151928] border border-purple-500/40 p-1.5 rounded-full text-purple-400 shadow-md">
            <Sparkles className="w-4 h-4 text-yellow-400" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-4">
          Olá, eu sou{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
            {PERSONAL_INFO.name}
          </span>
        </h1>

        {/* Dynamic Typewriter */}
        <div className="h-10 sm:h-12 flex items-center justify-center mb-6">
          <p className="font-mono text-lg sm:text-2xl text-purple-300 font-semibold flex items-center">
            <span>&gt; {currentText}</span>
            <span className="w-2 h-6 bg-purple-400 inline-block ml-1 animate-pulse" />
          </p>
        </div>

        {/* Bio summary */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-300 mb-8 leading-relaxed font-normal">
          Desenvolvedor focado em transformar desafios em sistemas funcionais, seguros e elegantes. Especialista no ecossistema <span className="text-purple-300 font-semibold">Java / Spring Boot</span>, <span className="text-blue-300 font-semibold">React & TypeScript</span>, além de automações inteligentes e IA com <span className="text-yellow-300 font-semibold">Python</span>.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-purple-600/30 hover:shadow-purple-500/50 hover:scale-105 transition-all"
          >
            <span>Ver Projetos em Produção</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 text-base font-semibold text-gray-200 bg-[#151928] hover:bg-[#1f2438] border border-gray-700 hover:border-blue-500/50 rounded-xl transition-all shadow-md"
          >
            <LinkedinIcon className="w-4 h-4 text-blue-400" />
            <span>LinkedIn</span>
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 text-base font-semibold text-gray-200 bg-[#151928] hover:bg-[#1f2438] border border-gray-700 hover:border-purple-500/50 rounded-xl transition-all shadow-md"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href="#terminal"
            className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-mono text-purple-300 bg-purple-950/30 hover:bg-purple-900/40 border border-purple-800/40 rounded-xl transition-all"
          >
            <Terminal className="w-4 h-4" />
            <span>Terminal CLI</span>
          </a>
        </div>

        {/* Quick Tech Badges */}
        <div className="pt-6 border-t border-gray-800/60 flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-gray-400">
          <span className="text-gray-400 font-semibold">Stack Principal:</span>
          {['Java 21', 'Spring Boot 3', 'TypeScript', 'React 18', 'Node.js', 'Python', 'PostgreSQL', 'Docker', 'Tauri'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-md bg-[#131622] border border-gray-800 text-gray-300 hover:border-purple-500/40 hover:text-purple-300 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
