import type { Profile } from "@/types/profile";
import type { SocialLink } from "@/types/social";

/** Props for the full HeroSection component. */
export type HeroSectionProps = {
  /** Profile data to display. Falls back to content/profile. */
  profile?: Profile;
  /** Social links to render. Falls back to content/social. */
  socialLinks?: SocialLink[];
  /** Availability badge text. Set to null to hide. */
  availabilityText?: string | null;
  /** Primary CTA config. */
  primaryAction?: HeroAction;
  /** Secondary CTA config. */
  secondaryAction?: HeroAction;
};

/** Describes a single call-to-action in the hero. */
export type HeroAction = {
  label: string;
  href: string;
  /** Whether the link points to an external resource or download. */
  external?: boolean;
};
