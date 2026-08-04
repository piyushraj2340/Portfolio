import { Check, Compass, Gauge, Sparkles } from "lucide-react";
import { profile } from "@/content/profile";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Container } from "@/components/layout/Container";

const valueIcons = [Sparkles, Compass, Gauge];

export function AboutSection() {
  return (
    <Section id="about" aria-labelledby="about-heading" className="bg-surface py-24 sm:py-32">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="About"
            title="Engineer by craft, product thinker by habit."
            description="A quick look at how I work, what I have shipped, and the principles I keep coming back to."
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <ScrollReveal className="glass rounded-3xl p-6 sm:p-8">
            <div className="flex flex-col space-y-5">
              {profile.bio.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="leading-relaxed text-pretty text-text-secondary"
                >
                  {paragraph}
                </p>
              ))}

              <div className="h-px bg-white/10" />

              <div>
                <h3 className="font-mono text-xs tracking-widest text-text-muted uppercase">
                  Career summary
                </h3>
                <p className="mt-3 leading-relaxed text-pretty text-text-secondary">
                  {profile.careerSummary}
                </p>
              </div>

              <ul className="flex flex-wrap gap-2">
                {profile.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-text-secondary"
                  >
                    <Check className="size-3.5 text-accent" aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <div className="flex flex-col space-y-5">
            {profile.values && profile.values.map((value, index) => {
              const Icon = valueIcons[index % valueIcons.length];
              return (
                <ScrollReveal
                  key={value.title}
                  delay={index * 100}
                  className="glass group flex-1 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20"
                >
                  <div className="flex items-start gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-accent transition-transform duration-500 group-hover:scale-110">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-medium tracking-tight text-foreground">
                        {value.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-pretty text-text-secondary">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}

            <ScrollReveal
              delay={300}
              className="glass rounded-3xl p-6"
            >
              <p className="font-mono text-xs tracking-widest text-text-muted uppercase">
                Based in
              </p>
              <p className="mt-2 text-lg font-medium tracking-tight text-foreground">
                {profile.location}
              </p>
              <p className="mt-1 text-sm text-text-secondary">
                Available for remote and hybrid roles.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
