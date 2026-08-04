"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { siteConfig } from "@/config/site";
import { socialLinks } from "@/content/social";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const socialIconMap: Record<string, React.ElementType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
};

export function ContactSection() {
  return (
    <Section id="contact">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect"
          description="Have a project in mind or want to discuss opportunities? I'd love to hear from you."
        />
      </ScrollReveal>

      <div className="mx-auto mt-16 max-w-2xl text-center">
        <ScrollReveal delay={150}>
          <a
            href={`mailto:${siteConfig.email}`}
            className="group inline-flex flex-col items-center gap-4"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-text-muted">
              Get in touch
            </span>
            <span className="text-3xl font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary sm:text-4xl md:text-5xl">
              {siteConfig.email}
            </span>
            <div className="mt-4 flex h-10 items-center gap-2 rounded-full bg-white/5 px-6 text-sm font-semibold text-text-secondary transition-all duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
              Say Hello
              <ArrowUpRight className="size-4" />
            </div>
          </a>

          {/* Social Links */}
          <div className="mt-16 flex items-center justify-center gap-6">
            {socialLinks.map((link) => {
              const normalized = link.label.toLowerCase();
              if (normalized === "email") return null; // Already front and center
              const Icon = socialIconMap[normalized] || FiGlobe;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-primary"
                  aria-label={link.label}
                >
                  <Icon className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
                  {link.label}
                </Link>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
