'use client';

import { useMemo, useState } from 'react';
import { gruposLaboratoriais } from '@/lib/laboratoriais';
import { whatsappUrl } from '@/lib/site';

function normaliza(t) {
  return t
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');
}

export default function CatalogoLab() {
  const [busca, setBusca] = useState('');
  const [aberto, setAberto] = useState(null);

  const grupos = useMemo(() => {
    const termo = normaliza(busca.trim());
    if (!termo) return gruposLaboratoriais;
    return gruposLaboratoriais
      .map((g) => ({
        ...g,
        exames: g.exames.filter(
          (e) => normaliza(e.nome).includes(termo) || normaliza(e.avalia).includes(termo),
        ),
      }))
      .filter((g) => g.exames.length > 0);
  }, [busca]);

  const achados = grupos.reduce((n, g) => n + g.exames.length, 0);

  return (
    <div className="lab">
      <style>{`
        .lab-busca {
          display: flex; align-items: center; gap: 10px; max-width: 520px;
          border: 1px solid var(--linha-forte); border-radius: var(--raio);
          background: #fff; padding: 0 14px; margin-bottom: 10px;
        }
        .lab-busca input {
          flex: 1; border: 0; outline: none; background: none;
          font-family: inherit; font-size: 16px; color: var(--tinta);
          padding: 14px 0;
        }
        .lab-busca button {
          border: 0; background: none; cursor: pointer; color: var(--tinta-4);
          font-size: 20px; line-height: 1; padding: 4px;
        }
        .lab-contagem {
          font-family: var(--fonte-mono), monospace; font-size: 12px;
          letter-spacing: .08em; text-transform: uppercase; color: var(--tinta-4);
          margin-bottom: 30px; display: block;
        }
        .lab-grupo { margin-bottom: 38px; }
        .lab-grupo-cabeca { margin-bottom: 12px; }
        .lab-grupo-cabeca h3 { font-size: 20px; }
        .lab-grupo-cabeca p { font-size: 14.5px; color: var(--tinta-3); margin-top: 2px; }
        .lab-lista { border-top: 1px solid var(--linha); }
        .lab-item { border-bottom: 1px solid var(--linha); }
        .lab-gatilho {
          width: 100%; display: flex; align-items: center; justify-content: space-between;
          gap: 16px; padding: 15px 2px; background: none; border: 0; cursor: pointer;
          text-align: left; font-family: inherit;
        }
        .lab-gatilho:hover .lab-nome { color: var(--azul); }
        .lab-nome {
          font-family: var(--fonte-titulo), sans-serif; font-weight: 600;
          font-size: 16.5px; color: var(--tinta); line-height: 1.3;
        }
        .lab-mais {
          flex-shrink: 0; font-size: 13.5px; color: var(--azul); display: inline-flex;
          align-items: center; gap: 6px; white-space: nowrap;
        }
        .lab-seta { transition: transform .15s ease; }
        .lab-gatilho[aria-expanded="true"] .lab-seta { transform: rotate(180deg); }
        .lab-painel { padding: 2px 2px 20px; display: grid; gap: 14px; }
        .lab-campo span {
          display: block; font-family: var(--fonte-mono), monospace; font-size: 11px;
          letter-spacing: .12em; text-transform: uppercase; color: var(--tinta-4);
          margin-bottom: 3px;
        }
        .lab-campo p { font-size: 15.5px; color: var(--tinta-2); }
        .lab-vazio {
          padding: 34px 0; color: var(--tinta-3); font-size: 16px;
        }
        @media (max-width: 560px) {
          .lab-gatilho { align-items: flex-start; }
          .lab-mais span { display: none; }
        }
      `}</style>

      <div className="lab-busca">
        <svg width="17" height="17" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <circle cx="8" cy="8" r="6" stroke="var(--tinta-4)" strokeWidth="1.7" />
          <path d="M12.5 12.5L16 16" stroke="var(--tinta-4)" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
        <input
          type="search"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Procure pelo nome do exame — hemograma, TSH, glicose…"
          aria-label="Procurar exame"
        />
        {busca && (
          <button type="button" onClick={() => setBusca('')} aria-label="Limpar busca">
            ×
          </button>
        )}
      </div>

      <span className="lab-contagem">
        {achados} {achados === 1 ? 'exame encontrado' : 'exames disponíveis'}
      </span>

      {grupos.length === 0 && (
        <p className="lab-vazio">
          Não encontramos esse exame na lista. Ele pode ter outro nome, ou ser feito por
          encaminhamento — pergunte pelo WhatsApp e nós confirmamos.
        </p>
      )}

      {grupos.map((grupo) => (
        <div className="lab-grupo" key={grupo.id}>
          <div className="lab-grupo-cabeca">
            <h3>{grupo.nome}</h3>
            <p>{grupo.resumo}</p>
          </div>
          <div className="lab-lista">
            {grupo.exames.map((exame) => {
              const id = `${grupo.id}-${exame.nome}`;
              const expandido = aberto === id;
              return (
                <div className="lab-item" key={id}>
                  <button
                    type="button"
                    className="lab-gatilho"
                    aria-expanded={expandido}
                    onClick={() => setAberto(expandido ? null : id)}
                  >
                    <span className="lab-nome">{exame.nome}</span>
                    <span className="lab-mais">
                      <span>{expandido ? 'Fechar' : 'Saiba mais'}</span>
                      <svg className="lab-seta" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                        <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>

                  {expandido && (
                    <div className="lab-painel">
                      <div className="lab-campo">
                        <span>O que avalia</span>
                        <p>{exame.avalia}</p>
                      </div>
                      <div className="lab-campo">
                        <span>Preparo</span>
                        <p>{exame.preparo}</p>
                      </div>
                      <div>
                        <a
                          className="btn btn-primario btn-pequeno"
                          href={whatsappUrl(
                            `Olá! Gostaria de agendar a coleta do exame: ${exame.nome}.`,
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Agendar {exame.nome}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
