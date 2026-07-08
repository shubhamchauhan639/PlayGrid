"use client";

import { SandpackProvider, SandpackLayout, SandpackCodeEditor, SandpackPreview } from "@codesandbox/sandpack-react";
import FileTabs from "@/components/FileTabs";
import ShareButton from "@/components/ShareButton";
import Link from "next/link";

export default function PlaygroundClient({
  files,
  template,
}: {
  files: Record<string, string | { code: string }>;
  template: "react" | "vanilla" | "static";
}) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SandpackProvider
        template={template}
        theme="dark"
        files={files}
        options={{ recompileDelay: 1000 }}
      >
        <div className="mx-auto flex min-h-screen max-w-[1800px] flex-col px-4 py-4 sm:px-6 lg:px-8">
          {/* Shared Header Card */}
          <div className="mb-4 rounded-[2rem] border border-slate-800 bg-slate-900/95 p-4 shadow-[0_32px_120px_rgba(15,23,42,0.35)] sm:p-6 backdrop-blur-md">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold border bg-violet-500/10 text-violet-400 border-violet-500/20">
                    Shared Snippet
                  </span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold border ${
                    template === "react"
                      ? "bg-sky-500/10 text-sky-400 border-sky-500/20"
                      : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                  }`}>
                    {template === "react" ? "React" : "Vanilla JS"}
                  </span>
                </div>
                <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                  Interactive Code Snippet
                </h1>
                <p className="mt-1 text-sm text-slate-400">
                  Feel free to edit the code below and run it in the live preview.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/"
                  title="Create your own code playground"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm font-semibold text-slate-400 transition hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-700"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                  <span>Create Playground</span>
                </Link>

                <ShareButton template={template} />
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