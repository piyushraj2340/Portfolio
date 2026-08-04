import Link from "next/link";
import { ExternalLink, FolderGit2 } from "lucide-react";
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
          eyebrow="Work"
          title="Featured projects"
          description="A selection of my best work, from concept to deployment."
        />
      </ScrollReveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ScrollReveal
            key={project.title}
            delay={index * 100}
            variant="slideUp"
          >
            <Card hoverable className="group flex h-full flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 p-0">
              {/* Project Image Header */}
              {project.imageUrl && (
                <div className="relative h-48 w-full overflow-hidden border-b border-white/5 sm:h-60">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 mix-blend-multiply" />
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 z-20 flex items-center justify-between w-[calc(100%-2rem)]">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-background/50 backdrop-blur-md border border-white/10 shadow-lg">
                      <FolderGit2 className="size-4 text-primary transition-transform duration-300 group-hover:scale-110" />
                    </span>
                    {/* Links in image header */}
                    <div className="flex items-center gap-2">
                      {project.repositoryUrl && (
                        <Link
                          href={project.repositoryUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex size-10 items-center justify-center rounded-xl bg-background/50 backdrop-blur-md border border-white/10 text-white transition-all hover:bg-primary hover:border-primary hover:scale-105"
                          aria-label={`GitHub repository for ${project.title}`}
                        >
                          <FaGithub className="size-4" aria-hidden="true" />
                        </Link>
                      )}
                      {project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex size-10 items-center justify-center rounded-xl bg-background/50 backdrop-blur-md border border-white/10 text-white transition-all hover:bg-primary hover:border-primary hover:scale-105"
                          aria-label={`Live demo for ${project.title}`}
                        >
                          <ExternalLink className="size-4" aria-hidden="true" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Project Content */}
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h3 className="text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-text-secondary">
                  {project.description}
                </p>

                {project.impact && (
                  <div className="mt-5 flex-1">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">Key Highlights</h4>
                    <p className="text-sm leading-relaxed text-text-secondary whitespace-pre-line border-l-2 border-primary/30 pl-4">
                      {project.impact}
                    </p>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t border-white/5 mt-auto">
                  {project.technologies.map((tech) => {
                    const Icon = getTechIcon(tech);
                    return (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 font-mono text-xs text-text-muted transition-colors group-hover:bg-white/10 group-hover:text-foreground"
                      >
                        <Icon className="size-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
