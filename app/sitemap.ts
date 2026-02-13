import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dialedintelligence.com";

  const staticPages = [
    "",
    "/services",
    "/use-cases",
    "/how-agents-work",
    "/about",
    "/blog",
    "/contact",
  ];

  const blogSlugs = getAllSlugs();

  const staticEntries = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/blog" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "" ? 1 : 0.8,
  }));

  const blogEntries = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
