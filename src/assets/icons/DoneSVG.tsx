import React from 'react';

interface Props {
  width: string;
  height: string;
}

const DoneSVG: React.FC<Props> = ({ width, height }) => {
  return (
    <svg fill="#86BD33" width={`${width}px`} height={`${height}px`} viewBox="0 0 24 24" id="d9090658-f907-4d85-8bc1-743b70378e93" data-name="Livello 1" xmlns="http://www.w3.org/2000/svg">
      <title>prime</title>
      <path id="70fa6808-131f-4233-9c3a-fc089fd0c1c4" data-name="done circle" d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0ZM11.52,17L6,12.79l1.83-2.37L11.14,13l4.51-5.08,2.24,2Z" />
    </svg>
  );
};

export default DoneSVG;
