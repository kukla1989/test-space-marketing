import React from 'react';

import './done.scss';
import DoneSVG from '../../assets/icons/DoneSVG';

const Done = () => {
  return (
    <div className="done">
      <DoneSVG width="300" height="300" />
      <h1>Thank you!</h1>
      <h2>Your submission has been sent.</h2>
    </div>
  );
};

export default Done;
