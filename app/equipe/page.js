import Link from 'next/link';
import { equipePublicada } from '@/lib/equipe';
import { site, whatsappUrl, metadadosPagina, jsonLdBreadcrumb, jsonLdFaq } from '@/lib/site';
import Trilha from '@/components/Trilha';
import Faq from '@/components/Faq';
import JsonLd from '@/components/JsonLd';

export const metadata = metadadosPagina({
  titulo: 'Nossa equipe',
  descricao:
    'Conheça a equipe da ÁgilMed em Porto Velho: medicina do trabalho, atendimento clínico, fisioterapia, psicologia, nutrição, fonoaudiologia e enfermagem, com nome e registro.',
  caminho: '/equipe',
});

const trilha = [
  { href: '/', rotulo: 'Início' },
  { href: '/equipe', rotulo: 'Nossa equipe' },
];

const perguntas = [
  {
    pergunta: 'Quem assina o ASO dos meus colaboradores?',
    resposta:
      'O médico examinador que realizou a avaliação, com nome e CRM no documento. A direção técnica da clínica é da Dra. Camila Sousa Ferreira, CRM-RO 9772. O PCMSO, que define quais exames cada função faz, é elaborado pela Real Life Engenharia de SSMA — a clínica executa o que o programa determina.',
  },
  {
    pergunta: 'Preciso de convênio para ser atendido por essa equipe?',
    resposta:
      'Não. O atendimento à sociedade é particular e no momento não trabalhamos com convênios. Valores, horários e formas de pagamento são informados pelo WhatsApp antes do agendamento.',
  },
  {
    pergunta: 'A mesma equipe atende empresas e pessoas físicas?',
    resposta:
      'Sim. O colaborador que vem fazer o exame ocupacional é atendido pela mesma equipe que atende quem chega por conta própria, no mesmo endereço e com a mesma agenda.',
  },
  {
    pergunta: 'Como faço para escolher um profissional específico?',
    resposta:
      'Basta dizer o nome no WhatsApp ao agendar. A agenda de cada profissional é organizada por hora marcada.',
  },
];

function jsonLdEquipe() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: equipePublicada.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': p.area === 'medicina' ? 'Physician' : 'Person',
        name: p.nome,
        jobTitle: p.papel,
        identifier: p.registro,
        worksFor: { '@type': 'MedicalClinic', name: site.nome, url: `${site.url}/` },
      },
    })),
  };
}

function iniciais(nome) {
  return nome
    .replace(/^Dra?\.\s*/i, '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join('')
    .toUpperCase();
}

export default function Equipe() {
  return (
    <>
      <JsonLd dados={jsonLdBreadcrumb(trilha)} />
      <JsonLd dados={jsonLdEquipe()} />
      <JsonLd dados={jsonLdFaq(perguntas)} />
      <Trilha itens={trilha} />

      <section style={{ paddingBlock: '26px 48px' }}>
        <div className="wrap hero-grade">
          <div className="hero-texto">
            <span className="rotulo">Quem atende</span>
            <h1>Nossa equipe</h1>
            <p className="lede">
              Todo mundo que atende aqui tem nome, registro no conselho e uma área definida. Você
              sabe quem vai te receber antes de sair de casa — e a empresa sabe quem assina o
              documento que a empresa arquiva.
            </p>
            <div className="acoes">
              <a
                className="btn btn-primario"
                href={whatsappUrl('Olá! Gostaria de agendar um atendimento na ÁgilMed.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar pelo WhatsApp
              </a>
              <Link className="btn btn-secundario" href="/para-voce">
                Ver atendimentos
              </Link>
            </div>
          </div>

          <div className="cartao" style={{ padding: 30, gap: 14 }}>
            <span className="rotulo">Duas portas, um cuidado só</span>
            <p style={{ fontSize: 16.5, lineHeight: 1.6, color: 'var(--tinta)' }}>
              A mesma equipe cuida da saúde ocupacional das empresas e do atendimento particular de
              quem mora em Porto Velho.
            </p>
            <p>
              Na prática: o colaborador que faz o admissional descobre que ali também tem
              fisioterapia, nutrição e coleta de sangue — perto de casa, com hora marcada. E quem
              chega como paciente encontra a mesma equipe que a empresa dele já contrata.
            </p>
            <p className="mono" style={{ fontSize: 12.5, letterSpacing: '0.06em', color: 'var(--tinta-4)' }}>
              {site.endereco.bairro.toUpperCase()} · {site.endereco.cidade.toUpperCase()}/
              {site.endereco.uf}
            </p>
          </div>
        </div>
      </section>

      <section className="secao secao-fundo">
        <div className="wrap">
          <div className="secao-cabeca">
            <h2>Profissionais</h2>
            <p>
              Registro profissional informado conforme exigem os conselhos de cada categoria.
            </p>
          </div>

          <div className="grade g2">
            {equipePublicada.map((p) => (
              <div className="cartao" key={p.id} style={{ padding: 28, gap: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <span className="assinatura-avatar" aria-hidden="true">
                    {iniciais(p.nome)}
                  </span>
                  <div>
                    <h3 style={{ fontSize: 21 }}>{p.nome}</h3>
                    <p
                      className="mono"
                      style={{ fontSize: 13, color: 'var(--azul)', margin: '4px 0 0' }}
                    >
                      {p.registro}
                    </p>
                  </div>
                </div>

                <span className="rotulo">{p.papel}</span>
                <p>{p.resumo}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 2 }}>
                  {p.atua.map((a) => (
                    <span
                      key={a}
                      style={{
                        fontSize: 13,
                        lineHeight: 1.3,
                        padding: '5px 10px',
                        borderRadius: 3,
                        background: 'var(--fundo)',
                        border: '1px solid var(--linha)',
                        color: 'var(--tinta-3)',
                      }}
                    >
                      {a}
                    </span>
                  ))}
                </div>

                {p.pagina && (
                  <Link className="cartao-seta" href={p.pagina} style={{ marginTop: 2 }}>
                    Ver o atendimento →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="secao">
        <div className="wrap hero-grade">
          <div className="texto">
            <div className="secao-cabeca">
              <h2>Por que o registro aparece aqui</h2>
            </div>
            <p>
              Os conselhos profissionais — CFM, CFP, COFFITO, CFN, CFFa e COFEN — exigem que qualquer
              divulgação identifique o profissional pelo nome e pelo número de inscrição. Não é
              formalidade: é o que permite a você conferir, no site do conselho, se quem vai te
              atender está regular.
            </p>
            <p>
              No caso da medicina, vale reparar no <strong>RQE</strong>. O CRM habilita a exercer a
              medicina; o RQE é o registro da especialidade. Quando existe, ele aparece ao lado do
              CRM — e é o que permite a você conferir a qualificação de quem assina.
            </p>
            <p>
              Não prometemos resultado de tratamento em nenhum lugar deste site, porque nenhum
              profissional de saúde pode fazer isso. O que prometemos é quem atende, com que
              qualificação e em quanto tempo.
            </p>
          </div>
          <div className="cartao" style={{ padding: 28, gap: 12, alignSelf: 'start' }}>
            <span className="rotulo">Onde conferir</span>
            <h3 style={{ fontSize: 19 }}>Consulta pública dos conselhos</h3>
            <p>
              Cada conselho mantém consulta aberta pelo número de inscrição. Basta buscar pelo nome
              do conselho e pela palavra “consulta” para chegar ao cadastro oficial e confirmar a
              situação de qualquer profissional — aqui ou em qualquer outra clínica.
            </p>
          </div>
        </div>
      </section>

      <section className="secao secao-fundo">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <Faq perguntas={perguntas} />
        </div>
      </section>

      <section className="secao">
        <div className="wrap">
          <div className="cta-bloco">
            <div>
              <h2>Agende com quem você escolher</h2>
              <p>
                {site.endereco.rua} · {site.endereco.bairro} · {site.endereco.cidade}/
                {site.endereco.uf}
              </p>
            </div>
            <div className="acoes">
              <a
                className="btn btn-claro"
                href={whatsappUrl('Olá! Gostaria de agendar um atendimento na ÁgilMed.')}
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
