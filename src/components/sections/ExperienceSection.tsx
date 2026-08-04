import { experiences } from "@/content/experience";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Card } from "@/components/shared/Card";

import { getTechIcon } from "@/lib/icon-map";

function formatDate(date: string): string {
  if (date === "Present") return "Present";
  const [year, month] = date.split("-");
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  return `${months[parseInt(month, 10) - 1]} ${year}`;
}

export function ExperienceSection() {
  return (
    <Section id="experience">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Experience"
          title="Professional journey"
          description="A timeline of roles, responsibilities, and business outcomes across product-focused teams."
        />
      </ScrollReveal>

      <div className="mt-12 relative border-l border-white/10 ml-3 md:ml-4 space-y-12 md:space-y-16 pb-8">
        {experiences.map((exp, index) => (
          <ScrollReveal key={`${exp.company}-${exp.startDate}`} delay={index * 150}>
            <div className="relative pl-8 md:pl-12">
              {/* Timeline Node */}
              <span className="absolute -left-[5px] top-1.5 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-primary/20 ring-4 ring-background">
                <span className="h-1 w-1 rounded-full bg-primary" />
              </span>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
                {/* Date & Company (Left Column) */}
                <div className="md:col-span-1 flex flex-col items-start">
                  <span className="text-sm font-semibold text-text-muted">
                    {formatDate(exp.startDate)} — {formatDate(exp.endDate)}
                  </span>
                  <span className="mt-1.5 text-base font-semibold text-primary">
                    {exp.company}
                  </span>
                </div>

                {/* Content (Right Column) */}
                <div className="md:col-span-3">
                  <Card className="p-6 md:p-8">
                    <h3 className="text-xl font-bold tracking-tight text-foreground">
                      {exp.role}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-text-secondary">
                      {exp.summary}
                    </p>

                    {/* Achievements */}
                    <ul className="mt-5 space-y-2">
                      {exp.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex items-start gap-3 text-sm text-text-secondary"
                        >
                          <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-text-muted" aria-hidden="true" />
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                      {exp.technologies.map((tech) => {
                        const Icon = getTechIcon(tech);
                        return (
                          <span
                            key={tech}
                            className="inline-flex items-center gap-1.5 text-xs font-mono text-text-muted"
                          >
                            <Icon className="size-3.5 opacity-70" />
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
