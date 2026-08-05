"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { education } from "@/content/education";
import { certifications } from "@/content/certifications";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Card } from "@/components/shared/Card";

function formatDate(date: string): string {
  const [year, month] = date.split("-");
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  return `${months[parseInt(month, 10) - 1]} ${year}`;
}

export function BackgroundSection() {
  return (
    <Section id="background">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Background & Milestones"
          title="Academic and algorithmic milestones"
          description="A foundation in computer science and continuous problem solving."
        />
      </ScrollReveal>

      <div className="mt-12 grid gap-6 md:gap-8 lg:grid-cols-2">
        {/* Education Column */}
        <div className="flex flex-col gap-6 md:gap-8">
          <ScrollReveal>
            <h3 className="mb-2 text-xl font-bold tracking-tight text-foreground">Education</h3>
          </ScrollReveal>
          {education.map((edu, index) => (
            <ScrollReveal key={edu.institution} delay={index * 100}>
              <Card className="flex h-full flex-col p-6 md:p-8">
                <h4 className="text-lg font-bold tracking-tight text-foreground">
                  {edu.degree} in {edu.field}
                </h4>
                <p className="mt-1 text-sm font-semibold text-primary">
                  {edu.institution}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                  {edu.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {edu.coursework?.map((course) => (
                    <span
                      key={course}
                      className="text-xs font-mono text-text-muted"
                    >
                      {course}
                    </span>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-white/5 text-xs font-medium text-text-muted">
                  {formatDate(edu.startDate)} — {formatDate(edu.endDate)}
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Achievements Column */}
        <div className="flex flex-col gap-6 md:gap-8">
          <ScrollReveal delay={150}>
            <h3 className="mb-2 text-xl font-bold tracking-tight text-foreground">Achievements</h3>
          </ScrollReveal>
          {certifications.map((cert, index) => (
            <ScrollReveal key={cert.name} delay={150 + index * 100}>
              <Card hoverable className="flex flex-col p-6 md:p-8">
                <div>
                  <h4 className="text-lg font-bold tracking-tight text-foreground">
                    {cert.name}
                  </h4>
                  <p className="mt-1 text-sm font-semibold text-primary">
                    {cert.issuer}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-6">
                  <span className="text-xs font-medium text-text-muted">
                    {formatDate(cert.date)}
                  </span>
                  {cert.credentialUrl && (
                    <Link
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors hover:text-primary hover:underline hover:underline-offset-4"
                    >
                      Verify
                      <ExternalLink className="size-3.5" />
                    </Link>
                  )}
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
