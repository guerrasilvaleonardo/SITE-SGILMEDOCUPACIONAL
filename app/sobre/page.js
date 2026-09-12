import Link from 'next/link';
import Image from 'next/image';
import { site, metadadosPagina, jsonLdBreadcrumb } from '@/lib/site';
import Trilha from '@/components/Trilha';
import JsonLd from '@/components/JsonLd';
import Check from '@/components/Check';

export const metadata = metadadosPagina({
  titulo: 'Sobre a clínica',
  descricao:
    'Clínica de medicina do trabalho em Porto Velho com equipe multidisciplinar: medicina do trabalho, psicologia, neuropsicologia e enfermagem.',
  caminho: '/sobre',
});

const trilha = [
  { href: '/', rotulo: 'Início' },
  { href: '/sobre', rotulo: 'Sobre' },
];

export default function Sobre() {
  return (
    <>
      <JsonLd dados={jsonLdBreadcrumb(trilha)} />
      <Trilha itens={trilha} />

      <section style={{ paddingBlock: '26px 48px' }}>
        <div className="wrap hero-grade">
          <div className="hero-texto">
            <span className="rotulo">Quem somos</span>
            <h1>Mais que exames: antecedência</h1>
            <p className="lede">
              A ÁgilMed nasceu para transformar a saúde ocupacional em instrumento de gestão. Rigor
              técnico, atendimento humano e uma rotina que avisa a empresa antes de o prazo virar
              problema.
            </p>
          </div>
          <div className="cartao" style={{ padding: 30, gap: 14 }}>
            <Image
              className="foto-estrutura"
              src="/recepcao-agilmed.webp"
              alt="Recepção da Agilmed Ocupacional em Porto Velho"
              width={1024}
              height={1024}
            />
            <span className="rotulo">Onde estamos</span>
            <p style={{ fontSize: 16.5, lineHeight: 1.6, color: 'var(--tinta)' }}>
              {site.endereco.rua}
              <br />
              {site.endereco.bairro} · {site.endereco.cidade}/{site.endereco.uf}
              <br />
              CEP {site.endereco.cep}
            </p>
            <p>
              <a href={`tel:+${site.telefoneRaw}`}>{site.telefone}</a> ·{' '}
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
        </div>
      </section>

      <section className="secao secao-fundo">
        <div className="wrap hero-grade">
          <div className="texto">
            <div className="secao-cabeca">
              <h2>Por que existimos</h2>
            </div>
            <p>
              Por trás de cada exame admissional ou periódico existe uma pessoa e uma empresa que
              precisa de segurança jurídica. Trabalhamos para que nenhuma das duas seja surpreendida:
              nem o colaborador por uma alteração de saúde que ninguém acompanhou, nem a empresa por
              um documento vencido que ninguém viu vencer.
            </p>
            <p>
              É por isso que não entregamos apenas o exame. Entregamos o controle do que vem depois
              dele — o próximo vencimento, o programa que precisa ser revisado, o colaborador que
              volta de afastamento e precisa de avaliação.
            </p>
          </div>
          <div>
            <div className="secao-cabeca">
              <h2>Equipe multidisciplinar</h2>
            </div>
            <div className="lista-checada">
              {[
                ['Medicina do trabalho', 'Coordenação do PCMSO e avaliação clínica ocupacional.'],
                ['Psicologia e neuropsicologia', 'Avaliação psicossocial e programas de acompanhamento.'],
                ['Enfermagem e técnicos', 'Apoio aos exames e ao fluxo de atendimento.'],
                ['Engenharia de segurança', 'Pela Real Life SSMA, com responsável técnico no CREA-RO.'],
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
        </div>
      </section>

      <section className="secao">
        <div className="wrap">
          <div className="secao-cabeca">
            <h2>Como pensamos o trabalho</h2>
          </div>
          <div className="grade g3">
            {[
              ['Precisão', 'Número com fonte e data, norma citada pelo nome. Nada de alarde para vender.'],
              ['Conduta, não promessa', 'Não prometemos resultado nem conformidade garantida: prometemos aviso antes do prazo.'],
              ['Pessoas no centro', 'O exame é um encontro com alguém que trabalha, não um item de checklist.'],
            ].map(([t, d]) => (
              <div className="cartao" key={t}>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="secao secao-fundo">
        <div className="wrap">
          <div className="cta-bloco">
            <div>
              <h2>Quer conhecer a estrutura?</h2>
              <p>Agende uma visita ou fale com a equipe sobre a rotina de SST da sua empresa.</p>
            </div>
            <div className="acoes">
              <Link className="btn btn-claro" href="/contato">
                Falar com a ÁgilMed
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
