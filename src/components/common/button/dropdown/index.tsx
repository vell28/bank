import React from 'react';

import { DropdownBtn } from './elements';

interface ISidebarBtnProps {
  isActive: boolean;
  onClick: (checked: boolean) => void;
  children: React.ReactNode;
}

export const SidebarDropBtn: React.FC<ISidebarBtnProps> = ({ children, onClick, isActive }) => {
  const toggleActive = () => onClick(!isActive);
  return (
    <DropdownBtn onClick={toggleActive} data-active={isActive} rotate={isActive ? 180 : 0}>
      {children}
    </DropdownBtn>
  );
};
