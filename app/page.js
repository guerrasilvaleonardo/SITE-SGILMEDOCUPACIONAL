import Link from 'next/link';
import { site, whatsappUrl } from '@/lib/site';
import Check from '@/components/Check';

export const metadata = {
  title: 'Medicina do trabalho em Porto Velho',
  description:
    'Exames ocupacionais, ASO no mesmo dia, PCMSO e riscos psicossociais em Porto Velho. Equipe multidisciplinar e um aviso mensal com o que vence nos próximos 90 dias.',
  alternates: { canonical: '/' },
};

const provas = [
  {
    titulo: 'Equipe multidisciplinar',
    texto: 'Medicina do trabalho, engenharia de segurança, psicologia e neuropsicologia.',
  },
  {
    titulo: 'Tudo no mesmo endereço',
    texto: 'Audiometria, espirometria, ECG, EEG e laboratoriais, sem encaminhamento.',
  },
  {
    titulo: 'ASO no mesmo dia',
    texto: 'Seu colaborador volta à produção sem passar o turno numa fila.',
  },
  {
    titulo: 'eSocial SST em dia',
    texto: 'S-2220 e S-2240 preparados e transmitidos por nós, mediante procuração.',
  },
];

const servicos = [
  {
    href: '/exames',
    titulo: 'Exames ocupacionais',
    texto:
      'Admissional, periódico, demissional, retorno ao trabalho e mudança de risco — com ASO emitido no mesmo dia.',
  },
  {
    href: '/exames-complementares-porto-velho',
    titulo: 'Exames complementares',
    texto: 'Audiometria, espirometria, ECG, EEG, acuidade visual e laboratoriais, aqui mesmo.',
  },
  {
    href: '/programas-e-laudos/pcmso',
    titulo: 'PCMSO e programas',
    texto: 'Programa médico coordenado por médico do trabalho, com relatório anual e prazos controlados.',
  },
  {
    href: '/riscos-psicossociais-nr1',
    titulo: 'Riscos psicossociais',
    texto: 'Avaliação conduzida por psicólogo e programa contínuo, para atender a exigência da NR-1.',
  },
];

const boletim = [
  { nome: 'PCMSO — revisão anual', data: '18 out', cor: 'ponto-vermelho' },
  { nome: 'Periódicos — produção, 14 pessoas', data: '24 out', cor: 'ponto-vermelho' },
  { nome: 'NR-35 — reciclagem, 6 pessoas', data: '21 nov', cor: 'ponto-ambar' },
  { nome: 'PGR — inventário de riscos', data: '04 dez', cor: 'ponto-ambar' },
];

const etapas = [
  { n: '01', titulo: 'Levantamento', texto: 'Mapeamos setores, riscos e o que já está vencido hoje.' },
  { n: '02', titulo: 'Agenda', texto: 'Horário reservado por lote, sem o seu time esperando na recepção.' },
  { n: '03', titulo: 'Exames e documentos', texto: 'Clínicos, complementares e ASO assinado por quem responde por ele.' },
  { n: '04', titulo: 'Boletim mensal', texto: 'A partir daí você é avisado antes de cada vencimento. Todo mês.' },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grade">
          <div className="hero-texto">
            <span className="rotulo">Medicina do trabalho · Porto Velho</span>
            <h1>Antes que vire problema.</h1>
            <p className="lede">
              Exame, programa, laudo e avaliação psicossocial na mesma casa — e um aviso todo mês com o
              que vence nos próximos 90 dias. Você não precisa lembrar de nada.
            </p>
            <div className="acoes">
              <Link className="btn btn-primario" href="/boletim">
                Receba o Boletim do seu CNPJ
              </Link>
              <span style={{ fontSize: 15, color: 'var(--tinta-3)' }}>
                Grátis, uma página, todo dia 5.
              </span>
            </div>
          </div>

          <div className="boletim">
            <div className="boletim-topo">
              <strong>Boletim de Antecedência</strong>
              <span>EXEMPLO</span>
            </div>
            <div className="boletim-corpo">
              <div className="boletim-legenda">O que vence nos próximos 90 dias</div>
              {boletim.map((item) => (
                <div className="boletim-item" key={item.nome}>
                  <span className="boletim-item-nome">
                    <span className={`ponto ${item.cor}`} />
                    {item.nome}
                  </span>
                  <span className="boletim-item-data">{item.data}</span>
                </div>
              ))}
              <div className="boletim-rodape">
                <span>12 itens em dia</span>
                <span className="mono" style={{ fontSize: 12, color: 'var(--tinta-4)' }}>
                  PÁGINA 1 DE 1
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ borderBottom: '1px solid var(--linha)', paddingBlock: 30 }}>
        <div className="wrap grade g4">
          {provas.map((p) => (
            <div key={p.titulo}>
              <h3>{p.titulo}</h3>
              <p style={{ fontSize: 14.5, color: 'var(--tinta-3)', marginTop: 4 }}>{p.texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="secao">
        <div className="wrap hero-grade">
          <div className="hero-texto">
            <span className="rotulo">O que nos torna diferentes</span>
            <h2>A clínica comum entrega o exame. Nós entregamos a antecedência.</h2>
            <div className="texto">
              <p>
                Todo dia 5 você recebe uma página com o que vence nos próximos 90 dias: programas,
                periódicos por setor, treinamentos de NR, toxicológicos e ASOs. Nada de procurar no
                arquivo, nada de descobrir na fiscalização.
              </p>
            </div>
            <div className="acoes">
              <Link className="btn btn-primario" href="/boletim">
                Receba o Boletim do seu CNPJ
              </Link>
            </div>
          </div>
          <div className="grade g2">
            {[
              ['Todo dia 5', 'O boletim chega antes de qualquer vencimento virar urgência'],
              ['Uma página', 'Sem relatório de 40 páginas que ninguém lê até o problema aparecer'],
              ['Por colaborador', 'Quem precisa de exame, quando, e de qual exame — nome a nome'],
              ['Um fornecedor', 'Exame, laudo, treinamento e psicossocial no mesmo contrato'],
            ].map(([rot, txt]) => (
              <div className="cartao" key={rot} style={{ background: 'var(--fundo)' }}>
                <span className="rotulo rotulo-cinza" style={{ fontSize: 11 }}>
                  {rot}
                </span>
                <p style={{ fontSize: 16, color: 'var(--tinta)' }}>{txt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="secao secao-fundo">
        <div className="wrap">
          <div className="secao-cabeca">
            <h2>O que a sua empresa precisa</h2>
          </div>
          <div className="grade g4">
            {servicos.map((s) => (
              <Link className="cartao cartao-link" href={s.href} key={s.href}>
                <h3>{s.titulo}</h3>
                <p>{s.texto}</p>
                <span className="cartao-seta">Ver detalhes →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="secao secao-escura">
        <div className="wrap hero-grade">
          <div className="hero-texto">
            <span className="rotulo" style={{ color: '#4CAC5E' }}>
              NR-1 · fiscalização desde 26 de maio de 2026
            </span>
            <h2>Seu PGR já tem o inventário psicossocial?</h2>
            <p style={{ fontSize: 17, maxWidth: '34em' }}>
              Desde maio o auditor-fiscal pode autuar a empresa que não gerencia os fatores de risco
              psicossocial. Aqui a avaliação é conduzida por psicólogo, o inventário é assinado por
              responsável técnico e o programa sai em um relatório só.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start' }}>
            <Link className="btn btn-claro" href="/riscos-psicossociais-nr1">
              Ver como funciona a adequação
            </Link>
            <span style={{ fontSize: 14, color: '#A9C8D8' }}>
              Diagnóstico inicial sem custo para empresas de Porto Velho.
            </span>
          </div>
        </div>
      </section>

      <section className="secao">
        <div className="wrap">
          <div className="secao-cabeca">
            <h2>Como trabalhamos</h2>
          </div>
          <div className="grade g4">
            {etapas.map((e, i) => (
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
                <span className="mono" style={{ fontSize: 12, fontWeight: 600, color: i === 0 ? 'var(--azul-claro)' : 'var(--tinta-4)' }}>
                  {e.n}
                </span>
                <h3>{e.titulo}</h3>
                <p style={{ fontSize: 14.5, color: 'var(--tinta-3)' }}>{e.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="secao secao-fundo">
        <div className="wrap hero-grade">
          <div>
            <div className="secao-cabeca">
              <span className="rotulo">Para quem atendemos</span>
              <h2>Setores em que a conta de SST pesa mais</h2>
            </div>
            <div className="lista-checada">
              {[
                ['Construção civil', 'Canteiro com efetivo variável, NR-18 e NR-35, contratação em lote.'],
                ['Indústria e transformação', 'Ruído, agentes químicos e máquinas — audiometria e espirometria em ciclo.'],
                ['Transporte e frota', 'Motoristas, jornada e o exame toxicológico das categorias C, D e E.'],
                ['Comércio e serviços', 'Rotatividade alta e fluxo constante de admissional e demissional.'],
              ].map(([titulo, texto]) => (
                <div className="item-checado" key={titulo}>
                  <Check />
                  <p>
                    <strong>{titulo}</strong> — {texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="cartao" style={{ padding: 30, gap: 14 }}>
            <span className="rotulo">Atendimento</span>
            <h3 style={{ fontSize: 22 }}>{site.endereco.rua}</h3>
            <p>
              {site.endereco.bairro} · {site.endereco.cidade}/{site.endereco.uf} · CEP {site.endereco.cep}
            </p>
            <p>
              Atendimento in company disponível para grupos, mediante avaliação da estrutura
              necessária a cada exame.
            </p>
            <div className="acoes" style={{ marginTop: 6 }}>
              <a className="btn btn-primario" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
              <Link className="btn btn-secundario" href="/contato">
                Ver contato
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="secao">
        <div className="wrap">
          <div className="cta-bloco">
            <div>
              <h2>Comece sabendo o que já está vencendo.</h2>
              <p>Mande o CNPJ e devolvemos o primeiro Boletim de Antecedência da sua empresa.</p>
            </div>
            <div className="acoes">
              <Link className="btn btn-claro" href="/boletim">
                Receba o Boletim do seu CNPJ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
