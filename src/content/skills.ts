import type { SkillCategory } from "@/types/skill";

export const skills: SkillCategory[] = [
  {
    category: "Backend",
    icon: "Server",
    items: [
      { name: "Java", proficiency: 90 },
      { name: "Spring Boot", proficiency: 85 },
      { name: "Hibernate", proficiency: 80 },
      { name: "Spring Security", proficiency: 75 },
      { name: "REST API", proficiency: 90 },
      { name: "Microservices", proficiency: 80 },
    ],
  },
  {
    category: "Frontend",
    icon: "Monitor",
    items: [
      { name: "React", proficiency: 85 },
      { name: "Angular", proficiency: 70 },
      { name: "JavaScript", proficiency: 90 },
      { name: "TypeScript", proficiency: 80 },
      { name: "HTML/CSS", proficiency: 90 },
      { name: "Tailwind", proficiency: 85 },
    ],
  },
  {
    category: "Database",
    icon: "Database",
    items: [
      { name: "MySQL", proficiency: 85 },
      { name: "PostgreSQL", proficiency: 80 },
      { name: "MongoDB", proficiency: 75 },
      { name: "Redis", proficiency: 70 },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "Cloud",
    items: [
      { name: "AWS", proficiency: 80 },
      { name: "Docker", proficiency: 85 },
      { name: "Kubernetes", proficiency: 70 },
      { name: "Jenkins", proficiency: 75 },
      { name: "GitHub Actions", proficiency: 80 },
    ],
  },
  {
    category: "Tools",
    icon: "Wrench",
    items: [
      { name: "Git", proficiency: 90 },
      { name: "Postman", proficiency: 85 },
      { name: "Swagger", proficiency: 80 },
      { name: "IntelliJ IDEA", proficiency: 85 },
      { name: "VS Code", proficiency: 90 },
    ],
  },
];