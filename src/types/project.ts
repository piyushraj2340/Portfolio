export type Project = {
  slug: string;
  title: string;
  description: string;
  problem: string;
  impact: string;
  technologies: string[];
  repositoryUrl: string;
  liveUrl?: string;
  imageUrl?: string;
  featured?: boolean;
  category?: string;
  status?: string;
};