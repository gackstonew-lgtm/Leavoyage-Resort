import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://levoyageresort.co.ke';

  const routes = [
    '',
    '/accommodation',
    '/conferences',
    '/pricing',
    '/rates',
    '/dining',
    '/facilities',
    '/packages',
    '/gallery',
    '/about',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
