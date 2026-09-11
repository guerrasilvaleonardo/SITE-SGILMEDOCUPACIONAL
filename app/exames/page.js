import Link from 'next/link';
import { exames, urlExame } from '@/lib/exames';
import { metadadosPagina, jsonLdBreadcrumb, whatsappUrl } from '@/lib/site';
import Trilha from '@/components/Trilha';
import JsonLd from '@/components/JsonLd';

export const metadata = metadadosPagina({
  titulo: 'Exames ocupacionais em Porto Velho',
  descricao:
    'Admissional, periódico, demissional, retorno ao trabalho, mudança de risco e exames complementares em Porto Velho, com ASO no mesmo dia.',
  caminho: '/exames',
});

const trilha = [
  { href: '/', rotulo: 'Início' },
  { href: '/exames', rotulo: 'Exames' },
];

export default function Exames() {
  return (
    <>
      <JsonLd dados={jsonLdBreadcrumb(trilha)} />
      <Trilha itens={trilha} />

      <section style={{ paddingBlock: '26px 48px' }}>
        <div className="wrap">
          <div className="secao-cabeca">
            <h1>Exames ocupacionais em Porto Velho</h1>
            <p className="lede">
              Avaliação clínica e exames complementares no mesmo endereço, com ASO emitido no mesmo
              dia — e o próximo vencimento já registrado no controle da sua empresa.
            </p>
          </div>
          <div className="acoes">
            <a className="btn btn-primario" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              Agendar pelo WhatsApp
            </a>
            <Link className="btn btn-secundario" href="/para-empresas">
              Ver planos para empresas
            </Link>
          </div>
        </div>
      </section>

      <section className="secao secao-fundo">
        <div className="wrap grade g3">
          {exames.map((e) => (
            <Link className="cartao cartao-link" href={urlExame(e.slug)} key={e.slug}>
              <h3>{e.nome}</h3>
              <p>{e.chamada}</p>
              <span className="cartao-seta">Ver detalhes →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="secao">
        <div className="wrap hero-grade">
          <div className="texto">
            <div className="secao-cabeca">
              <h2>Quem define quais exames cada função faz</h2>
            </div>
            <p>
              Não é a clínica nem o RH: é o PCMSO da empresa, elaborado a partir dos riscos
              identificados no PGR. Ele relaciona cada função aos seus riscos, aos exames
              correspondentes e à periodicidade de cada um.
            </p>
            <p>
              É por isso que programa desatualizado custa caro de duas formas: faltam exames que
              deveriam ser feitos e sobram exames que já não fazem sentido para aquela função.
            </p>
          </div>
          <div className="destaque">
            <span className="rotulo">Controle de prazos</span>
            <p style={{ fontSize: 16.5, lineHeight: 1.6 }}>
              Empresas atendidas pela ÁgilMed recebem todo mês o Boletim de Antecedência: uma página
              com tudo que vence nos próximos 90 dias, por colaborador e por setor.
            </p>
            <p style={{ marginTop: 12 }}>
              <Link href="/boletim">Entenda o Boletim →</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
