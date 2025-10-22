// import { log } from "console";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { updateSession } from "@/utils/supabase/middleware";
// import { log } from "console";

/**
 * Combined middleware:
 * 1. Maintains Supabase session
 * 2. Assigns persistent visitor_id for analytics + click tracking
 */
export async function middleware(req: NextRequest) {
  // Read visitor_id from request cookies
  console.log("run");
  const existingVisitorId = req.cookies.get("visitor_id")?.value;

  // Update Supabase session (returns a NextResponse)
  const supabaseResponse = await updateSession(req);

  // Create unified response (start with Supabase response)
  const response = NextResponse.next({
    request: { headers: req.headers },
  });

  // Copy Supabase cookies to this response
  supabaseResponse.cookies.getAll().forEach((cookie) => {
    response.cookies.set(cookie.name, cookie.value, cookie);
  });
  console.log("run");

  // ✅ If visitor_id doesn’t exist, create and attach
  if (!existingVisitorId) {
    const newVisitorId = uuidv4();
    console.log("Generating new visitor_id:", newVisitorId);
    response.cookies.set("visitor_id", newVisitorId, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 1 year
      sameSite: "lax",
      httpOnly: false, // allow client-side analytics access
      secure: process.env.NODE_ENV === "production",
    });

    console.log("✅ New visitor_id set:", newVisitorId);
  }

  return response;
}

/**
 * Middleware matcher
 * Excludes static assets and image optimization routes
 */
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
