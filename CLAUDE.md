# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

### Development
```bash
npm run dev          # Start dev server with Turbopack at localhost:3000
npm run build        # Production build and static export to out/
npm run lint         # Run ESLint with Next.js rules
npm start            # Serve production build locally
npx serve out        # Preview static export after build
```

### Testing
```bash
npm run test            # Run Vitest unit tests
npm run test:watch      # Watch mode for tests
npm run test:coverage   # Generate coverage reports
```

### Docker
```bash
docker-compose up --build  # Build and serve via container
```

## Architecture Overview

This is a **Next.js 15 static site** with full static export (no server runtime). Key architectural decisions:

1. **Static Export**: The site is configured with `output: "export"` in `next.config.ts`, generating fully static HTML that can be deployed to any CDN or static hosting service.

2. **App Router Structure**: Uses Next.js App Router with a centralized layout (`src/app/layout.tsx`) that wraps all pages with Header and Footer components.

3. **Styling**: Tailwind CSS 4 via PostCSS with custom theme tokens defined in `globals.css`. The project uses utility-first CSS with dark/light mode support via CSS custom properties.

4. **Font Strategy**: Three fonts loaded via `next/font/google`:
   - Inter (primary UI font)
   - Geist Mono (monospace)
   - Newsreader (display font for headings)

5. **Component Organization**: Shared components live in `src/app/components/` and use "use client" directive when needed for interactivity (e.g., Header navigation state).

## Testing Strategy

- **Framework**: Vitest with React Testing Library
- **Setup**: Test setup file at `src/test/setup.ts` includes jest-dom matchers and Next.js navigation mocks
- **Coverage**: Configured to generate text, HTML, and LCOV reports
- **Existing Tests**: Components in `src/__tests__/` follow pattern of testing render, content, and accessibility attributes

## Code Style Guidelines

From AGENTS.md:
- TypeScript + React 19 + Next 15
- ESM imports only (no CommonJS)
- 2-space indentation
- PascalCase for React components (.tsx files)
- Kebab-case for directories
- Utility-first Tailwind CSS approach

## Important Notes

- **No Server Components**: All interactive components must use "use client" directive
- **Image Optimization Disabled**: Due to static export, Next.js image optimization is disabled (`unoptimized: true`)
- **Japanese Language Support**: The site has Japanese metadata and uses `lang="ja"`
- **Trailing Slashes**: Routes generate directories with trailing slashes for better static hosting compatibility