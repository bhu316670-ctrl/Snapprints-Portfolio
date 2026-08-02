import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const role = request.cookies.get("role")?.value;

  const { pathname } = request.nextUrl;

  // Public pages
  const publicRoutes = [
    "/public/login",
    "/public/admin-login",
    "/public/forgot-password",
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

  // Protect Admin Pages
  if (pathname.startsWith("/admin")) {
    if (!token) {
      return NextResponse.redirect(
        new URL("/public/admin-login", request.url)
      );
    }

    if (role !== "admin") {
      return NextResponse.redirect(
        new URL("/public/login", request.url)
      );
    }
  }

  // Protect User Pages
  if (pathname.startsWith("/user")) {
    if (!token) {
      return NextResponse.redirect(
        new URL("/public/login", request.url)
      );
    }

    if (role !== "user") {
      return NextResponse.redirect(
        new URL("/public/admin-login", request.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/user/:path*",
    "/public/login",
    "/public/admin-login",
    "/public/user-login",
  ],
};