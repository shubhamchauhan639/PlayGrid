// ShareButton component — add implementation here
"use client";

import { useSandpack } from "@codesandbox/sandpack-react";
import { saveSnippet } from "@/lib/saveSnippet";
import { useState } from "react";

export default function ShareButton({ template }: { template: string }) {
  const { sandpack } = useSandpack();
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const files = Object.fromEntries(
      Object.entries(sandpack.files).map(([path, file]) => [path, file.code])
    );
    const id = await saveSnippet(files, template);
    const url = `${window.location.origin}/playground/${id}`;
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 rounded-2xl bg-sky-500 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-sky-400 hover:scale-[1.02] active:scale-100 focus:outline-none focus:ring-2 focus:ring-sky-300 shadow-[0_10px_20px_-3px_rgba(14,165,233,0.3)]"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935-2.186 2.25 2.25 0 00-3.935 2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
      </svg>
      <span>{copied ? "Link Copied" : "Share"}</span>
    </button>
  );
}