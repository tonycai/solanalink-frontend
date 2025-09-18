# SolanaLink Frontend

Static-exported marketing website for SolanaLink built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS 4. The site is fully static (no server runtime) and deployable to any static host.

## Overview

- App Router + static export (`out/`) with trailing slashes and unoptimized images.
- Reusable layout and shared UI components (Header, Footer, Why Choose Us, Client Testimonials).
- Marketing pages: Homepage, Services, About, Contact, Compliance & Investigations, News & Blog (list + dynamic details), Industries, Case Studies, Careers.
- Vitest + Testing Library for unit tests and coverage.

## Architecture

```mermaid
flowchart TD
  A[Browser] --> B[Next.js 15 App Router]
  B --> C[Static Export\n(out/)]
  C --> D[Static Hosting\n(Netlify / GitHub Pages / Vercel static)]

  B --> E[Routes]
  E --> E1[/homepage/]
  E --> E2[/our-services/]
  E --> E3[/about-us/]
  E --> E4[/contact-us/]
  E --> E5[/compliance-and-investigations/]
  E --> E6[/news-and-blog-list/]
  E6 --> E7[/news-and-blog-list/[slug]/]
  E --> E8[/industries/]
  E --> E9[/case-studies/]
  E --> E10[/careers/]

  B --> F[Shared Components]
  F --> F1[Header]
  F --> F2[Footer]
  F --> F3[WhyChooseUs]
  F --> F4[ClientTestimonials]

  B --> G[Styling: Tailwind CSS 4]
  B --> H[Tests: Vitest + RTL]
```

Key configuration (see `next.config.ts`):

- `output: "export"` — fully static export.
- `trailingSlash: true` — routes end with `/` (e.g., `/about-us/`).
- `images.unoptimized: true` — native `<img>` with no server optimizer.

## Technology Stack

- Framework: Next.js 15 (App Router), React 19, TypeScript
- Styling: Tailwind CSS 4 (via PostCSS), utility-first
- Fonts: Inter via `next/font` (swap)
- Testing: Vitest, @testing-library/react, @testing-library/jest-dom
- Linting: ESLint (Next core-web-vitals + TS rules)
- Container: Docker + docker-compose

## Directory Structure

```
.
├─ AGENTS.md
├─ README.md
├─ next.config.ts
├─ package.json
├─ tsconfig.json
├─ eslint.config.mjs
├─ postcss.config.mjs
├─ docker-compose.yml
├─ Dockerfile
├─ public/
│  └─ solanalink-logo.png
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx              # Root layout (Header/Footer)
│  │  ├─ globals.css             # Tailwind 4 theme tokens
│  │  ├─ page.tsx                # Root landing (company services summary)
│  │  ├─ homepage/page.tsx       # Marketing hero + sections
│  │  ├─ our-services/page.tsx   # ServiceOverview prototype port
│  │  ├─ about-us/page.tsx       # About prototype port
│  │  ├─ contact-us/page.tsx     # Contact prototype port
│  │  ├─ compliance-and-investigations/page.tsx
│  │  ├─ news-and-blog-list/page.tsx
│  │  ├─ news-and-blog-list/[slug]/page.tsx  # Dynamic article details
│  │  ├─ industries/page.tsx
│  │  ├─ case-studies/page.tsx
│  │  ├─ careers/page.tsx
│  │  └─ components/
│  │     ├─ Header.tsx
│  │     ├─ Footer.tsx
│  │     ├─ WhyChooseUs.tsx
│  │     └─ ClientTestimonials.tsx
│  ├─ __tests__/                  # Unit tests (Vitest + RTL)
│  │  ├─ Header.test.tsx
│  │  ├─ Footer.test.tsx
│  │  ├─ ClientTestimonials.test.tsx
│  │  └─ WhyChooseUs.test.tsx
│  └─ test/setup.ts              # jest-dom + Next.js mocks
├─ vitest.config.ts
└─ ui-design-stitch/             # HTML prototypes (reference only)
```

## Development

Install dependencies and start the dev server (Turbopack):

```bash
npm install
npm run dev
```

Open http://localhost:3000 (header “Home” points to `/homepage/`).

Run lints:

```bash
npm run lint
```

## Testing & Coverage

```bash
npm run test            # run unit tests
npm run test:watch      # watch mode
npm run test:coverage   # HTML + lcov coverage in coverage/
```

Open `coverage/index.html` for the report.

## Build & Static Preview

Generate the production static export:

```bash
npm run build
```

Preview the exported site from `out/`:

```bash
npx serve out
```

## Deployment

Deploy the contents of `out/` to any static host (Netlify, GitHub Pages, Cloudflare Pages, S3+CDN, Vercel static). Notes:

- Internal links include trailing slashes to match static export directories.
- Only `NEXT_PUBLIC_*` env vars are supported (values are baked at build time).

### SEO static assets

- `public/robots.txt` — grants crawl access and points to the sitemap.
- `public/sitemap.xml` — update the base domain (`https://solanalink.example.com`) to your production host.

## Continuous Integration

GitHub Actions workflow at `.github/workflows/ci.yml` runs on pushes and PRs:

- Install (npm ci)
- Lint (eslint)
- Tests + Coverage (Vitest) with HTML report artifact
- Build (Next static export) with `out/` artifact

## Docker

Build and serve locally via Compose:

```bash
docker-compose up --build
```

Then open http://localhost:3000.

## Conventions (from AGENTS.md)

- TypeScript + React 19 + Next 15; ESM imports; 2-space indentation.
- Component files: PascalCase `.tsx`; route files: `page.tsx`, `layout.tsx`.
- Tailwind CSS 4; prefer utility-first classes over custom CSS.
- Static export: `output: "export"`, `trailingSlash: true`, `images.unoptimized: true`.
- Commits: `type(scope): subject` (≤72 chars). Run `npm run lint` and `npm run build` before PRs.

## Roadmap / Next Session

- Active link styles: done (Header).
- Typography polish: optional `Newsreader` for headings.
- SEO: sitemap.xml, robots.txt, canonical + JSON-LD.
- Blog: expand article data and content pipeline.
- A11y: focus rings and keyboard nav improvements.
- CI: GitHub Action for lint + build + tests + coverage artifact.

## References

- Next.js docs: https://nextjs.org/docs
- Tailwind CSS v4: https://tailwindcss.com/docs
- Vitest: https://vitest.dev/
