"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const CustomCursor = dynamic(
  () =>
    import("@/components/ui/CustomCursor").then((mod) => mod.CustomCursor),
  { ssr: false }
);

/** Load custom cursor after idle so it doesn't compete with LCP/hydration. */
export function DeferredCustomCursor() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (coarse || reduced) return;

    const canUseIdle = typeof window.requestIdleCallback === "function";
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof window.setTimeout> | NodeJS.Timeout | number | undefined;

    if (canUseIdle) {
      idleId = window.requestIdleCallback(() => setReady(true));
    } else {  
      timeoutId = window.setTimeout(() => setReady(true), 1200);
    }

    return () => {
      if (idleId !== undefined) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  if (!ready) return null;
  return <CustomCursor />;
}
