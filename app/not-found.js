import Link from 'next/link';

export const metadata = { title: 'Página não encontrada' };

export default function NaoEncontrada() {
  return (
    <section className="secao">
      <div className="wrap" style={{ maxWidth: 620 }}>
        <span className="rotulo">Erro 404</span>
        <h1 style={{ marginTop: 12 }}>Essa página não existe.</h1>
        <p className="lede" style={{ marginTop: 14 }}>
          O endereço pode ter mudado. Comece pelos exames ou fale com a nossa equipe.
        </p>
        <div className="acoes" style={{ marginTop: 20 }}>
          <Link className="btn btn-primario" href="/exames">
            Ver exames
          </Link>
          <Link className="btn btn-secundario" href="/contato">
            Falar com a ÁgilMed
          </Link>
        </div>
      </div>
    </section>
  );
}
