import { CheckCircle2, Star, MapPin } from "lucide-react";
import { profile } from "@/content/profile";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Container } from "@/components/layout/Container";

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

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          {/* Left Column: Story */}
          <ScrollReveal className="glass flex flex-col gap-8 rounded-3xl p-6 sm:p-8">
            <div className="space-y-4 text-base leading-relaxed text-text-secondary">
              {profile.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            
            <div className="my-2 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            <div className="space-y-4">
              <h4 className="font-mono text-sm tracking-widest text-text-muted uppercase">
                Career summary
              </h4>
              <p className="text-sm leading-relaxed text-text-secondary">
                {profile.careerSummary}
              </p>
            </div>
            
            <div className="mt-auto pt-4">
              <ul className="flex flex-wrap gap-2">
                {profile.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-text-secondary"
                  >
                    <CheckCircle2 className="size-3.5 text-accent" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Right Column: Values & Location */}
          <div className="flex flex-col gap-5">
            {profile.values?.map((value, index) => (
              <ScrollReveal
                key={value.title}
                delay={index * 100}
                variant="slideUp"
                className="glass group relative flex items-start gap-4 overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-12 -right-12 size-32 rounded-full bg-primary/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20">
                  <Star className="size-4 text-foreground" />
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">
                    {value.title}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}

            <ScrollReveal
              delay={300}
              className="glass relative overflow-hidden rounded-3xl p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-white/5">
                  <MapPin className="size-4 text-text-muted" />
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">
                    Based in
                  </h4>
                  <p className="text-sm text-text-secondary">
                    {profile.location}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
    </Section>
  );
}
