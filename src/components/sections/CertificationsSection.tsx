import Link from "next/link";
import { Award, Cloud, Code2, Leaf, ExternalLink } from "lucide-react";
import { certifications } from "@/content/certifications";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const certIconMap: Record<string, React.ElementType> = {
  Cloud,
  Container: Cloud,
  Leaf,
  Code2,
};

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
          eyebrow="Certifications"
          title="Professional credentials"
          description="Industry-recognized certifications validating expertise."
        />
      </ScrollReveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => {
          const Icon = certIconMap[cert.icon] || Award;
          return (
            <ScrollReveal key={cert.name} delay={index * 100}>
              <div className="glass-card-hover group flex h-full flex-col p-6">
                <div className="flex items-center gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 transition-colors duration-200 group-hover:bg-accent/20">
                    <Icon className="size-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {cert.name}
                    </h3>
                    <p className="mt-0.5 text-xs text-text-muted">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="mt-auto flex items-center justify-between pt-5">
                  <span className="text-xs text-text-muted">
                    {formatDate(cert.date)}
                  </span>
                  {cert.credentialUrl && (
                    <Link
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-primary transition-colors hover:text-primary-hover"
                    >
                      Verify
                      <ExternalLink className="size-3" />
                    </Link>
                  )}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </Section>
  );
}
