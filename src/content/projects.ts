import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "taskflow",
    title: "TaskFlow: Project & Workflow Automation",
    description: "SaaS platform automating project management and workflow scheduling using Clean Architecture.",
    technologies: ["ASP.NET Core", "React", "Clean Architecture", "Hangfire", "SQL Server", "Tailwind CSS"],
    repositoryUrl: "https://github.com/piyushraj2340/TaskFlow",
    liveUrl: "https://webapp-taskflow.vercel.app/",
    imageUrl: "https://res.cloudinary.com/dcd6y2awx/image/upload/v1786394575/Portfolio%20Website/Projects/TaskFlow/0ca2e2d6-e462-4ebf-9ddb-42a871b5502c.png",
    problem: "Teams struggled with inefficient task management and a lack of real-time visibility into workflow progress.",
    impact: "• Improved project completion rates by 30% for early adopters.\n• Reduced manual task management overhead by 50% through automated background jobs.\n• Enhanced cross-functional collaboration via real-time status synchronization.",
    featured: true,
    category: "SaaS Platform",
    status: "Production",
  },
  {
    slug: "plant-seller",
    title: "Plant Seller: [E-commerce Platform]",
    description:
      "A full-stack multi-vendor e-commerce platform connecting customers, nurseries, and administrators in a unified marketplace.",
    problem:
      "Traditional nurseries lacked centralized platforms for inventory and order management, while customers struggled to compare products across multiple vendors.",
    impact:
      "• Engineered a scalable MERN architecture supporting robust role-based access control.\n• Integrated secure JWT authentication and Stripe payment processing.\n• Deployed custom dashboards for inventory, analytics, and storefront management, streamlining vendor operations.",
    technologies: [
      "React.js",
      "Redux Toolkit",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Stripe",
      "Cloudinary",
      "REST APIs"
    ],
    repositoryUrl: "https://github.com/piyushraj2340/Plant-Selling-Website",
    liveUrl: "https://plantseller.vercel.app/",
    imageUrl: "https://res.cloudinary.com/dcd6y2awx/image/upload/v1786395281/Portfolio%20Website/Projects/PlantSeller/7c1c2581-b32f-471f-980a-872b1e359070.png",
    featured: true,
    category: "E-commerce",
    status: "Production",
  },
  {
    slug: "whatsapp-privacy-extension",
    title: "WhatsApp Privacy Extension",
    description:
      "A Chrome extension enhancing privacy on WhatsApp Web by selectively blurring sensitive information like chats and profile pictures.",
    problem:
      "Using WhatsApp Web in public workspaces exposed private conversations and contact details to shoulder-surfing.",
    impact:
      "• Developed a lightweight Chrome Extension using Manifest V3.\n• Implemented real-time DOM manipulation to blur specific UI elements.\n• Improved user privacy in shared environments without degrading the native application experience.",
    technologies: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "Chrome Extension API",
      "Manifest V3",
      "DOM Manipulation"
    ],
    repositoryUrl: "https://github.com/piyushraj2340/Whatsapp-Privacy-Extension",
    imageUrl: "https://res.cloudinary.com/dcd6y2awx/image/upload/v1786395790/Portfolio%20Website/Projects/WhatsApp%20Privacy%20Extension/whatsappPrivacy_ts3qgj.png",
    featured: false,
    category: "Chrome Extension",
    status: "Published",
  }, 
  {
    slug: "file-sharing-app-backend",
    title: "Local File Sharing Node App",
    description:
      "A RESTful backend service for a secure file-sharing platform, pre-configured for diverse hosting environments.",
    problem:
      "File-sharing applications require robust infrastructure to handle large multipart uploads and metadata tracking seamlessly.",
    impact:
      "• Architected a Node.js/Express REST API supporting multipart file uploads and MongoDB metadata storage.\n• Designed the system to be environment-agnostic, supporting both Vercel Serverless and Windows IIS deployments.\n• Ensured scalable and maintainable file handling with robust error management.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "REST APIs",
      "Vercel",
      "IIS"
    ],
    repositoryUrl: "https://github.com/piyushraj2340/LocalFile-Sharing-App",
    imageUrl: "https://res.cloudinary.com/dcd6y2awx/image/upload/v1786396734/Portfolio%20Website/Projects/Local%20File%20Sharing%20App/75298b7a-d30c-467d-8263-b9f711c39b9c.png",
    featured: false,
    category: "Backend API",
    status: "Production",
  }
];