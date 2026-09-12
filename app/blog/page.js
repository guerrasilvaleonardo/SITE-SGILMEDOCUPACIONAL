import Link from 'next/link';
import { posts } from '@/lib/posts';
import { metadadosPagina, jsonLdBreadcrumb } from '@/lib/site';
import Trilha from '@/components/Trilha';
import JsonLd from '@/components/JsonLd';

export const metadata = metadadosPagina({
  titulo: 'Blog — saúde e segurança do trabalho',
  descricao:
    'Prazos, normas e rotina de SST explicados por quem assina os documentos. Conteúdo para RH, técnicos de segurança e gestores em Porto Velho.',
  caminho: '/blog',
});

const trilha = [
  { href: '/', rotulo: 'Início' },
  { href: '/blog', rotulo: 'Blog' },
];

export default function Blog() {
  return (
    <>
      <JsonLd dados={jsonLdBreadcrumb(trilha)} />
      <Trilha itens={trilha} />

      <section style={{ paddingBlock: '26px 40px' }}>
        <div className="wrap">
          <div className="secao-cabeca">
            <h1>Blog</h1>
            <p className="lede">
              Prazos, normas e rotina de saúde e segurança do trabalho, explicados por quem assina os
              documentos. Sem alarde e sem promessa de resultado.
            </p>
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: 72 }}>
        <div className="wrap grade g3">
          {posts.map((p) => (
            <Link className="cartao cartao-link" href={`/blog/${p.slug}`} key={p.slug}>
              <span className="chip">{p.territorio}</span>
              <h3 style={{ fontSize: 21, marginTop: 6 }}>{p.titulo}</h3>
              <p>{p.resumo}</p>
              <span className="cartao-seta">
                {p.dataTexto} · {p.leitura}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
