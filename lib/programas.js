export const programas = [
  {
    slug: 'pcmso',
    nome: 'PCMSO',
    h1: 'PCMSO — Programa de Controle Médico de Saúde Ocupacional',
    titulo: 'PCMSO em Porto Velho',
    descricao:
      'Elaboração e coordenação do PCMSO em Porto Velho: relação de exames por função, periodicidade, relatório anual e controle de vencimentos.',
    chamada:
      'O programa médico da empresa: define quais exames cada função faz, com que frequência, e o que acontece quando um resultado sai alterado.',
    intro: [
      'O PCMSO é o programa que organiza a vigilância da saúde dos trabalhadores. Ele parte dos riscos levantados no PGR e traduz cada um deles em exames: quem faz, qual exame, de quanto em quanto tempo e qual a conduta quando o resultado indica alteração.',
      'Um PCMSO bem feito não é um documento para arquivar — é o que sustenta a defesa da empresa em fiscalização e em ação trabalhista, e é o que faz a clínica saber, em outubro, quem precisa de exame em novembro.',
    ],
    entregas: [
      {
        titulo: 'Relação de exames por função',
        texto: 'Cada cargo com seus riscos, seus exames complementares e sua periodicidade.',
      },
      {
        titulo: 'Coordenação por médico do trabalho',
        texto: 'O programa é coordenado por médico responsável, que responde tecnicamente por ele.',
      },
      {
        titulo: 'Relatório analítico anual',
        texto: 'Consolida os achados do ano e orienta as ações do ciclo seguinte.',
      },
      {
        titulo: 'Controle de vencimentos',
        texto: 'Os prazos entram no Boletim de Antecedência mensal da sua empresa.',
      },
    ],
    perguntas: [
      {
        pergunta: 'Toda empresa precisa de PCMSO?',
        resposta:
          'A obrigação alcança as organizações que admitem trabalhadores como empregados, observadas as dispensas e simplificações previstas na NR-1 e na NR-7 conforme porte e grau de risco.',
      },
      {
        pergunta: 'Qual a diferença entre PCMSO e PGR?',
        resposta:
          'O PGR é o programa de gerenciamento dos riscos do ambiente, de responsabilidade da engenharia de segurança. O PCMSO é o programa médico que decorre dele: o que o PGR identifica como risco, o PCMSO transforma em exame e acompanhamento de saúde.',
      },
      {
        pergunta: 'De quanto em quanto tempo o PCMSO é revisado?',
        resposta:
          'A revisão acompanha o ciclo anual do programa e precisa ser refeita sempre que houver mudança nos riscos, nas funções ou na estrutura da empresa.',
      },
      {
        pergunta: 'Vocês assumem o PCMSO de quem já tem um programa feito?',
        resposta:
          'Sim. Nesse caso começamos por uma leitura crítica do programa atual, apontando o que está desatualizado em relação aos riscos reais antes de assumir a coordenação.',
      },
    ],
  },
  {
    slug: 'esocial-sst',
    nome: 'eSocial SST',
    h1: 'eSocial SST: eventos S-2210, S-2220 e S-2240',
    titulo: 'eSocial SST em Porto Velho',
    descricao:
      'Apoio no envio dos eventos de SST do eSocial — S-2220 e S-2240 — com prazos controlados e retificação de eventos rejeitados.',
    chamada:
      'Os eventos de saúde e segurança do eSocial, preparados e transmitidos no prazo — mediante procuração da empresa.',
    intro: [
      'Os eventos de SST do eSocial são três: S-2210 (comunicação de acidente de trabalho), S-2220 (monitoramento da saúde do trabalhador, onde entram os ASOs) e S-2240 (condições ambientais do trabalho, onde entram os agentes de risco por função).',
      'A obrigação de transmitir é da empresa. O que a ÁgilMed faz é preparar e enviar os eventos ligados aos exames que realiza, mediante procuração, e avisar quando algo é rejeitado — que é o ponto em que a maioria das empresas descobre o problema tarde demais.',
    ],
    entregas: [
      {
        titulo: 'S-2220 a partir dos exames',
        texto: 'Cada ASO emitido vira evento, com os dados que o sistema exige, dentro do prazo.',
      },
      {
        titulo: 'Apoio no S-2240',
        texto: 'Conferência entre os agentes de risco declarados e o que consta no PGR e no PCMSO.',
      },
      {
        titulo: 'Tratamento de rejeições',
        texto: 'Identificação do erro e retificação, em vez de evento pendente esquecido na fila.',
      },
      {
        titulo: 'Rotina com o contador',
        texto: 'Trabalhamos junto com quem cuida da folha, para não duplicar nem contradizer envio.',
      },
    ],
    perguntas: [
      {
        pergunta: 'A clínica pode enviar o eSocial pela empresa?',
        resposta:
          'A responsabilidade legal pelo envio é do empregador. A clínica pode transmitir em nome dele mediante procuração eletrônica, que é como operamos com as empresas que contratam esse apoio.',
      },
      {
        pergunta: 'Qual o prazo do S-2220?',
        resposta:
          'O evento de monitoramento da saúde deve ser enviado até o dia 15 do mês seguinte ao da realização do exame, observadas as regras vigentes do leiaute.',
      },
      {
        pergunta: 'O que é o S-2210?',
        resposta:
          'É a comunicação de acidente de trabalho, a CAT. Não é evento de rotina de exame: ele nasce de um acidente e tem prazo próprio, que é bem mais curto.',
      },
      {
        pergunta: 'Trabalham com escritórios de contabilidade?',
        resposta:
          'Sim, e preferimos. Quando o escritório contábil e a clínica falam direto, o evento sai certo na primeira tentativa e ninguém descobre pendência no fechamento.',
      },
    ],
  },
  {
    slug: 'gestao-de-afastados',
    nome: 'Gestão de afastados',
    h1: 'Gestão de afastados e retorno ao trabalho',
    titulo: 'Gestão de afastados em Porto Velho',
    descricao:
      'Acompanhamento de afastamentos, retorno ao trabalho, restrições e mudança de função, com avaliação médica e orientação à empresa.',
    chamada:
      'O acompanhamento do colaborador afastado — da saída ao retorno — para que a volta não vire um novo afastamento.',
    intro: [
      'Afastamento longo raramente é um evento isolado: ele costuma ter dado sinal antes, e costuma se repetir depois, quando o trabalhador volta para o mesmo posto sem que nada tenha mudado.',
      'A gestão de afastados acompanha esse ciclo inteiro — o exame de retorno, as restrições, a compatibilidade entre a condição do colaborador e os riscos da função, e a decisão sobre readaptação ou mudança de função.',
    ],
    entregas: [
      {
        titulo: 'Exame de retorno ao trabalho',
        texto: 'No primeiro dia de volta, com avaliação de aptidão para a função.',
      },
      {
        titulo: 'Análise de restrições',
        texto: 'Confronto entre a condição do trabalhador e os riscos do posto.',
      },
      {
        titulo: 'Orientação sobre readaptação',
        texto: 'O que precisa mudar no posto, ou para onde o colaborador pode ser realocado.',
      },
      {
        titulo: 'Acompanhamento dos casos abertos',
        texto: 'Os afastamentos em curso entram no acompanhamento mensal da empresa.',
      },
    ],
    perguntas: [
      {
        pergunta: 'Quando o exame de retorno é obrigatório?',
        resposta:
          'Em afastamentos iguais ou superiores a 30 dias, por doença, acidente ou parto. O exame deve ocorrer no primeiro dia de retorno.',
      },
      {
        pergunta: 'O que fazer quando o ASO indica restrição?',
        resposta:
          'A empresa precisa adequar o posto de trabalho à restrição ou realocar o colaborador em função compatível. Ignorar a restrição registrada é o caminho mais curto para o afastamento seguinte.',
      },
      {
        pergunta: 'Vocês avaliam o nexo entre a doença e o trabalho?',
        resposta:
          'A avaliação ocupacional considera a relação entre a condição de saúde e os riscos da função. O reconhecimento formal de nexo, quando existe, segue os trâmites próprios da Previdência.',
      },
      {
        pergunta: 'Isso serve para empresa pequena?',
        resposta:
          'Serve, e costuma valer ainda mais: em equipe pequena, um afastamento longo pesa proporcionalmente mais na operação.',
      },
    ],
  },
];

export const getPrograma = (slug) => programas.find((p) => p.slug === slug);
