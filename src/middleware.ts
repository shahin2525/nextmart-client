import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { currentUser } from "./services/auth";
type Role = keyof typeof roleBasedPrivateRoute;
const authRoutes = ["/login", "/register"];

const roleBasedPrivateRoute = {
  user: [/^\/user/, /^\/create-shop/],
  admin: [/^\/admin/],
};

// This function can be marked `async` if using `await` inside
export const middleware = async (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;
  const user = await currentUser();
  if (!user) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(
          `http://localhost:3000/login?redirectPath=${pathname}`,
          request.url
        )
      );
    }
  }
  if (user?.role && roleBasedPrivateRoute[user?.role as Role]) {
    const routes = roleBasedPrivateRoute[user?.role as Role];

    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }
  return NextResponse.redirect(new URL("/", request.url));
};

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/login",
    "/create-shop",
    "/user",
    "/user/:page",
    "/admin",
    "/admin/:page",
  ],
};
