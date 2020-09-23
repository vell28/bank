import React, { useState } from 'react';

import { BigRoundBtn } from 'components/common/button/big-round/elements';
import { PopupNotification } from '@components/popup/popup-notification';

export const TOP_UP_TRANSFER_MODAL = 'TOP_UP_TRANSFER_MODAL';
export type TopUpTransferModalType = 'TOP_UP_TRANSFER_MODAL';

interface ITopUpTransferProps {
  step?: any;
}

const TopUpTransfer: React.FC<ITopUpTransferProps> = () => {
  const divStyle = {
    width: '100%',
  };

  const [isShown, setIsShown] = useState<boolean>(false);
  const NOTIFICATION_TIME_OUT = 700;

  const showNotification = () => {
    setIsShown(true);
    setTimeout(() => {
      setIsShown(false);
    }, NOTIFICATION_TIME_OUT);
  };

  return (
    <div style={divStyle}>
      <BigRoundBtn onClick={showNotification}>Copy Account Details</BigRoundBtn>
      <PopupNotification isShown={isShown} title="Copied" />
    </div>
  );
};

export default TopUpTransfer;
