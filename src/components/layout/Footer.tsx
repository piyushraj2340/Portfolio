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
      <Container className="py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Copyright */}
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="text-sm font-bold tracking-[0.1em] uppercase"
            >
              {siteConfig.name.split(" ")[0]}
              <span className="text-primary">.</span>
            </Link>
            <span className="text-sm text-text-muted">
              © {new Date().getFullYear()} All rights reserved.
            </span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const normalized = link.label.toLowerCase();
              const Icon = socialIconMap[normalized] || Globe;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  target={normalized === "email" ? undefined : "_blank"}
                  rel={normalized === "email" ? undefined : "noopener noreferrer"}
                  className="text-text-secondary transition-colors duration-200 hover:text-foreground"
                  aria-label={link.label}
                >
                  <Icon className="size-4" />
                </Link>
              );
            })}
          </div>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-foreground"
          >
            Back to top
            <ArrowUp className="size-4 transition-transform duration-200 group-hover:-translate-y-1" />
          </button>
        </div>
      </Container>
    </footer>
  );
}