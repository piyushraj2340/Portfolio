import { profile } from "@/content/profile";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Briefcase, Code2, Cloud, Layers, Zap } from "lucide-react";

const highlightIcons = [Briefcase, Code2, Cloud, Layers, Zap];

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
          <div className="glass-card p-8">
            <h3 id="about-heading" className="text-xl font-semibold text-foreground">
              Who I Am
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              {profile.bio}
            </p>
            <h3 className="mt-8 text-xl font-semibold text-foreground">
              My Philosophy
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              {profile.philosophy}
            </p>
          </div>
        </ScrollReveal>

        {/* Highlights */}
        <ScrollReveal className="lg:col-span-2" delay={150}>
          <div className="flex h-full flex-col gap-3">
            {profile.highlights.map((item, index) => {
              const Icon = highlightIcons[index % highlightIcons.length];
              return (
                <div
                  key={item}
                  className="glass-card-hover flex items-center gap-4 p-5"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{item}</p>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
