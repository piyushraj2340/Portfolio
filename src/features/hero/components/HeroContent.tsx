import { Badge } from "@/components/ui/badge";
import { HeroActions } from "./HeroActions";
import { SocialLinks } from "./SocialLinks";
import type { Profile } from "@/types/profile";
import type { SocialLink } from "@/types/social";
import type { HeroAction } from "@/features/hero/types";

type HeroContentProps = {
  profile: Profile;
  socialLinks: SocialLink[];
  availabilityText: string | null;
  primaryAction: HeroAction;
  secondaryAction: HeroAction;
};

/**
 * The left column of the hero: availability badge, heading,
 * role, summary, CTAs, and social links.
 *
 * Separated from the section shell so the content composition is
 * testable and reusable independently.
 */
export function HeroContent({
  profile,
  socialLinks,
  availabilityText,
  primaryAction,
  secondaryAction,
}: HeroContentProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* Availability indicator */}
      {availabilityText ? (
        <div>
          <Badge
            variant="outline"
            className="gap-1.5 border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary"
          >
            <span
              className="relative flex size-2"
              aria-hidden="true"
            >
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            {availabilityText}
          </Badge>
        </div>
      ) : null}

      {/* Heading cluster */}
      <div className="space-y-3">
        <h1 id="hero-heading" className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {profile.name}
        </h1>
        <p className="text-lg font-semibold text-muted-foreground sm:text-xl md:text-2xl">
          {profile.role}
        </p>
      </div>

      {/* Summary */}
      <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
        {profile.summary}
      </p>

      {/* Actions */}
      <HeroActions
        primaryAction={primaryAction}
        secondaryAction={secondaryAction}
      />

      {/* Social links */}
      <SocialLinks links={socialLinks} className="-ml-3" />
    </div>
  );
}
