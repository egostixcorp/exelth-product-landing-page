import type { MetadataRoute } from "next";

// If you deploy on multiple environments, consider moving this to an env:
// const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.exelth.com";
const baseUrl = "https://www.exelth.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // Add or generate routes here (can also be fetched from your CMS/DB)
  const staticRoutes = [
    "",
    "/search",
    "/patient",
    "/about",
    "/product",
    "/contact",
    "/pricing",
    "/changelog",
    "/blog",
  ];

  const now = new Date();

  return staticRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1.0 : 0.7,
  }));
}
