import type { MetadataRoute } from 'next';
import { locales, SITE_URL } from './i18n/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}`]));
  return locales.map((l) => ({
    url: `${SITE_URL}/${l}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: l === 'fr' ? 1 : 0.9,
    alternates: { languages },
  }));
}
