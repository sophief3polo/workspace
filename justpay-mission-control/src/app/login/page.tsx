import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const AUTH_COOKIE = "mission_control_auth";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string; error?: string }>;
}) {
  const cookieStore = await cookies();
  const resolvedSearchParams = await searchParams;
  const nextPath = resolvedSearchParams.next || "/";
  const hasError = resolvedSearchParams.error === "invalid_password";
  const expectedPassword = process.env.MISSION_CONTROL_PASSWORD;
  const isAuthenticated = cookieStore.get(AUTH_COOKIE)?.value === expectedPassword;

  if (expectedPassword && isAuthenticated) {
    redirect(nextPath.startsWith("/") ? nextPath : "/");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#08090d] px-4 text-[#f5f7fb]">
      <div className="w-full max-w-md rounded-[28px] border border-white/8 bg-[#0f1218] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.24em] text-[#aab4ff]">Protected access</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">
            Just Pay Mission Control
          </h1>
          <p className="mt-3 text-sm leading-6 text-[#98a2b3]">
            Enter the shared password to open Mission Control.
          </p>
        </div>

        <form action="/api/auth" method="post" className="space-y-4">
          {hasError ? (
            <div className="rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">
              Wrong password. Try again.
            </div>
          ) : null}
          <input type="hidden" name="next" value={nextPath.startsWith("/") ? nextPath : "/"} />
          <label className="block text-sm text-[#d4dae6]">
            Password
            <input
              name="password"
              type="password"
              autoFocus
              required
              className="mt-2 w-full rounded-2xl border border-white/10 bg-[#08090d] px-4 py-3 text-white outline-none transition placeholder:text-[#667085] focus:border-[#33ddff]"
              placeholder="Enter password"
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-2xl bg-[#33ddff] px-4 py-3 text-sm font-medium text-[#082032] transition hover:bg-[#1ec8ef]"
          >
            Unlock Mission Control
          </button>
        </form>
      </div>
    </main>
  );
}
