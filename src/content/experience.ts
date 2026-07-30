import type { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    company: "Acme Product Labs",
    role: "Software Engineer",
    startDate: "2023-01",
    endDate: "Present",
    summary:
      "Delivered product features across onboarding, billing, and analytics while improving system reliability.",
    achievements: [
      "Designed and shipped high-impact product workflows used by thousands of users",
      "Reduced production incidents through stronger observability and release safeguards",
      "Collaborated with product and design to scope and deliver iterative value",
    ],
    technologies: ["TypeScript", "React", "Next.js", "PostgreSQL"],
  },
  {
    company: "Nova Digital",
    role: "Frontend Engineer",
    startDate: "2021-06",
    endDate: "2022-12",
    summary:
      "Built and maintained enterprise dashboards with a strong focus on accessibility and performance.",
    achievements: [
      "Improved dashboard load performance for core views",
      "Established component patterns used by multiple product teams",
    ],
    technologies: ["React", "TypeScript", "Sass"],
  },
];