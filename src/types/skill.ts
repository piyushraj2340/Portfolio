export type SkillItem = {
  name: string;
  proficiency: number; // 0-100
};

export type SkillCategory = {
  category: string;
  icon: string; // Lucide icon name
  items: SkillItem[];
};