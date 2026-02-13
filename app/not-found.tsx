import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="text-center">
        <p className="font-display text-7xl font-bold text-accent">404</p>
        <h1 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-lg text-muted">
          This page doesn&apos;t exist. Maybe the AI agents moved it.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-lg bg-accent px-6 py-3 font-display font-semibold text-background transition-colors hover:bg-accent-light"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-border px-6 py-3 font-display font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
