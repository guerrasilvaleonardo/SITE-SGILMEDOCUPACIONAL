// Catálogo de análises clínicas.
//
// COMO EDITAR
// -----------
// Cada exame é uma linha com três campos:
//   nome    → como aparece na lista
//   avalia  → o que o exame mostra, em uma frase
//   preparo → o que o paciente precisa fazer antes
//
// Para TIRAR um exame que a ÁgilMed não coleta, apague a linha inteira.
// Para ACRESCENTAR, copie uma linha e troque o conteúdo.
//
// IMPORTANTE: confirme esta lista com o laboratório antes de publicar.
// Anunciar exame que não se coleta gera viagem perdida e reclamação.

export const gruposLaboratoriais = [
  {
    id: 'hematologia',
    nome: 'Hematologia',
    resumo: 'Células do sangue, coagulação e tipagem.',
    exames: [
      { nome: 'Hemograma completo', avalia: 'Glóbulos vermelhos, brancos e plaquetas — investiga anemia, infecção e alterações de defesa.', preparo: 'Não precisa de jejum.' },
      { nome: 'Plaquetas', avalia: 'Contagem das células responsáveis pela coagulação do sangue.', preparo: 'Não precisa de jejum.' },
      { nome: 'Reticulócitos', avalia: 'Produção de novos glóbulos vermelhos pela medula óssea.', preparo: 'Não precisa de jejum.' },
      { nome: 'Coagulograma', avalia: 'Tempo que o sangue leva para coagular — pedido antes de cirurgia e no controle de anticoagulante.', preparo: 'Não precisa de jejum. Informe se usa anticoagulante.' },
      { nome: 'Tipagem sanguínea e fator Rh', avalia: 'Define o grupo sanguíneo (A, B, AB ou O) e o fator Rh.', preparo: 'Não precisa de jejum.' },
      { nome: 'Coombs direto', avalia: 'Anticorpos ligados aos glóbulos vermelhos.', preparo: 'Não precisa de jejum.' },
      { nome: 'Coombs indireto', avalia: 'Anticorpos livres no sangue — rotina do pré-natal.', preparo: 'Não precisa de jejum.' },
    ],
  },
  {
    id: 'bioquimica',
    nome: 'Bioquímica e perfil metabólico',
    resumo: 'Açúcar, gorduras, rim, fígado e minerais.',
    exames: [
      { nome: 'Glicose', avalia: 'Açúcar no sangue — rastreio e acompanhamento de diabetes.', preparo: 'Jejum de 8 horas.' },
      { nome: 'Hemoglobina glicosilada', avalia: 'Média do açúcar no sangue dos últimos três meses.', preparo: 'Não precisa de jejum.' },
      { nome: 'Colesterol total', avalia: 'Gordura circulante no sangue.', preparo: 'Jejum de 12 horas, salvo orientação médica.' },
      { nome: 'HDL', avalia: 'A fração do colesterol que protege os vasos.', preparo: 'Jejum de 12 horas, salvo orientação médica.' },
      { nome: 'LDL', avalia: 'A fração do colesterol associada ao risco cardiovascular.', preparo: 'Jejum de 12 horas, salvo orientação médica.' },
      { nome: 'VLDL', avalia: 'Fração do colesterol ligada aos triglicerídeos.', preparo: 'Jejum de 12 horas, salvo orientação médica.' },
      { nome: 'Triglicerídeos', avalia: 'Gordura ligada à alimentação e ao consumo de álcool.', preparo: 'Jejum de 12 horas e sem álcool por 72 horas.' },
      { nome: 'Ureia', avalia: 'Função dos rins.', preparo: 'Jejum de 8 horas.' },
      { nome: 'Creatinina', avalia: 'Função dos rins — o principal marcador de filtração renal.', preparo: 'Jejum de 8 horas.' },
      { nome: 'TGO', avalia: 'Enzima do fígado e do músculo.', preparo: 'Jejum de 8 horas. Evite esforço físico intenso na véspera.' },
      { nome: 'GGT', avalia: 'Enzima do fígado, sensível ao consumo de álcool.', preparo: 'Jejum de 8 horas e sem álcool por 72 horas.' },
      { nome: 'Fosfatase alcalina', avalia: 'Enzima do fígado, da via biliar e dos ossos.', preparo: 'Jejum de 8 horas.' },
      { nome: 'Bilirrubinas', avalia: 'Pigmento produzido pelo fígado — investiga icterícia.', preparo: 'Jejum de 8 horas.' },
      { nome: 'Proteínas totais e frações', avalia: 'Albumina e globulinas, ligadas à nutrição e ao fígado.', preparo: 'Jejum de 8 horas.' },
      { nome: 'Amilase', avalia: 'Enzima do pâncreas.', preparo: 'Jejum de 8 horas.' },
      { nome: 'CK e CK-MB', avalia: 'Enzimas do músculo e do coração.', preparo: 'Jejum de 8 horas. Não faça esforço físico intenso nas 72 horas anteriores.' },
      { nome: 'LDH', avalia: 'Enzima presente em vários tecidos, usada como marcador geral.', preparo: 'Jejum de 8 horas.' },
      { nome: 'Cálcio', avalia: 'Mineral do osso, do músculo e da condução nervosa.', preparo: 'Jejum de 8 horas.' },
      { nome: 'Fósforo', avalia: 'Mineral ligado ao osso e à função renal.', preparo: 'Jejum de 8 horas.' },
      { nome: 'Magnésio', avalia: 'Mineral ligado ao músculo e ao ritmo cardíaco.', preparo: 'Jejum de 8 horas.' },
      { nome: 'Sódio', avalia: 'Equilíbrio de água e sais no organismo.', preparo: 'Jejum de 8 horas.' },
      { nome: 'Potássio', avalia: 'Mineral essencial para o ritmo do coração.', preparo: 'Jejum de 8 horas.' },
      { nome: 'Ferro', avalia: 'Ferro circulante — investiga anemia.', preparo: 'Jejum de 8 horas. Suspenda suplemento de ferro conforme orientação médica.' },
      { nome: 'Ferritina', avalia: 'Estoque de ferro do organismo.', preparo: 'Jejum de 8 horas.' },
    ],
  },
  {
    id: 'hormonios',
    nome: 'Hormônios',
    resumo: 'Tireoide, hormônios sexuais e gestação.',
    exames: [
      { nome: 'TSH', avalia: 'Hormônio que comanda a tireoide — o primeiro exame do rastreio de hipo e hipertireoidismo.', preparo: 'Não precisa de jejum. Prefira a coleta pela manhã.' },
      { nome: 'T3', avalia: 'Hormônio da tireoide.', preparo: 'Não precisa de jejum.' },
      { nome: 'T4', avalia: 'Hormônio da tireoide.', preparo: 'Não precisa de jejum.' },
      { nome: 'T4 livre', avalia: 'Fração ativa do hormônio da tireoide.', preparo: 'Não precisa de jejum.' },
      { nome: 'FSH', avalia: 'Hormônio ligado à fertilidade e ao ciclo menstrual.', preparo: 'Informe o dia do ciclo menstrual na coleta.' },
      { nome: 'LH', avalia: 'Hormônio ligado à ovulação e à fertilidade.', preparo: 'Informe o dia do ciclo menstrual na coleta.' },
      { nome: 'Estradiol', avalia: 'Principal hormônio feminino.', preparo: 'Informe o dia do ciclo menstrual na coleta.' },
      { nome: 'Progesterona', avalia: 'Hormônio da segunda fase do ciclo menstrual.', preparo: 'Informe o dia do ciclo menstrual na coleta.' },
      { nome: 'Prolactina', avalia: 'Hormônio ligado à mama e ao ciclo menstrual.', preparo: 'Coleta pela manhã, após 30 minutos de repouso no local.' },
      { nome: 'Testosterona livre', avalia: 'Fração ativa do principal hormônio masculino.', preparo: 'Coleta pela manhã.' },
      { nome: 'SHBG', avalia: 'Proteína que transporta os hormônios sexuais.', preparo: 'Jejum de 8 horas.' },
      { nome: 'Beta HCG quantitativo', avalia: 'Confirma e acompanha a gestação.', preparo: 'Não precisa de jejum.' },
    ],
  },
  {
    id: 'sorologia',
    nome: 'Sorologias e imunologia',
    resumo: 'Hepatites, HIV, inflamação e imunidade.',
    exames: [
      { nome: 'HIV', avalia: 'Anticorpos e antígeno do vírus HIV.', preparo: 'Não precisa de jejum. O resultado é sigiloso e entregue ao próprio paciente.' },
      { nome: 'HBsAg', avalia: 'Antígeno de superfície da hepatite B — indica infecção ativa.', preparo: 'Não precisa de jejum.' },
      { nome: 'Anti-HBs', avalia: 'Anticorpo protetor da hepatite B — mostra se a vacina funcionou.', preparo: 'Não precisa de jejum.' },
      { nome: 'Anti-HBc IgG', avalia: 'Contato prévio com o vírus da hepatite B.', preparo: 'Não precisa de jejum.' },
      { nome: 'Anti-HBc IgM', avalia: 'Infecção recente pelo vírus da hepatite B.', preparo: 'Não precisa de jejum.' },
      { nome: 'HCV', avalia: 'Anticorpos do vírus da hepatite C.', preparo: 'Não precisa de jejum.' },
      { nome: 'PCR — proteína C reativa', avalia: 'Marcador de inflamação e infecção.', preparo: 'Não precisa de jejum.' },
      { nome: 'ASLO', avalia: 'Anticorpo contra estreptococo, ligado a infecções de garganta.', preparo: 'Jejum de 8 horas.' },
      { nome: 'Fator reumatoide', avalia: 'Anticorpo associado à artrite reumatoide.', preparo: 'Jejum de 8 horas.' },
      { nome: 'Rubéola IgG', avalia: 'Imunidade contra rubéola.', preparo: 'Não precisa de jejum.' },
      { nome: 'Rubéola IgM', avalia: 'Infecção recente por rubéola.', preparo: 'Não precisa de jejum.' },
      { nome: 'Toxoplasmose IgG', avalia: 'Contato prévio com o toxoplasma — rotina do pré-natal.', preparo: 'Não precisa de jejum.' },
      { nome: 'Toxoplasmose IgM', avalia: 'Infecção recente por toxoplasma.', preparo: 'Não precisa de jejum.' },
    ],
  },
  {
    id: 'urina-fezes',
    nome: 'Urina e fezes',
    resumo: 'Rotina de urina, parasitas e sangue oculto.',
    exames: [
      { nome: 'EAS — urina rotina', avalia: 'Infecção urinária, sangue, proteína e açúcar na urina.', preparo: 'Primeira urina da manhã, jato médio, em frasco fornecido pela clínica. Higiene local antes.' },
      { nome: 'Parasitológico de fezes', avalia: 'Vermes e protozoários intestinais.', preparo: 'Amostra em frasco próprio, entregue no mesmo dia da coleta.' },
      { nome: 'MIF — parasitológico com conservante', avalia: 'Pesquisa de parasitas em amostras de dias diferentes.', preparo: 'Três amostras em dias alternados, no frasco com conservante.' },
      { nome: 'Pesquisa de sangue oculto nas fezes', avalia: 'Sangramento não visível no intestino.', preparo: 'Pode exigir dieta nos dias anteriores — a orientação é dada no agendamento.' },
      { nome: 'Pesquisa de gorduras fecais', avalia: 'Má absorção de gordura pelo intestino.', preparo: 'Dieta orientada nos dias anteriores à coleta.' },
    ],
  },
  {
    id: 'microbiologia',
    nome: 'Microbiologia e citologia',
    resumo: 'Bacterioscopia, preventivo, malária e espermograma.',
    exames: [
      { nome: 'Bacterioscopia de orofaringe', avalia: 'Bactérias presentes na garganta.', preparo: 'Em jejum e sem escovar os dentes ou usar antisséptico bucal antes.' },
      { nome: 'Bacterioscopia vaginal, uretral ou perianal', avalia: 'Bactérias e fungos na região genital.', preparo: 'Sem relação sexual, creme vaginal ou ducha por 48 horas. Fora do período menstrual.' },
      { nome: 'Citologia cervical oncótica (preventivo)', avalia: 'Alterações nas células do colo do útero.', preparo: 'Fora do período menstrual. Sem relação sexual, creme ou ducha por 72 horas.' },
      { nome: 'Pesquisa de Plasmodium (malária)', avalia: 'Presença do parasita da malária no sangue.', preparo: 'Sem jejum. A coleta rende mais durante o pico de febre.' },
      { nome: 'Espermograma', avalia: 'Quantidade, movimento e forma dos espermatozoides.', preparo: 'Abstinência sexual de 2 a 5 dias. Coleta com hora marcada.' },
      { nome: 'PSA total', avalia: 'Marcador da próstata.', preparo: 'Sem relação sexual, bicicleta ou toque retal por 48 horas antes.' },
      { nome: 'PSA livre', avalia: 'Fração livre do marcador da próstata, usada junto com o PSA total.', preparo: 'Sem relação sexual, bicicleta ou toque retal por 48 horas antes.' },
    ],
  },
];

export const totalLaboratoriais = gruposLaboratoriais.reduce((n, g) => n + g.exames.length, 0);
