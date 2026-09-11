import Link from 'next/link';
import { Fragment } from 'react';

export default function Trilha({ itens }) {
  return (
    <nav className="wrap trilha" aria-label="Você está em">
      {itens.map((item, i) => (
        <Fragment key={item.href}>
          {i > 0 && <span aria-hidden="true">/</span>}
          {i === itens.length - 1 ? (
            <span style={{ color: 'var(--azul)' }}>{item.rotulo}</span>
          ) : (
            <Link href={item.href}>{item.rotulo}</Link>
          )}
        </Fragment>
      ))}
    </nav>
  );
}
