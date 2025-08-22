import type { MetadataRoute } from "next";

// const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.exelth.com";
const baseUrl = "https://www.exelth.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          // Block sensitive or non-SEO routes
          "/api/",
          "/admin/",
          "/dashboard/",
          "/private/",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
