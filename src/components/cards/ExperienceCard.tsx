import { formatYearMonth } from "@/lib/utils";
import type { Experience } from "@/types/experience";

type ExperienceCardProps = {
  experience: Experience;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="surface-card flex flex-col gap-4 p-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-foreground">{experience.role}</h3>
          <p className="text-sm font-medium text-text-secondary">{experience.company}</p>
        </div>
        <p className="text-sm text-text-muted">
          {formatYearMonth(experience.startDate)} -{" "}
          {experience.endDate === "Present" ? "Present" : formatYearMonth(experience.endDate)}
        </p>
      </div>
      <p className="text-sm text-text-secondary">{experience.summary}</p>
      <ul className="space-y-2">
        {experience.achievements.map((item) => (
          <li key={item} className="text-sm text-text-secondary">
            - {item}
          </li>
        ))}
      </ul>
      <ul className="flex flex-wrap gap-2">
        {experience.technologies.map((tech) => (
          <li key={tech} className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground">
            {tech}
          </li>
        ))}
      </ul>
    </article>
  );
}