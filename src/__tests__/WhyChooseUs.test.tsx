import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import WhyChooseUs from '../app/components/WhyChooseUs';

describe('WhyChooseUs', () => {
  it('renders title and copy', () => {
    render(<WhyChooseUs />);
    expect(screen.getByText('Why Choose SolanaLink?')).toBeInTheDocument();
    expect(screen.getByText('Our Commitment')).toBeInTheDocument();
  });

  it('renders three feature cards', () => {
    render(<WhyChooseUs />);
    expect(screen.getByText('Proven Experience')).toBeInTheDocument();
    expect(screen.getByText('Innovative Solutions')).toBeInTheDocument();
    expect(screen.getByText('Client-Centric Approach')).toBeInTheDocument();
  });
});

