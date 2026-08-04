import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "taskflow",
    title: "TaskFlow: Project & Workflow Automation",
    description: "SaaS platform automating project management and workflow scheduling using Clean Architecture.",
    technologies: ["ASP.NET Core", "React", "Clean Architecture", "Hangfire", "SQL Server", "Tailwind CSS"],
    repositoryUrl: "https://github.com/",
    liveUrl: "https://taskflow.example.com",
    problem: "Teams struggled with inefficient task management and a lack of real-time visibility into workflow progress.",
    impact: "• Improved project completion rates by 30% for early adopters.\n• Reduced manual task management overhead by 50% through automated background jobs.\n• Enhanced cross-functional collaboration via real-time status synchronization.",
    featured: true,
  },
  {
    slug: "plant-seller",
    title: "Plant Seller",
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
      "REST API"
    ],
    repositoryUrl: "https://github.com/piyushraj2340/Plant-Selling-Website",
    liveUrl: "https://plantseller.vercel.app/",
    featured: true,
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
    featured: false,
  }, 
  {
    slug: "file-sharing-app-backend",
    title: "File Sharing App Backend",
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
      "REST API",
      "Vercel",
      "IIS"
    ],
    repositoryUrl: "https://github.com/piyushraj2340/File-Sharing-App-Backend",
    featured: false,
  }
];