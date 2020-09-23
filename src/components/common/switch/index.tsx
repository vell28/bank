import React from 'react';

import { SwitchBox, SwitchContent, Slider } from './elements';

interface ISwitchProps {
  isChecked?: boolean;
  children?: React.ReactNode;
  onCheck: (isChecked: boolean) => void;
  isDisable?: boolean;
}
export const Switch: React.FC<ISwitchProps> = ({
  isChecked, children, onCheck, isDisable
}) => {
  const onSwitchClick = () => onCheck(!isChecked);
  return (
    <SwitchBox onClick={isDisable ? null : onSwitchClick} isChecked={isChecked} isDisable={isDisable}>
      <SwitchContent>{children}</SwitchContent>
      <Slider />
    </SwitchBox>
  );
};
