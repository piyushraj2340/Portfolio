import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col items-start justify-center gap-6 px-6">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-text-muted">404</p>
      <h1 className="text-4xl font-bold text-foreground">Page not found</h1>
      <p className="max-w-2xl text-base text-text-secondary">
        The page you requested does not exist in this version of the portfolio.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-hover"
      >
        Back to home
      </Link>
    </div>
  );
}