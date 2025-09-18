# Repository Guidelines

## Project Structure & Module Organization
- Source: `src/app/` (App Router) — e.g., `src/app/page.tsx`, `src/app/layout.tsx`, `src/app/globals.css`.
- Static assets: `public/` (e.g., `public/solanalink-logo.png`).
- Build artifacts: `.next/` (dev), `out/` (static export).
- Config: `next.config.ts`, `eslint.config.mjs`, `postcss.config.mjs`, `tsconfig.json`.
- Colocate UI by route segment (e.g., `src/app/(marketing)/components/Hero.tsx`).

## Build, Test, and Development Commands
- `npm install` or `npm ci` — install dependencies.
- `npm run dev` — start dev server with Turbopack at http://localhost:3000.
- `npm run build` — production build and static export to `out/`.
- `npm start` — serve the production build locally.
- `npm run lint` — run ESLint (Next core-web-vitals + TS rules).
- Docker: `docker-compose up --build` — build and serve via container.
- Static preview: `npx serve out` — serve exported site.

## Coding Style & Naming Conventions
- TypeScript + React 19 + Next 15; ESM imports only; 2-space indentation.
- Components: PascalCase `.tsx` (e.g., `NavBar.tsx`); directories kebab-case.
- Routes: lowercase `page.tsx`, `layout.tsx`; colocate feature components near route.
- Tailwind CSS 4 via PostCSS; prefer utility-first classes over custom CSS.
- Run `npm run lint` before pushing to keep CI clean.

## Testing Guidelines
- No test framework configured yet. If adding tests, prefer Vitest or Jest with React Testing Library.
- Filenames: `*.test.tsx` or `*.test.ts`; or `__tests__/` alongside source.
- Keep components pure and prop-driven to simplify unit tests.

## Commit & Pull Request Guidelines
- Commits: imperative subject (≤72 chars), optional scope in parentheses.
  Example: `feat(app): add contact section`.
- PRs: concise description, linked issues, screenshots/GIFs for UI changes, and note breaking changes. Ensure `npm run lint` and `npm run build` pass.

## Security & Configuration Tips
- Static export site; do not commit secrets. Only use `NEXT_PUBLIC_*` env vars; all values are baked at build time.
- `next.config.ts` sets `output: "export"`, `trailingSlash: true`, and `images.unoptimized: true`; prefer pre-sized images and include trailing slashes in internal links.

## Agent-Specific Notes
- Keep changes minimal and focused; update this file when conventions change. Avoid server-only features that break static export.

