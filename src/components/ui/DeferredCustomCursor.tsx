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

    const ric = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1200));
    const id = ric(() => setReady(true));
    return () => {
      if (window.cancelIdleCallback && typeof id === "number") {
        window.cancelIdleCallback(id);
      }
    };
  }, []);

  if (!ready) return null;
  return <CustomCursor />;
}
