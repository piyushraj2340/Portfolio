import { siteConfig } from "@/config/site";
import { profile } from "@/content/profile";
import { socialLinks } from "@/content/social";
import { skills } from "@/content/skills";
import { experiences } from "@/content/experience";
import { education } from "@/content/education";
import { projects } from "@/content/projects";

/**
 * JSON-LD graph for search engines and AI agents.
 */
export function StructuredData() {
  const knowsAbout = Array.from(
    new Set(skills.flatMap((category) => category.items))
  );

  const sameAs = socialLinks
    .filter((link) => !link.href.startsWith("mailto:"))
    .map((link) => link.href);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.title,
        description: siteConfig.description,
        inLanguage: "en",
        publisher: { "@id": `${siteConfig.url}/#person` },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteConfig.url}/#profilepage`,
        url: siteConfig.url,
        name: siteConfig.title,
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${siteConfig.url}/#person` },
        mainEntity: { "@id": `${siteConfig.url}/#person` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${siteConfig.url}${siteConfig.ogImage}`,
          width: siteConfig.ogImageWidth,
          height: siteConfig.ogImageHeight,
        },
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: profile.name,
        url: siteConfig.url,
        image: `${siteConfig.url}/images/piyush-raj-hero.webp`,
        email: siteConfig.email,
        jobTitle: profile.role,
        description: profile.summary,
        knowsAbout,
        sameAs,
        homeLocation: {
          "@type": "Place",
          name: profile.location,
        },
        worksFor: experiences.slice(0, 1).map((job) => ({
          "@type": "Organization",
          name: job.company,
        })),
        alumniOf: education
          .filter((item) => item.isVisible)
          .map((item) => ({
            "@type": "EducationalOrganization",
            name: item.institution,
          })),
        hasOccupation: {
          "@type": "Occupation",
          name: profile.role,
          skills: knowsAbout.join(", "),
        },
      },
      {
        "@type": "ItemList",
        "@id": `${siteConfig.url}/#projects`,
        name: "Featured projects",
        itemListElement: projects
          .filter((project) => project.featured)
          .map((project, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "SoftwareApplication",
              name: project.title,
              description: project.description,
              url: project.liveUrl || project.repositoryUrl || siteConfig.url,
              applicationCategory: "DeveloperApplication",
            },
          })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
