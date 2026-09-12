import { site, metadadosPagina, jsonLdBreadcrumb } from '@/lib/site';
import Trilha from '@/components/Trilha';
import JsonLd from '@/components/JsonLd';

export const metadata = metadadosPagina({
  titulo: 'Equipe médica',
  descricao: 'Conheça as médicas responsáveis pelos atendimentos clínicos e ocupacionais da Agilmed em Porto Velho.',
  caminho: '/equipe',
});

const trilha = [{ href: '/', rotulo: 'Início' }, { href: '/equipe', rotulo: 'Equipe médica' }];

export default function Equipe() {
  const profissionais = [
    {
      ...site.responsavelTecnico,
      titulo: 'Médica do Trabalho',
      texto: 'Responsável pela medicina ocupacional, avaliação clínica ocupacional e conteúdos relacionados à saúde do trabalhador.',
      iniciais: 'FC',
    },
    {
      ...site.medicaClinica,
      titulo: 'Médica Clínica',
      texto: 'Atendimento clínico à sociedade, com avaliação individual, prevenção, orientação e acompanhamento.',
      iniciais: 'CS',
    },
  ];
  return (
    <>
      <JsonLd dados={jsonLdBreadcrumb(trilha)} />
      <Trilha itens={trilha} />
      <section style={{ paddingBlock: '26px 72px' }}>
        <div className="wrap">
          <div className="secao-cabeca">
            <span className="rotulo">Quem cuida de você</span>
            <h1>Equipe médica</h1>
            <p className="lede">Atuação clínica e ocupacional com responsabilidades claramente identificadas.</p>
          </div>
          <div className="grade g2">
            {profissionais.map((p) => (
              <div className="cartao perfil-medico" key={p.nome}>
                <div className="assinatura-avatar">{p.iniciais}</div>
                <div>
                  <span className="rotulo">{p.titulo}</span>
                  <h2 style={{ fontSize: 26, marginTop: 6 }}>{p.nome}</h2>
                  <p className="mono" style={{ color: 'var(--azul)' }}>{p.registro}</p>
                  <p>{p.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
