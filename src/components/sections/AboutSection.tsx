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

      <div className="mt-12 grid gap-8 lg:grid-cols-5">
        {/* Bio Card */}
        <ScrollReveal className="lg:col-span-3">
          <Card className="h-full p-8 md:p-10">
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
          </Card>
        </ScrollReveal>

        {/* Highlights */}
        <ScrollReveal className="lg:col-span-2" delay={150}>
          <div className="flex h-full flex-col gap-4">
            {profile.highlights.map((item) => (
              <Card
                key={item}
                hoverable
                className="flex items-center px-6 py-5"
              >
                <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <p className="ml-4 text-sm font-semibold text-foreground">{item}</p>
              </Card>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
