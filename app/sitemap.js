export const dynamic = 'force-static';

import { site } from '@/lib/site';
import { exames, urlExame } from '@/lib/exames';
import { especialidades } from '@/lib/especialidades';
import { postsPublicados } from '@/lib/posts';

export default function sitemap() {
  const agora = new Date();

  const fixas = [
    { url: '/', priority: 1 },
    { url: '/exames', priority: 0.9 },
    { url: '/para-empresas', priority: 0.9 },
    { url: '/boletim', priority: 0.8 },
    { url: '/para-voce', priority: 0.9 },
    { url: '/exames-clinicos', priority: 0.9 },
    { url: '/exames-laboratoriais-porto-velho', priority: 0.9 },
    { url: '/equipe', priority: 0.7 },
    { url: '/privacidade', priority: 0.3 },
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
    ...especialidades.map((e) => ({
      url: `${site.url}/para-voce/${e.slug}`,
      lastModified: agora,
      changeFrequency: 'monthly',
      priority: 0.9,
    })),
    ...exames.map((e) => ({
      url: `${site.url}${urlExame(e.slug)}`,
      lastModified: agora,
      changeFrequency: 'monthly',
      priority: 0.9,
    })),
    ...postsPublicados().map((p) => ({
      url: `${site.url}/blog/${p.slug}`,
      lastModified: new Date(p.data),
      changeFrequency: 'yearly',
      priority: 0.7,
    })),
  ];
}
