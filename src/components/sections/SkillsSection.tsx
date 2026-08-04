"use client";

import { skills } from "@/content/skills";
import { getTechIcon } from "@/lib/icon-map";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Card } from "@/components/shared/Card";

export function SkillsSection() {

  return (
    <Section id="skills">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Skills"
          title="Technical capabilities"
          description="Focused on demonstrated proficiency across backend, frontend, cloud, and engineering practices."
        />
      </ScrollReveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((category, categoryIndex) => (
          <ScrollReveal key={category.category} delay={categoryIndex * 100}>
            <Card hoverable className="h-full p-6 md:p-8">
              <h3 className="text-lg font-bold tracking-tight text-foreground">
                {category.category}
              </h3>
              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-3">
                {category.items.map((skill) => {
                  const Icon = getTechIcon(skill.name);
                  return (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary"
                    >
                      <Icon className="size-3.5 opacity-70" />
                      {skill.name}
                    </div>
                  );
                })}
              </div>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
