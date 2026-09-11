export const dynamic = 'force-static';

import { site } from '@/lib/site';
import { exames, urlExame } from '@/lib/exames';
import { programas } from '@/lib/programas';
import { posts } from '@/lib/posts';

export default function sitemap() {
  const agora = new Date();

  const fixas = [
    { url: '/', priority: 1 },
    { url: '/exames', priority: 0.9 },
    { url: '/programas-e-laudos', priority: 0.8 },
    { url: '/riscos-psicossociais-nr1', priority: 0.9 },
    { url: '/para-empresas', priority: 0.9 },
    { url: '/boletim', priority: 0.8 },
    { url: '/sobre', priority: 0.5 },
    { url: '/contato', priority: 0.6 },
    { url: '/agendamento', priority: 0.7 },
    { url: '/blog', priority: 0.7 },
  ];

  return [
    ...fixas.map((p) => ({
      url: `${site.url}${p.url}`,
      lastModified: agora,
      changeFrequency: 'monthly',
      priority: p.priority,
    })),
    ...exames.map((e) => ({
      url: `${site.url}${urlExame(e.slug)}`,
      lastModified: agora,
      changeFrequency: 'monthly',
      priority: 0.9,
    })),
    ...programas.map((p) => ({
      url: `${site.url}/programas-e-laudos/${p.slug}`,
      lastModified: agora,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
    ...posts.map((p) => ({
      url: `${site.url}/blog/${p.slug}`,
      lastModified: new Date(p.data),
      changeFrequency: 'yearly',
      priority: 0.7,
    })),
  ];
}
