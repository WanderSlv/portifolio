import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Menu, X, Code2, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Tecnologias', href: '#tecnologias' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Trajetória', href: '#trajetoria' },
    { label: 'Terminal', href: '#terminal' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0e111a]/85 backdrop-blur-md border-b border-purple-900/30 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2 text-white font-bold text-lg tracking-wider group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-pink-500 p-[2px] shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform duration-200">
              <div className="w-full h-full bg-[#0e111a] rounded-[10px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-purple-400 group-hover:text-pink-400 transition-colors" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 group-hover:from-purple-300 group-hover:to-pink-300 transition-all">
                wander.silva
              </span>
              <span className="text-[10px] text-gray-400 tracking-widest font-mono">
                FULL STACK DEV
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 bg-[#151928]/80 border border-purple-900/20 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-gray-300 hover:text-purple-300 rounded-full hover:bg-purple-950/40 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social & CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white bg-[#151928] hover:bg-[#1f2438] border border-gray-800 hover:border-purple-500/50 rounded-lg transition-all"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-blue-400 bg-[#151928] hover:bg-[#1f2438] border border-gray-800 hover:border-blue-500/50 rounded-lg transition-all"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-lg shadow-md shadow-purple-600/30 hover:shadow-purple-500/50 hover:scale-[1.02] transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Vamos Conversar</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-400 hover:text-white bg-[#151928] border border-gray-800 rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e111a]/95 backdrop-blur-xl border-b border-purple-900/40 px-4 pt-3 pb-6 mt-2 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-gray-200 hover:text-purple-300 hover:bg-purple-950/40 rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-gray-800 flex items-center justify-between gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 text-sm text-gray-300 bg-[#151928] border border-gray-800 rounded-lg"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 text-sm text-gray-300 bg-[#151928] border border-gray-800 rounded-lg"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>
            </div>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 mt-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg shadow-md shadow-purple-600/30"
            >
              Vamos Conversar
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
