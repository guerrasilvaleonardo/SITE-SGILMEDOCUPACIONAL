import Link from 'next/link';
import { programas } from '@/lib/programas';
import { metadadosPagina, jsonLdBreadcrumb } from '@/lib/site';
import Trilha from '@/components/Trilha';
import JsonLd from '@/components/JsonLd';

export const metadata = metadadosPagina({
  titulo: 'Programas e documentos de saúde ocupacional',
  descricao:
    'PCMSO, eventos de SST do eSocial e gestão de afastados em Porto Velho, com coordenação médica e controle de prazos.',
  caminho: '/programas-e-laudos',
});

const trilha = [
  { href: '/', rotulo: 'Início' },
  { href: '/programas-e-laudos', rotulo: 'Programas e laudos' },
];

export default function Programas() {
  return (
    <>
      <JsonLd dados={jsonLdBreadcrumb(trilha)} />
      <Trilha itens={trilha} />

      <section style={{ paddingBlock: '26px 48px' }}>
        <div className="wrap">
          <div className="secao-cabeca">
            <h1>Programas e documentos</h1>
            <p className="lede">
              O que sustenta a rotina de exames: o programa médico, os eventos de SST do eSocial e o
              acompanhamento dos colaboradores afastados.
            </p>
          </div>
        </div>
      </section>

      <section className="secao secao-fundo" style={{ paddingTop: 0, background: '#fff' }}>
        <div className="wrap grade g3">
          {programas.map((p) => (
            <Link className="cartao cartao-link" href={`/programas-e-laudos/${p.slug}`} key={p.slug}>
              <h3>{p.nome}</h3>
              <p>{p.chamada}</p>
              <span className="cartao-seta">Ver detalhes →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="secao secao-fundo">
        <div className="wrap hero-grade">
          <div className="texto">
            <div className="secao-cabeca">
              <span className="rotulo">Engenharia de segurança</span>
              <h2>PGR, LTCAT e laudos técnicos</h2>
            </div>
            <p>
              Os documentos de engenharia — PGR, inventário de riscos, LTCAT, laudos de insalubridade
              e periculosidade, PPP e treinamentos de NR — são elaborados pela{' '}
              <strong>Real Life SSMA</strong>, empresa de engenharia de SSMA com responsável técnico
              registrado no CREA-RO.
            </p>
            <p>
              Para a sua empresa isso significa um fluxo só: o risco que a engenharia identifica vira
              exame no PCMSO, e o que o exame encontra volta para a revisão do programa — sem
              costurar dois fornecedores que não se falam.
            </p>
            <p>
              <a href="https://www.reallifessma.com.br" target="_blank" rel="noopener">
                Conhecer a Real Life SSMA →
              </a>
            </p>
          </div>
          <div className="cartao" style={{ padding: 30, gap: 12 }}>
            <span className="rotulo">Em conjunto</span>
            <h3 style={{ fontSize: 22 }}>Riscos psicossociais da NR-1</h3>
            <p>
              A avaliação é conduzida por psicólogo, o inventário entra no PGR assinado por
              responsável técnico e o acompanhamento clínico fica com o médico do trabalho. Um
              contrato, um relatório.
            </p>
            <p style={{ marginTop: 6 }}>
              <Link href="/riscos-psicossociais-nr1">Ver como funciona →</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
