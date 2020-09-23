import React from 'react';

import { CloseBtnBox } from './elements';

interface ICloseBtnProps {
  onClick: () => any;
}

/* tslint:disable:max-line-length */
export const CloseBtn: React.FC<ICloseBtnProps> = ({ onClick }) => {
  return (
    <CloseBtnBox onClick={onClick}>
      <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.263 6L12 10.737 10.737 12 6 7.263 1.263 12 0 10.737 4.737 6 0 1.263 1.263 0 6 4.737 10.737 0 12 1.263z" />
      </svg>
    </CloseBtnBox>
  );
};
/* tslint:disable:max-line-length */
