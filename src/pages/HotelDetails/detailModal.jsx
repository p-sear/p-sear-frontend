import React from 'react';

import { Typography } from '@material-tailwind/react';

const DetailModal = ({ isOpen, onClose }) => {
  return (
    <div className={`modal ${isOpen ? 'is-active' : ''}`}>
      <div className='modal-background' onClick={onClose}></div>
      <div className='modal-content'>
        <Typography>상세 설명</Typography>
      </div>
      <button
        className='modal-close is-large'
        aria-label='close'
        onClick={onClose}
      ></button>
    </div>
  );
};

export default DetailModal;
