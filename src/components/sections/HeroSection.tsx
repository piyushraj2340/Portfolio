import Link from "next/link";
import { profile } from "@/content/profile";
import { socialLinks } from "@/content/social";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/layout/Section";

export function HeroSection() {
  return (
    <Section id="hero" className="section-surface py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-[1.25fr_0.75fr] md:items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Available for product-focused roles</p>
          <h1 className="text-balance text-4xl font-bold md:text-7xl">{profile.name}</h1>
          <p className="text-xl font-semibold text-text-secondary md:text-2xl">{profile.role}</p>
          <p className="max-w-3xl text-base text-text-secondary md:text-lg">{profile.summary}</p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-hover"
            >
              View Projects
            </Link>
            <Link
              href={siteConfig.resumeUrl}
              className="rounded-lg border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              Download Resume
            </Link>
          </div>
          <ul className="flex flex-wrap items-center gap-4 pt-2">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm font-medium text-text-secondary hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="surface-card mx-auto w-full max-w-md p-6 md:mx-0">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-text-muted">Engineering focus</p>
          <ul className="mt-4 space-y-3">
            {profile.highlights.map((item) => (
              <li key={item} className="text-sm text-text-secondary">
                - {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
