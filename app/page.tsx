"use client";

import React, { useState } from "react";
import { SandpackProvider, SandpackLayout, SandpackCodeEditor, SandpackPreview } from "@codesandbox/sandpack-react";
import FileTabs from "@/components/FileTabs";
import ShareButton from "@/components/ShareButton";

const reactDefaultFiles = {
  "/App.js": `export default function App() {
  return (
    <div className="app-container">
      <div className="logo-spin">⚛️</div>
      <h1>Hello React!</h1>
      <p>Edit App.js or styles.css to see your changes render instantly.</p>
      <div className="stats">
        <div className="stat-card">
          <span className="stat-val">Fast</span>
          <span className="stat-label">Hot Reload</span>
        </div>
        <div className="stat-card">
          <span className="stat-val">Clean</span>
          <span className="stat-label">Components</span>
        </div>
      </div>
      <button className="btn" onClick={() => alert("Welcome to PlayGrid React!")}>
        Interact Live
      </button>
    </div>
  );
}`,
  "/styles.css": `body {
  margin: 0;
  padding: 0;
  background: #020617;
  color: #f8fafc;
  font-family: 'Outfit', system-ui, -apple-system, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
}
.app-container {
  background: rgba(30, 41, 59, 0.4);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 3rem;
  text-align: center;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  max-width: 420px;
  width: 100%;
}
.logo-spin {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  animation: spin 15s linear infinite;
  display: inline-block;
}
@keyframes spin {
  100% { transform: rotate(360deg); }
}
h1 {
  color: #38bdf8;
  margin-top: 0;
  font-size: 2.25rem;
  font-weight: 700;
  letter-spacing: -0.025em;
}
p {
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 2rem;
}
.stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
}
.stat-card {
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 0.75rem;
}
.stat-val {
  display: block;
  font-weight: 700;
  color: #38bdf8;
}
.stat-label {
  font-size: 0.75rem;
  color: #64748b;
}
.btn {
  background: linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%);
  color: #020617;
  border: none;
  padding: 0.85rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  box-shadow: 0 10px 15px -3px rgba(14, 165, 233, 0.3);
}
.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 20px -3px rgba(14, 165, 233, 0.4);
}
.btn:active {
  transform: translateY(0);
}`,
};

const vanillaDefaultFiles = {
  "/index.js": `import "./styles.css";

document.getElementById("app").innerHTML = \`
  <div class="app-container">
    <div class="logo-spin">⚡</div>
    <h1>Hello Vanilla JS!</h1>
    <p>Edit index.js or styles.css to see your changes render instantly.</p>
    <div class="stats">
      <div class="stat-card">
        <span class="stat-val">Ultra-Fast</span>
        <span class="stat-label">Zero Bundle</span>
      </div>
      <div class="stat-card">
        <span class="stat-val">Pure</span>
        <span class="stat-label">Vanilla JS</span>
      </div>
    </div>
    <button class="btn" id="clickBtn">
      Interact Live
    </button>
  </div>
\`;

document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Welcome to PlayGrid Vanilla JS!");
});
`,
  "/styles.css": `body {
  margin: 0;
  padding: 0;
  background: #020617;
  color: #f8fafc;
  font-family: 'Outfit', system-ui, -apple-system, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
}
.app-container {
  background: rgba(30, 41, 59, 0.4);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 3rem;
  text-align: center;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  max-width: 420px;
  width: 100%;
}
.logo-spin {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  animation: pulse 2s infinite ease-in-out;
  display: inline-block;
}
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}
h1 {
  color: #f59e0b;
  margin-top: 0;
  font-size: 2.25rem;
  font-weight: 700;
  letter-spacing: -0.025em;
}
p {
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 2rem;
}
.stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
}
.stat-card {
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 0.75rem;
}
.stat-val {
  display: block;
  font-weight: 700;
  color: #f59e0b;
}
.stat-label {
  font-size: 0.75rem;
  color: #64748b;
}
.btn {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: #020617;
  border: none;
  padding: 0.85rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  box-shadow: 0 10px 15px -3px rgba(245, 158, 11, 0.3);
}
.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 20px -3px rgba(245, 158, 11, 0.4);
}
.btn:active {
  transform: translateY(0);
}`,
};

export default function Home() {
  const [selectedTemplate, setSelectedTemplate] = useState<"react" | "vanilla" | null>(null);
  const [resetKey, setResetKey] = useState(0);

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset the editor? This will discard your current changes.")) {
      setResetKey((prev) => prev + 1);
    }
  };

  const handleNewProject = () => {
    if (window.confirm("Start a new project? Any unsaved changes in this session will be lost.")) {
      setSelectedTemplate(null);
    }
  };

  if (!selectedTemplate) {
    return (
      <div className="relative min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center items-center px-4 overflow-hidden">
        {/* Decorative background grid and ambient lighting */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl w-full text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/5 px-4 py-1.5 text-xs font-medium text-sky-400 mb-6 backdrop-blur-md">
            <span>🚀 PlayGrid v2.0 Live Playground</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-4">
            Playgrid <span className="text-sky-400">🧩</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12">
            An instant collaborative code playground. Build, run, and share snippets directly from your browser.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* React Template Card */}
            <button
              onClick={() => setSelectedTemplate("react")}
              className="group relative flex flex-col items-start p-8 rounded-3xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900/80 transition-all duration-300 hover:border-sky-500/40 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(14,165,233,0.15)] text-left backdrop-blur-xl"
            >
              <div className="mb-6 rounded-2xl bg-sky-500/10 p-4 text-sky-400 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(30 12 12)"></ellipse>
                  <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(90 12 12)"></ellipse>
                  <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(150 12 12)"></ellipse>
                  <circle cx="12" cy="12" r="2" fill="currentColor"></circle>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">React Template</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Develop component-driven user interfaces using modern React features and styling.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 font-mono">/App.js</span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 font-mono">/styles.css</span>
              </div>
            </button>

            {/* Vanilla JS Template Card */}
            <button
              onClick={() => setSelectedTemplate("vanilla")}
              className="group relative flex flex-col items-start p-8 rounded-3xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900/80 transition-all duration-300 hover:border-amber-500/40 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(245,158,11,0.15)] text-left backdrop-blur-xl"
            >
              <div className="mb-6 rounded-2xl bg-amber-500/10 p-4 text-amber-400 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                  <polyline points="13 2 13 9 20 9"></polyline>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Vanilla JS Template</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Write ultra-lightweight, zero-overhead scripts using pure JavaScript and DOM API.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 font-mono">/index.js</span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 font-mono">/styles.css</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  const activeFiles = selectedTemplate === "react" ? reactDefaultFiles : vanillaDefaultFiles;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SandpackProvider
        key={`${selectedTemplate}-${resetKey}`}
        template={selectedTemplate}
        theme="dark"
        files={activeFiles}
        options={{ recompileDelay: 1000 }}
      >
        <div className="mx-auto flex min-h-screen max-w-[1800px] flex-col px-4 py-4 sm:px-6 lg:px-8">
          {/* Header Card */}
          <div className="mb-4 rounded-[2rem] border border-slate-800 bg-slate-900/95 p-4 shadow-[0_32px_120px_rgba(15,23,42,0.35)] sm:p-6 backdrop-blur-md">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    Live code playground
                  </p>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold border ${
                    selectedTemplate === "react"
                      ? "bg-sky-500/10 text-sky-400 border-sky-500/20"
                      : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                  }`}>
                    {selectedTemplate === "react" ? "React" : "Vanilla JS"}
                  </span>
                </div>
                <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                  Build and share {selectedTemplate === "react" ? "React" : "JavaScript"} snippets
                </h1>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={handleReset}
                  title="Reset files to initial template content"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm font-semibold text-slate-400 transition hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-700"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                  <span>Reset</span>
                </button>

                <button
                  onClick={handleNewProject}
                  title="Choose a different template"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm font-semibold text-slate-400 transition hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-700"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                  <span>New Template</span>
                </button>

                <ShareButton template={selectedTemplate} />
              </div>
            </div>
          </div>

          {/* Editor Workspace */}
          <div className="flex-1 overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/95 shadow-[0_32px_120px_rgba(15,23,42,0.35)] backdrop-blur-md">
            <div className="border-b border-slate-800 bg-slate-950/80">
              <FileTabs />
            </div>
            <div className="min-h-[calc(100vh-220px)] bg-slate-950">
              <SandpackLayout className="min-h-full">
                <SandpackCodeEditor showTabs={false} />
                <SandpackPreview showOpenInCodeSandbox={false} />
              </SandpackLayout>
            </div>
          </div>
        </div>
      </SandpackProvider>
    </div>
  );
}