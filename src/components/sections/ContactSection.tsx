import Link from "next/link";
import { siteConfig } from "@/config/site";
import { socialLinks } from "@/content/social";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function ContactSection() {
  return (
    <Section id="contact" className="bg-surface">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Contact"
            title="Let us connect"
            description="If you are hiring for software engineering roles, I would be glad to discuss opportunities and how I can contribute."
          />
          <p className="text-sm text-text-secondary">
            Email: <Link href={`mailto:${siteConfig.email}`}>{siteConfig.email}</Link>
          </p>
          <p className="text-sm text-text-secondary">Location: {siteConfig.location}</p>
        </div>
        <div className="surface-card p-6">
          <h3 className="text-lg font-semibold text-foreground">Professional Profiles</h3>
          <ul className="mt-4 space-y-2">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm font-medium text-primary hover:text-primary-hover">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
