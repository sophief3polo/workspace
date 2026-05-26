type LoginPageProps = {
  searchParams?: Promise<{
    error?: string;
    next?: string;
  }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = (await searchParams) ?? {};
  const nextPath = typeof params.next === "string" && params.next.startsWith("/") ? params.next : "/";
  const errorMessage =
    params.error === "invalid"
      ? "Wrong password. Try again."
      : params.error === "config"
        ? "Mission Control password is not configured."
        : null;

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#11141b] px-4 text-[#f5f7fb]">
      <div className="w-full max-w-md rounded-[28px] border border-white/8 bg-[#171c25] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
        <div className="mb-6">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B38E37] text-sm font-semibold text-white">
            MC
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">Mission Control</h1>
          <p className="mt-2 text-sm leading-6 text-[#98a2b3]">Private access only. Enter the password to continue.</p>
        </div>

        <form action="/api/auth" method="post" className="space-y-4">
          <input type="hidden" name="next" value={nextPath} />
          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-white">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoFocus
              className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-white outline-none transition placeholder:text-[#6b7280] focus:border-[#B38E37]"
              placeholder="Enter password"
            />
          </div>

          {errorMessage ? (
            <div className="rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">{errorMessage}</div>
          ) : null}

          <button
            type="submit"
            className="w-full rounded-2xl bg-[#B38E37] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#C7A24B]"
          >
            Enter Mission Control
          </button>
        </form>
      </div>
    </main>
  );
}
