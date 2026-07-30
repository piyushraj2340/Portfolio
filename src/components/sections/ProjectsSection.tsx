import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

type ProjectsSectionProps = {
  condensed?: boolean;
};

export function ProjectsSection({ condensed = false }: ProjectsSectionProps) {
  const visibleProjects = condensed ? projects.filter((project) => project.featured) : projects;

  return (
    <Section id="projects">
      <div className="space-y-8">
        <SectionHeading
          eyebrow="Projects"
          title="Real products, real constraints, measurable outcomes"
          description="Project case studies emphasize problem framing, technical decisions, and delivered impact."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
}
