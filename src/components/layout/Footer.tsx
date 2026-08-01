"use client";

import Link from "next/link";
import { ArrowUp, Code2, Globe, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import { navigationItems } from "@/content/navigation";
import { socialLinks } from "@/content/social";
import { Container } from "./Container";

const socialIconMap: Record<string, React.ElementType> = {
  github: Code2,
  linkedin: Globe,
  email: Mail,
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 bg-surface">
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="text-lg font-bold tracking-[0.1em] uppercase"
            >
              {siteConfig.name.split(" ")[0]}
              <span className="text-primary">.</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-text-secondary">
              {siteConfig.description}
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
              Navigation
            </p>
            <nav className="flex flex-col gap-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-text-secondary transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
              Connect
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => {
                const normalized = link.label.toLowerCase();
                const Icon = socialIconMap[normalized] || Globe;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    target={normalized === "email" ? undefined : "_blank"}
                    rel={normalized === "email" ? undefined : "noopener noreferrer"}
                    className="inline-flex size-10 items-center justify-center rounded-xl border border-white/5 text-text-secondary transition-all duration-200 hover:border-white/10 hover:bg-white/5 hover:text-foreground"
                    aria-label={link.label}
                  >
                    <Icon className="size-4" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider + Bottom Row */}
        <div className="mt-10 flex items-center justify-between border-t border-white/5 pt-8">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex size-10 items-center justify-center rounded-xl border border-white/5 text-text-secondary transition-all duration-200 hover:border-white/10 hover:bg-white/5 hover:text-foreground"
            aria-label="Back to top"
          >
            <ArrowUp className="size-4" />
          </button>
        </div>
      </Container>
    </footer>
  );
}