"use client";

import { SandpackProvider, SandpackLayout, SandpackCodeEditor, SandpackPreview} from "@codesandbox/sandpack-react";
import FileTabs from "@/components/FileTabs";
import ShareButton from "@/components/ShareButton";


export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
     <SandpackProvider
        template="react"
        theme="dark"
        files={{
          "/App.js": `export default function App() {
  return <h1>Hello world</h1>;
}`,
          "/styles.css": `h1 {
  color: hotpink;
}`,
        }}
        options={{ recompileDelay: 1000 }}
      >
        <div className="mx-auto flex min-h-screen max-w-[1800px] flex-col px-4 py-4 sm:px-6 lg:px-8">
          <div className="mb-4 rounded-[2rem] border border-slate-800 bg-slate-900/95 p-4 shadow-[0_32px_120px_rgba(15,23,42,0.35)] sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                  Live code playground
                </p>
                <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                  Build and share React snippets
                </h1>
              </div>
              <ShareButton />
            </div>
          </div>

          <div className="flex-1 overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/95 shadow-[0_32px_120px_rgba(15,23,42,0.35)]">
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