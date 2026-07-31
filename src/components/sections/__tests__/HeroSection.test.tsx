import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HeroSection } from '../HeroSection';

describe('HeroSection Integration', () => {
  it('renders the complete hero section with default content', () => {
    const { container } = render(<HeroSection />);
    
    // Checks that the section exists
    const section = container.querySelector('section#hero');
    expect(section).toBeInTheDocument();
    expect(document.getElementById('hero')).toBeInTheDocument();

    // Verify default fallbacks are working by looking for default text
    expect(screen.getByText('Available for product-focused roles')).toBeInTheDocument();
    
    // The default primary action is "View Projects"
    expect(screen.getByRole('link', { name: /view projects/i })).toBeInTheDocument();
    
    // The default secondary action is "Download Resume"
    expect(screen.getByRole('link', { name: /download resume/i })).toBeInTheDocument();
  });

  it('accepts and renders custom props', () => {
    const customProfile = {
      name: 'Custom Name',
      role: 'Custom Role',
      summary: 'Custom summary text',
      philosophy: 'Custom philosophy',
      highlights: ['Custom Highlight 1', 'Custom Highlight 2'],
    };

    render(
      <HeroSection 
        profile={customProfile}
        availabilityText="Busy right now"
      />
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Custom Name');
    expect(screen.getByText('Custom Role')).toBeInTheDocument();
    expect(screen.getByText('Busy right now')).toBeInTheDocument();
    expect(screen.getByText('Custom Highlight 1')).toBeInTheDocument();
    expect(screen.getByText('Custom Highlight 2')).toBeInTheDocument();
  });
});
