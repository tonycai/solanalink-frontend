// Testing Library custom matchers
import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Provide a default pathname for usePathname used in header active state
vi.mock('next/navigation', () => ({
  usePathname: () => '/homepage/',
}));
