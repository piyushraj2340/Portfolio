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

        <form 
          className="mt-12 flex w-full max-w-xl flex-col gap-5 text-left"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-text-muted">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-text-muted/50 hover:border-white/20 focus:border-primary focus:bg-white/10 focus:ring-1 focus:ring-primary"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-text-muted">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-text-muted/50 hover:border-white/20 focus:border-primary focus:bg-white/10 focus:ring-1 focus:ring-primary"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-text-muted">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-text-muted/50 hover:border-white/20 focus:border-primary focus:bg-white/10 focus:ring-1 focus:ring-primary"
              placeholder="How can we collaborate?"
            />
          </div>
          <button
            type="submit"
            className="group relative mt-2 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] sm:w-auto"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Send className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              Send Message
            </span>
            <div className="absolute inset-0 z-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
          </button>
        </form>

        <div className="mt-8 flex flex-col items-center gap-2 text-sm text-text-muted sm:flex-row">
          <span>Or reach out directly via</span>
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-medium text-text-secondary underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            {siteConfig.email}
          </a>
        </div>
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
