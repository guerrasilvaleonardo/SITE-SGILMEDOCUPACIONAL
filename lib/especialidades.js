// Atendimentos não médicos oferecidos à sociedade, cada um com página própria
// em /para-voce/<slug>. O nome e o registro de quem atende são obrigatórios:
// os conselhos exigem essa identificação em qualquer divulgação.

export const especialidades = [
  {
    slug: 'fisioterapia',
    nome: 'Fisioterapia',
    titulo: 'Fisioterapia em Porto Velho',
    descricao:
      'Atendimento de fisioterapia em Porto Velho: avaliação funcional, reabilitação após lesão ou cirurgia e orientação para dor e postura. Particular, com hora marcada.',
    chamada:
      'Avaliação funcional e plano de tratamento individual, para recuperar movimento e função depois de uma lesão, cirurgia ou quadro de dor.',
    profissional: {
      nome: 'Danielle Vanzini',
      registro: 'CREFITO 348541-F',
      papel: 'Fisioterapeuta responsável',
      nota: 'Fisioterapeuta pós-graduada em Ergonomia, também responsável pelas avaliações ergonômicas da Real Life SSMA.',
    },
    intro: [
      'A fisioterapia trabalha a função: como você se move, o que dói quando se move e o que é preciso recuperar para voltar às atividades do dia a dia ou do trabalho.',
      'O atendimento começa por uma avaliação. A partir dela, o fisioterapeuta define o plano — número de sessões, o que será feito em cada uma e o que você precisa manter em casa entre elas.',
      'Quando a queixa tem relação com o trabalho, a avaliação olha também para o posto: a mesma profissional que atende aqui responde pelas avaliações ergonômicas, o que permite ligar a dor ao que a pessoa faz oito horas por dia — e não apenas tratar o sintoma.',
    ],
    atendemos: [
      { titulo: 'Dor na coluna, ombro e joelho', texto: 'Avaliação do que está gerando a dor e conduta dirigida ao caso.' },
      { titulo: 'Recuperação pós-cirúrgica', texto: 'Retomada gradual de movimento e força, acompanhando a orientação médica.' },
      { titulo: 'Lesões e entorses', texto: 'Reabilitação após trauma, com progressão de carga controlada.' },
      { titulo: 'Queixas ligadas ao trabalho', texto: 'Desconforto por esforço repetitivo, postura ou carga, inclusive em quem está afastado.' },
    ],
    comoFunciona: [
      { n: '01', titulo: 'Avaliação', texto: 'Histórico, exame físico e testes funcionais para entender a origem da queixa.' },
      { n: '02', titulo: 'Plano de tratamento', texto: 'Objetivo, número estimado de sessões e o que será feito em cada etapa.' },
      { n: '03', titulo: 'Sessões e reavaliação', texto: 'Acompanhamento da evolução, com ajuste do plano quando necessário.' },
    ],
    faq: [
      {
        pergunta: 'Preciso de pedido médico para fazer fisioterapia?',
        resposta:
          'O fisioterapeuta pode avaliar e definir a conduta de forma autônoma. Se você já tem pedido, laudo ou exame de imagem, leve: ajuda a entender o quadro e evita repetir etapas.',
      },
      {
        pergunta: 'Quantas sessões vou precisar?',
        resposta:
          'Depende do quadro e só é possível estimar depois da avaliação. O plano é apresentado com um número previsto de sessões e revisto ao longo do tratamento.',
      },
      {
        pergunta: 'Atendem convênio?',
        resposta:
          'O atendimento é particular; não trabalhamos com convênios no momento. Valores e formas de pagamento são informados pelo WhatsApp antes do agendamento.',
      },
      {
        pergunta: 'Quem está afastado pelo INSS pode ser atendido?',
        resposta:
          'Sim. Nesses casos o acompanhamento costuma ser feito junto com a avaliação médica ocupacional, principalmente quando existe previsão de retorno ao trabalho.',
      },
    ],
  },
  {
    slug: 'psicologia',
    nome: 'Psicologia',
    titulo: 'Atendimento psicológico em Porto Velho',
    descricao:
      'Atendimento psicológico em Porto Velho, com psicólogo registrado no CRP. Acolhimento, avaliação e acompanhamento, em sigilo. Particular, com hora marcada.',
    chamada:
      'Um espaço reservado para falar sobre o que está pesando, com acompanhamento profissional e sigilo garantido por lei.',
    profissional: {
      nome: 'Josilane Alves Bandeira de Oliveira',
      registro: 'CRP 24/3487',
      papel: 'Psicóloga responsável',
      nota: 'Também acompanha a avaliação de riscos psicossociais das empresas atendidas pela clínica — o que não significa acesso ao conteúdo de nenhuma sessão: são trabalhos separados, e o sigilo do atendimento individual é absoluto.',
    },
    intro: [
      'O atendimento psicológico começa por uma conversa em que você diz o que o levou a procurar ajuda. A partir daí, o psicólogo e você definem a frequência e o foco do acompanhamento.',
      'Tudo o que é dito nas sessões é protegido pelo sigilo profissional. Isso vale inclusive quando o atendimento tem origem em alguma questão de trabalho: a empresa não tem acesso ao conteúdo das sessões.',
    ],
    atendemos: [
      { titulo: 'Ansiedade e estresse', texto: 'Acompanhamento de quadros que vêm atrapalhando o sono, o trabalho ou a convivência.' },
      { titulo: 'Questões do trabalho', texto: 'Sobrecarga, conflitos, assédio e o processo de retorno depois de um afastamento.' },
      { titulo: 'Momentos de transição', texto: 'Perdas, mudanças de fase e decisões difíceis, com espaço para pensar em voz alta.' },
      { titulo: 'Avaliação psicológica', texto: 'Quando há indicação, com devolutiva ao próprio avaliado.' },
    ],
    comoFunciona: [
      { n: '01', titulo: 'Primeira conversa', texto: 'Acolhimento da demanda e combinação de como o acompanhamento vai funcionar.' },
      { n: '02', titulo: 'Sessões', texto: 'Encontros com duração e frequência definidas junto com você.' },
      { n: '03', titulo: 'Revisão do processo', texto: 'De tempos em tempos, avaliação do que mudou e do que segue em aberto.' },
    ],
    faq: [
      {
        pergunta: 'A empresa fica sabendo o que eu falo na sessão?',
        resposta:
          'Não. O conteúdo das sessões é protegido pelo sigilo profissional do psicólogo, previsto no Código de Ética da profissão. Nem o empregador nem terceiros têm acesso.',
      },
      {
        pergunta: 'Psicólogo receita remédio?',
        resposta:
          'Não. A prescrição de medicamentos é ato médico. Quando há indicação, o psicólogo orienta a busca por avaliação médica e o acompanhamento pode seguir em conjunto.',
      },
      {
        pergunta: 'Quanto tempo dura o acompanhamento?',
        resposta:
          'Varia conforme a demanda e é sempre combinado com você. Não existe número fixo de sessões, e a decisão de continuar ou encerrar é sua.',
      },
      {
        pergunta: 'Atendem convênio?',
        resposta:
          'O atendimento é particular; não trabalhamos com convênios no momento. Valores e horários disponíveis são informados pelo WhatsApp.',
      },
    ],
  },
  {
    slug: 'nutricao',
    nome: 'Nutrição',
    titulo: 'Nutricionista em Porto Velho',
    descricao:
      'Consulta com nutricionista em Porto Velho: avaliação, plano alimentar individual e acompanhamento, considerando a sua rotina e o seu trabalho. Particular.',
    chamada:
      'Avaliação e plano alimentar individual, montado a partir da sua rotina real — inclusive de quem faz turno, viaja a trabalho ou come fora todo dia.',
    profissional: {
      nome: 'Daiane Carla Sansel',
      registro: 'CRN-7 9920',
      papel: 'Nutricionista responsável',
    },
    intro: [
      'A consulta começa por uma avaliação do seu histórico, da sua rotina e dos seus hábitos alimentares. O plano vem depois, feito para caber na sua vida — não em uma vida ideal.',
      'Para quem trabalha em turno, dirige, come no refeitório da empresa ou passa o dia fora, isso muda tudo: o plano precisa considerar o horário real das refeições e o que está disponível.',
    ],
    atendemos: [
      { titulo: 'Reeducação alimentar', texto: 'Mudança de hábitos com acompanhamento, sem dieta genérica de internet.' },
      { titulo: 'Acompanhamento de condições crônicas', texto: 'Conduta nutricional junto com o acompanhamento médico, quando houver.' },
      { titulo: 'Rotina de trabalho difícil', texto: 'Turno, viagem, refeitório e jornada longa considerados no plano.' },
      { titulo: 'Programas para empresas', texto: 'Ações de alimentação e saúde para equipes, dentro do programa de saúde da empresa.' },
    ],
    comoFunciona: [
      { n: '01', titulo: 'Avaliação', texto: 'Histórico, rotina, medidas e objetivos, com tempo para entender o seu contexto.' },
      { n: '02', titulo: 'Plano alimentar', texto: 'Montado com alimentos que você tem acesso e nos horários que consegue cumprir.' },
      { n: '03', titulo: 'Retornos', texto: 'Ajuste do plano conforme a evolução e as dificuldades que aparecerem.' },
    ],
    faq: [
      {
        pergunta: 'Preciso levar exames?',
        resposta:
          'Se tiver exames recentes, leve — ajudam na avaliação. Se não tiver, a consulta acontece normalmente e o nutricionista indica se algum exame é necessário.',
      },
      {
        pergunta: 'Vou receber uma dieta pronta?',
        resposta:
          'Não. O plano é individual e construído a partir da sua rotina, das suas preferências e do que você tem acesso no dia a dia.',
      },
      {
        pergunta: 'De quanto em quanto tempo é o retorno?',
        resposta:
          'Combinado na primeira consulta, conforme o objetivo. O acompanhamento é o que sustenta a mudança de hábito ao longo do tempo.',
      },
      {
        pergunta: 'A empresa pode contratar para a equipe?',
        resposta:
          'Sim. Ações de nutrição podem integrar o programa de saúde da empresa. Fale com a nossa equipe comercial pelo mesmo WhatsApp.',
      },
    ],
  },
];

export const getEspecialidade = (slug) => especialidades.find((e) => e.slug === slug);
