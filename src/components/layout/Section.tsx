import type { ReactNode, HTMLAttributes } from "react";
import { Container } from "./Container";

type SectionProps = HTMLAttributes<HTMLElement> & {
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
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${className}`}
      {...rest}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}