# SolanaLink Frontend

SolanaLink is a static website built with Next.js, React, and Tailwind CSS. This project is configured to export a fully static site.

## Development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the site.

## Build

Generate the production build, which will export a static site:

```bash
npm run build
```

The static site will be generated in the `out/` directory. You can serve it locally:

```bash
npx serve out
```

## Deployment

Deploy the contents of the `out/` directory to any static hosting provider (e.g., GitHub Pages, Netlify, Vercel).

## Docker & Docker Compose

A Dockerfile and `docker-compose.yml` are included to build and serve the static site locally or in your container environment.

```bash
docker-compose up --build
```

After startup, open [http://localhost:3000](http://localhost:3000) in your browser.

## Learn More

Find more information in the Next.js documentation:

https://nextjs.org/docs
