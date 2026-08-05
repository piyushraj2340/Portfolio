"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="group fixed bottom-6 right-6 z-50 flex size-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-text-secondary shadow-xl backdrop-blur-md transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:bottom-8 sm:right-8"
        >
          <ArrowUp className="size-5 transition-transform duration-300 group-hover:-translate-y-1" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
