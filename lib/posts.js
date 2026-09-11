export const posts = [
  {
    slug: 'riscos-psicossociais-pgr-nr1',
    territorio: 'O que fiscalizam',
    titulo: 'Riscos psicossociais no PGR: o que o auditor-fiscal cobra desde 26 de maio',
    descricao:
      'A NR-1 passou a exigir o gerenciamento dos fatores de risco psicossocial. O que mudou, o que precisa estar no PGR e os quatro erros mais comuns.',
    resumo:
      'A obrigação entrou na NR-1 em 2024, mas a fiscalização só passou a valer neste ano. Quem ainda trata o assunto como "bem-estar" está com o programa incompleto.',
    data: '2026-09-15',
    dataTexto: '15 de setembro de 2026',
    leitura: '6 min',
    corpo: [
      {
        tipo: 'p',
        texto:
          'A NR-1 foi atualizada pela Portaria MTE nº 1.419/2024 para incluir os fatores de risco psicossocial no gerenciamento de riscos ocupacionais. O início da fiscalização estava previsto para maio de 2025, foi adiado, e passou a valer em 26 de maio de 2026. Desde então, o auditor-fiscal do trabalho pode autuar a empresa cujo PGR não trate desses fatores.',
      },
      {
        tipo: 'p',
        texto:
          'Não é um programa novo nem um documento separado: é um capítulo que passou a faltar no programa que a empresa já tinha. E é justamente por isso que tanta gente ainda não percebeu a lacuna — o PGR está lá, atualizado, assinado, e mesmo assim incompleto.',
      },
      { tipo: 'h2', texto: 'O que conta como risco psicossocial' },
      {
        tipo: 'p',
        texto:
          'Não é sobre diagnóstico de saúde mental nem sobre a vida pessoal do colaborador. São condições de organização do trabalho que a empresa controla: ritmo e volume de tarefas, jornada e pausas, clareza do que se espera de cada função, autonomia na execução, qualidade das relações hierárquicas e exposição a assédio ou violência no ambiente.',
      },
      {
        tipo: 'p',
        texto:
          'A distinção importa na prática. Quando a empresa entende o tema como "cuidar da saúde mental de quem está mal", ela contrata palestra. Quando entende como risco ocupacional, ela olha para a escala de turnos, para a meta que ninguém alcança sem hora extra e para o supervisor de quem todo mundo reclama — que é onde o risco realmente mora.',
      },
      {
        tipo: 'destaque',
        rotulo: 'O que a norma pede',
        texto:
          'O gerenciamento de riscos ocupacionais deve contemplar os fatores de risco psicossocial relacionados ao trabalho, com identificação, avaliação e adoção de medidas de prevenção — dentro do inventário de riscos do PGR, e não como anexo à parte.',
      },
      { tipo: 'h2', texto: 'Os quatro erros mais comuns' },
      {
        tipo: 'lista-numerada',
        itens: [
          {
            titulo: 'Tratar como ação de bem-estar.',
            texto:
              'Palestra de saúde mental, ginástica laboral e campanha de setembro são bem-vindas, mas não substituem a identificação do risco no inventário. Elas são, no máximo, parte do plano de ação — nunca o plano inteiro.',
          },
          {
            titulo: 'Texto genérico, igual para toda a empresa.',
            texto:
              'Os fatores mudam por função. Quem atende cliente na ponta não vive o mesmo risco de quem opera máquina em turno noturno, e um parágrafo padrão copiado para todos os setores é a primeira coisa que o auditor identifica.',
          },
          {
            titulo: 'Avaliação sem plano de ação.',
            texto:
              'Identificar o risco sem definir medida, responsável e prazo deixa o programa incompleto — e, pior, registra por escrito que a empresa sabia do problema e não agiu.',
          },
          {
            titulo: 'Nenhuma evidência de continuidade.',
            texto:
              'Sem revisão periódica, comunicação com a equipe e registro das ações realizadas, o que existe é um documento, não um programa. A diferença aparece na primeira fiscalização.',
          },
        ],
      },
      { tipo: 'h2', texto: 'O que o auditor procura primeiro' },
      {
        tipo: 'lista',
        itens: [
          'Os fatores identificados por função, e não em texto único para toda a organização.',
          'A avaliação registrada dentro do inventário de riscos, com método descrito e data.',
          'Plano de ação com medida de controle, responsável e prazo para cada risco relevante.',
          'Evidência de que o programa roda: ações executadas, comunicação e revisão.',
        ],
      },
      { tipo: 'h2', texto: 'Por onde começar' },
      {
        tipo: 'p',
        texto:
          'O caminho mais curto é aplicar um instrumento de avaliação com os colaboradores, entrevistar as lideranças e levar os achados para dentro do inventário de riscos, com as medidas de controle correspondentes. Em empresas de porte pequeno e médio, isso leva de três a quatro semanas. O que atrasa não costuma ser o método — é a decisão de começar.',
      },
      {
        tipo: 'p',
        texto:
          'Um detalhe prático que evita retrabalho: a avaliação precisa ser conduzida por profissional habilitado, e o inventário de riscos é documento de engenharia, assinado por responsável técnico. Quando essas duas pontas estão em fornecedores que não se falam, o documento costuma voltar para ajuste — e o prazo, que já era curto, encurta mais.',
      },
      {
        tipo: 'p',
        texto:
          'Se a sua empresa ainda não revisou o PGR depois de maio, esse é o item mais urgente da lista de SST deste ano. Não porque o risco de multa apareceu — mas porque o risco que a norma trata já estava lá antes de a fiscalização começar.',
      },
    ],
    relacionados: [
      { href: '/riscos-psicossociais-nr1', rotulo: 'Como funciona a adequação à NR-1', territorio: 'Serviço' },
      { href: '/programas-e-laudos/pcmso', rotulo: 'PCMSO: o que é e quem elabora', territorio: 'O que vence' },
      { href: '/exame-admissional-porto-velho', rotulo: 'Exame admissional em Porto Velho', territorio: 'Busca local' },
    ],
  },
];

export const getPost = (slug) => posts.find((p) => p.slug === slug);
