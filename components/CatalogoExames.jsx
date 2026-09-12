'use client';

import { useMemo, useState } from 'react';
import { examesClinicos } from '@/lib/examesClinicos';
import { whatsappUrl } from '@/lib/site';

function normalizar(texto) {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

export default function CatalogoExames() {
  const [busca, setBusca] = useState('');
  const exibidos = useMemo(() => {
    const termo = normalizar(busca.trim());
    return termo ? examesClinicos.filter((nome) => normalizar(nome).includes(termo)) : examesClinicos;
  }, [busca]);

  return (
    <div>
      <div className="busca-exames">
        <label htmlFor="busca-exame">Qual exame você procura?</label>
        <input
          id="busca-exame"
          type="search"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Ex.: hemograma, glicose, TSH..."
        />
        <span>{exibidos.length} {exibidos.length === 1 ? 'exame encontrado' : 'exames encontrados'}</span>
      </div>

      {exibidos.length ? (
        <div className="grade-exames">
          {exibidos.map((nome) => (
            <a
              className="exame-item"
              href={whatsappUrl(`Olá! Gostaria de confirmar disponibilidade, preparo e valor para o exame: ${nome}.`)}
              target="_blank"
              rel="noopener noreferrer"
              key={nome}
            >
              <strong>{nome}</strong>
              <span>Consultar →</span>
            </a>
          ))}
        </div>
      ) : (
        <div className="destaque">
          <p>Não encontramos esse nome. Fale com a equipe para verificar outras nomenclaturas ou disponibilidade.</p>
        </div>
      )}
    </div>
  );
}
