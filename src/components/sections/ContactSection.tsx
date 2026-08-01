"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, Code2, Globe, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import { socialLinks } from "@/content/social";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const socialIconMap: Record<string, React.ElementType> = {
  github: Code2,
  linkedin: Globe,
  email: Mail,
};

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Static export fallback: open mailto
    const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.open(mailtoUrl, "_blank");
  };

  const inputClass =
    "w-full rounded-xl border border-white/8 bg-white/4 px-4 py-3 text-sm text-foreground placeholder:text-text-muted transition-all duration-200 focus:border-primary/40 focus:bg-white/6 focus:outline-none focus:ring-2 focus:ring-primary/20";

  return (
    <Section id="contact">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect"
          description="Have a project in mind or want to discuss opportunities? I'd love to hear from you."
        />
      </ScrollReveal>

      <div className="mx-auto mt-12 max-w-2xl">
        <ScrollReveal delay={150}>
          <div className="glass-card p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-xs font-semibold uppercase tracking-widest text-text-muted"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-xs font-semibold uppercase tracking-widest text-text-muted"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-xs font-semibold uppercase tracking-widest text-text-muted"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-xs font-semibold uppercase tracking-widest text-text-muted"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25"
              >
                <Send className="size-4" />
                Send Message
              </button>
            </form>

            {/* Social Links */}
            <div className="mt-8 flex items-center justify-center gap-3 border-t border-white/5 pt-8">
              {socialLinks.map((link) => {
                const normalized = link.label.toLowerCase();
                const Icon = socialIconMap[normalized] || Globe;
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
                    className="inline-flex size-10 items-center justify-center rounded-xl border border-white/5 text-text-secondary transition-all duration-200 hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                    aria-label={link.label}
                  >
                    <Icon className="size-4" />
                  </Link>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
