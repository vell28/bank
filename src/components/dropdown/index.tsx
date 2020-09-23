import React, { useState } from 'react';

import {
  DropdownBox, ChildrenBox, DropContainer, InnerBox
} from './elements';

interface IBarDropDownProps {
  children: React.ReactNode;
  render: React.ReactNode;
  isShown?: boolean;
  borderRadius?: number;
}

export const SidebarDropDown: React.FC<IBarDropDownProps> = ({
  children, render, isShown, borderRadius = 25
}) => {
  const [isShownState, setShown] = useState(false);

  let show = isShownState;
  let onClick = () => setShown(!isShownState);
  if (isShown !== undefined) {
    show = isShown;
    onClick = () => null;
  }

  return (
    <DropdownBox>
      <ChildrenBox onClick={onClick}>{children}</ChildrenBox>
      <DropContainer className={show ? 'shown' : ''} radius={borderRadius}>
        <InnerBox radius={borderRadius}>{render}</InnerBox>
      </DropContainer>
    </DropdownBox>
  );
};
