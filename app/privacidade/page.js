import { site, metadadosPagina, jsonLdBreadcrumb } from '@/lib/site';
import Trilha from '@/components/Trilha';
import JsonLd from '@/components/JsonLd';
import Check from '@/components/Check';

export const metadata = metadadosPagina({
  titulo: 'Política de Privacidade',
  descricao:
    'Como a ÁgilMed Ocupacional trata os dados enviados pelo site, quais são as bases legais, com quem compartilha e como exercer seus direitos na LGPD.',
  caminho: '/privacidade',
});

const trilha = [
  { href: '/', rotulo: 'Início' },
  { href: '/privacidade', rotulo: 'Privacidade' },
];

const atualizadoEm = '12 de setembro de 2026';

const coleta = [
  {
    canal: 'Formulário do Boletim de Antecedência',
    dados: 'Empresa, CNPJ, nome do responsável, e-mail, telefone e número de colaboradores.',
  },
  {
    canal: 'Formulários de proposta e de agendamento em lote',
    dados: 'Empresa, nome, e-mail, telefone, número de colaboradores e a mensagem que você escrever.',
  },
  {
    canal: 'Formulário de contato',
    dados: 'Empresa, nome, e-mail, telefone e a mensagem que você escrever.',
  },
  {
    canal: 'WhatsApp',
    dados:
      'Ao clicar nos botões de WhatsApp, a conversa passa a ocorrer no aplicativo, sob a política de privacidade da Meta. Alguns botões já abrem o aplicativo com um texto preenchido, que você pode alterar antes de enviar.',
  },
  {
    canal: 'Registros técnicos de navegação',
    dados:
      'Endereço IP, data e hora do acesso e páginas visitadas, gerados automaticamente pelo serviço de hospedagem para funcionamento e segurança do site.',
  },
];

const direitos = [
  'Confirmar se tratamos dados seus e acessar esses dados',
  'Corrigir dados incompletos, inexatos ou desatualizados',
  'Pedir anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade com a lei',
  'Pedir a portabilidade dos dados a outro fornecedor',
  'Saber com quais entidades compartilhamos seus dados',
  'Revogar o consentimento, quando o tratamento se basear nele',
  'Opor-se a tratamento feito com base no legítimo interesse',
];

export default function Privacidade() {
  return (
    <>
      <JsonLd dados={jsonLdBreadcrumb(trilha)} />
      <Trilha itens={trilha} />

      <article>
        <div className="wrap artigo-cabeca">
          <span className="rotulo">LGPD · Lei nº 13.709/2018</span>
          <h1>Política de Privacidade</h1>
          <p className="lede">
            Esta política explica quais dados a ÁgilMed Ocupacional coleta neste site, por que os
            coleta, com quem os compartilha e como você pode exercer seus direitos.
          </p>
          <p className="mono" style={{ fontSize: 13, color: 'var(--tinta-4)' }}>
            Última atualização: {atualizadoEm}
          </p>
        </div>

        <div className="wrap artigo-corpo" style={{ paddingBottom: 24 }}>
          <h2>1. Quem trata seus dados</h2>
          <p>
            O controlador dos dados é a <strong>ÁgilMed Ocupacional</strong>, inscrita no CNPJ
            [00.000.000/0001-00], com endereço na {site.endereco.rua}, {site.endereco.bairro},{' '}
            {site.endereco.cidade}/{site.endereco.uf}, CEP {site.endereco.cep}.
          </p>
          <p>
            Para assuntos de proteção de dados, o contato é{' '}
            <a href={`mailto:${site.email}`}>{site.email}</a>. O encarregado pelo tratamento de dados
            pessoais é [NOME DO ENCARREGADO], que pode ser acionado pelo mesmo endereço.
          </p>

          <h2>2. Quais dados coletamos neste site</h2>
          <p>
            Coletamos apenas o que você envia por vontade própria nos formulários, mais os registros
            técnicos que qualquer site gera ao ser acessado.
          </p>

          <div className="tabela-essencial" style={{ margin: '4px 0 8px' }}>
            <div className="tabela-essencial-topo">Por canal</div>
            {coleta.map((item) => (
              <div
                key={item.canal}
                style={{ padding: '14px 20px', borderBottom: '1px solid var(--linha)' }}
              >
                <strong style={{ display: 'block', fontFamily: 'var(--fonte-titulo), sans-serif', fontSize: 15.5 }}>
                  {item.canal}
                </strong>
                <span style={{ display: 'block', fontSize: 15, color: 'var(--tinta-3)', marginTop: 3 }}>
                  {item.dados}
                </span>
              </div>
            ))}
          </div>

          <p>
            O site <strong>não usa cookies</strong>, não possui ferramentas de análise de audiência
            nem pixels de publicidade. Não criamos perfis de comportamento e não tomamos decisões
            automatizadas sobre você.
          </p>

          <h2>3. Por que tratamos esses dados</h2>
          <p>
            Cada uso tem uma base legal prevista na LGPD, e usamos os dados apenas para a finalidade
            que motivou o envio:
          </p>
          <ul>
            <li>
              <strong>Responder seu contato, elaborar proposta e organizar agendamento</strong> —
              procedimentos preliminares e execução de contrato a seu pedido (art. 7º, V).
            </li>
            <li>
              <strong>Enviar o Boletim de Antecedência</strong> à empresa que o solicitou — execução
              do contrato e legítimo interesse em manter o cliente informado dos próprios prazos
              (art. 7º, V e IX).
            </li>
            <li>
              <strong>Cumprir obrigações legais</strong> de saúde e segurança do trabalho, sanitárias
              e fiscais (art. 7º, II).
            </li>
            <li>
              <strong>Manter o site seguro e funcionando</strong> — legítimo interesse (art. 7º, IX).
            </li>
          </ul>
          <p>
            Não enviamos comunicação comercial a quem não pediu, e não vendemos, alugamos ou cedemos
            seus dados para terceiros fazerem oferta.
          </p>

          <h2>4. Dados de saúde: o site não é o canal</h2>
          <div className="destaque destaque-ambar">
            <p>
              <strong>Não envie resultados de exames, laudos, atestados, diagnósticos ou qualquer
              informação sobre sua saúde pelos formulários deste site ou pelo WhatsApp.</strong>{' '}
              Se essa informação for necessária, nossa equipe indicará o canal adequado.
            </p>
          </div>
          <p>
            Os dados de saúde tratados no atendimento — dentro da clínica, não pelo site — são
            informações sensíveis e seguem regime próprio: sigilo profissional e tratamento para
            tutela da saúde, realizado por profissionais de saúde, conforme o art. 11, II, da LGPD, e
            as obrigações da legislação de saúde e segurança do trabalho.
          </p>
          <p>
            Nos exames ocupacionais realizados a pedido do empregador, a empresa recebe o Atestado de
            Saúde Ocupacional com a conclusão de <strong>aptidão ou inaptidão para a função</strong>,
            e as restrições quando existirem. <strong>Diagnósticos e detalhes clínicos não são
            informados ao empregador</strong>, e permanecem protegidos pelo sigilo médico.
          </p>

          <h2>5. Com quem compartilhamos</h2>
          <p>
            Não comercializamos dados. Eles podem ser acessados por prestadores estritamente
            necessários ao funcionamento dos nossos canais, que atuam como operadores e só podem usar
            os dados conforme nossas instruções:
          </p>
          <ul>
            <li>
              <strong>Hospedagem do site</strong>, que mantém os registros técnicos de acesso e
              processa os dados em servidores localizados fora do Brasil.
            </li>
            <li>
              <strong>Serviço de envio e hospedagem de e-mail</strong>, por onde chegam até nós as
              mensagens dos formulários.
            </li>
            <li>
              <strong>Google Fonts</strong>, que fornece as fontes tipográficas do site; ao carregar
              a página, o servidor do Google recebe o seu endereço IP.
            </li>
            <li>
              <strong>WhatsApp (Meta)</strong>, quando você escolhe falar conosco por esse canal.
            </li>
            <li>
              <strong>Autoridades públicas</strong>, quando houver obrigação legal, requisição
              judicial ou fiscalização.
            </li>
          </ul>
          <p>
            Parte desses serviços processa dados no exterior. Nesses casos a transferência
            internacional observa o disposto no art. 33 da LGPD e as garantias contratuais oferecidas
            pelos fornecedores.
          </p>

          <h2>6. Por quanto tempo guardamos</h2>
          <ul>
            <li>
              <strong>Mensagens e contatos do site:</strong> pelo tempo necessário ao atendimento e,
              depois, pelo prazo em que possam ser necessários para o exercício regular de direitos.
            </li>
            <li>
              <strong>Dados de empresas clientes:</strong> durante a vigência do contrato e pelos
              prazos legais aplicáveis depois do encerramento.
            </li>
            <li>
              <strong>Prontuário e registros de saúde:</strong> pelo prazo mínimo previsto na
              legislação aplicável, que para o prontuário é de vinte anos a contar do último registro
              (Lei nº 13.787/2018).
            </li>
            <li>
              <strong>Registros de saúde e segurança do trabalho:</strong> pelos prazos previstos na
              NR-7 e nas demais normas trabalhistas aplicáveis.
            </li>
          </ul>

          <h2>7. Segurança</h2>
          <p>
            Adotamos medidas técnicas e administrativas para proteger os dados contra acesso não
            autorizado, perda e uso indevido — entre elas o acesso restrito às pessoas que precisam
            dele para trabalhar, conexão criptografada em todo o site e sigilo profissional da equipe.
            Nenhum sistema é infalível; se ocorrer um incidente com risco relevante aos titulares,
            comunicaremos os afetados e a Autoridade Nacional de Proteção de Dados, conforme a lei.
          </p>

          <h2>8. Seus direitos</h2>
          <p>A LGPD garante a você, a qualquer momento e sem custo:</p>
        </div>

        <div className="wrap" style={{ maxWidth: 720, paddingBottom: 8 }}>
          <div className="lista-checada">
            {direitos.map((d) => (
              <div className="item-checado" key={d}>
                <Check />
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="wrap artigo-corpo" style={{ paddingTop: 24, paddingBottom: 24 }}>
          <p>
            Para exercer qualquer um deles, escreva para{' '}
            <a href={`mailto:${site.email}`}>{site.email}</a> com o assunto <em>Proteção de dados</em>
            . Responderemos no menor prazo possível. Podemos pedir informações que confirmem sua
            identidade antes de atender ao pedido, justamente para não entregar seus dados a outra
            pessoa.
          </p>
          <p>
            Alguns pedidos têm limite legal: dados que precisamos manter por obrigação normativa —
            como prontuário e registros de SST — não podem ser eliminados antes do prazo previsto em
            lei, mesmo a pedido do titular.
          </p>

          <h2>9. Alterações desta política</h2>
          <p>
            Se passarmos a usar cookies, ferramentas de análise de audiência ou qualquer recurso que
            colete mais dados do que o descrito aqui, esta página será atualizada antes disso e
            passará a exibir o aviso de consentimento correspondente. A data da última atualização
            fica sempre no topo.
          </p>
        </div>

        <section className="secao secao-fundo">
          <div className="wrap grade g2">
            <div className="cartao" style={{ padding: 28 }}>
              <span className="rotulo">Exercer seus direitos</span>
              <h3 style={{ fontSize: 21 }}>Acesso, correção ou exclusão</h3>
              <p>
                Envie o pedido para <a href={`mailto:${site.email}`}>{site.email}</a> com o assunto
                “Proteção de dados”, informando qual direito quer exercer.
              </p>
            </div>
            <div className="cartao" style={{ padding: 28 }}>
              <span className="rotulo">Dúvidas sobre privacidade</span>
              <h3 style={{ fontSize: 21 }}>Fale com o encarregado</h3>
              <p>
                Dúvidas sobre como tratamos seus dados podem ser enviadas para{' '}
                <a href={`mailto:${site.email}`}>{site.email}</a>, aos cuidados do encarregado pelo
                tratamento de dados pessoais.
              </p>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
