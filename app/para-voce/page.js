import Link from 'next/link';
import Image from 'next/image';
import { site, whatsappUrl, metadadosPagina, jsonLdBreadcrumb } from '@/lib/site';
import Trilha from '@/components/Trilha';
import JsonLd from '@/components/JsonLd';
import Check from '@/components/Check';

export const metadata = metadadosPagina({
  titulo: 'Atendimento clínico em Porto Velho',
  descricao:
    'Atendimento médico clínico para a sociedade em Porto Velho, com avaliação individual, orientação preventiva e acompanhamento pela Dra. Camila Sousa Ferreira.',
  caminho: '/para-voce',
});

const trilha = [
  { href: '/', rotulo: 'Início' },
  { href: '/para-voce', rotulo: 'Para você' },
];

export default function ParaVoce() {
  const mensagem = 'Olá! Gostaria de saber sobre o atendimento clínico com a Dra. Camila Sousa Ferreira.';
  return (
    <>
      <JsonLd dados={jsonLdBreadcrumb(trilha)} />
      <Trilha itens={trilha} />

      <section style={{ paddingBlock: '26px 64px' }}>
        <div className="wrap hero-grade">
          <div className="hero-texto">
            <span className="rotulo">Atendimento para a sociedade</span>
            <h1>Saúde começa com uma boa escuta.</h1>
            <p className="lede">
              Atendimento clínico para quem busca avaliação médica, prevenção e orientação clara em
              Porto Velho — independentemente de vínculo com uma empresa cliente.
            </p>
            <p className="chip chip-verde" style={{ alignSelf: 'flex-start' }}>Atendimento particular · sem convênios no momento</p>
            <div className="acoes">
              <a className="btn btn-primario" href={whatsappUrl(mensagem)} target="_blank" rel="noopener noreferrer">
                Agendar pelo WhatsApp
              </a>
              <a className="btn btn-secundario" href={`tel:+${site.telefoneRaw}`}>
                Ligar: {site.telefone}
              </a>
            </div>
          </div>

          <div className="cartao" style={{ padding: 32, background: 'var(--fundo-verde)' }}>
            <Image
              className="foto-estrutura"
              src="/recepcao-agilmed.webp"
              alt="Ambiente de recepção da Agilmed em Porto Velho"
              width={1024}
              height={1024}
              priority
            />
            <span className="rotulo">Sua médica</span>
            <h2 style={{ fontSize: 28 }}>{site.medicaClinica.nome}</h2>
            <p className="mono" style={{ color: 'var(--azul)', margin: 0 }}>
              {site.medicaClinica.registro} · {site.medicaClinica.especialidade}
            </p>
            <p style={{ marginTop: 8 }}>
              Avaliação individualizada, orientação responsável e encaminhamento quando houver
              indicação clínica.
            </p>
          </div>
        </div>
      </section>

      <section className="secao secao-fundo">
        <div className="wrap">
          <div className="secao-cabeca">
            <span className="rotulo">Como podemos ajudar</span>
            <h2>Cuidado clínico em diferentes momentos</h2>
          </div>
          <div className="grade g3">
            {[
              ['Consulta clínica', 'Avaliação de sintomas, histórico de saúde e definição dos próximos passos do cuidado.'],
              ['Orientação preventiva', 'Conversa sobre hábitos, fatores de risco e medidas de prevenção adequadas a cada pessoa.'],
              ['Acompanhamento', 'Reavaliação da evolução clínica e encaminhamento para outras especialidades quando necessário.'],
            ].map(([titulo, texto]) => (
              <div className="cartao" key={titulo}>
                <Check />
                <h3>{titulo}</h3>
                <p>{texto}</p>
              </div>
            ))}
          </div>
          <div className="acoes" style={{ marginTop: 28 }}>
            <Link className="btn btn-secundario" href="/exames-clinicos">Pesquisar exames clínicos</Link>
            <Link className="btn btn-secundario" href="/equipe">Conhecer a equipe médica</Link>
          </div>
        </div>
      </section>

      <section className="secao">
        <div className="wrap hero-grade">
          <div>
            <div className="secao-cabeca">
              <span className="rotulo">Antes de agendar</span>
              <h2>Confirme as informações pelo WhatsApp</h2>
            </div>
            <div className="lista-checada">
              {[
                'Dias e horários disponíveis para consulta',
                'Faixa etária atendida',
                'Valores e formas de pagamento',
                'O atendimento é particular; não trabalhamos com convênios no momento',
                'Documentos ou exames que devem ser levados',
              ].map((texto) => (
                <div className="item-checado" key={texto}><Check /><p>{texto}</p></div>
              ))}
            </div>
          </div>
          <div className="cta-bloco" style={{ display: 'block' }}>
            <h2>Quer cuidar da sua saúde?</h2>
            <p>Fale com a equipe e encontre o melhor horário para o seu atendimento.</p>
            <div className="acoes" style={{ marginTop: 20 }}>
              <a className="btn btn-claro" href={whatsappUrl(mensagem)} target="_blank" rel="noopener noreferrer">
                Falar com a Agilmed
              </a>
              <Link className="btn" style={{ color: '#fff', border: '1px solid #79C88A' }} href="/contato">
                Ver endereço
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
