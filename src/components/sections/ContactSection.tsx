"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { socialLinks } from "@/content/social";
import { Section } from "@/components/layout/Section";
import { contactSchema } from "@/lib/validations/contact";

const socialIconMap: Record<string, React.ElementType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
};

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    // Client-side validation using the identical shared schema
    const validationResult = contactSchema.safeParse(data);
    
    if (!validationResult.success) {
      setStatus("error");
      // Display the first validation error message
      setErrorMessage(validationResult.error.issues[0].message);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Failed to send message.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("An unexpected error occurred.");
    }
  };

  return (
    <Section id="contact" aria-labelledby="contact-heading" className="relative overflow-hidden">
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
        
        <h2
          id="contact-heading"
          className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Let&apos;s build something <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">great.</span>
        </h2>
        
        <p className="max-w-2xl text-lg text-text-secondary md:text-xl">
          Currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>

        <form onSubmit={handleSubmit} className="glass relative flex w-full max-w-2xl flex-col gap-6 rounded-2xl p-6 text-left shadow-[var(--shadow-xl)] sm:p-8">
          
          {/* Status Overlays or Messages */}
          {status === "success" && (
            <div
              role="status"
              aria-live="polite"
              className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-success/30 bg-success/20 px-4 py-2 text-sm font-medium text-success shadow-lg backdrop-blur-md"
            >
              <CheckCircle className="size-4" aria-hidden="true" />
              Message sent successfully!
            </div>
          )}
          {status === "error" && (
            <div
              role="alert"
              aria-live="assertive"
              className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-destructive/30 bg-destructive/20 px-4 py-2 text-sm font-medium text-destructive shadow-lg backdrop-blur-md"
            >
              <AlertCircle className="size-4" aria-hidden="true" />
              {errorMessage}
            </div>
          )}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-text-muted">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-text-muted/50 hover:border-white/20 focus:border-primary focus:bg-white/10"
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
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-text-muted/50 hover:border-white/20 focus:border-primary focus:bg-white/10"
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
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-text-muted/50 hover:border-white/20 focus:border-primary focus:bg-white/10"
              placeholder="How can we collaborate?"
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="group relative mt-2 inline-flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary px-6 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-[0_16px_40px_-16px_var(--primary)] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 sm:w-auto"
          >
            <span className="relative z-10 flex items-center gap-2">
              {status === "loading" ? (
                <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              ) : status === "success" ? (
                <CheckCircle className="size-4" aria-hidden="true" />
              ) : (
                <Send className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              )}
              {status === "loading" ? "Sending..." : status === "success" ? "Sent!" : "Send Message"}
            </span>
            {status === "idle" && (
              <div
                aria-hidden="true"
                className="absolute inset-0 z-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
            )}
          </button>
        </form>

        <address className="mt-8 flex flex-col items-center gap-2 text-sm text-text-muted not-italic sm:flex-row">
          <span>Or reach out directly via</span>
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-medium text-text-secondary underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            {siteConfig.email}
          </a>
        </address>
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
              className="group flex flex-col items-center gap-2 text-text-secondary transition-colors duration-300 hover:text-foreground"
              aria-label={link.label}
            >
              <div className="glass flex size-11 items-center justify-center rounded-xl transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-foreground/25">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest">{link.label}</span>
            </Link>
          );
        })}
      </motion.div>
    </Section>
  );
}
