import Link from 'next/link';
import {
  site,
  whatsappUrl,
  metadadosPagina,
  jsonLdBreadcrumb,
  jsonLdFaq,
} from '@/lib/site';
import Trilha from '@/components/Trilha';
import Faq from '@/components/Faq';
import Check from '@/components/Check';
import JsonLd from '@/components/JsonLd';

export const metadata = metadadosPagina({
  titulo: 'Consulta clínica em Porto Velho',
  descricao:
    'Consulta clínica particular em Porto Velho para avaliação médica, orientação preventiva, investigação de sintomas e acompanhamento de saúde.',
  caminho: '/para-voce/consulta-clinica',
});

const trilha = [
  { href: '/', rotulo: 'Início' },
  { href: '/para-voce', rotulo: 'Para você' },
  {
    href: '/para-voce/consulta-clinica',
    rotulo: 'Consulta clínica',
  },
];

const perguntas = [
  {
    pergunta: 'Preciso agendar antes de ir?',
    resposta:
      'Sim. O atendimento é realizado com hora marcada. Entre em contato pelo WhatsApp para consultar horários, valores e formas de pagamento.',
  },
  {
    pergunta: 'Atendem convênio?',
    resposta:
      'No momento o atendimento é particular e não trabalhamos com convênios. Valores e formas de pagamento são informados antes do agendamento.',
  },
  {
    pergunta: 'Posso levar exames que já fiz?',
    resposta:
      'Sim. Levar exames recentes, receitas, relatórios ou outros documentos relacionados à sua saúde pode ajudar na avaliação médica.',
  },
  {
    pergunta: 'A consulta pode solicitar exames?',
    resposta:
      'Sim. Quando houver indicação clínica, a médica poderá solicitar exames complementares para auxiliar na investigação ou acompanhamento.',
  },
  {
    pergunta: 'Posso realizar os exames na própria ÁgilMed?',
    resposta:
      'Quando o exame estiver entre os serviços disponíveis, sim. A ÁgilMed oferece exames clínicos e coleta laboratorial no mesmo endereço.',
  },
  {
    pergunta: 'A consulta é somente para pessoas doentes?',
    resposta:
      'Não. A consulta também pode ser procurada para avaliação preventiva, acompanhamento de saúde, orientação e investigação de sintomas ou alterações percebidas.',
  },
];

const atendemos = [
  {
    titulo: 'Avaliação clínica',
    texto:
      'Investigação de sintomas, queixas e alterações percebidas no dia a dia.',
  },
  {
    titulo: 'Acompanhamento de saúde',
    texto:
      'Avaliação médica e acompanhamento de condições já conhecidas.',
  },
  {
    titulo: 'Orientação preventiva',
    texto:
      'Cuidados, hábitos e acompanhamento para manter a saúde em dia.',
  },
  {
    titulo: 'Investigação inicial',
    texto:
      'Avaliação médica e, quando necessário, solicitação de exames complementares.',
  },
];

export default function ConsultaClinica() {
  return (
    <>
      <JsonLd dados={jsonLdBreadcrumb(trilha)} />
      <JsonLd dados={jsonLdFaq(perguntas)} />

      <Trilha itens={trilha} />

      {/* HERO */}
      <section style={{ paddingBlock: '26px 52px' }}>
        <div className="wrap hero-grade">
          <div className="hero-texto">
            <span className="rotulo">
              Atendimento para a sociedade
            </span>

            <h1>Consulta clínica em Porto Velho</h1>

            <p className="lede">
              Avaliação médica, orientação preventiva e acompanhamento
              clínico para cuidar da sua saúde com tempo para ouvir,
              investigar e orientar.
            </p>

            <p
              className="mono"
              style={{
                fontSize: 12.5,
                letterSpacing: '0.06em',
                color: 'var(--tinta-4)',
              }}
            >
              ATENDIMENTO PARTICULAR · SEM CONVÊNIOS NO MOMENTO
            </p>

            <div className="acoes">
              <a
                className="btn btn-primario"
                href={whatsappUrl(
                  'Olá! Gostaria de agendar uma consulta clínica.'
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar pelo WhatsApp
              </a>

              <Link
                className="btn btn-secundario"
                href="/contato"
              >
                Ver contato
              </Link>
            </div>
          </div>

          <div
            className="cartao"
            style={{
              padding: 30,
              gap: 14,
            }}
          >
            <span className="rotulo">
              Consulta médica
            </span>

            <h3 style={{ fontSize: 21 }}>
              Um atendimento para olhar sua saúde como um todo.
            </h3>

            <p>
              A consulta clínica começa pela escuta: o que você está
              sentindo, há quanto tempo, o que mudou e quais fatores
              podem estar relacionados.
            </p>

            <p>
              A partir dessa avaliação, a médica orienta os próximos
              passos e, quando necessário, solicita exames ou
              encaminhamentos.
            </p>

            <p>
              Atendimento com hora marcada em{' '}
              {site.endereco.bairro}, {site.endereco.cidade}/
              {site.endereco.uf}.
            </p>
          </div>
        </div>
      </section>

      {/* COMO É O ATENDIMENTO */}
      <section className="secao secao-fundo">
        <div className="wrap hero-grade">
          <div className="texto">
            <div className="secao-cabeca">
              <h2>Como é o atendimento</h2>
            </div>

            <p>
              A consulta é um momento para entender o que está
              acontecendo com você antes de decidir quais são os
              próximos passos.
            </p>

            <p>
              A médica avalia seu histórico, seus sintomas, hábitos,
              medicamentos em uso e outros fatores relevantes para
              construir uma visão mais completa do seu estado de saúde.
            </p>

            <p>
              Quando houver necessidade, poderão ser solicitados exames
              complementares ou encaminhamento para outro profissional.
            </p>
          </div>

          <div>
            <div className="secao-cabeca">
              <h2>O que podemos avaliar</h2>
            </div>

            <div className="lista-checada">
              {atendemos.map((item) => (
                <div
                  className="item-checado"
                  key={item.titulo}
                >
                  <Check />

                  <p>
                    <strong>{item.titulo}</strong> — {item.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="secao">
        <div className="wrap">
          <div className="secao-cabeca">
            <h2>Como funciona</h2>
          </div>

          <div className="grade g3">
            {[
              {
                n: '01',
                titulo: 'Agendamento',
                texto:
                  'Entre em contato pelo WhatsApp e informe que deseja agendar uma consulta clínica. A equipe confirma horários, valores e orientações.',
              },
              {
                n: '02',
                titulo: 'Consulta',
                texto:
                  'No horário marcado, a médica conversa com você, avalia seu histórico e realiza a avaliação clínica necessária.',
              },
              {
                n: '03',
                titulo: 'Próximos passos',
                texto:
                  'Ao final, você recebe as orientações e, quando necessário, pedidos de exames, encaminhamentos ou acompanhamento.',
              },
            ].map((item, i) => (
              <div
                key={item.n}
                style={{
                  borderTop: `2px solid ${
                    i === 0
                      ? 'var(--azul-claro)'
                      : 'var(--linha)'
                  }`,
                  paddingTop: 14,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                }}
              >
                <span
                  className="mono"
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color:
                      i === 0
                        ? 'var(--azul-claro)'
                        : 'var(--tinta-4)',
                  }}
                >
                  {item.n}
                </span>

                <h3>{item.titulo}</h3>

                <p
                  style={{
                    fontSize: 15,
                    color: 'var(--tinta-3)',
                  }}
                >
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXAMES */}
      <section className="secao secao-fundo">
        <div className="wrap">
          <div className="secao-cabeca">
            <h2>Consulta e exames no mesmo endereço</h2>

            <p>
              Quando houver necessidade de exames, a ÁgilMed também
              oferece diferentes serviços clínicos no mesmo endereço.
            </p>
          </div>

          <div className="grade g2">
            <Link
              className="cartao cartao-link"
              href="/exames-clinicos"
            >
              <span className="rotulo">
                Exames clínicos
              </span>

              <h3>
                ECG, EEG, audiometria e procedimentos
              </h3>

              <p>
                Conheça os exames clínicos disponíveis e as orientações
                de preparo para cada procedimento.
              </p>

              <span className="cartao-seta">
                Ver exames →
              </span>
            </Link>

            <Link
              className="cartao cartao-link"
              href="/exames-laboratoriais-porto-velho"
            >
              <span className="rotulo">
                Laboratório
              </span>

              <h3>Exames laboratoriais</h3>

              <p>
                Coleta laboratorial no próprio endereço, com orientação
                sobre preparo e jejum.
              </p>

              <span className="cartao-seta">
                Ver exames laboratoriais →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="secao">
        <div
          className="wrap"
          style={{ maxWidth: 820 }}
        >
          <Faq perguntas={perguntas} />
        </div>
      </section>

      {/* OUTROS ATENDIMENTOS */}
      <section className="secao secao-fundo">
        <div className="wrap">
          <div className="secao-cabeca">
            <h2>Outros atendimentos</h2>
          </div>

          <div className="grade g3">
            <Link
              className="cartao cartao-link"
              href="/para-voce/fisioterapia"
            >
              <h3>Fisioterapia</h3>

              <p>
                Avaliação funcional e plano de tratamento individual
                para recuperar movimento e função.
              </p>

              <span className="cartao-seta">
                Ver detalhes →
              </span>
            </Link>

            <Link
              className="cartao cartao-link"
              href="/para-voce/psicologia"
            >
              <h3>Psicologia</h3>

              <p>
                Espaço reservado para falar sobre o que está pesando,
                com acompanhamento profissional.
              </p>

              <span className="cartao-seta">
                Ver detalhes →
              </span>
            </Link>

            <Link
              className="cartao cartao-link"
              href="/para-voce/nutricao"
            >
              <h3>Nutrição</h3>

              <p>
                Avaliação e plano alimentar individual, construído a
                partir da sua rotina real.
              </p>

              <span className="cartao-seta">
                Ver detalhes →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="secao">
        <div className="wrap">
          <div className="cta-bloco">
            <div>
              <h2>Agende sua consulta clínica</h2>

              <p>
                {site.endereco.rua} · {site.endereco.bairro} ·{' '}
                {site.endereco.cidade}/{site.endereco.uf}
              </p>
            </div>

            <div className="acoes">
              <a
                className="btn btn-claro"
                href={whatsappUrl(
                  'Olá! Gostaria de agendar uma consulta clínica.'
                )}
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
