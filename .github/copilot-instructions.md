# Copilot / Agent Instructions for this repo

This repository is a Vite + React + TypeScript portfolio site scaffolded with shadcn UI and Tailwind. The goal of this file is to help AI coding agents be immediately productive.

- **Project type:** Vite + React + TypeScript (see `package.json` and `vite.config.ts`).
- **Dev server:** `npm run dev` (Vite) — listens on `::` port `8080` (see `vite.config.ts`).
- **Build / preview:** `npm run build` and `npm run preview`.
- **Lint:** `npm run lint` (ESLint config in repo root).

Key code locations and patterns
- `src/` — main application code. Use the `/src` alias when referring to files (Vite alias `@` configured in `vite.config.ts`). Example imports: `import Foo from "@/components/ui/foo"`.
- `src/components/ui/` — UI primitives (shadcn-style). New UI components should follow existing naming conventions (lowercase filenames like `button.tsx`) and be imported with the `@` alias.
- `src/components/layout/` and `src/pages/` — app layout and route pages. Routes are defined in `src/App.tsx` using `react-router-dom` (see `Route` entries for `/`, `/projects`, `/projects/:id`, `/contact`).
- `src/data/cv-data.ts` — example data source used by CV pages. Prefer adding structured data here when adding CV content.
- `public/` — static assets and fallback pages (`404.html`, `robots.txt`). `index.html` includes a small SPA redirect script used for GitHub Pages routing; preserve it when making changes to HTML.

Dependencies & runtime notes
- Uses `@tanstack/react-query` for data fetching state (`QueryClient` initialized in `src/App.tsx`).
- Theme handling via `src/components/ThemeProvider.tsx` and `next-themes`.
- Many UI pieces rely on `@radix-ui/*` packages and `shadcn` conventions — prefer composing from the primitives in `src/components/ui/` rather than introducing external UI patterns without precedent.
- `lovable-tagger` appears in `vite.config.ts` (development-only plugin). This repo may be managed by Lovable; avoid removing the plugin unless intentional.

Common workflows agents should follow
- When adding a new page: add component under `src/pages/`, then add a `Route` in `src/App.tsx`.
- When adding a UI component: put it in `src/components/ui/`, export as default from the file, and import via `@/components/ui/<name>`.
- When editing global styles: update `src/index.css` and `tailwind.config.ts`.
- Update `index.html` metadata (title/OG/meta tags) for SEO/social updates; note the SPA redirect snippet must remain for GitHub Pages.

Testing / checks
- There are no unit tests in the repo. Use `npm run lint` to catch obvious issues. Run `npm run build` locally to verify production output.

Project-specific gotchas
- Absolute import alias: `@` -> `./src`. AI agents should use this path style to match existing imports.
- Dev server port in `vite.config.ts` is set to `8080`; CI or docs may assume default 5173—use the configured port for local debugging.
- The project uses `react-swc` via `@vitejs/plugin-react-swc`; preserve this plugin when editing `vite.config.ts`.

When creating PRs
- Keep changes minimal and focused. Reference affected pages/components in PR description and include screenshots for visual changes.
- Avoid changing global config (Vite, Tailwind) unless necessary and documented in the PR.

If unsure where to make a change
- Inspect `src/pages/` for page-level behavior, `src/components/` for UI behavior, and `src/data/` for content.

Contact for clarifications
- If behavior is unclear, ask the repo owner for confirmation before changing routing, base path, or deployment settings.

End of file.
