"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ reset }: ErrorProps) {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col items-start justify-center gap-6 px-6">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-destructive">
        Something went wrong
      </p>
      <h1 className="text-4xl font-bold text-foreground">
        Unexpected application error
      </h1>
      <p className="max-w-2xl text-base text-text-secondary">
        Please try again. If the problem continues, refresh the page or reach out
        via the contact form.
      </p>
      <button
        type="button"
        onClick={reset}
        className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-hover"
      >
        Try again
      </button>
    </div>
  );
}
