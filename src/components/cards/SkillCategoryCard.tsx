import type { SkillCategory } from "@/types/skill";

type SkillCategoryCardProps = {
  skillCategory: SkillCategory;
};

export function SkillCategoryCard({ skillCategory }: SkillCategoryCardProps) {
  return (
    <article className="surface-card p-6">
      <h3 className="text-lg font-semibold text-foreground">{skillCategory.category}</h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {skillCategory.items.map((item) => (
          <li key={item} className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}