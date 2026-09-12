import { site } from '@/lib/site';

export const runtime = 'nodejs';

const LIMITE = 4000;

function limpar(valor = '') {
  return String(valor).slice(0, 400).replace(/[\r\n]+/g, ' ').trim();
}

export async function POST(request) {
  let dados;
  try {
    dados = await request.json();
  } catch {
    return Response.json({ ok: false, erro: 'Dados inválidos.' }, { status: 400 });
  }

  // Armadilha simples contra robô: campo escondido no formulário.
  if (dados.website) {
    return Response.json({ ok: true });
  }

  const origem = limpar(dados.origem || 'site');
  const nome = limpar(dados.nome);
  const empresa = limpar(dados.empresa);
  const email = limpar(dados.email);
  const telefone = limpar(dados.telefone);
  const cnpj = limpar(dados.cnpj);
  const colaboradores = limpar(dados.colaboradores);
  const mensagem = limpar(dados.mensagem).slice(0, LIMITE);

  if (!nome || (!email && !telefone)) {
    return Response.json(
      { ok: false, erro: 'Informe ao menos o nome e uma forma de contato.' },
      { status: 400 },
    );
  }

  if (origem === 'boletim' && !cnpj) {
    return Response.json(
      { ok: false, erro: 'Informe o CNPJ cliente para solicitar a ativação do boletim.' },
      { status: 400 },
    );
  }

  const linhas = [
    `Origem: ${origem}`,
    `Nome: ${nome}`,
    empresa && `Empresa: ${empresa}`,
    cnpj && `CNPJ: ${cnpj}`,
    email && `E-mail: ${email}`,
    telefone && `Telefone: ${telefone}`,
    colaboradores && `Colaboradores: ${colaboradores}`,
    mensagem && `Mensagem: ${mensagem}`,
  ].filter(Boolean);

  const corpo = linhas.join('\n');
  const chave = process.env.RESEND_API_KEY;
  const remetente = process.env.EMAIL_REMETENTE;

  if (!chave || !remetente) {
    // Sem provedor configurado: registra no log da Vercel para não perder o contato.
    console.warn('[lead] provedor de e-mail não configurado\n' + corpo);
    return Response.json({
      ok: true,
      aviso: 'registrado',
    });
  }

  try {
    const resposta = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${chave}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: remetente,
        to: [process.env.EMAIL_DESTINO || site.email],
        reply_to: email || undefined,
        subject: `Novo contato pelo site — ${origem}${empresa ? ` — ${empresa}` : ''}`,
        text: corpo,
      }),
    });

    if (!resposta.ok) {
      console.error('[lead] falha no envio', await resposta.text());
      return Response.json({ ok: false, erro: 'Não foi possível enviar agora.' }, { status: 502 });
    }
  } catch (erro) {
    console.error('[lead] erro de rede', erro);
    return Response.json({ ok: false, erro: 'Não foi possível enviar agora.' }, { status: 502 });
  }

  return Response.json({ ok: true });
}
