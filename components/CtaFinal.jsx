import Link from 'next/link';
import { whatsappUrl } from '@/lib/site';

export default function CtaFinal({
  titulo = 'Precisa resolver isso ainda esta semana?',
  texto = 'Agende pelo WhatsApp e a gente encaixa o atendimento no primeiro horário disponível.',
  rotuloPrimario = 'Agendar pelo WhatsApp',
  mensagem,
  secundario,
}) {
  return (
    <section className="secao">
      <div className="wrap">
        <div className="cta-bloco">
          <div>
            <h2>{titulo}</h2>
            <p>{texto}</p>
          </div>
          <div className="acoes">
            <a className="btn btn-claro" href={whatsappUrl(mensagem)} target="_blank" rel="noopener noreferrer">
              {rotuloPrimario}
            </a>
            {secundario && (
              <Link className="btn" style={{ border: '1px solid #79C88A', color: '#fff' }} href={secundario.href}>
                {secundario.rotulo}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
