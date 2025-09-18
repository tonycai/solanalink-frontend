import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from '../app/components/Footer';

describe('Footer', () => {
  it('renders brand name', () => {
    render(<Footer />);
    expect(screen.getByText('SolanaLink')).toBeInTheDocument();
  });

  it('has sitemap links', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute(
      'href',
      '/homepage/'
    );
    expect(screen.getByRole('link', { name: 'Services' })).toHaveAttribute(
      'href',
      '/our-services/'
    );
    expect(screen.getByRole('link', { name: 'News & Blog' })).toHaveAttribute(
      'href',
      '/news-and-blog-list/'
    );
    expect(
      screen.getByRole('link', { name: 'Compliance & Investigations' })
    ).toHaveAttribute('href', '/compliance-and-investigations/');
    expect(screen.getByRole('link', { name: 'About Us' })).toHaveAttribute(
      'href',
      '/about-us/'
    );
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute(
      'href',
      '/contact-us/'
    );
  });
});

