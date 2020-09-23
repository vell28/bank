import React from 'react';

import { ExternalPage } from '../../common/external-page';
import { ConfirmationBox } from './elements';

const CLICK_OK_BUTTON = 'clickOkButton';

interface ITopUpConfirmationProps {
  url: string;
  onSuccess: () => void;
}

export const TopUpConfirmation: React.FC<ITopUpConfirmationProps> = ({ url, onSuccess }) => {
  const onMessage = (message: string) => message === CLICK_OK_BUTTON && onSuccess();
  return (
    <ConfirmationBox>
      <ExternalPage url={url} onMessage={onMessage} />
    </ConfirmationBox>
  );
};
