type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl space-y-4">
      <p className="glass inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 font-mono text-xs tracking-widest text-muted-foreground uppercase">
        <span aria-hidden="true" className="mr-2 inline-block size-1.5 rounded-full bg-accent shadow-[0_0_12px_2px_var(--accent)]"></span>
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      <p className="text-base text-text-secondary md:text-lg">{description}</p>
    </div>
  );
}