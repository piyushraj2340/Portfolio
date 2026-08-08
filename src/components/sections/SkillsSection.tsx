"use client";

import {
  Code,
  Server,
  Monitor,
  Database,
  Layers,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { skills } from "@/content/skills";
import { getTechIcon } from "@/lib/icon-map";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const categoryIcons: Record<string, LucideIcon> = {
  Code,
  Server,
  Monitor,
  Database,
  Layers,
  Wrench,
};

export function SkillsSection() {
  return (
    <Section id="skills" aria-labelledby="skills-heading">
        <ScrollReveal>
          <SectionHeading
            id="skills-heading"
            eyebrow="Skills"
            title="Technical capabilities"
            description="Focused on demonstrated proficiency across backend, frontend, cloud, and engineering practices."
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, index) => {
            const CategoryIcon = categoryIcons[category.icon] || Code;
            
            return (
              <ScrollReveal
                key={category.category}
                delay={index * 90}
                variant="scale"
                className="group glass relative flex flex-col gap-5 overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[var(--shadow-lg)] sm:p-8"
              >
                {/* Hover flare effect */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-24 -right-16 size-48 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
                />

                {/* Header */}
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-primary/25 via-secondary/20 to-accent/20 text-foreground transition-transform duration-300 group-hover:scale-105">
                    <CategoryIcon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                      {category.category}
                    </h3>
                    <p className="font-mono text-xs text-text-muted">
                      {category.items.length} technologies
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-pretty text-text-secondary">
                  {category.blurb}
                </p>

                {/* Skills Grid */}
                <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                  {category.items.map((skill) => {
                    const TechIcon = getTechIcon(skill);
                    return (
                      <li
                        key={skill}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-text-secondary transition-colors duration-300 group-hover:text-foreground"
                      >
                        <TechIcon aria-hidden="true" className="size-3.5 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                        {skill}
                      </li>
                    );
                  })}
                </ul>
              </ScrollReveal>
            );
          })}
        </div>
    </Section>
  );
}
