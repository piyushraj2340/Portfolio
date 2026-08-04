export type Profile = {
  name: string;
  imgUrl: string;
  role: string;
  roleDescription: string;
  summary: string;
  bio: string[];
  philosophy: string;
  highlights: string[];
  availability: string | null;
  yearsOfExperience: number;
  location?: string;
  greeting?: string;
  stats?: Array<{ label: string; value: string }>;
  careerSummary?: string;
  values?: Array<{ title: string; description: string }>;
};