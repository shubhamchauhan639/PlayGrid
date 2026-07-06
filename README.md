# Playgrid 🧩

A collaborative code playground for writing, running, and sharing React/JavaScript snippets — live, in your browser, no setup required.

**Live:** [play-grid-hazel.vercel.app](https://play-grid-hazel.vercel.app/)
**GitHub:** [github.com/shubhamchauhan639/PlayGrid](https://github.com/shubhamchauhan639/PlayGrid)

---

## What it does

Write React or JavaScript code in an in-browser editor, see it render live in a sandboxed preview as you type, then share a link so anyone can view the exact same snippet — similar in spirit to CodeSandbox or CodePen.

## Features

- **Live code editor + preview** — code runs in a securely sandboxed environment, updates as you type
- **Custom multi-file tabs** — switch between files (e.g. `App.js`, `styles.css`) with a UI built from scratch, synced to the editor's internal state
- **Share links** — save the current snippet and generate a unique, shareable URL
- **Persistent snippets** — shared links load the exact saved code from a database, anytime
- **Graceful error handling** — invalid or missing snippet links show a clean fallback instead of crashing
- **Loading states** — smooth loading UI while a shared snippet is being fetched

## Tech Stack

| Layer          | Tech                                                                                     |
| -------------- | ---------------------------------------------------------------------------------------- |
| Framework      | Next.js 14 (App Router), TypeScript                                                      |
| Code execution | [Sandpack](https://sandpack.codesandbox.io/) — sandboxed in-browser bundling & execution |
| Database       | Supabase (Postgres)                                                                      |
| Styling        | Tailwind CSS                                                                             |
| Deployment     | Vercel                                                                                   |

## What I built vs. what libraries handle

Running arbitrary user code safely in-browser is a genuinely hard problem — bundling, module resolution, sandboxing against malicious code — so this project uses **Sandpack** to handle that securely rather than reinventing it.

What I built myself on top of it:

- The custom file-tab switching UI, reading and updating Sandpack's internal state via the `useSandpack` hook
- The full save/share/load data flow — Supabase schema design, insert/fetch logic, and dynamic routing (`/playground/[id]`) to load a saved snippet by ID
- Error and loading states for the shared-snippet route

## Architecture

```
app/
  page.tsx                    → main editor (client component)
  playground/[id]/
    page.tsx                  → server component, fetches snippet by id
    loading.tsx                → loading state for the fetch
components/
  FileTabs.tsx                 → custom file-tab UI synced to Sandpack state
  ShareButton.tsx               → saves current code, generates share link
  PlaygroundClient.tsx           → client-side Sandpack layout for shared snippets
lib/
  supabase.ts                   → Supabase client
  saveSnippet.ts                 → insert logic for saving a snippet
```

## Running locally

```bash
git clone https://github.com/shubhamchauhan639/PlayGrid.git
cd PlayGrid
npm install
```

```bash
npm run dev
```

## Future improvements

- Realtime collaboration — multiple users editing the same shared snippet live, via Supabase Realtime
- Template picker — start from a blank React, vanilla JS, or TypeScript template
- Fork button — copy a shared snippet into a new editable session
- Reset button — clear the editor back to a blank starting point

---

Built by [Shubham Chauhan](https://github.com/shubhamchauhan639)
