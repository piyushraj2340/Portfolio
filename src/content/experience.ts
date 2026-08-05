import type { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    company: "Ariel Software Solutions Pvt. Ltd.",
    role: "Junior Software Engineer",
    startDate: "2023-06",
    endDate: "2024-03",
    duration: "10 mos",
    location: "India",
    summary:
      "Engineered full-stack features using ASP.NET Core and React for enterprise clients, focusing on architectural scalability and database efficiency.",
    responsibilities: [
      "Engineered full-stack features using ASP.NET Core and React for enterprise clients.",
      "Optimized SQL Server queries for critical endpoints."
    ],
    achievements: [
      "Designed and implemented RESTful APIs powering core enterprise services.",
      "Reduced data retrieval latency by up to 30%.",
      "Streamlined cloud deployments via Azure, significantly reducing deployment time.",
    ],
    technologies: ["C#", "ASP.NET Core", "React", "SQL Server", "Azure"],
  },
  {
    company: "Protolabz eServices",
    role: "Assistant Web Developer",
    startDate: "2022-05",
    endDate: "2023-05",
    duration: "1 yr",
    location: "India",
    summary:
      "Collaborated in an agile team to build and maintain high-performance web applications, delivering seamless user experiences.",
    responsibilities: [
      "Built dynamic, responsive web interfaces using modern JavaScript frameworks.",
      "Assisted in backend development using C# and .NET MVC."
    ],
    achievements: [
      "Improved overall application stability by refactoring legacy code.",
      "Implemented optimized database schemas and stored procedures in SQL Server.",
      "Accelerated feature delivery by actively participating in agile sprint planning.",
    ],
    technologies: ["C#", ".NET MVC", "JavaScript", "SQL Server", "HTML/CSS"],
  },
];