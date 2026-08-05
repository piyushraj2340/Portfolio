"use client";

import { useEffect, useState } from "react";

export function TypingRoles({ roles }: { roles: readonly string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index % roles.length];

    if (!deleting && text === current) {
      const hold = setTimeout(() => setDeleting(true), 1600);
      return () => clearTimeout(hold);
    }

    if (deleting && text === "") {
      const reset = setTimeout(() => {
        setDeleting(false);
        setIndex((value) => (value + 1) % roles.length);
      }, 0);
      return () => clearTimeout(reset);
    }

    const timeout = setTimeout(
      () => {
        setText((value) =>
          deleting
            ? current.slice(0, value.length - 1)
            : current.slice(0, value.length + 1)
        );
      },
      deleting ? 40 : 75
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, index, roles]);

  return (
    <span className="inline-flex items-baseline">
      <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        {text}
      </span>
      <span
        aria-hidden="true"
        className="ml-1 inline-block h-[0.9em] w-[3px] animate-[pulse_1s_steps(1,end)_infinite] rounded-full bg-primary align-middle"
      />
      <span className="sr-only">{roles.join(", ")}</span>
    </span>
  );
}
