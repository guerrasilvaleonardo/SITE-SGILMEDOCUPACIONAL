import Link from 'next/link';
import { site, whatsappUrl } from '@/lib/site';

export const metadata = {
  title: 'Recebemos seu contato',
  description: 'Obrigado pelo contato com a ÁgilMed Ocupacional.',
  robots: { index: false, follow: false },
};

export default function Obrigado() {
  return (
    <section className="secao">
      <div className="wrap" style={{ maxWidth: 640 }}>
        <span className="rotulo">Recebido</span>
        <h1 style={{ marginTop: 12 }}>Obrigado pelo contato.</h1>
        <p className="lede" style={{ marginTop: 14 }}>
          Nossa equipe responde em até 1 dia útil. Se for urgente, fale direto no WhatsApp{' '}
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
            {site.telefone}
          </a>
          .
        </p>
        <div className="acoes" style={{ marginTop: 20 }}>
          <Link className="btn btn-primario" href="/">
            Voltar ao início
          </Link>
          <Link className="btn btn-secundario" href="/blog">
            Ler o blog
          </Link>
        </div>
      </div>
    </section>
  );
}
