import type { Profile } from "@/types/profile";

export const profile: Profile = {
  name: "Piyush Raj",
  imgUrl: "/images/piyush_raj_dark_bg.png",
  role: "Software Engineer",
  roleDescription: "Full Stack Developer",
  summary:
    "Software Engineer with 2 years of experience specializing in C#, ASP.NET Core, React, and Azure. Proven track record of building robust, scalable web applications and optimizing backend infrastructure.",
  bio: [
    "What hooked me on software engineering wasn't the code itself—it was the thrill of building something out of nothing. Every project is a new puzzle where I balance functionality, performance, and simplicity.",
    "Early on, while building a complex task management platform, I learned the hard way that rushing features leads to brittle systems. Refactoring it taught me to prioritize data models and architecture upfront."
  ],
  philosophy:
    "I take a highly pragmatic approach to engineering. I advocate for well-structured monoliths over microservices for small teams—introducing complexity only when there's a tangible business need to scale. Ultimately, I solve problems first, and write code second.",
  highlights: [
    "Proficient in full-stack development with .NET Core and React",
    "Strong understanding of Clean Architecture and design patterns",
    "Experienced in deploying and managing Azure cloud services",
    "Passionate problem solver with 700+ algorithms solved",
  ],
  availability: "Available for Opportunities",
  yearsOfExperience: 2,
  location: "India",
  greeting: "Hi, I'm",
  stats: [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Completed", value: "10+" },
    { label: "Algorithms Solved", value: "700+" },
    { label: "Technologies", value: "15+" },
  ],
  careerSummary: "Two years across product and platform teams, building scalable APIs and intuitive web interfaces. Comfortable being the person who takes an ambiguous ticket, shapes it, and lands it in production with tests and best practices applied.",
  values: [
    { title: "Quality", description: "Writing maintainable, scalable, and well-tested code." },
    { title: "Velocity", description: "Shipping fast without compromising on architecture." },
    { title: "User-Centric", description: "Building with the end-user in mind." }
  ]
};