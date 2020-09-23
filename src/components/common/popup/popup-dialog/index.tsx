import React from 'react';
import { useTranslation } from 'react-i18next';

import { Portal } from '@components/portal';
import { PopupDialog } from '@components/popup/popup-overlay';
import { SpinnerWrapper } from '@components/spinner';

import {
  PopupTitle, PopupDescription, ActionBLock, PopupAction, PopupChildrenBox
} from './elements';

interface IPopupProps {
  title: string;
  description: string;
  onOk?: () => void;
  onCancel: () => void;
  onReject?: () => void;
  actionText: string;
  isShown?: boolean;
  isLoading?: boolean;
  addingClassNames?: string;
}

export const PopupBlockCard: React.FC<IPopupProps> = ({
  isShown = false,
  title,
  description,
  onOk,
  onReject,
  onCancel,
  actionText,
  isLoading = false,
  addingClassNames = '',
}) => {
  const { t } = useTranslation();
  const onActionClick = onOk || onReject || null;
  const isReject = !!onReject;
  return (
    <Portal>
      <PopupDialog isShown={isShown} onCancel={onCancel}>
        <PopupChildrenBox className={addingClassNames}>
          <PopupTitle>{t(title)}</PopupTitle>
          <PopupDescription>{t(description)}</PopupDescription>
          <ActionBLock>
            <SpinnerWrapper isLoading={isLoading}>
              <PopupAction onClick={onCancel}>{t('Cancel')}</PopupAction>
              {onActionClick && (
                <PopupAction onClick={onActionClick} isReject={isReject}>
                  {t(actionText)}
                </PopupAction>
              )}
            </SpinnerWrapper>
          </ActionBLock>
        </PopupChildrenBox>
      </PopupDialog>
    </Portal>
  );
};
