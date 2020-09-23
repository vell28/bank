import React, { useState } from 'react';

import {
  DropdownBox, ChildrenBox, SidebarDropdown as DropContainer, InnerBox
} from './elements';

interface IDropDownProps {
  children: React.ReactNode;
  render: React.ReactNode;
  isShown?: boolean;
  borderRadius?: number;
}

export const DropDown: React.FC<IDropDownProps> = ({
  children, render, isShown, borderRadius = 10
}) => {
  const [isShownState, setShown] = useState(false);
  const onClick = () => setShown(!isShownState);

  return (
    <DropdownBox>
      <ChildrenBox onClick={isShown ? onClick : null} isActive={isShown}>
        {children}
      </ChildrenBox>
      <DropContainer isShown={isShown} radius={borderRadius}>
        <InnerBox radius={borderRadius}>{render}</InnerBox>
      </DropContainer>
    </DropdownBox>
  );
};
