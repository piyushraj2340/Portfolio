"use client";

import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { motion, Variants } from "framer-motion";
import { profile } from "@/content/profile";
import { socialLinks } from "@/content/social";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/Container";

const socialIconMap: Record<string, React.ElementType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: FaEnvelope,
};

// Stagger orchestration variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2, // Wait for splash screen
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  },
};

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen grid-pattern overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <Container className="relative z-10 flex min-h-screen items-center pb-20 pt-32">
        <motion.div 
          className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column — Content */}
          <div className="flex flex-col gap-6">
            {/* Availability Badge */}
            {profile.availability && (
              <motion.div variants={itemVariants}>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
                  <span className="relative flex size-2" aria-hidden="true">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                    <span className="relative inline-flex size-2 rounded-full bg-primary" />
                  </span>
                  {profile.availability}
                </span>
              </motion.div>
            )}

            {/* Greeting */}
            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-lg font-medium text-text-secondary">
                Hi, I&apos;m
              </p>
              <h1
                id="hero-heading"
                className="text-balance text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
              >
                {profile.name}
              </h1>
            </motion.div>

            {/* Role + Experience */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
              <span className="text-xl font-semibold text-foreground sm:text-2xl">
                {profile.role}
              </span>
              <span className="rounded-lg bg-white/5 px-3 py-1 text-sm font-medium text-text-secondary">
                {profile.yearsOfExperience} Years of Experience
              </span>
            </motion.div>

            {/* Summary */}
            <motion.p variants={itemVariants} className="max-w-xl text-base leading-relaxed text-text-secondary md:text-lg">
              {profile.summary}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <Link
                href="#projects"
                className="group relative inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary-hover hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:-translate-y-1 overflow-hidden"
              >
                View Projects
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:-translate-y-1"
              >
                <Download className="size-4 transition-transform group-hover:-translate-y-0.5" />
                Download Resume
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              {socialLinks.map((link) => {
                const normalized = link.label.toLowerCase();
                const Icon = socialIconMap[normalized] || FiGlobe;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    target={normalized === "email" ? undefined : "_blank"}
                    rel={
                      normalized === "email"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="inline-flex size-10 items-center justify-center rounded-xl border border-white/5 text-text-secondary transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:text-primary hover:-translate-y-1"
                    aria-label={link.label}
                  >
                    <Icon className="size-4" />
                    <span className="sr-only">
                      {normalized === "email" ? "" : "(opens in a new tab)"}
                    </span>
                  </Link>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column — Profile Visual (Animated) */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { 
                opacity: 1, 
                scale: 1,
                transition: { type: "spring", delay: 0.4, duration: 1 }
              }
            }}
            className="hidden items-center justify-center lg:flex"
          >
            <div className="relative">
              {/* Profile Image with subtle floating animation */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative size-80 overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <img
                  src="/images/1731513824864.jpg"
                  alt="Profile"
                  className="size-full object-cover"
                />
              </motion.div>

              {/* Floating Stats */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="glass-card absolute -right-4 top-8 px-4 py-2.5 text-center shadow-2xl"
              >
                <p className="text-2xl font-bold text-primary">
                  {profile.yearsOfExperience}+
                </p>
                <p className="text-xs text-text-muted">Years Exp.</p>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="glass-card absolute -left-8 bottom-16 px-4 py-2.5 text-center shadow-2xl"
              >
                <p className="text-2xl font-bold text-secondary">10+</p>
                <p className="text-xs text-text-muted">Projects</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
