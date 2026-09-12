'use client';

import { useState } from 'react';
import { site, whatsappUrl } from '@/lib/site';

// Na versão estática (publicada por arrastar a pasta na Vercel) não existe rota de API:
// o formulário monta a mensagem e abre o WhatsApp, em vez de deixar o envio quebrado.
const MODO_ESTATICO = process.env.NEXT_PUBLIC_MODO_ESTATICO === '1';

export default function Formulario({
  origem,
  campos = ['empresa', 'nome', 'email', 'telefone'],
  rotuloEnvio = 'Enviar',
  textoSucesso = 'Recebemos seu contato. Respondemos em até 1 dia útil.',
}) {
  const [estado, setEstado] = useState('parado');
  const [erro, setErro] = useState('');

  async function enviar(evento) {
    evento.preventDefault();
    setErro('');
    setEstado('enviando');

    const form = new FormData(evento.currentTarget);
    const dados = Object.fromEntries(form.entries());
    dados.origem = origem;

    if (MODO_ESTATICO) {
      const rotulos = {
        empresa: 'Empresa',
        cnpj: 'CNPJ',
        nome: 'Nome',
        email: 'E-mail',
        telefone: 'Telefone',
        colaboradores: 'Colaboradores',
        mensagem: 'Mensagem',
      };
      const linhas = Object.entries(rotulos)
        .filter(([chave]) => dados[chave])
        .map(([chave, rotulo]) => `${rotulo}: ${dados[chave]}`);
      const texto = `Olá! Vim pelo site (${origem}).\n\n${linhas.join('\n')}`;
      window.open(whatsappUrl(texto), '_blank', 'noopener');
      setEstado('enviado');
      return;
    }

    try {
      const resposta = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados),
      });
      const json = await resposta.json();
      if (!resposta.ok || !json.ok) {
        throw new Error(json.erro || 'Não foi possível enviar agora.');
      }
      setEstado('enviado');
    } catch (e) {
      setEstado('parado');
      setErro(e.message || 'Não foi possível enviar agora.');
    }
  }

  if (estado === 'enviado') {
    return (
      <div className="destaque" role="status">
        <span className="rotulo">Recebido</span>
        <p style={{ fontSize: 16.5 }}>{textoSucesso}</p>
        <p style={{ marginTop: 10 }}>
          Se for urgente, chame no WhatsApp:{' '}
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
            {site.telefone}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={enviar} noValidate>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} aria-hidden="true" />

      {campos.includes('empresa') && (
        <div className="campo">
          <label htmlFor={`${origem}-empresa`}>Nome da empresa</label>
          <input id={`${origem}-empresa`} name="empresa" type="text" autoComplete="organization" />
        </div>
      )}

      {campos.includes('cnpj') && (
        <div className="campo">
          <label htmlFor={`${origem}-cnpj`}>CNPJ</label>
          <input id={`${origem}-cnpj`} name="cnpj" type="text" inputMode="numeric" placeholder="00.000.000/0001-00" />
        </div>
      )}

      <div className="campo">
        <label htmlFor={`${origem}-nome`}>Seu nome</label>
        <input id={`${origem}-nome`} name="nome" type="text" required autoComplete="name" />
      </div>

      {campos.includes('email') && (
        <div className="campo">
          <label htmlFor={`${origem}-email`}>E-mail</label>
          <input id={`${origem}-email`} name="email" type="email" autoComplete="email" />
        </div>
      )}

      {campos.includes('telefone') && (
        <div className="campo">
          <label htmlFor={`${origem}-telefone`}>Telefone ou WhatsApp</label>
          <input id={`${origem}-telefone`} name="telefone" type="tel" autoComplete="tel" />
        </div>
      )}

      {campos.includes('colaboradores') && (
        <div className="campo">
          <label htmlFor={`${origem}-colaboradores`}>Número de colaboradores</label>
          <input id={`${origem}-colaboradores`} name="colaboradores" type="text" inputMode="numeric" />
        </div>
      )}

      {campos.includes('mensagem') && (
        <div className="campo">
          <label htmlFor={`${origem}-mensagem`}>Mensagem</label>
          <textarea id={`${origem}-mensagem`} name="mensagem" />
        </div>
      )}

      {erro && (
        <p style={{ color: 'var(--vermelho)', fontSize: 15, margin: 0 }} role="alert">
          {erro} Você também pode falar direto no{' '}
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          .
        </p>
      )}

      <button className="btn btn-primario" type="submit" disabled={estado === 'enviando'}>
        {estado === 'enviando' ? 'Enviando…' : rotuloEnvio}
      </button>

      <p className="form-nota">
        Usamos seus dados apenas para responder a este contato.
      </p>
    </form>
  );
}
