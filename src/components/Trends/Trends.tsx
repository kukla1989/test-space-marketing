import React from 'react';
import { v4 as uuid } from 'uuid';

import './trends.scss';
import trend from '../../icons/trend.png';
import img1 from '../../icons/trends/1.avif';
import img2 from '../../icons/trends/2.webp';
import img3 from '../../icons/trends/3.avif';
import img4 from '../../icons/trends/4.avif';
import img5 from '../../icons/trends/5.avif';

const trendTitles: string[] = [
  'Morre morador suspeito de cortar corda que segurava trabalhador durante limpeza em prédio de Curitiba',
  ' Orgasmo na academia: ciência explica por que o prazer feminino não precisa de estímulo sexual no coreorgasmo',
  'México suspende relações diplomáticas com o Equador após ter embaixada em Quito invadida',
  'Polícia pede novamente à Justiça prisão de motorista do Porsche que matou homem de 52 anos durante acidente na Zona Leste de SP',
  'Greta Thunberg é detida por polícia holandesa em manifestação em Haia',
];
const trendImgs = [img1, img2, img3, img4, img5];
const Trends = () => {
  return (
    <div className="trends">
      <div className="t-top">
        <img src={trend} alt="trend" className="trend-ico" />
        <h3 className="t-title">
          Mais
        </h3>
        <h3 className="t-title bold">lidas</h3>
      </div>
      {trendTitles.map((title, ind) => (
        <div className="t-container" key={uuid()}>
          <div className="trend">
            <div className="position">{ind + 1}</div>

            <a href="#form" className="t-link">{title}</a>

            <img src={trendImgs[ind]} alt="data" className="t-img" />
          </div>

          <div className="t-line"></div>
        </div>

      ))}
    </div>
  );
};

export default Trends;
