"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { profile } from "@/content/profile";
import { siteConfig } from "@/config/site";
import { navigationItems } from "@/content/navigation";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");

  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navigationItems.map((link) => link.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    for (const section of sections) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 bg-background/80 backdrop-blur-xl transition-opacity duration-500",
          scrolled ? "opacity-100" : "opacity-0"
        )}
      />

      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <nav
          aria-label="Main"
          className={cn(
            "flex items-center justify-between gap-4 rounded-2xl px-3 py-2 transition-all duration-500 sm:px-4",
            scrolled
              ? "border border-white/10 bg-white/[0.04] shadow-[0_8px_40px_-12px_rgba(0,0,0,0.8)]"
              : "border border-transparent"
          )}
        >
          <a
            href="#home"
            className="group flex items-center gap-2.5 rounded-xl px-1 py-1"
          >
            <span className="relative grid size-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-primary via-secondary to-accent font-mono text-sm font-semibold text-primary-foreground">
              {initials}
            </span>
            <span className="hidden text-sm font-semibold tracking-tight text-foreground sm:block">
              {profile.name}
              <span className="block text-xs font-normal text-text-muted">
                {profile.role}
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navigationItems.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={active === link.href ? "page" : undefined}
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-sm transition-colors",
                    active === link.href
                      ? "text-foreground"
                      : "text-text-muted hover:text-foreground"
                  )}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-3 -bottom-0.5 h-px rounded-full bg-gradient-to-r from-primary to-accent transition-opacity duration-300",
                      active === link.href ? "opacity-100" : "opacity-0"
                    )}
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-10 items-center gap-2 rounded-xl bg-foreground px-4 text-sm font-medium text-background transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.35)] sm:inline-flex"
            >
              <Download className="size-4" aria-hidden="true" />
              Download Resume
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="glass grid size-10 place-items-center rounded-xl text-foreground lg:hidden"
            >
              <span className="sr-only">
                {open ? "Close menu" : "Open menu"}
              </span>
              {open ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        <div
          id="mobile-menu"
          hidden={!open}
          className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-surface-elevated/95 p-2 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl lg:hidden"
        >
          <ul className="flex flex-col">
            {navigationItems.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-4 py-3 text-sm transition-colors",
                    active === link.href
                      ? "bg-white/10 text-foreground"
                      : "text-text-muted hover:bg-white/5 hover:text-foreground"
                  )}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className="font-mono text-xs text-text-muted"
                  >
                    {link.href}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={siteConfig.resumeUrl}
            onClick={() => setOpen(false)}
            className="mt-2 flex h-11 items-center justify-center gap-2 rounded-xl bg-foreground text-sm font-medium text-background"
          >
            <Download className="size-4" aria-hidden="true" />
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}