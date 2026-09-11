import Link from 'next/link';
import { site, rodapeLinks } from '@/lib/site';

export default function Rodape() {
  const ano = new Date().getFullYear();
  return (
    <footer className="rodape">
      <div className="wrap">
        <div className="rodape-grade">
          <div>
            <div className="rodape-marca">
              ÁgilMed<span style={{ color: '#1573BE' }}>.</span>
            </div>
            <p style={{ marginTop: 12, lineHeight: 1.6 }}>
              Clínica de medicina do trabalho e saúde ocupacional em Porto Velho. Exames, PCMSO,
              riscos psicossociais e gestão de SST com equipe multidisciplinar.
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
            Responsável técnico: {site.responsavelTecnico.nome} · {site.responsavelTecnico.registro}
          </div>
          <div>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
