import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  if (url.pathname.startsWith("/panorama/")) {
    const res = NextResponse.next();
    res.headers.set("Cache-Control", "public, max-age=3600, must-revalidate");
    return res;
  }

  return NextResponse.next();
}
