import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const nextPath = formData.get("next");
  const redirectPath =
    typeof nextPath === "string" && nextPath.startsWith("/") ? nextPath : "/";

  return NextResponse.redirect(new URL(redirectPath, request.url), { status: 302 });
}
