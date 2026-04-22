import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AUTH_COOKIE = "mission_control_auth";
const LOGIN_PATH = "/login";

function unauthorizedResponse(request: NextRequest) {
  const loginUrl = new URL(LOGIN_PATH, request.url);
  loginUrl.searchParams.set("next", `${request.nextUrl.pathname}${request.nextUrl.search}`);
  return NextResponse.redirect(loginUrl);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/api/auth") ||
    pathname === LOGIN_PATH
  ) {
    return NextResponse.next();
  }

  const expectedPassword = process.env.MISSION_CONTROL_PASSWORD;

  if (!expectedPassword) {
    return new NextResponse(
      "Mission Control password protection is not configured. Set MISSION_CONTROL_PASSWORD.",
      { status: 503 },
    );
  }

  const sessionValue = request.cookies.get(AUTH_COOKIE)?.value;

  if (sessionValue === expectedPassword) {
    return NextResponse.next();
  }

  return unauthorizedResponse(request);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)"],
};
