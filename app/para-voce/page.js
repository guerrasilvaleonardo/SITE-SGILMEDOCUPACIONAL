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

export default function ParaVocePage() {
  return (
    <>
      <JsonLd dados={jsonLdBreadcrumb(trilha)} />

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="wrap hero-grade">
            <div className="hero-texto">
              <Trilha itens={trilha} />

              <span className="rotulo">
                Atendimento particular em Porto Velho
              </span>

              <h1>
                Cuidar da sua saúde pode ser mais simples.
              </h1>

              <p className="lede">
                Na ÁgilMed, você encontra atendimento particular com
                hora marcada, profissionais qualificados e uma
                experiência pensada para cuidar de você de forma
                humana, rápida e acolhedora.
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
                  Agendar atendimento
                </a>

                <a
                  className="btn btn-secundario"
                  href="#atendimentos"
                >
                  Conhecer especialidades
                </a>
              </div>
            </div>

            <div className="boletim">
              <div className="boletim-topo">
                <strong>ÁgilMed Ocupacional</strong>
                <span>ATENDIMENTO</span>
              </div>

              <div className="boletim-corpo">
                <p className="boletim-legenda">
                  Saúde, cuidado e prevenção em um só lugar.
                </p>

                <div className="boletim-item">
                  <div className="boletim-item-nome">
                    <span className="ponto ponto-azul" />
                    Consulta clínica
                  </div>

                  <span className="boletim-item-data">
                    Particular
                  </span>
                </div>

                <div className="boletim-item">
                  <div className="boletim-item-nome">
                    <span className="ponto ponto-verde" />
                    Fisioterapia
                  </div>

                  <span className="boletim-item-data">
                    Particular
                  </span>
                </div>

                <div className="boletim-item">
                  <div className="boletim-item-nome">
                    <span className="ponto ponto-azul" />
                    Psicologia
                  </div>

                  <span className="boletim-item-data">
                    Particular
                  </span>
                </div>

                <div className="boletim-item">
                  <div className="boletim-item-nome">
                    <span className="ponto ponto-verde" />
                    Nutrição
                  </div>

                  <span className="boletim-item-data">
                    Particular
                  </span>
                </div>

                <div className="boletim-rodape">
                  <span>✓ Hora marcada</span>
                  <span>Porto Velho – RO</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ATENDIMENTOS */}
        <section
          className="secao"
          id="atendimentos"
        >
          <div className="wrap">
            <div className="secao-cabeca">
              <span className="rotulo">
                Atendimento particular
              </span>

              <h2>
                Encontre o cuidado que você precisa
              </h2>

              <p className="lede">
                Escolha uma especialidade e conheça os serviços
                disponíveis na ÁgilMed.
              </p>
            </div>

            <div className="grade g3">
              {especialidades.map((item) => (
                <Link
                  className="cartao cartao-link"
                  href={`/para-voce/${item.slug}`}
                  key={item.slug}
                >
                  <span className="rotulo">
                    Atendimento particular
                  </span>

                  <h3>{item.nome}</h3>

                  <p>{item.chamada}</p>

                  <span className="cartao-seta">
                    Ver detalhes →
                  </span>
                </Link>
              ))}

              <Link
                className="cartao cartao-link"
                href="/para-voce/consulta-clinica"
              >
                <span className="rotulo">
                  Medicina
                </span>

                <h3>Consulta clínica</h3>

                <p>
                  Avaliação médica, orientação preventiva e
                  acompanhamento clínico, com atendimento particular
                  e hora marcada.
                </p>

                <span className="cartao-seta">
                  Ver detalhes →
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* EXAMES */}
        <section className="secao secao-fundo">
          <div className="wrap">
            <div className="grade g2">
              <div>
                <div className="secao-cabeca">
                  <span className="rotulo">
                    Exames ocupacionais
                  </span>

                  <h2>
                    Também cuidamos da sua saúde ocupacional
                  </h2>
                </div>

                <div className="texto">
                  <p>
                    Para empresas, trabalhadores e profissionais que
                    precisam realizar exames ocupacionais, a ÁgilMed
                    oferece atendimento organizado e acompanhamento
                    especializado.
                  </p>
                </div>

                <div className="lista-checada">
                  <div className="item-checado">
                    <span className="ponto ponto-verde" />
                    <div>
                      <strong>Exames admissionais</strong>
                    </div>
                  </div>

                  <div className="item-checado">
                    <span className="ponto ponto-verde" />
                    <div>
                      <strong>Exames periódicos</strong>
                    </div>
                  </div>

                  <div className="item-checado">
                    <span className="ponto ponto-verde" />
                    <div>
                      <strong>Exames demissionais</strong>
                    </div>
                  </div>

                  <div className="item-checado">
                    <span className="ponto ponto-verde" />
                    <div>
                      <strong>Retorno ao trabalho</strong>
                    </div>
                  </div>

                  <div className="item-checado">
                    <span className="ponto ponto-verde" />
                    <div>
                      <strong>Mudança de função</strong>
                    </div>
                  </div>
                </div>

                <div className="acoes">
                  <a
                    className="btn btn-primario"
                    href={whatsappUrl(
                      'Olá! Gostaria de informações sobre exames ocupacionais na ÁgilMed.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Falar sobre exames
                  </a>
                </div>
              </div>

              <div className="boletim">
                <div className="boletim-topo">
                  <strong>Saúde ocupacional</strong>
                  <span>ÁGILMED</span>
                </div>

                <div className="boletim-corpo">
                  <p className="boletim-legenda">
                    Atendimento organizado para facilitar a rotina
                    de trabalhadores e empresas.
                  </p>

                  <div className="boletim-item">
                    <div className="boletim-item-nome">
                      <span className="ponto ponto-verde" />
                      Atendimento
                    </div>

                    <span className="boletim-item-data">
                      Organizado
                    </span>
                  </div>

                  <div className="boletim-item">
                    <div className="boletim-item-nome">
                      <span className="ponto ponto-azul" />
                      Agendamento
                    </div>

                    <span className="boletim-item-data">
                      Hora marcada
                    </span>
                  </div>

                  <div className="boletim-item">
                    <div className="boletim-item-nome">
                      <span className="ponto ponto-verde" />
                      Orientação
                    </div>

                    <span className="boletim-item-data">
                      Equipe ÁgilMed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section className="secao">
          <div className="wrap">
            <div className="secao-cabeca">
              <span className="rotulo">
                Por que escolher a ÁgilMed?
              </span>

              <h2>
                Uma experiência diferente de cuidar da saúde
              </h2>

              <p className="lede">
                Nosso atendimento foi pensado para oferecer
                praticidade sem abrir mão do cuidado humano.
              </p>
            </div>

            <div className="grade g4">
              <article className="cartao">
                <span className="rotulo">01</span>
                <h3>Hora marcada</h3>
                <p>
                  Mais organização para você não perder tempo.
                </p>
              </article>

              <article className="cartao">
                <span className="rotulo">02</span>
                <h3>Atendimento humanizado</h3>
                <p>
                  Você é tratado como pessoa, não apenas como
                  paciente.
                </p>
              </article>

              <article className="cartao">
                <span className="rotulo">03</span>
                <h3>Profissionais qualificados</h3>
                <p>
                  Atendimento realizado por profissionais
                  preparados.
                </p>
              </article>

              <article className="cartao">
                <span className="rotulo">04</span>
                <h3>Praticidade</h3>
                <p>
                  Agendamento simples e comunicação rápida.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="secao secao-fundo">
          <div className="wrap">
            <div className="secao-cabeca">
              <span className="rotulo">
                Como funciona
              </span>

              <h2>
                Agendar seu atendimento é simples
              </h2>
            </div>

            <div className="lista-checada">
              <div className="item-checado">
                <span className="rotulo">01</span>

                <div>
                  <h3>Escolha o atendimento</h3>
                  <p>
                    Encontre a especialidade ou serviço que você
                    precisa.
                  </p>
                </div>
              </div>

              <div className="item-checado">
                <span className="rotulo">02</span>

                <div>
                  <h3>Entre em contato</h3>
                  <p>
                    Fale conosco pelo WhatsApp e informe o
                    atendimento desejado.
                  </p>
                </div>
              </div>

              <div className="item-checado">
                <span className="rotulo">03</span>

                <div>
                  <h3>Escolha o melhor horário</h3>
                  <p>
                    Nossa equipe verifica a disponibilidade e
                    orienta você.
                  </p>
                </div>
              </div>

              <div className="item-checado">
                <span className="rotulo">04</span>

                <div>
                  <h3>Compareça à ÁgilMed</h3>
                  <p>
                    Chegue no horário combinado e tenha uma
                    experiência tranquila.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PEDIDO MÉDICO */}
        <section className="secao">
          <div className="wrap">
            <div className="grade g2">
              <div>
                <div className="secao-cabeca">
                  <span className="rotulo">
                    Já possui um pedido?
                  </span>

                  <h2>
                    Precisa realizar um exame ou atendimento
                    específico?
                  </h2>
                </div>

                <div className="texto">
                  <p>
                    Se você já possui uma solicitação médica ou
                    orientação profissional, entre em contato com
                    nossa equipe. Vamos orientar você sobre o
                    atendimento adequado.
                  </p>
                </div>

                <div className="acoes">
                  <a
                    className="btn btn-primario"
                    href={whatsappUrl(
                      'Olá! Tenho um pedido médico e gostaria de saber como realizar o atendimento na ÁgilMed.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enviar meu pedido
                  </a>
                </div>
              </div>

              <div className="lista-checada">
                <div className="item-checado">
                  <span className="rotulo">01</span>
                  <div>
                    <strong>
                      Orientação sobre o atendimento
                    </strong>
                  </div>
                </div>

                <div className="item-checado">
                  <span className="rotulo">02</span>
                  <div>
                    <strong>
                      Informações sobre documentos
                    </strong>
                  </div>
                </div>

                <div className="item-checado">
                  <span className="rotulo">03</span>
                  <div>
                    <strong>
                      Agendamento de horário
                    </strong>
                  </div>
                </div>

                <div className="item-checado">
                  <span className="rotulo">04</span>
                  <div>
                    <strong>
                      Atendimento organizado
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LINKS */}
        <section className="secao secao-fundo">
          <div className="wrap">
            <div className="secao-cabeca">
              <span className="rotulo">
                Conheça também
              </span>

              <h2>
                Outros conteúdos da ÁgilMed
              </h2>

              <p className="lede">
                Acesse informações, orientações e conteúdos
                relacionados à saúde e segurança.
              </p>
            </div>

            <div className="grade g3">
              <Link
                className="cartao cartao-link"
                href="/para-empresas"
              >
                <span className="rotulo">
                  Empresas
                </span>

                <h3>
                  Soluções para empresas
                </h3>

                <p>
                  Conheça nossas soluções em saúde ocupacional e
                  segurança do trabalho.
                </p>

                <span className="cartao-seta">
                  Conhecer →
                </span>
              </Link>

              <Link
                className="cartao cartao-link"
                href="/blog"
              >
                <span className="rotulo">
                  Conteúdo
                </span>

                <h3>
                  Blog ÁgilMed
                </h3>

                <p>
                  Informação prática para cuidar melhor da sua
                  saúde.
                </p>

                <span className="cartao-seta">
                  Acessar blog →
                </span>
              </Link>

              <Link
                className="cartao cartao-link"
                href="/contato"
              >
                <span className="rotulo">
                  Fale conosco
                </span>

                <h3>
                  Entre em contato
                </h3>

                <p>
                  Tire suas dúvidas e fale com nossa equipe.
                </p>

                <span className="cartao-seta">
                  Falar conosco →
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="secao secao-escura">
          <div className="wrap">
            <div className="grade g2">
              <div>
                <span className="rotulo">
                  Pronto para cuidar de você?
                </span>

                <h2>
                  Agende seu atendimento na ÁgilMed.
                </h2>

                <p>
                  Atendimento particular em Porto Velho, com hora
                  marcada e cuidado humanizado.
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
                  Agendar pelo WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
