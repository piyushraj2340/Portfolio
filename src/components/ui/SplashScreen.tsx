"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/content/profile";

const SPLASH_KEY = "portfolio-splash-seen";

export function SplashScreen() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const alreadySeen = sessionStorage.getItem(SPLASH_KEY) === "1";

    if (prefersReducedMotion || alreadySeen) {
      return;
    }

    // Only show after mount decision — avoid blocking first contentful paint on repeat visits
    let cancelled = false;
    const start = requestAnimationFrame(() => {
      if (cancelled) return;
      setIsLoading(true);
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem(SPLASH_KEY, "1");
    }, 500);

    return () => {
      cancelled = true;
      cancelAnimationFrame(start);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-background"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center text-3xl font-bold tracking-[0.12em] text-foreground uppercase">
              <span>{profile.name.split(" ")[0]}</span>
              <span className="text-primary">.</span>
            </div>
            <div className="h-[2px] w-24 bg-primary" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
