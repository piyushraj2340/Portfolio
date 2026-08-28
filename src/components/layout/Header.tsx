"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { profile } from "@/content/profile";
import { siteConfig } from "@/config/site";
import { navigationItems } from "@/content/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#hero");
  const [hovered, setHovered] = useState<string | null>(null);

  const active = pathname === "/" 
    ? activeSection 
    : (pathname.startsWith("/projects/") ? "#projects" : "");

  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 16);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const ids = navigationItems.map((link) => link.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    for (const section of sections) observer.observe(section);
    return () => observer.disconnect();
  }, [pathname]);

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
          <Link
            href={pathname === "/" ? "#hero" : "/#hero"}
            className="group flex items-center gap-2.5 rounded-xl px-1 py-1"
          >
            <span className="relative grid size-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-primary via-secondary to-accent font-mono text-sm font-semibold text-primary-foreground transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_0_20px_-6px_var(--primary)]">
              {initials}
            </span>
            <span className="hidden text-sm font-semibold tracking-tight text-foreground sm:block">
              {profile.name}
              <span className="block text-xs font-normal text-text-muted">
                {profile.role}
              </span>
            </span>
          </Link>

          <ul
            className="hidden items-center gap-1 lg:flex"
            onMouseLeave={() => setHovered(null)}
          >
            {navigationItems.map((link) => {
              const isActive = active === link.href;
              const isHot = hovered === link.href || (hovered === null && isActive);
              return (
                <li key={link.href}>
                  <Link
                    href={pathname === "/" ? link.href : `/${link.href}`}
                    aria-current={isActive ? "page" : undefined}
                    onMouseEnter={() => setHovered(link.href)}
                    className={cn(
                      "relative rounded-lg px-3 py-2 text-sm transition-colors duration-200",
                      isActive || hovered === link.href
                        ? "text-foreground"
                        : "text-text-muted"
                    )}
                  >
                    {isHot && (
                      <motion.span
                        layoutId="nav-pill"
                        aria-hidden="true"
                        className="absolute inset-0 rounded-lg bg-white/[0.07]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-3 -bottom-0.5 z-10 h-px rounded-full bg-gradient-to-r from-primary to-accent"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/resume relative hidden h-10 items-center gap-2 overflow-hidden rounded-xl bg-foreground px-4 text-sm font-medium text-background transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.35)] sm:inline-flex"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/10 to-transparent transition-transform duration-700 group-hover/resume:translate-x-full"
              />
              <Download className="relative size-4 transition-transform duration-300 group-hover/resume:-translate-y-0.5" aria-hidden="true" />
              <span className="relative hidden xl:inline">Download Resume</span>
              <span className="relative xl:hidden">Resume</span>
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="glass grid size-10 place-items-center rounded-xl text-foreground transition-colors duration-200 hover:border-primary/40 hover:text-primary lg:hidden"
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
                <Link
                  href={pathname === "/" ? link.href : `/${link.href}`}
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
                </Link>
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