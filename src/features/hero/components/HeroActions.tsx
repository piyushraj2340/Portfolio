import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { HeroAction } from "@/features/hero/types";

type HeroActionsProps = {
  primaryAction: HeroAction;
  secondaryAction: HeroAction;
};

/**
 * CTA button pair for the hero section.
 * Uses shadcn/ui Button with asChild to render semantic anchor elements.
 */
export function HeroActions({
  primaryAction,
  secondaryAction,
}: HeroActionsProps) {
  return (
    <div className="flex flex-wrap items-center gap-3" role="group" aria-label="Primary actions">
      <Button asChild size="lg" className="h-11 gap-2 px-6 text-sm">
        <Link href={primaryAction.href}>
          {primaryAction.label}
          <ArrowRight data-icon="inline-end" className="size-4" aria-hidden="true" />
        </Link>
      </Button>

      <Button asChild variant="outline" size="lg" className="h-11 gap-2 px-6 text-sm">
        <Link
          href={secondaryAction.href}
          {...(secondaryAction.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          <Download data-icon="inline-start" className="size-4" aria-hidden="true" />
          {secondaryAction.label}
          {secondaryAction.external && (
            <span className="sr-only">(opens in a new tab)</span>
          )}
        </Link>
      </Button>
    </div>
  );
}
