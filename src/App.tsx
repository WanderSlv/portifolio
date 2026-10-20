import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  useEffect(() => {
    // Garantir que a página sempre inicie no topo absoluto
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0d13] text-[#e2e8f0] selection:bg-purple-500 selection:text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <InteractiveTerminal />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
