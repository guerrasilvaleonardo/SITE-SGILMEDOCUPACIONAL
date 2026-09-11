import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts, getPost } from '@/lib/posts';
import { site, metadadosPagina, jsonLdBreadcrumb } from '@/lib/site';
import Trilha from '@/components/Trilha';
import JsonLd from '@/components/JsonLd';

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ post: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPost(params.post);
  if (!post) return {};
  return metadadosPagina({
    titulo: post.titulo,
    descricao: post.descricao,
    caminho: `/blog/${post.slug}`,
  });
}

function jsonLdArtigo(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.titulo,
    description: post.descricao,
    datePublished: post.data,
    dateModified: post.data,
    inLanguage: 'pt-BR',
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
    author: {
      '@type': 'Person',
      name: site.responsavelTecnico.nome,
    },
    publisher: {
      '@type': 'Organization',
      name: site.nome,
      url: site.url,
    },
  };
}

function Bloco({ bloco }) {
  if (bloco.tipo === 'h2') return <h2>{bloco.texto}</h2>;
  if (bloco.tipo === 'p') return <p>{bloco.texto}</p>;
  if (bloco.tipo === 'destaque') {
    return (
      <div className="destaque">
        <span className="rotulo">{bloco.rotulo}</span>
        <p style={{ fontSize: 17, lineHeight: 1.65 }}>{bloco.texto}</p>
      </div>
    );
  }
  if (bloco.tipo === 'lista-numerada') {
    return (
      <ol>
        {bloco.itens.map((item) => (
          <li key={item.titulo}>
            <p>
              <strong>{item.titulo}</strong> {item.texto}
            </p>
          </li>
        ))}
      </ol>
    );
  }
  if (bloco.tipo === 'lista') {
    return (
      <ul>
        {bloco.itens.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  return null;
}

export default function Post({ params }) {
  const post = getPost(params.post);
  if (!post) notFound();

  const trilha = [
    { href: '/', rotulo: 'Início' },
    { href: '/blog', rotulo: 'Blog' },
    { href: `/blog/${post.slug}`, rotulo: post.territorio },
  ];

  return (
    <>
      <JsonLd dados={jsonLdBreadcrumb(trilha)} />
      <JsonLd dados={jsonLdArtigo(post)} />
      <Trilha itens={trilha} />

      <article>
        <div className="wrap">
          <header className="artigo-cabeca">
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
              <span className="chip">{post.territorio}</span>
              <span className="mono" style={{ fontSize: 12, color: 'var(--tinta-4)' }}>
                {post.dataTexto.toUpperCase()} · {post.leitura.toUpperCase()} DE LEITURA
              </span>
            </div>
            <h1>{post.titulo}</h1>
            <p className="lede" style={{ maxWidth: '100%' }}>
              {post.resumo}
            </p>
            <div className="assinatura">
              <div className="assinatura-avatar" aria-hidden="true">
                AM
              </div>
              <div>
                <div style={{ fontWeight: 600 }}>{site.responsavelTecnico.nome}</div>
                <div style={{ fontSize: 14, color: 'var(--tinta-3)' }}>
                  Responsável técnico · {site.responsavelTecnico.registro}
                </div>
              </div>
            </div>
          </header>

          <div className="artigo-corpo">
            {post.corpo.map((bloco, i) => (
              <Bloco bloco={bloco} key={i} />
            ))}
          </div>

          <aside className="caixa-autor">
            <div className="assinatura-avatar" aria-hidden="true">
              AM
            </div>
            <div>
              <h3>{site.responsavelTecnico.nome}</h3>
              <p className="mono" style={{ fontSize: 13, color: 'var(--azul)', margin: '4px 0 8px' }}>
                {site.responsavelTecnico.registro}
              </p>
              <p style={{ fontSize: 16, color: 'var(--tinta-3)', margin: 0 }}>
                Responsável técnico pelos conteúdos clínicos da ÁgilMed Ocupacional, clínica de
                medicina do trabalho em Porto Velho.
              </p>
            </div>
          </aside>
        </div>

        <section className="secao">
          <div className="wrap">
            <div className="secao-cabeca">
              <h2>Leia também</h2>
            </div>
            <div className="grade g3">
              {post.relacionados.map((r) => (
                <Link className="cartao cartao-link" href={r.href} key={r.href}>
                  <span className="rotulo rotulo-cinza" style={{ fontSize: 11 }}>
                    {r.territorio}
                  </span>
                  <h3 style={{ fontSize: 20 }}>{r.rotulo}</h3>
                  <span className="cartao-seta">Ver →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <div className="wrap" style={{ paddingBottom: 60 }}>
          <p style={{ fontSize: 13.5, color: 'var(--tinta-4)', maxWidth: '52em' }}>
            Conteúdo informativo. Não substitui a leitura da norma nem a avaliação do profissional
            responsável pela sua empresa.
          </p>
        </div>
      </article>
    </>
  );
}
