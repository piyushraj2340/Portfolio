import { skills } from "@/content/skills";
import { SkillCategoryCard } from "@/components/cards/SkillCategoryCard";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

type SkillsSectionProps = {
  condensed?: boolean;
};

export function SkillsSection({ condensed = false }: SkillsSectionProps) {
  const visibleSkills = condensed ? skills.slice(0, 3) : skills;

  return (
    <Section id="skills" className="bg-surface">
      <div className="space-y-8">
        <SectionHeading
          eyebrow="Skills"
          title="Technical capabilities organized by domain"
          description="Focused on demonstrated proficiency across frontend, backend, cloud, and engineering practices."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {visibleSkills.map((skillCategory) => (
            <SkillCategoryCard key={skillCategory.category} skillCategory={skillCategory} />
          ))}
        </div>
      </div>
    </Section>
  );
}
