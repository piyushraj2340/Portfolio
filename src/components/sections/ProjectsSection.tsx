import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/content/projects";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Card } from "@/components/shared/Card";
import { getTechIcon } from "@/lib/icon-map";

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
                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                  {project.technologies.map((tech) => {
                    const Icon = getTechIcon(tech);
                    return (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-text-muted"
                      >
                        <Icon className="size-3.5 opacity-70" />
                        {tech}
                      </span>
                    );
                  })}
                </div>

                {/* Links */}
                <div className="mt-8 flex items-center gap-6">
                  <Link
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors hover:text-primary hover:underline hover:underline-offset-4"
                  >
                    <FaGithub className="size-4" />
                    GitHub
                  </Link>
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-hover hover:underline hover:underline-offset-4"
                    >
                      Live Demo
                      <ExternalLink className="size-3.5" />
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
