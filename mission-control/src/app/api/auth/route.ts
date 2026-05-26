import { NextResponse } from "next/server";

const AUTH_COOKIE = "mission-control-auth";

async function sha256(value: string) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const nextPath = formData.get("next");
  const passwordInput = formData.get("password");
  const configuredPassword = process.env.MISSION_CONTROL_PASSWORD;

  const redirectPath =
    typeof nextPath === "string" && nextPath.startsWith("/") ? nextPath : "/";

  if (!configuredPassword) {
    return NextResponse.redirect(new URL("/login?error=config", request.url), { status: 302 });
  }

  if (typeof passwordInput !== "string" || passwordInput !== configuredPassword) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("error", "invalid");
    if (redirectPath !== "/") {
      loginUrl.searchParams.set("next", redirectPath);
    }
    return NextResponse.redirect(loginUrl, { status: 302 });
  }

  const response = NextResponse.redirect(new URL(redirectPath, request.url), { status: 302 });
  response.cookies.set(AUTH_COOKIE, await sha256(configuredPassword), {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    path: "/",
    maxAge: 60 * 60 * 12,
  });

  return response;
}
