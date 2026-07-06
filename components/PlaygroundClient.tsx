"use client";

import { SandpackProvider, SandpackLayout, SandpackCodeEditor, SandpackPreview } from "@codesandbox/sandpack-react";
import FileTabs from "@/components/FileTabs";
import ShareButton from "@/components/ShareButton";

export default function PlaygroundClient({ files }: { files: Record<string, { code: string }> }) {
  return (
    <div className="h-screen flex flex-col">
      <SandpackProvider template="react" theme="dark" files={files}>
        <div className="flex items-center p-3 border-b bg-gray-800">
          <FileTabs />
          <div className="ml-auto">
            <ShareButton />
          </div>
        </div>
        <SandpackLayout>
          <SandpackCodeEditor showTabs={false} />
          <SandpackPreview showOpenInCodeSandbox={false} />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
}