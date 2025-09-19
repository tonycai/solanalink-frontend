# Testing Guide

## Table of Contents

1. [Overview](#overview)
2. [Test Setup](#test-setup)
3. [Running Tests](#running-tests)
4. [Writing Tests](#writing-tests)
   - [Component Tests](#component-tests)
   - [Page Tests](#page-tests)
   - [Utility Tests](#utility-tests)
   - [Integration Tests](#integration-tests)
5. [Testing Best Practices](#testing-best-practices)
6. [Coverage Requirements](#coverage-requirements)
7. [Continuous Integration](#continuous-integration)
8. [Debugging Tests](#debugging-tests)
9. [Test Utilities](#test-utilities)

## Overview

This project uses **Vitest** as the test runner with **React Testing Library** for component testing. The testing setup emphasizes:

- Fast test execution with Vitest
- User-centric testing with React Testing Library
- Comprehensive coverage reporting
- TypeScript support
- Jest-compatible assertions with jest-dom

### Testing Philosophy

- **Test user behavior, not implementation details**
- **Write tests that give confidence the app works**
- **Maintain high coverage without sacrificing quality**
- **Keep tests maintainable and readable**

## Test Setup

### Configuration Files

#### vitest.config.ts
```typescript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      reporter: ['text', 'html', 'lcov'],
      exclude: [
        'node_modules/',
        '.next/',
        'out/',
        '*.config.{js,ts,mjs}',
        'src/test/',
      ],
    },
    globals: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

#### src/test/setup.ts
```typescript
import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock Next.js router
vi.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: vi.fn(),
      replace: vi.fn(),
      prefetch: vi.fn(),
      back: vi.fn(),
      forward: vi.fn(),
      refresh: vi.fn(),
    };
  },
  usePathname() {
    return '/';
  },
  useSearchParams() {
    return new URLSearchParams();
  },
}));

// Mock environment variables
process.env.NEXT_PUBLIC_API_URL = 'http://localhost:3000';

// Suppress console errors in tests
global.console = {
  ...console,
  error: vi.fn(),
};
```

### Required Dependencies

Ensure these are installed:
```json
{
  "devDependencies": {
    "vitest": "^2.0.0",
    "@vitest/coverage-v8": "^2.0.0",
    "jsdom": "^24.0.0",
    "@testing-library/react": "^16.0.0",
    "@testing-library/jest-dom": "^6.5.0",
    "@testing-library/user-event": "^14.5.2",
    "@types/jsdom": "^21.1.7"
  }
}
```

## Running Tests

### Basic Commands

```bash
# Run all tests once
npm run test

# Run tests in watch mode (recommended during development)
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm run test Header.test.tsx

# Run tests matching pattern
npm run test -- --grep="navigation"

# Run tests in specific directory
npm run test src/__tests__/components/

# Update snapshots
npm run test -- -u
```

### Coverage Reports

After running `npm run test:coverage`:

1. **Terminal Output**: Immediate coverage summary
2. **HTML Report**: Open `coverage/index.html` in browser
3. **LCOV Report**: For CI integration at `coverage/lcov.info`

## Writing Tests

### Component Tests

#### Basic Component Test

```typescript
// src/__tests__/components/ServiceCard.test.tsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ServiceCard from '@/app/components/ServiceCard';

describe('ServiceCard', () => {
  const defaultProps = {
    title: 'Cloud Computing',
    description: 'Scalable cloud solutions',
    icon: '☁️',
  };

  it('renders title and description', () => {
    render(<ServiceCard {...defaultProps} />);

    expect(screen.getByText('Cloud Computing')).toBeInTheDocument();
    expect(screen.getByText('Scalable cloud solutions')).toBeInTheDocument();
  });

  it('displays icon when provided', () => {
    render(<ServiceCard {...defaultProps} />);

    expect(screen.getByText('☁️')).toBeInTheDocument();
  });

  it('handles click events', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(
      <ServiceCard
        {...defaultProps}
        onClick={handleClick}
      />
    );

    const card = screen.getByRole('article');
    await user.click(card);

    expect(handleClick).toHaveBeenCalledOnce();
  });

  it('applies active styles when selected', () => {
    const { container } = render(
      <ServiceCard
        {...defaultProps}
        isActive
      />
    );

    const card = container.querySelector('.service-card');
    expect(card).toHaveClass('border-primary');
  });

  it('is accessible with keyboard navigation', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(
      <ServiceCard
        {...defaultProps}
        onClick={handleClick}
      />
    );

    const card = screen.getByRole('article');

    // Tab to the card
    await user.tab();
    expect(card).toHaveFocus();

    // Press Enter to activate
    await user.keyboard('{Enter}');
    expect(handleClick).toHaveBeenCalled();
  });
});
```

#### Testing Navigation Component

```typescript
// src/__tests__/components/Header.test.tsx
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '@/app/components/Header';

// Mock usePathname
vi.mock('next/navigation', () => ({
  usePathname: vi.fn(),
}));

describe('Header', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders company name', () => {
    const { usePathname } = require('next/navigation');
    usePathname.mockReturnValue('/');

    render(<Header />);

    expect(screen.getByText('SolanaLink')).toBeInTheDocument();
  });

  it('highlights current page in navigation', () => {
    const { usePathname } = require('next/navigation');
    usePathname.mockReturnValue('/our-services/');

    render(<Header />);

    const servicesLink = screen.getByRole('link', { name: /our services/i });
    expect(servicesLink).toHaveAttribute('aria-current', 'page');
  });

  it('toggles mobile menu', async () => {
    const user = userEvent.setup();
    const { usePathname } = require('next/navigation');
    usePathname.mockReturnValue('/');

    render(<Header />);

    // Mobile menu should be hidden initially
    const nav = screen.getByRole('navigation');
    expect(nav).not.toHaveClass('mobile-menu-open');

    // Click hamburger button
    const menuButton = screen.getByRole('button', { name: /menu/i });
    await user.click(menuButton);

    // Mobile menu should be visible
    expect(nav).toHaveClass('mobile-menu-open');
  });

  it('closes mobile menu when link is clicked', async () => {
    const user = userEvent.setup();
    const { usePathname } = require('next/navigation');
    usePathname.mockReturnValue('/');

    render(<Header />);

    // Open mobile menu
    const menuButton = screen.getByRole('button', { name: /menu/i });
    await user.click(menuButton);

    // Click a navigation link
    const aboutLink = screen.getByRole('link', { name: /about us/i });
    await user.click(aboutLink);

    // Menu should close
    const nav = screen.getByRole('navigation');
    expect(nav).not.toHaveClass('mobile-menu-open');
  });
});
```

### Page Tests

```typescript
// src/__tests__/pages/Homepage.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from '@/app/homepage/page';

describe('HomePage', () => {
  it('renders hero section with correct heading', () => {
    render(<HomePage />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent(/welcome to solanalink/i);
  });

  it('displays all key sections', () => {
    render(<HomePage />);

    // Hero section
    expect(screen.getByText(/innovative it solutions/i)).toBeInTheDocument();

    // Why Choose Us section
    expect(screen.getByText(/why choose us/i)).toBeInTheDocument();

    // Client Testimonials
    expect(screen.getByText(/what our clients say/i)).toBeInTheDocument();
  });

  it('includes call-to-action buttons', () => {
    render(<HomePage />);

    const ctaButtons = screen.getAllByRole('link', { name: /get started/i });
    expect(ctaButtons.length).toBeGreaterThan(0);
  });

  it('has proper meta tags for SEO', () => {
    // This would typically be tested with a different approach
    // as metadata is handled by Next.js
    expect(HomePage.metadata).toBeDefined();
    expect(HomePage.metadata.title).toContain('SolanaLink');
  });
});
```

### Utility Tests

```typescript
// src/__tests__/utils/formatters.test.ts
import { describe, it, expect } from 'vitest';
import { formatDate, formatCurrency, slugify } from '@/utils/formatters';

describe('formatters', () => {
  describe('formatDate', () => {
    it('formats date in Japanese locale', () => {
      const date = new Date('2024-01-15');
      expect(formatDate(date)).toBe('2024年1月15日');
    });

    it('handles invalid dates', () => {
      expect(formatDate('invalid')).toBe('Invalid Date');
    });
  });

  describe('formatCurrency', () => {
    it('formats JPY currency', () => {
      expect(formatCurrency(1000)).toBe('¥1,000');
    });

    it('formats USD currency', () => {
      expect(formatCurrency(1000, 'USD')).toBe('$1,000.00');
    });
  });

  describe('slugify', () => {
    it('converts text to URL-friendly slug', () => {
      expect(slugify('Hello World!')).toBe('hello-world');
    });

    it('handles Japanese characters', () => {
      expect(slugify('こんにちは世界')).toBe('konnichiha-sekai');
    });
  });
});
```

### Integration Tests

```typescript
// src/__tests__/integration/BlogNavigation.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BlogList from '@/app/news-and-blog-list/page';
import BlogPost from '@/app/news-and-blog-list/[slug]/page';

describe('Blog Navigation Integration', () => {
  it('navigates from blog list to individual post', async () => {
    const user = userEvent.setup();

    // Start at blog list
    const { rerender } = render(<BlogList />);

    // Find and click on first article
    const firstArticle = screen.getByRole('article').querySelector('a');
    expect(firstArticle).toHaveAttribute('href', expect.stringContaining('/news-and-blog-list/'));

    // Simulate navigation to blog post
    const slug = 'future-of-cloud-computing';
    rerender(<BlogPost params={{ slug }} />);

    // Verify blog post content is displayed
    expect(screen.getByRole('heading', { level: 1 }))
      .toHaveTextContent(/The Future of Cloud Computing/i);
  });

  it('displays related articles on blog post page', () => {
    render(<BlogPost params={{ slug: 'edge-computing' }} />);

    const relatedSection = screen.getByText(/related articles/i)
      .closest('section');

    expect(relatedSection).toBeInTheDocument();

    const relatedLinks = relatedSection?.querySelectorAll('a');
    expect(relatedLinks?.length).toBeGreaterThan(0);
  });
});
```

## Testing Best Practices

### 1. Test Structure

```typescript
describe('ComponentName', () => {
  // Group related tests
  describe('rendering', () => {
    it('renders with default props', () => {});
    it('renders with custom props', () => {});
  });

  describe('user interactions', () => {
    it('handles click events', () => {});
    it('handles keyboard navigation', () => {});
  });

  describe('accessibility', () => {
    it('has proper ARIA attributes', () => {});
    it('is keyboard accessible', () => {});
  });
});
```

### 2. Query Priority

Follow React Testing Library's query priority:

1. **Queries Accessible to Everyone**:
   - `getByRole`
   - `getByLabelText`
   - `getByPlaceholderText`
   - `getByText`

2. **Semantic Queries**:
   - `getByAltText`
   - `getByTitle`

3. **Test IDs** (last resort):
   - `getByTestId`

### 3. Async Testing

```typescript
// ✅ Good: Use userEvent for interactions
it('submits form with user data', async () => {
  const user = userEvent.setup();
  render(<ContactForm />);

  await user.type(screen.getByLabelText(/name/i), 'John Doe');
  await user.type(screen.getByLabelText(/email/i), 'john@example.com');
  await user.click(screen.getByRole('button', { name: /submit/i }));

  expect(await screen.findByText(/thank you/i)).toBeInTheDocument();
});

// ❌ Bad: Using fireEvent directly
it('submits form', () => {
  render(<ContactForm />);
  fireEvent.click(screen.getByRole('button'));
  // Missing async handling
});
```

### 4. Mocking

```typescript
// Mock external dependencies
vi.mock('@/lib/api', () => ({
  fetchData: vi.fn().mockResolvedValue({ data: 'mocked' }),
}));

// Mock components when necessary
vi.mock('@/app/components/HeavyComponent', () => ({
  default: () => <div>Mocked Heavy Component</div>,
}));

// Clean up mocks
afterEach(() => {
  vi.clearAllMocks();
});
```

### 5. Accessibility Testing

```typescript
it('meets accessibility standards', async () => {
  const { container } = render(<Component />);

  // Check for basic accessibility
  const results = await axe(container);
  expect(results).toHaveNoViolations();

  // Check specific ARIA attributes
  const button = screen.getByRole('button');
  expect(button).toHaveAttribute('aria-label');

  // Check keyboard navigation
  const user = userEvent.setup();
  await user.tab();
  expect(button).toHaveFocus();
});
```

## Coverage Requirements

### Target Coverage

```
File                | % Stmts | % Branch | % Funcs | % Lines |
--------------------|---------|----------|---------|---------|
All files           |   80.0  |   70.0   |   80.0  |   80.0  |
 components/        |   85.0  |   75.0   |   85.0  |   85.0  |
 pages/             |   75.0  |   65.0   |   75.0  |   75.0  |
 utils/             |   95.0  |   90.0   |   95.0  |   95.0  |
```

### Improving Coverage

1. **Identify uncovered lines**:
```bash
npm run test:coverage
open coverage/index.html
```

2. **Focus on critical paths**:
   - User interactions
   - Error states
   - Edge cases
   - Conditional rendering

3. **Exclude files appropriately**:
```javascript
// vitest.config.ts
coverage: {
  exclude: [
    'src/test/**',
    '**/*.config.{js,ts}',
    '**/*.d.ts',
    'src/app/layout.tsx', // If mostly boilerplate
  ],
}
```

## Continuous Integration

### GitHub Actions Test Job

```yaml
# .github/workflows/test.yml
name: Test

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18, 20]

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run linting
        run: npm run lint

      - name: Run tests with coverage
        run: npm run test:coverage

      - name: Upload coverage to Codecov
        uses: codecov/codecov-action@v3
        with:
          file: ./coverage/lcov.info
          flags: unittests
          name: codecov-umbrella

      - name: Archive coverage reports
        uses: actions/upload-artifact@v3
        with:
          name: coverage-report
          path: coverage/
```

### Pre-commit Hook

Using husky and lint-staged:

```json
// package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{ts,tsx}": [
      "npm run lint --fix",
      "npm run test --related"
    ]
  }
}
```

## Debugging Tests

### Debugging Techniques

1. **Use debug utility**:
```typescript
import { render, screen, debug } from '@testing-library/react';

it('debug test output', () => {
  render(<Component />);

  // Print entire DOM
  debug();

  // Print specific element
  debug(screen.getByRole('button'));
});
```

2. **VS Code Debugging**:

Create `.vscode/launch.json`:
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug Tests",
      "runtimeExecutable": "npm",
      "runtimeArgs": ["run", "test"],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    }
  ]
}
```

3. **Console logging**:
```typescript
it('debug with console', () => {
  render(<Component />);

  const element = screen.getByRole('button');
  console.log('Element:', element);
  console.log('Classes:', element.className);
  console.log('Props:', element.getAttribute('data-props'));
});
```

4. **Pause execution**:
```typescript
it('pause test execution', async () => {
  render(<Component />);

  // Pause for debugging
  await new Promise(resolve => setTimeout(resolve, 10000));

  // Or use debugger
  debugger;
});
```

### Common Issues

#### Issue: "Cannot find module" errors

```bash
# Solution: Clear cache and reinstall
rm -rf node_modules .next
npm ci
```

#### Issue: Tests timing out

```typescript
// Increase timeout for specific test
it('slow test', async () => {
  // Test code
}, { timeout: 10000 });
```

#### Issue: React act() warnings

```typescript
// Wrap state updates in act()
import { act } from 'react';

it('updates state', async () => {
  const { result } = renderHook(() => useCustomHook());

  await act(async () => {
    result.current.updateState('new value');
  });

  expect(result.current.state).toBe('new value');
});
```

## Test Utilities

### Custom Test Utilities

Create `src/test/utils.tsx`:

```typescript
import { render, RenderOptions } from '@testing-library/react';
import { ReactElement, ReactNode } from 'react';

// Custom providers wrapper
function AllTheProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <RouterProvider>
        {children}
      </RouterProvider>
    </ThemeProvider>
  );
}

// Custom render function
export function renderWithProviders(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  return render(ui, { wrapper: AllTheProviders, ...options });
}

// Test data factories
export const createMockArticle = (overrides = {}) => ({
  id: '1',
  title: 'Test Article',
  slug: 'test-article',
  author: 'Test Author',
  date: '2024-01-01',
  content: 'Test content',
  ...overrides,
});

// Async utilities
export const waitForLoadingToFinish = () =>
  waitForElementToBeRemoved(() => screen.queryAllByText(/loading/i));

// Accessibility helpers
export const expectToBeAccessible = async (container: HTMLElement) => {
  const results = await axe(container);
  expect(results).toHaveNoViolations();
};
```

### Mock Data

Create `src/test/mocks.ts`:

```typescript
export const mockServices = [
  {
    id: '1',
    title: 'Cloud Computing',
    description: 'Scalable cloud solutions',
    icon: '☁️',
  },
  {
    id: '2',
    title: 'Web Development',
    description: 'Modern web applications',
    icon: '🌐',
  },
];

export const mockTestimonials = [
  {
    id: '1',
    name: 'John Doe',
    company: 'Tech Corp',
    review: 'Excellent service!',
    rating: 5,
  },
];

export const mockBlogPosts = [
  {
    slug: 'test-post-1',
    title: 'Test Post 1',
    author: 'Author 1',
    date: '2024-01-01',
    excerpt: 'Test excerpt 1',
  },
];
```

## Conclusion

This testing guide provides comprehensive information for writing and maintaining tests in the SolanaLink Frontend project. Following these guidelines will help ensure high code quality, maintainability, and confidence in the application's functionality.