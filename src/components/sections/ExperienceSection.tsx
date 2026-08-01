import { experiences } from "@/content/experience";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

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

      <div className="relative mt-12">
        {/* Timeline Line */}
        <div
          className="timeline-line absolute left-6 top-0 hidden h-full md:left-1/2 md:block md:-translate-x-px"
          aria-hidden="true"
        />

        <div className="space-y-10 md:space-y-16">
          {experiences.map((exp, index) => (
            <ScrollReveal key={`${exp.company}-${exp.startDate}`} delay={index * 150}>
              <div
                className={`relative flex flex-col gap-6 md:flex-row md:items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className="timeline-dot absolute left-[18px] top-8 z-10 hidden md:left-1/2 md:block md:-translate-x-1/2"
                  aria-hidden="true"
                />

                {/* Content Card */}
                <div className="glass-card-hover w-full p-6 md:w-[calc(50%-2rem)]">
                  {/* Date Badge */}
                  <div className="mb-4 inline-flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {formatDate(exp.startDate)} — {formatDate(exp.endDate)}
                  </div>

                  <h3 className="text-lg font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-text-muted">
                    {exp.company}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {exp.summary}
                  </p>

                  {/* Achievements */}
                  <ul className="mt-4 space-y-2">
                    {exp.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Badges */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg bg-white/5 px-2.5 py-1 text-xs font-medium text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden w-[calc(50%-2rem)] md:block" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
