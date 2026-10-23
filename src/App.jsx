import React from 'react';

function App() {
  return (
    <div className="min-h-screen font-sans bg-slate-900 text-slate-200">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-6 border-b border-slate-800 bg-slate-900/90 backdrop-blur fixed w-full z-10 top-0">
        <h1 className="text-2xl font-bold text-emerald-400">Rodrigo-hckr</h1>
        <div className="space-x-6 hidden md:flex text-sm font-medium">
          <a href="#about" className="hover:text-emerald-400 transition">About</a>
          <a href="#projects" className="hover:text-emerald-400 transition">Projects</a>
          <a href="#roadmap" className="hover:text-emerald-400 transition">Journey</a>
        </div>
        <a href="https://github.com/Rodrigo-hckr" target="_blank" rel="noreferrer" className="bg-emerald-500 text-slate-900 px-4 py-2 rounded font-bold hover:bg-emerald-400 transition text-sm">
          GitHub
        </a>
      </nav>

      {/* HERO SECTION CON FOTO */}
      <header className="pt-32 pb-20 px-8 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 min-h-screen">
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-emerald-400 font-mono mb-2 text-sm">Hi, my name is</p>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 text-white">
            Rodrigo Moguel
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-400">
            I build and break AI systems.
          </h3>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            Ethical Hacker transitioning into <span className="text-emerald-400">AI Security Engineering</span> & LLM Red Teaming. Focused on securing artificial intelligence pipelines and understanding adversarial machine learning.
          </p>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a href="#projects" className="bg-emerald-500 text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-emerald-400 transition">
              View My Work
            </a>
            <a href="#roadmap" className="border border-emerald-500 text-emerald-400 px-6 py-3 rounded-lg font-bold hover:bg-emerald-500 hover:text-slate-900 transition">
              My Roadmap
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          {/* Contenedor de la foto con efecto */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-emerald-500 p-2">
            <img
              src={`${import.meta.env.BASE_URL}foto-perfil.jpg`}
              alt="Rodrigo Moguel"
              className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition duration-500"
            />
            <div className="absolute inset-0 rounded-full border border-emerald-400 animate-pulse opacity-50 pointer-events-none"></div>
          </div>
        </div>
      </header>

      {/* ABOUT ME SECTION */}
      <section id="about" className="py-20 px-8 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-8 text-white flex items-center">
          <span className="text-emerald-400 mr-2">01.</span> About Me
        </h3>
        <div className="text-slate-400 space-y-4 text-lg leading-relaxed">
          <p>
            Hello! I'm Rodrigo, a cybersecurity enthusiast with a deep passion for offensive security and artificial intelligence. My journey started in traditional Ethical Hacking (CTFs, Kali Linux, Python scripting), but I quickly realized the future lies in securing AI.
          </p>
          <p>
            Currently, I'm bridging the gap between my pentesting background and Machine Learning. I believe that to truly defend an AI, you must know how to break it. That's why I focus my studies on LLM security, prompt injection, and adversarial ML.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul className="grid grid-cols-2 gap-2 font-mono text-sm mt-4">
            <li className="flex items-center"><span className="text-emerald-400 mr-2">▹</span> Python 3.11+</li>
            <li className="flex items-center"><span className="text-emerald-400 mr-2">▹</span> Kali Linux & Bash</li>
            <li className="flex items-center"><span className="text-emerald-400 mr-2">▹</span> PyTorch & scikit-learn</li>
            <li className="flex items-center"><span className="text-emerald-400 mr-2">▹</span> Garak & PyRIT</li>
          </ul>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20 px-8 bg-slate-800/40">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-white flex items-center">
             <span className="text-emerald-400 mr-2">02.</span> Featured Projects
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Proyecto 1 (Real) */}
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:-translate-y-2 hover:border-emerald-400 transition duration-300 group">
              <div className="text-emerald-400 mb-4 text-3xl">🐍</div>
              <h4 className="text-2xl font-bold mb-3 text-white group-hover:text-emerald-400 transition">Async Port Scanner</h4>
              <p className="text-slate-400 mb-6 h-24">
                Modern Python tool using asyncio to scan ports efficiently. Refactored from legacy sequential code to a concurrent model.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs bg-slate-700 text-emerald-300 px-3 py-1 rounded-full font-mono">Python</span>
                <span className="text-xs bg-slate-700 text-emerald-300 px-3 py-1 rounded-full font-mono">Asyncio</span>
                <span className="text-xs bg-slate-700 text-emerald-300 px-3 py-1 rounded-full font-mono">Networking</span>
              </div>
              <a href="https://github.com/Rodrigo-hckr/portfolio-ai-security/tree/main/projects/port-scanner" target="_blank" rel="noreferrer" className="text-emerald-400 font-semibold hover:underline">
                View Source Code →
              </a>
            </div>

            {/* Proyecto 2 (Placeholder) */}
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 opacity-60 relative">
              <div className="absolute top-4 right-4 bg-slate-700 text-xs px-2 py-1 rounded text-slate-300 font-mono">WIP</div>
              <div className="text-slate-400 mb-4 text-3xl">🤖</div>
              <h4 className="text-2xl font-bold mb-3 text-slate-300">AI Log Analyzer</h4>
              <p className="text-slate-500 mb-6 h-24">
                Defensive tool using local LLMs to summarize security anomalies and detect patterns in system logs.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs bg-slate-800 text-slate-400 px-3 py-1 rounded-full border border-slate-700 font-mono">Python</span>
                <span className="text-xs bg-slate-800 text-slate-400 px-3 py-1 rounded-full border border-slate-700 font-mono">Pandas</span>
              </div>
            </div>

            {/* Proyecto 3 (Placeholder) */}
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 opacity-60 relative">
              <div className="absolute top-4 right-4 bg-slate-700 text-xs px-2 py-1 rounded text-slate-300 font-mono">WIP</div>
              <div className="text-slate-400 mb-4 text-3xl">🛡️</div>
              <h4 className="text-2xl font-bold mb-3 text-slate-300">Threat Model ATLAS</h4>
              <p className="text-slate-500 mb-6 h-24">
                Threat modeling a RAG application using MITRE ATLAS framework to identify AI-specific vulnerabilities.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs bg-slate-800 text-slate-400 px-3 py-1 rounded-full border border-slate-700 font-mono">MITRE ATLAS</span>
                <span className="text-xs bg-slate-800 text-slate-400 px-3 py-1 rounded-full border border-slate-700 font-mono">RAG</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP & UPDATES SECTION */}
      <section id="roadmap" className="py-20 px-8 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-4 text-white flex items-center">
          <span className="text-emerald-400 mr-2">03.</span> Learning Journey
        </h3>
        <p className="text-slate-400 mb-12">Documenting my transition from Ethical Hacker to AI Security Engineer.</p>
        
        <div className="space-y-12 border-l-2 border-slate-700 pl-8 ml-4">
          
          <div className="relative">
            <div className="absolute w-6 h-6 bg-emerald-500 rounded-full -left-[41px] top-1 border-4 border-slate-900 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
            <span className="text-emerald-400 font-mono text-sm mb-1 block">October 2026</span>
            <h4 className="text-2xl font-bold text-white mb-2">First Project Deployed</h4>
            <p className="text-slate-400 text-lg">
              Successfully refactored a legacy port scanner to use modern Python 3.11+ with asyncio and type hints. Documented the engineering decisions and deployed to GitHub.
            </p>
          </div>

          <div className="relative">
            <div className="absolute w-6 h-6 bg-slate-600 rounded-full -left-[41px] top-1 border-4 border-slate-900"></div>
            <span className="text-slate-500 font-mono text-sm mb-1 block">Next Step</span>
            <h4 className="text-2xl font-bold text-slate-300 mb-2">Diving into LLM Security</h4>
            <p className="text-slate-400 text-lg">
              Currently studying OWASP Top 10 for LLMs. Setting up a local Ollama instance to begin testing prompt injections using Garak.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 border-t border-slate-800 text-slate-500 font-mono text-sm">
        <p>Designed & Built by Rodrigo-hckr</p>
      </footer>
    </div>
  );
}

export default App;
