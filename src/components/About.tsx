import React from 'react';
import {
  Layers,
  Bot,
  Zap,
  Sparkles,
  Workflow
} from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Bot,
      title: 'Desenvolvimento Potencializado por IA',
      description:
        'Criação acelerada de software utilizando inteligência artificial generativa, agentes e prompts estruturados para modelar regras, interfaces e bancos de dados.',
      color: 'from-purple-500/20 to-pink-500/10 border-purple-500/30 text-purple-400',
    },
    {
      icon: Zap,
      title: 'Automações & Web Crawlers',
      description:
        'Desenvolvimento de robôs e scripts para monitoramento de tarifas aéreas, ingressos em tempo real e rotinas que poupam tempo e aumentam a produtividade.',
      color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400',
    },
    {
      icon: Layers,
      title: 'Sistemas Web, Desktop & Chatbots',
      description:
        'Construção de aplicações completas como plataformas comerciais (AutoBot), softwares corporativos com Tauri e painéis com React e Tailwind CSS.',
      color: 'from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-blue-400',
    },
    {
      icon: Workflow,
      title: 'Visão Computacional & IA Aplicada',
      description:
        'Implementação assistida por IA de modelos de detecção veicular (YOLOv8) e OCR de placas (EasyOCR) integrados a APIs de consulta.',
      color: 'from-orange-500/20 to-amber-500/10 border-orange-500/30 text-orange-400',
    },
  ];

  const stats = [
    { value: '8+', label: 'Projetos Funcionais Criados com IA' },
    { value: '100%', label: 'Foco em Resolver Problemas Reais' },
    { value: 'AI First', label: 'Prototipagem Ágil & Inovação' },
    { value: 'Contínuo', label: 'Evolução e Aprendizado' },
  ];

  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/50 border border-purple-800/40 text-purple-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Abordagem & Filosofia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Como Transformo Ideias em Soluções
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Utilizo a Inteligência Artificial como uma parceira poderosa para prototipar, programar e validar soluções digitais que resolvem dores reais de forma eficiente.
          </p>
        </div>

        {/* Highlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 sm:p-8 rounded-2xl bg-[#121522]/90 border border-gray-800/80 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/10 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#121522] via-[#161a2e] to-[#121522] border border-purple-900/30 shadow-xl">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-mono mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
