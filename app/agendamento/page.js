import { site, whatsappUrl, metadadosPagina, jsonLdBreadcrumb } from '@/lib/site';
import Trilha from '@/components/Trilha';
import JsonLd from '@/components/JsonLd';
import Formulario from '@/components/Formulario';
import Check from '@/components/Check';

export const metadata = metadadosPagina({
  titulo: 'Agendar exame ocupacional',
  descricao:
    'Agende exame ocupacional em Porto Velho pelo WhatsApp ou solicite horário reservado para contratações em lote.',
  caminho: '/agendamento',
});

const trilha = [
  { href: '/', rotulo: 'Início' },
  { href: '/agendamento', rotulo: 'Agendar exame' },
];

export default function Agendamento() {
  return (
    <>
      <JsonLd dados={jsonLdBreadcrumb(trilha)} />
      <Trilha itens={trilha} />

      <section style={{ paddingBlock: '26px 56px' }}>
        <div className="wrap hero-grade">
          <div className="hero-texto">
            <h1>Agendar exame</h1>
            <p className="lede">
              Um colaborador ou uma equipe inteira. Para caso único, o WhatsApp resolve em minutos;
              para volume, reservamos horário exclusivo.
            </p>
            <div className="acoes">
              <a className="btn btn-primario" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                Agendar pelo WhatsApp
              </a>
              <a className="btn btn-secundario" href={`tel:+${site.telefoneRaw}`}>
                Ligar: {site.telefone}
              </a>
            </div>

            <div className="lista-checada" style={{ marginTop: 14 }}>
              {[
                ['Leve a guia da empresa', 'Com a função exata que o colaborador vai exercer.'],
                ['Documento com foto', 'RG, CNH ou carteira de trabalho digital.'],
                ['Chegue em repouso auditivo', 'Se houver audiometria, evite ruído nas horas anteriores.'],
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

          <div className="cartao" style={{ padding: 30 }}>
            <h2 style={{ fontSize: 24, marginBottom: 4 }}>Agendamento em lote</h2>
            <p style={{ color: 'var(--tinta-3)', marginBottom: 14 }}>
              Para contratações em volume, principalmente no fim do ano. Conte quantas pessoas e para
              quando.
            </p>
            <Formulario
              origem="agendamento-lote"
              campos={['empresa', 'email', 'telefone', 'colaboradores', 'mensagem']}
              rotuloEnvio="Solicitar horário reservado"
              textoSucesso="Recebemos o pedido. Vamos retornar com as datas disponíveis para o seu grupo."
            />
          </div>
        </div>
      </section>
    </>
  );
}
