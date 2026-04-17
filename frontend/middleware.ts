import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const session = await auth();
  const { pathname } = request.nextUrl;

  // Public routes
  if (pathname.startsWith("/login") || pathname.startsWith("/api/auth")) {
    if (session) return NextResponse.redirect(new URL("/dashboard", request.url));
    return NextResponse.next();
  }

  // Protected routes
  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Redirect root to dashboard
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.png$).*)"],
};
