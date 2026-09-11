import Link from 'next/link';
import { notFound } from 'next/navigation';
import { programas, getPrograma } from '@/lib/programas';
import { metadadosPagina, jsonLdBreadcrumb, jsonLdFaq, whatsappUrl } from '@/lib/site';
import Trilha from '@/components/Trilha';
import Faq from '@/components/Faq';
import Check from '@/components/Check';
import JsonLd from '@/components/JsonLd';

export const dynamicParams = false;

export function generateStaticParams() {
  return programas.map((p) => ({ programa: p.slug }));
}

export function generateMetadata({ params }) {
  const p = getPrograma(params.programa);
  if (!p) return {};
  return metadadosPagina({
    titulo: p.titulo,
    descricao: p.descricao,
    caminho: `/programas-e-laudos/${p.slug}`,
  });
}

export default function PaginaPrograma({ params }) {
  const programa = getPrograma(params.programa);
  if (!programa) notFound();

  const trilha = [
    { href: '/', rotulo: 'Início' },
    { href: '/programas-e-laudos', rotulo: 'Programas e laudos' },
    { href: `/programas-e-laudos/${programa.slug}`, rotulo: programa.nome },
  ];

  const outros = programas.filter((p) => p.slug !== programa.slug);

  return (
    <>
      <JsonLd dados={jsonLdBreadcrumb(trilha)} />
      <JsonLd dados={jsonLdFaq(programa.perguntas)} />
      <Trilha itens={trilha} />

      <section style={{ paddingBlock: '26px 48px' }}>
        <div className="wrap">
          <div className="secao-cabeca" style={{ maxWidth: '24em' }}>
            <h1>{programa.h1}</h1>
            <p className="lede">{programa.chamada}</p>
          </div>
          <div className="acoes">
            <a className="btn btn-primario" href={whatsappUrl(`Olá! Quero falar sobre ${programa.nome}.`)} target="_blank" rel="noopener noreferrer">
              Falar com a equipe
            </a>
            <Link className="btn btn-secundario" href="/para-empresas">
              Ver gestão completa
            </Link>
          </div>
        </div>
      </section>

      <section className="secao secao-fundo">
        <div className="wrap hero-grade">
          <div className="texto">
            {programa.intro.map((p) => (
              <p key={p.slice(0, 30)}>{p}</p>
            ))}
          </div>
          <div>
            <div className="secao-cabeca">
              <h2>O que entregamos</h2>
            </div>
            <div className="lista-checada">
              {programa.entregas.map((e) => (
                <div className="item-checado" key={e.titulo}>
                  <Check />
                  <p>
                    <strong>{e.titulo}</strong> — {e.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="secao">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <Faq perguntas={programa.perguntas} />
        </div>
      </section>

      <section className="secao secao-fundo">
        <div className="wrap">
          <div className="secao-cabeca">
            <h2>Veja também</h2>
          </div>
          <div className="grade g2">
            {outros.map((p) => (
              <Link className="cartao cartao-link" href={`/programas-e-laudos/${p.slug}`} key={p.slug}>
                <h3>{p.nome}</h3>
                <p>{p.chamada}</p>
                <span className="cartao-seta">Ver detalhes →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
