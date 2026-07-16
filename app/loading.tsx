export default function Loading() {
  return (
    <main className="min-h-[100dvh] flex items-center justify-center relative z-10 px-5 bg-bg">
      <div className="text-center space-y-6">
        <div className="w-12 h-12 mx-auto rounded-xl border border-border bg-surface flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-accent border-t-transparent rounded-full animate-spin" />
        </div>
        <p className="text-sm text-text-secondary font-medium">
          Loading...
        </p>
      </div>
    </main>
  );
}
