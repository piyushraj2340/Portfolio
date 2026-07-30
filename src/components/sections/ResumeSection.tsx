import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function ResumeSection() {
  return (
    <Section id="resume">
      <div className="surface-card flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
        <SectionHeading
          eyebrow="Resume"
          title="Need the full profile?"
          description="Download a concise resume to quickly evaluate role fit, impact, and technical stack."
        />
        <Link
          href={siteConfig.resumeUrl}
          className="w-fit rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-hover"
        >
          Download Resume
        </Link>
      </div>
    </Section>
  );
}
