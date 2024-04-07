/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import './header.scss';
import G1 from '../../icons/G1';
import Loupe from '../../icons/Loupe';
import CloseSVG from '../../icons/CloseSVG';

const Header = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <header className="header">
      <div className="left">
        <div className="burger-menu">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <div className="menu">menu</div>

        <div className="squares">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
        <a href="#form" className="g1" aria-label="g1"><G1 /></a>
      </div>

      <a href="#form" className="logo">São Paulo</a>

      <div className="search">
        <input
          type="text"
          className="search-input"
          placeholder="BUSCAR"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />

        <Loupe className="loupe" />

        {inputValue && (
          <button
            className="close"
            onClick={_ => setInputValue('')}
            type="button"
            aria-label="Clear input"
          >
            <CloseSVG />
          </button>
        )}
      </div>

      <Loupe className="loupe-on-phone" />
    </header>
  );
};

export default Header;
