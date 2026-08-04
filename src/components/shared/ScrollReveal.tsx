"use client";

import { type ReactNode } from "react";
import { motion, Variants } from "framer-motion";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  variant?: "fade" | "scale" | "slideUp";
  delay?: number;
};

/**
 * Wraps children in a scroll-reveal animation using framer-motion.
 * Automatically respects prefers-reduced-motion via Framer Motion's internal checks
 * when properly configured globally, but also uses safe spring animations.
 */
export function ScrollReveal({
  children,
  className = "",
  variant = "slideUp",
  delay = 0,
}: ScrollRevealProps) {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: variant === "slideUp" ? 30 : 0,
      scale: variant === "scale" ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: delay / 1000, // delay is passed in ms, Framer uses seconds
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
