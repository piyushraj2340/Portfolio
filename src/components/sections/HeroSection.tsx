"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  Code2,
  Globe,
  Mail,
  Sparkles,
} from "lucide-react";
import { profile } from "@/content/profile";
import { socialLinks } from "@/content/social";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/Container";

const socialIconMap: Record<string, React.ElementType> = {
  github: Code2,
  linkedin: Globe,
  email: Mail,
};

function TypingEffect({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        // Hide cursor after 2 seconds
        setTimeout(() => setShowCursor(false), 2000);
      }
    }, 80);
    return () => clearInterval(timer);
  }, [text]);

  return (
    <span>
      {displayText}
      {showCursor && (
        <span className="animate-typing-cursor text-primary">|</span>
      )}
    </span>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="hero-gradient grid-pattern relative min-h-screen"
      aria-labelledby="hero-heading"
    >
      {/* Floating Blobs */}
      <div
        className="animate-float pointer-events-none absolute left-[10%] top-[20%] size-72 rounded-full bg-primary/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="animate-float-delayed pointer-events-none absolute right-[15%] top-[40%] size-96 rounded-full bg-secondary/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="animate-float pointer-events-none absolute bottom-[20%] left-[30%] size-64 rounded-full bg-accent/5 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative z-10 flex min-h-screen items-center pb-20 pt-32">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column — Content */}
          <div className="flex flex-col gap-6">
            {/* Availability Badge */}
            {profile.availability && (
              <div className="animate-fade-in">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
                  <span className="relative flex size-2" aria-hidden="true">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                    <span className="relative inline-flex size-2 rounded-full bg-primary" />
                  </span>
                  {profile.availability}
                </span>
              </div>
            )}

            {/* Greeting */}
            <div className="animate-fade-in-up space-y-2">
              <p className="text-lg font-medium text-text-secondary">
                <TypingEffect text="Hi, I'm" />
              </p>
              <h1
                id="hero-heading"
                className="text-balance text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
              >
                <span className="gradient-text">{profile.name}</span>
              </h1>
            </div>

            {/* Role + Experience */}
            <div className="animate-fade-in-up delay-200 flex flex-wrap items-center gap-3 opacity-0">
              <span className="text-xl font-semibold text-foreground sm:text-2xl">
                {profile.role}
              </span>
              <span className="rounded-lg bg-white/5 px-3 py-1 text-sm font-medium text-text-secondary">
                {profile.yearsOfExperience} Years of Experience
              </span>
            </div>

            {/* Summary */}
            <p className="animate-fade-in-up delay-300 max-w-xl text-base leading-relaxed text-text-secondary opacity-0 md:text-lg">
              {profile.summary}
            </p>

            {/* CTAs */}
            <div className="animate-fade-in-up delay-400 flex flex-wrap items-center gap-4 opacity-0">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25"
              >
                View Projects
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href={siteConfig.resumeUrl}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:border-white/20 hover:bg-white/10"
              >
                <Download className="size-4" />
                Download Resume
              </Link>
            </div>

            {/* Social Links */}
            <div className="animate-fade-in-up delay-500 flex items-center gap-3 opacity-0">
              {socialLinks.map((link) => {
                const normalized = link.label.toLowerCase();
                const Icon = socialIconMap[normalized] || Globe;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    target={normalized === "email" ? undefined : "_blank"}
                    rel={
                      normalized === "email"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="inline-flex size-10 items-center justify-center rounded-xl border border-white/5 text-text-secondary transition-all duration-200 hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                    aria-label={link.label}
                  >
                    <Icon className="size-4" />
                    <span className="sr-only">
                      {normalized === "email" ? "" : "(opens in a new tab)"}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Column — Profile Image / Visual */}
          <div className="animate-fade-in-up delay-300 hidden items-center justify-center opacity-0 lg:flex">
            <div className="relative">
              {/* Glow Ring */}
              <div
                className="animate-pulse-glow absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-2xl"
                aria-hidden="true"
              />
              {/* Profile Image Placeholder */}
              <div className="relative size-80 overflow-hidden rounded-full border-2 border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02]">
                <div className="flex h-full items-center justify-center">
                  <Sparkles className="size-16 text-primary/40" />
                </div>
              </div>
              {/* Floating Stats */}
              <div className="glass-card absolute -right-4 top-8 px-4 py-2.5 text-center">
                <p className="text-2xl font-bold text-primary">
                  {profile.yearsOfExperience}+
                </p>
                <p className="text-xs text-text-muted">Years Exp.</p>
              </div>
              <div className="glass-card absolute -left-8 bottom-16 px-4 py-2.5 text-center">
                <p className="text-2xl font-bold text-secondary">10+</p>
                <p className="text-xs text-text-muted">Projects</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
