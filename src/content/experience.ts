import type { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    company: "TechCorp Solutions",
    role: "Software Engineer",
    startDate: "2023-06",
    endDate: "Present",
    summary:
      "Building enterprise-grade microservices and cloud-native applications serving thousands of concurrent users.",
    achievements: [
      "Designed and implemented RESTful APIs handling 10K+ daily requests with Spring Boot",
      "Migrated monolithic application to microservices architecture, improving deployment frequency by 3x",
      "Implemented CI/CD pipelines with Jenkins and GitHub Actions reducing release cycle from days to hours",
      "Built real-time notification system using WebSockets and Redis pub/sub",
    ],
    technologies: ["Java", "Spring Boot", "AWS", "Docker", "Kubernetes", "PostgreSQL", "Redis"],
  },
  {
    company: "InnovateTech",
    role: "Junior Software Engineer",
    startDate: "2022-01",
    endDate: "2023-05",
    summary:
      "Developed full-stack web applications with focus on backend reliability and frontend performance.",
    achievements: [
      "Built employee management module with role-based access control using Spring Security",
      "Developed responsive dashboards with React and TypeScript used by 500+ internal users",
      "Optimized database queries reducing average response time by 40%",
    ],
    technologies: ["Java", "Spring Boot", "React", "MySQL", "Docker"],
  },
];