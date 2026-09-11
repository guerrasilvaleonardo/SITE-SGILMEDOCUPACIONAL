import Link from 'next/link';
import { metadadosPagina, jsonLdBreadcrumb, jsonLdFaq, whatsappUrl } from '@/lib/site';
import Trilha from '@/components/Trilha';
import JsonLd from '@/components/JsonLd';
import Faq from '@/components/Faq';
import Check from '@/components/Check';
import Formulario from '@/components/Formulario';

export const metadata = metadadosPagina({
  titulo: 'Riscos psicossociais no PGR — NR-1',
  descricao:
    'Avaliação de riscos psicossociais conduzida por psicólogo, inventário no PGR e programa contínuo, para atender a exigência da NR-1 em Porto Velho.',
  caminho: '/riscos-psicossociais-nr1',
});

const trilha = [
  { href: '/', rotulo: 'Início' },
  { href: '/riscos-psicossociais-nr1', rotulo: 'Riscos psicossociais' },
];

const perguntas = [
  {
    pergunta: 'Desde quando a exigência vale?',
    resposta:
      'A Portaria MTE nº 1.419/2024 incluiu os fatores de risco psicossocial na NR-1. O início da fiscalização estava previsto para maio de 2025, foi adiado e passou a valer em 26 de maio de 2026.',
  },
  {
    pergunta: 'Que empresas precisam se adequar?',
    resposta:
      'A obrigação de gerenciar riscos ocupacionais alcança as organizações que admitem trabalhadores como empregados, observadas as simplificações previstas na NR-1 conforme porte e grau de risco.',
  },
  {
    pergunta: 'Isso é a mesma coisa que programa de saúde mental?',
    resposta:
      'Não. Ações de bem-estar são bem-vindas, mas a norma trata de identificar, avaliar e controlar fatores ligados à organização do trabalho — ritmo, jornada, autonomia, relações hierárquicas e assédio — dentro do gerenciamento de riscos.',
  },
  {
    pergunta: 'A avaliação precisa ser feita por psicólogo?',
    resposta:
      'A norma não determina a profissão. Na ÁgilMed a avaliação é conduzida por psicólogo porque o instrumento e a condução das entrevistas exigem essa formação — e porque o resultado precisa sustentar decisão técnica, não impressão.',
  },
  {
    pergunta: 'Quanto tempo leva a adequação?',
    resposta:
      'Em empresas de porte pequeno e médio, o ciclo de avaliação e inclusão no inventário costuma levar de três a quatro semanas. O programa de acompanhamento é contínuo.',
  },
];

const etapas = [
  {
    n: 'Etapa 01 · 2 semanas',
    titulo: 'Avaliação',
    texto: 'Instrumento aplicado com os colaboradores e entrevistas com lideranças, conduzidos por psicólogo.',
    assina: 'Assina: psicólogo · CRP',
  },
  {
    n: 'Etapa 02 · 1 semana',
    titulo: 'Inventário e plano',
    texto: 'Os achados entram no inventário de riscos do PGR com medidas de controle, responsável e prazo.',
    assina: 'Assina: responsável técnico · CREA',
  },
  {
    n: 'Etapa 03 · contínuo',
    titulo: 'Programa e revisão',
    texto: 'Ações com as lideranças, acompanhamento dos casos que chegam ao exame e revisão anual.',
    assina: 'Assina: médico do trabalho · CRM',
  },
];

export default function Psicossociais() {
  return (
    <>
      <JsonLd dados={jsonLdBreadcrumb(trilha)} />
      <JsonLd dados={jsonLdFaq(perguntas)} />
      <Trilha itens={trilha} />

      <section style={{ paddingBlock: '26px 56px' }}>
        <div className="wrap hero-grade">
          <div className="hero-texto">
            <span className="chip">Fiscalização desde 26 de maio de 2026</span>
            <h1>Riscos psicossociais no PGR: um contrato, um relatório.</h1>
            <p className="lede">
              A NR-1 passou a exigir que a empresa identifique e controle os fatores de risco
              psicossocial dentro do gerenciamento de riscos. Aqui isso não vira três fornecedores: a
              avaliação é conduzida por psicólogo, o inventário é assinado por responsável técnico e o
              acompanhamento clínico fica com o mesmo time.
            </p>
            <div className="acoes">
              <a className="btn btn-primario" href={whatsappUrl('Olá! Quero falar sobre a adequação aos riscos psicossociais da NR-1.')} target="_blank" rel="noopener noreferrer">
                Solicitar diagnóstico
              </a>
              <span style={{ fontSize: 15, color: 'var(--tinta-3)' }}>Resposta em até 1 dia útil.</span>
            </div>
          </div>

          <div className="cartao" style={{ padding: 30, gap: 16 }}>
            <span className="rotulo">O que está em jogo</span>
            <div className="lista-checada">
              {[
                'O auditor-fiscal pode autuar a empresa cujo PGR não trate dos fatores psicossociais',
                'A obrigação acompanha o gerenciamento de riscos, que alcança empresas de qualquer porte com empregados',
                'O prazo já foi adiado uma vez, em 2025. Desta vez entrou em vigor',
              ].map((t) => (
                <div className="item-checado" key={t}>
                  <Check />
                  <p>{t}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 13.5, color: 'var(--tinta-4)', lineHeight: 1.55 }}>
              Base: NR-1 atualizada e Portaria MTE nº 1.419/2024. Texto informativo, que não substitui
              a leitura da norma.
            </p>
          </div>
        </div>
      </section>

      <section className="secao secao-fundo">
        <div className="wrap">
          <div className="secao-cabeca">
            <h2>O que a fiscalização espera encontrar</h2>
          </div>
          <div className="grade g2">
            {[
              ['Os fatores identificados por função', 'Ritmo, jornada, metas, autonomia, relações de trabalho e exposição a assédio — mapeados onde acontecem, não em texto genérico.'],
              ['A avaliação registrada no inventário', 'Dentro do inventário de riscos do PGR, com método descrito e data, e não como anexo solto.'],
              ['Plano de ação com responsável e prazo', 'Medidas de controle definidas, com quem responde por cada uma e até quando.'],
              ['Evidência de que virou rotina', 'Ações realizadas, comunicação com a equipe e revisão periódica — o que separa o programa real do documento de gaveta.'],
            ].map(([t, d]) => (
              <div className="cartao" key={t} style={{ flexDirection: 'row', gap: 16, alignItems: 'flex-start' }}>
                <Check />
                <div>
                  <h3>{t}</h3>
                  <p style={{ marginTop: 6 }}>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="secao">
        <div className="wrap">
          <div className="secao-cabeca">
            <h2>Como funciona, em três etapas</h2>
          </div>
          <div className="grade g3">
            {etapas.map((e) => (
              <div className="cartao" key={e.titulo} style={{ background: 'var(--fundo)', border: 'none' }}>
                <span className="mono" style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--azul-claro)' }}>
                  {e.n}
                </span>
                <h3 style={{ fontSize: 22 }}>{e.titulo}</h3>
                <p>{e.texto}</p>
                <span className="mono" style={{ fontSize: 12.5, color: 'var(--tinta-4)', paddingTop: 6 }}>
                  {e.assina.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="secao secao-fundo">
        <div className="wrap grade g2">
          <div className="cartao" style={{ padding: 32 }}>
            <span className="rotulo rotulo-cinza">A parte clínica</span>
            <h3 style={{ fontSize: 24 }}>ÁgilMed Ocupacional</h3>
            <p>
              Psicologia, neuropsicologia, medicina do trabalho, PCMSO e os exames que dão sequência
              ao que a avaliação encontrar.
            </p>
          </div>
          <div className="cartao" style={{ padding: 32, background: '#fff' }}>
            <span className="rotulo rotulo-cinza">A parte de engenharia</span>
            <h3 style={{ fontSize: 24 }}>Real Life SSMA</h3>
            <p>
              PGR, inventário de riscos, laudos e treinamentos, com responsável técnico registrado no
              CREA-RO.{' '}
              <a href="https://www.reallifessma.com.br" target="_blank" rel="noopener">
                Conhecer →
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="secao">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <Faq perguntas={perguntas} />
        </div>
      </section>

      <section className="secao secao-fundo">
        <div className="wrap hero-grade">
          <div>
            <div className="secao-cabeca">
              <h2>Comece pelo diagnóstico</h2>
              <p style={{ color: 'var(--tinta-3)' }}>
                Em uma conversa de 30 minutos dizemos o que falta no seu PGR hoje e quanto tempo leva
                para regularizar.
              </p>
            </div>
            <Formulario
              origem="psicossocial"
              campos={['empresa', 'email', 'telefone', 'colaboradores']}
              rotuloEnvio="Solicitar diagnóstico"
            />
          </div>
          <div className="destaque">
            <span className="rotulo">Enquanto isso</span>
            <p style={{ fontSize: 16.5, lineHeight: 1.6 }}>
              Se quiser entender o tema antes de falar com a gente, o artigo do blog explica o que
              mudou, o que precisa estar no PGR e os erros mais comuns.
            </p>
            <p style={{ marginTop: 12 }}>
              <Link href="/blog/riscos-psicossociais-pgr-nr1">Ler o artigo →</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
