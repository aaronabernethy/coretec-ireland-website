import type { MetadataRoute } from "next";
import { productCategories } from "@/data/productCategories";
import { industryCategories } from "@/data/industryCategories";
import { articles } from "@/data/articles";

const SITE = "https://cortecireland.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { path: "", priority: 1.0 },
    { path: "/products", priority: 0.9 },
    { path: "/industries", priority: 0.9 },
    { path: "/technology", priority: 0.8 },
    { path: "/case-histories", priority: 0.7 },
    { path: "/about", priority: 0.7 },
    { path: "/contact", priority: 0.7 },
    { path: "/sustainability", priority: 0.6 },
    { path: "/resources", priority: 0.6 },
    { path: "/articles", priority: 0.6 },
  ];

  return [
    ...staticPages.map(({ path, priority }) => ({
      url: `${SITE}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...productCategories.map((c) => ({
      url: `${SITE}/products/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...industryCategories.map((i) => ({
      url: `${SITE}/industries/${i.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...articles.map((a) => ({
      url: `${SITE}/articles/${a.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
