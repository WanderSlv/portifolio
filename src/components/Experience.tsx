import React from 'react';
import { TIMELINE_DATA } from '../data/portfolioData';
import { GraduationCap, Briefcase, Award, Calendar, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="trajetoria" className="py-24 bg-[#090b10] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/50 border border-emerald-800/40 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Educação & Carreira</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Trajetória & Especializações
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            A união entre fundamentos acadêmicos em tecnologia e evolução constante em arquitetura de software moderna.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-purple-900/40 ml-4 sm:ml-8 space-y-12">
          {TIMELINE_DATA.map((item, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Marker Icon */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#121522] border-2 border-purple-500 group-hover:border-pink-400 flex items-center justify-center transition-colors shadow-lg shadow-purple-950/80">
                {item.type === 'academic' ? (
                  <GraduationCap className="w-4 h-4 text-purple-400" />
                ) : item.type === 'course' ? (
                  <Award className="w-4 h-4 text-amber-400" />
                ) : (
                  <Briefcase className="w-4 h-4 text-emerald-400" />
                )}
              </div>

              {/* Timeline Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#121522] border border-gray-800/90 group-hover:border-purple-500/40 transition-all duration-300 shadow-lg">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.year}</span>
                  </div>
                  {item.location && (
                    <div className="flex items-center gap-1 text-xs font-mono text-gray-400">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <h4 className="text-sm font-medium text-purple-400/90 mb-4">
                  {item.institution}
                </h4>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((sk, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md bg-[#161a2b] border border-gray-700/60 text-xs font-mono text-gray-300"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
