import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AUTH_COOKIE = "mission-control-auth";
const LOGIN_PATH = "/login";
const AUTH_PATH = "/api/auth";

async function sha256(value: string) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export async function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (pathname === LOGIN_PATH || pathname === AUTH_PATH) {
    return NextResponse.next();
  }

  const password = process.env.MISSION_CONTROL_PASSWORD;
  if (!password) {
    return new NextResponse("Mission Control password is not configured.", { status: 503 });
  }

  const expectedHash = await sha256(password);
  const actualHash = request.cookies.get(AUTH_COOKIE)?.value;

  if (actualHash === expectedHash) {
    return NextResponse.next();
  }

  const loginUrl = new URL(LOGIN_PATH, request.url);
  const nextPath = `${pathname}${search}`;
  if (nextPath.startsWith("/")) {
    loginUrl.searchParams.set("next", nextPath);
  }

  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)"],
};
