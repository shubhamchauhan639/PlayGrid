"use client";

import { SandpackProvider, SandpackLayout, SandpackCodeEditor, SandpackPreview, FileTabs } from "@codesandbox/sandpack-react";
import ShareButton from "@/components/ShareButton";


export default function Home() {
  return (
    <div className="h-screen flex flex-col">
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
>
  <div className="flex items-center p-3 border-b bg-gray-800">
  <FileTabs />

  <div className="ml-auto">
    <ShareButton />
  </div>
</div>
        <SandpackLayout>
          <SandpackCodeEditor showTabs={false} />
          <SandpackPreview />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
}