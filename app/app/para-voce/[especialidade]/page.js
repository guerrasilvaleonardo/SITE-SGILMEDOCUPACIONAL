import Link from 'next/link';
import { notFound } from 'next/navigation';
import { especialidades, getEspecialidade } from '@/lib/especialidades';
import { site, whatsappUrl, metadadosPagina, jsonLdBreadcrumb, jsonLdFaq } from '@/lib/site';
import Trilha from '@/components/Trilha';
import Faq from '@/components/Faq';
import Check from '@/components/Check';
import JsonLd from '@/components/JsonLd';

export const dynamicParams = false;

export function generateStaticParams() {
  return especialidades.map((e) => ({ especialidade: e.slug }));
}

export function generateMetadata({ params }) {
  const item = getEspecialidade(params.especialidade);
  if (!item) return {};
  return metadadosPagina({
    titulo: item.titulo,
    descricao: item.descricao,
    caminho: `/para-voce/${item.slug}`,
  });
}

export default function PaginaEspecialidade({ params }) {
  const item = getEspecialidade(params.especialidade);
  if (!item) notFound();

  const trilha = [
    { href: '/', rotulo: 'Início' },
    { href: '/para-voce', rotulo: 'Para você' },
    { href: `/para-voce/${item.slug}`, rotulo: item.nome },
  ];

  const outras = especialidades.filter((e) => e.slug !== item.slug);
  const iniciais = item.profissional.nome.replace(/[[\]]/g, '').trim().slice(0, 2).toUpperCase();

  return (
    <>
      <JsonLd dados={jsonLdBreadcrumb(trilha)} />
      <JsonLd dados={jsonLdFaq(item.faq)} />
      <Trilha itens={trilha} />

      <section style={{ paddingBlock: '26px 52px' }}>
        <div className="wrap hero-grade">
          <div className="hero-texto">
            <span className="rotulo">Atendimento para a sociedade</span>
            <h1>{item.titulo}</h1>
            <p className="lede">{item.chamada}</p>
            <p className="mono" style={{ fontSize: 12.5, letterSpacing: '0.06em', color: 'var(--tinta-4)' }}>
              ATENDIMENTO PARTICULAR · SEM CONVÊNIOS NO MOMENTO
            </p>
            <div className="acoes">
              <a
                className="btn btn-primario"
                href={whatsappUrl(`Olá! Gostaria de agendar um atendimento de ${item.nome.toLowerCase()}.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar pelo WhatsApp
              </a>
              <Link className="btn btn-secundario" href="/contato">
                Ver contato
              </Link>
            </div>
          </div>

          <div className="cartao" style={{ padding: 30, gap: 14 }}>
            <span className="rotulo">{item.profissional.papel}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span className="assinatura-avatar" aria-hidden="true">
                {iniciais}
              </span>
              <div>
                <h3 style={{ fontSize: 21 }}>{item.profissional.nome}</h3>
                <p className="mono" style={{ fontSize: 13, color: 'var(--azul)', margin: '4px 0 0' }}>
                  {item.profissional.registro}
                </p>
              </div>
            </div>
            {item.profissional.nota && <p>{item.profissional.nota}</p>}
            <p>
              Atendimento com hora marcada em {site.endereco.bairro}, {site.endereco.cidade}/
              {site.endereco.uf}. Confirme horários, valores e formas de pagamento pelo WhatsApp
              antes de agendar.
            </p>
          </div>
        </div>
      </section>

      <section className="secao secao-fundo">
        <div className="wrap hero-grade">
          <div className="texto">
            <div className="secao-cabeca">
              <h2>Como é o atendimento</h2>
            </div>
            {item.intro.map((p) => (
              <p key={p.slice(0, 30)}>{p}</p>
            ))}
          </div>
          <div>
            <div className="secao-cabeca">
              <h2>O que atendemos</h2>
            </div>
            <div className="lista-checada">
              {item.atendemos.map((a) => (
                <div className="item-checado" key={a.titulo}>
                  <Check />
                  <p>
                    <strong>{a.titulo}</strong> — {a.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="secao">
        <div className="wrap">
          <div className="secao-cabeca">
            <h2>Como funciona</h2>
          </div>
          <div className="grade g3">
            {item.comoFunciona.map((e, i) => (
              <div
                key={e.n}
                style={{
                  borderTop: `2px solid ${i === 0 ? 'var(--azul-claro)' : 'var(--linha)'}`,
                  paddingTop: 14,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                }}
              >
                <span
                  className="mono"
                  style={{ fontSize: 12, fontWeight: 600, color: i === 0 ? 'var(--azul-claro)' : 'var(--tinta-4)' }}
                >
                  {e.n}
                </span>
                <h3>{e.titulo}</h3>
                <p style={{ fontSize: 15, color: 'var(--tinta-3)' }}>{e.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="secao secao-fundo">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <Faq perguntas={item.faq} />
        </div>
      </section>

      <section className="secao">
        <div className="wrap">
          <div className="secao-cabeca">
            <h2>Outros atendimentos</h2>
          </div>
          <div className="grade g3">
            {outras.map((o) => (
              <Link className="cartao cartao-link" href={`/para-voce/${o.slug}`} key={o.slug}>
                <h3>{o.nome}</h3>
                <p>{o.chamada}</p>
                <span className="cartao-seta">Ver detalhes →</span>
              </Link>
            ))}
            <Link className="cartao cartao-link" href="/para-voce">
              <h3>Consulta clínica</h3>
              <p>Avaliação médica, orientação preventiva e acompanhamento com médica clínica.</p>
              <span className="cartao-seta">Ver detalhes →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="secao secao-fundo">
        <div className="wrap">
          <div className="cta-bloco">
            <div>
              <h2>Agende seu horário de {item.nome.toLowerCase()}</h2>
              <p>
                {site.endereco.rua} · {site.endereco.bairro} · {site.endereco.cidade}/
                {site.endereco.uf}
              </p>
            </div>
            <div className="acoes">
              <a
                className="btn btn-claro"
                href={whatsappUrl(`Olá! Gostaria de agendar um atendimento de ${item.nome.toLowerCase()}.`)}
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
