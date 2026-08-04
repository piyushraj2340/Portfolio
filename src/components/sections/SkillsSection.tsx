"use client";

import { skills } from "@/content/skills";
import { getTechIcon } from "@/lib/icon-map";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Card } from "@/components/shared/Card";
import { motion } from "framer-motion";

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
          <ScrollReveal 
            key={category.category} 
            delay={categoryIndex * 100}
            className={categoryIndex === skills.length - 1 && skills.length % 3 === 2 ? "lg:col-span-2" : ""}
          >
            <Card hoverable className="h-full p-6 md:p-8">
              <h3 className="text-lg font-bold tracking-tight text-foreground">
                {category.category}
              </h3>
              <div className="mt-6 flex flex-col gap-4">
                {category.items.map((skill, idx) => {
                  const Icon = getTechIcon(skill.name);
                  return (
                    <div key={skill.name} className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between text-sm font-medium text-text-secondary">
                        <span className="inline-flex items-center gap-1.5">
                          <Icon className="size-3.5 opacity-70" />
                          {skill.name}
                        </span>
                        <span className="text-xs text-text-muted">{skill.proficiency}%</span>
                      </div>
                      {/* Animated Progress Bar */}
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          className="h-full bg-primary/60"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1, 
                            delay: (categoryIndex * 0.1) + (idx * 0.1),
                            ease: "circOut" 
                          }}
                        />
                      </div>
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
