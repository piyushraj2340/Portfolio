"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, FolderGit2, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/content/projects";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Card } from "@/components/shared/Card";
import { getTechIcon } from "@/lib/icon-map";

export function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" aria-labelledby="projects-heading">
      <ScrollReveal>
        <SectionHeading
          id="projects-heading"
          eyebrow="Work"
          title="Featured projects"
          description="A selection of my best work, from concept to deployment."
        />
      </ScrollReveal>

      {/* ── Featured Projects — Large Hero Cards ── */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <ScrollReveal
            key={project.slug}
            delay={index * 120}
            variant="slideUp"
          >
            <div className="group block h-full">
              <Card
                hoverable
                className="relative flex h-full flex-col overflow-hidden p-0 transition-all duration-300 hover:border-white/20"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="absolute inset-0 z-10"
                  aria-label={`View ${project.title} details`}
                />
                
                {/* Image */}
                {project.imageUrl && (
                  <div className="relative h-56 w-full overflow-hidden border-b border-white/5 sm:h-64 lg:h-72">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/30 to-transparent mix-blend-multiply opacity-80 transition-opacity duration-500 group-hover:opacity-40 pointer-events-none" />
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
                    />
                    {/* Shine overlay on hover */}
                    <div
                      aria-hidden="true"
                      className="card-shine absolute inset-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                    />
                    {/* Badges */}
                    <div className="absolute left-4 top-4 z-20 flex items-center gap-2 pointer-events-none">
                      <span className="flex size-10 items-center justify-center rounded-xl bg-background/15 backdrop-blur-md border border-white/10 shadow-lg transition-transform duration-500 group-hover:scale-110">
                        <FolderGit2 className="size-4 text-primary" />
                      </span>
                      {project.category && (
                        <span className="rounded-lg border border-white/10 bg-background/40 px-2.5 py-1 text-xs font-medium text-white/90 backdrop-blur-md">
                          {project.category}
                        </span>
                      )}
                      {project.status && (
                        <span className="rounded-lg border border-success/30 bg-success/10 px-2.5 py-1 text-xs font-medium text-success backdrop-blur-md">
                          {project.status}
                        </span>
                      )}
                    </div>

                    {/* Action Links (Github / Live) */}
                    <div className="absolute right-4 top-4 z-30 flex items-center gap-2">
                      {project.repositoryUrl && (
                        <a
                          href={project.repositoryUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex size-10 items-center justify-center rounded-xl bg-background/50 backdrop-blur-md border border-white/10 text-white/80 shadow-lg transition-all duration-300 hover:bg-white/10 hover:text-white hover:scale-110"
                          title="View Source Code"
                        >
                          <FaGithub className="size-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex size-10 items-center justify-center rounded-xl bg-background/50 backdrop-blur-md border border-white/10 text-white/80 shadow-lg transition-all duration-300 hover:bg-white/10 hover:text-white hover:scale-110"
                          title="View Live Demo"
                        >
                          <ExternalLink className="size-4" />
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="relative z-20 flex flex-1 flex-col bg-gradient-to-b from-transparent to-background/50 p-6 sm:p-8">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary sm:text-xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech chips */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 5).map((tech) => {
                      const Icon = getTechIcon(tech);
                      return (
                        <span
                          key={tech}
                          className="interactive-chip inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-text-secondary"
                        >
                          <Icon
                            className="size-3.5 opacity-70"
                            aria-hidden="true"
                          />
                          {tech}
                        </span>
                      );
                    })}
                    {project.technologies.length > 5 && (
                      <span className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-text-muted">
                        +{project.technologies.length - 5} more
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto flex items-center gap-2 border-t border-white/5 pt-5">
                    <span className="text-sm font-medium text-text-muted transition-colors duration-300 group-hover:text-primary">
                      View Case Study
                    </span>
                    <ArrowUpRight className="size-4 text-text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                  </div>
                </div>
              </Card>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* ── Other Projects — Compact Cards ── */}
      {otherProjects.length > 0 && (
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {otherProjects.map((project, index) => (
            <ScrollReveal
              key={project.slug}
              delay={(featuredProjects.length + index) * 100}
              variant="slideUp"
            >
              <div className="group block h-full">
                <Card
                  hoverable
                  className="relative flex h-full flex-col overflow-hidden p-0 transition-all duration-300 hover:border-white/20"
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="absolute inset-0 z-10"
                    aria-label={`View ${project.title} details`}
                  />

                  {/* Compact Image */}
                  {project.imageUrl && (
                    <div className="relative h-40 w-full overflow-hidden border-b border-white/5 sm:h-44">
                      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/30 to-transparent mix-blend-multiply opacity-80 transition-opacity duration-500 group-hover:opacity-40 pointer-events-none" />
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
                      />
                      {/* Badges */}
                      <div className="absolute left-3 top-3 z-20 flex items-center gap-2 pointer-events-none">
                        <span className="flex size-8 items-center justify-center rounded-lg bg-background/15 backdrop-blur-md border border-white/10 shadow-lg">
                          <FolderGit2 className="size-3.5 text-primary" />
                        </span>
                        {project.category && (
                          <span className="rounded-md border border-white/10 bg-background/40 px-2 py-0.5 text-[11px] font-medium text-white/90 backdrop-blur-md">
                            {project.category}
                          </span>
                        )}
                      </div>

                      {/* Action Links (Github / Live) */}
                      <div className="absolute right-3 top-3 z-30 flex items-center gap-1.5">
                        {project.repositoryUrl && (
                          <a
                            href={project.repositoryUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex size-8 items-center justify-center rounded-lg bg-background/50 backdrop-blur-md border border-white/10 text-white/80 shadow-lg transition-all duration-300 hover:bg-white/10 hover:text-white hover:scale-110"
                            title="View Source Code"
                          >
                            <FaGithub className="size-3.5" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex size-8 items-center justify-center rounded-lg bg-background/50 backdrop-blur-md border border-white/10 text-white/80 shadow-lg transition-all duration-300 hover:bg-white/10 hover:text-white hover:scale-110"
                            title="View Live Demo"
                          >
                            <ExternalLink className="size-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Compact Content */}
                  <div className="relative z-20 flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="text-base font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech chips — fewer */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => {
                        const Icon = getTechIcon(tech);
                        return (
                          <span
                            key={tech}
                            className="interactive-chip inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-text-secondary"
                          >
                            <Icon
                              className="size-3 opacity-70"
                              aria-hidden="true"
                            />
                            {tech}
                          </span>
                        );
                      })}
                      {project.technologies.length > 4 && (
                        <span className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-text-muted">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="mt-auto flex items-center gap-1.5 pt-4">
                      <span className="text-xs font-medium text-text-muted transition-colors duration-300 group-hover:text-primary">
                        View Details
                      </span>
                      <ArrowUpRight className="size-3.5 text-text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                    </div>
                  </div>
                </Card>
              </div>
            </ScrollReveal>
          ))}
        </div>
      )}
    </Section>
  );
}
