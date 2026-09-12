'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navegacao } from '@/lib/site';

export default function Cabecalho() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="am-topo">
      <style>{`
        .am-topo {
          position: sticky;
          top: 0;
          z-index: 40;
          background: #fff;
          border-bottom: 1px solid var(--linha);
        }
        .am-barra {
          max-width: var(--larg);
          margin: 0 auto;
          padding-inline: var(--gutter);
          min-height: 77px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .am-marca {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          font-family: var(--fonte-titulo), sans-serif;
          font-weight: 700;
          font-size: 21px;
          letter-spacing: -0.02em;
          color: var(--tinta);
          text-decoration: none;
        }
        .am-marca:hover { text-decoration: none; color: var(--tinta); }
        .am-direita { display: flex; align-items: center; gap: 26px; }
        .am-direita .btn { white-space: nowrap; }
        .am-nav { display: flex; align-items: center; gap: 22px; }
        .am-nav a {
          font-size: 15px;
          line-height: 1.2;
          color: var(--tinta-3);
          text-decoration: none;
          white-space: nowrap;
        }
        .am-nav a:hover { color: var(--azul); text-decoration: none; }
        .am-hamburguer {
          display: none;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          background: none;
          border: 1px solid var(--linha);
          border-radius: var(--raio);
          cursor: pointer;
        }
        .am-hamburguer span {
          display: block;
          width: 20px;
          height: 2px;
          background: var(--tinta);
          position: relative;
        }
        .am-hamburguer span::before,
        .am-hamburguer span::after {
          content: '';
          position: absolute;
          left: 0;
          width: 20px;
          height: 2px;
          background: var(--tinta);
        }
        .am-hamburguer span::before { top: -6px; }
        .am-hamburguer span::after { top: 6px; }
        .am-painel { display: none; }

        @media (max-width: 1060px) {
          .am-nav, .am-direita .btn { display: none; }
          .am-hamburguer { display: flex; }
          .am-painel.aberto {
            display: block;
            border-top: 1px solid var(--linha);
            background: #fff;
          }
          .am-painel-interno {
            max-width: var(--larg);
            margin: 0 auto;
            padding: 10px var(--gutter) 20px;
            display: flex;
            flex-direction: column;
          }
          .am-painel-interno a.am-item {
            padding: 15px 0;
            border-bottom: 1px solid var(--linha);
            font-size: 16px;
            color: var(--tinta);
            text-decoration: none;
          }
          .am-painel-interno .btn { margin-top: 18px; display: block; }
        }
      `}</style>

      <div className="am-barra">
        <Link href="/" className="am-marca" onClick={() => setAberto(false)}>
          <Image src="/logo-agilmed.webp" alt="" width={53} height={40} priority />
          <span>
            Ágil<span style={{ color: '#4CAC5E' }}>Med</span>
          </span>
        </Link>

        <div className="am-direita">
          <nav className="am-nav" aria-label="Principal">
            {navegacao.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.rotulo}
              </Link>
            ))}
          </nav>

          <Link href="/agendamento" className="btn btn-secundario btn-pequeno">
            Agendar exame
          </Link>

          <button
            type="button"
            className="am-hamburguer"
            aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={aberto}
            onClick={() => setAberto((v) => !v)}
          >
            <span />
          </button>
        </div>
      </div>

      <div className={`am-painel${aberto ? ' aberto' : ''}`}>
        <div className="am-painel-interno">
          {navegacao.map((item) => (
            <Link key={item.href} href={item.href} className="am-item" onClick={() => setAberto(false)}>
              {item.rotulo}
            </Link>
          ))}
          <Link href="/agendamento" className="btn btn-primario" onClick={() => setAberto(false)}>
            Agendar exame
          </Link>
        </div>
      </div>
    </header>
  );
}
