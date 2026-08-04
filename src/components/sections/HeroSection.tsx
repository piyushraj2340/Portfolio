"use client";

import Link from "next/link";
import { ArrowRight, Download, Send } from "lucide-react";
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
  { name: "C#", position: { top: "5%", left: "15%" }, size: 40, delay: 0 },
  { name: "Node.js", position: { top: "15%", right: "10%" }, size: 48, delay: 1.5 },
  { name: "React", position: { bottom: "25%", left: "5%" }, size: 56, delay: 3 },
  { name: "SQL", position: { bottom: "10%", right: "15%" }, size: 40, delay: 0.5 },
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
      className="relative min-h-screen overflow-hidden bg-background"
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

      <Container className="relative z-10 flex min-h-screen items-center pb-20 pt-32">
        <motion.div 
          className="grid w-full items-center gap-12 lg:grid-cols-12 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column — Content */}
          <div className="flex flex-col gap-8 lg:col-span-7 xl:col-span-6">
            
            {/* Info Card (Availability + Experience) */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-2 pr-6 backdrop-blur-md shadow-2xl">
                {profile.availability && (
                  <span className="inline-flex items-center gap-2 rounded-xl bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                    <span className="relative flex size-2" aria-hidden="true">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                      <span className="relative inline-flex size-2 rounded-full bg-primary" />
                    </span>
                    {profile.availability}
                  </span>
                )}
                <span className="text-sm font-medium text-text-secondary border-l border-white/10 pl-4">
                  <span className="text-foreground font-bold">{profile.yearsOfExperience}+</span> Years Experience
                </span>
              </div>
            </motion.div>

            {/* Greeting & Headline */}
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-xl font-medium tracking-wide text-primary">
                Hi, I&apos;m {profile.name.split(" ")[0]}
              </p>
              <h1
                id="hero-heading"
                className="text-balance text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent"
              >
                {profile.role}
              </h1>
              <div className="text-2xl font-semibold tracking-tight sm:text-4xl h-10">
                <TypingRoles roles={typingRoles} />
              </div>
            </motion.div>

            {/* Summary */}
            <motion.p variants={itemVariants} className="max-w-xl text-lg leading-relaxed text-text-secondary md:text-xl">
              {profile.summary}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#projects"
                className="group relative inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary-hover hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:-translate-y-1 overflow-hidden"
              >
                View Projects
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-foreground transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:-translate-y-1"
              >
                <Send className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                Contact Me
              </Link>
            </motion.div>

            {/* Social Links & Download Resume */}
            <motion.div variants={itemVariants} className="flex items-center gap-6 pt-4 border-t border-white/5">
              <div className="flex items-center gap-3">
                {socialLinks.map((link) => {
                  const normalized = link.label.toLowerCase();
                  const Icon = socialIconMap[normalized] || FiGlobe;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      target={normalized === "email" ? undefined : "_blank"}
                      rel={normalized === "email" ? undefined : "noopener noreferrer"}
                      className="inline-flex size-11 items-center justify-center rounded-full border border-white/5 text-text-secondary transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:text-primary hover:-translate-y-1 shadow-lg"
                      aria-label={link.label}
                    >
                      <Icon className="size-5" />
                    </Link>
                  );
                })}
              </div>
              <div className="w-px h-8 bg-white/10" />
              <Link
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm font-medium text-text-muted transition-colors hover:text-foreground"
              >
                <Download className="size-4 transition-transform group-hover:-translate-y-1" />
                Download Resume
              </Link>
            </motion.div>
          </div>

          {/* Right Column — Developer Illustration */}
          <div className="hidden lg:col-span-5 xl:col-span-6 lg:flex items-center justify-center relative min-h-[600px]">
            <motion.div 
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { 
                  opacity: 1, 
                  scale: 1,
                  transition: { type: "spring", delay: 0.4, duration: 1.5, bounce: 0.4 }
                }
              }}
              className="relative w-full max-w-[500px] aspect-square"
            >
              {/* Central Profile Image with Glowing Animated Border */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="relative">
                  {/* Glowing pulses */}
                  <motion.div 
                    className="absolute inset-[-10px] rounded-full bg-primary/20 blur-xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div 
                    className="absolute inset-[-2px] rounded-full bg-gradient-to-r from-primary to-secondary"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Profile Image */}
                  <div className="relative size-[280px] xl:size-[340px] overflow-hidden rounded-full border-4 border-background bg-surface z-10 shadow-2xl">
                    <img
                      src="/images/1731513824864.jpg"
                      alt="Profile"
                      className="size-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent mix-blend-overlay" />
                  </div>
                </div>
              </div>

              {/* Floating Tech Icons Orbiting */}
              <div className="absolute inset-0 z-30 pointer-events-none">
                {techStack.map((tech, idx) => {
                  const Icon = getTechIcon(tech.name);
                  return (
                    <motion.div
                      key={tech.name}
                      className="absolute flex items-center justify-center rounded-2xl border border-white/10 bg-surface/80 p-3 shadow-2xl backdrop-blur-md"
                      style={tech.position}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        y: [0, -15, 0],
                        x: [0, (idx % 2 === 0 ? 10 : -10), 0]
                      }}
                      transition={{
                        opacity: { delay: 0.8 + (idx * 0.1), duration: 0.5 },
                        scale: { delay: 0.8 + (idx * 0.1), type: "spring" },
                        y: { duration: 4 + (idx % 3), repeat: Infinity, ease: "easeInOut", delay: tech.delay },
                        x: { duration: 5 + (idx % 3), repeat: Infinity, ease: "easeInOut", delay: tech.delay }
                      }}
                    >
                      <Icon className="text-text-secondary" style={{ width: tech.size, height: tech.size }} />
                    </motion.div>
                  );
                })}
              </div>
              
              {/* Decorative Orbital Rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <div className="absolute size-full rounded-full border border-dashed border-white/20 animate-[spin_60s_linear_infinite]" />
                <div className="absolute size-[75%] rounded-full border border-white/10 animate-[spin_40s_linear_infinite_reverse]" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
