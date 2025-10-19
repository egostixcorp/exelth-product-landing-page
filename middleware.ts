import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { updateSession } from "@/utils/supabase/middleware";

/**
 * Combined middleware:
 * 1. Maintains Supabase session
 * 2. Assigns persistent visitor_id for analytics + click tracking
 */
export async function middleware(req: NextRequest) {
  // Check if visitor_id already exists
  const existingVisitorId = req.cookies.get("visitor_id")?.value;

  // Run Supabase session update
  const supabaseResponse = await updateSession(req);

  // If no visitor_id, we need to set it
  if (!existingVisitorId) {
    const newVisitorId = uuidv4();

    // Create a new response that includes both Supabase session and visitor_id
    const response = NextResponse.next({
      request: {
        headers: req.headers,
      },
    });

    // Copy all cookies from supabaseResponse to our new response
    supabaseResponse.cookies.getAll().forEach((cookie) => {
      response.cookies.set(cookie.name, cookie.value, cookie);
    });

    // Add visitor_id cookie
    response.cookies.set("visitor_id", newVisitorId, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 1 year
      sameSite: "lax",
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
    });

    console.log("✅ New visitor_id set:", newVisitorId);
    return response;
  }

  // If visitor_id exists, just return the Supabase response
  return supabaseResponse;
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
