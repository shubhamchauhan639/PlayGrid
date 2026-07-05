"use client";
import {useSandpack} from "@codesandbox/sandpack-react";


import React from 'react'

function FileTabs() {
  const { sandpack } = useSandpack();
  const files = Object.keys(sandpack.files);

  return (
    <div className="flex flex-wrap gap-2 px-3 py-3 bg-slate-950/95">
      {files.map((path) => (
        <button
          key={path}
          onClick={() => sandpack.setActiveFile(path)}
          className={`rounded-2xl px-4 py-2 text-sm font-medium transition ${
            sandpack.activeFile === path
              ? "bg-sky-500 text-slate-950"
              : "bg-slate-800 text-slate-300 hover:bg-slate-700"
          }`}
        >
          {path.split("/").pop()}
        </button>
      ))}
    </div>
  );
}

export default FileTabs
//
