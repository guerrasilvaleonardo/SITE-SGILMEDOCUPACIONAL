import { site, whatsappUrl } from '@/lib/site';

export default function RedesSociais({ compacto = false }) {
  return (
    <div className={`redes-sociais${compacto ? ' redes-compactas' : ''}`} aria-label="Redes sociais da Agilmed">
      <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram da Agilmed" title="Instagram">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4.2" />
          <circle cx="17.4" cy="6.8" r="1" className="icone-preenchido" />
        </svg>
      </a>
      <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp da Agilmed" title="WhatsApp">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.5 11.7a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.4-4.4a8.4 8.4 0 1 1 15.6-4.4Z" />
          <path d="M8.3 7.7c.2-.4.5-.4.8-.4h.5c.2 0 .4.1.5.4l.8 1.8c.1.3.1.5-.1.7l-.6.7c-.2.2-.2.4-.1.6.5 1 1.3 1.8 2.3 2.3.2.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.2l1.8.9c.3.1.4.3.4.5 0 .4-.2 1.4-.7 1.9-.6.6-1.5.9-2.5.7-1.2-.2-2.8-.8-4.6-2.4-1.4-1.3-2.5-3-2.8-4.3-.3-1 .1-1.7.5-2.1Z" />
        </svg>
      </a>
    </div>
  );
}
