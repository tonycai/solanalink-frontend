import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ClientTestimonials from '../app/components/ClientTestimonials';

describe('ClientTestimonials', () => {
  it('renders section heading', () => {
    render(<ClientTestimonials />);
    expect(
      screen.getByText('Trusted by Leading Companies')
    ).toBeInTheDocument();
  });

  it('renders three testimonial cards', () => {
    render(<ClientTestimonials />);
    expect(screen.getByText('Alex Johnson')).toBeInTheDocument();
    expect(screen.getByText('Samantha Lee')).toBeInTheDocument();
    expect(screen.getByText('Dr. Emily Carter')).toBeInTheDocument();
  });
});

