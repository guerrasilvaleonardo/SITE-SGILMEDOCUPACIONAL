import Link from 'next/link';
import { notFound } from 'next/navigation';
import { exames, slugsLocais, getExamePorLocal, urlExame } from '@/lib/exames';
import { site, whatsappUrl, metadadosPagina, jsonLdBreadcrumb, jsonLdFaq } from '@/lib/site';
import Trilha from '@/components/Trilha';
import Faq from '@/components/Faq';
import Check from '@/components/Check';
import JsonLd from '@/components/JsonLd';

export const dynamicParams = false;

export function generateStaticParams() {
  return slugsLocais.map((s) => ({ servicoLocal: s.local }));
}

export function generateMetadata({ params }) {
  const exame = getExamePorLocal(params.servicoLocal);
  if (!exame) return {};
  return metadadosPagina({
    titulo: exame.titulo,
    descricao: exame.descricao,
    caminho: `/${params.servicoLocal}`,
  });
}

export default function PaginaExame({ params }) {
  const exame = getExamePorLocal(params.servicoLocal);
  if (!exame) notFound();

  const trilha = [
    { href: '/', rotulo: 'Início' },
    { href: '/exames', rotulo: 'Exames' },
    { href: `/${params.servicoLocal}`, rotulo: exame.nome },
  ];

  const outros = exames.filter((e) => e.slug !== exame.slug).slice(0, 3);

  return (
    <>
      <JsonLd dados={jsonLdBreadcrumb(trilha)} />
      <JsonLd dados={jsonLdFaq(exame.faq)} />
      <Trilha itens={trilha} />

      <section style={{ paddingBlock: '26px 56px' }}>
        <div className="wrap hero-grade">
          <div className="hero-texto">
            <h1>{exame.titulo}</h1>
            <p className="lede">{exame.chamada}</p>
            <div className="acoes">
              <a
                className="btn btn-primario"
                href={whatsappUrl(`Olá! Gostaria de agendar ${exame.nome.toLowerCase()}.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar pelo WhatsApp
              </a>
              <Link className="btn btn-secundario" href="/agendamento">
                Agendar em lote
              </Link>
            </div>
          </div>

          <div className="tabela-essencial">
            <div className="tabela-essencial-topo">O essencial</div>
            <dl style={{ margin: 0 }}>
              {exame.essencial.map(([chave, valor]) => (
                <div className="linha-essencial" key={chave}>
                  <dt>{chave}</dt>
                  <dd>{valor}</dd>
                </div>
              ))}
              <div className="linha-essencial">
                <dt>Endereço</dt>
                <dd>
                  {site.endereco.rua}
                  <br />
                  {site.endereco.bairro}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="secao secao-fundo">
        <div className="wrap hero-grade">
          <div className="texto">
            <div className="secao-cabeca">
              <h2>Como funciona</h2>
            </div>
            {exame.intro.map((p) => (
              <p key={p.slice(0, 30)}>{p}</p>
            ))}
          </div>
          <div>
            <div className="secao-cabeca">
              <h2>O que levar no dia</h2>
            </div>
            <div className="grade g2">
              {exame.levar.map((item) => (
                <div className="cartao" key={item.titulo}>
                  <h3>{item.titulo}</h3>
                  <p>{item.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="secao">
        <div className="wrap hero-grade">
          <div>
            <div className="secao-cabeca">
              <h2>O que está incluso</h2>
            </div>
            <div className="lista-checada">
              {exame.incluso.map((item) => (
                <div className="item-checado" key={item.titulo}>
                  <Check />
                  <p>
                    <strong>{item.titulo}</strong> — {item.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Faq perguntas={exame.faq} titulo="Perguntas que sempre chegam" />
          </div>
        </div>
      </section>

      <section className="secao secao-fundo">
        <div className="wrap">
          <div className="secao-cabeca">
            <h2>Outros exames ocupacionais</h2>
          </div>
          <div className="grade g3">
            {outros.map((e) => (
              <Link className="cartao cartao-link" href={urlExame(e.slug)} key={e.slug}>
                <h3>{e.nome}</h3>
                <p>{e.chamada}</p>
                <span className="cartao-seta">Ver detalhes →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="secao">
        <div className="wrap">
          <div className="cta-bloco">
            <div>
              <h2>Agende {exame.nome.toLowerCase()} em Porto Velho</h2>
              <p>
                {site.endereco.rua} · {site.endereco.bairro} · {site.endereco.cidade}/
                {site.endereco.uf}
              </p>
            </div>
            <div className="acoes">
              <a
                className="btn btn-claro"
                href={whatsappUrl(`Olá! Gostaria de agendar ${exame.nome.toLowerCase()}.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
