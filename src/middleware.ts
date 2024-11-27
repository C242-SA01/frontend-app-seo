import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./middlewares/withAuth";

export function mainMiddleware(request: NextRequest) {
  //   const isLogin = false;
  //   if (isLogin) {
  //     return NextResponse.next();
  //   }
  //   return NextResponse.redirect(new URL("/auth/login", request.url));
  // }
  const res = NextResponse.next();
  return res;
}

// export const config = {
//   // halaman mana yang mau diredirect / dibatasi dengan middleware login
//   matcher: ["/history"],
// };

export default withAuth(mainMiddleware, ["/history", "/profile", "/admin"]);
