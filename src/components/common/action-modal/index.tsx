import React from 'react';
import { useTranslation } from 'react-i18next';

import { Portal } from '@components/portal';
import { PopupDialog } from '@components/popup/popup-overlay';

import {
  PopupTitle, PopupDescription, ActionBLock, PopupAction
} from './elements';

import { ActionBtn } from '../button/action/elements';

interface IPopupProps {
  title: string;
  description: string;
  onOk?: () => void;
  onCancel: () => void;
  onReject?: () => void;
  actionText: string;
  isShown?: boolean;
}

export const PopupBlockCard: React.FC<IPopupProps> = ({
  isShown = false,
  title,
  description,
  onOk,
  onReject,
  onCancel,
  actionText,
}) => {
  const { t } = useTranslation();
  const onActionClick = onOk || onReject || null;
  const isReject = !!onReject;
  return (
    <Portal>
      <PopupDialog isShown={isShown} onCancel={onCancel}>
        <PopupTitle>{title}</PopupTitle>
        <PopupDescription>{description}</PopupDescription>
        <ActionBLock>
          <ActionBtn onClick={onCancel}>{t('Cancel')}</ActionBtn>
          {onActionClick && (
            <PopupAction onClick={onActionClick} isReject={isReject}>
              {t(actionText)}
            </PopupAction>
          )}
        </ActionBLock>
      </PopupDialog>
    </Portal>
  );
};
