"use client";

import Link from "next/link";
import { ArrowRight, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { socialLinks } from "@/content/social";
import { Section } from "@/components/layout/Section";

const socialIconMap: Record<string, React.ElementType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
};

export function ContactSection() {
  return (
    <Section id="contact" className="relative overflow-hidden">
      {/* Background visual flair */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-40">
        <div className="w-[100vw] h-[100vw] sm:w-[60vw] sm:h-[60vw] rounded-full bg-primary/10 blur-[100px] mix-blend-screen" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="flex flex-col items-center gap-6 text-center relative z-10"
      >
        <p className="text-sm font-semibold uppercase tracking-wider text-text-muted">
          Next Steps
        </p>
        
        <h2 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl text-balance">
          Let&apos;s build something <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">great.</span>
        </h2>
        
        <p className="max-w-2xl text-lg text-text-secondary md:text-xl">
          Currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>

        <a
          href={`mailto:${siteConfig.email}`}
          className="group relative mt-8 inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-5 text-lg font-bold text-primary-foreground transition-all duration-300 hover:bg-primary-hover hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:-translate-y-1 overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            <Send className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            Say Hello
          </span>
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]" />
        </a>
      </motion.div>

      {/* Social Links */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 1 }}
        className="relative z-10 mt-20 flex items-center justify-center gap-8 border-t border-white/5 pt-10"
      >
        {socialLinks.map((link) => {
          const normalized = link.label.toLowerCase();
          if (normalized === "email") return null; 
          const Icon = socialIconMap[normalized] || FiGlobe;
          return (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-text-secondary transition-colors hover:text-primary"
              aria-label={link.label}
            >
              <div className="flex size-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-transform duration-300 group-hover:-translate-y-2 group-hover:bg-primary/10 group-hover:border-primary/30">
                <Icon className="size-5" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest">{link.label}</span>
            </Link>
          );
        })}
      </motion.div>
    </Section>
  );
}
