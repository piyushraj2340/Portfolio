"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, MapPin, Trophy } from "lucide-react";
import { experiences } from "@/content/experience";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { getTechIcon } from "@/lib/icon-map";

function formatDate(date: string): string {
  if (date === "Present") return "Present";
  const [year, month] = date.split("-");
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  return `${months[parseInt(month, 10) - 1]} ${year}`;
}

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Section id="experience" aria-labelledby="experience-heading" className="bg-background">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Experience"
            title="Two years of shipping, owning, and on-call."
            description="Roles where I moved from writing features to owning services end to end."
          />
        </ScrollReveal>

        <div ref={containerRef} className="relative mt-12 pb-8">
          <div role="list" className="relative flex flex-col space-y-6 pl-8 sm:pl-12">
            {/* Animated Vertical Line */}
            <div className="absolute left-[7px] sm:left-[11px] top-2 bottom-0 w-[2px] bg-white/10 origin-top">
              <motion.div 
                className="absolute top-0 w-full bg-primary origin-top"
                style={{ scaleY, bottom: 0 }}
              />
            </div>

            {experiences.map((item, index) => (
              <ScrollReveal
                key={item.company}
                delay={index * 120}
                variant="slideUp"
              >
                <div role="listitem" className="group relative">
                  {/* Timeline Node */}
                  <span className="absolute -left-[29px] sm:-left-[41px] top-7 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-primary/20 ring-4 ring-background">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                  </span>

                  <article className="glass rounded-3xl p-6 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-white/20 sm:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                          {item.role}
                        </h3>
                        <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-text-muted">
                          <span className="inline-flex items-center gap-1.5 text-foreground">
                            <Briefcase className="size-4 text-accent" aria-hidden="true" />
                            {item.company}
                          </span>
                          {item.location && (
                            <span className="inline-flex items-center gap-1.5 text-text-secondary">
                              <MapPin className="size-4" aria-hidden="true" />
                              {item.location}
                            </span>
                          )}
                        </p>
                      </div>
                      <p className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-text-muted">
                        {formatDate(item.startDate)} - {formatDate(item.endDate)}
                      </p>
                    </div>

                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                      {item.responsibilities && (
                        <div>
                          <h4 className="font-mono text-xs tracking-widest text-text-muted uppercase">
                            Responsibilities
                          </h4>
                          <ul className="mt-3 flex flex-col gap-2.5">
                            {item.responsibilities.map((line) => (
                              <li
                                key={line}
                                className="flex gap-2.5 text-sm leading-relaxed text-text-secondary"
                              >
                                <span
                                  aria-hidden="true"
                                  className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                                />
                                {line}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div>
                        <h4 className="font-mono text-xs tracking-widest text-text-muted uppercase">
                          Achievements
                        </h4>
                        <ul className="mt-3 flex flex-col gap-2.5">
                          {item.achievements.map((line) => (
                            <li
                              key={line}
                              className="flex gap-2.5 text-sm leading-relaxed text-text-secondary"
                            >
                              <Trophy
                                className="mt-0.5 size-4 shrink-0 text-accent"
                                aria-hidden="true"
                              />
                              {line}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/10 pt-5">
                      {item.technologies.map((tech) => {
                        const Icon = getTechIcon(tech);
                        return (
                          <span
                            key={tech}
                            className="inline-flex items-center gap-1.5 text-xs font-mono text-text-muted"
                          >
                            <Icon className="size-3.5 opacity-70" aria-hidden="true" />
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </article>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
    </Section>
  );
}
