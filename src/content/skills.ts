import type { SkillCategory } from "@/types/skill";

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "REST API Design"],
  },
  {
    category: "Data & Cloud",
    items: ["PostgreSQL", "Redis", "AWS"],
  },
  {
    category: "Engineering",
    items: ["Testing", "CI/CD", "System Design", "Observability"],
  },
];