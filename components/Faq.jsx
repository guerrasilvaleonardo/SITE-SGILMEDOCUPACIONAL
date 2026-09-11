export default function Faq({ perguntas, titulo = 'Perguntas frequentes' }) {
  if (!perguntas?.length) return null;
  return (
    <div>
      <div className="secao-cabeca">
        <h2>{titulo}</h2>
      </div>
      <div className="faq">
        {perguntas.map((p) => (
          <div className="faq-item" key={p.pergunta}>
            <h3>{p.pergunta}</h3>
            <p>{p.resposta}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
