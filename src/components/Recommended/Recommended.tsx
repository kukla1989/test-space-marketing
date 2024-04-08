import React from 'react';

import './recommended.scss';
import img from '../../icons/recommended.avif';
import star from '../../icons/star.png';

const Recommended = () => {
  return (
    <div className="recommended">
      <img src={img} alt="dude" className="image" />

      <div className="right">
        <div className="top-right">
          <img src={star} alt="star" className="star" />

          <p className="star-text">Sugerida para você</p>
        </div>

        <a href="#form" className="r-text">Robinho é o único dos seis acusados de estupro coletivo na Itália que foi preso; entenda o que aconteceu com os amigos dele</a>
      </div>
    </div>
  );
};

export default Recommended;
