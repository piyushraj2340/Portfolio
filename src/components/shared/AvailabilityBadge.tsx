import { Badge } from "@/components/ui/badge";

type AvailabilityBadgeProps = {
  text: string;
};

/**
 * A reusable badge indicating current availability status.
 * Features a pulsing indicator dot.
 */
export function AvailabilityBadge({ text }: AvailabilityBadgeProps) {
  return (
    <div>
      <Badge
        variant="outline"
        className="gap-1.5 border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary"
      >
        <span className="relative flex size-2" aria-hidden="true">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
          <span className="relative inline-flex size-2 rounded-full bg-primary" />
        </span>
        {text}
      </Badge>
    </div>
  );
}
