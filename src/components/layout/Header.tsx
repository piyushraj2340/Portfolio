"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import { siteConfig } from "@/config/site";
import { navigationItems } from "@/content/navigation";
import { Container } from "./Container";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change / anchor click
  const handleNavClick = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background border-b border-white/5 shadow-md shadow-black/20" : "bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between lg:h-18">
        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-bold tracking-[0.12em] text-foreground uppercase"
        >
          {siteConfig.name.split(" ")[0]}
          <span className="text-primary">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href={siteConfig.resumeUrl}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/20"
          >
            <Download className="size-4" />
            Resume
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex size-10 items-center justify-center rounded-xl text-text-secondary transition-colors hover:bg-white/5 hover:text-foreground lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-background border-b border-white/5 lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="rounded-xl px-4 py-3 text-sm font-medium text-text-secondary transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 border-t border-white/5 pt-4">
              <Link
                href={siteConfig.resumeUrl}
                onClick={handleNavClick}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-hover"
              >
                <Download className="size-4" />
                Download Resume
              </Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}