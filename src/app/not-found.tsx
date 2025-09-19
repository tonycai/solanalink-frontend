import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="text-4xl font-bold text-foreground-light dark:text-foreground-dark">
        Page Not Found
      </h1>
      <p className="mt-4 text-subtle-light dark:text-subtle-dark">
        The page you’re looking for doesn’t exist or has moved.
      </p>
      <div className="mt-8">
        <Link
          href="/homepage/"
          className="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white hover:bg-primary/90"
        >
          Go to Homepage
        </Link>
      </div>
    </main>
  );
}

