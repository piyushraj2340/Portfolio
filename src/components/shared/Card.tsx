import type { ReactNode, HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  hoverable?: boolean;
  className?: string;
};

export function Card({
  children,
  hoverable = false,
  className = "",
  ...rest
}: CardProps) {
  const baseClass = hoverable ? "glass-card-hover" : "glass-card";
  return (
    <div className={`${baseClass} ${className}`} {...rest}>
      {children}
    </div>
  );
}
