import React from 'react';

import {
  PopupOverlay, PopupBox, PopupInner, PopupClose
} from './elements';

interface IPopupProps {
  onCancel: () => void;
  isShown?: boolean;
  useCloseBtn?: boolean;
  className?: string;
  minHeight?: string;
}

export const PopupDialog: React.FC<IPopupProps> = ({
  isShown = false,
  onCancel,
  useCloseBtn = false,
  className = '',
  minHeight = '',
  children,
}) => {
  return (
    <PopupOverlay hidden={!isShown}>
      <PopupBox hidden={!isShown} className={className} minHeight={minHeight}>
        {useCloseBtn && <PopupClose onClick={onCancel}>+</PopupClose>}
        <PopupInner>{children}</PopupInner>
      </PopupBox>
    </PopupOverlay>
  );
};

export default PopupDialog;
