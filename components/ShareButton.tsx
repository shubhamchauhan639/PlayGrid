// ShareButton component — add implementation here
"use client";

import { useSandpack } from "@codesandbox/sandpack-react";
import { saveSnippet } from "@/lib/saveSnippet";
import { useState } from "react";

export default function ShareButton() {
  const { sandpack } = useSandpack();
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const files = Object.fromEntries(
      Object.entries(sandpack.files).map(([path, file]) => [path, file.code])
    );
    const id = await saveSnippet(files, "react");
    const url = `${window.location.origin}/playground/${id}`;
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleShare}
      className="rounded-2xl bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300"
    >
      {copied ? "Link copied" : "Share"}
    </button>
  );
}