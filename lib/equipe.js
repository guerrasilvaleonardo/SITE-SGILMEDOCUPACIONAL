// Equipe da ÁgilMed Ocupacional.
//
// COMO PREENCHER QUEM AINDA ESTÁ FALTANDO
// ---------------------------------------
// Quem aparece no site é apenas quem tem "nome" e "registro" preenchidos.
// Enquanto o campo "registro" estiver entre colchetes, aquele profissional
// continua invisível no site — nada quebra, ele simplesmente não é exibido.
//
// Para publicar alguém que ainda está faltando:
//   1. troque o texto entre colchetes pelo registro real;
//   2. salve o arquivo.
//
// O registro deve ser copiado exatamente como está na carteira ou no carimbo
// do profissional (o conselho exige nome e número em qualquer divulgação).
//
// Hoje todos os profissionais estão com registro preenchido e visíveis no site.
// Para acrescentar alguém novo, copie um dos blocos abaixo e preencha os campos.

export const equipe = [
  {
    id: 'francynelle',
    nome: 'Dra. Francynelle Costa Assis',
    registro: 'CRM-RO 2477 · RQE 1920',
    papel: 'Responsável técnica · Medicina do Trabalho',
    area: 'medicina',
    resumo:
      'Responde tecnicamente pela clínica e pelos programas de saúde ocupacional. É quem assina o PCMSO, define os exames de cada função a partir dos riscos e conduz as avaliações de aptidão.',
    atua: ['PCMSO', 'Avaliação de aptidão', 'Gestão de afastados', 'Riscos psicossociais na NR-1'],
  },
  {
    id: 'camila',
    nome: 'Dra. Camila Sousa Ferreira',
    registro: 'CRM-RO 9772',
    papel: 'Médica · atendimento clínico',
    area: 'medicina',
    resumo:
      'Atende a consulta clínica particular: queixas do dia a dia, acompanhamento de quem já tem tratamento em curso, orientação preventiva e leitura de exames de rotina.',
    atua: ['Consulta clínica', 'Check-up e prevenção', 'Acompanhamento de rotina', 'Leitura de exames'],
  },
  {
    id: 'danielle',
    nome: 'Danielle Vanzini',
    registro: 'CREFITO 348541-F',
    papel: 'Fisioterapeuta · pós-graduada em Ergonomia',
    area: 'reabilitacao',
    resumo:
      'Atende reabilitação, dor e recuperação de movimento. Também responde pelas avaliações ergonômicas da Real Life SSMA, o que permite ligar a queixa do paciente ao posto de trabalho onde ela apareceu.',
    atua: ['Reabilitação', 'Dor na coluna, ombro e joelho', 'Pós-operatório', 'Ergonomia do posto'],
    pagina: '/para-voce/fisioterapia',
  },
  {
    id: 'psicologia',
    nome: 'Josilane Alves Bandeira de Oliveira',
    registro: 'CRP 24/3487',
    papel: 'Psicóloga',
    area: 'saude-mental',
    resumo:
      'Atendimento psicológico particular, em sigilo, e apoio à avaliação de riscos psicossociais das empresas atendidas pela clínica.',
    atua: ['Acolhimento e acompanhamento', 'Ansiedade e estresse', 'Questões do trabalho', 'Retorno ao trabalho'],
    pagina: '/para-voce/psicologia',
  },
  {
    id: 'nutricao',
    nome: 'Daiane Carla Sansel',
    registro: 'CRN-7 9920',
    papel: 'Nutricionista',
    area: 'saude',
    resumo:
      'Avaliação e plano alimentar individual, montado a partir da rotina real de quem trabalha em turno, viaja ou come fora todo dia.',
    atua: ['Plano alimentar individual', 'Reeducação alimentar', 'Rotina de turno', 'Programas para equipes'],
    pagina: '/para-voce/nutricao',
  },
  {
    id: 'fonoaudiologia',
    nome: 'Mayra Cristina Fontenelle Guides da Costa',
    registro: 'CRFa 9-1668',
    papel: 'Fonoaudióloga · Audiologia Ocupacional',
    area: 'saude',
    resumo:
      'Formada em Fonoaudiologia pelo Centro Universitário São Lucas, com atuação dedicada à audiologia ocupacional: audiometria admissional, periódica e demissional, análise dos resultados, emissão de laudo e apoio a Programas de Conservação Auditiva — inclusive em serviço de saúde ocupacional do SESI, no Rio de Janeiro.',
    atua: [
      'Audiometria ocupacional',
      'Análise e laudo audiométrico',
      'Conservação auditiva (PCA)',
      'Triagem auditiva preventiva',
    ],
  },
  {
    id: 'enfermagem',
    nome: 'Janaina Neves',
    registro: 'COREN-RO 000.431.799-ENF',
    papel: 'Enfermeira · Enfermagem do Trabalho',
    area: 'saude',
    resumo:
      'Oito anos de enfermagem clínica, com passagem por neurocirurgia e neurologia e pós-graduação em Enfermagem do Trabalho e Gestão em Segurança do Trabalho. Conduz os procedimentos da clínica, organiza o fluxo dos atendimentos em lote e acompanha a execução do cronograma do PCMSO das empresas.',
    atua: [
      'Coleta e procedimentos',
      'Curativo e injetáveis',
      'Cronograma do PCMSO',
      'Campanhas de prevenção',
    ],
  },
];

// Só entra no site quem tem nome e registro preenchidos.
export const equipePublicada = equipe.filter(
  (p) => !/[[\]]/.test(p.nome) && !/[[\]]/.test(p.registro),
);

export const equipePendente = equipe.filter((p) => !equipePublicada.includes(p));
