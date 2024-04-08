import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import './headerTop.scss';
import PersonSVG from '../../assets/icons/PersonSVG';

const linkNames = [
  ['globo.com', '#0669DE'],
  ['g1', '#C4170C'],
  ['ge', '#06AA48'],
  ['gshow', '#FF6700'],
  ['globoplay', '#FB0334'],
  ['o globo', '#1E4C9A'],
  ['guia de compras', '#C4170C'],
];
const HeaderTop = () => {
  return (
    <div className="header-top">
      <div className="left">
        {linkNames.map(link => (
          <a
            href="#form"
            className="link left-link"
            style={{ color: link[1], '--hover-line': link[1] } as React.CSSProperties}
            key={uuidv4()}
          >
            {link[0]}
          </a>
        ))}
      </div>

      <div className="h-right">
        <a href="#form" className="right-link link">Assine Já</a>

        <a href="#form" className="right-link link">
          <PersonSVG />
          {' '}
          Conta Globo
        </a>
      </div>
    </div>
  );
};

export default HeaderTop;
