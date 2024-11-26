import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isLogin = false;
  if (isLogin) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/auth/login", request.url));
}

export const config = {
  // halaman mana yang mau diredirect / dibatasi dengan middleware login
  matcher: ["/history"],
};
