"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  variant?: "fade" | "scale";
  delay?: number;
};

/**
 * Wraps children in a scroll-reveal animation using IntersectionObserver.
 * Respects prefers-reduced-motion via CSS (see globals.css).
 */
export function ScrollReveal({
  children,
  className = "",
  variant = "fade",
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const baseClass = variant === "scale" ? "reveal-scale" : "reveal";

  return (
    <div
      ref={ref}
      className={`${baseClass} ${className}`}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
