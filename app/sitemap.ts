import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zituhoq.com";
  return [
    { url: siteUrl, changeFrequency: "monthly" as const, priority: 1.0 },
    { url: `${siteUrl}/about`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${siteUrl}/work`, changeFrequency: "weekly" as const, priority: 0.8 },
  ];
}
