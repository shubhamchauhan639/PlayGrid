"use client";
import {useSandpack} from "@codesandbox/sandpack-react";


import React from 'react'

function FileTabs() {
    const {sandpack} = useSandpack();
    const files = Object.keys(sandpack.files);


  return (
    <div className="flex gap-2 p-3 border-b bg-gray-800">
        {files.map((path)=>(
           <button
          key={path}
          onClick={() => sandpack.setActiveFile(path)}
          className={`px-4 py-2 rounded ${
            sandpack.activeFile === path
              ? "bg-blue-600 text-white"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          {path.split("/").pop()}
        </button>

        ))}
        
    </div>
  )
}

export default FileTabs
//
