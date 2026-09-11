import Link from 'next/link';
import { metadadosPagina, jsonLdBreadcrumb, whatsappUrl } from '@/lib/site';
import Trilha from '@/components/Trilha';
import JsonLd from '@/components/JsonLd';
import Formulario from '@/components/Formulario';
import Check from '@/components/Check';

export const metadata = metadadosPagina({
  titulo: 'Gestão de SST para empresas em Porto Velho',
  descricao:
    'PCMSO, exames, riscos psicossociais, eSocial e controle de vencimentos em um só fornecedor, para empresas de Porto Velho e região.',
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
            <h1>Sua empresa em dia, sem você precisar lembrar</h1>
            <p className="lede">
              Exames, programa médico, riscos psicossociais e eventos de eSocial no mesmo fornecedor —
              com um aviso mensal do que vence nos próximos 90 dias.
            </p>
          </div>
          <div className="acoes">
            <a className="btn btn-primario" href={whatsappUrl('Olá! Quero uma proposta de gestão de SST para a minha empresa.')} target="_blank" rel="noopener noreferrer">
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
              ['PCMSO', 'Programa médico coordenado por médico do trabalho, com relação de exames por função e relatório anual.'],
              ['Riscos psicossociais', 'Avaliação por psicólogo e programa contínuo, como a NR-1 passou a exigir das empresas.'],
              ['eSocial SST', 'S-2220 e S-2240 preparados e transmitidos no prazo, mediante procuração.'],
              ['Gestão de afastados', 'Retorno ao trabalho, restrições, readaptação e acompanhamento dos casos abertos.'],
              ['Boletim mensal', 'Uma página, todo dia 5, com o que vence nos próximos 90 dias.'],
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
              <h2>Por que um fornecedor só</h2>
            </div>
            <div className="lista-checada">
              {[
                ['O risco vira exame sem intermediário', 'O que a engenharia identifica no PGR entra direto no PCMSO, e o que o exame encontra volta para a revisão do programa.'],
                ['Um calendário, não três', 'Programas, exames e treinamentos vencem em datas diferentes. Quando estão no mesmo controle, ninguém descobre atraso na fiscalização.'],
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
            <span className="rotulo" style={{ color: 'var(--ambar)' }}>Atenção ao prazo</span>
            <p style={{ fontSize: 16.5, lineHeight: 1.6 }}>
              Desde 26 de maio de 2026 o auditor-fiscal pode autuar a empresa cujo PGR não trate dos
              fatores de risco psicossocial. Se o seu programa ainda não foi revisado, esse é o item
              mais urgente da lista.
            </p>
            <p style={{ marginTop: 12 }}>
              <Link href="/riscos-psicossociais-nr1">Ver como adequar →</Link>
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
