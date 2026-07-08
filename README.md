# Playgrid 🧩

A collaborative code playground for writing, running, and sharing React/JavaScript snippets — live, in your browser, no setup required.

**Live:** [play-grid-hazel.vercel.app](https://play-grid-hazel.vercel.app/)
**GitHub:** [github.com/shubhamchauhan639/PlayGrid](https://github.com/shubhamchauhan639/PlayGrid)

---

## What it does

Write React or JavaScript code in an in-browser editor, see it render live in a sandboxed preview as you type, then share a link so anyone can view the exact same snippet — similar in spirit to CodeSandbox or CodePen.

## Features

- **Live code editor + preview** — code runs in a securely sandboxed environment, updates as you type.
- **Template Selection Dashboard** — select your framework before starting: **React** (modern component-driven stack) or **Vanilla JS** (pure JS, DOM manipulation, zero-bundle overhead).
- **Reset Workspace** — clear the editor back to its initial template files at any time with a single click (prompting confirmation).
- **New Project / Switch Templates** — easily discard the current workspace and head back to the landing page to select a different framework template.
- **Custom multi-file tabs** — switch between files (e.g. `App.js`, `index.js`, `styles.css`) with a UI built from scratch, synced to the editor's internal state.
- **Share & Fork links** — save the current snippet and generate a unique, shareable URL. You can edit any shared snippet and click "Share" again to fork it into a new unique link.
- **Persistent snippets** — shared links load the exact saved code from the Supabase database.
- **Graceful error handling** — invalid or missing snippet links show a clean fallback instead of crashing.
- **Loading states** — smooth loading UI while a shared snippet is being fetched.
- **Premium design & styling** — dark slate theme, glowing ambient accents, glassmorphic cards, responsive panels, and smooth hover micro-animations.

## Tech Stack

| Layer          | Tech                                                                                     |
| -------------- | ---------------------------------------------------------------------------------------- |
| Framework      | Next.js 14 (App Router), TypeScript                                                      |
| Code execution | [Sandpack](https://sandpack.codesandbox.io/) — sandboxed in-browser bundling & execution |
| Database       | Supabase (Postgres)                                                                      |
| Styling        | Tailwind CSS & Custom CSS variables                                                      |
| Deployment     | Vercel                                                                                   |

## What I built vs. what libraries handle

Running arbitrary user code safely in-browser is a genuinely hard problem — bundling, module resolution, sandboxing against malicious code — so this project uses **Sandpack** to handle that securely rather than reinventing it.

What I built myself on top of it:

- A beautiful interactive Dashboard for picking framework templates (React vs Vanilla JS) before entering the editor.
- The custom file-tab switching UI, reading and updating Sandpack's internal state via the `useSandpack` hook.
- The full save/share/fork data flow — Supabase schema design, insert/fetch logic, dynamic routing (`/playground/[id]`) to load a saved snippet by ID, and template-aware loading.
- Workspace Reset & Template Switching logic forcing component remounting and wiping session state.
- Tailored shared-playground viewer routes styled with custom layouts, labels, and helper redirections.
- Error and loading states for the shared-snippet route.

## Architecture

```
app/
  page.tsx                    → landing template picker + main workspace (client component)
  playground/[id]/
    page.tsx                  → server component, fetches snippet and its template by id
    loading.tsx                → loading state for the fetch
components/
  FileTabs.tsx                 → custom file-tab UI synced to Sandpack state
  ShareButton.tsx               → saves current code & template, generates share link
  PlaygroundClient.tsx           → styled client-side Sandpack layout for shared snippets
lib/
  supabase.ts                   → Supabase client
  saveSnippet.ts                 → insert logic for saving a snippet and template
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

- **Realtime collaboration** — multiple users editing the same shared snippet live, via Supabase Realtime.
- **Custom file uploads** — add new files and delete existing files directly in the playground UI.
- **Embedded views** — add support for iframe embeddings of previews on external blogs or portfolios.

---

Built by [Shubham Chauhan](https://github.com/shubhamchauhan639)

