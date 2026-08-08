"use client";

import { useEffect } from "react";

/**
 * Native CSS smooth scrolling is used by default (globals.css).
 * Lenis loads only after idle on desktop — keeps initial TBT/LCP clean for audits.
 */
export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReducedMotion || coarse) return;

    let lenis: { destroy: () => void } | null = null;
    let cancelled = false;

    const ric =
      window.requestIdleCallback ??
      ((cb: IdleRequestCallback) =>
        window.setTimeout(() => cb({} as IdleDeadline), 2500));

    const idleId = ric(
      () => {
        void import("lenis").then(({ default: Lenis }) => {
          if (cancelled) return;
          lenis = new Lenis({
            duration: 1.1,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            wheelMultiplier: 1,
            touchMultiplier: 2,
            autoRaf: true,
          });
        });
      },
      { timeout: 4000 }
    );

    return () => {
      cancelled = true;
      lenis?.destroy();
      if ("cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId as number);
      } else {
        clearTimeout(idleId as number);
      }
    };
  }, []);

  return <>{children}</>;
}
