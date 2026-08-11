import {
  FaHtml5,
  FaGithub,
  FaStripe,
  FaSass,
  FaBootstrap,
  FaCss3Alt,
  FaWindows,
} from "react-icons/fa6";
import { FaDatabase, FaCode, FaCloud, FaKey, FaChartBar } from "react-icons/fa";
import { TbBrandCSharp, TbApi, TbHexagon } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";
import {
  SiDotnet,
  SiPostgresql,
  SiRedux,
  SiReactquery,
  SiVercel,
  SiPostman,
  SiCloudinary,
  SiMongoose,
  SiExpress,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiDocker,
  SiGit,
  SiGithub,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiStripe,
  SiMongodb,
  SiRedis,
} from "react-icons/si";
import {
  HiOutlineFire,
  HiOutlineServerStack,
  HiOutlineSignal,
  HiOutlinePuzzlePiece,
} from "react-icons/hi2";
import { LuStore } from "react-icons/lu";
import { MdAccountTree, MdApi, MdArchitecture } from "react-icons/md";
import { IconType } from "react-icons";

function normalizeTechName(name: string): string {
  return name
    .toLowerCase()
    .replace(/\.js\b/g, "js")
    .replace(/[^a-z0-9#+]+/g, "");
}

const techIconMap: Record<string, IconType> = {
  // Languages
  "c#": TbBrandCSharp,
  csharp: TbBrandCSharp,
  javascript: SiJavascript,
  typescript: SiTypescript,
  javascripttypescript: SiJavascript,
  htmlcss: FaHtml5,
  html5css3: FaHtml5,
  html: SiHtml5,
  html5: SiHtml5,
  css: SiCss,
  css3: FaCss3Alt,

  // Database & Cloud
  sql: FaDatabase,
  mssqlserver: DiMsqlServer,
  sqlserver: DiMsqlServer,
  azuresql: FaDatabase,
  azureservices: FaCloud,
  azure: FaCloud,
  redis: SiRedis,
  mongodb: SiMongodb,
  mongoose: SiMongoose,
  cloudinary: SiCloudinary,
  postgresql: SiPostgresql,
  postgres: SiPostgresql,

  // Backend
  aspnetcore: SiDotnet,
  aspnetcoremvcwebapi: SiDotnet,
  netcore: SiDotnet,
  net: SiDotnet,
  netmvc: SiDotnet,
  entityframeworkcore: SiDotnet,
  restapis: TbApi,
  restapi: TbApi,
  restfulapis: TbApi,
  restfulapi: TbApi,
  hangfire: HiOutlineFire,
  nodejs: SiNodedotjs,
  expressjs: SiExpress,
  express: SiExpress,
  jwtauthentication: FaKey,
  jwt: FaKey,
  signalr: HiOutlineSignal,

  // Frontend
  reactjs: SiReact,
  react: SiReact,
  nextjs: SiNextdotjs,
  tailwindcss: SiTailwindcss,
  redux: SiRedux,
  reduxtoolkit: SiRedux,
  zustand: LuStore,
  tanstackquery: SiReactquery,
  reactquery: SiReactquery,
  bootstrap: FaBootstrap,
  sass: FaSass,
  antdesign: FaCode,
  chartjs: FaChartBar,

  // DevOps & Tools
  git: SiGit,
  gitgithub: SiGithub,
  github: SiGithub,
  docker: SiDocker,
  cicd: FaGithub,
  postman: SiPostman,
  stripe: SiStripe,
  chromeextensionapi: TbApi,
  manifestv3: TbApi,
  dommanipulation: MdAccountTree,
  localstorage: FaDatabase,
  vercel: SiVercel,
  iis: FaWindows,

  // Architecture
  cleanarchitecture: MdArchitecture,
  microservices: HiOutlineServerStack,
  solidprinciples: TbHexagon,
  solid: TbHexagon,
  designpatterns: HiOutlinePuzzlePiece,
};

export function getTechIcon(techName: string): IconType {
  return techIconMap[normalizeTechName(techName)] || FaCode;
}
