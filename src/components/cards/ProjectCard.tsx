import Link from "next/link";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="surface-card flex h-full flex-col gap-4 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-muted">
        {project.featured ? "Featured Project" : "Project"}
      </p>
      <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
      <p className="text-sm text-text-secondary">{project.description}</p>
      <p className="text-sm text-text-secondary">
        <span className="font-semibold text-foreground">Impact:</span> {project.impact}
      </p>
      <ul className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <li key={tech} className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground">
            {tech}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex items-center gap-3 pt-2">
        <Link href={project.repositoryUrl} className="text-sm font-semibold text-primary hover:text-primary-hover">
          Repository
        </Link>
        {project.liveUrl ? (
          <Link href={project.liveUrl} className="text-sm font-semibold text-primary hover:text-primary-hover">
            Live Demo
          </Link>
        ) : null}
      </div>
    </article>
  );
}