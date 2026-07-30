import { experiences } from "@/content/experience";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

type ExperienceSectionProps = {
  condensed?: boolean;
};

export function ExperienceSection({ condensed = false }: ExperienceSectionProps) {
  const visibleExperiences = condensed ? experiences.slice(0, 1) : experiences;

  return (
    <Section id="experience" className="bg-surface">
      <div className="space-y-8">
        <SectionHeading
          eyebrow="Experience"
          title="Professional progression with impact"
          description="A concise timeline of roles, responsibilities, and business outcomes across product-focused teams."
        />
        <div className="space-y-6">
          {visibleExperiences.map((experience) => (
            <ExperienceCard
              key={`${experience.company}-${experience.role}-${experience.startDate}`}
              experience={experience}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
