import type { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    company: "Ariel Software Solutions Pvt. Ltd.",
    role: "Junior Software Engineer",
    startDate: "2023-06",
    endDate: "2024-03",
    summary:
      "Engineered full-stack features using ASP.NET Core and React for enterprise clients, focusing on architectural scalability and database efficiency.",
    achievements: [
      "Designed and implemented RESTful APIs using ASP.NET Core, powering core enterprise services.",
      "Developed interactive UI components with React.js and Tailwind CSS, increasing user engagement.",
      "Optimized SQL Server queries, reducing data retrieval latency by up to 30% for critical endpoints.",
      "Integrated third-party APIs and streamlined cloud deployments via Azure, reducing deployment time.",
    ],
    technologies: ["C#", "ASP.NET Core", "React", "SQL Server", "Azure"],
  },
  {
    company: "Protolabz eServices",
    role: "Assistant Web Developer",
    startDate: "2022-05",
    endDate: "2023-05",
    summary:
      "Collaborated in an agile team to build and maintain high-performance web applications, delivering seamless user experiences.",
    achievements: [
      "Built dynamic, responsive web interfaces using modern JavaScript frameworks.",
      "Assisted in backend development using C# and .NET MVC, improving overall application stability.",
      "Implemented optimized database schemas and stored procedures in SQL Server.",
      "Participated in rigorous code reviews and agile sprint planning, accelerating feature delivery.",
    ],
    technologies: ["C#", ".NET MVC", "JavaScript", "SQL Server", "HTML/CSS"],
  },
];