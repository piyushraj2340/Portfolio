"use client";

import { skills } from "@/content/skills";
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
              <div className="mt-6">
                <p className="text-base leading-relaxed text-text-secondary">
                  {category.items.map((skill, i) => (
                    <span key={skill.name}>
                      {skill.name}
                      {i < category.items.length - 1 && (
                        <span className="mx-2 text-text-muted">·</span>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
