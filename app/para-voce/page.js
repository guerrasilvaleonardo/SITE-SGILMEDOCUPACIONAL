import Link from 'next/link';
import { especialidades } from '@/lib/especialidades';
import {
  site,
  whatsappUrl,
  metadadosPagina,
  jsonLdBreadcrumb,
} from '@/lib/site';
import Trilha from '@/components/Trilha';
import JsonLd from '@/components/JsonLd';

export const metadata = metadadosPagina({
  titulo: 'Atendimento clínico em Porto Velho',
  descricao:
    'Atendimento particular em Porto Velho com consulta clínica, fisioterapia, psicologia, nutrição e exames. Hora marcada, atendimento humanizado e sem fila.',
  caminho: '/para-voce',
});

const trilha = [
  { href: '/', rotulo: 'Início' },
  { href: '/para-voce', rotulo: 'Para você' },
];

export default function ParaVoce() {
  return (
    <>
      <JsonLd dados={jsonLdBreadcrumb(trilha)} />
      <Trilha itens={trilha} />

      {/* HERO */}
      <section style={{ paddingBlock: '26px 52px' }}>
        <div className="wrap hero-grade">
          <div className="hero-texto">
            <span className="rotulo">Atendimento para a sociedade</span>

            <h1>
              Cuidado para você,
              <br />
              no momento em que precisa.
            </h1>

            <p className="lede">
              Consulta clínica, fisioterapia, psicologia, nutrição e exames
              clínicos em Porto Velho — com hora marcada, atendimento
              particular e sem fila.
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
                  'Olá! Gostaria de agendar um atendimento na ÁgilMed.'
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar pelo WhatsApp
              </a>

              <a className="btn btn-secundario" href="#atendimentos">
                Ver atendimentos
              </a>
            </div>
          </div>

          <div className="cartao" style={{ padding: 30, gap: 14 }}>
            <span className="rotulo">ÁgilMed</span>

            <h3 style={{ fontSize: 22 }}>
              Consulta, cuidado e exame no mesmo endereço.
            </h3>

            <p>
              Você não precisa transformar uma necessidade simples de saúde em
              uma maratona de endereços, filas e deslocamentos.
            </p>

            <p>
              Na ÁgilMed, diferentes atendimentos e exames estão reunidos em um
              único lugar, com agendamento e orientação antes da sua chegada.
            </p>

            <p>
              {site.endereco.rua}
              <br />
              {site.endereco.bairro} · {site.endereco.cidade}/
              {site.endereco.uf}
            </p>
          </div>
        </div>
      </section>

      {/* ATENDIMENTOS */}
      <section className="secao secao-fundo" id="atendimentos">
        <div className="wrap">
          <div className="secao-cabeca">
            <h2>Encontre o atendimento que você precisa</h2>

            <p>
              Atendimento particular para diferentes necessidades de saúde,
              sempre com hora marcada.
            </p>
          </div>

          <div className="grade g3">
            {especialidades.map((item) => (
              <Link
                className="cartao cartao-link"
                href={`/para-voce/${item.slug}`}
                key={item.slug}
              >
                <span className="rotulo">Atendimento particular</span>

                <h3>{item.nome}</h3>

                <p>{item.chamada}</p>

                <span className="cartao-seta">
                  Ver detalhes →
                </span>
              </Link>
            ))}

            {/* CONSULTA CLÍNICA */}
            <Link
              className="cartao cartao-link"
              href="/para-voce/consulta-clinica"
            >
              <span className="rotulo">Medicina</span>

              <h3>Consulta clínica</h3>

              <p>
                Avaliação médica, orientação preventiva e acompanhamento
                clínico, com atendimento particular e hora marcada.
              </p>

              <span className="cartao-seta">
                Ver detalhes →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* EXAMES */}
      <section className="secao">
        <div className="wrap">
          <div className="secao-cabeca">
            <h2>Exames no mesmo endereço</h2>

            <p>
              Além dos atendimentos clínicos, a ÁgilMed realiza exames e
              procedimentos para facilitar sua jornada de cuidado.
            </p>
          </div>

          <div className="grade g2">
            <Link
              className="cartao cartao-link"
              href="/exames-clinicos"
            >
              <span className="rotulo">Exames clínicos</span>

              <h3>ECG, EEG, audiometria e procedimentos</h3>

              <p>
                Eletrocardiograma, eletroencefalograma, audiometria, coleta
                laboratorial e procedimentos de enfermagem, com agendamento.
              </p>

              <span className="cartao-seta">
                Conhecer os exames →
              </span>
            </Link>

            <Link
              className="cartao cartao-link"
              href="/exames-laboratoriais-porto-velho"
            >
              <span className="rotulo">Laboratório</span>

              <h3>Exames laboratoriais</h3>

              <p>
                Coleta de sangue e urina no próprio endereço, com orientação
                sobre preparo e jejum no momento do agendamento.
              </p>

              <span className="cartao-seta">
                Ver exames laboratoriais →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* DIFERENCIAL */}
      <section className="secao secao-fundo">
        <div className="wrap hero-grade">
          <div className="texto">
            <div className="secao-cabeca">
              <h2>Saúde não deveria ser complicada.</h2>
            </div>

            <p>
              Muitas vezes, cuidar da saúde significa conciliar consulta,
              exame, trabalho, deslocamento e horários diferentes.
            </p>

            <p>
              A proposta da ÁgilMed é tornar esse caminho mais simples:
              atendimento organizado, profissionais identificados, orientação
              clara e agendamento antes de você sair de casa.
            </p>

            <p>
              Quando houver necessidade de exame, você também pode realizar
              diferentes procedimentos no mesmo endereço.
            </p>
          </div>

          <div>
            <div className="secao-cabeca">
              <h2>Uma experiência mais organizada</h2>
            </div>

            <div className="lista-checada">
              <div className="item-checado">
                <span className="mono">01</span>
                <p>
                  <strong>Hora marcada</strong> — você sabe quando será
                  atendido.
                </p>
              </div>

              <div className="item-checado">
                <span className="mono">02</span>
                <p>
                  <strong>Orientação antes da ida</strong> — preparo, documentos
                  e informações são confirmados no agendamento.
                </p>
              </div>

              <div className="item-checado">
                <span className="mono">03</span>
                <p>
                  <strong>Vários serviços no mesmo endereço</strong> — menos
                  deslocamentos para resolver o que precisa.
                </p>
              </div>

              <div className="item-checado">
                <span className="mono">04</span>
                <p>
                  <strong>Atendimento particular</strong> — valores e formas
                  de pagamento informados antes do agendamento.
                </p>
              </div>
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
                titulo: 'Escolha o atendimento',
                texto:
                  'Veja a especialidade ou exame que você precisa e confira os detalhes.',
              },
              {
                n: '02',
                titulo: 'Agende pelo WhatsApp',
                texto:
                  'Informe o que precisa. A equipe confirma disponibilidade, valores e orientações.',
              },
              {
                n: '03',
                titulo: 'Venha no horário combinado',
                texto:
                  'Chegue no endereço informado, com os documentos e preparos necessários para o seu atendimento.',
              },
            ].map((e, i) => (
              <div
                key={e.n}
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
                  {e.n}
                </span>

                <h3>{e.titulo}</h3>

                <p
                  style={{
                    fontSize: 15,
                    color: 'var(--tinta-3)',
                  }}
                >
                  {e.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUEM JÁ TEM PEDIDO */}
      <section className="secao secao-fundo">
        <div className="wrap">
          <div className="secao-cabeca">
            <h2>Já sabe o que precisa?</h2>

            <p>
              Se você já tem pedido médico ou sabe qual exame precisa realizar,
              pode falar diretamente com nossa equipe.
            </p>
          </div>

          <div className="grade g2">
            <div className="cartao">
              <span className="rotulo">Tenho um pedido</span>

              <h3>Quero agendar um exame</h3>

              <p>
                Envie pelo WhatsApp o nome do exame ou uma foto do pedido.
                Nossa equipe orienta sobre preparo, valor e horário.
              </p>

              <div className="acoes">
                <a
                  className="btn btn-primario"
                  href={whatsappUrl(
                    'Olá! Tenho um pedido de exame e gostaria de verificar o agendamento.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enviar pelo WhatsApp
                </a>
              </div>
            </div>

            <div className="cartao">
              <span className="rotulo">Ainda não sei</span>

              <h3>Preciso conversar com um profissional</h3>

              <p>
                Se você não sabe qual atendimento procurar, entre em contato
                com a equipe para receber orientação sobre o serviço adequado.
              </p>

              <div className="acoes">
                <a
                  className="btn btn-secundario"
                  href={whatsappUrl(
                    'Olá! Não sei qual atendimento preciso. Gostaria de orientação.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar com a equipe
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LINKS */}
      <section className="secao">
        <div className="wrap">
          <div className="secao-cabeca">
            <h2>Veja também</h2>
          </div>

          <div className="grade g3">
            <Link
              className="cartao cartao-link"
              href="/exames-clinicos"
            >
              <h3>Exames clínicos</h3>

              <p>
                ECG, EEG, audiometria, coleta laboratorial e procedimentos de
                enfermagem.
              </p>

              <span className="cartao-seta">
                Ver detalhes →
              </span>
            </Link>

            <Link
              className="cartao cartao-link"
              href="/equipe"
            >
              <h3>Nossa equipe</h3>

              <p>
                Conheça os profissionais, registros e áreas de atuação.
              </p>

              <span className="cartao-seta">
                Conhecer equipe →
              </span>
            </Link>

            <Link
              className="cartao cartao-link"
              href="/exames"
            >
              <h3>Exames ocupacionais</h3>

              <p>
                Admissional, periódico, demissional e retorno ao trabalho para
                empresas.
              </p>

              <span className="cartao-seta">
                Para empresas →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="secao secao-fundo">
        <div className="wrap">
          <div className="cta-bloco">
            <div>
              <h2>Precisa de atendimento?</h2>

              <p>
                Fale com a ÁgilMed e encontre o melhor horário para você.
              </p>

              <p>
                {site.endereco.rua} · {site.endereco.bairro} ·{' '}
                {site.endereco.cidade}/{site.endereco.uf}
              </p>
            </div>

            <div className="acoes">
              <a
                className="btn btn-claro"
                href={whatsappUrl(
                  'Olá! Gostaria de agendar um atendimento na ÁgilMed.'
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
```

**Importante:** esse arquivo agora está correto para que **Consulta clínica não abra mais o WhatsApp diretamente**.

O próximo arquivo que precisamos criar é:

```text
app/para-voce/consulta-clinica/page.js
```

É nele que vamos colocar a página completa da consulta, com **informações, benefícios, como funciona, perguntas frequentes e o botão final de WhatsApp**.
