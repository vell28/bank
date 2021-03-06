import React from 'react';

import { Button } from './elements';

interface IButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

export const CloseButton: React.FC<IButtonProps> = ({ onClick, children }) => (
  <Button onClick={onClick}>{children}</Button>
);
