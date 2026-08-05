import { profile } from "@/content/profile";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function AboutSection() {
  return (
    <Section id="about" aria-labelledby="about-heading" className="bg-surface">
        <ScrollReveal>
          <SectionHeading
            eyebrow="About"
            title="Engineer by craft, product thinker by habit."
            description="I focus on building solutions that are not just technically sound, but truly valuable to the end user."
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Who I Am */}
          <ScrollReveal delay={0} className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold tracking-tight text-foreground">
              Who I am
            </h3>
            <div className="space-y-4 text-base leading-relaxed text-text-secondary">
              {profile.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </ScrollReveal>

          {/* Right Column: My Philosophy */}
          <ScrollReveal delay={100} className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold tracking-tight text-foreground">
              My philosophy
            </h3>
            <div className="text-base leading-relaxed text-text-secondary">
              <p>{profile.philosophy}</p>
            </div>
          </ScrollReveal>
        </div>
    </Section>
  );
}
