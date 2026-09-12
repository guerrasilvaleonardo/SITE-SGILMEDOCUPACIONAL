'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navegacao } from '@/lib/site';

export default function Cabecalho() {
  const [painel, setPainel] = useState(false); // menu do celular
  const [aberto, setAberto] = useState(null); // submenu aberto, pelo rótulo
  const topoRef = useRef(null);

  // Fecha o submenu ao clicar fora ou apertar Esc.
  useEffect(() => {
    function fora(e) {
      if (topoRef.current && !topoRef.current.contains(e.target)) setAberto(null);
    }
    function esc(e) {
      if (e.key === 'Escape') {
        setAberto(null);
        setPainel(false);
      }
    }
    document.addEventListener('click', fora);
    document.addEventListener('keydown', esc);
    return () => {
      document.removeEventListener('click', fora);
      document.removeEventListener('keydown', esc);
    };
  }, []);

  const fecharTudo = () => {
    setPainel(false);
    setAberto(null);
  };

  return (
    <header className="am-topo" ref={topoRef}>
      <style>{`
        .am-topo {
          position: sticky; top: 0; z-index: 40;
          background: #fff; border-bottom: 1px solid var(--linha);
        }
        .am-barra {
          max-width: var(--larg); margin: 0 auto; padding-inline: var(--gutter);
          min-height: 77px; display: flex; align-items: center;
          justify-content: space-between; gap: 24px;
        }
        .am-marca {
          display: flex; align-items: center; gap: 10px; flex-shrink: 0;
          font-family: var(--fonte-titulo), sans-serif; font-weight: 700;
          font-size: 21px; letter-spacing: -0.02em; color: var(--tinta); text-decoration: none;
        }
        .am-marca:hover { text-decoration: none; color: var(--tinta); }
        .am-direita { display: flex; align-items: center; gap: 26px; }
        .am-direita > .btn { white-space: nowrap; }
        .am-nav { display: flex; align-items: center; gap: 26px; }
        .am-nav > * { position: relative; }
        .am-gatilho, .am-nav a.am-simples {
          font-family: inherit; font-size: 15px; line-height: 1.2; color: var(--tinta-3);
          text-decoration: none; white-space: nowrap; background: none; border: 0;
          padding: 0; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;
        }
        .am-gatilho:hover, .am-nav a.am-simples:hover, .am-gatilho[aria-expanded="true"] { color: var(--azul); }
        .am-seta { transition: transform .15s ease; }
        .am-gatilho[aria-expanded="true"] .am-seta { transform: rotate(180deg); }

        .am-sub {
          position: absolute; top: calc(100% + 18px); left: -18px; min-width: 330px;
          background: #fff; border: 1px solid var(--linha-forte); border-radius: 4px;
          box-shadow: 0 16px 40px rgba(14, 28, 43, .13); padding: 8px; z-index: 50;
        }
        .am-sub a {
          display: block; padding: 11px 14px; border-radius: 3px; text-decoration: none;
        }
        .am-sub a:hover { background: var(--fundo); text-decoration: none; }
        .am-sub strong {
          display: block; font-family: var(--fonte-titulo), sans-serif; font-weight: 600;
          font-size: 15.5px; color: var(--tinta);
        }
        .am-sub span { display: block; font-size: 13.5px; color: var(--tinta-3); margin-top: 2px; }

        .am-hamburguer {
          display: none; width: 44px; height: 44px; align-items: center; justify-content: center;
          background: none; border: 1px solid var(--linha); border-radius: var(--raio); cursor: pointer;
        }
        .am-hamburguer i { display: block; width: 20px; height: 2px; background: var(--tinta); position: relative; }
        .am-hamburguer i::before, .am-hamburguer i::after {
          content: ''; position: absolute; left: 0; width: 20px; height: 2px; background: var(--tinta);
        }
        .am-hamburguer i::before { top: -6px; }
        .am-hamburguer i::after { top: 6px; }
        .am-painel { display: none; }

        @media (max-width: 1060px) {
          .am-nav, .am-direita > .btn { display: none; }
          .am-hamburguer { display: flex; }
          .am-painel.aberto {
            display: block; border-top: 1px solid var(--linha); background: #fff;
            max-height: calc(100vh - 77px); overflow-y: auto;
          }
          .am-painel-interno {
            max-width: var(--larg); margin: 0 auto;
            padding: 6px var(--gutter) 22px; display: flex; flex-direction: column;
          }
          .am-grupo { border-bottom: 1px solid var(--linha); padding: 14px 0 10px; }
          .am-grupo > span {
            font-family: var(--fonte-mono), monospace; font-size: 11px; letter-spacing: .12em;
            text-transform: uppercase; color: var(--tinta-4);
          }
          .am-grupo a { display: block; padding: 11px 0 0; font-size: 16px; color: var(--tinta); text-decoration: none; }
          .am-painel-interno > a.am-item {
            padding: 15px 0; border-bottom: 1px solid var(--linha);
            font-size: 16px; color: var(--tinta); text-decoration: none;
          }
          .am-painel-interno .btn { margin-top: 20px; display: block; }
        }
      `}</style>

      <div className="am-barra">
        <Link href="/" className="am-marca" onClick={fecharTudo}>
          <Image src="/logo-agilmed.webp" alt="" width={53} height={40} priority />
          <span>
            Ágil<span style={{ color: '#4CAC5E' }}>Med</span>
          </span>
        </Link>

        <div className="am-direita">
          <nav className="am-nav" aria-label="Principal">
            {navegacao.map((grupo) =>
              grupo.itens ? (
                <div key={grupo.rotulo}>
                  <button
                    type="button"
                    className="am-gatilho"
                    aria-expanded={aberto === grupo.rotulo}
                    onClick={() => setAberto(aberto === grupo.rotulo ? null : grupo.rotulo)}
                  >
                    {grupo.rotulo}
                    <svg className="am-seta" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {aberto === grupo.rotulo && (
                    <div className="am-sub">
                      {grupo.itens.map((item) => (
                        <Link key={item.href} href={item.href} onClick={fecharTudo}>
                          <strong>{item.rotulo}</strong>
                          {item.nota && <span>{item.nota}</span>}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={grupo.href} href={grupo.href} className="am-simples" onClick={fecharTudo}>
                  {grupo.rotulo}
                </Link>
              ),
            )}
          </nav>

          <Link href="/agendamento" className="btn btn-secundario btn-pequeno">
            Agendar exame
          </Link>

          <button
            type="button"
            className="am-hamburguer"
            aria-label={painel ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={painel}
            onClick={() => setPainel((v) => !v)}
          >
            <i />
          </button>
        </div>
      </div>

      <div className={`am-painel${painel ? ' aberto' : ''}`}>
        <div className="am-painel-interno">
          {navegacao.map((grupo) =>
            grupo.itens ? (
              <div className="am-grupo" key={grupo.rotulo}>
                <span>{grupo.rotulo}</span>
                {grupo.itens.map((item) => (
                  <Link key={item.href} href={item.href} onClick={fecharTudo}>
                    {item.rotulo}
                  </Link>
                ))}
              </div>
            ) : (
              <Link key={grupo.href} href={grupo.href} className="am-item" onClick={fecharTudo}>
                {grupo.rotulo}
              </Link>
            ),
          )}
          <Link href="/agendamento" className="btn btn-primario" onClick={fecharTudo}>
            Agendar exame
          </Link>
        </div>
      </div>
    </header>
  );
}
