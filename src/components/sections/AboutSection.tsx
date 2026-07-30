import { profile } from "@/content/profile";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

type AboutSectionProps = {
  condensed?: boolean;
};

export function AboutSection({ condensed = false }: AboutSectionProps) {
  return (
    <Section id="about">
      <div className="space-y-8">
        <SectionHeading
          eyebrow="About"
          title="Engineer profile beyond a resume"
          description="A concise narrative of my engineering journey, strengths, and the way I approach product and software quality."
        />
        <div className="surface-card grid gap-8 p-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold">Professional Summary</h3>
            <p className="mt-3 text-sm text-text-secondary">{profile.summary}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Engineering Philosophy</h3>
            <p className="mt-3 text-sm text-text-secondary">{profile.philosophy}</p>
          </div>
        </div>
        {condensed ? null : (
          <div className="surface-card p-8">
            <h3 className="text-xl font-semibold">Core Strengths</h3>
            <ul className="mt-4 space-y-2">
              {profile.highlights.map((item) => (
                <li key={item} className="text-sm text-text-secondary">
                  - {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Section>
  );
}
