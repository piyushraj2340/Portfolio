type SectionHeadingProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ id, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl space-y-4">
      <p className="text-sm font-semibold uppercase tracking-wider text-text-muted">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
      >
        {title}
      </h2>
      <p className="text-base text-text-secondary md:text-lg">{description}</p>
    </div>
  );
}
