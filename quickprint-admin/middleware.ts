import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const role = request.cookies.get("role")?.value;

  const { pathname } = request.nextUrl;

  // Public routes
  const publicRoutes = [
    "/admin-login",
    "/user-login",
  ];

  // Already logged in
  if (token && publicRoutes.includes(pathname)) {
    if (role === "admin") {
      return NextResponse.redirect(
        new URL("/admin/dashboard", request.url)
      );
    }

    if (role === "user") {
      return NextResponse.redirect(
        new URL("/user/dashboard", request.url)
      );
    }
  }

  // Protect Admin Routes
  if (pathname.startsWith("/admin")) {
    if (!token) {
      return NextResponse.redirect(
        new URL("/admin-login", request.url)
      );
    }

    if (role !== "SUPER_ADMIN") {
      return NextResponse.redirect(
        new URL("/user/dashboard", request.url)
      );
    }
  }

  // Protect User Routes
  if (pathname.startsWith("/user")) {
    if (!token) {
      return NextResponse.redirect(
        new URL("/user-login", request.url)
      );
    }

    if (role !== "users") {
      return NextResponse.redirect(
        new URL("/admin/dashboard", request.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/user/:path*",
    "/admin-login",
    "/user-login",
  ],
};