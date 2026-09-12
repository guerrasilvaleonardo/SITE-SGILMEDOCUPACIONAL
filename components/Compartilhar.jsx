'use client';

import { useState } from 'react';

export default function Compartilhar({ titulo, url }) {
  const [copiado, setCopiado] = useState(false);

  const t = encodeURIComponent(titulo);
  const u = encodeURIComponent(url);

  const redes = [
    {
      nome: 'WhatsApp',
      href: `https://wa.me/?text=${t}%20${u}`,
      icone: (
        <path d="M12 2a9.9 9.9 0 0 0-8.5 15l-1.4 5 5.2-1.4A9.9 9.9 0 1 0 12 2Zm5.8 14.1c-.2.7-1.4 1.3-2 1.4-.5.1-1.1.1-1.8-.1a14 14 0 0 1-4.9-3.3 10 10 0 0 1-2-3c-.2-.8 0-1.6.3-2 .2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.4l.8 2c.1.2 0 .4-.1.5l-.4.5c-.1.2-.3.3-.1.6a9 9 0 0 0 1.6 2 8 8 0 0 0 2.3 1.4c.3.1.4.1.6-.1l.8-1c.2-.2.3-.2.6-.1l2 1c.3.1.4.2.5.3v1Z" />
      ),
    },
    {
      nome: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
      icone: (
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05a4.2 4.2 0 0 1 3.75-2c4 0 4.75 2.6 4.75 6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2.05 1.4-2.05 2.8V21h-4V9Z" />
      ),
    },
    {
      nome: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
      icone: (
        <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5h1.65V4.6A22 22 0 0 0 14.3 4.5c-2.4 0-4 1.45-4 4.1v2.3H7.6V14h2.7v8h3.2Z" />
      ),
    },
  ];

  function copiar() {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(
        () => {
          setCopiado(true);
          setTimeout(() => setCopiado(false), 2000);
        },
        () => {},
      );
    }
  }

  return (
    <div className="cmp">
      <style>{`
        .cmp {
          display: flex; flex-wrap: wrap; align-items: center; gap: 12px 16px;
          margin-top: 40px; padding-top: 22px; border-top: 1px solid var(--linha);
        }
        .cmp-rotulo {
          font-family: var(--fonte-mono), monospace; font-size: 11.5px; letter-spacing: .12em;
          text-transform: uppercase; color: var(--tinta-4); margin-right: 2px;
        }
        .cmp-botoes { display: flex; flex-wrap: wrap; gap: 9px; }
        .cmp a, .cmp button {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: inherit; font-size: 14px; font-weight: 500; line-height: 1;
          padding: 9px 14px; border-radius: 3px; cursor: pointer;
          border: 1px solid var(--linha-forte); background: #fff; color: var(--tinta-2);
          text-decoration: none; white-space: nowrap;
        }
        .cmp a:hover, .cmp button:hover {
          background: var(--azul); border-color: var(--azul); color: #fff; text-decoration: none;
        }
        .cmp a:focus-visible, .cmp button:focus-visible {
          outline: 2px solid var(--azul-claro); outline-offset: 2px;
        }
        .cmp svg { flex-shrink: 0; }
        .cmp .copiado { background: var(--verde-claro); border-color: var(--verde-claro); color: #fff; }
      `}</style>

      <span className="cmp-rotulo">Compartilhe</span>
      <div className="cmp-botoes">
        {redes.map((r) => (
          <a
            key={r.nome}
            href={r.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Compartilhar no ${r.nome}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              {r.icone}
            </svg>
            {r.nome}
          </a>
        ))}
        <button type="button" onClick={copiar} className={copiado ? 'copiado' : undefined}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            {copiado ? (
              <path d="M4 12.5 9 17.5 20 6.5" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <>
                <rect x="9" y="9" width="11" height="11" rx="2" />
                <path d="M5 15V5a2 2 0 0 1 2-2h10" strokeLinecap="round" />
              </>
            )}
          </svg>
          {copiado ? 'Link copiado' : 'Copiar link'}
        </button>
      </div>
    </div>
  );
}
