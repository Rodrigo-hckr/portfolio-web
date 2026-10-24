import React from 'react';

function App() {
  return (
    <div className="min-h-screen font-sans bg-slate-900 text-slate-200">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-6 border-b border-slate-800 bg-slate-900/90 backdrop-blur fixed w-full z-10 top-0">
        <h1 className="text-2xl font-bold text-emerald-400">Rodrigo-hckr</h1>
        <div className="space-x-6 hidden md:flex text-sm font-medium">
          <a href="#about" className="hover:text-emerald-400 transition">About</a>
          <a href="#foundations" className="hover:text-emerald-400 transition">Foundations</a>
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

      {/* FOUNDATIONS SECTION (AI SECURITY MATH) */}
      <section id="foundations" className="py-20 px-8 bg-slate-800/20">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-4 text-white flex items-center">
            <span className="text-emerald-400 mr-2">02.</span> Foundations of AI Security
          </h3>
          <p className="text-slate-400 mb-10 text-lg">
            Understanding the math behind the machine. To defend AI, you must understand how it processes data.
          </p>

          {/* Article Card */}
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 md:p-12">
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-6">
              🧮 Math for AI Security: The Linear Algebra behind Cybersecurity
            </h4>
            
            <div className="prose prose-invert prose-emerald max-w-none text-slate-300">
              <p className="mb-4">
                When we think of an Ethical Hacker, we picture someone typing commands in Kali Linux or analyzing traffic in Wireshark. However, when we transition into <strong>Artificial Intelligence (AI)</strong>, the rules change. To protect an AI model, we need to understand <em>how the machine thinks</em>.
              </p>
              <p className="mb-8">
                Machines don't think in commands; they think in <strong>numbers and matrices</strong>. This is where <strong>Linear Algebra</strong> comes in.
              </p>

              <h5 className="text-xl font-bold text-emerald-400 mt-6 mb-4">From Math Concept to Real Application</h5>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-600">
                      <th className="py-3 px-4 font-bold text-white bg-slate-900/50">Math Concept</th>
                      <th className="py-3 px-4 font-bold text-white bg-slate-900/50">What is it?</th>
                      <th className="py-3 px-4 font-bold text-white bg-slate-900/50">AI Security Application</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700/50 hover:bg-slate-700/30">
                      <td className="py-3 px-4 font-mono text-emerald-300">Vectors</td>
                      <td className="py-3 px-4">Ordered list of numbers.</td>
                      <td className="py-3 px-4"><strong>Log Analysis:</strong> Each log (IP, port, request) becomes a vector, allowing mathematical analysis of millions of logs.</td>
                    </tr>
                    <tr className="border-b border-slate-700/50 hover:bg-slate-700/30">
                      <td className="py-3 px-4 font-mono text-emerald-300">Matrices</td>
                      <td className="py-3 px-4">2D array of numbers.</td>
                      <td className="py-3 px-4"><strong>Data Representation:</strong> A network traffic dataset is a giant matrix where rows are connections and columns are features.</td>
                    </tr>
                    <tr className="border-b border-slate-700/50 hover:bg-slate-700/30">
                      <td className="py-3 px-4 font-mono text-emerald-300">Dot Product</td>
                      <td className="py-3 px-4">Multiplying two vectors.</td>
                      <td className="py-3 px-4"><strong>RAG Security:</strong> Compares how similar a malicious prompt is to known attack vectors.</td>
                    </tr>
                    <tr className="border-b border-slate-700/50 hover:bg-slate-700/30">
                      <td className="py-3 px-4 font-mono text-emerald-300">Gradient</td>
                      <td className="py-3 px-4">Direction of maximum change.</td>
                      <td className="py-3 px-4"><strong>Evasion Attacks (FGSM):</strong> Modifying input slightly to fool an AI-based antivirus.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h5 className="text-xl font-bold text-emerald-400 mt-8 mb-4">The Conclusion</h5>
              <p>
                As an Ethical Hacker transitioning to Cybersecurity AI Engineer, understanding math doesn't make you less of a hacker; it makes you a <strong>more dangerous and effective one</strong>. It allows you to understand <em>why</em> a model fails and <em>how</em> to build robust defenses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG / ML ARTICLE SECTION */}
      <section id="blog" className="py-20 px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-white flex items-center">
            <span className="text-emerald-400 mr-2">03.</span> Technical Blog
          </h3>
          
          <article className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
            <div className="p-8 md:p-12">
              <h4 className="text-3xl font-bold text-white mb-4">
                Understanding Machine Learning: Building a Linear Regression Model in Python
              </h4>
              <p className="text-emerald-400 font-mono text-sm mb-8">Published: October 2026</p>
              
              <div className="prose prose-invert prose-emerald max-w-none text-slate-300">
                <p className="mb-6">
                  As I transition from pure cybersecurity to <strong>AI Security</strong>, understanding how models learn is crucial. Before I can secure an AI, I need to know how to build one. My first step: a simple Linear Regression model to predict house prices based on their square meters.
                </p>

                <h5 className="text-xl font-bold text-white mt-8 mb-4">1. Setting up the Data</h5>
                <p className="mb-4">
                  Using <code>NumPy</code>, we create our training data. We need an array of features (square meters) and an array of targets (prices). The <code>.reshape(-1, 1)</code> is critical here: Scikit-Learn expects a 2D matrix for the X values.
                </p>
                <div className="bg-slate-900 p-4 rounded-lg my-4 font-mono text-sm text-emerald-300">
                  x = np.array([50, 100, 150]).reshape(-1, 1)<br/>
                  y = np.array([50000, 100000, 150000])
                </div>

                <h5 className="text-xl font-bold text-white mt-8 mb-4">2. Training the Model</h5>
                <p className="mb-4">
                  We instantiate the <code>LinearRegression</code> class and call <code>fit()</code>. During this phase, the algorithm calculates the slope (m) and the y-intercept (b) of the mathematical line that best fits the data.
                </p>

                <h5 className="text-xl font-bold text-white mt-8 mb-4">3. The Prediction</h5>
                <p className="mb-4">
                  Once trained, the model reveals its learned pattern: <code className="text-emerald-400">Price = (1000 * m²) + 0</code>. When we ask it to predict the price for a new 120 m² house, it applies this formula.
                </p>

                <div className="bg-slate-900 p-6 rounded-lg my-6 border border-slate-700">
                  <h6 className="font-bold text-emerald-400 mb-2">💻 Output:</h6>
                  <p className="font-mono text-sm text-slate-300">
                    patrón aprendido: precio = (1000 * Metros cuadrados) + 0<br/>
                    Predicción para 120 m2: $120,000.00
                  </p>
                </div>

                <p className="mt-8 pt-6 border-t border-slate-700">
                  <a href="https://github.com/Rodrigo-hckr/portfolio-ai-security/tree/main/projects/ml-basics" target="_blank" rel="noreferrer" className="text-emerald-400 font-bold hover:underline">
                    View the full source code on GitHub →
                  </a>
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20 px-8 bg-slate-800/40">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-white flex items-center">
             <span className="text-emerald-400 mr-2">04.</span> Featured Projects
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
          <span className="text-emerald-400 mr-2">05.</span> Learning Journey
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
