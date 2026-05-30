import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.SITE_URL!;

  if (!siteUrl) {
    throw new Error("SITE_URL environment variable is required");
  }

  return [
    {
      url: `${siteUrl}/en`,
    },
    {
      url: `${siteUrl}/es`,
    },
    {
      url: `${siteUrl}/cv/Resume%20-%20Juan%20Miguel%20Paulino%20-%20EN.pdf`,
    },
    {
      url: `${siteUrl}/cv/Curriculum%20-%20Juan%20Miguel%20Paulino%20-%20ES.pdf`,
    },
  ];
}