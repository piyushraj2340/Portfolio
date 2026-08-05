import type { SkillCategory } from "@/types/skill";

// 6 Categories perfectly fit a 2 or 3 column layout without orphaned items
export const skills: SkillCategory[] = [
  {
    category: "Languages",
    icon: "Code",
    blurb: "Core programming languages I use to build scalable systems and interactive applications.",
    items: [
      "C#",
      "JavaScript/TypeScript",
      "SQL",
      "HTML/CSS"
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    blurb: "Architecting high-performance enterprise backends and RESTful services.",
    items: [
      "ASP.NET Core (MVC/Web API)",
      "Entity Framework Core",
      "REST APIs",
      "Hangfire"
    ],
  },
  {
    category: "Frontend",
    icon: "Monitor",
    blurb: "Crafting intuitive and responsive user interfaces with modern JavaScript frameworks.",
    items: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Redux"
    ],
  },
  {
    category: "Database & Cloud",
    icon: "Database",
    blurb: "Designing robust database schemas and deploying scalable services to the cloud.",
    items: [
      "MS SQL Server",
      "Azure Services",
      "Redis",
      "Azure SQL"
    ],
  },
  {
    category: "Architecture",
    icon: "Layers",
    blurb: "Structuring codebases for maintainability, testability, and enterprise scale.",
    items: [
      "Clean Architecture",
      "Microservices",
      "SOLID Principles",
      "Design Patterns"
    ],
  },
  {
    category: "DevOps & Tools",
    icon: "Wrench",
    blurb: "Automating workflows, managing source control, and ensuring reliable deliveries.",
    items: [
      "Git & GitHub",
      "Docker",
      "CI/CD",
      "Postman"
    ],
  },
];