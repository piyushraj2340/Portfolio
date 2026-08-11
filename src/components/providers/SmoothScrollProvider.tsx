"use client";

/**
 * Native CSS smooth scrolling is used (globals.css).
 * Lenis was removed — it captured wheel events over the contact form
 * and at the page bottom, which locked scroll and froze the custom cursor.
 */
export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
