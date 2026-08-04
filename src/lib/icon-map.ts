import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiDotnet,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiRedis,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
} from "react-icons/si";
import { FaDatabase, FaCode, FaCloud } from "react-icons/fa";
import { IconType } from "react-icons";

const techIconMap: Record<string, IconType> = {
  "C#": SiDotnet,
  "JavaScript/TypeScript": SiJavascript,
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript,
  "HTML/CSS": SiHtml5,
  "HTML5/CSS3": SiHtml5,
  "SQL": FaDatabase,
  "MS SQL Server": FaDatabase,
  "SQL Server": FaDatabase,
  "Azure SQL": FaDatabase,
  "ASP.NET Core": SiDotnet,
  "ASP.NET Core (MVC/Web API)": SiDotnet,
  ".NET MVC": SiDotnet,
  "Entity Framework Core": SiDotnet, // using dotnet icon as a proxy for EF
  "REST APIs": FaCode,
  "Hangfire": FaCode,
  "React.js": SiReact,
  "React": SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Redux": SiRedux,
  "Azure Services": FaCloud,
  "Azure": FaCloud,
  "Redis": SiRedis,
  "Clean Architecture": FaCode, // Abstract concepts get generic code icon
  "Microservices": FaCode,
  "SOLID Principles": FaCode,
  "Design Patterns": FaCode,
  "Git & GitHub": SiGit,
  "Docker": SiDocker,
  "CI/CD": SiGithub, // Github Actions proxy
  "Postman": SiPostman,
};

export function getTechIcon(techName: string): IconType {
  return techIconMap[techName] || FaCode;
}
