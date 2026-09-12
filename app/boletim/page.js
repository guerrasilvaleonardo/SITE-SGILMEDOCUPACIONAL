import Link from 'next/link';
import { metadadosPagina, jsonLdBreadcrumb } from '@/lib/site';
import Trilha from '@/components/Trilha';
import JsonLd from '@/components/JsonLd';
import Formulario from '@/components/Formulario';
import Check from '@/components/Check';

export const metadata = metadadosPagina({
  titulo: 'Boletim de Antecedência',
  descricao:
    'Benefício exclusivo para empresas clientes da ÁgilMed: uma página por mês com os vencimentos dos próximos 90 dias.',
  caminho: '/boletim',
});

const trilha = [
  { href: '/', rotulo: 'Início' },
  { href: '/boletim', rotulo: 'Boletim de Antecedência' },
];

const itens = [
  { nome: 'PCMSO — revisão anual', data: '18 out', cor: 'ponto-vermelho' },
  { nome: 'Periódicos — produção, 14 pessoas', data: '24 out', cor: 'ponto-vermelho' },
  { nome: 'Toxicológico — 3 motoristas', data: '02 nov', cor: 'ponto-vermelho' },
  { nome: 'NR-35 — reciclagem, 6 pessoas', data: '21 nov', cor: 'ponto-ambar' },
  { nome: 'PGR — inventário de riscos', data: '04 dez', cor: 'ponto-ambar' },
  { nome: 'CIPA — processo eleitoral', data: '03 jan', cor: 'ponto-azul' },
];

export default function Boletim() {
  return (
    <>
      <JsonLd dados={jsonLdBreadcrumb(trilha)} />
      <Trilha itens={trilha} />

      <section style={{ paddingBlock: '26px 56px' }}>
        <div className="wrap hero-grade">
          <div className="hero-texto">
            <span className="rotulo">Exclusivo para clientes · todo dia 5</span>
            <h1>O que vence na sua empresa nos próximos 90 dias</h1>
            <p className="lede">
              Uma página, uma vez por mês. Programas, periódicos por setor, treinamentos de NR,
              toxicológicos e ASOs a expirar — organizados por urgência, com o nome de quem precisa.
            </p>
            <div className="lista-checada">
              {[
                ['Chega antes da urgência', 'Você vê o prazo enquanto ainda dá para agendar com calma.'],
                ['Cabe em uma página', 'Sem relatório de 40 páginas que ninguém abre.'],
                ['Nome a nome', 'Quem precisa de exame, quando, e de qual exame.'],
              ].map(([t, d]) => (
                <div className="item-checado" key={t}>
                  <Check />
                  <p>
                    <strong>{t}</strong> — {d}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="boletim">
            <div className="boletim-topo">
              <strong>Boletim de Antecedência</strong>
              <span>EXEMPLO</span>
            </div>
            <div className="boletim-corpo">
              <div className="boletim-legenda">O que vence nos próximos 90 dias</div>
              {itens.map((i) => (
                <div className="boletim-item" key={i.nome}>
                  <span className="boletim-item-nome">
                    <span className={`ponto ${i.cor}`} />
                    {i.nome}
                  </span>
                  <span className="boletim-item-data">{i.data}</span>
                </div>
              ))}
              <div className="boletim-rodape">
                <span>12 itens em dia</span>
                <span className="mono" style={{ fontSize: 12, color: 'var(--tinta-4)' }}>
                  EXEMPLO ILUSTRATIVO
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="secao secao-fundo">
        <div className="wrap hero-grade">
          <div>
            <div className="secao-cabeca">
              <h2>Ative o boletim da sua empresa</h2>
              <p style={{ color: 'var(--tinta-3)' }}>
                Informe o CNPJ cliente e o contato do responsável. Confirmaremos o cadastro da empresa
                antes de preparar o primeiro boletim.
              </p>
            </div>
            <Formulario
              origem="boletim"
              campos={['empresa', 'cnpj', 'email', 'telefone', 'colaboradores']}
              rotuloEnvio="Solicitar ativação do boletim"
              textoSucesso="Recebemos os dados. Vamos validar o CNPJ na base de clientes da ÁgilMed e entrar em contato com o responsável."
            />
          </div>
          <div className="cartao" style={{ padding: 30, gap: 12 }}>
            <span className="rotulo">Como funciona depois</span>
            <p>
              O Boletim de Antecedência é um benefício exclusivo para CNPJs clientes da ÁgilMed. Após
              a validação do cadastro, o envio passa a ser mensal, sempre no dia 5, com os dados de
              exames, programas e demais vencimentos acompanhados pela clínica.
            </p>
            <p>
              Sua empresa ainda não é cliente?{' '}
              <Link href="/para-empresas">Conheça as soluções empresariais da ÁgilMed</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
