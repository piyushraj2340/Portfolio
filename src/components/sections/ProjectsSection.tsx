import Link from "next/link";
import { ExternalLink, Code2 } from "lucide-react";
import { projects } from "@/content/projects";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

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
            <div className="glass-card-hover group flex h-full flex-col overflow-hidden">
              {/* Image Area */}
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex size-16 items-center justify-center rounded-2xl bg-white/5 backdrop-blur-sm">
                    <Code2 className="size-8 text-primary/60" />
                  </div>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="mt-4 flex flex-wrap gap-2">
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
                <div className="mt-5 flex items-center gap-3">
                  <Link
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-foreground transition-all duration-200 hover:border-white/20 hover:bg-white/10"
                  >
                    <Code2 className="size-3.5" />
                    GitHub
                  </Link>
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary-hover"
                    >
                      <ExternalLink className="size-3.5" />
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
