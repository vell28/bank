import React from 'react';

import { Button as ButtonEl } from './elements';

export interface IButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

export const Button: React.FC<IButtonProps> = ({ onClick, children }) => (
  <ButtonEl onClick={onClick}>{children}</ButtonEl>
);
