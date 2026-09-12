import { site, metadadosPagina, jsonLdBreadcrumb } from '@/lib/site';
import Trilha from '@/components/Trilha';
import JsonLd from '@/components/JsonLd';

export const metadata = metadadosPagina({
  titulo: 'Privacidade e proteção de dados',
  descricao: 'Informações sobre o tratamento de dados enviados pelos canais digitais da Agilmed.',
  caminho: '/privacidade',
});

const trilha = [{ href: '/', rotulo: 'Início' }, { href: '/privacidade', rotulo: 'Privacidade' }];

export default function Privacidade() {
  return (
    <>
      <JsonLd dados={jsonLdBreadcrumb(trilha)} />
      <Trilha itens={trilha} />
      <article>
        <div className="wrap artigo-cabeca">
          <span className="rotulo">LGPD</span>
          <h1>Privacidade e proteção de dados</h1>
          <p className="lede">Como a Agilmed utiliza as informações enviadas pelos formulários e canais digitais.</p>
        </div>
        <div className="wrap artigo-corpo" style={{ paddingBottom: 72 }}>
          <h2>Dados de contato</h2>
          <p>Nome, telefone, e-mail, empresa e CNPJ são utilizados para responder solicitações, organizar atendimento e elaborar propostas quando solicitadas.</p>
          <h2>Dados de saúde</h2>
          <p>Não envie resultados, diagnósticos ou documentos médicos pelos formulários gerais do site. A equipe indicará o canal adequado e seguro quando essas informações forem necessárias.</p>
          <h2>Compartilhamento</h2>
          <p>Os dados não devem ser comercializados. Poderão ser tratados por prestadores necessários ao funcionamento dos canais, observadas as responsabilidades aplicáveis.</p>
          <h2>Seus direitos</h2>
          <p>Para solicitar acesso, correção ou esclarecimentos sobre seus dados, entre em contato pelo e-mail <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
          <div className="destaque"><p>Este texto é uma versão informativa inicial. A política definitiva deve ser validada pela assessoria jurídica e pelo responsável por proteção de dados da Agilmed.</p></div>
        </div>
      </article>
    </>
  );
}
