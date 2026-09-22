import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import {
  Mail,
  Copy,
  Check,
  Send,
  Sparkles,
  MapPin,
  Clock,
  MessageSquare
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contato de ${formData.name} via Portfólio`);
    const body = encodeURIComponent(
      `Olá Wander,\n\nMeu nome é ${formData.name} (${formData.email}).\n\nMensagem:\n${formData.message}`
    );
    window.open(`mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-[#090b10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-950/50 border border-pink-800/40 text-pink-400 text-xs font-mono uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Vamos nos Conectar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Pronto para Construir Soluções Incríveis?
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Estou disponível para projetos desafiadores, vagas de desenvolvimento de software e parcerias tecnológicas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Direct Contact Cards */}
          <div className="space-y-6">
            {/* Email Card with Copy */}
            <div className="p-6 rounded-2xl bg-[#121522] border border-gray-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-mono">E-mail Principal</div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-white font-bold hover:text-purple-300 transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={copyEmail}
                className="p-2.5 rounded-xl bg-[#181c2e] hover:bg-purple-600 text-gray-300 hover:text-white transition-all cursor-pointer shadow-md"
                title="Copiar e-mail"
              >
                {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-[#121522] border border-gray-800 hover:border-blue-500/50 flex items-center justify-between transition-all group shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <LinkedinIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-mono">Perfil Profissional</div>
                  <div className="text-white font-bold group-hover:text-blue-300 transition-colors">
                    linkedin.com/in/wander-silva-andrade
                  </div>
                </div>
              </div>
              <span className="text-xs text-blue-400 font-mono group-hover:translate-x-1 transition-transform">
                Conectar →
              </span>
            </a>

            {/* GitHub Card */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-[#121522] border border-gray-800 hover:border-purple-500/50 flex items-center justify-between transition-all group shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1a1f33] border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                  <GithubIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-mono">Repositórios & Código</div>
                  <div className="text-white font-bold group-hover:text-purple-300 transition-colors">
                    github.com/WanderSlv
                  </div>
                </div>
              </div>
              <span className="text-xs text-purple-400 font-mono group-hover:translate-x-1 transition-transform">
                Explorar →
              </span>
            </a>

            {/* Info Badges */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#121522]/80 border border-gray-800/80 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-purple-400 shrink-0" />
                <div className="text-xs text-gray-300">
                  <div className="font-semibold text-white">Localização</div>
                  <div>{PERSONAL_INFO.location}</div>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[#121522]/80 border border-gray-800/80 flex items-center gap-3">
                <Clock className="w-5 h-5 text-emerald-400 shrink-0" />
                <div className="text-xs text-gray-300">
                  <div className="font-semibold text-white">Status</div>
                  <div className="text-emerald-400 font-mono">Disponível</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="p-8 rounded-2xl bg-[#121522] border border-purple-900/30 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-400" />
              Enviar Mensagem Rápida
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Preencha os campos abaixo para iniciar uma conversa diretamente por e-mail.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-gray-400 mb-1">
                  Seu Nome
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Ana Souza"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#181c2e] border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-400 mb-1">
                  Seu E-mail
                </label>
                <input
                  type="email"
                  required
                  placeholder="Ex: ana@empresa.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#181c2e] border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-400 mb-1">
                  Mensagem ou Oportunidade
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Descreva seu projeto, proposta ou ideia..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#181c2e] border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30 hover:scale-[1.01] transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Mensagem</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
