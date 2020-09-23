import React from 'react';

import { CheckboxBox, CheckMark, CheckContent } from './elements';

interface ICheckboxProps {
  isChecked: boolean;
  children?: React.ReactNode;
  onCheck: (isChecked: boolean) => void;
  size?: number;
}
export const CheckBox: React.FC<ICheckboxProps> = ({
  isChecked, children, size = 20, onCheck
}) => {
  const onCheckBoxClick = () => onCheck(!isChecked);
  return (
    <CheckboxBox onClick={onCheckBoxClick} isChecked={isChecked} size={size}>
      <CheckMark size={size} />
      <CheckContent>{children}</CheckContent>
    </CheckboxBox>
  );
};
