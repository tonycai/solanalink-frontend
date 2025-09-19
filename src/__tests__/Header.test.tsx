import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from '../app/components/Header';

describe('Header', () => {
  it('renders brand name', () => {
    render(<Header />);
    expect(screen.getByText('SolanaLink')).toBeInTheDocument();
  });

  it('has key navigation links', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute(
      'href',
      '/homepage/'
    );
    expect(screen.getByRole('link', { name: 'Services' })).toHaveAttribute(
      'href',
      '/our-services/'
    );
    expect(
      screen.getByRole('link', { name: 'Compliance & Investigations' })
    ).toHaveAttribute('href', '/compliance-and-investigations/');
    expect(screen.getByRole('link', { name: 'Industries' })).toHaveAttribute(
      'href',
      '/industries/'
    );
    expect(screen.getByRole('link', { name: 'Case Studies' })).toHaveAttribute(
      'href',
      '/case-studies/'
    );
    expect(screen.getByRole('link', { name: 'About Us' })).toHaveAttribute(
      'href',
      '/about-us/'
    );
    expect(screen.getByRole('link', { name: 'Careers' })).toHaveAttribute(
      'href',
      '/careers/'
    );
    expect(screen.getByRole('link', { name: 'News & Blog' })).toHaveAttribute(
      'href',
      '/news-and-blog-list/'
    );
  });

  it('marks the current page with aria-current', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute(
      'aria-current',
      'page'
    );
  });

  it('has Contact Us CTA', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: 'Contact Us' })).toHaveAttribute(
      'href',
      '/contact-us/'
    );
  });
});
