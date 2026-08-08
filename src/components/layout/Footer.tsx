"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";
import { profile } from "@/content/profile";
import { socialLinks } from "@/content/social";
import { Container } from "./Container";

const socialIconMap: Record<string, React.ElementType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: FaEnvelope,
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 bg-surface">
      <Container className="py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Copyright */}
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="text-sm font-bold tracking-[0.1em] uppercase"
            >
              {profile.name}
              <span className="text-primary">.</span>
            </Link>
            <span className="text-sm text-text-muted">
              © {new Date().getFullYear()} All rights reserved.
            </span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const normalized = link.label.toLowerCase();
              const Icon = socialIconMap[normalized] || FaGlobe;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  target={normalized === "email" ? undefined : "_blank"}
                  rel={normalized === "email" ? undefined : "noopener noreferrer"}
                  className="text-text-secondary transition-colors duration-300 hover:text-foreground"
                  aria-label={link.label}
                >
                  <Icon className="size-4" aria-hidden="true" />
                </Link>
              );
            })}
          </div>

          {/* Back to top */}
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors duration-300 hover:text-foreground"
          >
            Back to top
            <ArrowUp className="size-4" aria-hidden="true" />
          </motion.button>
        </div>
      </Container>
    </footer>
  );
}