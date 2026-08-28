import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { siteConfig } from "@/config/site";
import { ProjectDetailContent } from "@/components/sections/ProjectDetailContent";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

/**
 * Statically generate all known project slugs at build time.
 */
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

/**
 * Dynamic metadata for each project page — SEO title, description, and OG.
 */
export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  const title = `${project.title} | ${siteConfig.name}`;
  const description = project.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/projects/${project.slug}`,
      siteName: siteConfig.name,
      type: "article",
      images: project.imageUrl
        ? [
            {
              url: project.imageUrl,
              width: 1200,
              height: 630,
              alt: project.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: project.imageUrl ? [project.imageUrl] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailContent project={project} />;
}
