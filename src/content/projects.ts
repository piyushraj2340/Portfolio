import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "taskflow",
    title: "TaskFlow: Project & Workflow Automation",
    description: "A comprehensive SaaS platform built to automate project management and workflow scheduling. Utilizes Clean Architecture to maintain a decoupled, scalable codebase. Features include automated background jobs, real-time status updates, and a responsive modern UI.",
    technologies: ["ASP.NET Core", "React", "Clean Architecture", "Hangfire", "SQL Server", "Tailwind CSS"],
    repositoryUrl: "https://github.com/",
    liveUrl: "https://taskflow.example.com",
    problem: "Many teams struggle with managing complex projects and workflows, leading to inefficiencies and missed deadlines. Existing tools often lack automation and real-time updates.",
    impact: "TaskFlow has improved project completion rates by 30% for early adopters, reduced manual task management by 50%, and enhanced team collaboration through real-time updates.",
  },
  {
    slug: "plant-seller",
    title: "Plant Seller",
    description:
      "A full-stack multi-vendor e-commerce platform that connects customers, nurseries, and administrators in a unified marketplace. The platform enables vendors to manage storefronts, inventory, and orders while providing customers with a seamless shopping experience backed by secure authentication, online payments, and real-time order management.",

    problem:
      "Traditional plant-selling businesses often rely on single-vendor stores or manual order management, making it difficult for multiple nurseries to sell through a centralized platform. Customers have limited options to compare products from different vendors, while sellers lack efficient tools for inventory, order processing, analytics, and storefront management. The project addresses these challenges by building a scalable multi-vendor marketplace with role-based dashboards for customers, vendors, and administrators.",

    impact:
      "Built a production-ready MERN application with a scalable multi-vendor architecture supporting role-based access for customers, vendors, and administrators. Implemented secure JWT authentication, Stripe payment integration, Cloudinary image management, vendor storefront customization, order tracking, inventory management, analytics dashboards, and administrative controls, providing a complete end-to-end e-commerce solution.",

    technologies: [
      "React.js",
      "Redux Toolkit",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT Authentication",
      "Stripe",
      "Cloudinary",
      "Bootstrap",
      "Sass",
      "Ant Design",
      "Chart.js",
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
      "A Chrome extension that enhances privacy while using WhatsApp Web by allowing users to selectively blur sensitive information such as chats, profile pictures, contact names, and chat lists. Designed for users working in public spaces, it provides quick privacy controls without affecting the overall browsing experience.",

    problem:
      "WhatsApp Web exposes private conversations and personal information to anyone nearby, making it difficult to use in offices, coworking spaces, classrooms, or public environments. Users often need a simple way to hide sensitive content without logging out or closing the application. This extension addresses that need by providing configurable privacy controls directly within the browser.",

    impact:
      "Developed a lightweight Chrome extension that allows users to instantly protect sensitive information on WhatsApp Web through selective blur effects and one-click privacy toggles. The extension improves user privacy in shared environments while offering customizable controls for different UI elements, delivering a seamless and non-intrusive user experience.",

    technologies: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "Chrome Extension API",
      "Manifest V3",
      "DOM Manipulation",
      "Local Storage"
    ],

    repositoryUrl:
      "https://github.com/piyushraj2340/Whatsapp-Privacy-Extension",

    featured: false,
  }
];