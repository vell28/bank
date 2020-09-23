import React from 'react';
import { useTranslation } from 'react-i18next';
import { PopupDialog } from '../popup-overlay';
import { PopupTitle } from './elements';

interface IPopupProps {
  onCancel?: () => any;
  isShown?: boolean;
  title?: string;
}

export const PopupNotification: React.FC<IPopupProps> = ({ isShown = false, onCancel = () => null, title = '' }) => {
  const { t } = useTranslation();

  return (
    <PopupDialog isShown={isShown} onCancel={onCancel} minHeight="320">
      <PopupTitle>{t(title)}</PopupTitle>
    </PopupDialog>
  );
};
