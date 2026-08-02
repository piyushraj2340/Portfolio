import type { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    company: "Ariel Software Solutions Pvt. Ltd.",
    role: "Junior Software Engineer",
    startDate: "2023-06",
    endDate: "2024-03",
    summary:
      "Engineered full-stack features using ASP.NET Core and React for enterprise clients. Improved application architecture and database efficiency.",
    achievements: [
      "Designed and implemented RESTful APIs using ASP.NET Core.",
      "Developed interactive UI components with React.js and Tailwind CSS.",
      "Optimized SQL Server queries, significantly reducing data retrieval times.",
      "Integrated third-party APIs and managed cloud deployments via Azure.",
    ],
    technologies: ["C#", "ASP.NET Core", "React", "SQL Server", "Azure"],
  },
  {
    company: "Protolabz eServices",
    role: "Assistant Web Developer",
    startDate: "2022-05",
    endDate: "2023-05",
    summary:
      "Collaborated in an agile team to build and maintain web applications, focusing on robust backends and seamless user experiences.",
    achievements: [
      "Built dynamic, responsive web interfaces using modern JavaScript frameworks.",
      "Assisted in backend development using C# and .NET MVC.",
      "Implemented database schemas and stored procedures in SQL Server.",
      "Participated in code reviews and agile sprint planning sessions.",
    ],
    technologies: ["C#", ".NET MVC", "JavaScript", "SQL Server", "HTML/CSS"],
  },
];