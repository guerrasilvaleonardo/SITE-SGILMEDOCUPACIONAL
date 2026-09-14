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
          <div className="container hero-grid">
            <div className="hero-conteudo">
              <Trilha itens={trilha} />

              <span className="selo">
                Atendimento particular em Porto Velho
              </span>

              <h1>
                Cuidar da sua saúde pode ser mais simples.
              </h1>

              <p className="hero-texto">
                Na ÁgilMed, você encontra atendimento particular com hora
                marcada, profissionais qualificados e uma experiência
                pensada para cuidar de você de forma humana, rápida e
                acolhedora.
              </p>

              <div className="hero-acoes">
                <a
                  className="botao botao-principal"
                  href={whatsappUrl(
                    'Olá! Gostaria de agendar um atendimento na ÁgilMed.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar atendimento
                </a>

                <a
                  className="botao botao-secundario"
                  href="#atendimentos"
                >
                  Conhecer especialidades
                </a>
              </div>

              <div className="hero-confianca">
                <span>✓ Hora marcada</span>
                <span>✓ Atendimento humanizado</span>
                <span>✓ Sem fila</span>
              </div>
            </div>

            <div className="hero-card">
              <span className="hero-card-label">
                ÁgilMed Ocupacional
              </span>

              <strong>
                Saúde, cuidado e prevenção em um só lugar.
              </strong>

              <p>
                Atendimento particular para você cuidar da sua saúde
                com mais praticidade e tranquilidade.
              </p>

              <div className="hero-card-info">
                <span>📍 Porto Velho – RO</span>
                <span>🕐 Atendimento com hora marcada</span>
              </div>
            </div>
          </div>
        </section>

        {/* ATENDIMENTOS */}
        <section
          className="secao"
          id="atendimentos"
        >
          <div className="container">
            <div className="cabecalho-secao">
              <span className="rotulo-secao">
                Atendimento particular
              </span>

              <h2>
                Encontre o cuidado que você precisa
              </h2>

              <p>
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
        <section className="secao secao-clara">
          <div className="container">
            <div className="duas-colunas">
              <div>
                <span className="rotulo-secao">
                  Exames ocupacionais
                </span>

                <h2>
                  Também cuidamos da sua saúde ocupacional
                </h2>

                <p>
                  Para empresas, trabalhadores e profissionais que
                  precisam realizar exames ocupacionais, a ÁgilMed
                  oferece atendimento organizado e acompanhamento
                  especializado.
                </p>

                <div className="lista-check">
                  <div>✓ Exames admissionais</div>
                  <div>✓ Exames periódicos</div>
                  <div>✓ Exames demissionais</div>
                  <div>✓ Exames de retorno ao trabalho</div>
                  <div>✓ Exames de mudança de função</div>
                </div>

                <a
                  className="botao botao-principal"
                  href={whatsappUrl(
                    'Olá! Gostaria de informações sobre exames ocupacionais na ÁgilMed.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar sobre exames
                </a>
              </div>

              <div className="painel-destaque">
                <span className="painel-icone">+</span>

                <h3>
                  Saúde ocupacional com agilidade
                </h3>

                <p>
                  Atendimento organizado para facilitar a rotina
                  de trabalhadores e empresas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DIFERENCIAL */}
        <section className="secao">
          <div className="container">
            <div className="cabecalho-secao">
              <span className="rotulo-secao">
                Por que escolher a ÁgilMed?
              </span>

              <h2>
                Uma experiência diferente de cuidar da saúde
              </h2>

              <p>
                Nosso atendimento foi pensado para oferecer
                praticidade sem abrir mão do cuidado humano.
              </p>
            </div>

            <div className="grade g4">
              <article className="mini-card">
                <span>01</span>
                <h3>Hora marcada</h3>
                <p>
                  Mais organização para você não perder tempo.
                </p>
              </article>

              <article className="mini-card">
                <span>02</span>
                <h3>Atendimento humanizado</h3>
                <p>
                  Você é tratado como pessoa, não apenas como
                  paciente.
                </p>
              </article>

              <article className="mini-card">
                <span>03</span>
                <h3>Profissionais qualificados</h3>
                <p>
                  Atendimento realizado por profissionais
                  preparados.
                </p>
              </article>

              <article className="mini-card">
                <span>04</span>
                <h3>Praticidade</h3>
                <p>
                  Agendamento simples e comunicação rápida.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="secao secao-clara">
          <div className="container">
            <div className="cabecalho-secao">
              <span className="rotulo-secao">
                Como funciona
              </span>

              <h2>
                Agendar seu atendimento é simples
              </h2>
            </div>

            <div className="passos">
              <div className="passo">
                <span>1</span>

                <div>
                  <h3>Escolha o atendimento</h3>
                  <p>
                    Encontre a especialidade ou serviço que você
                    precisa.
                  </p>
                </div>
              </div>

              <div className="passo">
                <span>2</span>

                <div>
                  <h3>Entre em contato</h3>
                  <p>
                    Fale conosco pelo WhatsApp e informe o
                    atendimento desejado.
                  </p>
                </div>
              </div>

              <div className="passo">
                <span>3</span>

                <div>
                  <h3>Escolha o melhor horário</h3>
                  <p>
                    Nossa equipe verifica a disponibilidade e
                    orienta você.
                  </p>
                </div>
              </div>

              <div className="passo">
                <span>4</span>

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

        {/* PARA QUEM JÁ TEM PEDIDO */}
        <section className="secao">
          <div className="container">
            <div className="duas-colunas">
              <div>
                <span className="rotulo-secao">
                  Já possui um pedido?
                </span>

                <h2>
                  Precisa realizar um exame ou atendimento
                  específico?
                </h2>

                <p>
                  Se você já possui uma solicitação médica ou
                  orientação profissional, entre em contato com
                  nossa equipe. Vamos orientar você sobre o
                  atendimento adequado.
                </p>

                <a
                  className="botao botao-principal"
                  href={whatsappUrl(
                    'Olá! Tenho um pedido médico e gostaria de saber como realizar o atendimento na ÁgilMed.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enviar meu pedido
                </a>
              </div>

              <div className="lista-beneficios">
                <div>
                  <strong>01</strong>
                  <span>Orientação sobre o atendimento</span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>Informações sobre documentos</span>
                </div>

                <div>
                  <strong>03</strong>
                  <span>Agendamento de horário</span>
                </div>

                <div>
                  <strong>04</strong>
                  <span>Atendimento organizado</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LINKS */}
        <section className="secao secao-clara">
          <div className="container">
            <div className="cabecalho-secao">
              <span className="rotulo-secao">
                Conheça também
              </span>

              <h2>
                Outros conteúdos da ÁgilMed
              </h2>

              <p>
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
        <section className="cta-final">
          <div className="container">
            <div className="cta-final-inner">
              <div>
                <span className="rotulo-secao">
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

              <a
                className="botao botao-principal"
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
        </section>
      </main>
    </>
  );
}
