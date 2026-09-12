import Link from 'next/link';
import Image from 'next/image';
import { navegacao, site } from '@/lib/site';

export default function Cabecalho() {
  return (
    <header className="topo">
      <div className="wrap topo-interno">
        <div className="topo-esquerda">
          <Link href="/" className="marca">
            <Image src="/logo-agilmed.webp" alt="" width={53} height={40} priority />
            <span className="marca-nome">Ágil<span>Med</span></span>
          </Link>
          <nav className="menu" aria-label="Principal">
            {navegacao.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.rotulo}
              </Link>
            ))}
          </nav>
        </div>
        <div className="topo-contato">
          <a className="topo-tel" href={`tel:+${site.telefoneRaw}`}>
            {site.telefone}
          </a>
          <Link href="/agendamento" className="btn btn-secundario btn-pequeno">
            Agendar exame
          </Link>
        </div>
      </div>
    </header>
  );
}
