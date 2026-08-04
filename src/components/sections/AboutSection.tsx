import { profile } from "@/content/profile";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Card } from "@/components/shared/Card";

export function AboutSection() {
  return (
    <Section id="about" aria-labelledby="about-heading">
      <ScrollReveal>
        <SectionHeading
          eyebrow="About"
          title="Engineer beyond the resume"
          description="A concise narrative of my engineering journey, strengths, and the way I approach building software."
        />
      </ScrollReveal>

      <div className="mt-12 max-w-3xl">
        <ScrollReveal>
          <Card className="p-8 md:p-10">
            <h3 id="about-heading" className="text-xl font-bold tracking-tight text-foreground">
              Who I Am
            </h3>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              {profile.bio}
            </p>
            <h3 className="mt-10 text-xl font-bold tracking-tight text-foreground">
              My Philosophy
            </h3>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              {profile.philosophy}
            </p>
            
            <h3 className="mt-10 text-xl font-bold tracking-tight text-foreground">
              Highlights
            </h3>
            <ul className="mt-4 space-y-3">
              {profile.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-text-secondary">
                  <span className="mt-2.5 block h-1 w-1 shrink-0 rounded-full bg-text-muted" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </ScrollReveal>
      </div>
    </Section>
  );
}
