import Link from 'next/link';
import { metadadosPagina, jsonLdBreadcrumb, whatsappUrl } from '@/lib/site';
import Trilha from '@/components/Trilha';
import JsonLd from '@/components/JsonLd';
import Formulario from '@/components/Formulario';
import Check from '@/components/Check';

export const metadata = metadadosPagina({
  titulo: 'Gestão de SST para empresas em Porto Velho',
  descricao:
    'Exames ocupacionais para empresas de Porto Velho: admissional, periódico, demissional e complementares no mesmo endereço, com ASO no mesmo dia.',
  caminho: '/para-empresas',
});

const trilha = [
  { href: '/', rotulo: 'Início' },
  { href: '/para-empresas', rotulo: 'Para empresas' },
];

export default function ParaEmpresas() {
  return (
    <>
      <JsonLd dados={jsonLdBreadcrumb(trilha)} />
      <Trilha itens={trilha} />

      <section style={{ paddingBlock: '26px 48px' }}>
        <div className="wrap">
          <div className="secao-cabeca">
            <span className="rotulo">Para empresas</span>
            <h1>Os exames da sua equipe, sem o turno perdido</h1>
            <p className="lede">
              Avaliação clínica e complementares no mesmo endereço, ASO no mesmo dia e um aviso
              mensal com os exames que vencem nos próximos 90 dias.
            </p>
          </div>
          <div className="acoes">
            <a className="btn btn-primario" href={whatsappUrl('Olá! Quero uma proposta de exames ocupacionais para a minha empresa.')} target="_blank" rel="noopener noreferrer">
              Falar no WhatsApp
            </a>
            <Link className="btn btn-secundario" href="#proposta">
              Solicitar proposta
            </Link>
          </div>
        </div>
      </section>

      <section className="secao secao-fundo">
        <div className="wrap">
          <div className="secao-cabeca">
            <h2>O que entra no acompanhamento</h2>
          </div>
          <div className="grade g3">
            {[
              ['Exames ocupacionais', 'Admissional, periódico, demissional, retorno e mudança de risco, com complementares no mesmo endereço.'],
              ['Exames complementares', 'Audiometria, espirometria, ECG, EEG, acuidade visual e laboratoriais, sem encaminhamento.'],
              ['ASO no mesmo dia', 'Emitido em duas vias e assinado pelo médico examinador, com nome e CRM.'],
              ['Agendamento em lote', 'Horário reservado para contratação em volume, sem a sua equipe esperando na recepção.'],
              ['Retorno ao trabalho', 'A avaliação obrigatória depois de afastamento, conduzida com a atenção que o caso exige.'],
              ['Boletim mensal', 'Uma página, todo dia 5, com os exames que vencem nos próximos 90 dias.'],
            ].map(([t, d]) => (
              <div className="cartao" key={t}>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="secao">
        <div className="wrap hero-grade">
          <div>
            <div className="secao-cabeca">
              <h2>Por que aqui</h2>
            </div>
            <div className="lista-checada">
              {[
                ['Uma visita, não três', 'Avaliação clínica, complementares e coleta acontecem no mesmo endereço. O colaborador não vai a um laboratório do outro lado da cidade.'],
                ['Um calendário que avisa antes', 'Exame vencido não manda alerta. O Boletim mensal mostra o que vence nos próximos 90 dias, colaborador por colaborador.'],
                ['Uma conversa quando dá problema', 'Afastamento longo, restrição, resultado alterado: você fala com quem tem o histórico inteiro do colaborador.'],
                ['Menos hora parada', 'Avaliação clínica e complementares no mesmo endereço, com agendamento em lote para contratações em volume.'],
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
          <div className="destaque destaque-ambar">
            <span className="rotulo" style={{ color: 'var(--ambar)' }}>O que não é conosco</span>
            <p style={{ fontSize: 16.5, lineHeight: 1.6 }}>
              A ÁgilMed <strong>realiza os exames</strong>. Quem elabora o PGR, o PCMSO, os laudos,
              os eventos de eSocial SST e os treinamentos de NR é a <strong>Real Life Engenharia de
              SSMA</strong>, do mesmo grupo — e é o PCMSO dela que define quais exames cada função
              da sua empresa precisa fazer.
            </p>
            <p style={{ marginTop: 12 }}>
              <a href="https://www.reallifessma.com.br" target="_blank" rel="noopener noreferrer">
                Conhecer a Real Life →
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="secao secao-fundo" id="proposta">
        <div className="wrap hero-grade">
          <div>
            <div className="secao-cabeca">
              <h2>Solicitar proposta</h2>
              <p style={{ color: 'var(--tinta-3)' }}>
                Conte o porte e o setor da empresa. Retornamos com o escopo e o preço por
                colaborador, sem compromisso.
              </p>
            </div>
            <Formulario
              origem="proposta-empresas"
              campos={['empresa', 'email', 'telefone', 'colaboradores', 'mensagem']}
              rotuloEnvio="Solicitar proposta"
            />
          </div>
          <div className="cartao" style={{ padding: 30, gap: 12 }}>
            <span className="rotulo">Atendimento in company</span>
            <p>
              Para grupos, parte dos atendimentos pode ser feita na sua empresa — avaliamos caso a
              caso, porque alguns exames complementares exigem equipamento que fica na clínica.
            </p>
            <p>
              Também atendemos empresas de fora de Porto Velho que têm equipe na capital.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
