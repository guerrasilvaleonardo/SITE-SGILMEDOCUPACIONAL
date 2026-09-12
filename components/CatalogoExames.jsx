'use client';

import { useMemo, useState } from 'react';
import { examesClinicosDetalhados as examesClinicos } from '@/lib/examesClinicosDetalhados';
import { whatsappUrl } from '@/lib/site';

function normalizar(texto) {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

export default function CatalogoExames() {
  const [busca, setBusca] = useState('');
  const exibidos = useMemo(() => {
    const termo = normalizar(busca.trim());
    return termo ? examesClinicos.filter((exame) => normalizar(exame.nome).includes(termo)) : examesClinicos;
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
          {exibidos.map((exame) => (
            <div className="exame-item" key={exame.nome}>
              <strong>{exame.nome}</strong>
              <details>
                <summary>Saiba mais</summary>
                <p>{exame.descricao}</p>
                <small>Confirme o preparo, pois ele pode variar conforme o método e a orientação profissional.</small>
              </details>
              <a
                href={whatsappUrl(`Olá! Gostaria de confirmar disponibilidade, preparo e valor para o exame: ${exame.nome}.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar e agendar →
              </a>
            </div>
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
