import React from 'react';

import { Button } from './elements';

interface IButtonProps {
  onClick?: (data: any) => void;
  children?: React.ReactNode;
  disabled?: boolean;
  success?: boolean;
  arrow?: boolean;
}

export const NextButton: React.FC<IButtonProps> = ({
  onClick, children, disabled, success, arrow
}) => (
  <Button onClick={onClick} disabled={disabled} success={success} arrow={arrow}>
    {children}
  </Button>
);
