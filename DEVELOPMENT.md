# Development Guide

## Table of Contents

1. [Getting Started](#getting-started)
2. [Development Environment](#development-environment)
3. [Code Style Guide](#code-style-guide)
4. [Component Development](#component-development)
5. [Page Development](#page-development)
6. [Testing Guidelines](#testing-guidelines)
7. [Debugging](#debugging)
8. [Performance Best Practices](#performance-best-practices)
9. [Common Tasks](#common-tasks)
10. [Troubleshooting](#troubleshooting)

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js**: Version 20.0.0 or higher
- **npm**: Version 10.0.0 or higher
- **Git**: For version control
- **VS Code** (recommended): With recommended extensions

### Initial Setup

1. **Clone the repository**:
```bash
git clone https://github.com/your-org/solanalink-frontend.git
cd solanalink-frontend
```

2. **Install dependencies**:
```bash
npm ci  # Use ci for exact version installation
```

3. **Set up pre-commit hooks** (if using):
```bash
npm run prepare  # If husky is configured
```

4. **Start development server**:
```bash
npm run dev
```

5. **Open browser**:
Navigate to `http://localhost:3000`

### VS Code Setup

Recommended extensions:
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features
- GitLens
- Error Lens

Settings (`.vscode/settings.json`):
```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.experimental.classRegex": [
    ["className=\"([^\"]*)\"", "([^\"]*)"]
  ]
}
```

## Development Environment

### Environment Variables

For static export, only `NEXT_PUBLIC_*` variables are available:

```bash
# .env.local (create this file, not tracked in git)
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_GA_ID=GA-XXXXXXXXX
```

**Important**: All environment variables are baked in at build time for static export.

### Development Scripts

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Serve production build locally
npm start

# Run linter
npm run lint

# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Generate test coverage
npm run test:coverage

# Preview static export
npx serve out
```

### Docker Development

```bash
# Build and run with Docker Compose
docker-compose up --build

# Run in detached mode
docker-compose up -d

# View logs
docker-compose logs -f

# Stop containers
docker-compose down
```

## Code Style Guide

### TypeScript Guidelines

#### Type Definitions

```typescript
// ✅ Good: Explicit types
interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  isActive?: boolean;
}

// ❌ Bad: Using 'any'
const handleClick = (data: any) => {
  // ...
};
```

#### Component Props

```typescript
// ✅ Good: Destructured props with types
export default function ServiceCard({
  title,
  description,
  icon,
  isActive = false
}: ServiceCardProps) {
  // ...
}

// ❌ Bad: Props without types
export default function ServiceCard(props) {
  // ...
}
```

### React Guidelines

#### Component Structure

```typescript
// ✅ Good: Clear component structure
"use client"; // Only if needed

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface ComponentProps {
  // Props definition
}

export default function ComponentName({ prop1, prop2 }: ComponentProps) {
  // Hooks
  const [state, setState] = useState(initialValue);

  // Effects
  useEffect(() => {
    // Effect logic
  }, [dependencies]);

  // Handlers
  const handleAction = () => {
    // Handler logic
  };

  // Render
  return (
    <div className="component-wrapper">
      {/* Component JSX */}
    </div>
  );
}
```

#### Naming Conventions

- **Components**: PascalCase (e.g., `ServiceCard.tsx`)
- **Utilities**: camelCase (e.g., `formatDate.ts`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS`)
- **Directories**: kebab-case (e.g., `news-and-blog-list`)
- **CSS classes**: kebab-case or Tailwind utilities

### Tailwind CSS Guidelines

#### Class Organization

```tsx
// ✅ Good: Organized classes
<div className="
  // Layout
  flex flex-col md:flex-row gap-4
  // Spacing
  p-6 md:p-8
  // Colors
  bg-white dark:bg-gray-900
  // Borders
  border border-gray-200 rounded-lg
  // Effects
  shadow-sm hover:shadow-md
  // Transitions
  transition-shadow duration-200
">

// ❌ Bad: Unorganized classes
<div className="shadow-sm p-6 bg-white flex rounded-lg border-gray-200 hover:shadow-md md:p-8 flex-col border transition-shadow md:flex-row gap-4 dark:bg-gray-900 duration-200">
```

#### Custom Styles

Use CSS custom properties for theme values:

```css
/* globals.css */
.custom-component {
  background-color: var(--color-primary);
  color: var(--color-text);
}
```

## Component Development

### Creating a New Component

1. **Create component file**:
```bash
touch src/app/components/NewComponent.tsx
```

2. **Basic component template**:
```typescript
interface NewComponentProps {
  title: string;
  children?: React.ReactNode;
}

export default function NewComponent({ title, children }: NewComponentProps) {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children}
    </section>
  );
}
```

3. **Add client interactivity if needed**:
```typescript
"use client";

import { useState } from 'react';

export default function InteractiveComponent() {
  const [isOpen, setIsOpen] = useState(false);
  // ...
}
```

4. **Create test file**:
```bash
touch src/__tests__/NewComponent.test.tsx
```

### Component Best Practices

1. **Keep components focused**: One component, one responsibility
2. **Use composition**: Build complex UIs from simple components
3. **Prop validation**: Use TypeScript interfaces
4. **Default props**: Provide sensible defaults
5. **Accessibility**: Include ARIA labels and semantic HTML

### Shared Component Guidelines

Components in `src/app/components/` should be:
- Reusable across multiple pages
- Well-documented with prop types
- Tested with unit tests
- Accessible (WCAG 2.1 AA compliant)

## Page Development

### Creating a New Page

1. **Create directory and page file**:
```bash
mkdir src/app/new-page
touch src/app/new-page/page.tsx
```

2. **Page template**:
```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title | SolanaLink',
  description: 'Page description for SEO',
};

export default function NewPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Page Title</h1>
      {/* Page content */}
    </div>
  );
}
```

3. **Add to navigation** (if needed):
Update `src/app/components/Header.tsx`:
```typescript
const navLinks = [
  // ... existing links
  { href: '/new-page/', label: 'New Page' },
];
```

### Dynamic Routes

For dynamic content like blog posts:

```typescript
// src/app/blog/[slug]/page.tsx
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  // Fetch or import content based on slug
  return (
    <article>
      {/* Article content */}
    </article>
  );
}

// Generate static paths
export async function generateStaticParams() {
  return [
    { slug: 'article-1' },
    { slug: 'article-2' },
    // ...
  ];
}
```

## Testing Guidelines

### Writing Tests

#### Component Test Example

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ServiceCard from '@/app/components/ServiceCard';

describe('ServiceCard', () => {
  it('renders title and description', () => {
    render(
      <ServiceCard
        title="Test Service"
        description="Test description"
      />
    );

    expect(screen.getByText('Test Service')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('handles click events', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(
      <ServiceCard
        title="Test Service"
        description="Test description"
        onClick={handleClick}
      />
    );

    await user.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledOnce();
  });

  it('applies active styles when isActive is true', () => {
    const { container } = render(
      <ServiceCard
        title="Test Service"
        description="Test description"
        isActive
      />
    );

    expect(container.firstChild).toHaveClass('border-primary');
  });
});
```

### Running Tests

```bash
# Run all tests once
npm run test

# Watch mode for development
npm run test:watch

# Generate coverage report
npm run test:coverage

# Run tests for a specific file
npm run test -- ServiceCard.test.tsx

# Run tests matching a pattern
npm run test -- --grep="navigation"
```

### Test Coverage

View coverage report:
```bash
npm run test:coverage
open coverage/index.html
```

Aim for:
- **Statements**: 80%+
- **Branches**: 70%+
- **Functions**: 80%+
- **Lines**: 80%+

## Debugging

### Browser DevTools

1. **React Developer Tools**: Install browser extension
2. **Network Tab**: Monitor API calls and asset loading
3. **Console**: Check for errors and warnings
4. **Elements**: Inspect DOM and styles

### VS Code Debugging

Create `.vscode/launch.json`:
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: debug",
      "type": "node",
      "request": "launch",
      "runtimeExecutable": "npm",
      "runtimeArgs": ["run", "dev"],
      "skipFiles": ["<node_internals>/**"],
      "serverReadyAction": {
        "pattern": "- Local:.+(https?://.+)",
        "uriFormat": "%s",
        "action": "debugWithChrome"
      }
    }
  ]
}
```

### Common Debugging Commands

```bash
# Check for TypeScript errors
npx tsc --noEmit

# Check for linting issues
npm run lint

# Check bundle size
npx next-bundle-analyzer

# Check for accessibility issues
npx lighthouse http://localhost:3000
```

## Performance Best Practices

### Image Optimization

Since Next.js image optimization is disabled for static export:

```tsx
// ✅ Good: Optimized images
<img
  src="/optimized-image.webp"
  alt="Descriptive alt text"
  width={800}
  height={600}
  loading="lazy"
/>

// ❌ Bad: Unoptimized images
<img src="/huge-image.png" />
```

### Code Splitting

```typescript
// ✅ Good: Lazy load heavy components
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false, // If not needed for SSG
});
```

### Bundle Size

Monitor and reduce bundle size:

```bash
# Analyze bundle
npm run build
npm run analyze  # If configured

# Check what's included
npx depcheck
```

### Performance Checklist

- [ ] Images optimized and sized correctly
- [ ] Fonts loaded efficiently
- [ ] Unnecessary dependencies removed
- [ ] Code split where appropriate
- [ ] CSS purged of unused styles
- [ ] No console.log in production
- [ ] Lighthouse score > 90

## Common Tasks

### Adding a New Service

1. Update `src/app/our-services/page.tsx`
2. Add service details
3. Update navigation if needed
4. Add relevant tests

### Adding a Blog Post

1. Add article data to `src/app/news-and-blog-list/[slug]/page.tsx`
2. Update article list in `src/app/news-and-blog-list/page.tsx`
3. Generate new static params
4. Test the new route

### Updating SEO Metadata

1. Update page-specific metadata:
```typescript
export const metadata: Metadata = {
  title: 'New Title',
  description: 'New description',
  openGraph: {
    title: 'OG Title',
    description: 'OG Description',
  },
};
```

2. Update global metadata in `src/app/layout.tsx`
3. Update `public/sitemap.xml`

### Changing Theme Colors

1. Update CSS custom properties in `src/app/globals.css`
2. Update Tailwind config if using custom colors
3. Test in both light and dark modes

## Troubleshooting

### Common Issues and Solutions

#### Build Errors

**Issue**: TypeScript errors during build
```bash
# Solution: Check types
npx tsc --noEmit
```

**Issue**: ESLint errors
```bash
# Solution: Fix linting issues
npm run lint -- --fix
```

#### Development Server Issues

**Issue**: Port 3000 already in use
```bash
# Solution: Kill process on port
lsof -i :3000
kill -9 [PID]

# Or use different port
PORT=3001 npm run dev
```

**Issue**: Module not found
```bash
# Solution: Clear cache and reinstall
rm -rf node_modules .next
npm ci
npm run dev
```

#### Static Export Issues

**Issue**: Dynamic routes not generating
- Check `generateStaticParams` function
- Ensure all paths are returned
- Verify data is available at build time

**Issue**: Images not loading in production
- Use relative or absolute paths
- Ensure images are in `public/` directory
- Check file extensions and case sensitivity

### Getting Help

1. Check existing documentation
2. Search GitHub issues
3. Ask in team chat/Slack
4. Create detailed bug report with:
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Environment details
   - Error messages/screenshots

## Resources

### Official Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vitest Documentation](https://vitest.dev)

### Learning Resources
- [Next.js Learn Course](https://nextjs.org/learn)
- [React Patterns](https://reactpatterns.com)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [Testing Best Practices](https://testingjavascript.com)

### Tools
- [Bundle Analyzer](https://bundlephobia.com)
- [Can I Use](https://caniuse.com)
- [WebPageTest](https://www.webpagetest.org)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)