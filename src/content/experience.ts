import type { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    company: "Ariel Software Solutions",
    role: "Junior Software Engineer",
    startDate: "2025-06",
    endDate: "2026-03",
    duration: "10 months",
    location: "Mohali, Punjab",
    summary:
      "Worked across the stack on enterprise ERP and B2B marketplace applications built with ASP.NET Core, React, SQL Server, and Azure. Most of my time went into multi-tenant systems, integrations, authentication, and application architecture.",
    responsibilities: [
      "Built job ticketing, asset tracking, and invoicing workflows for a multi-tenant field-service ERP, along with compliance tracking to keep client operations audit-ready.",
      "Strengthened access control on a B2B vendor marketplace by adding JWT-based authentication and refresh tokens, plus activity logging and custom reporting for auditing.",
      "Took part in code reviews, helped resolve production issues, and worked closely with cross-functional teams to ship features.",
      "Mentored interns through debugging sessions and general technical questions.",
    ],
    achievements: [
      "Cut tenant onboarding time by 80% by implementing runtime database switching and automating provisioning with Entity Framework Core migrations.",
      "Reduced manual accounting effort by 30% by connecting the ERP platform to QuickBooks Online through webhooks and Hangfire for real-time sync.",
      "Rebuilt the authentication flow using JWT access and refresh tokens, so sessions could renew securely without forcing users to log in again.",
      "Moved the React frontend to a feature-based architecture, separating UI, business logic, and data-fetching into reusable components and hooks.",
    ],
    technologies: [".NET", "C#", "ASP.NET Core", "React", "SQL Server", "PostgreSQL", "Azure", "Entity Framework Core", "Hangfire", "SignalR", "Docker", "Redux Toolkit", "Zustand", "TanStack Query"],
  },
  {
    company: "Protolabz eServices",
    role: "Assistant Web Developer",
    startDate: "2024-05",
    endDate: "2025-05",
    duration: "1 year 1 month",
    location: "Phagwara, Punjab",
    summary:
      "Built field-service applications for the oil and gas industry, helping field supervisors monitor compressor operations, track downtime, and respond faster to equipment issues.",
    responsibilities: [
      "Extended the compressor monitoring system with visit tracking and subscription-based scheduled reports, giving field teams recurring visibility into daily readings and site activity.",
      "Built backend features following SOLID principles, Clean Architecture, and the Repository pattern to keep things maintainable.",
      "Worked closely with the dev team to troubleshoot issues and ship reliable production features.",
    ],
    achievements: [
      "Built real-time downtime alerting using Hangfire and SignalR, giving teams faster visibility into equipment failures.",
      "Lifted auction bidding throughput by 20% by replacing SQL Server Service Broker processing with an in-memory queue, cutting database deadlocks under high concurrency.",
      "Improved frontend performance by 25% through Lighthouse-driven work, including route-level lazy loading, bundle optimization, and fewer unnecessary React re-renders.",
    ],
    technologies: [".NET", "C#", "SQL Server", "TypeScript", "React", "SignalR", "Hangfire", "RESTful APIs"],
  },
];

/*
formatDate expects "YYYY-MM" or the literal "Present".
Example: formatDate(experiences[0].startDate) -> "Jun 2025"

If Ariel is your current role, set endDate to "Present" instead of "2026-03".
*/