import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type HeroHighlightsProps = {
  /** Label displayed above the highlights list. */
  label?: string;
  /** List of highlight strings. */
  items: string[];
  /** Additional class names for the container. */
  className?: string;
};

/**
 * A card displaying key engineering highlights / focus areas.
 * Used in the hero right column to reinforce credibility at first glance.
 */
export function HeroHighlights({
  label = "Engineering focus",
  items,
  className,
}: HeroHighlightsProps) {
  if (items.length === 0) return null;

  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card p-6 shadow-sm",
        className,
      )}
    >
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        <Sparkles className="size-3.5" aria-hidden="true" />
        {label}
      </p>

      <ul className="mt-4 space-y-3" aria-label={label}>
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/80"
          >
            <span
              className="mt-2 block size-1.5 shrink-0 rounded-full bg-primary"
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
