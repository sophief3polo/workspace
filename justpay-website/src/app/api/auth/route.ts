import { NextResponse } from "next/server";

const AUTH_COOKIE = "mission_control_auth";

export async function POST(request: Request) {
  const formData = await request.formData();
  const password = formData.get("password");
  const nextPath = formData.get("next");
  const expectedPassword = process.env.MISSION_CONTROL_PASSWORD;
  const redirectPath =
    typeof nextPath === "string" && nextPath.startsWith("/") ? nextPath : "/";

  if (!expectedPassword) {
    return NextResponse.json(
      { error: "MISSION_CONTROL_PASSWORD is not configured." },
      { status: 503 },
    );
  }

  if (typeof password !== "string" || password !== expectedPassword) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("next", redirectPath);
    loginUrl.searchParams.set("error", "invalid_password");
    return NextResponse.redirect(loginUrl, { status: 302 });
  }

  const response = NextResponse.redirect(new URL(redirectPath, request.url), { status: 302 });
  response.cookies.set({
    name: AUTH_COOKIE,
    value: expectedPassword,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 12,
  });

  return response;
}
