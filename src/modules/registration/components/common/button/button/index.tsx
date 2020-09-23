import React from 'react';

import { Button as ButtonEl } from '../elements';

export interface IButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export const Button: React.FC<IButtonProps> = ({ onClick, children, disabled }) => (
  <ButtonEl disabled={disabled} onClick={onClick}>
    {children}
  </ButtonEl>
);
