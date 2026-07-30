import Link from "next/link";
import { siteConfig } from "@/config/site";
import { navigationItems } from "@/lib/navigation";
import { Container } from "./Container";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/80 bg-background/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-sm font-bold tracking-[0.14em] text-foreground uppercase">
          {siteConfig.name}
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-text-secondary transition hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href={siteConfig.resumeUrl}
          className="rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition hover:bg-primary-hover"
        >
          Download Resume
        </Link>
      </Container>
    </header>
  );
}