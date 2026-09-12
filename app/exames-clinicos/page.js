import Link from 'next/link';
import { site, whatsappUrl, metadadosPagina, jsonLdBreadcrumb, jsonLdFaq } from '@/lib/site';
import Trilha from '@/components/Trilha';
import Faq from '@/components/Faq';
import Check from '@/components/Check';
import JsonLd from '@/components/JsonLd';

export const metadata = metadadosPagina({
  titulo: 'Exames clínicos em Porto Velho',
  descricao:
    'Eletrocardiograma, eletroencefalograma, audiometria, coleta laboratorial e procedimentos de enfermagem em Porto Velho. Particular, com hora marcada e sem fila.',
  caminho: '/exames-clinicos',
});

const trilha = [
  { href: '/', rotulo: 'Início' },
  { href: '/para-voce', rotulo: 'Para você' },
  { href: '/exames-clinicos', rotulo: 'Exames clínicos' },
];

const grupos = [
  {
    id: 'cardio',
    nome: 'Eletrocardiograma (ECG)',
    chamada: 'Registro da atividade elétrica do coração, em repouso.',
    texto:
      'Exame rápido, indolor e sem preparo especial. É o que costuma ser pedido antes de uma cirurgia, na investigação de palpitação, dor no peito ou pressão alta, e na renovação de laudos que exigem avaliação cardiológica.',
    itens: [
      'Dura poucos minutos, deitado',
      'Não precisa de jejum',
      'Traçado entregue com o laudo',
      'Aceito para fins ocupacionais quando indicado no PCMSO',
    ],
  },
  {
    id: 'neuro',
    nome: 'Eletroencefalograma (EEG)',
    chamada: 'Registro da atividade elétrica do cérebro.',
    texto:
      'Usado na investigação de crises convulsivas, desmaios, alterações do sono e em avaliações exigidas para certas funções e categorias de habilitação. Exige um preparo simples, informado no agendamento.',
    itens: [
      'Cabelo lavado e seco, sem creme ou gel',
      'Orientação de sono na véspera, quando indicada',
      'Sem jejum, salvo orientação médica',
      'Laudo emitido após a leitura',
    ],
  },
  {
    id: 'audio',
    nome: 'Audiometria',
    chamada: 'Avaliação da audição em cabine, com fonoaudióloga.',
    texto:
      'Mede o limiar auditivo de cada ouvido. Serve tanto para quem quer investigar perda de audição quanto para a audiometria ocupacional de quem trabalha exposto a ruído — nesse caso, é a base do Programa de Conservação Auditiva da empresa.',
    itens: [
      'Repouso auditivo de 14 horas antes do exame ocupacional',
      'Comparação com exames anteriores, quando houver',
      'Resultado com o traçado audiométrico',
      'Vale para admissional, periódico e demissional',
    ],
  },
  {
    id: 'lab',
    nome: 'Coleta laboratorial',
    chamada: 'Sangue e urina coletados aqui mesmo.',
    texto:
      'Você não precisa ir a um endereço para a consulta e a outro para a coleta. Os exames de rotina — hemograma, glicemia, colesterol, função renal, hepática e tireoidiana, entre outros — são coletados na própria clínica.',
    itens: [
      'Jejum informado por exame no agendamento',
      'Traga o pedido médico, se já tiver',
      'Resultados enviados assim que liberados',
      'Mesmo endereço da consulta e dos demais exames',
    ],
  },
  {
    id: 'enfermagem',
    nome: 'Procedimentos de enfermagem',
    chamada: 'Curativo, injetável, retirada de pontos e aferição.',
    texto:
      'Procedimentos de rotina que normalmente obrigam a pessoa a enfrentar fila em pronto-socorro. Aqui são feitos com hora marcada, por profissional de enfermagem, mediante prescrição quando o procedimento exige.',
    itens: [
      'Curativo simples e troca de curativo',
      'Aplicação de medicação injetável com prescrição',
      'Retirada de pontos',
      'Aferição de pressão e glicemia capilar',
    ],
  },
];

const perguntas = [
  {
    pergunta: 'Preciso de pedido médico para fazer os exames?',
    resposta:
      'Para exames diagnósticos como ECG, EEG e exames laboratoriais, sim: é preciso pedido médico. Se você ainda não tem, pode fazer a consulta clínica aqui mesmo e sair com o pedido e o agendamento.',
  },
  {
    pergunta: 'Atendem convênio?',
    resposta:
      'No momento o atendimento é particular. Valores e formas de pagamento são informados pelo WhatsApp antes do agendamento, sem compromisso.',
  },
  {
    pergunta: 'Quanto tempo demora para sair o resultado?',
    resposta:
      'Varia por exame. ECG e audiometria costumam sair no mesmo dia; laboratoriais e EEG dependem do prazo de liberação e da leitura. O prazo de cada um é informado no agendamento.',
  },
  {
    pergunta: 'Fazem exame de imagem, raio-x ou ultrassom?',
    resposta:
      'Não. A ÁgilMed não realiza diagnóstico por imagem. Os exames disponíveis aqui são os listados nesta página.',
  },
  {
    pergunta: 'Esses exames servem para o exame admissional da empresa?',
    resposta:
      'Servem, quando estiverem previstos no PCMSO para aquela função. Se você veio pela empresa, o caminho é a página de exames ocupacionais — lá o agendamento já entra no fluxo do ASO.',
  },
  {
    pergunta: 'Precisa agendar?',
    resposta:
      'Sim. Trabalhamos com hora marcada justamente para não formar fila. O agendamento é feito pelo WhatsApp e leva poucos minutos.',
  },
];

export default function ExamesClinicos() {
  return (
    <>
      <JsonLd dados={jsonLdBreadcrumb(trilha)} />
      <JsonLd dados={jsonLdFaq(perguntas)} />
      <Trilha itens={trilha} />

      <section style={{ paddingBlock: '26px 48px' }}>
        <div className="wrap hero-grade">
          <div className="hero-texto">
            <span className="rotulo">Atendimento para a sociedade</span>
            <h1>Exames clínicos em Porto Velho</h1>
            <p className="lede">
              Eletrocardiograma, eletroencefalograma, audiometria, coleta laboratorial e
              procedimentos de enfermagem — no mesmo endereço, com hora marcada e sem fila.
            </p>
            <p
              className="mono"
              style={{ fontSize: 12.5, letterSpacing: '0.06em', color: 'var(--tinta-4)' }}
            >
              ATENDIMENTO PARTICULAR · SEM CONVÊNIOS NO MOMENTO
            </p>
            <div className="acoes">
              <a
                className="btn btn-primario"
                href={whatsappUrl('Olá! Gostaria de agendar um exame clínico.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar pelo WhatsApp
              </a>
              <Link className="btn btn-secundario" href="/para-voce">
                Consulta clínica
              </Link>
            </div>
          </div>

          <div className="cartao" style={{ padding: 30, gap: 14 }}>
            <span className="rotulo">Por que aqui</span>
            <h3 style={{ fontSize: 21 }}>Consulta e exame no mesmo lugar</h3>
            <p>
              A clínica foi montada para atender empresa e pessoa física no mesmo endereço. Quem faz
              a consulta coleta ali mesmo; quem chega só para o exame não precisa passar por
              triagem.
            </p>
            <p>
              {site.endereco.rua}
              <br />
              {site.endereco.bairro} · {site.endereco.cidade}/{site.endereco.uf}
            </p>
          </div>
        </div>
      </section>

      <section className="secao secao-fundo">
        <div className="wrap">
          <div className="secao-cabeca">
            <h2>O que fazemos</h2>
            <p>
              Cada exame tem um preparo próprio. O que você precisa levar e o jejum necessário são
              confirmados no momento do agendamento.
            </p>
          </div>

          <div className="grade g2">
            {grupos.map((g) => (
              <div className="cartao" key={g.id} style={{ padding: 28, gap: 12 }}>
                <span className="rotulo">{g.chamada}</span>
                <h3 style={{ fontSize: 21 }}>{g.nome}</h3>
                <p>{g.texto}</p>
                <div className="lista-checada" style={{ marginTop: 2 }}>
                  {g.itens.map((i) => (
                    <div className="item-checado" key={i}>
                      <Check />
                      <p style={{ fontSize: 15 }}>{i}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                  'Mande pelo WhatsApp o exame que precisa fazer. Informamos valor, preparo e o primeiro horário disponível.',
              },
              {
                n: '02',
                titulo: 'No dia',
                texto:
                  'Chegue com o pedido médico e um documento com foto. O atendimento é por hora marcada, sem fila de espera.',
              },
              {
                n: '03',
                titulo: 'Resultado',
                texto:
                  'Entregue no prazo informado no agendamento. Se quiser, a consulta de retorno para interpretar o resultado já sai agendada.',
              },
            ].map((e, i) => (
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
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: i === 0 ? 'var(--azul-claro)' : 'var(--tinta-4)',
                  }}
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
          <Faq perguntas={perguntas} />
        </div>
      </section>

      <section className="secao">
        <div className="wrap">
          <div className="secao-cabeca">
            <h2>Veja também</h2>
          </div>
          <div className="grade g3">
            <Link className="cartao cartao-link" href="/para-voce">
              <h3>Consulta clínica</h3>
              <p>Avaliação médica, orientação preventiva e o pedido de exame, quando necessário.</p>
              <span className="cartao-seta">Ver detalhes →</span>
            </Link>
            <Link className="cartao cartao-link" href="/equipe">
              <h3>Nossa equipe</h3>
              <p>Quem atende, com nome, registro no conselho e área de atuação.</p>
              <span className="cartao-seta">Ver detalhes →</span>
            </Link>
            <Link className="cartao cartao-link" href="/exames">
              <h3>Exames ocupacionais</h3>
              <p>Admissional, periódico, demissional e retorno ao trabalho, para empresas.</p>
              <span className="cartao-seta">Ver detalhes →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="secao secao-fundo">
        <div className="wrap">
          <div className="cta-bloco">
            <div>
              <h2>Agende seu exame</h2>
              <p>
                {site.endereco.rua} · {site.endereco.bairro} · {site.endereco.cidade}/
                {site.endereco.uf}
              </p>
            </div>
            <div className="acoes">
              <a
                className="btn btn-claro"
                href={whatsappUrl('Olá! Gostaria de agendar um exame clínico.')}
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
