# Contributing to SolanaLink Frontend

Thank you for your interest in contributing to SolanaLink Frontend! This document provides guidelines and instructions for contributing to the project.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Development Process](#development-process)
4. [Submitting Changes](#submitting-changes)
5. [Coding Standards](#coding-standards)
6. [Testing Requirements](#testing-requirements)
7. [Documentation](#documentation)
8. [Community](#community)

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inclusive environment for all contributors. We expect all participants to:

- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Gracefully accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

### Unacceptable Behavior

- Harassment, discrimination, or offensive comments
- Personal attacks or trolling
- Publishing others' private information
- Any conduct that could reasonably be considered inappropriate

## Getting Started

### Prerequisites

Before contributing, ensure you have:

- Node.js 20+ and npm 10+
- Git installed and configured
- A GitHub account
- Familiarity with TypeScript and React

### Setting Up Your Development Environment

1. **Fork the repository**:
   - Click the "Fork" button on GitHub
   - Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/solanalink-frontend.git
   cd solanalink-frontend
   ```

2. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/original-org/solanalink-frontend.git
   ```

3. **Install dependencies**:
   ```bash
   npm ci
   ```

4. **Create a branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

5. **Start development server**:
   ```bash
   npm run dev
   ```

## Development Process

### Branch Naming Convention

Use descriptive branch names with prefixes:

- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `test/` - Test additions or fixes
- `chore/` - Maintenance tasks

Examples:
- `feature/add-payment-integration`
- `fix/navigation-mobile-menu`
- `docs/update-api-documentation`

### Development Workflow

1. **Stay up to date**:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Make your changes**:
   - Write clean, maintainable code
   - Follow the coding standards
   - Add tests for new features
   - Update documentation as needed

3. **Test your changes**:
   ```bash
   npm run lint
   npm run test
   npm run build
   ```

4. **Commit your changes**:
   - Use meaningful commit messages
   - Follow conventional commits format

### Commit Message Format

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
type(scope): subject

body

footer
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, semicolons, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `perf`: Performance improvements

**Examples:**
```bash
feat(blog): add search functionality to blog listing

fix(header): correct mobile menu toggle behavior

docs(readme): update deployment instructions

test(components): add tests for ServiceCard component
```

## Submitting Changes

### Pull Request Process

1. **Ensure your branch is up to date**:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

3. **Create a Pull Request**:
   - Go to the original repository on GitHub
   - Click "New Pull Request"
   - Select your fork and branch
   - Fill out the PR template

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix (non-breaking change that fixes an issue)
- [ ] New feature (non-breaking change that adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Testing
- [ ] Tests pass locally
- [ ] New tests added for new features
- [ ] Existing tests updated as needed

## Screenshots (if applicable)
Add screenshots to demonstrate UI changes

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-reviewed code
- [ ] Documentation updated
- [ ] No console warnings or errors
- [ ] Accessibility checked
- [ ] Mobile responsive
```

### Pull Request Review Process

1. **Automated Checks**: CI/CD runs tests and linting
2. **Code Review**: At least one maintainer reviews
3. **Feedback**: Address any requested changes
4. **Approval**: Maintainer approves
5. **Merge**: PR is merged to main branch

## Coding Standards

### TypeScript Guidelines

```typescript
// ✅ Good: Explicit types
interface UserData {
  id: string;
  name: string;
  email: string;
}

// ❌ Bad: Using any
const userData: any = {};
```

### React Best Practices

```typescript
// ✅ Good: Functional components with TypeScript
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export default function Button({
  label,
  onClick,
  variant = 'primary'
}: ButtonProps) {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
```

### File Organization

```
src/app/
├── components/         # Shared components
│   └── Button.tsx     # PascalCase for components
├── utils/             # Utility functions
│   └── formatDate.ts  # camelCase for utilities
└── constants/         # Constants
    └── config.ts      # Configuration constants
```

### CSS/Styling

- Use Tailwind CSS utilities
- Follow mobile-first approach
- Keep custom CSS minimal
- Use CSS custom properties for theming

```tsx
// ✅ Good: Organized Tailwind classes
<div className="
  flex flex-col md:flex-row
  gap-4 p-6
  bg-white dark:bg-gray-900
  rounded-lg shadow-sm
">

// ❌ Bad: Unorganized classes
<div className="shadow-sm flex p-6 bg-white rounded-lg md:flex-row gap-4 dark:bg-gray-900 flex-col">
```

## Testing Requirements

### Test Coverage

All contributions should maintain or improve test coverage:

- New features: Must include tests
- Bug fixes: Must include regression tests
- Refactoring: Must pass existing tests
- Minimum coverage: 80% for new code

### Writing Tests

```typescript
describe('ComponentName', () => {
  it('should render correctly', () => {
    // Test implementation
  });

  it('should handle user interaction', () => {
    // Test implementation
  });

  it('should be accessible', () => {
    // Accessibility test
  });
});
```

### Running Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Check coverage
npm run test:coverage
```

## Documentation

### Code Documentation

```typescript
/**
 * Formats a date string for display
 * @param date - The date to format
 * @param locale - The locale to use (default: 'ja-JP')
 * @returns Formatted date string
 * @example
 * formatDate(new Date('2024-01-01')) // '2024年1月1日'
 */
export function formatDate(
  date: Date | string,
  locale: string = 'ja-JP'
): string {
  // Implementation
}
```

### Component Documentation

```typescript
/**
 * ServiceCard component displays a service offering
 *
 * @component
 * @example
 * <ServiceCard
 *   title="Cloud Computing"
 *   description="Scalable cloud solutions"
 *   icon="☁️"
 * />
 */
```

### README Updates

Update relevant documentation when:
- Adding new features
- Changing configuration
- Modifying build process
- Adding dependencies

## Community

### Getting Help

- **GitHub Issues**: For bug reports and feature requests
- **Discussions**: For questions and ideas
- **Stack Overflow**: Tag with `solanalink`

### Recognition

Contributors are recognized in:
- GitHub contributors page
- Release notes
- Project documentation

### First-Time Contributors

Look for issues labeled:
- `good first issue` - Simple tasks for newcomers
- `help wanted` - Tasks needing assistance
- `documentation` - Documentation improvements

### Mentorship

New contributors can request mentorship by:
1. Commenting on an issue
2. Asking in discussions
3. Reaching out to maintainers

## Issue Reporting

### Bug Reports

When reporting bugs, include:

```markdown
**Description:**
Clear description of the bug

**Steps to Reproduce:**
1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior:**
What should happen

**Actual Behavior:**
What actually happens

**Screenshots:**
If applicable

**Environment:**
- OS: [e.g., macOS 14.0]
- Browser: [e.g., Chrome 120]
- Node version: [e.g., 20.10.0]

**Additional Context:**
Any other relevant information
```

### Feature Requests

For feature requests, provide:

```markdown
**Feature Description:**
Clear description of the feature

**Use Case:**
Why this feature is needed

**Proposed Solution:**
How you envision it working

**Alternatives Considered:**
Other approaches you've thought about

**Additional Context:**
Mockups, examples, or references
```

## Release Process

### Version Numbering

We follow [Semantic Versioning](https://semver.org/):
- MAJOR: Breaking changes
- MINOR: New features (backward compatible)
- PATCH: Bug fixes (backward compatible)

### Release Checklist

1. Update version in `package.json`
2. Update CHANGELOG.md
3. Run full test suite
4. Build production bundle
5. Create GitHub release
6. Deploy to production

## Legal

### License

By contributing, you agree that your contributions will be licensed under the MIT License.

### Developer Certificate of Origin

By contributing, you certify that:
1. The contribution is your original work
2. You have the right to submit it under the MIT license
3. You understand it may be redistributed

## Thank You!

Your contributions make SolanaLink Frontend better for everyone. We appreciate your time and effort in helping improve the project!

---

If you have questions not covered here, please open an issue or reach out to the maintainers.