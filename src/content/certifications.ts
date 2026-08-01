import type { Certification } from "@/types/certification";

export const certifications: Certification[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024-03",
    credentialUrl: "https://aws.amazon.com/certification/",
    icon: "Cloud",
  },
  {
    name: "Docker Certified Associate",
    issuer: "Docker, Inc.",
    date: "2024-01",
    credentialUrl: "https://www.docker.com/certification/",
    icon: "Container",
  },
  {
    name: "Spring Professional Certification",
    issuer: "VMware / Broadcom",
    date: "2023-11",
    credentialUrl: "https://spring.io/certification",
    icon: "Leaf",
  },
  {
    name: "Oracle Certified Professional: Java SE",
    issuer: "Oracle Corporation",
    date: "2023-08",
    credentialUrl: "https://education.oracle.com/java-se-certification",
    icon: "Code2",
  },
  {
    name: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    date: "2023-06",
    credentialUrl: "https://learn.microsoft.com/en-us/certifications/",
    icon: "Cloud",
  },
];
