import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HeroContent } from '../components/HeroContent';
import { HeroActions } from '../components/HeroActions';
import { HeroHighlights } from '../components/HeroHighlights';
import { SocialLinks } from '../components/SocialLinks';

const mockProfile = {
  name: 'Jane Doe',
  role: 'Senior Engineer',
  summary: 'Building great things.',
  philosophy: 'Code is art.',
  highlights: ['Testing', 'Accessibility', 'Performance'],
};

const mockPrimaryAction = { label: 'Primary', href: '/primary' };
const mockSecondaryAction = { label: 'Secondary', href: '/secondary', external: true };
const mockSocialLinks = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Unknown', href: 'https://unknown.com' },
];

describe('Hero Highlights', () => {
  it('renders nothing if items array is empty', () => {
    const { container } = render(<HeroHighlights items={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders items correctly with default label', () => {
    render(<HeroHighlights items={mockProfile.highlights} />);
    expect(screen.getByText('Engineering focus')).toBeInTheDocument();
    mockProfile.highlights.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('renders custom label if provided', () => {
    render(<HeroHighlights items={['Item 1']} label="Custom Label" />);
    expect(screen.getByText('Custom Label')).toBeInTheDocument();
  });
});

describe('Social Links', () => {
  it('renders nothing if links array is empty', () => {
    const { container } = render(<SocialLinks links={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders links with correct attributes', () => {
    render(<SocialLinks links={mockSocialLinks} />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);
    
    expect(links[0]).toHaveAttribute('href', 'https://github.com');
    expect(links[0]).toHaveAttribute('target', '_blank');
    expect(links[0]).toHaveAttribute('rel', 'noopener noreferrer');
    expect(screen.getByText('GitHub')).toBeInTheDocument();
  });

  it('can be navigated via keyboard', async () => {
    const user = userEvent.setup();
    render(<SocialLinks links={mockSocialLinks} />);
    const links = screen.getAllByRole('link');
    
    await user.tab();
    expect(links[0]).toHaveFocus();
    
    await user.tab();
    expect(links[1]).toHaveFocus();
    
    await user.tab();
    expect(links[2]).toHaveFocus();
  });
});

describe('Hero Actions', () => {
  it('renders primary and secondary actions', () => {
    render(<HeroActions primaryAction={mockPrimaryAction} secondaryAction={mockSecondaryAction} />);
    
    const primary = screen.getByRole('link', { name: /primary/i });
    expect(primary).toHaveAttribute('href', '/primary');
    expect(primary).not.toHaveAttribute('target');

    const secondary = screen.getByRole('link', { name: /secondary/i });
    expect(secondary).toHaveAttribute('href', '/secondary');
    expect(secondary).toHaveAttribute('target', '_blank');
    expect(secondary).toHaveAttribute('rel', 'noopener noreferrer');
  });
});

describe('Hero Content', () => {
  it('renders availability badge if text is provided', () => {
    render(
      <HeroContent
        profile={mockProfile}
        socialLinks={mockSocialLinks}
        availabilityText="Available Now"
        primaryAction={mockPrimaryAction}
        secondaryAction={mockSecondaryAction}
      />
    );
    expect(screen.getByText('Available Now')).toBeInTheDocument();
  });

  it('hides availability badge if text is null', () => {
    render(
      <HeroContent
        profile={mockProfile}
        socialLinks={mockSocialLinks}
        availabilityText={null}
        primaryAction={mockPrimaryAction}
        secondaryAction={mockSecondaryAction}
      />
    );
    expect(screen.queryByText('Available Now')).not.toBeInTheDocument();
  });

  it('renders profile data correctly', () => {
    render(
      <HeroContent
        profile={mockProfile}
        socialLinks={mockSocialLinks}
        availabilityText="Available"
        primaryAction={mockPrimaryAction}
        secondaryAction={mockSecondaryAction}
      />
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Jane Doe');
    expect(screen.getByText('Senior Engineer')).toBeInTheDocument();
    expect(screen.getByText('Building great things.')).toBeInTheDocument();
  });
});
