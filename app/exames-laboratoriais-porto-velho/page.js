import Link from 'next/link';
import { site, whatsappUrl, metadadosPagina, jsonLdBreadcrumb, jsonLdFaq } from '@/lib/site';
import { totalLaboratoriais } from '@/lib/laboratoriais';
import Trilha from '@/components/Trilha';
import Faq from '@/components/Faq';
import JsonLd from '@/components/JsonLd';
import CatalogoLab from '@/components/CatalogoLab';

export const metadata = metadadosPagina({
  titulo: 'Exames laboratoriais em Porto Velho',
  descricao:
    'Análises clínicas em Porto Velho com coleta na própria clínica e hora marcada: hemograma, glicose, colesterol, TSH, sorologias, urina e fezes. Veja a lista e agende.',
  caminho: '/exames-laboratoriais-porto-velho',
});

const trilha = [
  { href: '/', rotulo: 'Início' },
  { href: '/exames-clinicos', rotulo: 'Exames clínicos' },
  { href: '/exames-laboratoriais-porto-velho', rotulo: 'Laboratoriais' },
];

const perguntas = [
  {
    pergunta: 'Preciso de pedido médico para fazer exame de sangue?',
    resposta:
      'Para a maioria dos exames, sim — o pedido orienta o que deve ser analisado e permite ao médico interpretar o resultado. Se você ainda não tem, pode fazer a consulta clínica aqui mesmo e sair com o pedido e a coleta já agendada.',
  },
  {
    pergunta: 'Qual o horário da coleta?',
    resposta:
      'A coleta é feita com hora marcada, pela manhã, justamente para caber no jejum sem que você passe a manhã inteira esperando. O horário disponível é informado no agendamento pelo WhatsApp.',
  },
  {
    pergunta: 'Quanto tempo demora o resultado?',
    resposta:
      'A maior parte dos exames de rotina fica pronta em poucos dias úteis. Alguns exames específicos levam mais tempo. O prazo do seu exame é informado no momento da coleta.',
  },
  {
    pergunta: 'Posso tomar meus remédios antes da coleta?',
    resposta:
      'Como regra, mantenha a medicação de uso contínuo e informe quais usa no momento da coleta — vários medicamentos alteram o resultado e isso precisa constar. Só suspenda algo se o seu médico orientar.',
  },
  {
    pergunta: 'Água quebra o jejum?',
    resposta:
      'Não. Água pode e deve ser tomada normalmente durante o jejum. O que não pode é café, chá, bala, chiclete, cigarro e bebida alcoólica.',
  },
  {
    pergunta: 'Atendem convênio?',
    resposta:
      'No momento o atendimento é particular. Valores e formas de pagamento são informados pelo WhatsApp antes do agendamento, sem compromisso.',
  },
  {
    pergunta: 'A empresa pode mandar os funcionários para a coleta?',
    resposta:
      'Sim. Os exames laboratoriais previstos no PCMSO são coletados aqui, no mesmo endereço e na mesma visita do exame ocupacional — o colaborador não precisa ir a dois lugares nem perder dois turnos.',
  },
];

export default function Laboratoriais() {
  return (
    <>
      <JsonLd dados={jsonLdBreadcrumb(trilha)} />
      <JsonLd dados={jsonLdFaq(perguntas)} />
      <Trilha itens={trilha} />

      <section style={{ paddingBlock: '26px 44px' }}>
        <div className="wrap hero-grade">
          <div className="hero-texto">
            <span className="rotulo">Análises clínicas</span>
            <h1>Exames laboratoriais em Porto Velho</h1>
            <p className="lede">
              Coleta na própria clínica, com hora marcada. Veja abaixo a lista completa, o preparo de
              cada exame e agende direto pelo WhatsApp.
            </p>
            <p
              className="mono"
              style={{ fontSize: 12.5, letterSpacing: '0.06em', color: 'var(--tinta-4)' }}
            >
              {totalLaboratoriais} EXAMES · ATENDIMENTO PARTICULAR · SEM CONVÊNIOS NO MOMENTO
            </p>
            <div className="acoes">
              <a
                className="btn btn-primario"
                href={whatsappUrl('Olá! Gostaria de agendar a coleta de exames laboratoriais.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar coleta
              </a>
              <Link className="btn btn-secundario" href="/para-voce">
                Preciso de um pedido médico
              </Link>
            </div>
          </div>

          <div className="cartao" style={{ padding: 30, gap: 14 }}>
            <span className="rotulo">Antes de vir</span>
            <h3 style={{ fontSize: 20 }}>Três coisas que evitam viagem perdida</h3>
            <p>
              <strong>Traga o pedido médico.</strong> É ele que define o que será analisado.
            </p>
            <p>
              <strong>Confira o jejum do seu exame</strong> na lista abaixo. Água pode; café, bala e
              cigarro não.
            </p>
            <p>
              <strong>Agende antes de sair de casa.</strong> A coleta é por hora marcada e o horário
              da manhã costuma encher primeiro.
            </p>
          </div>
        </div>
      </section>

      <section className="secao secao-fundo">
        <div className="wrap">
          <div className="secao-cabeca">
            <h2>Exames que coletamos</h2>
            <p>
              Clique em qualquer exame para ver o que ele avalia, o preparo necessário e agendar.
              Não achou o que procura? Pergunte pelo WhatsApp — alguns exames são feitos sob
              encomenda.
            </p>
          </div>
          <CatalogoLab />
        </div>
      </section>

      <section className="secao">
        <div className="wrap hero-grade">
          <div className="texto">
            <div className="secao-cabeca">
              <h2>Para empresas: o laboratório dentro do exame ocupacional</h2>
            </div>
            <p>
              Quando o PCMSO da empresa prevê exames laboratoriais, eles são coletados aqui mesmo, na
              mesma visita da avaliação clínica. O colaborador não sai da clínica para ir a um
              laboratório e voltar depois — o que significa um turno perdido em vez de dois.
            </p>
            <p>
              O que é pedido depende do risco de cada função, e quem define isso é o PCMSO da
              empresa — documento que a clínica não elabora, mas cumpre à risca.
            </p>
            <div className="acoes">
              <Link className="btn btn-secundario" href="/exames">
                Exames ocupacionais
              </Link>
            </div>
          </div>
          <div className="cartao" style={{ padding: 28, gap: 12, alignSelf: 'start' }}>
            <span className="rotulo">Também fazemos</span>
            <h3 style={{ fontSize: 20 }}>Exames que não são de sangue</h3>
            <p>
              Eletrocardiograma, eletroencefalograma, audiometria e procedimentos de enfermagem —
              tudo no mesmo endereço.
            </p>
            <Link className="cartao-seta" href="/exames-clinicos">
              Ver exames clínicos →
            </Link>
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
              <h2>Agende sua coleta</h2>
              <p>
                {site.endereco.rua} · {site.endereco.bairro} · {site.endereco.cidade}/
                {site.endereco.uf}
              </p>
            </div>
            <div className="acoes">
              <a
                className="btn btn-claro"
                href={whatsappUrl('Olá! Gostaria de agendar a coleta de exames laboratoriais.')}
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
