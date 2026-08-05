"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, FolderGit2, ChevronDown, ChevronUp } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/content/projects";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Card } from "@/components/shared/Card";
import { getTechIcon } from "@/lib/icon-map";

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <Section id="projects">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Work"
          title="Featured projects"
          description="A selection of my best work, from concept to deployment."
        />
      </ScrollReveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayedProjects.map((project, index) => (
          <ScrollReveal
            key={project.title}
            delay={index * 100}
            variant="slideUp"
          >
            <Card hoverable className="group flex h-full flex-col overflow-hidden transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.05)] hover:border-primary/30 p-0">
              {/* Project Image Header */}
              {project.imageUrl && (
                <div className="relative h-48 w-full overflow-hidden border-b border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10 mix-blend-multiply opacity-80 transition-opacity duration-500 group-hover:opacity-40" />
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute left-4 top-4 z-20 flex items-center justify-between w-[calc(100%-2rem)]">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-background/50 backdrop-blur-md border border-white/10 shadow-lg transition-transform duration-500 group-hover:scale-110">
                      <FolderGit2 className="size-4 text-primary" />
                    </span>
                    {/* Links in image header */}
                    <div className="flex items-center gap-2">
                      {project.repositoryUrl && (
                        <Link
                          href={project.repositoryUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex size-9 items-center justify-center rounded-xl bg-background/50 backdrop-blur-md border border-white/10 text-white transition-all duration-300 hover:bg-primary hover:border-primary hover:scale-110 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_var(--primary)]"
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
                          className="flex size-9 items-center justify-center rounded-xl bg-background/50 backdrop-blur-md border border-white/10 text-white transition-all duration-300 hover:bg-primary hover:border-primary hover:scale-110 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_var(--primary)]"
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
              <div className="flex flex-1 flex-col p-5 sm:p-6 relative z-20 bg-gradient-to-b from-transparent to-background/50">
                <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary transition-colors duration-300 group-hover:text-text-primary">
                  {project.description}
                </p>

                {project.impact && (
                  <div className="mt-5 flex-1">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">Key Highlights</h4>
                    <p className="text-sm leading-relaxed text-text-secondary whitespace-pre-line border-l-2 border-primary/30 pl-4 transition-colors duration-300 group-hover:border-primary">
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
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 font-mono text-xs text-text-muted transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:scale-105"
                      >
                        <Icon className="size-3.5 opacity-70 transition-opacity hover:opacity-100" />
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

      {projects.length > 3 && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-text-secondary transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
          >
            {showAll ? "Show Less" : "Show More"}
            {showAll ? (
              <ChevronUp className="size-4 transition-transform group-hover:-translate-y-1" />
            ) : (
              <ChevronDown className="size-4 transition-transform group-hover:translate-y-1" />
            )}
          </button>
        </div>
      )}
    </Section>
  );
}
