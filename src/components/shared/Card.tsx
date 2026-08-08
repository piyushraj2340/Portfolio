"use client";

import { type ReactNode, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate, HTMLMotionProps } from "framer-motion";

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
  const ref = useRef<HTMLDivElement>(null);
  const frameRef = useRef(0);
  const pendingRef = useRef<{ clientX: number; clientY: number } | null>(null);

  // Spotlight Glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 3D Tilt
  const [isHovered, setIsHovered] = useState(false);
  const rotateX = useSpring(0, { stiffness: 300, damping: 30, mass: 1 });
  const rotateY = useSpring(0, { stiffness: 300, damping: 30, mass: 1 });

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

      const centerX = width / 2;
      const centerY = height / 2;
      const x = pending.clientX - left - centerX;
      const y = pending.clientY - top - centerY;

      rotateX.set((y / centerY) * -5);
      rotateY.set((x / centerX) * 5);
    });
  }

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  }

  const baseClass = hoverable ? "glass-card-hover" : "glass-card";

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${baseClass} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: hoverable ? rotateX : 0,
        rotateY: hoverable ? rotateY : 0,
        transformPerspective: 1000,
      }}
      {...rest}
    >
      {/* Spotlight Glow */}
      {hoverable && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                450px circle at ${mouseX}px ${mouseY}px,
                rgba(59, 130, 246, 0.1),
                transparent 80%
              )
            `,
          }}
          animate={{ opacity: isHovered ? 1 : 0 }}
        />
      )}
      
      {/* Content wrapper */}
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
