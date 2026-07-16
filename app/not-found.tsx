import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[100dvh] flex items-center justify-center relative z-10 px-5">
      <div className="text-center space-y-6 max-w-md">
        <div className="text-7xl md:text-9xl font-semibold tracking-tighter text-text-muted/30 leading-none select-none">
          404
        </div>
        <h1 className="text-xl md:text-2xl font-semibold text-text-primary tracking-tight">
          Page not found
        </h1>
        <p className="text-text-secondary text-sm leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white font-medium text-sm rounded-lg hover:bg-accent-hover transition-colors active:scale-[0.98]"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to home
        </Link>
      </div>
    </main>
  );
}
