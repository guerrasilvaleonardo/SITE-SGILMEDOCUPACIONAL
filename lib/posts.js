export const posts = [
  {
    slug: 'aso-o-que-precisa-conter',
    territorio: 'O que fiscalizam',
    titulo: 'O ASO que volta para correção: o que o documento precisa conter',
    descricao:
      'O atestado de saúde ocupacional não é só apto ou inapto. Quais campos o documento precisa trazer, por que o ASO escaneado gera retrabalho e o que a clínica deve entregar ao RH.',
    resumo:
      'Quem transmite o evento ao eSocial não é a clínica — mas é dela que vem o dado. ASO incompleto vira retrabalho no escritório de contabilidade e retificação depois.',
    data: '2026-09-12',
    dataTexto: '12 de setembro de 2026',
    leitura: '5 min',
    corpo: [
      {
        tipo: 'p',
        texto:
          'O atestado de saúde ocupacional parece um documento simples: a pessoa fez o exame, está apta ou inapta, assina o médico. Na prática, ele é a origem de uma informação que vai percorrer a empresa, o escritório de contabilidade e o eSocial — e um campo faltando no começo dessa cadeia vira retrabalho no fim dela.',
      },
      {
        tipo: 'p',
        texto:
          'Este texto é sobre o que o ASO precisa trazer, do ponto de vista de quem o emite.',
      },
      { tipo: 'h2', texto: 'O que a NR-7 manda constar' },
      {
        tipo: 'lista',
        itens: [
          'Nome completo do trabalhador, o número de identidade e a função que ele exerce.',
          'Os riscos ocupacionais específicos daquela função, ou a ausência deles.',
          'Os exames complementares realizados, com a data de cada um.',
          'O nome do médico coordenador do programa, quando existir, com CRM.',
          'A definição de apto ou inapto para a função — e as restrições, quando houver.',
          'Nome, CRM e assinatura do médico examinador, com a data.',
        ],
      },
      {
        tipo: 'p',
        texto:
          'Repare que são duas figuras médicas distintas, e confundi-las é um dos erros mais frequentes. O médico examinador é quem avaliou aquela pessoa naquele dia. O médico coordenador é quem responde pelo programa de saúde da empresa, e pode ser outra pessoa, de outra empresa.',
      },
      {
        tipo: 'destaque',
        rotulo: 'Quem faz o quê',
        texto:
          'A ÁgilMed realiza o exame e emite o ASO. O PCMSO, que define quais exames cada função precisa fazer, é elaborado pela Real Life Engenharia de SSMA. A transmissão dos eventos ao eSocial é da empresa ou do escritório de contabilidade que responde por ela.',
      },
      { tipo: 'h2', texto: 'Por que o PDF escaneado atrapalha' },
      {
        tipo: 'p',
        texto:
          'Quando o ASO chega ao RH como uma imagem digitalizada, alguém precisa ler e digitar os dados à mão para alimentar o sistema e o evento. Cada digitação é uma chance de erro — e o erro só aparece na rejeição, dias depois, quando ninguém lembra mais daquele exame.',
      },
      {
        tipo: 'p',
        texto:
          'O que resolve não é tecnologia: é entregar o ASO com os campos organizados e legíveis, e manter a relação dos exames realizados de forma que possa ser conferida sem lupa. É o mínimo que uma clínica deve ao RH que a contratou.',
      },
      { tipo: 'h2', texto: 'Os quatro problemas que mais geram correção' },
      {
        tipo: 'lista-numerada',
        itens: [
          {
            titulo: 'Função descrita de um jeito na guia e de outro no ASO.',
            texto:
              'A função precisa bater com a que consta no registro do trabalhador. Divergência aqui compromete a relação entre o risco avaliado e o cargo declarado.',
          },
          {
            titulo: 'Exame complementar sem data.',
            texto:
              'Não basta dizer que a audiometria foi feita: a data de cada complementar precisa estar no documento, porque é ela que conta para a periodicidade seguinte.',
          },
          {
            titulo: 'Restrição escrita de forma vaga.',
            texto:
              'Apto com restrição exige dizer qual restrição. “Apto com ressalvas” não informa nada ao RH e não protege ninguém — nem o trabalhador, nem a empresa.',
          },
          {
            titulo: 'O ASO que fica na gaveta do RH.',
            texto:
              'O documento emitido no dia 30 e enviado ao escritório no dia 20 do mês seguinte já chega com o prazo praticamente vencido. O envio precisa ser parte da rotina, não do fim do mês.',
          },
        ],
      },
      { tipo: 'h2', texto: 'O que você pode cobrar da sua clínica' },
      {
        tipo: 'lista',
        itens: [
          'ASO em duas vias, uma para o trabalhador e uma para a empresa, no mesmo dia do exame.',
          'Nome e CRM do médico examinador legíveis, sem depender de decifrar assinatura.',
          'A relação dos complementares realizados, com data, em formato que o RH consiga conferir.',
          'Aviso de vencimento antes do prazo, e não a lista do que já venceu.',
        ],
      },
      {
        tipo: 'p',
        texto:
          'O último item é o que menos se cobra e o que mais evita problema. Exame vencido não emite alerta, não trava sistema e não aparece em relatório — a empresa descobre no dia em que alguém pede o documento. É por isso que enviamos aos nossos clientes, todo mês, a lista dos exames que vencem nos próximos noventa dias.',
      },
      {
        tipo: 'p',
        texto:
          'Se você é do RH ou do escritório de contabilidade e quer entender como funciona o nosso fluxo de entrega, fale com a gente pelo WhatsApp.',
      },
    ],
    relacionados: [
      { href: '/exames', rotulo: 'Exames ocupacionais na ÁgilMed', territorio: 'Serviço' },
      { href: '/boletim', rotulo: 'Boletim de Antecedência: o que vence em 90 dias', territorio: 'Ferramenta' },
      { href: '/exame-admissional-porto-velho', rotulo: 'Exame admissional em Porto Velho', territorio: 'Busca local' },
    ],
  },
];

export const getPost = (slug) => posts.find((p) => p.slug === slug);
