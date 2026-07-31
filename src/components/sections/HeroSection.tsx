import { profile as defaultProfile } from "@/content/profile";
import { socialLinks as defaultSocialLinks } from "@/content/social";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/layout/Section";
import { HeroContent } from "@/features/hero/components/HeroContent";
import { HeroHighlights } from "@/features/hero/components/HeroHighlights";
import type { HeroSectionProps } from "@/features/hero/types";

/**
 * Hero section — the first screen visitors see.
 *
 * Answers three questions immediately:
 * 1. Who are you?
 * 2. What do you build?
 * 3. Why should I continue?
 *
 * Layout:
 * - Desktop: 60/40 two-column split (content | highlights card)
 * - Tablet:  Stacked, content first
 * - Mobile:  Single column, content → highlights
 *
 * @see docs/06 UI Designer.md § 7. Hero Section
 * @see docs/04 Component Planning.md § HeroSection
 */
export function HeroSection({
  profile = defaultProfile,
  socialLinks = defaultSocialLinks,
  availabilityText = "Available for product-focused roles",
  primaryAction = { label: "View Projects", href: "/projects" },
  secondaryAction = {
    label: "Download Resume",
    href: siteConfig.resumeUrl,
    external: false,
  },
}: HeroSectionProps = {}) {
  return (
    <Section
      id="hero"
      className="py-20 md:py-28 lg:py-32"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        {/* Left column — identity & CTAs */}
        <HeroContent
          profile={profile}
          socialLinks={socialLinks}
          availabilityText={availabilityText}
          primaryAction={primaryAction}
          secondaryAction={secondaryAction}
        />

        {/* Right column — highlights card */}
        <HeroHighlights
          items={profile.highlights}
          className="lg:justify-self-end lg:max-w-md"
        />
      </div>
    </Section>
  );
}
