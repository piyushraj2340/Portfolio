import { GraduationCap } from "lucide-react";
import { education } from "@/content/education";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

function formatYear(date: string): string {
  return date.split("-")[0];
}

export function EducationSection() {
  return (
    <Section id="education">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
          description="Foundation in computer science and engineering principles."
        />
      </ScrollReveal>

      <div className="mt-12 space-y-6">
        {education.map((edu, index) => (
          <ScrollReveal key={edu.institution} delay={index * 100}>
            <div className="glass-card-hover p-8">
              <div className="flex items-start gap-5">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10">
                  <GraduationCap className="size-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {edu.degree} in {edu.field}
                    </h3>
                    <span className="rounded-lg bg-white/5 px-3 py-1 text-xs font-medium text-text-secondary">
                      {formatYear(edu.startDate)} — {formatYear(edu.endDate)}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-text-muted">
                    {edu.institution}
                  </p>
                  {edu.description && (
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                      {edu.description}
                    </p>
                  )}
                  {edu.coursework && edu.coursework.length > 0 && (
                    <div className="mt-4">
                      <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                        Relevant Coursework
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <span
                            key={course}
                            className="rounded-lg bg-white/5 px-2.5 py-1 text-xs font-medium text-text-secondary"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
