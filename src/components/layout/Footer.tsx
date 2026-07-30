import Link from "next/link";
import { siteConfig } from "@/config/site";
import { socialLinks } from "@/content/social";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-foreground">{siteConfig.name}</p>
          <p className="text-sm text-text-secondary">{siteConfig.description}</p>
        </div>
        <ul className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-sm text-text-secondary hover:text-foreground">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}