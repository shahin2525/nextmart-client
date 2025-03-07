import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { currentUser } from "./services/auth";
const authRoutes = ["/login", "/register"];

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
};

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/create-shop"],
};
