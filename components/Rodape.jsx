import Link from 'next/link';
import { site, rodapeLinks } from '@/lib/site';
import RedesSociais from '@/components/RedesSociais';

export default function Rodape() {
  const ano = new Date().getFullYear();
  return (
    <footer className="rodape">
      <div className="wrap">
        <div className="rodape-grade">
          <div>
            <div className="rodape-marca">
              ÁgilMed<span style={{ color: '#4CAC5E' }}>.</span>
            </div>
            <p style={{ marginTop: 12, lineHeight: 1.6 }}>
              Medicina do trabalho para empresas e atendimento clínico para a sociedade, em Porto
              Velho. Exames, PCMSO, riscos psicossociais e consulta clínica.
            </p>
            <p style={{ marginTop: 16, lineHeight: 1.7 }}>
              {site.endereco.rua}
              <br />
              {site.endereco.bairro} · {site.endereco.cidade}/{site.endereco.uf}
              <br />
              CEP {site.endereco.cep}
            </p>
            <p style={{ marginTop: 14, lineHeight: 1.7 }}>
              <a href={`tel:+${site.telefoneRaw}`}>{site.telefone}</a>
              <br />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>

            <h4 style={{ marginTop: 24 }}>Acompanhe a ÁgilMed</h4>
            <RedesSociais />
          </div>

          {rodapeLinks.map((coluna) => (
            <div key={coluna.titulo}>
              <h4>{coluna.titulo}</h4>
              <ul>
                {coluna.itens.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.rotulo}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rodape-base">
          <div>
            © {ano} {site.nome}. Todos os direitos reservados.
          </div>
          <div>
            Responsável técnica — Medicina do Trabalho: {site.responsavelTecnico.nome} ·{' '}
            {site.responsavelTecnico.registro}
            <br />
            Médica clínica: {site.medicaClinica.nome} · {site.medicaClinica.registro}
          </div>
          <div>
            <Link href="/privacidade">Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
