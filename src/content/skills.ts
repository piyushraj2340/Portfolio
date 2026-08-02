import type { SkillCategory } from "@/types/skill";

// 6 Categories perfectly fit a 2 or 3 column layout without orphaned items
export const skills: SkillCategory[] = [
  {
    category: "Languages",
    icon: "Code",
    items: [
      { name: "C#", proficiency: 95 },
      { name: "JavaScript/TypeScript", proficiency: 90 },
      { name: "SQL", proficiency: 85 },
      { name: "HTML/CSS", proficiency: 95 },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    items: [
      { name: "ASP.NET Core (MVC/Web API)", proficiency: 95 },
      { name: "Entity Framework Core", proficiency: 90 },
      { name: "REST APIs", proficiency: 95 },
      { name: "Hangfire", proficiency: 80 },
    ],
  },
  {
    category: "Frontend",
    icon: "Monitor",
    items: [
      { name: "React.js", proficiency: 90 },
      { name: "Next.js", proficiency: 85 },
      { name: "Tailwind CSS", proficiency: 95 },
      { name: "Redux", proficiency: 80 },
    ],
  },
  {
    category: "Database & Cloud",
    icon: "Database",
    items: [
      { name: "MS SQL Server", proficiency: 90 },
      { name: "Azure Services", proficiency: 85 },
      { name: "Redis", proficiency: 75 },
      { name: "Azure SQL", proficiency: 85 },
    ],
  },
  {
    category: "Architecture",
    icon: "Layers",
    items: [
      { name: "Clean Architecture", proficiency: 90 },
      { name: "Microservices", proficiency: 80 },
      { name: "SOLID Principles", proficiency: 95 },
      { name: "Design Patterns", proficiency: 90 },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: "Wrench",
    items: [
      { name: "Git & GitHub", proficiency: 90 },
      { name: "Docker", proficiency: 75 },
      { name: "CI/CD", proficiency: 80 },
      { name: "Postman", proficiency: 95 },
    ],
  },
];