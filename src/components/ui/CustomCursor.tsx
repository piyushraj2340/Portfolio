"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight custom cursor — no React state on mousemove (avoids forced reflow).
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const hoveringRef = useRef(false);
  const posRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(0);

  useEffect(() => {
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const root = document.documentElement;
    const dot = dotRef.current;
    const ring = ringRef.current;
    root.classList.add("cursor-none");
    if (dot) dot.hidden = false;
    if (ring) ring.hidden = false;

    const handleMouseMove = (e: MouseEvent) => {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX - 4}px, ${e.clientY - 4}px, 0)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const next =
        !!target &&
        !!(
          target.closest("a") ||
          target.closest("button") ||
          target.closest(".hoverable")
        );
      if (next === hoveringRef.current) return;
      hoveringRef.current = next;
      if (dotRef.current) {
        dotRef.current.style.opacity = next ? "0" : "1";
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPosRef.current.x}px, ${ringPosRef.current.y}px, 0) scale(${next ? 1.5 : 1})`;
        ringRef.current.style.backgroundColor = next
          ? "rgba(37, 99, 235, 0.1)"
          : "transparent";
      }
    };

    const tick = () => {
      const { x, y } = posRef.current;
      ringPosRef.current.x += (x - 16 - ringPosRef.current.x) * 0.2;
      ringPosRef.current.y += (y - 16 - ringPosRef.current.y) * 0.2;
      if (ringRef.current) {
        const scale = hoveringRef.current ? 1.5 : 1;
        ringRef.current.style.transform = `translate3d(${ringPosRef.current.x}px, ${ringPosRef.current.y}px, 0) scale(${scale})`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      root.classList.remove("cursor-none");
      if (dot) dot.hidden = true;
      if (ring) ring.hidden = true;
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        hidden
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 rounded-full bg-primary mix-blend-difference will-change-transform"
      />
      <div
        ref={ringRef}
        hidden
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[99] h-8 w-8 rounded-full border border-primary/50 mix-blend-difference will-change-transform"
      />
    </>
  );
}
