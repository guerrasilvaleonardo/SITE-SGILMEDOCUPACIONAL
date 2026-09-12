import { site, enderecoLinha, whatsappUrl, metadadosPagina, jsonLdBreadcrumb } from '@/lib/site';
import Trilha from '@/components/Trilha';
import JsonLd from '@/components/JsonLd';
import Formulario from '@/components/Formulario';

export const metadata = metadadosPagina({
  titulo: 'Contato',
  descricao:
    'Fale com a ÁgilMed Ocupacional em Porto Velho: WhatsApp, telefone, e-mail e endereço da clínica.',
  caminho: '/contato',
});

const trilha = [
  { href: '/', rotulo: 'Início' },
  { href: '/contato', rotulo: 'Contato' },
];

export default function Contato() {
  return (
    <>
      <JsonLd dados={jsonLdBreadcrumb(trilha)} />
      <Trilha itens={trilha} />

      <section style={{ paddingBlock: '26px 56px' }}>
        <div className="wrap hero-grade">
          <div className="hero-texto">
            <h1>Contato</h1>
            <p className="lede">
              Para agendar exame, o WhatsApp é o caminho mais rápido. Para proposta ou dúvida
              técnica, use o formulário — respondemos em até 1 dia útil.
            </p>

            <div className="tabela-essencial" style={{ marginTop: 8 }}>
              <div className="tabela-essencial-topo">Canais</div>
              <dl style={{ margin: 0 }}>
                <div className="linha-essencial">
                  <dt>WhatsApp</dt>
                  <dd>
                    <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                      {site.telefone}
                    </a>
                  </dd>
                </div>
                <div className="linha-essencial">
                  <dt>Telefone</dt>
                  <dd>
                    <a href={`tel:+${site.telefoneRaw}`}>{site.telefone}</a>
                  </dd>
                </div>
                <div className="linha-essencial">
                  <dt>E-mail</dt>
                  <dd>
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </dd>
                </div>
                <div className="linha-essencial">
                  <dt>Endereço</dt>
                  <dd>
                    {site.endereco.rua}
                    <br />
                    {site.endereco.bairro} · {site.endereco.cidade}/{site.endereco.uf}
                    <br />
                    CEP {site.endereco.cep}
                  </dd>
                </div>
                <div className="linha-essencial">
                  <dt>Instagram</dt>
                  <dd>
                    <a href={site.instagram} target="_blank" rel="noopener noreferrer">
                      @agilmedocupacional
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="cartao" style={{ padding: 30 }}>
            <h2 style={{ fontSize: 24, marginBottom: 6 }}>Escreva para a gente</h2>
            <Formulario
              origem="contato"
              campos={['empresa', 'email', 'telefone', 'mensagem']}
              rotuloEnvio="Enviar mensagem"
            />
          </div>
        </div>
      </section>

      <section className="secao secao-fundo">
        <div className="wrap">
          <p className="mono" style={{ fontSize: 13, color: 'var(--tinta-4)' }}>
            {enderecoLinha}
          </p>
        </div>
      </section>
    </>
  );
}
