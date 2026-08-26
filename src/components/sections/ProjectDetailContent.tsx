"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  AlertTriangle,
  Sparkles,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import type { Project } from "@/types/project";
import { projects } from "@/content/projects";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Card } from "@/components/shared/Card";
import { getTechIcon } from "@/lib/icon-map";

type ProjectDetailContentProps = {
  project: Project;
};

export function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const impactLines = project.impact
    .split("\n")
    .map((line) => line.replace(/^•\s*/, "").trim())
    .filter(Boolean);

  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32">
        {/* Background gradient blobs */}
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-primary/[0.04] blur-[120px]" />
          <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-secondary/[0.04] blur-[120px]" />
        </div>

        <Container>
          {/* Back link */}
          <ScrollReveal>
            <Link
              href="/#projects"
              className="group mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-text-secondary transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
            >
              <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Back to Projects
            </Link>
          </ScrollReveal>

          <div className="mt-6 grid items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            {/* Text content */}
            <ScrollReveal delay={100}>
              <div className="flex flex-col gap-6">
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  {project.category && (
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-text-secondary">
                      {project.category}
                    </span>
                  )}
                  {project.status && (
                    <span className="rounded-full border border-success/30 bg-success/10 px-3 py-1 text-xs font-medium text-success">
                      {project.status}
                    </span>
                  )}
                </div>

                <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  {project.title}
                </h1>

                <p className="max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
                  {project.description}
                </p>

                {/* Action buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  {project.repositoryUrl && (
                    <Link
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      <FaGithub className="size-4" aria-hidden="true" />
                      Source Code
                    </Link>
                  )}
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_var(--primary)]"
                    >
                      <ExternalLink className="size-4" aria-hidden="true" />
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </ScrollReveal>

            {/* Hero image */}
            {project.imageUrl && (
              <ScrollReveal delay={200} variant="scale">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/40 to-transparent" />
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={800}
                    height={500}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>
              </ScrollReveal>
            )}
          </div>
        </Container>
      </section>

      {/* ── Problem & Impact ── */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Problem card */}
            <ScrollReveal delay={100}>
              <Card className="flex h-full flex-col p-6 sm:p-8">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-warning/10 text-warning">
                    <AlertTriangle className="size-5" />
                  </span>
                  <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                    The Challenge
                  </h2>
                </div>
                <p className="text-sm leading-relaxed text-text-secondary sm:text-base">
                  {project.problem}
                </p>
              </Card>
            </ScrollReveal>

            {/* Impact card */}
            <ScrollReveal delay={200}>
              <Card className="flex h-full flex-col p-6 sm:p-8">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Sparkles className="size-5" />
                  </span>
                  <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                    Key Achievements
                  </h2>
                </div>
                <ul className="space-y-3">
                  {impactLines.map((line, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.3 + i * 0.1,
                        type: "spring",
                        stiffness: 120,
                        damping: 20,
                      }}
                      className="relative pl-5 text-sm leading-relaxed text-text-secondary before:absolute before:left-0 before:top-[0.55rem] before:size-1.5 before:rounded-full before:bg-primary before:shadow-[0_0_8px_rgba(37,99,235,0.4)] sm:text-base"
                    >
                      {line}
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── Tech Stack ── */}
      <section className="py-16 sm:py-24">
        <Container>
          <ScrollReveal>
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Technology Stack
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {project.technologies.map((tech, i) => {
              const Icon = getTechIcon(tech);
              return (
                <ScrollReveal key={tech} delay={i * 60} variant="scale">
                  <Card className="flex flex-col items-center gap-3 p-5 text-center transition-all duration-300 hover:border-primary/30 hover:bg-primary/[0.04]">
                    <Icon className="size-7 text-text-secondary transition-colors duration-300 group-hover:text-primary" />
                    <span className="text-sm font-medium text-text-secondary">
                      {tech}
                    </span>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Project Navigation ── */}
      <section className="border-t border-white/5 py-16 sm:py-24">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch sm:justify-between">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group flex flex-1 items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04] sm:p-6"
              >
                <ArrowLeft className="size-5 shrink-0 text-text-muted transition-transform duration-300 group-hover:-translate-x-1 group-hover:text-primary" />
                <div className="min-w-0">
                  <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
                    Previous
                  </span>
                  <p className="mt-1 truncate text-sm font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                    {prevProject.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div className="flex-1" />
            )}

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex flex-1 items-center justify-end gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-5 text-right transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04] sm:p-6"
              >
                <div className="min-w-0">
                  <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
                    Next
                  </span>
                  <p className="mt-1 truncate text-sm font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                    {nextProject.title}
                  </p>
                </div>
                <ArrowRight className="size-5 shrink-0 text-text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </div>

          {/* Back to all */}
          <div className="mt-10 flex justify-center">
            <Link
              href="/#projects"
              className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-text-secondary transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              All Projects
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
