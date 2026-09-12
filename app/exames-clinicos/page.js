import { metadadosPagina, jsonLdBreadcrumb, whatsappUrl } from '@/lib/site';
import Trilha from '@/components/Trilha';
import JsonLd from '@/components/JsonLd';
import CatalogoExames from '@/components/CatalogoExames';

export const metadata = metadadosPagina({
  titulo: 'Exames clínicos e laboratoriais em Porto Velho',
  descricao: 'Consulte o catálogo de análises clínicas da Agilmed e confirme disponibilidade, preparo e agendamento pelo WhatsApp.',
  caminho: '/exames-clinicos',
});

const trilha = [
  { href: '/', rotulo: 'Início' },
  { href: '/para-voce', rotulo: 'Para você' },
  { href: '/exames-clinicos', rotulo: 'Exames clínicos' },
];

export default function ExamesClinicos() {
  return (
    <>
      <JsonLd dados={jsonLdBreadcrumb(trilha)} />
      <Trilha itens={trilha} />
      <section style={{ paddingBlock: '26px 42px' }}>
        <div className="wrap">
          <div className="secao-cabeca">
            <span className="rotulo">Catálogo para pessoas</span>
            <h1>Exames clínicos e laboratoriais</h1>
            <p className="lede">
              Pesquise pelo nome e fale com a equipe para confirmar disponibilidade, preparo, prazo,
              valor e necessidade de agendamento.
            </p>
          </div>
        </div>
      </section>
      <section className="secao secao-fundo" style={{ paddingTop: 44 }}>
        <div className="wrap"><CatalogoExames /></div>
      </section>
      <section className="secao">
        <div className="wrap">
          <div className="destaque">
            <span className="rotulo">Importante</span>
            <p>
              A indicação e a interpretação de exames devem ser feitas por profissional habilitado.
              A presença de um exame neste catálogo não confirma atendimento imediato nem dispensa
              orientação médica.
            </p>
          </div>
          <div className="acoes" style={{ marginTop: 24 }}>
            <a className="btn btn-primario" href={whatsappUrl('Olá! Preciso de orientação sobre exames clínicos e laboratoriais.')} target="_blank" rel="noopener noreferrer">
              Falar com a Agilmed
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
