import type { ReactNode } from "react";
import { SECTION_SPACING } from "@/lib/constants";
import { Container } from "./Container";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export function Section({
  id,
  children,
  className = "",
  containerClassName = "",
}: SectionProps) {
  return (
    <section id={id} className={`${SECTION_SPACING} ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}