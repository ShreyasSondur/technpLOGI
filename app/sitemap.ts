import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://technologi.in/",
      lastModified: new Date(),
      priority: 1.0,
    },
  ];
}