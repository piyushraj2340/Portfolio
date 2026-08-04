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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 -z-10 bg-background/80 backdrop-blur-xl transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      <Container>
        <nav
          aria-label="Primary"
          className={`flex items-center justify-between gap-4 rounded-2xl px-4 py-3 transition-all duration-500 ${
            scrolled
              ? "glass shadow-[0_8px_40px_-12px_rgba(0,0,0,0.8)]"
              : "border border-transparent bg-transparent"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="text-sm font-bold tracking-[0.12em] text-foreground uppercase flex items-center gap-2"
          >
            <span className="relative grid size-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-primary via-secondary to-accent font-mono text-sm font-semibold text-primary-foreground shadow-lg">
              {siteConfig.name.split(" ")[0][0]}
            </span>
            <span className="hidden sm:block">
              {siteConfig.name.split(" ")[0]}
              <span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-2 lg:flex">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-text-secondary transition-colors duration-200 hover:bg-white/5 hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href={siteConfig.resumeUrl}
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-2.5 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-white/20 hover:shadow-lg"
            >
              <Download className="size-4" />
              Resume
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="glass inline-flex size-10 items-center justify-center rounded-xl text-foreground lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          hidden={!isOpen}
          className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-surface-elevated/95 p-2 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl lg:hidden"
        >
          <ul className="flex flex-col">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={handleNavClick}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-text-secondary transition-colors hover:bg-white/5 hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={siteConfig.resumeUrl}
            onClick={handleNavClick}
            className="mt-2 flex h-11 items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            <Download className="size-4" />
            Download Resume
          </Link>
        </div>
      </Container>
    </header>
  );
}