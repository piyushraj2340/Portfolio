import Link from "next/link";
import { ExternalLink } from "lucide-react";
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

export function CertificationsSection() {
  return (
    <Section id="certifications">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Achievements"
          title="Problem solving milestones"
          description="Consistent practice and algorithmic problem solving across various platforms."
        />
      </ScrollReveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <ScrollReveal key={cert.name} delay={index * 100}>
              <Card hoverable className="flex h-full flex-col p-6 md:p-8">
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-foreground">
                    {cert.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-primary">
                    {cert.issuer}
                  </p>
                </div>

                <div className="mt-auto flex items-center justify-between pt-6">
                  <span className="text-xs font-medium text-text-muted">
                    {formatDate(cert.date)}
                  </span>
                  {cert.credentialUrl && (
                    <Link
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground transition-colors hover:text-primary"
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
    </Section>
  );
}
