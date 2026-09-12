import Link from 'next/link';
import { metadadosPagina, jsonLdBreadcrumb } from '@/lib/site';
import Trilha from '@/components/Trilha';
import JsonLd from '@/components/JsonLd';
import Formulario from '@/components/Formulario';
import Check from '@/components/Check';

export const metadata = metadadosPagina({
  titulo: 'Boletim de Antecedência',
  descricao:
    'Uma página por mês com tudo que vence na sua empresa nos próximos 90 dias: programas, periódicos, treinamentos e ASOs.',
  caminho: '/boletim',
});

const trilha = [
  { href: '/', rotulo: 'Início' },
  { href: '/boletim', rotulo: 'Boletim de Antecedência' },
];

const itens = [
  { nome: 'Audiometrias do setor de produção', data: '18 out', cor: 'ponto-vermelho' },
  { nome: 'Periódicos — produção, 14 pessoas', data: '24 out', cor: 'ponto-vermelho' },
  { nome: 'Toxicológico — 3 motoristas', data: '02 nov', cor: 'ponto-vermelho' },
  { nome: 'NR-35 — reciclagem, 6 pessoas', data: '21 nov', cor: 'ponto-ambar' },
  { nome: 'Complementares da frota', data: '04 dez', cor: 'ponto-ambar' },
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
            <span className="rotulo">Grátis · todo dia 5</span>
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
              <h2>Peça o da sua empresa</h2>
              <p style={{ color: 'var(--tinta-3)' }}>
                Mande o CNPJ e o contato do responsável. Levantamos o que já está vencido ou perto de
                vencer e devolvemos o primeiro boletim.
              </p>
            </div>
            <Formulario
              origem="boletim"
              campos={['empresa', 'cnpj', 'email', 'telefone', 'colaboradores']}
              rotuloEnvio="Receber o primeiro boletim"
              textoSucesso="Recebemos os dados. Vamos levantar os vencimentos e devolver o primeiro boletim em até 2 dias úteis."
            />
          </div>
          <div className="cartao" style={{ padding: 30, gap: 12 }}>
            <span className="rotulo">Como funciona depois</span>
            <p>
              A partir do primeiro boletim, o envio passa a ser mensal, sempre no dia 5. Empresas
              atendidas pela ÁgilMed recebem com os dados completos de exames e programas; para as
              demais, montamos a partir do que você informar.
            </p>
            <p>
              Quer entender o que entra em cada linha?{' '}
              <Link href="/para-empresas">Veja a gestão completa de SST</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
