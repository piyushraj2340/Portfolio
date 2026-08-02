"use client";

import { useEffect, useRef, useState } from "react";
import { skills } from "@/content/skills";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Card } from "@/components/shared/Card";

function SkillProgressBar({ proficiency, visible }: { proficiency: number; visible: boolean }) {
  return (
    <div className="progress-bar">
      <div
        className="progress-bar-fill"
        style={{ width: visible ? `${proficiency}%` : "0%" }}
      />
    </div>
  );
}

export function SkillsSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Section id="skills">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Skills"
          title="Technical capabilities"
          description="Focused on demonstrated proficiency across backend, frontend, cloud, and engineering practices."
        />
      </ScrollReveal>

      <div
        ref={ref}
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skills.map((category, categoryIndex) => (
          <ScrollReveal key={category.category} delay={categoryIndex * 100}>
            <Card hoverable className="h-full p-6 md:p-8">
              <h3 className="text-lg font-bold tracking-tight text-foreground">
                {category.category}
              </h3>
              <div className="mt-6 space-y-5">
                {category.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-text-secondary">
                        {skill.name}
                      </span>
                      <span className="text-xs font-semibold text-text-muted">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div className="mt-2">
                      <SkillProgressBar
                        proficiency={skill.proficiency}
                        visible={visible}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
