type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-bold md:text-5xl">{title}</h2>
      <p className="text-base text-text-secondary md:text-lg">{description}</p>
    </div>
  );
}