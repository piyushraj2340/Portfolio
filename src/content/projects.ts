import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "taskflow",
    title: "TaskFlow: Project & Workflow Automation",
    description: "A comprehensive SaaS platform built to automate project management and workflow scheduling. Utilizes Clean Architecture to maintain a decoupled, scalable codebase. Features include automated background jobs, real-time status updates, and a responsive modern UI.",
    technologies: ["ASP.NET Core", "React", "Clean Architecture", "Hangfire", "SQL Server", "Tailwind CSS"],
    repositoryUrl: "https://github.com/",
    liveUrl: "https://taskflow.example.com",
    problem: "Many teams struggle with managing complex projects and workflows, leading to inefficiencies and missed deadlines. Existing tools often lack automation and real-time updates.",
    impact: "TaskFlow has improved project completion rates by 30% for early adopters, reduced manual task management by 50%, and enhanced team collaboration through real-time updates.",
  }
];