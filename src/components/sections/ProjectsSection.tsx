import Link from "next/link";
import { ExternalLink, Code2 } from "lucide-react";
import { projects } from "@/content/projects";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Card } from "@/components/shared/Card";

export function ProjectsSection() {
  return (
    <Section id="projects">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Projects"
          title="Featured work"
          description="Real projects with real constraints and measurable outcomes."
        />
      </ScrollReveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ScrollReveal key={project.slug} delay={index * 100}>
            <Card hoverable className="group flex h-full flex-col p-6 md:p-8">
              {/* Content */}
              <div className="flex flex-1 flex-col">
                <h3 className="text-xl font-bold tracking-tight text-foreground">
                  {project.title}
                </h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-text-secondary">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-white/5 px-2.5 py-1 text-xs font-medium text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-8 flex items-center gap-4">
                  <Link
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-foreground transition-all duration-200 hover:border-white/20 hover:bg-white/10"
                  >
                    <Code2 className="size-4" />
                    GitHub
                  </Link>
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary-hover"
                    >
                      <ExternalLink className="size-4" />
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
