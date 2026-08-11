"use client";

import { type ReactNode, useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  type HTMLMotionProps,
} from "framer-motion";

type CardProps = HTMLMotionProps<"div"> & {
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
  const frameRef = useRef(0);
  const pendingRef = useRef<{ clientX: number; clientY: number } | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(0, { stiffness: 220, damping: 24, mass: 0.6 });
  const rotateY = useSpring(0, { stiffness: 220, damping: 24, mass: 0.6 });
  const lift = useSpring(0, { stiffness: 260, damping: 22, mass: 0.5 });
  const spotlight = useMotionTemplate`
    radial-gradient(
      380px circle at ${mouseX}px ${mouseY}px,
      rgba(37, 99, 235, 0.16),
      transparent 68%
    )
  `;

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    if (!hoverable) return;
    pendingRef.current = { clientX, clientY };
    if (frameRef.current) return;

    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = 0;
      const pending = pendingRef.current;
      if (!pending) return;
      const { left, top, width, height } = currentTarget.getBoundingClientRect();

      mouseX.set(pending.clientX - left);
      mouseY.set(pending.clientY - top);

      const x = pending.clientX - left - width / 2;
      const y = pending.clientY - top - height / 2;
      rotateX.set((y / (height / 2)) * -6);
      rotateY.set((x / (width / 2)) * 6);
    });
  }

  function handleMouseEnter() {
    setIsHovered(true);
    if (hoverable) lift.set(-6);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
    lift.set(0);
  }

  const baseClass = hoverable ? "glass-card-hover" : "glass-card";

  return (
    <motion.div
      className={`relative overflow-hidden ${baseClass} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: hoverable ? rotateX : 0,
        rotateY: hoverable ? rotateY : 0,
        y: hoverable ? lift : 0,
        transformPerspective: 1100,
      }}
      {...rest}
    >
      {hoverable && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px rounded-[inherit]"
          style={{ background: spotlight }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
        />
      )}
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
