import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/business";

// Impressum & Datenschutz sind bis zur Fertigstellung auf noindex und fehlen daher hier.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl ?? "http://localhost:3000";
  return [{ url: `${base}/`, changeFrequency: "monthly", priority: 1 }];
}
