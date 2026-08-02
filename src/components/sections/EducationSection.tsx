import { education } from "@/content/education";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Card } from "@/components/shared/Card";

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
            <Card hoverable className="p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl font-bold tracking-tight text-foreground">
                  {edu.degree} in {edu.field}
                </h3>
                <span className="rounded-lg bg-white/5 px-3 py-1 text-xs font-semibold text-text-secondary border border-white/5">
                  {formatYear(edu.startDate)} — {formatYear(edu.endDate)}
                </span>
              </div>
              <p className="mt-1 text-sm font-semibold text-primary">
                {edu.institution}
              </p>
              {edu.description && (
                <p className="mt-4 text-base leading-relaxed text-text-secondary">
                  {edu.description}
                </p>
              )}
              {edu.coursework && edu.coursework.length > 0 && (
                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                    Relevant Coursework
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
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
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
