import Link from "next/link";
import { Code2, Globe, AtSign, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SocialLink } from "@/types/social";

type SocialLinksProps = {
  /** List of social link objects (label + href). */
  links: SocialLink[];
  /** Additional class names for the list container. */
  className?: string;
};

/**
 * Social links for professional profiles.
 * Renders accessible anchor elements with contextual icons.
 * Reusable across hero, footer, and contact sections.
 */
export function SocialLinks({ links, className }: SocialLinksProps) {
  if (links.length === 0) return null;

  return (
    <ul
      className={cn("flex flex-wrap items-center gap-1", className)}
      aria-label="Social profiles"
    >
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <SocialIcon label={link.label} />
            <span>{link.label}</span>
            <span className="sr-only">(opens in a new tab)</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

const iconMap: Record<string, React.ElementType> = {
  github: Code2,
  linkedin: Globe,
  x: AtSign,
  twitter: AtSign,
};

/** Maps social labels to Lucide icons. Falls back to ExternalLink. */
function SocialIcon({ label }: { label: string }) {
  const iconClass = "size-4 shrink-0";
  const normalized = label.toLowerCase();
  const Icon = iconMap[normalized] || ExternalLink;

  return <Icon className={iconClass} aria-hidden="true" />;
}
