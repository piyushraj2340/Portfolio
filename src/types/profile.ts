export type Profile = {
  name: string;
  role: string;
  summary: string;
  bio: string;
  philosophy: string;
  highlights: string[];
  availability: string | null;
  yearsOfExperience: number;
  location?: string;
  greeting?: string;
  stats?: Array<{ label: string; value: string }>;
};