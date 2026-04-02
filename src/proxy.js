import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const proxy = async (req) => {
  const token = await getToken({ req });
  if (!token) {
    const callBackUrl = encodeURIComponent(req.nextUrl.pathname);
    return NextResponse.redirect(
      new URL(`/api/auth/signin?callbackUrl=${callBackUrl}`, req.url),
    );
  }
};

export const config = {
  matcher: ["/about/:path*", "/admin-dashboard/order"],
};
