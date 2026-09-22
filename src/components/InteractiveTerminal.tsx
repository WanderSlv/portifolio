import React, { useState, useRef, useEffect } from 'react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import { Terminal as TerminalIcon, RotateCcw } from 'lucide-react';

interface HistoryItem {
  type: 'input' | 'output' | 'error' | 'success';
  text: string | React.ReactNode;
}

export const InteractiveTerminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      type: 'output',
      text: (
        <div>
          <p className="text-purple-400 font-bold">WanderOS AI-CLI v2.4.0</p>
          <p className="text-gray-400">Digite <span className="text-pink-400 font-semibold">help</span> para visualizar todos os comandos disponíveis.</p>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const raw = cmdStr.trim();
    if (!raw) return;

    const parts = raw.split(' ');
    const command = parts[0].toLowerCase();
    const arg = parts.slice(1).join(' ').toLowerCase();

    const newHistory: HistoryItem[] = [...history, { type: 'input', text: raw }];

    switch (command) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: (
            <div className="space-y-1 text-gray-300">
              <p className="text-purple-300 font-semibold mb-2">Comandos disponíveis:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 font-mono text-xs">
                <div><span className="text-pink-400">about</span> - Sobre Wander Silva</div>
                <div><span className="text-pink-400">skills</span> - Ferramentas e tecnologias utilizadas com IA</div>
                <div><span className="text-pink-400">projects</span> - Listar projetos em destaque</div>
                <div><span className="text-pink-400">contact</span> - Informações de contato direto</div>
                <div><span className="text-pink-400">sudo hire</span> - Conectar com Wander Silva 🎉</div>
                <div><span className="text-pink-400">clear</span> - Limpar o terminal</div>
                <div><span className="text-pink-400">whoami</span> - Exibir usuário atual</div>
                <div><span className="text-pink-400">matrix</span> - Efeito Matrix</div>
              </div>
            </div>
          ),
        });
        break;

      case 'about':
        newHistory.push({
          type: 'output',
          text: (
            <div className="text-gray-300 space-y-2">
              <p><span className="text-purple-400 font-bold">{PERSONAL_INFO.fullName}</span> — {PERSONAL_INFO.title}</p>
              <p className="text-gray-400 text-xs">{PERSONAL_INFO.bio}</p>
              <p className="text-xs text-purple-300">Localização: {PERSONAL_INFO.location}</p>
            </div>
          ),
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: (
            <div className="space-y-2 text-xs">
              <p className="text-purple-400 font-semibold">Tecnologias & Ferramentas Utilizadas com IA:</p>
              <p><span className="text-pink-400 font-bold">🤖 IA & Agentes:</span> Engenharia de Prompt, LLMs, Chatbots, YOLOv8, OpenCV, EasyOCR, Web Scraping</p>
              <p><span className="text-blue-400 font-bold">⚛️ Front-End:</span> React, TypeScript, Tailwind CSS, Tauri (Desktop)</p>
              <p><span className="text-green-400 font-bold">🗄️ Back-End & DB:</span> Node.js, Python, FastAPI, Supabase, PostgreSQL, Docker</p>
            </div>
          ),
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: (
            <div className="space-y-2 text-xs">
              <p className="text-purple-400 font-semibold">Projetos no Portfólio (Criados com IA):</p>
              {PROJECTS.map((p, i) => (
                <div key={i} className="pl-2 border-l border-purple-500/40">
                  <span className="text-white font-bold">{p.title}</span> — <span className="text-gray-400">{p.subtitle}</span>
                  <div className="text-purple-300">Stack: {p.tags.join(', ')}</div>
                </div>
              ))}
            </div>
          ),
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: (
            <div className="space-y-1 text-xs text-gray-300">
              <p>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-pink-400 underline">{PERSONAL_INFO.email}</a></p>
              <p>LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-blue-400 underline">{PERSONAL_INFO.linkedin}</a></p>
              <p>GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-purple-400 underline">{PERSONAL_INFO.github}</a></p>
            </div>
          ),
        });
        break;

      case 'sudo':
        if (arg === 'hire' || arg === 'hire me' || arg === 'contratar') {
          confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 },
            colors: ['#bd93f9', '#ff79c6', '#8be9fd', '#50fa7b'],
          });
          newHistory.push({
            type: 'success',
            text: (
              <div className="p-3 bg-purple-950/60 border border-purple-500/60 rounded-lg text-xs space-y-1">
                <p className="text-emerald-400 font-bold">🎉 CONEXÃO ESTABELECIDA!</p>
                <p className="text-gray-200">Wander Silva está pronto para aplicar IA em projetos, protótipos e automações.</p>
                <p className="text-purple-300">Envie um e-mail para <a href={`mailto:${PERSONAL_INFO.email}`} className="underline font-bold text-white">{PERSONAL_INFO.email}</a> ou mande uma mensagem no LinkedIn!</p>
              </div>
            ),
          });
        } else {
          newHistory.push({
            type: 'error',
            text: `[sudo] comando "${arg}" não reconhecido. Tente "sudo hire".`,
          });
        }
        break;

      case 'whoami':
        newHistory.push({
          type: 'output',
          text: 'visitante@wander-portfolio (Visitante / Recrutador / Parceiro)',
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'matrix':
        newHistory.push({
          type: 'output',
          text: (
            <p className="text-emerald-400 font-mono">
              01010111 01100001 01101110 01100100 01100101 01110010 00100000 01010011 01101001 01101100 01110110 01100001 🚀
            </p>
          ),
        });
        break;

      default:
        newHistory.push({
          type: 'error',
          text: `Comando não reconhecido: "${raw}". Digite "help" para ver os comandos.`,
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    }
  };

  return (
    <section id="terminal" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/50 border border-purple-800/40 text-purple-400 text-xs font-mono uppercase tracking-wider mb-4">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>Interactive CLI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            Terminal Interativo
          </h2>
          <p className="text-gray-400 text-sm">
            Experimente interagir com a linha de comando. Digite <code className="text-pink-400 bg-[#161a2b] px-1.5 py-0.5 rounded font-mono">help</code> ou <code className="text-pink-400 bg-[#161a2b] px-1.5 py-0.5 rounded font-mono">sudo hire</code>.
          </p>
        </div>

        {/* Terminal Window */}
        <div
          className="rounded-2xl bg-[#0e111a] border border-purple-900/40 shadow-2xl shadow-purple-950/30 overflow-hidden font-mono text-sm cursor-text"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Window Title Bar */}
          <div className="bg-[#161928] px-4 py-3 flex items-center justify-between border-b border-gray-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <span className="ml-2 text-xs text-gray-400">wander@ai-environment:~</span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setHistory([]);
              }}
              className="text-gray-400 hover:text-white text-xs flex items-center gap-1 cursor-pointer"
              title="Limpar terminal"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Limpar</span>
            </button>
          </div>

          {/* Terminal Screen Body */}
          <div className="p-4 sm:p-6 min-h-[280px] max-h-[380px] overflow-y-auto space-y-3">
            {history.map((item, idx) => (
              <div key={idx}>
                {item.type === 'input' && (
                  <div className="flex items-center gap-2 text-purple-300">
                    <span className="text-emerald-400">wander@ai:~$</span>
                    <span>{item.text}</span>
                  </div>
                )}
                {item.type === 'output' && <div>{item.text}</div>}
                {item.type === 'success' && <div>{item.text}</div>}
                {item.type === 'error' && (
                  <div className="text-red-400">{item.text}</div>
                )}
              </div>
            ))}

            {/* Input Line */}
            <div className="flex items-center gap-2 text-purple-300 pt-1">
              <span className="text-emerald-400 shrink-0">wander@ai:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="digite um comando..."
                className="flex-1 bg-transparent border-none outline-none text-gray-100 placeholder-gray-600 font-mono text-sm"
                autoComplete="off"
                spellCheck="false"
              />
            </div>
            <div ref={terminalEndRef} />
          </div>
        </div>
      </div>
    </section>
  );
};
