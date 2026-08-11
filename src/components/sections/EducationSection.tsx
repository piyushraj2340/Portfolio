"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { GraduationCap, MapPin, BookOpen } from "lucide-react";
import { education } from "@/content/education";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

function formatDate(date: string): string {
  if (date === "Present") return "Present";
  const [year, month] = date.split("-");
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  return `${months[parseInt(month, 10) - 1]} ${year}`;
}

export function EducationSection() {
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
    <Section id="education" aria-labelledby="education-heading" className="bg-surface">
        <ScrollReveal>
          <SectionHeading
            id="education-heading"
            eyebrow="Education"
            title="Academic background"
            description="Foundation in computer science and engineering principles."
          />
        </ScrollReveal>

        <div ref={containerRef} className="relative mt-12">
          <div role="list" className="relative flex flex-col space-y-6 pl-8 sm:pl-12">
            {/* Animated Vertical Line */}
            <div className="absolute left-[7px] sm:left-[11px] top-2 bottom-0 w-[2px] bg-white/10 origin-top">
              <motion.div
                className="absolute top-0 w-full bg-primary origin-top"
                style={{ scaleY, bottom: 0 }}
              />
            </div>

            {education.filter((item) => item.isVisible).map((item, index) => (
              <ScrollReveal
                key={item.institution}
                delay={index * 120}
                variant="slideUp"
              >
                <div role="listitem" className="group relative">
                  {/* Timeline Node */}
                  <span className="absolute -left-[29px] top-7 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-primary/20 ring-4 ring-background transition-transform duration-300 group-hover:scale-125 sm:-left-[41px]">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                  </span>

                  <article className="glass rounded-2xl p-6 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-white/20 group-hover:shadow-[var(--glow-primary)] sm:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                          {item.degree} in {item.field}
                        </h3>
                        <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-text-muted">
                          <span className="inline-flex items-center gap-1.5 text-foreground">
                            <GraduationCap className="size-4 text-accent" aria-hidden="true" />
                            {item.institution}
                          </span>
                          {item.location && (
                            <span className="inline-flex items-center gap-1.5 text-text-muted">
                              <MapPin className="size-4" aria-hidden="true" />
                              {item.location}
                            </span>
                          )}
                        </p>
                      </div>
                      <p className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-text-muted transition-colors duration-300 group-hover:border-primary/30 group-hover:text-foreground">
                        {formatDate(item.startDate)} - {formatDate(item.endDate)}
                      </p>
                    </div>

                    <div className="mt-6">
                      {item.description && (
                        <p className="text-sm leading-relaxed text-text-secondary">
                          {item.description}
                        </p>
                      )}

                      {item.coursework && item.coursework.length > 0 && (
                        <div className="mt-6">
                          <h4 className="flex items-center gap-1.5 font-mono text-xs tracking-widest text-text-muted uppercase">
                            <BookOpen className="size-3.5" aria-hidden="true" />
                            Relevant Coursework
                          </h4>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {item.coursework.map((course) => (
                              <span
                                key={course}
                                className="interactive-chip rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-text-secondary"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
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
