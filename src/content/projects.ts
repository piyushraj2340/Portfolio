import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "ecommerce-modernization",
    title: "E-commerce Checkout Modernization",
    description:
      "Redesigned the checkout flow to reduce friction and improve payment success rates.",
    problem: "Legacy checkout flow had high drop-off and fragile state management.",
    impact: "Improved conversion rate by 18% and reduced checkout-related support tickets by 24%.",
    technologies: ["Next.js", "TypeScript", "React", "Stripe"],
    repositoryUrl: "https://github.com/username/ecommerce-checkout",
    liveUrl: "https://example.dev/projects/ecommerce-checkout",
    featured: true,
  },
  {
    slug: "analytics-dashboard",
    title: "Product Analytics Dashboard",
    description:
      "Built a performant analytics dashboard for cross-functional product teams.",
    problem: "Stakeholders lacked real-time visibility into activation and retention metrics.",
    impact: "Reduced reporting turnaround time from days to minutes.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    repositoryUrl: "https://github.com/username/product-analytics-dashboard",
    featured: true,
  },
  {
    slug: "developer-platform",
    title: "Internal Developer Platform",
    description:
      "Created a documentation-first platform that standardized engineering workflows.",
    problem: "Inconsistent team practices caused onboarding delays and quality drift.",
    impact: "Reduced onboarding ramp-up time by 30% across engineering squads.",
    technologies: ["Next.js", "MDX", "Node.js"],
    repositoryUrl: "https://github.com/username/developer-platform",
  },
];