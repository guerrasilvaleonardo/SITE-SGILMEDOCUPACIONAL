export const site = {
  nome: 'ÁgilMed Ocupacional',
  nomeCurto: 'ÁgilMed',
  slogan: 'Saúde · Segurança · Performance',
  url: 'https://www.agilmedocupacional.com.br',
  descricao:
    'Clínica em Porto Velho: medicina do trabalho para empresas — exames, ASO, PCMSO e riscos psicossociais — e atendimento clínico particular para a sociedade.',
  email: 'contato@agilmedocupacional.com.br',
  telefone: '(69) 99610-3879',
  telefoneRaw: '5569996103879',
  instagram: 'https://www.instagram.com/agilmedocupacional',
  endereco: {
    rua: 'Av. Prefeito Chiquilito Erse, 1027 — Sala 01',
    bairro: 'Nova Porto Velho',
    cidade: 'Porto Velho',
    uf: 'RO',
    cep: '76820-200',
  },
  responsavelTecnico: {
    nome: 'Dra. Francynelle Costa Assis',
    registro: 'CRM-RO 2477 · RQE 1920',
    especialidade: 'Medicina do Trabalho',
  },
  medicaClinica: {
    nome: 'Dra. Camila Sousa Ferreira',
    registro: 'CRM-RO 9772',
    especialidade: 'Medicina Clínica',
  },
};

export const enderecoLinha = `${site.endereco.rua} · ${site.endereco.bairro} · ${site.endereco.cidade}/${site.endereco.uf} · CEP ${site.endereco.cep}`;

export const whatsappUrl = (mensagem = 'Olá! Vim pelo site da ÁgilMed e gostaria de agendar um atendimento.') =>
  `https://wa.me/${site.telefoneRaw}?text=${encodeURIComponent(mensagem)}`;

export const navegacao = [
  {
    rotulo: 'Para você',
    href: '/para-voce',
    itens: [
      { href: '/para-voce', rotulo: 'Atendimento clínico', nota: 'Consulta, prevenção e acompanhamento' },
      { href: '/exames-clinicos', rotulo: 'Exames clínicos', nota: 'Laboratoriais e complementares' },
      { href: '/equipe', rotulo: 'Equipe médica', nota: 'Quem vai atender você' },
    ],
  },
  {
    rotulo: 'Para empresas',
    href: '/para-empresas',
    itens: [
      { href: '/para-empresas', rotulo: 'Gestão de SST', nota: 'Exames, programas e prazos num fornecedor só' },
      { href: '/exames', rotulo: 'Exames ocupacionais', nota: 'Admissional, periódico, demissional e retorno' },
      { href: '/programas-e-laudos', rotulo: 'Programas e laudos', nota: 'PCMSO, eSocial SST e gestão de afastados' },
      { href: '/riscos-psicossociais-nr1', rotulo: 'Riscos psicossociais', nota: 'A exigência da NR-1 desde maio de 2026' },
      { href: '/boletim', rotulo: 'Boletim de Antecedência', nota: 'O que vence nos próximos 90 dias' },
    ],
  },
  { rotulo: 'Blog', href: '/blog' },
];

export const rodapeLinks = [
  {
    titulo: 'Exames',
    itens: [
      { href: '/exame-admissional-porto-velho', rotulo: 'Admissional' },
      { href: '/exame-periodico-porto-velho', rotulo: 'Periódico' },
      { href: '/exame-demissional-porto-velho', rotulo: 'Demissional' },
      { href: '/exame-retorno-ao-trabalho-porto-velho', rotulo: 'Retorno ao trabalho' },
      { href: '/exame-mudanca-de-risco-porto-velho', rotulo: 'Mudança de risco' },
      { href: '/exames-complementares-porto-velho', rotulo: 'Complementares' },
    ],
  },
  {
    titulo: 'Empresas',
    itens: [
      { href: '/programas-e-laudos/pcmso', rotulo: 'PCMSO' },
      { href: '/programas-e-laudos/esocial-sst', rotulo: 'eSocial SST' },
      { href: '/programas-e-laudos/gestao-de-afastados', rotulo: 'Gestão de afastados' },
      { href: '/riscos-psicossociais-nr1', rotulo: 'Riscos psicossociais' },
      { href: '/para-empresas', rotulo: 'Gestão de SST' },
      { href: '/boletim', rotulo: 'Boletim de Antecedência' },
    ],
  },
  {
    titulo: 'ÁgilMed',
    itens: [
      { href: '/para-voce', rotulo: 'Atendimento clínico' },
      { href: '/equipe', rotulo: 'Equipe médica' },
      { href: '/sobre', rotulo: 'Sobre a clínica' },
      { href: '/blog', rotulo: 'Blog' },
      { href: '/contato', rotulo: 'Contato' },
      { href: '/privacidade', rotulo: 'Privacidade' },
      { href: '/agendamento', rotulo: 'Agendar exame' },
    ],
  },
];

export function jsonLdEmpresa() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    '@id': `${site.url}/#clinica`,
    name: site.nome,
    alternateName: 'ÁgilMed',
    description: site.descricao,
    url: `${site.url}/`,
    email: site.email,
    telephone: `+${site.telefoneRaw}`,
    medicalSpecialty: ['Occupational Medicine', 'PrimaryCare'],
    employee: [
      {
        '@type': 'Physician',
        name: site.responsavelTecnico.nome,
        medicalSpecialty: 'Occupational Medicine',
        identifier: site.responsavelTecnico.registro,
      },
      {
        '@type': 'Physician',
        name: site.medicaClinica.nome,
        medicalSpecialty: 'PrimaryCare',
        identifier: site.medicaClinica.registro,
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.endereco.rua,
      addressLocality: site.endereco.cidade,
      addressRegion: site.endereco.uf,
      postalCode: site.endereco.cep,
      addressCountry: 'BR',
    },
    areaServed: [
      { '@type': 'City', name: 'Porto Velho' },
      { '@type': 'State', name: 'Rondônia' },
    ],
    sameAs: [site.instagram],
  };
}

export function jsonLdBreadcrumb(trilha) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trilha.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.rotulo,
      item: `${site.url}${item.href}`,
    })),
  };
}

export function jsonLdFaq(perguntas) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: perguntas.map((p) => ({
      '@type': 'Question',
      name: p.pergunta,
      acceptedAnswer: { '@type': 'Answer', text: p.resposta },
    })),
  };
}

export function metadadosPagina({ titulo, descricao, caminho }) {
  const url = `${site.url}${caminho}`;
  return {
    // O nome da empresa é acrescentado uma única vez, pelo template do layout.
    title: titulo,
    description: descricao,
    alternates: { canonical: url },
    openGraph: {
      title: `${titulo} | ${site.nomeCurto}`,
      description: descricao,
      url,
      siteName: site.nome,
      locale: 'pt_BR',
      type: 'website',
    },
  };
}
