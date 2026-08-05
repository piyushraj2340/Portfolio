"use client";

import Link from "next/link";
import { ArrowRight, ArrowDown, Download, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { motion, Variants } from "framer-motion";
import { profile } from "@/content/profile";
import { socialLinks } from "@/content/social";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/Container";
import { getTechIcon } from "@/lib/icon-map";
import { TypingRoles } from "@/components/shared/TypingRoles";
import { FloatingParticles } from "@/components/shared/FloatingParticles";

const socialIconMap: Record<string, React.ElementType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: FaEnvelope,
};

// Floating tech stack icons setup
const techStack = [
  { name: ".NET Core", position: { top: "5%", left: "15%" }, size: 40, delay: 0 },
  { name: "Node.js", position: { top: "15%", right: "10%" }, size: 48, delay: 1.5 },
  { name: "React", position: { bottom: "25%", left: "5%" }, size: 56, delay: 3 },
  { name: "SQL", position: { bottom: "15%", right: "15%" }, size: 40, delay: 0.5 },
  { name: "MongoDB", position: { top: "45%", left: "-5%" }, size: 32, delay: 2 },
  { name: "Docker", position: { top: "60%", right: "-5%" }, size: 48, delay: 1 },
  { name: "Git", position: { top: "-5%", left: "50%" }, size: 36, delay: 2.5 },
];

const typingRoles = ["Full Stack Engineer", "Backend Specialist", ".NET Core & React"];

// Stagger orchestration variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
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
      className="relative min-h-screen overflow-hidden bg-background pt-32 pb-20 sm:pt-40 sm:pb-28"
      aria-labelledby="hero-heading"
    >
      {/* Animated Background Mesh Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <FloatingParticles />
        <motion.div
          className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-primary/20 blur-[120px] mix-blend-screen"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-secondary/20 blur-[100px] mix-blend-screen"
          animate={{
            x: [0, -40, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <div className="absolute inset-0 bg-background/50 backdrop-blur-[1px] grid-pattern mix-blend-overlay" />
      </div>

      <Container className="relative z-10">
        <motion.div
          className="grid items-center gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column — Content */}
          <div className="flex flex-col gap-7">
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
              {profile.availability && (
                <p className="glass inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-xs text-text-muted">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-accent" />
                  </span>
                  {profile.availability}
                </p>
              )}
              {profile.location && (
                <p className="glass inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-xs text-text-muted">
                  <MapPin className="size-3.5 text-primary" />
                  Based in {profile.location}
                </p>
              )}
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <p className="font-mono text-sm tracking-widest text-text-muted uppercase">
                {profile.greeting}
              </p>
              <h1
                id="hero-heading"
                className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl"
              >
                {profile.name}
              </h1>
              <p className="text-2xl font-semibold tracking-tight sm:text-4xl h-10">
                <TypingRoles roles={typingRoles} />
              </p>
              <p className="font-mono text-sm text-text-muted">
                {profile.yearsOfExperience}+ Years Experience
              </p>
            </motion.div>

            <motion.p variants={itemVariants} className="max-w-xl text-base leading-relaxed text-pretty text-text-secondary sm:text-lg">
              {profile.summary}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="#projects"
                className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary px-6 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-16px_var(--primary)]"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary-foreground/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />
                View Projects
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass inline-flex h-12 items-center justify-center gap-2 rounded-xl px-6 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/25"
              >
                <Download className="size-4" aria-hidden="true" />
                Download Resume
              </Link>
            </motion.div>

            <motion.ul variants={itemVariants} className="flex items-center gap-3">
              {socialLinks.map((link) => {
                const normalized = link.label.toLowerCase();
                const Icon = socialIconMap[normalized] || FiGlobe;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target={normalized === "email" ? undefined : "_blank"}
                      rel={normalized === "email" ? undefined : "noopener noreferrer"}
                      className="glass group grid size-11 place-items-center rounded-xl text-text-muted transition-all duration-300 hover:-translate-y-0.5 hover:text-foreground"
                      aria-label={link.label}
                    >
                      <Icon className="size-5" aria-hidden="true" />
                      <span className="sr-only">{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </motion.ul>
          </div>

          {/* Right Column — Developer Illustration */}
          <motion.div variants={itemVariants} className="justify-self-center lg:justify-self-end w-full max-w-[400px]">
            <div className="relative aspect-square">
              {/* Glowing background blur */}
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 blur-2xl"
              />

              {/* Profile Image in Glass Frame */}
              <div className="glass relative h-full w-full overflow-hidden rounded-[2rem] p-2 z-10 shadow-2xl" style={{ backgroundColor: "rgba(0,0,0,0.43)" }}>
                <div className="relative h-full w-full overflow-hidden rounded-[1.6rem]">
                  <picture>
                    <source media="(max-width: 640px)" srcSet="/images/piyush_raj_dark_bg%20(Phone).png" />
                    <source media="(max-width: 768px)" srcSet="/images/piyush_raj_dark_bg%20(Small).png" />
                    <source media="(max-width: 1024px)" srcSet="/images/piyush_raj_dark_bg%20(Medium).png" />
                    <source media="(max-width: 1280px)" srcSet="/images/piyush_raj_dark_bg%20(Large).png" />
                    <img
                      src={profile.imgUrl}
                      alt={`Portrait of ${profile.name}`}
                      className="h-full w-full object-cover"
                    />
                  </picture>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="glass absolute -bottom-5 -left-5 z-20 rounded-2xl px-4 py-3 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9)]">
                <p className="font-mono text-xs text-text-muted">
                  Currently
                </p>
                <p className="text-sm font-medium text-foreground">{profile.roleDescription}</p>
              </div>

              {/* Floating Tech Icons Orbiting */}
              <div className="absolute inset-[-4rem] z-30 pointer-events-none">
                {techStack.map((tech, idx) => {
                  const Icon = getTechIcon(tech.name);
                  // Alternating animation values for more organic feel
                  const yFloat = idx % 2 === 0 ? -25 : 25;
                  const xFloat = idx % 3 === 0 ? 15 : -15;

                  return (
                    <motion.div
                      key={tech.name}
                      className="absolute flex items-center justify-center rounded-2xl border border-white/20 bg-black/40 p-3 shadow-[0_0_30px_-5px_rgba(255,255,255,0.15)] backdrop-blur-xl pointer-events-auto cursor-pointer transition-all duration-300 hover:scale-125 hover:border-primary/50 hover:bg-white/10 group"
                      style={tech.position}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: [0, yFloat, 0],
                        x: [0, xFloat, 0],
                        rotate: [0, (idx % 2 === 0 ? 10 : -10), 0]
                      }}
                      transition={{
                        opacity: { delay: 0.8 + (idx * 0.1), duration: 0.5 },
                        scale: { delay: 0.8 + (idx * 0.1), type: "spring" },
                        y: { duration: 5 + (idx % 3), repeat: Infinity, ease: "easeInOut", delay: tech.delay },
                        x: { duration: 6 + (idx % 2), repeat: Infinity, ease: "easeInOut", delay: tech.delay },
                        rotate: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: tech.delay }
                      }}
                    >
                      {/* Glow Behind Icon on Hover */}
                      <div className="absolute inset-0 rounded-2xl bg-primary/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
                      <Icon aria-hidden="true" className="relative z-10 text-text-secondary transition-colors duration-300 group-hover:text-foreground drop-shadow-sm group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" style={{ width: tech.size, height: tech.size }} />
                    </motion.div>
                  );
                })}
              </div>

              {/* Decorative Orbital Rings */}
              <div className="absolute inset-[-4rem] flex items-center justify-center pointer-events-none opacity-20">
                <div className="absolute size-full rounded-full border border-dashed border-white/20 animate-[spin_60s_linear_infinite]" />
                <div className="absolute size-[85%] rounded-full border border-solid border-white/5 animate-[spin_80s_linear_infinite]" />
                <div className="absolute size-[70%] rounded-full border border-dotted border-white/30 animate-[spin_40s_linear_infinite_reverse]" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        {profile.stats && (
          <motion.ul
            className="mt-16 grid grid-cols-2 gap-3 sm:mt-20 sm:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {profile.stats.map((stat) => (
              <motion.li
                key={stat.label}
                variants={itemVariants}
                className="glass rounded-2xl p-5 transition-colors duration-300 hover:border-white/20"
              >
                <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-text-muted sm:text-sm">
                  {stat.label}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        )}

        {/* Scroll To Explore */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Link
            href="#about"
            className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-foreground"
          >
            <ArrowDown className="size-4 animate-bounce" aria-hidden="true" />
            Scroll to explore
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
