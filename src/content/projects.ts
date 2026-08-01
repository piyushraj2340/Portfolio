import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "employee-management-system",
    title: "Employee Management System",
    description:
      "A comprehensive employee management platform with authentication, role-based access control, department management, and performance tracking. Features a secure REST API backend with a modern React frontend.",
    problem: "Manual HR processes caused data inconsistencies and slow onboarding workflows.",
    impact: "Reduced onboarding time by 60% and eliminated manual spreadsheet tracking for 200+ employees.",
    technologies: ["Java", "Spring Boot", "React", "MySQL", "JWT", "Docker"],
    repositoryUrl: "https://github.com/username/employee-management",
    liveUrl: "https://employee-mgmt.example.dev",
    featured: true,
  },
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A scalable e-commerce platform built with microservices architecture. Includes product catalog, cart management, order processing, payment integration, and real-time inventory updates.",
    problem: "Existing monolithic e-commerce system couldn't handle traffic spikes during promotions.",
    impact: "Handled 5x traffic surge during launch with zero downtime. Processed 1000+ orders in first week.",
    technologies: ["Microservices", "Spring Cloud", "Kafka", "Redis", "AWS", "Docker"],
    repositoryUrl: "https://github.com/username/ecommerce-platform",
    featured: true,
  },
  {
    slug: "task-management-app",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop boards, team collaboration features, and detailed analytics dashboards.",
    problem: "Remote teams lacked a lightweight, real-time task tracking tool that didn't require enterprise licensing.",
    impact: "Used by 3 internal teams, improving sprint completion rate by 25%.",
    technologies: ["React", "Node.js", "MongoDB", "Docker", "WebSocket"],
    repositoryUrl: "https://github.com/username/task-manager",
    liveUrl: "https://tasks.example.dev",
    featured: true,
  },
];