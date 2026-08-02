import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "taskflow",
    title: "TaskFlow: Project & Workflow Automation",
    description:
      "A comprehensive SaaS platform built to automate project management and workflow scheduling. Utilizes Clean Architecture to maintain a decoupled, scalable codebase. Features include automated background jobs, real-time status updates, and a responsive modern UI.",
    technologies: ["ASP.NET Core", "React", "Clean Architecture", "Hangfire", "SQL Server", "Tailwind CSS"],
    repositoryUrl: "https://github.com/",
  }
];