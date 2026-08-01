import { siteConfig } from "@/config/site";
import { profile } from "@/content/profile";
import { socialLinks } from "@/content/social";

/**
 * Injects JSON-LD structured data for SEO.
 * Identifies the site owner as a 'Person' entity to help build Google's Knowledge Graph.
 */
export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    url: siteConfig.url,
    description: profile.summary,
    sameAs: socialLinks
      .filter((link) => !link.href.startsWith("mailto:"))
      .map((link) => link.href),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
