"use client";

import { useEffect } from "react";

/** Inject web manifest after idle so it stays out of the critical request chain. */
export function DeferredManifest() {
  useEffect(() => {
    if (document.querySelector('link[rel="manifest"]')) return;

    const inject = () => {
      const link = document.createElement("link");
      link.rel = "manifest";
      link.href = "/favicon/site.webmanifest";
      document.head.appendChild(link);
    };

    const ric =
      window.requestIdleCallback ??
      ((cb: IdleRequestCallback) =>
        window.setTimeout(() => cb({} as IdleDeadline), 1500));

    const id = ric(() => inject(), { timeout: 3000 });
    return () => {
      if ("cancelIdleCallback" in window) {
        window.cancelIdleCallback(id as number);
      } else {
        clearTimeout(id as number);
      }
    };
  }, []);

  return null;
}
