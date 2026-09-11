export const exames = [
  {
    slug: 'admissional',
    nome: 'Exame admissional',
    h1: 'Exame admissional',
    titulo: 'Exame admissional em Porto Velho',
    descricao:
      'Exame admissional em Porto Velho com avaliação clínica, complementares no mesmo endereço e ASO emitido no mesmo dia. Agende pelo WhatsApp.',
    chamada:
      'Avaliação clínica e complementares no mesmo endereço, com ASO emitido no mesmo dia. Seu colaborador não perde o turno e a contratação não trava.',
    intro: [
      'O exame admissional avalia se o candidato está apto para a função que vai exercer, considerando os riscos daquele posto de trabalho. Ele precisa acontecer antes de o colaborador assumir a função — é o que determina a NR-7.',
      'Na ÁgilMed a avaliação clínica e os exames complementares acontecem no mesmo endereço, o que elimina o vaivém entre clínica e laboratório e devolve o colaborador à empresa no mesmo dia.',
    ],
    essencial: [
      ['Quando fazer', 'Antes de o colaborador assumir a função'],
      ['Entrega do ASO', 'No mesmo dia da avaliação'],
      ['Complementares', 'Conforme os riscos previstos no PCMSO'],
      ['Agendamento', 'Obrigatório, pelo WhatsApp ou telefone'],
      ['Em lote', 'Horário exclusivo para contratações em volume'],
    ],
    levar: [
      { titulo: 'Documento com foto', texto: 'RG, CNH ou carteira de trabalho digital' },
      { titulo: 'Guia da empresa', texto: 'Com a função exata que será exercida' },
      { titulo: 'Óculos ou lentes', texto: 'Se usar — a acuidade visual é avaliada' },
      { titulo: 'Exames anteriores', texto: 'ASO ou laudo recente, se houver' },
    ],
    incluso: [
      {
        titulo: 'Avaliação clínica ocupacional',
        texto: 'Anamnese e exame físico dirigidos aos riscos da função',
      },
      {
        titulo: 'Complementares conforme o PCMSO',
        texto: 'Audiometria, espirometria, ECG, acuidade visual e laboratoriais, quando indicados',
      },
      {
        titulo: 'Emissão do ASO',
        texto: 'Assinado pelo médico examinador, em duas vias',
      },
      {
        titulo: 'Apoio no eSocial',
        texto: 'Evento S-2220 preparado e transmitido no prazo, mediante procuração',
      },
    ],
    faq: [
      {
        pergunta: 'O exame admissional pode ser feito depois da admissão?',
        resposta:
          'Não. A NR-7 determina que o exame admissional seja realizado antes de o trabalhador assumir suas atividades.',
      },
      {
        pergunta: 'Quais exames complementares serão pedidos?',
        resposta:
          'Depende dos riscos da função, definidos no PCMSO da empresa. Quem trabalha exposto a ruído costuma fazer audiometria; quem dirige profissionalmente faz o exame toxicológico exigido para as categorias C, D e E.',
      },
      {
        pergunta: 'Por quanto tempo o ASO admissional vale?',
        resposta:
          'O ASO admissional não tem prazo de validade próprio. O que conta é a periodicidade do exame seguinte, definida no PCMSO conforme risco, idade e função.',
      },
      {
        pergunta: 'Dá para agendar vários colaboradores no mesmo dia?',
        resposta:
          'Sim. Para contratações em lote reservamos horário exclusivo, o que evita fila e concentra o atendimento em um único período.',
      },
    ],
  },
  {
    slug: 'periodico',
    nome: 'Exame periódico',
    h1: 'Exame periódico',
    titulo: 'Exame periódico ocupacional em Porto Velho',
    descricao:
      'Exame periódico ocupacional em Porto Velho: monitoramento da saúde do trabalhador conforme o PCMSO, com complementares no mesmo endereço.',
    chamada:
      'O exame que acompanha a saúde do trabalhador ao longo do contrato e detecta alteração antes de ela virar afastamento.',
    intro: [
      'O periódico é o exame que monitora a saúde do colaborador durante o contrato de trabalho. A periodicidade é definida no PCMSO conforme o risco a que ele está exposto, a idade e a função — em geral anual, podendo ser bienal em situações de risco menor.',
      'É também o exame mais esquecido: quando a empresa não tem controle de vencimentos, o periódico atrasa, o programa fica incompleto e a irregularidade aparece na fiscalização. Nossos clientes recebem todo mês o Boletim de Antecedência com o que vence nos próximos 90 dias.',
    ],
    essencial: [
      ['Periodicidade', 'Definida no PCMSO conforme risco, idade e função'],
      ['Mais comum', 'Anual, podendo ser bienal em risco menor'],
      ['Complementares', 'Audiometria, espirometria, ECG e laboratoriais, quando indicados'],
      ['Atendimento in company', 'Disponível para grupos, mediante avaliação'],
      ['Controle de prazos', 'Incluído no Boletim de Antecedência mensal'],
    ],
    levar: [
      { titulo: 'Documento com foto', texto: 'RG, CNH ou carteira de trabalho digital' },
      { titulo: 'Guia da empresa', texto: 'Com a função atual do colaborador' },
      { titulo: 'ASO anterior', texto: 'Ajuda a comparar a evolução dos resultados' },
      { titulo: 'Óculos ou lentes', texto: 'Se usar, para a avaliação de acuidade visual' },
    ],
    incluso: [
      { titulo: 'Avaliação clínica dirigida ao risco', texto: 'Comparando com os exames anteriores do colaborador' },
      { titulo: 'Complementares do PCMSO', texto: 'Realizados na própria clínica, sem encaminhamento' },
      { titulo: 'Emissão do ASO', texto: 'Assinado pelo médico examinador' },
      { titulo: 'Controle do próximo vencimento', texto: 'Registrado e avisado com antecedência' },
    ],
    faq: [
      {
        pergunta: 'De quanto em quanto tempo o periódico precisa ser feito?',
        resposta:
          'A periodicidade é definida no PCMSO da empresa, com base no risco ocupacional, na idade do trabalhador e na função. O intervalo anual é o mais comum.',
      },
      {
        pergunta: 'O que acontece se o periódico atrasar?',
        resposta:
          'O trabalhador fica sem ASO válido e a empresa fica com o PCMSO incompleto, o que pode ser apontado em fiscalização e enfraquece a defesa em ação trabalhista.',
      },
      {
        pergunta: 'Dá para fazer os periódicos dentro da empresa?',
        resposta:
          'Em parte. A avaliação clínica pode ser feita in company conforme a estrutura disponível; alguns complementares exigem equipamento que fica na clínica. Avaliamos caso a caso.',
      },
      {
        pergunta: 'Como saber quem está vencendo este mês?',
        resposta:
          'Empresas atendidas pela ÁgilMed recebem o Boletim de Antecedência todo mês, com os vencimentos dos próximos 90 dias organizados por colaborador e por setor.',
      },
    ],
  },
  {
    slug: 'demissional',
    nome: 'Exame demissional',
    h1: 'Exame demissional',
    titulo: 'Exame demissional em Porto Velho',
    descricao:
      'Exame demissional em Porto Velho dentro do prazo legal, com ASO no mesmo dia. Segurança jurídica no desligamento do colaborador.',
    chamada:
      'O exame que encerra o contrato com segurança jurídica — e cujo prazo, quando perdido, costuma reaparecer como ação trabalhista.',
    intro: [
      'O demissional avalia a condição de saúde do trabalhador no encerramento do contrato. Ele é o registro de que o colaborador saiu da empresa apto, e é justamente esse registro que a empresa não tem quando o exame é feito fora do prazo ou simplesmente não é feito.',
      'A NR-7 dispensa o demissional quando existe um exame médico ocupacional recente, dentro dos prazos previstos na norma conforme o grau de risco. Na dúvida, o mais barato é fazer: o custo do exame é uma fração do custo de discutir a ausência dele.',
    ],
    essencial: [
      ['Quando fazer', 'No encerramento do contrato, dentro do prazo da NR-7'],
      ['Dispensa', 'Possível quando há exame recente, conforme o grau de risco'],
      ['Entrega do ASO', 'No mesmo dia da avaliação'],
      ['Agendamento', 'Pelo WhatsApp, com prioridade para prazos curtos'],
      ['Registro', 'Arquivado e disponível para a empresa'],
    ],
    levar: [
      { titulo: 'Documento com foto', texto: 'RG, CNH ou carteira de trabalho digital' },
      { titulo: 'Guia da empresa', texto: 'Informando a data do desligamento' },
      { titulo: 'ASO anterior', texto: 'Para comparação com o último exame realizado' },
      { titulo: 'Exames recentes', texto: 'Se houver acompanhamento em curso' },
    ],
    incluso: [
      { titulo: 'Avaliação clínica de desligamento', texto: 'Comparada ao histórico ocupacional do colaborador' },
      { titulo: 'Complementares, quando indicados', texto: 'Conforme o risco a que o trabalhador esteve exposto' },
      { titulo: 'Emissão do ASO demissional', texto: 'Assinado pelo médico examinador' },
      { titulo: 'Apoio no eSocial', texto: 'Evento S-2220 no prazo, mediante procuração' },
    ],
    faq: [
      {
        pergunta: 'Qual o prazo para fazer o exame demissional?',
        resposta:
          'A NR-7 define que o demissional seja realizado até a data do desligamento, e permite a dispensa quando existe exame ocupacional dentro dos prazos previstos na norma conforme o grau de risco da empresa.',
      },
      {
        pergunta: 'O demissional é obrigatório mesmo em pedido de demissão?',
        resposta:
          'A regra vale para o encerramento do contrato, independentemente de quem tomou a iniciativa, observadas as hipóteses de dispensa previstas na norma.',
      },
      {
        pergunta: 'O que acontece se a empresa não fizer o demissional?',
        resposta:
          'A empresa fica sem o registro da condição de saúde do trabalhador na saída, o que fragiliza sua posição em eventual discussão sobre doença ocupacional e pode ser autuado em fiscalização.',
      },
      {
        pergunta: 'Vocês atendem demissional com urgência?',
        resposta:
          'Sim. Quando o prazo está curto, priorizamos o agendamento — é o caso mais comum de urgência que chega até nós.',
      },
    ],
  },
  {
    slug: 'retorno-ao-trabalho',
    nome: 'Retorno ao trabalho',
    h1: 'Exame de retorno ao trabalho',
    titulo: 'Exame de retorno ao trabalho em Porto Velho',
    descricao:
      'Exame de retorno ao trabalho em Porto Velho após afastamento de 30 dias ou mais, com avaliação de aptidão para a função.',
    chamada:
      'Obrigatório no primeiro dia de volta após afastamento de 30 dias ou mais — por doença, acidente ou parto.',
    intro: [
      'O exame de retorno ao trabalho avalia se o colaborador está apto a reassumir a função depois de um afastamento igual ou superior a 30 dias, seja por doença, acidente ou parto. Ele deve ser realizado no primeiro dia de volta.',
      'É o exame em que mais importa a conversa entre médico e empresa: um retorno mal avaliado devolve o trabalhador a um posto que pode agravar o quadro, e é aí que nasce boa parte das readaptações tardias e dos afastamentos recorrentes.',
    ],
    essencial: [
      ['Quando fazer', 'No primeiro dia de volta ao trabalho'],
      ['Motivo', 'Afastamento igual ou superior a 30 dias'],
      ['Avaliação', 'Aptidão para a função e necessidade de restrição'],
      ['Resultado possível', 'Apto, apto com restrição ou necessidade de mudança de função'],
      ['Acompanhamento', 'Gestão de afastados e readaptação, quando necessário'],
    ],
    levar: [
      { titulo: 'Documento com foto', texto: 'RG, CNH ou carteira de trabalho digital' },
      { titulo: 'Guia da empresa', texto: 'Com a função para a qual está retornando' },
      { titulo: 'Documentos do afastamento', texto: 'Atestados, relatórios e alta do tratamento' },
      { titulo: 'Exames do período', texto: 'Realizados durante o afastamento' },
    ],
    incluso: [
      { titulo: 'Avaliação clínica de retorno', texto: 'Considerando o motivo e a duração do afastamento' },
      { titulo: 'Análise da compatibilidade com a função', texto: 'Confrontando restrições com os riscos do posto' },
      { titulo: 'Emissão do ASO', texto: 'Com registro de restrições, quando houver' },
      { titulo: 'Orientação à empresa', texto: 'Sobre adequação de posto e acompanhamento' },
    ],
    faq: [
      {
        pergunta: 'Afastamento de menos de 30 dias exige exame de retorno?',
        resposta:
          'A obrigatoriedade prevista na NR-7 vale para afastamentos iguais ou superiores a 30 dias. Abaixo disso, a avaliação pode ser feita por decisão do médico coordenador do PCMSO.',
      },
      {
        pergunta: 'O colaborador pode voltar a trabalhar antes do exame?',
        resposta:
          'Não. O exame deve ocorrer no primeiro dia do retorno, antes que ele reassuma as atividades.',
      },
      {
        pergunta: 'E se o trabalhador não puder voltar para a mesma função?',
        resposta:
          'O ASO pode registrar restrições ou indicar a necessidade de mudança de função. A empresa precisa então adequar o posto ou realocar o colaborador, e o caso passa a exigir acompanhamento.',
      },
      {
        pergunta: 'Vocês acompanham casos de afastamento longo?',
        resposta:
          'Sim. A gestão de afastados faz parte do acompanhamento que oferecemos às empresas contratantes, incluindo retorno, readaptação e mudança de função.',
      },
    ],
  },
  {
    slug: 'mudanca-de-risco',
    nome: 'Mudança de risco',
    h1: 'Exame de mudança de risco ocupacional',
    titulo: 'Exame de mudança de risco ocupacional em Porto Velho',
    descricao:
      'Exame obrigatório quando o trabalhador muda de função ou passa a se expor a riscos diferentes dos previstos no PCMSO.',
    chamada:
      'Obrigatório antes de o colaborador começar a trabalhar exposto a um risco diferente do que constava na avaliação anterior.',
    intro: [
      'Quando um colaborador muda de função ou passa a se expor a riscos ocupacionais diferentes dos anteriores, é preciso reavaliar sua aptidão antes que ele comece na nova atividade. É o exame de mudança de risco ocupacional.',
      'É o exame mais ignorado das promoções e remanejamentos internos: a empresa move alguém do administrativo para a produção sem reavaliar, e o ASO que está no arquivo passa a descrever um risco que não é mais o real.',
    ],
    essencial: [
      ['Quando fazer', 'Antes do início na nova função ou exposição'],
      ['Motivo', 'Alteração dos riscos ocupacionais a que o trabalhador se expõe'],
      ['Avaliação', 'Aptidão para os novos riscos, com complementares próprios'],
      ['Documento', 'Novo ASO, referente à nova condição'],
      ['eSocial', 'Evento S-2220 correspondente'],
    ],
    levar: [
      { titulo: 'Documento com foto', texto: 'RG, CNH ou carteira de trabalho digital' },
      { titulo: 'Guia da empresa', texto: 'Com a função anterior e a nova função' },
      { titulo: 'ASO anterior', texto: 'Referente à função que está sendo deixada' },
      { titulo: 'Óculos ou lentes', texto: 'Se usar, para a avaliação de acuidade visual' },
    ],
    incluso: [
      { titulo: 'Avaliação clínica dirigida ao novo risco', texto: 'Considerando a exposição que passa a existir' },
      { titulo: 'Complementares da nova função', texto: 'Conforme o que o PCMSO prevê para aquele posto' },
      { titulo: 'Emissão do novo ASO', texto: 'Assinado pelo médico examinador' },
      { titulo: 'Atualização do controle', texto: 'Nova periodicidade registrada no Boletim mensal' },
    ],
    faq: [
      {
        pergunta: 'Toda mudança de função exige exame?',
        resposta:
          'A obrigatoriedade existe quando a mudança implica exposição a riscos ocupacionais diferentes dos que constavam na avaliação anterior. Mudanças sem alteração de risco não exigem novo exame.',
      },
      {
        pergunta: 'Promoção dentro do mesmo setor conta?',
        resposta:
          'Depende do que muda na prática. Se a nova atribuição colocar o colaborador diante de outro agente de risco — ruído, produto químico, altura, direção veicular — o exame é necessário.',
      },
      {
        pergunta: 'Quem define quais complementares serão feitos?',
        resposta:
          'O PCMSO da empresa, que relaciona cada função aos riscos e aos exames correspondentes. É por isso que o programa precisa estar atualizado.',
      },
      {
        pergunta: 'O exame pode ser feito depois da mudança?',
        resposta:
          'Não. Ele precisa anteceder o início da nova atividade, da mesma forma que o admissional antecede a admissão.',
      },
    ],
  },
  {
    slug: 'complementares',
    nome: 'Exames complementares',
    h1: 'Exames complementares',
    titulo: 'Exames complementares ocupacionais em Porto Velho',
    descricao:
      'Audiometria, espirometria, ECG, EEG, acuidade visual e exames laboratoriais ocupacionais no mesmo endereço, em Porto Velho.',
    chamada:
      'Audiometria, espirometria, ECG, EEG, acuidade visual e laboratoriais — na própria clínica, sem encaminhamento e sem outra viagem.',
    intro: [
      'Exames complementares são os exames que a avaliação clínica não substitui: eles medem o efeito de um risco específico sobre o organismo do trabalhador. Quais serão feitos, e com que frequência, é o PCMSO da empresa que define.',
      'Na ÁgilMed eles são realizados no mesmo endereço da avaliação clínica. Isso importa mais do que parece: em Porto Velho, o padrão do mercado é encaminhar o colaborador para um segundo endereço, o que significa outro deslocamento, outra fila e, muitas vezes, outro dia de trabalho perdido.',
    ],
    essencial: [
      ['Audiometria', 'Exposição a ruído e programa de conservação auditiva'],
      ['Espirometria', 'Exposição a poeiras, névoas, fumos e agentes químicos'],
      ['Eletrocardiograma (ECG)', 'Funções com esforço, altura, espaço confinado e faixas etárias'],
      ['Eletroencefalograma (EEG)', 'Funções de risco definidas no programa da empresa'],
      ['Acuidade visual', 'Praticamente todas as funções operacionais'],
      ['Laboratoriais', 'Conforme o agente de risco de cada posto'],
    ],
    levar: [
      { titulo: 'Documento com foto', texto: 'RG, CNH ou carteira de trabalho digital' },
      { titulo: 'Guia da empresa', texto: 'Com a função e os exames solicitados' },
      { titulo: 'Repouso auditivo', texto: 'Para audiometria, evitar exposição a ruído antes do exame' },
      { titulo: 'Exames anteriores', texto: 'Permitem comparar a evolução ao longo dos anos' },
    ],
    incluso: [
      { titulo: 'Realização no mesmo endereço', texto: 'Sem encaminhamento para outra clínica ou laboratório' },
      { titulo: 'Laudo do exame', texto: 'Interpretado junto com a avaliação clínica ocupacional' },
      { titulo: 'Comparação com o histórico', texto: 'O que permite detectar alteração antes do dano' },
      { titulo: 'Registro no controle de prazos', texto: 'Para que a próxima realização não atrase' },
    ],
    faq: [
      {
        pergunta: 'Quem define quais exames complementares são necessários?',
        resposta:
          'O PCMSO da empresa, elaborado a partir dos riscos identificados no PGR. Cada função tem sua relação de exames e sua periodicidade.',
      },
      {
        pergunta: 'A audiometria precisa de preparo?',
        resposta:
          'Sim. O trabalhador deve chegar em repouso auditivo, ou seja, sem exposição a ruído elevado nas horas que antecedem o exame, para que o resultado não seja mascarado.',
      },
      {
        pergunta: 'Vocês fazem exame toxicológico?',
        resposta:
          'Fale com a nossa equipe sobre o exame toxicológico: o exame de larga janela exigido para as categorias C, D e E da CNH só pode ser realizado por laboratório credenciado, e orientamos cada empresa sobre o fluxo correto.',
      },
      {
        pergunta: 'Os complementares podem ser feitos no mesmo dia da avaliação clínica?',
        resposta:
          'Sim, e é assim que trabalhamos sempre que possível. É o que permite emitir o ASO no mesmo dia.',
      },
    ],
  },
];

export const getExame = (slug) => exames.find((e) => e.slug === slug);

// URL de cada exame: slug de busca local, sem versão genérica duplicada.
export const urlExame = (slug) =>
  slug === 'complementares' ? '/exames-complementares-porto-velho' : `/exame-${slug}-porto-velho`;

export const slugsLocais = exames.map((e) => ({
  local: urlExame(e.slug).replace('/', ''),
  exame: e.slug,
}));

export const getExamePorLocal = (local) => {
  const par = slugsLocais.find((s) => s.local === local);
  return par ? getExame(par.exame) : undefined;
};
