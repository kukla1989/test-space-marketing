import React from 'react';

import './main.scss';
import Article from '../../components/Article/Article';
import Form from '../../components/Form/Form';
import Recommended from '../../components/Recommended/Recommended';
import Trends from '../../components/Trends/Trends';

export const Main = () => (
  <div className="main">
    <Article />
    <Form />
    <Recommended />
    <Trends />
  </div>
);
