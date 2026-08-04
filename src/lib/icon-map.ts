import {
  FaJs,
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDocker,
  FaStripe,
  FaSass,
  FaBootstrap,
} from "react-icons/fa6";
import {
  FaDatabase,
  FaCode,
  FaCloud,
  FaKey,
  FaChartBar,
} from "react-icons/fa";
import {
  TbBrandTypescript,
  TbBrandTailwind,
  TbBrandNextjs,
  TbBrandCSharp,
  TbBrandRedux,
  TbApi,
} from "react-icons/tb";
import { DiRedis, DiMongodb } from "react-icons/di";
import { IconType } from "react-icons";

const techIconMap: Record<string, IconType> = {
  // Languages
  "C#": TbBrandCSharp,
  "JavaScript/TypeScript": FaJs,
  "JavaScript": FaJs,
  "TypeScript": TbBrandTypescript,
  "HTML/CSS": FaHtml5,
  "HTML5/CSS3": FaHtml5,
  "HTML5": FaHtml5,
  "CSS3": FaHtml5,
  
  // Database & Cloud
  "SQL": FaDatabase,
  "MS SQL Server": FaDatabase,
  "SQL Server": FaDatabase,
  "Azure SQL": FaDatabase,
  "Azure Services": FaCloud,
  "Azure": FaCloud,
  "Redis": DiRedis,
  "MongoDB": DiMongodb,
  "Mongoose": DiMongodb,
  "Cloudinary": FaCloud,
  
  // Backend
  "ASP.NET Core": TbBrandCSharp,
  "ASP.NET Core (MVC/Web API)": TbBrandCSharp,
  ".NET MVC": TbBrandCSharp,
  "Entity Framework Core": TbBrandCSharp,
  "REST APIs": TbApi,
  "Hangfire": FaCode,
  "Node.js": FaNodeJs,
  "Express.js": FaNodeJs,
  "JWT Authentication": FaKey,
  
  // Frontend
  "React.js": FaReact,
  "React": FaReact,
  "Next.js": TbBrandNextjs,
  "Tailwind CSS": TbBrandTailwind,
  "Redux": TbBrandRedux,
  "Bootstrap": FaBootstrap,
  "Sass": FaSass,
  "Ant Design": FaCode,
  "Chart.js": FaChartBar,
  
  // DevOps & Tools
  "Git & GitHub": FaGithub,
  "Docker": FaDocker,
  "CI/CD": FaGithub,
  "Postman": TbApi,
  "Stripe": FaStripe,
  "Chrome Extension API": TbApi,
  "Manifest V3": TbApi,
  "DOM Manipulation": FaCode,
  "Local Storage": FaDatabase,
  
  // Architecture
  "Clean Architecture": FaCode,
  "Microservices": FaCode,
  "SOLID Principles": FaCode,
  "Design Patterns": FaCode,
};

export function getTechIcon(techName: string): IconType {
  return techIconMap[techName] || FaCode;
}
