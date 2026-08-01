"use client";

import { useEffect, useRef, useState } from "react";
import {
  Server,
  Monitor,
  Database,
  Cloud,
  Wrench,
} from "lucide-react";
import { skills } from "@/content/skills";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const iconMap: Record<string, React.ElementType> = {
  Server,
  Monitor,
  Database,
  Cloud,
  Wrench,
};

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
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
      >
        {skills.map((category, categoryIndex) => {
          const Icon = iconMap[category.icon] || Server;
          return (
            <ScrollReveal key={category.category} delay={categoryIndex * 100}>
              <div className="glass-card-hover h-full p-6">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {category.category}
                  </h3>
                </div>
                <div className="mt-5 space-y-4">
                  {category.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-text-secondary">
                          {skill.name}
                        </span>
                        <span className="text-xs text-text-muted">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div className="mt-1.5">
                        <SkillProgressBar
                          proficiency={skill.proficiency}
                          visible={visible}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </Section>
  );
}
